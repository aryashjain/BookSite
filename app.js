const express =require('express')
const bodyParser= require('body-parser');
const { appendFile } = require('fs');
const router = require('./api/router');

const ap=express();
const PORT =5000;
ap.use(bodyParser.json());
ap.use('/api/v1',router)
ap.post('/',router)
ap.listen(PORT,()=>console.log(`listening on ${PORT}`));