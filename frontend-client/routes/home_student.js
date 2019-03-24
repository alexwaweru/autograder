const controller = require('./../contollers/home_student');

const route = {
    method: 'GET',
    path: '/home/student',
    handler: function (request, h) {

        return h.view('home_student', { layout: 'home' });
    }
}


module.exports = route;