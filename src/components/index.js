import angular from 'angular';

import officeStatus from './office-status/component.js';
import dropdownWithTextbox from './dropdown-with-textbox/component.js';

const module = angular
	.module('MaintenanceApp.components', [])
    .component('officeStatus', officeStatus)
    .component('dropdownWithTextbox', dropdownWithTextbox);

export default module
