const {Sequelize, db} = require('../connection');
const Clan = require('./clan');
const Post = require('./post');

const UserModel = db.define('user', {
  email: {
    type: Sequelize.STRING(40),
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false
  },
  screen_name: {
    type: Sequelize.STRING(40),
    allowNull: false
  }
});

UserModel.prototype.toJSON = function() {
  let values = this.dataValues;
  delete values.password;
  return values;
};

let User = {model: UserModel};

const privateData = ['password'];

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
 * Model.update returns an array with the affected row count and the rows affected.
 * It should be decided how that is returned later.
 */
User.update = (query, values) => {
  return UserModel.update({values: values}, {where: query});
};

module.exports = User;