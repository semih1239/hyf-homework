const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        response.send(reservations)
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
        response.send(reservations.filter(reservation => reservation.id == id)[0])
    }
});

module.exports = router;
