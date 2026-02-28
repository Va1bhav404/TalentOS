const express = require('express');

const app = express();

const mongoose = require('mongoose');



mongoose.connect(uri)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

app.get('/health',(req,res)=>{
    res.send('your server is up and running')
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})