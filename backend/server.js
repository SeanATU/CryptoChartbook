const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoUri = 'mongodb+srv://g00292129:UCUBjdzHpfx6BGGW@thecryptochartbook.zklreoi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors()); 
app.use(bodyParser.json());

const emailSchema = mongoose.Schema({
    email: String,
});

const Email = mongoose.model('Email', emailSchema); 

app.post('/api/addemail', async (req, res) => {
    const addEmail = new Email({
        email: req.body.email,
    });

    try {
        const savedEmail = await addEmail.save();
        console.log(savedEmail);
        res.status(200).json({ message: 'Email added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'An error occurred' });
    }
});


const port = process.env.PORT || 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});