const {User, Clan, Forum, Post, PostVote} = require('../../database');
const {expect} = require('chai');
const {db} = require('../../database/connection');

let user = {username: 'fred_zirdung', password: 'fred_zirdung'};
let user2 = {username: 'test_user_please_ignore', password: 'test_user_please_ignore'};
let clan = {name: 'test_clan_please_ignore', userId: 0};
let forum = {name: 'test_forum_please_ignore', clanId: 0};
let post = {
  userId: 0, 
  forumId: 0,
  title: 'test_post_please_ignore', 
  body: 'test_body_please_ignore',
};

describe('PostVote Schema', () => {
  beforeEach((done) => {
    db.sync({force: true})
      .then(() => {
        done();
      });
  });

  it('users can upvote on Posts', (done) => {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.forumId;
        return Post.create(post);
      })
      .then((newPost) => {
        post.id = newPost.id;
        expect(newPost).to.exist;
        expect(newPost.title).to.equal(post.title);
        expect(newPost.body).to.equal(post.body);
        expect(newPost.userId).to.equal(post.userId);
        expect(newPost.forumId).to.equal(post.forumId);
        return PostVote.create({
          userId: clan.userId, 
          postId: newPost.id, 
          upvote: true
        });
      })
      .then(newVote => {
        return PostVote.count({postId: post.id});
      })
      .then(votes => {
        expect(votes[0]).to.equal(1);
        expect(votes[1]).to.equal(0);
        done();
      });
  });
  
  it('users cant upvote on Posts more than once', (done) => {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.forumId;
        return Post.create(post);
      })
      .then((newPost) => {
        post.id = newPost.id;
        return PostVote.create({
          userId: clan.userId, 
          postId: newPost.id, 
          upvote: true
        });
      })
      .then((newPost) => {
        return PostVote.create({
          userId: clan.userId, 
          postId: post.id, 
          upvote: true
        });
      })
      .then(newVote => {
        return PostVote.count({postId: post.id});
      })
      .then(votes => {
        expect(votes[0]).to.equal(1);
        expect(votes[1]).to.equal(0);
        done();
      });
  });

  it('users can downboat Posts they have upboated', (done) => {
    User.create(user)
      .then(newUser => {
        clan.userId = newUser.id;
        post.userId = newUser.id;
        return Clan.model.create(clan);
      })
      .then(newClan => {
        clan.id = newClan.id;
        forum.clanId = newClan.id;
        return Forum.create(forum);
      })
      .then(newForum => {
        post.forumId = newForum.forumId;
        return Post.create(post);
      })
      .then((newPost) => {
        post.id = newPost.id;
        return PostVote.create({
          userId: clan.userId, 
          postId: newPost.id, 
          upvote: true
        });
      })
      .then((newPost) => {
        return PostVote.create({
          userId: clan.userId, 
          postId: post.id, 
          downvote: true 
        });
      })
      .then(newVote => {
        return PostVote.count({postId: post.id});
      })
      .then(votes => {
        expect(votes[0]).to.equal(0);
        expect(votes[1]).to.equal(1);
        done();
      });
  });
});