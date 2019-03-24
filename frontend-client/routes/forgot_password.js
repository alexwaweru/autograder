const controller = require('./../contollers/forgot_password');

const route = {
    method: 'GET',
    path: '/forgotpassword',
    handler: function (request, h) {

        return h.view('forgot_password'), { layout: 'index' };
    }
}


module.exports = route;