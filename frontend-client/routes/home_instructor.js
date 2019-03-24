const controller = require('./../contollers/home_instructor');

const route = {
    method: 'GET',
    path: '/home/instructor',
    handler: function (request, h) {

        return h.view('home_instructor', { layout: 'home' });
    }
}


module.exports = route;