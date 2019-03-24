const controller = require('./../contollers/new_user_admin');

const route = {
    method: 'GET',
    path: '/newuser/admin',
    handler: function (request, h) {

        return h.view('new_user_admin', { layout: 'new_user' });
    }
}


module.exports = route;