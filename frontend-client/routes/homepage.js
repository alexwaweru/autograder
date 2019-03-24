const route = {
    method: 'GET',
    path: '/home',
    handler: function (request, h) {

        return h.view('homepage', { layout: 'index' });
    }
}


module.exports = route;