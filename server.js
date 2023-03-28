const express = require("express")
const app = express()
const port = 3000
const drinks = require("./models/drinks.js")


app.get ("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
  })


  app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", { allDrinks: drinks })
})
  
app.get("/drinks.js/:indexOfDrinksArray", (req, res) => {
    res.render("show.ejs", { drink:drinks[req.params.indexOfDrinksArray]})
})

app.listen(3000, () => {
  console.log("Welcome to gitpub !")
})










// app.get("/drinks.js/", (req, res) => {
//         res.send(drinks)
//       })

//       app.get("/drinks.js/:indexOfDrinksArray", (req,res) => {
//     console.log(req.params.indexOfDrinksArray)
// })

// app.listen(3000, () => {
//     console.log(`Welcome to the Gitpub App! ${port}`)
// })
