const { query, request } = require("express");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/numbers/add", (req, res) => {
    const query = req.query
    if(query.first && query.second){
        res.send(`Total Number = ${Number(query.first) + Number(query.second)}`)
    }
})

app.get("/numbers/multiply/:firstnumber/:secondnumber", (req, res) => {
    const params = req.params
    res.send(`Result = ${Number(params.firstnumber) * Number(params.secondnumber)}`)
})


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
