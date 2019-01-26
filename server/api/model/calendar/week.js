const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const weekSchema = new Schema({
    _id: Schema.Types.ObjectId,
    hallType: {
        type: String,
        required: true
    },
    days: [{
        type: Schema.Types.ObjectId, 
        ref: 'Day'
    }]
});

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;