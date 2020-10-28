/**
 * CRUD - Controller for Group Model
 */
require('./../../util/colors');
import { GroupModel } from '../models/group.model';
import {GroupService} from "../services/group.service";
import {AuthService} from "../../auth/services/auth.service";

export class GroupController {

    constructor() {
        this.logger = 'GroupController';
        this.groupService = new GroupService();
        this.authService = new AuthService();
        // bind context
        this.getGroups = this.getGroups.bind(this);
        this.addNewGroup = this.addNewGroup.bind(this);
        this.getGroupById = this.getGroupById.bind(this);
        this.updateGroupById = this.updateGroupById.bind(this);
        this.deleteGroupById = this.deleteGroupById.bind(this);
    }

    /**
     * PAJ - Fetch all Groups. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async getGroups (req, res) {
        try {
            const user = this.authService.fetchUserDetails(req);
            if (user) {
                const result = await this.groupService.filterGroupsWithoutPremium(false);
                return res.json(result);
            } else {
                const result = await this.groupService.getAllGroups();
                return res.json(result);
            }
        } catch (err) {
            console.log(`${this.logger} error fetch all groups: ${JSON.stringify(err)}`.error);
            return res.sendStatus(500);
        }
    }

    /**
     * PAJ - Create a new group record. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async addNewGroup (req, res) {
        // check if authenticated
        const user = this.authService.fetchUserDetails(req);
        if (!Boolean(user)) return res.sendStatus(401);
        // only admin can access
        if (!this.authService.checkIfAdminUser(user)) return res.sendStatus(401);
        // create record
        try {
            const result = await this.groupService.addNewGroup({
                title: req.body.title,
                slug: req.body.slug,
                description: req.body.description,
                premium: req.body.premium
            });
            console.log(`${this.logger} - New Record added`, result);
            return res.sendStatus(201);
        } catch (err) {
            if (err.code === 11000) {
                console.log(`${this.logger} - Duplicate Record: ${JSON.stringify(err)}`.error);
                return res.status(400).send('Duplicate Record');
            }
            else if (err.errors.premium.name === 'ValidatorError') {
                    console.log(`${this.logger} - Bad Request: ${JSON.stringify(err)}`.error);
                    return res.sendStatus(400);
            }
            else {
                console.log(`${this.logger} - Internal Server Error: ${JSON.stringify(err)}`.error);
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
    async getGroupById (req, res) {
        const user = this.authService.fetchUserDetails(req);
        if (!Boolean(user)) return res.sendStatus(401);
        try {
            const result = await this.groupService.getGroupById(req.params.groupId);
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
    async updateGroupById (req, res) {
        this.authService.authenticateUser(req, res);
        try {
            const result = await this.groupService.updateGroupById(req.params.groupId, req.body);
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
    async deleteGroupById (req, res) {
        this.authService.authenticateUser(req, res);
        try {
            const result = await this.groupService.deleteGroupById(req.params.groupId);
            console.log(`${this.logger} - Record deleted: `, result);
            return res.sendStatus(200);
        } catch (err) {
            console.log(`${this.logger} Error updating record: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }
}