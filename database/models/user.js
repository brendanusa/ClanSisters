/**
 * @todo Switch from sha256 to bcrypt
 */

const crypto = require('crypto');
const {Sequelize, db} = require('../connection');
const Clan = require('./clan');
const Post = require('./post');

const hashData = (data, salt = '') => {
  let shasum = crypto.createHash('sha256');
  shasum.update(data + salt);
  return shasum.digest('hex');
};

const UserModel = db.define('user', {
  username: {
    type: Sequelize.STRING(40),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING(64),
  }
}, {
  hooks: {
    beforeCreate: (user) => {
      user.salt = crypto.randomBytes(32).toString('hex');
      user.password = hashData(user.password, user.salt);
    }
  }
});

UserModel.prototype.toJSON = function() {
  let values = this.dataValues;

  delete values.password;
  delete values.salt;

  return values;
};

let User = {model: UserModel};

const privateData = ['password', 'salt'];

const joinArray = [
  {
    model: Clan.model,
    association: 'memberships',
  },
  {
    model: Post.model,
    association: 'posts',
  },
];

User.create = ({username, password}) => {
  return UserModel.findOrCreate({
    where: {username},
    defaults: {password}
  })
    .spread((user, created) => {
      if (!created) {
        throw new Error('User already exists');
      }

      return user.reload({
        include: joinArray
      });
    })
    .then(user => user.toJSON());
};

User.validate = ({username, password}) => {
  return UserModel.findOne({where: {username}})
    .then((user) => {
      if (user && user.password === hashData(password, user.salt)) {
        return user.reload({
          include: joinArray
        })
          .then(user => user.toJSON());
      } else {
        return null;
      }
    });
};

User.findAll = (query = {}) => {
  return UserModel.findAll({
    where: query,
    attributes: {
      exclude: privateData
    }, 
    include: joinArray
  })
    .map(user => user.toJSON());
};

User.read = User.find = (query = {}) => {
  return UserModel.findOne({
    where: query,
    attributes: {
      exclude: privateData
    }, 
    include: joinArray
  })
    .then(user => user && user.toJSON());
};

/**
 * @todo test coverage for update!
 * @todo generate new password hash?
 * Model.update returns an array with the affected row count and the rows affected.
 * It should be decided how that is returned later.
 */
User.update = (query, values) => {
  return UserModel.update({values: values}, {where: query});
};

/**
 * Model.destroy returns the rows affected and does not need to be sanitized.
 */
User.delete = (query) => {
  return UserModel.destroy({where: query});
};

module.exports = User;