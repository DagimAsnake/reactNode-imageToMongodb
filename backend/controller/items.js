const Item = require("../model/item.js");

module.exports.getItems = async(req,res)=>{
    try {
        const item =await Item.find()
       
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}


module.exports.createItem = async(req,res)=>{
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json({message: "Post created successfully!"});
    } catch (error) {
        
    }
}


module.exports.getPost = (req, res) => {
    const postId = req.params.postId;
    Item.findById(postId)
      .then((post) => {
        if (!post) {
          const error = new Error("Could not find post.");
          error.statusCode = 404;
          throw error;
        }
        res.status(200).json(post);
      })
      .catch((err) => {
      });
  };

  module.exports.updatePost = (req, res) => {
    const postId = req.params.postId;
  
    const title = req.body.title;
    const image = req.body.image;
   
    Item.findById(postId)
      .then((post) => {
        if (!post) {
          console.log("could not find a post");
        }
        post.title = title;
        post.image = image;
        return post.save();
      })
      .then((result) => {
        res.status(200).json({ message: "Post updated!", post: result });
      })
      .catch((err) => {
      });
  };