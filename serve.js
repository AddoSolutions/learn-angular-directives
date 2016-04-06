var StaticServer = require('static-server');
var server = new StaticServer({
	rootPath: '.',            // required, the root of the server file tree
	name: 'ethode',   // optional, will set "X-Powered-by" HTTP header
	port: 1337,               // optional, defaults to a random port
	//host: '',       // optional, defaults to any interface
	followSymlink: true,      // optional, defaults to a 404 error
	index: 'index.html'         // optional, defaults to 'index.html'
});

server.start(function () {
	console.log('Server listening to: ', server.port);
});
