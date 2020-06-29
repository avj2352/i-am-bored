
/**
 * PAJ - Recipe Service Layer
 * */
require('./../../util/colors');
import { RecipeModel } from './../models/recipe.model';

export class RecipeService {
    constructor() {
        this.logger = 'RecipeService';
        //bind context
        this.getAllRecipes = this.getAllRecipes.bind(this);
        this.getAllRecipesByUserId = this.getAllRecipesByUserId.bind(this);
        this.getRecipebyId = this.getRecipebyId.bind(this);
        this.addNewRecipe = this.addNewRecipe.bind(this);
        this.updateRecipeById = this.updateRecipeById.bind(this);
        this.deleteRecipeById = this.deleteRecipeById.bind(this);
    }

    // Fetch all records
    async getAllRecipes (isPrivate) {
        return new Promise((resolve, reject) => {
            RecipeModel.find({isPrivate})
                .populate('users')
                .populate('groups')
                .populate('tags')
                .populate('items')
                .populate('images')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // Fetch all records by user id
    async getAllRecipesByUserId (userId) {
        return new Promise((resolve, reject) => {
            RecipeModel.find({createdBy: userId, isPrivate: true})
                .populate('users')
                .populate('groups')
                .populate('tags')
                .populate('items')
                .populate('images')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // RETRIEVE - record by Id
    async getRecipebyId (id) {
        return new Promise((resolve, reject) => {
            RecipeModel.find({_id: id})
                .populate('users')
                .populate('groups')
                .populate('tags')
                .populate('items')
                .populate('images')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // CREATE - new record
    async addNewRecipe (payload, userId) {
        return new Promise((resolve, reject) => {
            const { title, description, content, groupId, tags, items, images } = payload;
            let newRecipeRecord = new RecipeModel({
                title,
                description,
                content,
                createdBy: userId,
                updatedBy: userId,
                group: groupId,
                tags,
                items,
                images,
            });
            newRecipeRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // UPDATE - Recipe by Id, Payload
    async updateRecipeById (id, payload, userId) {
        return new Promise((resolve, reject) => {
            const { title, description, content, groupId, tags, items, images } = payload;
            RecipeModel.findOneAndUpdate({_id: id}, {
                title,
                description,
                updatedBy: userId,
                content,
                group: groupId,
                tags,
                items,
                images,
            }, {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }


    // DELETE - Record by Id
    async deleteRecipeById (id) {
        return new Promise((resolve, reject) => {
            RecipeModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }
}