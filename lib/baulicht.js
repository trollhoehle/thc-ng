var timers = require('timers')


var hexaswitch = require('./routes/hexaswitch')


var Blaulicht = function(hostname){
		this.ip = hostname
	}

Blaulicht.prototype = Object.create()

Blaulicht.prototype.startSeconds = function(duration){
	#timer fuer aus
	
	timers.
  	timers.setTimeout(function() {
	      this.off();
	}, duration*1000);


	#an schalten
	this.on()
	}

Blaulicht.prototype.set = function(on){
		#if on = anschalten
		#if !on = ausschalten
		hexaswitch.switch(this.ip, on);
	}

Blaulicht.prototype.on = function(){
	this.set(1)
	}

Blaulicht.prototype.off = function(){
	this.set(0)
	}
