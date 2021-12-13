const express = require('express');
const mongoose = require('mongoose');
const app = express();
const articleRouter = require('./routes/articles');
const PORT = 5000;

mongoose.connect('mongodb://localhost/markdown-blog');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description.'
    }]
    res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter);

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Listening on port ${PORT}`)
    }
});