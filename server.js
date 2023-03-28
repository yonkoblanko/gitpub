const express = require("express")

const app = express()

const port = 3000


app.get ("/", (req, res) => {
    res.send("Welcome to the Gitpub App!")
  })



// app.get("/gitpub/", (req, res) => {
//         res.send(gitpub)
//       })

//       app.get("/gitpub/:indexOfGitpubArray", (req,res) => {
//     console.log(req.params.indexOfGitpubArray)
// })

app.listen(3000, () => {
    console.log(`Welcome to the Gitpub App! ${port}`)
})
