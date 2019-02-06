const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const id = mongoose.Types.ObjectId();

const hourSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: id
    },
    value: {
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