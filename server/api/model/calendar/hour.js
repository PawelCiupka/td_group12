const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const hourSchema = new Schema({
    _id: Schema.Types.ObjectId,
    value: {
        type: String,
        required: true
    },
    hallType: {
        type: String,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    isPossible: {
        type: Boolean,
        default: true
    },
    room: {
        type: String,
        default: ''
    }
});

const Hour = mongoose.model('Hour', hourSchema);

module.exports = Hour;