/**
 * Model for Questionnaire server side schema
 */
import mongoose, { Schema } from 'mongoose';

export const QuestionnaireSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: 'Enter Inventory title'
    },
    question: {
        type: String
    },
    answer: {
        type: String
    },
    date: {
        type: Number,
        required: 'Provide Date of creation'
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'tags'
    }],
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'groups'
    }]
});

export const QuestionnaireModel = mongoose.model('questions', QuestionnaireSchema);