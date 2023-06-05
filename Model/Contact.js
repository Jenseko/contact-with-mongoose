import mongoose, { Schema } from 'mongoose';

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: String,
});

export const Contact = mongoose.model("Contact", contactSchema);

