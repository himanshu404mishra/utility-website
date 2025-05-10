const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).render("index",{
        message: "Welcome to the App",
        status: true
    })
})


module.exports = router