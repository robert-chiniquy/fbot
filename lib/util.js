
var
  exec = require('child_process').exec,
  web = require('./web.js');


/** @param {String} command 
 * @param {function(success, url)} callback
 */
function run(command, callback) {
  var 
    child = exec(command,
      function (error, stdout, stderr) {
        // build url
        var
          url = web.store(command, "stdout: " + stdout + "\n\nstderr" + stderr);
        
        callback(error === null, url);
      }
    );
  
}

exports.run = run;