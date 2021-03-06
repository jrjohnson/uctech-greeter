'use strict';
require('dotenv').config();

const bot = require('./lib/bot.js');

// seperate skills into individual functions
const welcome = require('./skills/welcome.js');
const uptime = require('./skills/uptime.js');

// consolidate ways for the bot to be mentioned
const mention = ['direct_message', 'direct_mention', 'mention'];

// define when each skill is called
bot.on('team_join', welcome);
bot.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'], mention, uptime);
