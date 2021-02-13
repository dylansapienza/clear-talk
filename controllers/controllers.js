const User = require("../db/models/user-model")

const saySomething = (req, res, next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};

module.exports.saySomething = saySomething;

const accountCreation = (req, res, next) => {
    body = req.body;
    console.log(body);

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide all info'
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })

    }

    user.save()
    .then(() => {
        return res.send('/login');
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'User not created!',
        })
    })

}

module.exports.accountCreation = accountCreation;