const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const id = mongoose.Types.ObjectId();

const weekSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: id
    },
    days: [{
        type: Schema.Types.ObjectId, 
        ref: 'Day'
    }]
});

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;