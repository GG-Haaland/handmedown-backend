const { Post } = require('../models')


const GetAllPosts = async (req, res) => {
    try {
        const posts = await Post.findAll()
        res.send(posts)
        console.log('Posting')
    } catch (err) {
        throw err
    }
}
const GetPostById = async (req, res) => {
  try {
      const { id } = req.params;
      const post = await Post.findByPk(id)
      if (post) {
          return res.status(200).json({ post });
      }
      return res.status(404).send('post with the specified ID does not exists');
  } catch (error) {
      return res.status(500).send(error.message);
  }
}


const GetPostByPk = async (req, res) => {
  try {
      const post = await Post.findByPk(req.params.postid)
      res.send(post)
  } catch (error) {
      throw error
  }
}


const GetPostDetails = async (req, res) => {
  try {
    const details = await Post.findByPk(
      req.params.postid
      );
      res.send(details)
    } catch (err) {
      throw err
    }
    
  }
  
  const CreatePost = async (req, res) => {
    try {
      // Find the Post by owner
      //dont need this line the post should increment automatically let postId = parseInt(req.params.postid);
      //userId will be sent in the body of req let userId = parseInt(req.params.userid);
      let postBody = {
        // userId is sent in the body of the request      userId,
      ...req.body,
    };
    let post = await Post.create(postBody);
    res.send(post);
  } catch (err) {
    throw err;
  }
};

const UpdatePost = async (req, res) => {
      // let postId = req.body.postid
    // let userId = req.body.userid
    // let post2update = await Post.findByPk(postId)
    let updatedPost = await Post.update({...req.body}, {
        where: { id:req.body.id }, // where our id = our postId
        returning: true,
      });
      //Sending out our updated post
      res.send(updatedPost);
    } 

const DeletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.post_id);
    
    await Post.destroy({
      where: { id: postId },
    });
    /// Have some message telling us it worked
    res.send({ message: `deleted a post with an id of ${postId}` });
  } catch (error) {
    throw error;
  }
};



const GetPostByUser = async (req, res) => {
  try {
    let userId = req.params.userid
    const usersPost = await Post.findAll(
      {where: {userid: userId}}

    )
    res.send(usersPost)
  } catch (error){
    throw error
  }
}




module.exports = {
    GetAllPosts,
    GetPostDetails,
    CreatePost,
    UpdatePost,
    DeletePost,
    GetPostByUser,
    GetPostByPk,
    GetPostById
}
