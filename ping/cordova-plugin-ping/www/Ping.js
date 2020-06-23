var exec = require('cordova/exec');

exports.getPingInfo = function (ipList, success, error) {
    exec(success, error, 'Ping', 'getPingInfo', ipList);
};

