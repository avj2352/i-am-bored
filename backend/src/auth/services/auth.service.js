/**
 * PAJ - All Authentication Logic Goes here
 */
import {User} from "../models/user.model";

 export class AuthService {
    constructor() {
        // bind
        this.fetchUserDetails = this.fetchUserDetails.bind(this);
        this.checkIfAdminUser = this.checkIfAdminUser.bind(this);
        this.addNewUser = this.addNewUser.bind(this);
        this.findUserRecordById = this.findUserRecordById.bind(this);
        this.findUserRecordByGoogleId = this.findUserRecordByGoogleId.bind(this);
    }

    /* Check Cookie header present
    * @param req
    * @param res
    * @returns user / 401
    */
     fetchUserDetails (req) {
         if (req.user) {
             return req.user;
         } else {
             return null;
         }
     }

     /**
      * Check user role is admin
      * @param user {role}
      * @returns {boolean}
      */
     checkIfAdminUser (user) {
         if (user.role && user.role === 'admin') return true;
         else return false;
     }

     /**
      * PAJ - Find User record by Mongo DB id
      * @param id string - Mongo DB Id
      **/
     async findUserRecordById (id) {
         const result = await User.findById(id);
         if (result) {
             return result;
         } else {
             return null;
         }
     }

     /**
      * PAJ - Add Google Record to Mongo DB
      * @param profile any - Google profile object
      **/
    async addNewUser (profile) {
        const record = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
        });
        record.save();
        return record;
    }

    /**
    * PAJ - Find User record by Google profile ID
    * @param id string - google profile id
    **/
    async findUserRecordByGoogleId (id) {
        const result = await User.findOne({googleId: id});
        if (result) {
            return result;
        } else {
            return null;
        }
    }
 }