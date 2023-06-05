import mongoose, { Schema } from 'mongoose';

const todoSchema = new Schema({
    todo: {
        type: String,
        required: true,
    },
    email: String,
});

export const Todo = mongoose.model("Todo", todoSchema);

