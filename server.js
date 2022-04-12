const express = require('express');
const postsRoute = require('./routes/post');

const app = express();
app.use(express.json());

app.use('/post', postsRoute)

app.listen(5000, () => console.log('Running on 5000'));