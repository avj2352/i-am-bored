/**
 * PAJ - Image Service Layer
 * */
require('./../../util/colors');
import { InventoryModel } from './../models/inventory.model';

export class InventoryService {
    constructor() {
        this.logger = 'Inventory Service';
        //bind context
        this.getAllInventory = this.getAllInventory.bind(this);
        this.addNewInventory = this.addNewInventory.bind(this);
        this.getInventoryById = this.getInventoryById.bind(this);
        this.deleteInventoryById = this.deleteInventoryById.bind(this);
    }

    // Fetch all records
    async getAllInventory () {
        return new Promise((resolve, reject) => {
            InventoryModel.find({})
                .populate('users')
                .populate('items')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // CREATE - new record
    async addNewInventory (payload, userId) {
        return new Promise((resolve, reject) => {
            const { title, description, meta } = payload;
            let newImageRecord = new InventoryModel({
                title,
                description,
                createdBy: userId,
                meta: meta
            });
            newImageRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // RETRIEVE - record by Id
    async getInventoryById (id) {
        return new Promise((resolve, reject) => {
            InventoryModel.find({_id: id})
                .populate('users')
                .populate('items')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // DELETE - Record by Id
    async deleteInventoryById (id) {
        return new Promise((resolve, reject) => {
            InventoryModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }
}