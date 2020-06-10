/**
 * Main Webservice Routes application
*/

import { AuthController } from '../auth/controllers/auth.controller';

const auth = new AuthController();

const routes = (app) => {
    // Authentication =======================
    app.route('/auth/google')
        .get(auth.authenticate);
    // Redirect URI
    app.route('/auth/google/callback')
        .get(auth.authCallback);
    // testing OAuth
    app.route('/auth/getUserDetails')
        .get(auth.getUserDetails);
    //logout User
    app.route('/auth/logout')
        .get(auth.logoutUser);

};


export default routes;