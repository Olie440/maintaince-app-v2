import loginTemplate from './views/login-template.html';

const router = function ($routeProvider) {
    $routeProvider
        .when('/login', { template: loginTemplate });
};

export default [ '$routeProvider', router ]