var express = require('express');
var Sequelize = require('sequelize');

var Foto = require('../models').foto;
var router = express.Router();

router.get('/findAll/json',function(req, res, next) {

    Foto.findAll({
        attributes: { exclude: ['updatedAt'] }
    })
    .then(fotos => {
        res.json(fotos)
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;