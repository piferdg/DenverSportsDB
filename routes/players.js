const express = require('express');
const router = express.Router();

const queries = require('../queries');

router.get("/", (request, response, next) => {
    queries.list().then(players => {
        response.json({players});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(player => {
        player
            ? response.json({player})
            : response.status(404).json({message: 'Player not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(player => {
        response.status(201).json({player});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(player => {
        response.json({player});
    }).catch(next);
});

module.exports = router;