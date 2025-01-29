const express = require('express');
const app = express();

const cors = require('cors')
const port = 4000;

require('dotenv').config();


//middleware
app.use(express.json()) // fournie par express trans les obj en json 
app.use(cors())





const axios = require('axios')



app.get('/', (req , res) => {
    res.json('en route')
});


app.listen(port, () => {
    console.log('port lancé')

});