const Router = require('express').Router()
const controller = require('../controllers/CommentController')

Router.get('/postComments/:postId', controller.GetPostComments)


module.exports = Router