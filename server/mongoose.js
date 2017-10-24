
var mongoose = require('mongoose');


var mongoDB = 'mongodb://127.0.0.1/iKnowSongs';
mongoose.connect(mongoDB);


var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'));


var Schema = mongoose.Schema;

var iKnowSongsModelSchemas = new Schema({
  recordName: String,
  artistName: String,
  capo: String,
  chords: String,
  imgSrc: String
});


var iKnowSongsModel = mongoose.model('iKnowSongsModel', iKnowSongsModelSchemas );

console.log(iKnowSongsModelSchemas.recordName);
