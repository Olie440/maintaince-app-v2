import angular from 'angular';
import officeStatus from './office-status/component.js';

const module = angular
	.module('MaintenanceApp.components', [])
    .component('officeStatus', officeStatus);

export default module
