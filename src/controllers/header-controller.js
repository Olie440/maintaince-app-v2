function controller($scope) {
    $scope.menuShow = true;
    $scope.menuItems = [
        { text: 'Home', href: '#!/previous/'},
        { text: 'New Issue', href: '#!/next/new-issue' },
        { text: 'Reported Issues', href: '#!/next/reported-issues' },
        { text: 'Known Issues', href: '#!/next/known-issues' },
        { text: 'Logout', href: '#!/logout' }
    ];  
};

export default ['$scope', controller];