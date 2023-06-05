import express from "express";
import mongoose from 'mongoose';
import { Contact } from "./Model/Contact.js";

mongoose.connect("mongodb://localhost:27017/contact-with-mongoose");

const PORT = process.env.PORT || "3001";
const app = express();

app.use(express.json());

app.get('/api/contacts', async (req, res) => {
    const contacts = Contact.find();
    res.send(contacts);
})

app.post("/api/contact", async (req, res) => {

})



application.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});