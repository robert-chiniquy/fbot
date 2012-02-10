
var
  express = require('express'),
  _ = require('underscore'),
  util = require('./util.js'),
  config = require('./config.js').config;

(function() {

  var
    app, // defined in init
    results = {};

  /** @param {express|mock express} exp */
  function init(exp) {

    if (typeof exp === 'undefined') {
      exp = express;
    }

    app = exp.createServer();

    app.get('/', function(req, res) {
      // todo view
      var
        page = '';
        
      // TODO: templates
      page += '<html><head><title>fbot</title></head><body><ul>';
      _.each(_.keys(config.commands), function(key) {
        page += '<li><a href="/commands/'+ key +'">'+ key +"</a></li>";
      });
      page += '</ul></body></html>';
      res.send(page);
     
    });

    // FIXME: should be .post(), is not idempotent
    app.get('/commands/:cmd', function(req, res) {
      var
        cmd = req.params.cmd;

      if (_.has(config.commands, cmd)) {
        util.run(config.commands[cmd], function(success, url) {
          // grab the message and display inline?
          // todo view
          res.redirect(url, 302);
        });
      }
      else {
        // error? todo
        console.log('unknown command:'+ cmd);
        res.redirect('/', 302);
      }
    });
    
    app.get('/results/:key', function(req, res) {
      var
        key = req.params.key;
        
      if (_.has(results, key)) {
        // todo view
        res.send(results[key]);
      }
      else {
        // error? todo
        console.log('unknown key:'+ key);
        res.redirect('/', 302);        
      }
    });

    app.listen(config.web.port);
    
    console.log('Webapp started at http://localhost:'+config.web.port);
  }

  /** @param {string} command 
   * @param {string} message
   * @returns {string} url to view message
   */
  function store(command, message) {
    // key from command and timestamp
    var
      key = command +"+"+ new Date().getTime();
    
    results[key] = message;
    key = encodeURIComponent(key);
    
    return '/results/'+ key; // how to factor url? works for redirect
  }
  
  exports.init = init;
  exports.store = store;
  
})();

