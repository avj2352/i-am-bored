require('./../../util/colors');
import { GroupModel } from '../models/group.model';

export class GroupService {
    constructor() {
        this.logger = `GroupService`;
        // bind context
        this.getAllGroups = this.getAllGroups.bind(this);
        this.filterGroupsWithoutPremium = this.filterGroupsWithoutPremium.bind(this);
        this.addNewGroup = this.addNewGroup.bind(this);
    }

    // Fetch all Groups
    getAllGroups () {
        console.log(`${this.logger} - fetching all groups`.info);
        GroupModel.find({}, (err, data)=>{
            if (err) throw new Error(`${this.logger} DB error - find all: ${JSON.stringify(err)}`);
            else return data;
        });
    }

    // Filter Groups with premium true / false
    filterGroupsWithoutPremium (premium) {
        console.log(`${this.logger} - filter groups with premium: ${premium}`.info);
        GroupModel.find({premium}, (err, data)=>{
            if (err) throw new Error(`${this.logger} DB error - fetching groups with premium: ${JSON.stringify(err)}`);
            else return data;
        });
    }

    // CREATE - new Group record
    addNewGroup (payload) {
        let newGroupRecord = new GroupModel(payload);
        newGroupRecord.save((err, data)=>{
            if(err) throw new Error(`${this.logger} DB error - add new group record: ${JSON.stringify(err)}`);
            else return data;
        });
    }
}