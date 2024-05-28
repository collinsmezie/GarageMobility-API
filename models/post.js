const mongoose = require('mongoose');



const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creation_Date: {
        type: String,
    },
});


const Post = mongoose.model('garageMobility-blog', postSchema);

module.exports = Post;
