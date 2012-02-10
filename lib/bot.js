
var
  realjerk = require('jerk'),
  _ = require('underscore'),
  util = require('./util.js'),
  config = require('./config.js').config;
  
/** @param {jerk|mock jerk} jerk for injecting a spy */
function init(jerk) {
  
  if (typeof jerk === 'undefined') {
    jerk = realjerk;
  }
  
  jerk(function(j) {
    // add commands
    _.each(_.keys(config.commands), function(key) {
      j.watch_for(new RegExp('^'+ config.bot.nick +": "+ key), function(message) {
        
        util.run(config.commands[key], function(success, url) {
          message.say(message.user +': '+ (success ? "Success: " : "Fail: ") + url);
        });
        
      });
    });

    // add 'list' to list all available commands
    j.watch_for(new RegExp(config.bot.nick +": list"), function(message) {
      message.say(message.user +': '+ _.keys(config.commands).join(' '));
    });

  }).connect(config.bot);
}

exports.init = init;

  
