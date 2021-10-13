const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('/prove02', {
    title: 'Index',
    path: '/prove02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;