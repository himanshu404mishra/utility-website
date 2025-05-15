const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about', {
        title: 'About Us',
        message: 'This is the about page.',
        status: true
    });
});


module.exports = router;