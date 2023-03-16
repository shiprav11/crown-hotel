const mongoose=require('mongoose');
const userSchema=new mongoose.Schema(

    {
        guestName:
        {
            type:String,
            required:true
        },
        checkInDate:
        {
            type:Date,
            // default: Date.now,
            required:true
        },
        checkOutDate:
        {
            type:Date,
            // default: Date.now,
            required:true
        },
        adults:
        {
          type:Number,
          required:true
        },
        children:
        {
            type:Number,
            required:true
        },
        rooms:
        {
            type:Number,
            required:true
        }

        
    }
    )
const User6=mongoose.model('BookingData',userSchema);

module.exports=User6;