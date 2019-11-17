const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();


app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(PORT, function () {
    console.log(`We are on http://localhost:${PORT}`);
})