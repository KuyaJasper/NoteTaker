// Global variables for server.
const express = require('express');
const path = require('path');
const app = express();

// set up PORT for server hosting, if not available localhost 8000 will be used
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//HTML Routes

app.get('/notes',(req,res)=>res.sendFile(path.join(__dirname,'./public/notes.html')));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'./public/index.html')));

/* When loading server using a '*' route it will default to index.html this needs to be stacked last
or else other routes will not work */

// code to start the server.
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));