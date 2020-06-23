var exec = require('cordova/exec');

exports.startService = function (interval, success, error) {
    exec(success, error, 'BackgroundTask', 'startService', [interval]);
};

exports.stopService = function () {
    exec(null, null, 'BackgroundTask', 'stopService', []);
};

exports.pauseTask = function () {
    exec(null, null, 'BackgroundTask', 'pauseTask', []);
};

exports.resumeTask = function () {
    exec(null, null, 'BackgroundTask', 'resumeTask', []);
};

