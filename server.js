const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const PORT = process.env.PORT || 3000;
const debug = require('debug')('app');
const app = express();

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./controllers/burgers_controller');

app.use(routes);

app.listen(PORT, function () {
    debug(`We are on http://localhost:${PORT}`);
})