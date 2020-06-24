/**
 * CRUD - API Controller for Item Model
 */

require('./../../util/colors');
import { AuthService } from "../../auth/services/auth.service";
import { ItemService } from "../services/item.service";

export class ItemController {

    constructor() {
        this.logger = 'Item Controller';
        this.itemService = new ItemService();
        this.authService = new AuthService();
        //bind context
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.getItemById = this.getItemById.bind(this);
        this.updateItemById = this.updateItemById.bind(this);
        this.deleteItemById = this.deleteItemById.bind(this);
    }

    /**
     * PAJ - Check Cookie header present
     * @param req
     * @param res
     * @returns user / 401
     */
    async checkAuthentication (req, res) {
        if (!this.authService.authenticateUser(req)) {
            return res.sendStatus(401);
        } else {
            return req.user;
        }
    }

    /**
     * PAJ - Fetch all records. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async getAllItems (req, res) {
        this.checkAuthentication (req, res);
        try {
            const result = await this.itemService.getAllGroups();
            return res.json(result);
        }catch(err) {
            console.log(`${this.logger} - Error fetching all records ${JSON.stringify(err)}`.error);
            res.sendStatus(500);
        }
    }

    /**
     * PAJ - Create a new record. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async addNewItem (req, res) {
        this.checkAuthentication (req, res);
        try {
            const result = await this.itemService.addNewItem (req.body);
            console.log(`${this.logger} - New Record added`, result);
            return res.sendStatus(201);
        } catch (err) {
            if (err.code === 11000) {
                console.log(`${this.logger} Duplicate Record: ${JSON.stringify(err)}`.error);
                return res.sendStatus(400);
            } else {
                console.log(`${this.logger} Internal Server error: ${JSON.stringify(err)}`.error);
                return res.sendStatus(500);
            }
        }
    }

    /**
     * PAJ - Fetch record by id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getItemById (req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = await this.itemService.getItemById(req.params.tagId);
            return res.json(result);
        } catch (err) {
            console.log(`${this.logger} Error Retrieving Id: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }

    /**
     * PAJ - Update record by Id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async updateItemById (req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = await this.itemService.updateItemById(req.params.tagId, req.body);
            console.log(`${this.logger} - Record updated: `, result);
            return res.sendStatus(200);
        } catch (err) {
            console.log(`${this.logger} Error updating record: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }

    /**
     * PAJ - Delete record by Id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async deleteItemById(req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = await this.itemService.deleteItemById(req.params.tagId);
            console.log(`${this.logger} - Record deleted: `, result);
            return res.sendStatus(200);
        } catch (err) {
            console.log(`${this.logger} Error updating record: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }
}