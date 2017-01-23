import loginTemplate from './views/login-template.html';
import homepageTemplate from './views/homepage-template.html';
import newIssueTemplate from './views/new-issue-template.html';

function router($routeProvider) {
    $routeProvider
        .when('/new-issue', { template: newIssueTemplate })
        .when('/login', { template: loginTemplate })
        .when('/', { template: homepageTemplate });
};

export default ['$routeProvider', router ]