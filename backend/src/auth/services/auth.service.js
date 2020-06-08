/**
 * PAJ - All Authentication Logic Goes here
 */
import {User} from "../models/user.model";

 export class AuthService {
    constructor() {
        // bind
        this.addNewUser = this.addNewUser.bind(this);
        this.findUserRecordById = this.findUserRecordById.bind(this);
    }
     
    async addNewUser (profile) {
        const record = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
        });
        record.save();
        return record;
    }

    async findUserRecordById (id) {
        const result = await User.findOne({googleId: id});
        if (result) {
            return result;
        } else {
            return null;
        }
    }
 }