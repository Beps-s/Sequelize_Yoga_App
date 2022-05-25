const express = require('express');
// get using express router
const router = express.Router();
// define article controller and export it for this file
const apiArticleController = require('../controllers/api/article');
const apiAuthorController = require('../controllers/api/author');
const apiTagController = require('../controllers/api/tags')

// use controller functions according to the route
router.get('/article', apiArticleController.getArticleBySlug);
router.get('/author', apiAuthorController.getAuthor);
router.get('/tag', apiTagController.getTags);

// export article router for using in default application file
module.exports = router;