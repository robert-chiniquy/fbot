

exports.config = {
  'bot': { // passed as options to jerk: https://github.com/gf3/Jerk#readme
    'server': 'irc.freenode.net',
    'nick': 'fffffbot',
    'channels': [ '#botwar' ]      
  },
  'web': {
    'hostname': 'localhost',
    'port': 9090
  },
  'commands': {
    'ls': 'ls -lh',
    'whoami': 'whoami',
    'uname': 'uname -a'
  }
};