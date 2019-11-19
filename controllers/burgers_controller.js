const express = require('express');
const burger = require('../models/burger');

const routes = express.Router();

routes.get('/', function (req, res) {
    burger.all(function (data) {
        const hbsObject = { burger: data };
        res.render('index', hbsObject);
    });
});

routes.get('/api/burgers', function (req, res) {
    burger.all(function (data) {
        res.json(data)
    });
});

routes.post('/api/burgers', function (req, res) {
    burger.insert(req.body, function (results) {
        res.json({ id: results.insertId });
    }
    );
});

routes.put("/api/burgers/:id", function (req, res) {

    const setObj = { devoured: req.body.devoured }; //object! not array!!!

    burger.update(setObj, 'id', req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

module.exports = routes;

