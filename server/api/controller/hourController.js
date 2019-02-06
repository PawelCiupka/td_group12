const mongoose = require('mongoose');
const Hour = require('../model/calendar/hour');

module.exports = {
    create : function(req, res) {        
        const id = mongoose.Types.ObjectId();
        const room = req.body.room;

        if(room === null) {
            room = '';
        }

        console.log('_______________________________________');
        console.log('Godzina: ' + req.body.value + ', pokój ' + room);
        console.log('_______________________________________');

        const hour = new Hour({
            _id: id,
            value: req.body.value,
            isAvailable: true,
            isPossible: true,
            room: room
        });

        hour.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the days."
            });
        });
    },
    getAll : function(req, res) {
        Hour.find()
        .then(hour => {
            res.send(hour);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving days."
            });
        });
    }

}