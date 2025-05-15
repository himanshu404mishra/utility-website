const express = require("express")
const indexRouter = require("./routes/index.route")
const aboutRouter = require("./routes/about.route")
const contactRouter = require("./routes/contact.route")
const serviceRouter = require("./routes/services.route")

const path = require("path")

const app = express()

app.use(express.static(path.join(__dirname, "public")))
app.set("view engine", "ejs")

app.use("/", indexRouter)
app.use("/about", aboutRouter)
app.use("/contact",contactRouter)
app.use("/services", serviceRouter)


app.use((req, res, next) => {
    res.status(404).render("404",{
        message: "Route not found",
        status: false
    })
})


module.exports = app

