const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const daySchema = new Schema({
    _id: Schema.Types.ObjectId,
    date: Date,
    dayOfWeek: {
        type: String
    },
    hallType: {
        type: String,
        required: true
    },
    hours: [{
        type: Schema.Types.ObjectId, 
        ref: 'Hour'
    }]
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;