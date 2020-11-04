/**
 * Model for Items - (Vegetables, Fruits, Spices) server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const ItemSchema = new Schema({
    name: {
        type: String,
        required: 'Provide Item Name',
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
        required: 'Provide Item Description'
    }
});

ItemSchema.index({ title: 'text', description: 'text' });
export const ItemModel = mongoose.model('items', ItemSchema);
ItemModel.createIndexes();