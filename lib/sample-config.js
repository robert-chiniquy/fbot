

exports.config = {
  'bot': { // passed as options to jerk: https://github.com/gf3/Jerk#readme
    server: 'irc.freenode.net',
    nick: 'fffffbot',
    channels: [ '#botwar' ]      
  },
  'web': {
    'port': 9090
  },
  'commands': {
    'ls': ['ls']
  }
};