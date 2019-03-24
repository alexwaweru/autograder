const controller = require('./../contollers/new_user');

const route = {
    method: 'GET',
    path: '/newuser',
    handler: function (request, h) {

        return h.view('new_user', { layout: 'new_user' });
    }
}


module.exports = route;