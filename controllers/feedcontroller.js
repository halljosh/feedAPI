exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{title: 'first post', content: 'this is the first post!'}]
    });
};

exports.postPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    res.status(201).json({
        message: 'post created sucesfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
};