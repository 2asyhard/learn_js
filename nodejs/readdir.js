var testFolder = '/workspaces/learn_js/';
var fs = require('fs');

fs.readdir(testFolder, function (error, filelist) {
    console.log(filelist);
})