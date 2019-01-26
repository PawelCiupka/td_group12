const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const hallTimetableSchema = new Schema({
    _id: Schema.Types.ObjectId,
    hallName: {
        type: String,
        required: true
    },
    hallType: {
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