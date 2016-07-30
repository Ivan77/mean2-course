/**
 * Created by atilla8huno on 08/07/16.
 */
var mongoose = require('mongoose');

var connection = {
    connect: function () {
        mongoose.connect('mongodb://admin:admin@ds031965.mlab.com:31965/mynotesweb', function (err) {
            if (err) throw err;

            console.log('MongoDB connected mongo');
        });
    }
};

module.exports = connection;