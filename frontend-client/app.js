const hapi = require('hapi');
const routes = require('./routes/router')

const server = hapi.server({
    port:4000,
    host:'localhost'
});

const init = async() => {

    await server.register(require('vision'));

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: './views',
        helpersPath: './views/helpers'
    });

    server.route(routes);

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unHandledRejection', (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
});

init();