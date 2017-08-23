const SteamStrategy = require('passport-steam').Strategy;

let STEAM_API_KEY = process.env.STEAM_API_KEY;
let STEAM_ORIGIN_URL = process.env.STEAM_ORIGIN_URL;
let STEAM_CALLBACK_URL = process.env.STEAM_CALLBACK_URL;

if (!(STEAM_API_KEY && STEAM_CALLBACK_URL && STEAM_ORIGIN_URL)) {
  const steamConfig = require('../configs/steam.json');
  STEAM_API_KEY = steamConfig.STEAM_API_KEY;
  STEAM_ORIGIN_URL = steamConfig.STEAM_ORIGIN_URL;
  STEAM_CALLBACK_URL = steamConfig.STEAM_CALLBACK_URL;
}


module.exports = (passport, userModel) => {
  let User = userModel;
  passport.use(new SteamStrategy(
    {
      apiKey: STEAM_API_KEY,
      realm: STEAM_ORIGIN_URL,
      returnURL: STEAM_CALLBACK_URL
    },
    (id, profile, done) => {
      process.nextTick(() => {
        User.findOne({
          where: {
            steam_id: profile.id
          }
        })
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            User.create({
              steam_id: profile.id,
              steam_avatar_image_url: profile._json.avatarfull,
              steam_profile_url: profile._json.profileurl,
              steam_screen_name: profile._json.personaname,
              steam_real_name: profile._json.realname
            })
            .then((newUser) => {
              return done(null, newUser);
            });
          }
        })
        .catch((err) => {
          return done(err);
        });
      });
    }
  ));
};