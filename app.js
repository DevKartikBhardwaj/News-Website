const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

main().catch((err) => { console.log(err) });

async function main() {
    await mongoose.connect("mongodb://localhost:27017/news");
}

var newsSchema = new mongoose.Schema({
    name: String,
    email: String,
    feedback: String
});

var newsModel = mongoose.model('Feedback', newsSchema);

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.status(200).render('home');
})

app.post('/', (req, res) => {
    let mydata = new newsModel(req.body);
    mydata.save().catch(() => { console.log("Some error in Database!!!!") });
    res.status(200).render('home');
})

app.listen(80, () => {
    console.log('app is rolling');
})