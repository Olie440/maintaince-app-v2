import template from './template.html';

const bindings = {
    options: '<',
    label: '@',
    name: '@',
    model: '=',
};

function controller($scope) {
    $scope.selectDisplayMode = 'menu';

    // interact with the elements bellow to create the illusion that the dropdown menu is coming from them
    $scope.selectEvents = {
        mouseOver() {
            if ($scope.selectValue === 'Other') {
                $scope.selectDisplayMode = 'menu';
            }  

            $scope.buttonState = 'hover';
        },

        mouseDown() {
            $scope.buttonState = 'active';
        },

        mouseOut() {
            if ($scope.selectValue === 'Other') {
                $scope.selectDisplayMode = 'button'
            }

            $scope.buttonState = '';
        },

        mouseUp() {
            if ($scope.buttonState !== '') {
                $scope.buttonState = 'hover';
            }

            if ($scope.selectValue === 'Other') {
                $scope.selectDisplayMode = 'button';
            }
        },

        blur() {
            if ($scope.selectValue == 'Other') {
                $scope.selectDisplayMode = 'button';
            }

            $scope.buttonState = '';
        },

        change() {
            if ($scope.selectValue === 'Other') {
                $scope.model = '';
                $scope.selectDisplayMode = 'button'
                $scope.valid = 'invalid';
                textbox.focus(); 
            } else {
                $scope.model = $scope.selectValue;
                $scope.selectDisplayMode = 'menu';
                $scope.valid = 'valid';
            }
        }
    }
}

export default {
    template, 
    bindings,
    controller: [ '$scope', controller ]
}