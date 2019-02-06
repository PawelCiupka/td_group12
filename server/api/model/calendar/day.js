const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const id = mongoose.Types.ObjectId();

const daySchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: id
    },
    year: Number,
    month: Number,
    day: Number,
    dayOfWeek: String,
    hours: [{
        type: Schema.Types.ObjectId, 
        ref: 'Hour'
    }]
});

const Day = mongoose.model('Day', daySchema);

module.exports = Day;