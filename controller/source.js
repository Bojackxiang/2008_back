const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

var sourceSchema = new Schema({
    source: String,
});

var sourceId = mongoose.model('source', sourceSchema);