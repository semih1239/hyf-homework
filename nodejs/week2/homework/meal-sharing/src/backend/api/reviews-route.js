const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        response.send(reviews)
    } catch (error) {
        throw error;
    }
});

router.get("/:id", async (request, response) => {
    const id = request.params.id
    if (isNaN(parseInt(id))) {
        return response.status(400).send('Please write an correct id number')
    }
    else {
        response.send(reviews.filter(reviews => reviews.id == id)[0])
    }
});

module.exports = router;
