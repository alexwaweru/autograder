const hapi = require('hapi');
const controllers = require('./controllers/basecontroller');

const server = hapi.server({
    port:3000,
    host:'localhost'
});

const init = async() => {

    await server.register([
		Inert,
		Vision,
		{
			plugin: HapiSwagger,
			options: {
				info: {
					title: 'Autograder API Documentation',
                    version: Pack.version,
                    description: 'This is a documentation for an source code testing and plagiarism checker for college students '
				}
			}
		}
	]);

    server.route(controllers);

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