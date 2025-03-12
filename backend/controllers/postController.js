const Post = require("../models/Post.js");
const mongoose = require("mongoose");

exports.makePost = async (req, res) => {
    console.log("makePost route hit!");
    try {
      // Check if token is provided
      const { token, username, profileImg } = req.body;
      if (!token) {
        return res.status(401).json({ message: "Token is required" });
      }
      // Verify the token
      let userId;
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.userId;
        console.log(decoded);
      } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }
      console.log(req.file);
      // Check if file is provided
      if (!req.file) {
        return res.status(400).json({ message: "File is required" });
      }

      const { originalname, buffer, mimetype } = req.file;
  
      // Create a new post
      try {
        const newPost = new Post({
          userId: userId,
          username: username,
          profileImg: profileImg,
          boardingPass: {
            name: originalname, // Use originalname instead of name
            image: buffer,
            contentType: mimetype, // Use mimetype instead of contentType
          },
        });
  
        await newPost.save();
        res.status(201).json({ message: "Post created successfully" });
      } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Error creating post" });
      }
    } catch (error) {
      console.error("Unexpected error in makePost:", error);
      res.status(500).json({ message: "Internal server error" });
    }
};

exports.getPosts = async(req, res) => {
    try {
        const postList = await Post.find().sort({timeCreated: -1}).limit(20);
        if(!postList){
            return res.status(400).json({ message: "No posts or error getting posts" });
        }
        res.json({ postList });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving posts" });
    }
}

//TODO: implement functions for updating likes and adding comments.

exports.like = async(req, res) => {
    try {
        const { postId, username } = req.body;
        const post = await Post.findOne({ _id: mongoose.Types.ObjectId(postId) });
        if(!post){
            return res.status(400).json({ message: "Post not found" });
        }
        if (post.likes.likedBy.includes(username)){
            post.likes.count = post.likes.count - 1;
            post.likes.likedBy = post.likes.likedBy.filter(user => user !== username);
        } else {
            post.likes.count = post.likes.count + 1;
            post.likes.likedBy.push(username);
        }
        await post.save();
        res.json( post.likes );
    } catch (error) {
        res.status(500).json({ message: "Error adding like" });
    }
}


exports.makeComment = async(req, res) => {
    try {
        const { postId, username, comment } = req.body;
        const post = await Post.findOne({ _id: mongoose.Types.ObjectId(postId) });
        if(!post){
            return res.status(400).json({ message: "Post not found" });
        }
        const newComment = {
            author: username,
            comment: comment
        } 
        post.comments.push(newComment);
        await post.save();
        res.json( post.comments );
    } catch (error) {
        res.status(500).json({ message: "Error adding comment" });
    }
}

