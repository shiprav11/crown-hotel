const mongoose=require('mongoose');
const userSchema1=new mongoose.Schema(

    {
        email:{
            type:String,
            required:true
        }
    }
    )
const User2=mongoose.model('NewsLetterSubscriptionData',userSchema1);

module.exports=User2;