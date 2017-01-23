function controller($scope) {
    $scope.categories = ['Plumbing', 'Electical', 'Damage', 'Appliance'];
    $scope.properties = ['Fifth Point', 'Snow Island', 'Threadworks'];
    $scope.request = {
        property: '',
        category: ''
    }
};

export default [ '$scope', controller ];