"use strict";

exports.setRequestUrl = function (app) {
    // var account = require('./controllers/account');
    //
    // app.put('/:token/withdraws/:refno', withdraw.create);
    var snap = require('./controller/snap');

    app.post('/snap', snap.create);


};