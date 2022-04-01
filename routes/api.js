const express = require('express');
// get using express router
const router = express.Router();
// define article controller and export it for this file
const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');

// use controller functions according to the route
router.get('/article', apiArticleController.getArticleBySlug);
router.get('/author', apiAuthorController.getAuthor);

// export article router for using in default application file
module.exports = router;