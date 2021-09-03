const { request, response } = require("express");
const express = require("express");
const app = express();

// With Get

app.get("/calculator/add", (req, res) => {
    const query = req.query
    let total = 0
        for (let i = 0; i < query.firstParam.length; i++) {
            if (parseInt(query.firstParam[i])) {
                total += Number(query.firstParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
        for (let i = 0; i < query.secondParam.length; i++) {
            if (parseInt(query.secondParam[i])) {
                total += Number(query.secondParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
    res.send("Total number : " + total)
})

app.get("/calculator/substraction", (req, res) => {
    const query = req.query
    let result = query.firstParam  // For Substraction from first Number
        for (let i = 0; i < query.firstParam.length; i++) {
            if (parseInt(query.firstParam[i])) {
                result -= Number(query.firstParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
        for (let i = 0; i < query.secondParam.length; i++) {
            if (parseInt(query.secondParam[i])) {
                result -= Number(query.secondParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
    res.send("Result : " + result)
})

app.get("/calculator/multiply", (req, res) => {
    const query = req.query
    let result = query.firstParam  
        for (let i = 0; i < query.firstParam.length; i++) {
            if (parseInt(query.firstParam[i])) {
                result *= Number(query.firstParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
        for (let i = 0; i < query.secondParam.length; i++) {
            if (parseInt(query.secondParam[i])) {
                result *= Number(query.secondParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
    res.send("Result : " + result)
})

app.get("/calculator/division", (req, res) => {
    const query = req.query
    let result = query.firstParam  
        for (let i = 0; i < query.firstParam.length; i++) {
            if (parseInt(query.firstParam[i])) {
                result /= Number(query.firstParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
        for (let i = 0; i < query.secondParam.length; i++) {
            if (parseInt(query.secondParam[i])) {
                result /= Number(query.secondParam[i])
            }
            else{
                res.status(400).json('Please write Numbers !!!')
            }
        }
    res.send("Result : " + result)
})

// With Post
app.use(express.urlencoded({ extended: true }));

app.post("/calculator/add", (req, res) => {
    res.send(String(Number(req.body.firstParam) + Number(req.body.secondParam)))  // Giving error without string
})

app.post("/calculator/substraction", (req, res) => {
    res.send(String(Number(req.body.firstParam) - Number(req.body.secondParam))) 
})

app.post("/calculator/multiply", (req, res) => {
    res.send(String(Number(req.body.firstParam) * Number(req.body.secondParam))) 
})

app.post("/calculator/division", (req, res) => {
    res.send(String(Number(req.body.firstParam) / Number(req.body.secondParam))) 
})


app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
