const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');
const models = require('./models');

const validPassword = (user, password) => {
  return bcrypt.compareSync(password, user.password);
};

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    models.User.findOne({
      where: {
        id
      }
    }).then(user => {
      if (user === null) {
        done(new Error('Wrong user id.'));
      }
      done(null, user);
    });
  });
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      },
      (req, email, password, done) => {
        return models.User.findOne({
          where: {
            email: email
          }
        })
          .then(user => {
            if (user === null) {
              req.flash('message', 'User does not exist.');
              return done(null, false);
            } else if (user.password === null || user.password === undefined) {
              req.flash('message', 'Password does not exist.');
              return done(null, false);
            } else if (!validPassword(user, password)) {
              req.flash('message', 'Password was invalid.');
              return done(null, false);
            }
            return done(null, user);
          })
          .catch(err => {
            done(err, false);
          });
      }
    )
  );
};
