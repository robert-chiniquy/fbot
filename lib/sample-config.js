

exports.config = {
  'bot': { // passed as options to jerk: https://github.com/gf3/Jerk#readme
    server: 'irc.freenode.net',
    nick: 'fbot',
    channels: [ '#botwar' ]      
  },
  'web': {
    'port': 808
  },
  'commands': {
    'ls': ['ls']
  }
};