/**
 * CRUD - Authentication flow
 */
require('./../../util/colors');
const passport  = require('passport');
const passportStrategy = require('passport-google-oauth20');
// custom
import { getGoogleClientId, getGoogleClientSecret, getGoogleOAuthRedirect } from "../../util/config.util";
import { AuthService } from '../services/auth.service';



export class AuthController {
    
    constructor () {
        let existingUser;
        const GoogleStrategy  = passportStrategy.Strategy;

        // callback when done method is invoked on passport.use
        passport.serializeUser(async (user, done) => {
            done(null, user.id);
        });

        // callback when done method is invoked on passport.use
        passport.deserializeUser(async (id, done) => {
            const record = await this.authService.findUserRecordById(id);
            done(null, record);
        });

        passport.use(new GoogleStrategy({
            clientID: getGoogleClientId(),
            clientSecret: getGoogleClientSecret(),
            callbackURL: getGoogleOAuthRedirect()
        }, async (accessToken, refreshToken, profile, done) => {
            const result = await this.authService.findUserRecordByGoogleId(profile.id);
            if(!result) {
                const record = await this.authService.addNewUser(profile);
                existingUser = record;
                console.log(`New User - Add Record`.info, existingUser);
            } else {
                existingUser = result;
                console.log(`User record already exists`.info, existingUser);
            }
            done(null, existingUser);
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

