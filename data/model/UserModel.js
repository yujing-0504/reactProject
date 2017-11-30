var mongoose = require("mongoose")

var Schema = mongoose.Schema;
  //  ObjectId = Schema.ObjectId;

var User = new Schema({
   
    username: String,
    psw     : String,
    date    : {type:Date,default:Date.now}
});
var UserModel = mongoose.model("user",User);
module.exports = UserModel;