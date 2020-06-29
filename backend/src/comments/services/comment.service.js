
/**
 * PAJ - Collection Service Layer
 * */
require('./../../util/colors');
import { CommentModel } from './../models/comment.model';

export class CommentService {
    constructor() {
        this.logger = 'CommentService';
        //bind context
        this.getAllComments = this.getAllComments.bind(this);
        this.getCommentsByRecipeId = this.getCommentsByRecipeId.bind(this);
        this.addNewComment = this.addNewComment.bind(this);
        this.updateCommentById = this.updateCommentById.bind(this);
        this.deleteCommentById = this.deleteCommentById.bind(this);
    }

    // Fetch all records by user id
    async getAllComments ()                                                      {
        return new Promise((resolve, reject) => {
            CommentModel.find({})
                .populate('users')
                .populate('recipes')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // RETRIEVE - record by Id
    async getCommentsByRecipeId (recipeId) {
        return new Promise((resolve, reject) => {
            CommentModel.find({recipe: recipeId})
                .populate('users')
                .populate('recipes')
                .exec((err, data) => {
                    if (err) reject(err);
                    else resolve(data);
                });
        });
    }

    // CREATE - new record
    async addNewComment (payload, userId) {
        return new Promise((resolve, reject) => {
            const { comment, likes, recipe } = payload;
            let newCommentRecord = new CommentModel({
                comment,
                likes,
                createdBy: userId,
                recipe,
            });
            newCommentRecord.save((err, data) => {
                if (err) reject(err);
                else resolve(data);
            });
        });
    }

    // UPDATE - Recipe by Id, Payload
    async updateCommentById (id, payload, userId) {
        return new Promise((resolve, reject) => {
            const { comment, likes, recipe } = payload;
            CommentModel.findOneAndUpdate({_id: id, createdBy: userId}, {
                comment,
                likes,
                createdBy: userId,
                recipe,
            }, {new: true}, (err, data) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }


    // DELETE - Record by Id
    async deleteCommentById (id, userId) {
        return new Promise((resolve, reject) => {
            CommentModel.deleteOne({_id: id, createdBy: userId}, (err) => {
                if (err) reject(err);
                else resolve(data); // Get JSON format of contact
            });
        });
    }
}