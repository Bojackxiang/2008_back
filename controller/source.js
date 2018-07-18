const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const sourceSchema = new Schema({
    source: String,
    counter: Number,
});

var sourceId = mongoose.model('source', sourceSchema);
module.exports = sourceId;