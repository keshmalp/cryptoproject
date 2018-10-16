var mongoose=require('mongoose');
console.log('init');
var user=mongoose.model('user',{
  fname:
  {
    type:String,
    required:true,
    minlength:1,
    trim:true//should not contain only white spaces
  },
  mname:
  {
    type:String,
    required:true,
    minlength:1,
    trim:true//should not contain only white spaces
  },
  lname:
  {
    type:String,
    required:true,
    minlength:1,
    trim:true//should not contain only white spaces
  },
  adhar:
  {
    type:Number,
    required:true,
    minlength:12,
    trim:true//should not contain only white spaces
  }
});
module.exports=
{
  user:user
}
