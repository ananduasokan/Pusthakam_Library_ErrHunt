const mongoose = require('mongoose');
// add {useNewUrlParser: true, useUnifiedTopology: true} to mongoclient.connect() to avoid deprecation
mongoose.connect('mongodb+srv://anandu22695:Fendocaster123@cluster0.scrfn.mongodb.net/dbgreenday?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;
const { encrypt, decrypt } = require('cipher');


const UserSchema = new Schema({
    fname:String,
    lname:String,
    uid:String,
    pwd:String
    
},

);

const userdata = mongoose.model('userdata',UserSchema);

module.exports = userdata;