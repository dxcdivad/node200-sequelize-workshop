const express = require('express');
const router = express.Router();
const Blog = require('../db/models/Blog');
// const Author = require('../models/Author');
const models = require("../db/models/index");


router.get('/', (req, res) => {
    models.Blog
        .findAll()
        .then(blogs => {
            res.status(200).json(blogs);
        });
});

router.get('/featured', (req, res) => {
    models.Blog
        .findAll({
            where: {
                featured: true
            }
        })
        .then(blogs => {
            if(blogs) {
                res.status(200).json(blogs)
            } else {
                res.status(404).json(blogs)
            }
        });
});

router.get('/:id', (req, res) => {
    models.Blog
        .findById(req.params.id)
        .then(blogs => {
            if(blogs) {
                res.status(200).json(blogs)
            } else {
                res.status(404).json(blogs)
            }
        });
});



router.post('/', (req, res) => {
    req.body.authorId = req.query.authorId;
    models.Blog
        .create(req.body)
        .then(blogs => {
            if(blogs) {
                res.status(200).json(blogs)
            } else {
                res.status(404).json(blogs)
            }
        });
});

router.put('/:id', (req, res) => {
    models.Blog 
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(blogs => {
            if(blogs) {
                res.status(204).json(blogs)
            } else {
                res.status(404).json(blogs)
            }
        });
});

router.delete('/:id', (req, res) => {
    models.Blog
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(blogs => {
            if(blogs) {
                res.status(200).json(blogs)
            } else {
                res.status(404).json(blogs)
            }
        });
});


module.exports = router;