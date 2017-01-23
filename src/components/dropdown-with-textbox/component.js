import template from './template.html';

const bindings = {
    options: '<',
    label: '@',
    ngModel: '=',
};

function controller($scope, $element) {
    const input = $element.find('input')

    $scope.selectDisplayMode = 'menu';

    // interact with the elements to create the illusion that the dropdown menu is coming from them
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
                $scope.$ctrl.ngModel = '';
                $scope.selectDisplayMode = 'button'
                input[0].focus();
            } else {
                $scope.$ctrl.ngModel = $scope.selectValue;
                $scope.selectDisplayMode = 'menu';
                input.addClass('ng-dirty');
            }
        }
    }
}

export default {
    template, 
    bindings,
    controller: [ '$scope', '$element', controller ]
}