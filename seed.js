import mongoose from 'mongoose';
import { Contact } from './Model/Contact.js';


await mongoose.connect('mongodb://localhost:27017/contact-with-mongodb')
    .then(console.log)
    .catch(console.error)


// Speichern/Create eines neues Users
const user = new Contact();
user.name = "Billy Smith";
user.email = "billy@shmithysmith.com";
await user.save();


// Option 2: User zu erstellen
const user2 = new Contact({ name: "Sarah Parker", email: "parker@park.park" });
await user2.save();


// Vorteil: Speichert direkt den User ohne save() schreiben zu müssen
await Contact.create({ name: "Jessica Smith", email: "jessice@smithysmith.com" });

mongoose.disconnect();