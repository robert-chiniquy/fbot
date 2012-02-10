
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
        // build url, store results
        var
          url = web.store(command, "stdout:\n\n<pre>"+ stdout +"</pre>\n\nstderr:\n\n<pre>"+ stderr +"</pre>");
        
        callback(error === null, url);
      }
    );
  
}

exports.run = run;