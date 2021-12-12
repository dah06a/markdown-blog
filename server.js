const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');
const PORT = 5000;

app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    } else {
        console.log(`Listening on port ${PORT}`)
    }
});