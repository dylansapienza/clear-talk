const User = require("../db/models/user-model")

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};
module.exports.saySomething = saySomething;

const accountCreation = (req, res, next) => {
    body = req.body;
    const user = new User(body)
    user.save()
    .then(() => {
        return res.send('/login');
    })
    .catch(error => {
        return res.status(400);
    })

}
module.exports.accountCreation = accountCreation;

const loginCred = (req, res, next) => {
    User.findOne({ username: req.body.username })
    .exec()
    .then(async (doc) => {
      if (doc === null) {
        res.send("Invalid Username/Password");
        return;
      }
      console.log(doc);
      const query_password = doc.password;

      if(req.body.password == query_password){
          isLoggedIn = true
      }else{
          isLoggedIn = false
      }
      console.log(isLoggedIn);
      if (isLoggedIn) {
        //Valid!
        //Respond with Login Session w/ Username
        //Redirect to homepage
        //Using Document.id as login cookie, should probably change this to something more secure
        res.send(doc);
      } else {
        //Invalid
        res.send("Invalid Username/Password");
        //try again
      }
    });
}
module.exports.loginCred = loginCred;

const getChats = (req, res) => {
  User.findById(req.body.user_token)
    .exec()
    .then(async (doc) =>{
      console.log(doc)
      res.send(doc.chats)
    });
  
}
module.exports.getChats = getChats;

const createChat = (req, res) => {

  User.findOneAndUpdate(
    {_id: req.body.token},
    {$push:{
      chats:{
        friend: req.body.friend,
        messages:{
          sender: 1,
          text: "Chat Intialized",
        },
      },
    }})
    .exec();

    User.findOneAndUpdate({username: req.body.friend},
      {$push:{
        chats:{
          friend: req.body.username,
            messages:{
              sender: 0,
              text: "Chat Intialized",
            },
           },
        }})
        .exec();
  



}
module.exports.createChat = createChat;