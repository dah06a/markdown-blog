const express = require('express');
const mongoose = require('mongoose');
const articleRouter = require('./routes/articles');
const Article = require('./models/article');
const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost/markdown-blog');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({ createdAt: 'desc' });
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