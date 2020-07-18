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
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.getAllGroups = this.getAllGroups.bind(this);
        this.addNewGroup = this.addNewGroup.bind(this);
        this.getGroupById = this.getGroupById.bind(this);
        this.updateGroupById = this.updateGroupById.bind(this);
        this.deleteGroupById = this.deleteGroupById.bind(this);
    }

    /**
     * PAJ - Check Cookie header present
     * @param req
     * @param res
     * @returns user / 401
     */
    checkAuthentication (req, res) {
        if (!this.authService.authenticateUser(req)) {
            res.sendStatus(401);
        } else {
            return req.user;
        }
    }

    /**
     * PAJ - Fetch all Groups. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async getAllGroups (req, res) {
        try {
            if (req.query.q === 'filtered') {
                const result = await this.groupService.filterGroupsWithoutPremium(false);
                return res.json(result);
            } else {
                const user = this.checkAuthentication(req, res);
                if (user) {
                    const result = await this.groupService.getAllGroups();
                    return res.json(result);
                }
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
        this.checkAuthentication(req, res);
        try {
            const result = await this.groupService.addNewGroup(req.body);
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
    async getGroupById (req, res) {
        this.checkAuthentication(req, res);
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
        this.checkAuthentication(req, res);
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
        this.checkAuthentication(req, res);
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