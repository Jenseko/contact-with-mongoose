import express from 'express';
import mongoose from 'mongoose';
import { Todo } from './Model/Todo.js';

// ----- SETUP --------------------------------------

mongoose.connect('mongodb://localhost:27017/contact-with-mongoose');

const PORT = process.env.PORT || '3001';
const app = express();

app.use(express.json());


// ----- GET -----------------------------------------

app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});

// ----- POST -----------------------------------------


app.post('/api/todos', async (req, res) => {
    const newTodo = await Todo.create(req.body);
    res.send(newTodo);
});

// -----------------------------------------------------

app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
});

