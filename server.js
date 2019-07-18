const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Start DB
mongoose.connect('mongodb://admin:admin@ds157325.mlab.com:57325/dndclack', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
let database = mongoose.connection;

database.once('open', ()=> {
    console.log("Mongoose Connection Successful");
})

database.on('error', (error)=> {
    console.log("Mongoose Connection: " + error);
})

let Character = require('./models/Character');
//End DB

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response)=> {
    Character.findOne({ 'info.name': 'Bone-clack noise' }, (error, character)=> {
        if (error) {
            console.log(error);
        }
        response.render('index.html');
    })
});

app.get('/api', (request, response)=> {
    Character.find({}, (error, characters)=> {
        if (error) {
            response.send(error);
        }
        response.json(characters);
    });
});

app.post('/api', (request, response)=> {
    Character.findOneAndUpdate({ 'info.name': 'Bone-clack noise' }, request.body, (error, characters)=> {
        if (error) {
            response.send(error);
        }
        response.json(characters);
    });
});

app.listen(3000, ()=> {
    console.log("Server started on port 3000");
})