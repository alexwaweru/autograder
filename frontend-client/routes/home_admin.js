const controller = require('./../contollers/home_admin');

const route = {
    method: 'GET',
    path: '/home/admin',
    handler: function (request, h) {

        return h.view('home_admin', { layout: 'home' });
    }
}


module.exports = route;