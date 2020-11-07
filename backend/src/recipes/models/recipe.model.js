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
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: 'Enter Recipe Description',
        trim: true
    },
    content: {
        type: String,
        required: 'Enter Recipe Content',
        trim: true
    },
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
        ref: 'groups',
        required: 'Provide group Id'
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'tags'
    }],
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'items'
    }],
    timers: [{
        type: Schema.Types.ObjectId,
        ref: 'timers'
    }],
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'comments'
        }
    ]
});

RecipeSchema.index({ title: 'text', description: 'text', content: 'text' });
export const RecipeModel = mongoose.model('recipes', RecipeSchema);
RecipeModel.createIndexes();