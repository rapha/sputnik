load('lib/framework.js');

var $ERROR = testFailed;
var $FAIL = testFailed;
var $PRINT = testPrint;

Array.apply(null, arguments).forEach(function(path) {
	try {
		eval(readFile(path));
	} catch (e) {
		print("Error in "+path+": "+e);
	}
})
