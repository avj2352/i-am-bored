/**
 * Model for Group server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const GroupSchema = new Schema({
    title: {
        type: String,
        required: 'Enter group title',
        unique: true
    },
    slug: {
        type: String,
        required: 'Enter group slug',
        unique: true
    },
    description: {
        type: String,
        required: 'Provide group description'
    },
    // premium true is only made available for subscribed users
    premium: {
        type: Boolean,
        required: 'Public or Private collection'
    }
});

export const GroupModel = mongoose.model('groups', GroupSchema);