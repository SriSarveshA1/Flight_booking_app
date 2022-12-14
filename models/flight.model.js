const mongoose=require('mongoose');

const flightSchema =new mongoose.Schema({

    flightNumber:{
            type:String,
            required:true,
            unique:true//this field will be unique and each flight will be uniquly identified by this number.
    },
    price:{
        type:Number,
        req:true
    },
    departureAirport:{
        type:String,
        required:true
    },
    arrivalAirport:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    airLineBelongs:{//so here we are referring to another model
        type:mongoose.Schema.Types.ObjectID,
        ref:"airLine",
        required:true
    },
    flightDate:{
        type:Date,
        default:Date.now
    },
    departureTime:{
        type:Date//so this how we store time Date type (which is basically a timestamp):
    },
    arrivalTime:{
        type:Date
    },
    boardingGate:{
        type:Number//so we need to mention the boardingGate number
    },
    createdAt :{
        type : Date,
        immutable :true,
        default : () =>{ //method is needed to get new date everytime.
                    return Date.now()
        }
    },
    updatedAt :{
         type : Date,
         default : () =>{
                  return Date.now()
        }
    }

})


module.exports =mongoose.model('flight',flightSchema);