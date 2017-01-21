import angular from 'angular';
import ngRoute from 'angular-route'

import router from './router';
import controllers from './controllers'

angular.module('MaintenanceApp', ['ngRoute'])
    .config(router)
    .controller(controllers);
    