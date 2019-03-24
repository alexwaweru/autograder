const controller = require('./../contollers/home_student');

const route = {
    method: 'GET',
    path: '/newuser/student',
    handler: function (request, h) {

        return h.view('new_user_student', { layout: 'new_user' });
    }
}


module.exports = route;