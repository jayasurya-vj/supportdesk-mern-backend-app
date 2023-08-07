import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema({
  name:{type:String,required:[true, "Please add a name"]},
  email:{type:String,required:[true, "Please add an email"],unique:true},
  password:{type:String,required:[true, "Please add a password"]},
  isAdmin:{type:Boolean,required:true,default: false}
},{
  timestamps: true
})

userSchema.plugin(uniqueValidator);

const User = mongoose.model("User",userSchema);
 export default User;
