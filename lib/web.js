
var
  express = require('express'),
  _ = require('underscore'),
  util = require('./util.js'),
  config = require('./config.js');

(function() {

  var
    app, // defined in init
    store = {};

  /** @param {express|mock express} exp */
  function init(exp) {

    if (typeof exp === 'undefined') {
      exp = express;
    }

    app = exp.createServer();

    app.get('/', function(req, res) {
      // todo view
      
    });

    app.post('/commands/:cmd', function(req, res) {
      var
        cmd = req.params.cmd;

      if (_.has(config.commands, cmd)) {
        util.run(commands[cmd], function(success, url) {
          // grab the message and display inline?
          // todo view
          
        });
      }
      else {
        // error? todo
        
      }
    });
    
    app.get('/results/:key', function(req, res) {
      var
        key = req.params.key;
        
      if (_.has(store, key)) {
        // todo view
        
      }
      else {
        // error? todo
        
      }
    });

    app.listen(config.web.port)
  }

  /** @param {string} command 
   * @param {string} message
   * @returns {string} url to view message
   */
  function store(command, message) {
    // key from command and timestamp
    var
      key = command +"+"+ new Date();
    
    store[key] = message;
  }
  
  exports.init = init;
  exports.store = store;
  
})();

