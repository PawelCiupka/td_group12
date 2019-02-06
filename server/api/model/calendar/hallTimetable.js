const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const id = mongoose.Types.ObjectId();

const hallTimetableSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        default: id
    },
    hallName: {
        type: String,
        required: true
    },
    week: {
        type: Schema.Types.ObjectId, 
        ref: 'Week'
    }
});

const HallTimetable = mongoose.model('HallTimetable', hallTimetableSchema);

module.exports = HallTimetable;