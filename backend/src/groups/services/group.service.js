require('./../../util/colors');
import {GroupModel} from '../models/group.model';

export class GroupService {
    constructor() {
        this.logger = `GroupService`;
        // bind context
        this.getAllGroups = this.getAllGroups.bind(this);
        this.filterGroupsWithoutPremium = this.filterGroupsWithoutPremium.bind(this);
        this.addNewGroup = this.addNewGroup.bind(this);
        this.getGroupById = this.getGroupById.bind(this);
        this.updateGroupById = this.updateGroupById.bind(this);
        this.deleteGroupById = this.deleteGroupById.bind(this);
    }

    // Fetch all Groups
    async getAllGroups () {
        return new Promise((resolve, reject) => {
            GroupModel.find({}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // Filter Groups with premium true / false
    async filterGroupsWithoutPremium (premium) {
        return new Promise((resolve, reject) => {
            GroupModel.find({premium}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    /**
     * Create a new record
     * @param payload {title, slug, description, premium}
     * @returns Promise
     */
    async addNewGroup (payload) {
        return new Promise((resolve, reject) => {
            const { title, slug, description, premium } = payload;
            let newGroupRecord = new GroupModel(payload);
            newGroupRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // RETRIEVE - Group by Id
    async getGroupById (id) {
        return new Promise((resolve, reject) => {
            GroupModel.find({_id: id}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // UPDATE - Group by Id, Payload
    async updateGroupById (id, payload) {
        return new Promise((resolve, reject) => {
            GroupModel.findOneAndUpdate({_id: id}, payload, {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    // DELETE - Group by Id
    async deleteGroupById (id) {
        return new Promise((resolve, reject) => {
            GroupModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(); // Get JSON format of contact
            });
        });
    }
}