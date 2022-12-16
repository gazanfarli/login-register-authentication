const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/AuthRoutes');

const app = express();

app.listen(4000, () => {
    console.log('Server Started on PORT 4000');
});

mongoose.set('strictQuery', false);

mongoose.connect('YourConnectionString', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB Connection Successfull')
}).catch(err => console.log(err.message))

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use('/', authRoutes);
