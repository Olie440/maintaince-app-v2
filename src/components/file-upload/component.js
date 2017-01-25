import template from './template.html';


const bindings = {
    model: '='
};


function controller($scope, $element) {
    const input = $element[0].querySelector('input');

    $scope.compressionSupport = true;
    $scope.actions = {
        showFileDialog(event) {
            event.preventDefault();
            input.click();
        }
    };
}

export default {
    template,
    bindings,
    controller: [ '$scope', '$element', controller ]
}
