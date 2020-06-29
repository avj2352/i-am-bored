/**
 * Model for Items - (Vegetables, Fruits, Spices) server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const ItemSchema = new Schema({
    title: {
        type: String,
        required: 'Enter Item',
        unique: true,
        lowercase: true,
        trim: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: 'Enter Item Description'
    },
    meta: [{
        name: {
            type: String
        },
        description: {
            type: String
        }
    }],
});

export const ItemModel = mongoose.model('items', ItemSchema);