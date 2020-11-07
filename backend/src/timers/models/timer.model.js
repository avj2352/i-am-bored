/**
 * Model for Tag server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const TimerSchema = new Schema({
    description: {
        type: String,
        required: 'Provide Timer description',
        unique: true,
        lowercase: true,
        trim: true,
    },
    time: {
        type: Number,
        required: 'Provide Timer duration in minutes'
    }
});

export const TimerModel = mongoose.model('timers', TimerSchema);