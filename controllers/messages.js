const Message = require('../models/message')

module.exports={
    index,
    create,
    show, 
    respond
}


function index(req, res){
    Message.find({}).then((messages, user)=>{
        res.render('messages/messageboard',{
            title: "Family Q & A Board", 
            user: req.user, 
              messages : messages.reverse(),
              user
        })
    })
}

function create(req, res){
    req.body.postedBy = req.user.name
    req.body.avatar =req.user.avatar
    Message.create(req.body)
    .then(()=>{
        res.redirect('/messageboard')
    })
}
  function show(req, res) {
    Message.findById(req.params.id).then((message) => {
      res.render("messages/userMessages", {
        title: `Post`,
        user: req.user,
        message,
        
      });
    });
  }
  function respond(req, res) {
    Message.findById(req.params.id).then((message) => {
      req.body.postedBy = req.user.name;
      req.body.avatar = req.user.avatar;
      message.replies.push(req.body);
      message.save().then(() => {
        res.redirect(`/messageboard/${req.params.id}`);
      });
    });
  }