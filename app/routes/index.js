var express = require('express');
var router = express.Router();


module.exports=()=>{
  router.get('/',function(req,res,next){
    res.render('authentification/signin')
  })

  router.get('/signup',function(req,res,next){
    res.render('authentification/signup')
  })

  return router
}

