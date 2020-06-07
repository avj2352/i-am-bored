/**
 * Main Webservice Routes application
*/

import { AuthController } from '../auth/controllers/auth.controller';

const auth = new AuthController();

const routes = (app) => {

    // Authentication =======================
    app.route('/auth/google')
    .get(auth.authenticate);

    // // Redirect URI
    app.route('/auth/google/callback')
    .get(auth.authCallback);

};


export default routes;