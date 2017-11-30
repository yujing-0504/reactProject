var express = require('express');
var router = express.Router();
var UserModel = require("../model/UserModel");

/* GET users listing. */

router.post('/register',function(req,res,next){
 UserModel.find({username:req.body.username},(err,docs)=>{
  if(docs.length > 0){
    res.send("该用户已存在");
    return;
  }
  var result={
    code : 1
  }
  let user = new UserModel();
  user.username = req.body.username;
  user.psw = req.body.psw;
  user.save((err)=>{
    if(err){
      result.code = "-120"
      result.message = "注册失败";
      return;
    }
    res.send(JSON.stringify(result))
  })
 })
});
	// console.log(req.body);
	// res.send("OK")
//  UserModel.find({username: req.body.username}, function (err, docs) {
//     //docs查询不到则用户不存在
//     if(docs.length > 0) {
//       res.send("该用户已经被注册");
//       return;
//     }
//     var result = {
// 			code: 1
// 		}
		
//     let user = new UserModel();
//     user.username = req.body.username;
//     user.psw = req.body.psw;
//     user.save((err)=>{
//     	console.log(err)
//       if(err) {
//         result.code = -120;
//         result.message = "注册失败"
//         //res.send("注册失败");
//         //return;
//       } 
//         //res.render("login", {title: "登录页面"});
//         res.send(JSON.stringify(result));   
//     });
//   });
// });
router.post('/login', function(req, res, next) {
  UserModel.find({username:req.body.username,psw:req.body.psw},(err,docs)=>{
    var result = {
      code:1
    }
    if(err|| docs.length ==0){
      result.code = -199;
      result.message = "登录失败"
    }
    res.send(JSON.stringify(result))
  })
	// UserModel.find({username: req.body.username, psw: req.body.psw}, (err, docs)=>{
	// 	var result = {
	// 		code: 1
	// 	}
	// 	if(err || docs.length == 0) {
	// 		result.code = -110;
	// 		result.message = "登录失败";
	// 	}

	// 	res.send(JSON.stringify(result));
	// })

});

module.exports = router;
