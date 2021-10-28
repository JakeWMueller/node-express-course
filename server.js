const express = require('express');
const app = express();


PORT = 8000;

app.listen(8000, function(){
    console.log("Server is running on port " + PORT)
});