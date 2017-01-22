import loginTemplate from './views/login-template.html';
import homepageTemplate from './views/homepage-template.html';

function router($routeProvider) {
    $routeProvider
        .when('/login', { template: loginTemplate })
        .when('/', { template: homepageTemplate });
};

export default ['$routeProvider', router ]