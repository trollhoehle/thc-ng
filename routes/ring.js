var audiosample = require('../lib/audiosample');
var fs = require('fs')
var timers = require('timers')


exports.ring = function(req, res) {
	var sounds = fs.readdirSync('./audio/ring/');
	var selected = 'ring/' + sounds[Math.floor(Math.random() * sounds.length)];

	timers.setTimeout(function() {
		audiosample.play(selected, 0.5);
	}, 1500);

	audiosample.play('horn1.wav', 0.5)
	res.end(selected);
}

