const ForgotPassowrd = require('./forgot_password');
const HomeAdmin = require('./home_admin');
const HomeStudent = require('./home_student');
const HomePage = require('./homepage');
const NewUserAdmin = require('./new_user_admin');
const NewUser = require('./new_user');
const NewUserStudent = require('./new_user_student');
const NewUserInstructor = require('./new_user_instructor');
const HomeInstructor = require('./home_instructor');
const Login = require('./login');

const routes = [ForgotPassowrd, HomeAdmin, HomeInstructor, HomeStudent, HomePage, Login, NewUser, NewUserAdmin, NewUserInstructor, NewUserStudent];

module.exports = routes;