var express = require('express');
var router = express.Router();

/*router.get('/',function(req,res,next){
    res.render('dist/index.html');
})

router.get('/login',function(req,res,next){
    res.send('Login Page');
})*/

router.get('*', function(req, res) {
  res.sendfile('./client/dist/index.html')
})

module.exports = router;