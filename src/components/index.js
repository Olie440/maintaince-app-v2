import angular from 'angular';

import officeStatus from './office-status/component.js';
import dropdownWithTextbox from './dropdown-with-textbox/component.js';
import fileUpload from './file-upload/component.js';

const module = angular
	.module('MaintenanceApp.components', [])
    .component('officeStatus', officeStatus)
    .component('fileUpload', fileUpload);

export default module
