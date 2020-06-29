/**
 * Main Webservice Routes application
*/

import { AuthController } from '../auth/controllers/auth.controller';
import {GroupController} from "../groups/controllers/group.controller";

const auth = new AuthController();
const group = new GroupController();

const routes = (app) => {
    // AUTHENTICATION =======================
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

    // GROUPS ===============================
    app.route('/group')
        .get(group.getAllGroups)
        .post(group.addNewGroup);

    // FILTERED Groups
    app.route('/group/filtered')
        .get(group.filterGroupsWithoutPremium);

    // RUD Groups
    app.route('/group/:groupId')
        .get(group.getGroupById)
        .put(group.updateGroupById)
        .delete(group.deleteGroupById);

};


export default routes;