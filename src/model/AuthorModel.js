const mongoose = require('mongoose');
// add {useNewUrlParser: true, useUnifiedTopology: true} to mongoclient.connect() to avoid deprecation
mongoose.connect('mongodb+srv://anandu22695:Fendocaster123@cluster0.scrfn.mongodb.net/dbgreenday?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
    
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;