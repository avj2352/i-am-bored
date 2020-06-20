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
        this.getAllGroups = this.getAllGroups.bind(this);
        this.filterGroupsWithoutPremium = this.filterGroupsWithoutPremium.bind(this);
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.addNewGroup = this.addNewGroup.bind(this);
    }

    /**
     * PAJ - Check Cookie header present
     * @param req
     * @param res
     * @returns {*}
     */
    checkAuthentication (req, res) {
        if (!this.authService.authenticateUser(req)) {
            return res.sendStatus(401);
        } else {
            return req.user;
        }
    }

    /**
     * PAJ - Fetch all Groups. Requires Cookie Session
     * @param req
     * @param res
     * @returns res
     */
    getAllGroups (req, res) {
        this.checkAuthentication (req, res);
        try {
            const result = this.groupService.getAllGroups();
            return res.send(result);
        } catch (err) {
            console.log(`${this.logger} error fetch all groups: ${JSON.stringify(err)}`.error);
            return res.sendStatus(500);
        }
    }

    /***
     * PAJ - Filter Groups with Premium true / false.
     * @param req
     * @param res
     * @returns {*|Promise<any>}
     */
    filterGroupsWithoutPremium (req, res) {
        try {
            const result = this.groupService.filterGroupsWithoutPremium(false);
            return res.json(result);
        } catch (err) {
            console.log(`${this.logger} error fetch all groups: ${JSON.stringify(err)}`.error);
            return res.sendStatus(500);
        }
    }

    // CREATE - group record
    addNewGroup (req, res) {
        this.checkAuthentication(req, res);
        try {
            const result = this.groupService.addNewGroup(req.body);
            return res.send(result);
        } catch (err) {
            console.log(`${this.logger} error fetch all groups: ${JSON.stringify(err)}`.error);
            return res.sendStatus(500);
        }
    }

    // RETRIEVE - group record by id
    getGroupById (req, res) {
        GroupModel.find({_id: req.params.groupId}, (err, data)=>{
            if (err) res.send(err);
            else res.json(data);
        });
    }

    updateGroupById (req, res) {
        GroupModel.findOneAndUpdate({_id: req.params.groupId}, req.body, { new: true }, (err, data)=>{
            if (err) res.send(err);
            else res.json(data); // Get JSON format of contact
        });
    }

    deleteGroupById (req, res) {
        GroupModel.deleteOne({_id: req.params.groupId}, (err)=>{
            if (err) res.send(err);
            else res.json({message: `Successfully deleted group id: ${req.params.groupId}`});
        });
    }
}