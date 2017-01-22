import angular from 'angular';
import ngRoute from 'angular-route'
import router from './router';

const requiredModules = [
    'ngRoute',
    'MaintenanceApp.components',
    'MaintenanceApp.controllers'
]

const app = angular
    .module('MaintenanceApp', requiredModules)
    .config(router);

export default app;