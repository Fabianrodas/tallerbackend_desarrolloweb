var express = require('express');
const { Sequelize, Op } = require('sequelize');

var Foto = require('../models').foto;
var Etiqueta = require('../models').etiqueta;
var router = express.Router();

router.get('/findAll/json',function(req, res, next) {

    Foto.findAll({
        attributes: { exclude: ['updatedAt'] },
        include: [{
            model: Etiqueta,
            through: { attributes: [] },
            attributes: ['texto'] 
        }]
    })
    .then(fotos => {
        res.json(fotos)
    })
    .catch(error => res.status(400).send(error));
});

router.get('/findAllById/:id/json', function(req, res, next) {
    let id = parseInt(req.params.id);
    Foto.findAll({
        attributes: { exclude: ['updatedAt'] },
        include: [{
            model: Etiqueta,
            through: { attributes: [] },
            attributes: ['texto'] 
        }],
        where: {
            [Op.and]: [
                { id: id }
            ]
        }    
    })
    .then(fotos => {
        res.json(fotos)
    })
    .catch(error => res.status(400).send(error));
});

router.get('/findAllByRate/json',function(req, res, next) {
    let lower = parseFloat(req.query.lower);
    let higher = parseFloat(req.query.higher);
    Foto.findAll({
        attributes: { exclude: ['updatedAt'] },
        include: [{
            model: Etiqueta,
            through: { attributes: [] },
            attributes: ['texto'] 
        }],
        where: {
            calificacion: {
                [Op.between]: [lower, higher]
            }
        }    
    })
    .then(fotos => {
        res.json(fotos)
    })
    .catch(error => res.status(400).send(error));
});

module.exports = router;