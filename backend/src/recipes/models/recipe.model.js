/**
 * Model for Items - (Vegetables, Fruits, Spices) server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const RecipeSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: 'Enter Recipe Title',
        lowercase: true,
        trim: true,
    },
    isPrivate: {
        type: String,
        default: false
    },
    description: {
        type: String,
        required: 'Enter Recipe Description'
    },
    content: [{
        type: String,
        required: 'Enter Recipe Content'
    }],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'groups'
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'tags'
    }],
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'items'
    }],
    images: [{
        type: Schema.Types.ObjectId,
        ref: 'images'
    }],
});

export const RecipeModel = mongoose.model('recipes', RecipeSchema);