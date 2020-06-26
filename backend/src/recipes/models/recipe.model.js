/**
 * Model for Items - (Vegetables, Fruits, Spices) server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const RecipeSchema = new Schema({
    recipeId: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: 'Enter Item',
        lowercase: true,
        trim: true,
    },
    description: {
        type: String,
        required: 'Enter Item Description'
    },
    content: [{
        type: String,
        required: 'Enter Item Description'
    }],
    createdBy: {
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