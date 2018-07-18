const mongoose = require('mongoose');

var sourceSchema = new Schema({
    source: String,
});

var Student = mongoose.model('source', sourceSchema); 