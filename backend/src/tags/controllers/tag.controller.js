/**
 * CRUD - API Controller for Tag Model
 */

require('./../../util/colors');
import {AuthService} from "../../auth/services/auth.service";
import {TagService} from "../services/tag.service";

export class TagController {

    constructor() {
        this.logger = 'Tag Controller';
        this.tagService = new TagService();
        this.authService = new AuthService();
        //bind context
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.getAllTags = this.getAllTags.bind(this);
        this.addNewTag = this.addNewTag.bind(this);
        this.getTagByName = this.getTagByName.bind(this);
        this.getTagById = this.getTagById.bind(this);
        this.updateTagById = this.updateTagById.bind(this);
        this.deleteTagById = this.deleteTagById.bind(this);
    }

    /**
     * PAJ - Check Cookie header present
     * @param req
     * @param res
     * @returns user / 401
     */
    async checkAuthentication (req, res) {
        if (!this.authService.authenticateUser(req)) {
            return 401;
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
    async getAllTags(req, res) {
        const user = await this.checkAuthentication(req, res);
        if (user !== 401) {
            try {
                const result = await this.tagService.getAllTags();
                return res.json(result);
            } catch (err) {
                console.log(`${this.logger} Internal Server error: ${JSON.stringify(err)}`.error);
                return res.sendStatus(500);
            }
        } else {
            res.sendStatus(401);
        }
    }

    /**
     * PAJ - Create a new record. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async addNewTag (req, res) {
        const user = await this.checkAuthentication(req, res);
        if (user !== 401) {
            try {
                const result = await this.tagService.addNewTag (req.body);
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
        } else {
            res.sendStatus(401);
        }

    }

    /**
     * PAJ - Fetch record by name. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getTagByName (req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = await this.tagService.getTagByName(req.params.name);
            return res.json(result);
        } catch (err) {
            console.log(`${this.logger} Error Retrieving Id: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }

    /**
     * PAJ - Fetch record by id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getTagById (req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = await this.tagService.getTagById(req.params.tagId);
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
    async updateTagById (req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = await this.tagService.updateTagById(req.params.tagId, req.body);
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
    async deleteTagById(req, res) {
        this.checkAuthentication(req, res);
        try {
            await this.tagService.deleteTagById(req.params.tagId);
            return res.sendStatus(200);
        } catch (err) {
            console.log(`${this.logger} Error updating record: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }
}