const mongoose = require('mongoose');
const Day = require('../model/calendar/day');

module.exports = {
    create : function(req, res) {        
        const id = mongoose.Types.ObjectId();

        const d = new Date(req.body.year, req.body.month, req.body.day);
        const arrayOfDays = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
        const dayOfWeek = arrayOfDays[d.getDay()];

        console.log('_______________________________________');
        console.log(req.body.year + '-' + req.body.month + '-' + req.body.day);
        console.log('Day of week: ' + dayOfWeek);
        console.log('Date: ' + d);
        console.log('_______________________________________');

        const day = new Day({
            _id: id,
            year: req.body.year,
            month: req.body.month,
            day: req.body.day,
            dayOfWeek: dayOfWeek,
            hallType: req.body.hallType
        });

        day.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the days."
            });
        });
    },
    getAll : function(req, res) {
        Day.find()
        .then(day => {
            res.send(day);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving days."
            });
        });
    },
    getSingle : function(req, res) {
        Day.findOne({ _id: req.id})
        .then(day => {
            res.send(day);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occuered while retriving day."
            });
        });
    },

}