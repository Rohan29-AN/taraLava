var express = require('express');
var router = express.Router();


module.exports=()=>{
  router.get('/',function(req,res,next){
    res.render('authentification/signin')
  })

  router.get('/signup',function(req,res,next){
    res.render('authentification/signup')
  })

  router.get('/dashboard',function(req,res,next){
    res.render('dashboard/index')
  })

  return router
}

