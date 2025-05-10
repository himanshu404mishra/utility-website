const express = require("express")
const router = require("./routes/index.route")
const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

app.use("/", router)
app.use((req, res, next) => {
    res.status(404).render("404",{
        message: "Route not found",
        status: false
    })
})


module.exports = app

