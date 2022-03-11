const mongoose = require('mongoose');
// add {useNewUrlParser: true, useUnifiedTopology: true} to mongoclient.connect() to avoid deprecation
mongoose.connect('mongodb+srv://anandu22695:Fendocaster123@cluster0.scrfn.mongodb.net/dbgreenday?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;