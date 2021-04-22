// Global variables for server.
const express = require('express');
const path = require('path');
const app = express();
const NotesDB = require('./db/notesdb');

// set up PORT for server hosting, if not available localhost 8000 will be used
const PORT = process.env.PORT || 8000;

//HTML Routes
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// static makes the server and html talk
app.use(express.static("public"));

app.get('/notes',(req,res)=> res.sendFile(path.join(__dirname,'./public/notes.html')));

// API get data

app.get('/api/notes',(req,res)=> res.json(NotesDB));

//API post data

app.post('/api/notes',(req,res) =>{
    const newNote = req.body;
    NotesDB.push(newNote);
    res.json(true);
})

app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'./public/index.html')));

/* When loading server using a '*' route it will default to index.html this needs to be stacked last
or else other routes will not work */

// code to start the server.
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));