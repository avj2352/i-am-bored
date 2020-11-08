/**
 * CRUD - Controller for Recipe Model
 */
require('./../../util/colors');
import { RecipeService } from "../services/recipe.service";
import { AuthService } from "../../auth/services/auth.service";

export class RecipeController {

    constructor() {
        this.logger = 'RecipeController';
        this.recipeService = new RecipeService();
        this.authService = new AuthService();
        // bind context
        this.validatePayload = this.validatePayload.bind(this);
        this.getAllRecipes = this.getAllRecipes.bind(this);
        this.getRecipesByUserId = this.getRecipesByUserId.bind(this);
        this.getRecipeById = this.getRecipeById.bind(this);
        this.addNewRecipe = this.addNewRecipe.bind(this);
        this.updateRecipeById = this.updateRecipeById.bind(this);
        this.deleteRecipeById = this.deleteRecipeById.bind(this);
    }

    /**
     * PAJ - Check Cookie header present
     * @param req
     * @param res
     * @returns boolean
     */
    validatePayload (req) {
        return !req.body.title || req.body.title === '' ||
            !req.body.hasOwnProperty('isPrivate') ||
            !req.body.description || req.body.description === '' ||
            !req.body.content || req.body.content === '' ||
            !req.body.groups || req.body.groups === {} ||
            !req.body.tags || Array.isArray(req.body.tags) ||
            !req.body.items || Array.isArray(req.body.items) ||
            !req.body.timers || Array.isArray(req.body.timers);
    }

    /**
     * PAJ - Fetch all Recipes.
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async getAllRecipes (req, res) {
        try {
            const user = this.authService.fetchUserDetails(req);
            if (user) {
                console.log(`User logged in, Fetching all recipes`.info);
                const result = await this.recipeService.getAllRecipes();
                return res.json(result);
            } else {
                console.log(`Fetching all public recipes`.info);
                const result = await this.recipeService.getPublicRecipes();
                return res.json(result);
            }
        } catch (err) {
            console.log(`${this.logger} error fetch all recipes: ${JSON.stringify(err)}`.error);
            return res.sendStatus(500);
        }
    }

    /***
     * PAJ - Get Recipe By Id
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async getRecipesByUserId (req, res) {
        const user = this.authService.fetchUserDetails(req);
        if (!Boolean(user)) return res.sendStatus(401);
        try {
            const result = await this.recipeService.getAllRecipesByUserId(user.id);
            return res.json(result);
        } catch (err) {
            console.log(`${this.logger} error fetch recipes by user id : ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }

    /**
     * PAJ - Fetch record by id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async getRecipeById (req, res) {
        try {
            const result = await this.recipeService.getRecipebyId(req.params.recipeId);
            return res.json(result);
        } catch (err) {
            console.log(`${this.logger} Error Retrieving Id: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }

    /**
     * PAJ - Create a new recipe record. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<any>}
     */
    async addNewRecipe (req, res) {
        const user = this.authService.fetchUserDetails(req);
        if (!Boolean(user)) return res.sendStatus(401);
        try {
            const result = await this.recipeService.addNewRecipe(req.body, user.id);
            console.log(`${this.logger} - New Record added`, result);
            return res.status(201).send(result._id);
        } catch (err) {
            if (err.code === 11000) {
                console.log(`${this.logger} Duplicate Record: ${JSON.stringify(err)}`.error);
                return res.sendStatus(400);
            } else {
                console.log(`${this.logger} Internal Server error: ${JSON.stringify(err)}`.error);
                return res.sendStatus(500);
            }
        }
    }



    /**
     * PAJ - Update record by Id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async updateRecipeById (req, res) {
        const user = this.authService.fetchUserDetails(req);
        if (!Boolean(user)) return res.sendStatus(401);
        try {
            const result = await this.recipeService.updateRecipeById(req.params.recipeId, req.body, user.id);
            console.log(`${this.logger} - Record updated: `, result);
            return res.sendStatus(200);
        } catch (err) {
            console.log(`${this.logger} Error updating record: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }

    /**
     * PAJ - Delete record by Id. Requires Cookie Session
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    async deleteRecipeById (req, res) {
        const user = this.authService.fetchUserDetails(req);
        if (!Boolean(user)) return res.sendStatus(401);
        try {
            const result = await this.recipeService.deleteRecipeById(req.params.recipeId);
            console.log(`${this.logger} - Record deleted: `, result);
            return res.sendStatus(200);
        } catch (err) {
            console.log(`${this.logger} Error updating record: ${JSON.stringify(err)}`.error);
            return res.sendStatus(400);
        }
    }
}