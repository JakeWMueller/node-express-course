const express = require('express');
const app = express();
app.use(express.json());

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]
app.get('/users', function(req, res){
    res.json({
        success: true,
        message: 'successfully got users. Yay.',
        users: mockUserData
    })
})

// colons are used as variables that can be viewed in the params
app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.post('/login', function (req, res) {
    // Typically passwords are encrypted using bcrypt before sending to the database
    const username=req.body.username;
    const password=req.body.password;

    // This should come from the database
    const mockUsername = "billyBob";
    const mockPassword = "superSecret";

    if (username===mockUsername && password === mockPassword){
        // in practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'password and username match',
            token: 'encrypted token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})

PORT = 8000;

app.listen(8000, function(){
    console.log("Server is running on port " + PORT)
});