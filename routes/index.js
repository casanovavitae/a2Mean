var express = require('express');
var router = express.Router();

/*router.get('/',function(req,res,next){
    res.render('dist/index.html');
})

router.get('/login',function(req,res,next){
    res.send('Login Page');
})*/

router.get('*', function(req, res) {
    console.log("dirname",process.env.PWD)
  res.sendFile(process.env.PWD +'/client/dist/index.html')
})

module.exports = router;