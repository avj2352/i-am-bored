/**
 * Model for Collection - Collection of Recipes
 */
import mongoose, { Schema } from 'mongoose';

export const CommentSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: String,
        required: 'Enter Comment',
        lowercase: true,
        trim: true,
    },
    likes: {
        type: Number,
        required: 'Number of likes required'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    },
});

export const CommentModel = mongoose.model('comments', CommentSchema);