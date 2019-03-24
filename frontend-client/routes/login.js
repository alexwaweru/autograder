const controller = require('./../contollers/aunthenticate');


const route = {
    method: 'GET',
    path: '/login',
    handler: function (request, h) {

        return h.view('login', { layout: 'home' });
    }
}


module.exports = route;