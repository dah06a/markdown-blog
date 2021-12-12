const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');
const PORT = 5000;

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description.'
    }]
    res.render('articles/index', { articles: articles });
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Listening on port ${PORT}`)
    }
});