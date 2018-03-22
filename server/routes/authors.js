const express = require('express');
const router = express.Router();
const models = require("../db/models/index");



router.get('/', (req, res) => {
    models.Author
        .findAll()
        .then(authors => {
            res.status(200).json(authors);
        });
});

router.get('/:id', (req, res) => {
    models.Author
        .findById(req.params.id)
        .then(authors => {
            if(authors) {
                res.status(200).json(authors)
            } else{
            res.status(404).send("Author not found");
            }
        });
});

router.get('/:id/blogs', (req, res) => {
    models.Blog
        .findAll({
            where: {
                authorId: req.params.id
            }
        })
        .then(authors => {
            if(authors) {
                res.status(200).json(authors)
            } else{
            res.status(404).json(authors);
            }
        });
});

router.post('/', (req, res) => {
    models.Author
        .create(req.body)
        .then(authors => {
            if(authors) {
                res.status(201).json(authors)
            } else{
            res.status(404).json(authors);
            }
        })
})

router.put('/:id', (req, res) => {
    models.Author
        .update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(authors => {
            if(authors) {
                res.status(204).json(authors)
            } else {
                res.status(404).json(authors);
            }
        });
        
});

router.delete('/:id', (req, res) => {
    models.Author
        .destroy({
            where: {
                id: req.params.id
            }
      })
    .then(authors => {
        if(authors) {
            res.status(200).json(authors)
        } else {
            res.status(404).json(authors)
        }
    });
});



module.exports = router;