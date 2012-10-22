// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var codestrong_android = require('ci.android.moduleone');
Ti.API.info("module is => " + JSON.stringify(codestrong_android.LCAT, null, 2));


var proxy = codestrong_android.createCardIO({
	"APP_TOKEN" : "APP TOKEN GOES HERE",
	"REQUIRE_EXPIRY" : true,
	"REQUIRE_CVV" : true,
	"REQUIRE_ZIP" : true,
	"SUPPRESS_MANUAL_ENTRY" : false,

});
proxy.doScan({
	success : function(resp) {
		Ti.API.info(' back in success');
		var s = JSON.stringify(resp, null, 2);
		label.text = s;
	},
	error : function(resp) {
		var s = JSON.stringify(resp, null, 2);
		label.text = s;
	}
});

