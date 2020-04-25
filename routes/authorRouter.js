const express = require('express');

// add our router
const authorRouter = express.Router();

// require the author controller
const authorController = require('../controllers/authorController.js');

// handle the GET request on root of author-management path,
// i.e. get all authors
authorRouter.get('/', (req, res) => authorController.getAllAuthors(req, res));

// handle the GET request to get an author by ID
// note that :id refers to a param, accessed by req.params.id in controller fn
authorRouter.get("/:id", authorController.getAuthorByID);

// handle the POST request to add an author
authorRouter.post("/", authorController.addAuthor);

// handle the POST request to update an author
// note that the PATCH method may be more appropriate
authorRouter.post("/:id", authorController.updateAuthor);

// export the router
module.exports = authorRouter;