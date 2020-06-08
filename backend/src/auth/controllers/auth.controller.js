/**
 * CRUD - Authentication flow
 */
require('./../../util/colors');
const passport  = require('passport') ;
const passportStrategy = require('passport-google-oauth20');
// custom
import { User } from './../models/user.model';
import { getGoogleClientId, getGoogleClientSecret, getGoogleOAuthRedirect } from "../../util/config.util";
import { AuthService } from '../services/auth.service';



export class AuthController {
    
    constructor () {
        // console.log(`Google Client ID: `.help, getGoogleClientId());
        // console.log(`Google Client Secret: `.help, getGoogleClientSecret());
        // console.log(`Google Callback URL: `.help, getGoogleOAuthRedirect());
        const GoogleStrategy  = passportStrategy.Strategy;

        passport.serializeUser(function(user, done) {
            done(null, user.username);
        });

        passport.deserializeUser((username, done) => {
            done(null, {username: username});
        });

        passport.use(new GoogleStrategy({
            clientID: getGoogleClientId(),
            clientSecret: getGoogleClientSecret(),
            callbackURL: getGoogleOAuthRedirect()
        }, (accessToken, refreshToken, profile, done) => {
            User.findOne({googleId: profile.id});
            const record = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            });
            record.save();
            // console.log('Profile details: '.bgInfo, profile);
            // console.log('Accesstoken is:'.help, accessToken);
            // console.log('Refreshtoken is:'.help, refreshToken);
            // done(null, JSON.stringify(profile));
        }));

        this.authService = new AuthService();
        //bind
        this.authenticate = this.authenticate.bind(this);
        this.authCallback = this.authCallback.bind(this);
    }

    // google authenticate method
    authenticate = passport.authenticate('google', {session: 'false', scope: ['openid', 'email', 'profile']});

    // callback handler
    authCallback = (passport.authenticate('google'));

}

