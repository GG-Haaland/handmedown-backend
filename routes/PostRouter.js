const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/', controller.GetAllPosts)
router.get('/:id', controller.GetPostByPk)
router.post('/createpost', controller.CreatePost)
router.put('/:post_id', middleware.stripToken,middleware.verifyToken,controller.UpdatePost)
router.delete('/:post_id',middleware.stripToken,middleware.verifyToken,controller.DeletePost)
router.get('/profile/:userid', controller.GetPostByUser)
router.get('/post/:id', controller.GetPostById)


module.exports = router
