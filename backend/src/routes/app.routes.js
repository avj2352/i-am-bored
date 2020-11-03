/**
 * Main Webservice Routes application
*/

import { AuthController } from '../auth/controllers/auth.controller';
import {GroupController} from "../groups/controllers/group.controller";
import {TagController} from "../tags/controllers/tag.controller";
import {ItemController} from "../items/controllers/item.controller";

const auth = new AuthController();
const group = new GroupController();
const tag = new TagController();
const item = new ItemController();

const routes = (app) => {
    // AUTHENTICATION =======================
    app.route('/auth/google')
        .get(auth.authenticate);
    // Redirect URI
    app.route('/auth/google/callback')
        .get(auth.authCallback);
    // testing OAuth
    app.route('/auth/userDetails')
        .get(auth.userDetails);
    //logout User
    app.route('/auth/logout')
        .get(auth.logoutUser);

    // GROUPS ===============================
    app.route('/groups')
        .get(group.getGroups)
        .post(group.addNewGroup);

    // FILTERED Groups

    // RUD Groups
    app.route('/groups/:groupId')
        .get(group.getGroupById)
        .put(group.updateGroupById)
        .delete(group.deleteGroupById);
    // search Groups
    app.route('/groups/search/text')
        .get(group.search);

    // TAGS ===============================
    app.route('/tags')
        .get(tag.getTags)
        .post(tag.addNewTag);

    // FILTERED Groups

    // RUD Groups
    app.route('/tags/:tagId')
        .get(tag.getTagById)
        .put(tag.updateTagById)
        .delete(tag.deleteTagById);
    // search Groups
    app.route('/tags/search/text')
        .get(tag.search);


    // ITEMS ===============================
    app.route('/items')
        .get(item.getItems)
        .post(item.addNewItem);

    // FILTERED Groups

    // RUD Groups
    app.route('/items/:itemId')
        .get(item.getItemById)
        .put(item.updateItemById)
        .delete(item.deleteItemById);
    // search Groups
    app.route('/items/search/text')
        .get(item.search);

};


export default routes;