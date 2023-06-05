import mongoose from 'mongoose';
import { Todo } from './Model/Todo.js';


await mongoose.connect('mongodb://localhost:27017/contact-with-mongodb')
    .then(console.log)
    .catch(console.error)


// Speichern/Create eines neues Users
const user = new Todo();
user.todo = "Wäsche waschen";
await user.save();


// Option 2: User zu erstellen
const user2 = new Todo({ todo: "Auto waschen" });
await user2.save();


// Vorteil: Speichert direkt den User ohne save() schreiben zu müssen
await Todo.create({ todo: "Geschenk besorgen" });

mongoose.disconnect();