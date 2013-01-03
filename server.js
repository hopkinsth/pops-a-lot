var exp = require('express'),
	mu = require('mustache'),
	fs = require('fs'),
	serv;

serv = exp();

/**
 * On requests, load the mustache file specified in the URL and render the mustache template
 * @param  {[type]} req  [description]
 * @param  {[type]} resp [description]
 * @return {[type]}      [description]
 */
serv.get(/^\/([^.]+)$/, function (req, resp) {
	var tpl = fs.readFileSync( req.params[0] + '.mustache' ),
		compiled,
		tags,
		k,
		ref,
		viewData = {};

	tags = mu.parse( tpl.toString() );
	console.log(tags);
	for (k = 0; k < tags.length; k += 1) {
		ref = tags[k];
		if (ref[0] === '&') {
			viewData[ref[1]] = fs.readFileSync( ref[1] + '.mustache' );
		}
	}

	resp.send( mu.render( tpl.toString(), viewData ) );
	//compiled = mu.compile( tpl.toString() );

});
serv.get(/(.+\.[a-zA-Z]{2,5})$/, function (req, resp) {
	var localPath = req.path.substr(1),
		fileName,
		fileType;

	if (fs.existsSync( localPath )) {
		fileName = localPath.split('/');
		fileName = fileName[ fileName.length - 1 ];

		fileType = fileName.split('.');
		fileType = fileType[ fileType.length - 1 ];

		resp.type( fileType );
		resp.send( fs.readFileSync( req.path.substr(1) ) );
	} else {
		resp.send(404, 'File not found');
	}
});

serv.listen(3300);