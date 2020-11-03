require('./../../util/colors');
import { ItemModel } from '../models/item.model';

export class ItemService {
    constructor() {
        this.logger = `ItemService`;
        // bind context
        this.getItems = this.getItems.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.getItemById = this.getItemById.bind(this);
        this.updateItemById = this.updateItemById.bind(this);
        this.deleteItemById = this.deleteItemById.bind(this);
    }

    // Fetch all records
    async getItems () {
        return new Promise((resolve, reject) => {
            ItemModel.find({}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // CREATE - new record
    async addNewItem (payload) {
        return new Promise((resolve, reject) => {
            let newItemRecord = new ItemModel(payload);
            newItemRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // RETRIEVE - Item by Id
    async getItemById (id) {
        return new Promise((resolve, reject) => {
            ItemModel.find({_id: id}, (err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // UPDATE - Item by Id, Payload
    async updateItemById (id, payload) {
        return new Promise((resolve, reject) => {
            ItemModel.findOneAndUpdate({_id: id}, payload, {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    // DELETE - Item by Id
    async deleteItemById (id) {
        return new Promise((resolve, reject) => {
            ItemModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }
}