import express from 'express';
import mongoose from 'mongoose';
import { Contact } from './Model/Contact.js';

// ----- SETUP --------------------------------------

mongoose.connect('mongodb://localhost:27017/contact-with-mongoose');

const PORT = process.env.PORT || '3001';
const app = express();

app.use(express.json());


// ----- GET -----------------------------------------

app.get('/api/contacts', async (req, res) => {
    const contacts = await Contact.find();
    res.send(contacts);
});

// ----- POST -----------------------------------------


app.post('/api/contacts', async (req, res) => {
    const newContact = await Contact.create(req.body);
    res.send(newContact);
});

// -----------------------------------------------------

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});

