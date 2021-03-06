const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, 
    useCreateIndex: true});

const connection = mongoose.connection;
console.log("\nConnecting to " + uri + "\n");
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//Examples of adding routes
const usersRouter = require('./routes/users');

console.log(usersRouter.router);

app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});