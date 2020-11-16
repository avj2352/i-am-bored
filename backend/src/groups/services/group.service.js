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
        this.searchFullText = this.searchFullText.bind(this);
        this.searchPartialText = this.searchPartialText.bind(this);
    }

    /**
     * fetch all group records
     * @returns Promise<any>
     */
    async getAllGroups () {
        return new Promise((resolve, reject) => {
            GroupModel.find({}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    /**
     * filter group records premium == false
     * @param premium {boolean}
     * @returns Promise<any>
     */
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
     * @returns Promise<any>
     */
    async addNewGroup (payload) {
        return new Promise((resolve, reject) => {
            const { title, slug, description, premium } = payload;
            let newGroupRecord = new GroupModel({ title, slug, description, premium });
            newGroupRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    /**
     * get group record details by Id
     * @param id { string }
     * @returns Promise<any>
     */
    async getGroupById (id) {
        return new Promise((resolve, reject) => {
            GroupModel.find({_id: id}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    /**
     * update group record details by its Id
     * @param id { string }
     * @param payload { title, slug, description, premium }
     * @returns Promise<any>
     */
    async updateGroupById (id, payload) {
        const { title, slug, description, premium } = payload;
        return new Promise((resolve, reject) => {
            GroupModel.findOneAndUpdate({_id: id}, {title, slug, description, premium},
                {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    /**
     * delete group record details by its Id
     * @param id { string }
     * @returns Promise<any>
     */
    async deleteGroupById (id) {
        return new Promise((resolve, reject) => {
            GroupModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(); // Get JSON format of contact
            });
        });
    }

    /**
     * search full text in Group Model
     * @param text {string} full text query string
     * @returns Promise<any>
     */
    async searchFullText (text) {
        console.log('Calling Full text query: ', text);
        return new Promise((resolve, reject) => {
            GroupModel.find({$text: {$search: text}}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    /**
     * search partial text in Group Model
     * @param partial {string} partial query string
     * @returns Promise<any>
     */
    async searchPartialText (partial) {
        return new Promise((resolve, reject) => {
            GroupModel.find({description: {$regex: new RegExp(partial)}}, {_id:0, __v:0}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

}