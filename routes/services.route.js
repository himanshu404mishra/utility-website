const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('services', {
        title: 'About Us',
        message: 'This is the about page.',
        status: true
    });
});


module.exports = router;