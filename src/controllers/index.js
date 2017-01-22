import LoginController from './login-controller.js';
import HeaderController from './header-controller';

const module = angular
	.module('MaintenanceApp.controllers', [])
	.controller('LoginController', LoginController)
	.controller('HeaderController', HeaderController)