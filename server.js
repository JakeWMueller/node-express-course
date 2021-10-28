const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]
app.get('/users', function(req, res){
    res.json({
        succes: true,
        message: 'successfully got users. Yay.',
        users: mockUserData
    })
})

PORT = 8000;

app.listen(8000, function(){
    console.log("Server is running on port " + PORT)
});