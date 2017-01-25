

describe('component: file upload', () => {
    let element;
    let scope;
    let controller;
    let mockInput;
    let mockElementProvider;

    beforeEach(() => {
        angular.mock.module('MaintenanceApp');

        mockInput = document.createElement('input');
        mockElementProvider = {
            querySelector: jasmine.createSpy('querySelector').and.returnValue(mockInput)
        };

        inject(($compile, $rootScope, $componentController) => {
            scope = $rootScope.$new();
            element = angular.element('<file-upload></file-upload>');
            controller = $componentController('fileUpload', { $scope: scope, $element: [ mockElementProvider ]});

            $compile(element)(scope)
            scope.$digest();
        });
    });

    it('has a file upload element', () => {
        expect(element.find('input').length).toEqual(1);
    });

    it('has a button with the text "Add Photo"', () => {
        expect(element.find('button').text()).toEqual('Add Photo');
    });

    it('gets the input element from the injected elementProvider', () => {
        expect(mockElementProvider.querySelector.calls.count()).toEqual(1);
    })

    it('fires an click action on the file upload when the button is clicked', () => {
        const mockEvent = {
            preventDefault: jasmine.createSpy('preventDefault')
        };

        spyOn(mockInput, 'click');
        scope.actions.showFileDialog(mockEvent)

        expect(mockEvent.preventDefault.calls.count()).toEqual(1);
        expect(mockInput.click.calls.count()).toEqual(1);
    })
});
