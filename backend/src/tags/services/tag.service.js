require('./../../util/colors');
import { TagModel } from '../models/tag.model';

export class TagService {
    constructor() {
        this.logger = `TagService`;
        // bind context
        this.getAllTags = this.getAllTags.bind(this);
        this.addNewTag = this.addNewTag.bind(this);
        this.getTagById = this.getTagById.bind(this);
        this.getTagByName = this.getTagByName.bind(this);
        this.updateTagById = this.updateTagById.bind(this);
        this.deleteTagById = this.deleteTagById.bind(this);
    }

    // Fetch all Tags
    async getAllTags () {
        return new Promise((resolve, reject) => {
            TagModel.find({}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // CREATE - new Tag record
    async addNewTag (payload) {
        return new Promise((resolve, reject) => {
            const { name, description } = payload;
            let newTagRecord = new TagModel({ name, description });
            newTagRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // RETRIEVE - Tag by Id
    async getTagById (id) {
        return new Promise((resolve, reject) => {
            TagModel.find({_id: id}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // RETRIEVE - Tag by Tag name
    async getTagByName (name) {
        return new Promise((resolve, reject) => {
            TagModel.find({name},(err, data) => {
                if(err) reject (err);
                else resolve (data); // Get JSON format of contact
            });
        });
    }

    // UPDATE - Tag by Id, Payload
    async updateTagById (id, payload) {
        return new Promise((resolve, reject) => {
            TagModel.findOneAndUpdate({_id: id}, payload, {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    // DELETE - Tag by Id
    async deleteTagById (id) {
        return new Promise((resolve, reject) => {
            TagModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(); // Get JSON format of contact
            });
        });
    }
}