const controller = require('./../contollers/home_instructor');

const route = {
    method: 'GET',
    path: '/newuser/instructor',
    handler: function (request, h) {

        return h.view('new_user_instructor', { layout: 'new_user' });
    }
}


module.exports = route;