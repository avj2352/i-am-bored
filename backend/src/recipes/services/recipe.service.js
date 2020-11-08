/**
 * PAJ - Recipe Service Layer
 * */
require('./../../util/colors');
import { RecipeModel } from './../models/recipe.model';
import converter from "../../util/showdown-converter";

export class RecipeService {
    constructor() {
        this.logger = 'RecipeService';
        //bind context
        this.validatePayload = this.validatePayload.bind(this);
        this.getAllRecipes = this.getAllRecipes.bind(this);
        this.getPublicRecipes = this.getPublicRecipes.bind(this);
        this.getPrivateRecipes = this.getPrivateRecipes.bind(this);
        this.getAllRecipesByUserId = this.getAllRecipesByUserId.bind(this);
        this.getRecipebyId = this.getRecipebyId.bind(this);
        this.addNewRecipe = this.addNewRecipe.bind(this);
        this.updateRecipeById = this.updateRecipeById.bind(this);
        this.deleteRecipeById = this.deleteRecipeById.bind(this);
        this.searchFullText = this.searchFullText.bind(this);
        this.searchPartialText = this.searchPartialText.bind(this);
        this.convertHTML = this.convertHTML.bind(this);
    }

    /**
     * validate request body
     * @param req any
     * @returns boolean
     */
    validatePayload (req) {
        return !req.body.title || req.body.title === '' ||
            !req.body.description || req.body.description === '' ||
            !req.body.content || req.body.content === '' ||
            !req.body.group || req.body.group === {}
    }

    /**
     * Get all recipe records
     * @returns {Promise<any>}
     */
    async getAllRecipes () {
        return new Promise((resolve, reject) => {
            RecipeModel.find()
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

    /**
     * Get all recipe records
     * @returns {Promise<any>}
     */
    async getPublicRecipes () {
        return new Promise((resolve, reject) => {
            RecipeModel.find({isPrivate: false})
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

    /**
     * Get all recipe records
     * @returns {Promise<any>}
     */
    async getPrivateRecipes () {
        return new Promise((resolve, reject) => {
            RecipeModel.find({isPrivate: true})
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

    /**
     * Get all recipe records by User Id
     * @params userId
     * @returns {Promise<any>}
     */
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

    /**
     * Get recipe by record id
     * @param id
     * @returns {Promise<any>}
     */
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

    /**
     * Add new recipe record
     * @param payload { title, description, content, userId, groupId, tags, items, timers }
     * @param userId
     * @returns {Promise<any>}
     */
    async addNewRecipe (payload) {
        return new Promise((resolve, reject) => {
            const { title, userId, description, content, groupId, tags, items, timers } = payload;
            let newRecipeRecord = new RecipeModel({
                title,
                description,
                content,
                createdBy: userId,
                updatedBy: userId,
                group: groupId,
                tags,
                items,
                timers,
            });
            newRecipeRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    /**
     * Update recipe by its record id
     * @param payload { title, description, content, userId, groupId, tags, items, timers }
     * @param userId
     * @returns {Promise<any>}
     */
    async updateRecipeById (id, payload) {
        return new Promise((resolve, reject) => {
            const { title, description, content, userId, groupId, tags, items, timers, comments } = payload;
            RecipeModel.findOneAndUpdate({_id: id}, {
                title,
                description,
                updatedBy: userId,
                content,
                group: groupId,
                items,
                tags,
                timers,
            }, {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }


    /**
     * Delete recipe by record id
     * @param id
     * @returns {Promise<any>}
     */
    async deleteRecipeById (id) {
        return new Promise((resolve, reject) => {
            RecipeModel.deleteOne({_id: id}, (err) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    /**
     * search full text
     * @param text {string} full text query string
     * @returns Promise<any>
     */
    async searchFullText (text) {
        console.log('Calling Full text query: ', text);
        return new Promise((resolve, reject) => {
            RecipeModel.find({$text: {$search: text}}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    /**
     * search partial text
     * @param partial {string} partial query string
     * @returns Promise<any>
     */
    async searchPartialText (partial) {
        return new Promise((resolve, reject) => {
            RecipeModel.find({description: {$regex: new RegExp(partial)}}, {_id:0, __v:0}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }

    /**
     * convert markdown to html
     * @param text {string} markdown text
     * @returns html {string}
     */
    convertHTML (text) {
        return converter.makeHtml(text);
    }
}