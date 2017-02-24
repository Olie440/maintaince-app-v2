describe('component: dropdown-with-textbox', () => {
    let element;
    let scope;
    let controller;
    let mockInput;
    let mockElementProvider;

    beforeEach(() => {
        angular.mock.module('MaintenanceApp');

        mockInput = angular.element('<input />');
        mockElementProvider = {
            find: jasmine.createSpy('find').and.returnValue(mockInput)
        };

        inject(($compile, $rootScope, $componentController) => {
            scope = $rootScope.$new();
            element = angular.element('<dropdown-with-textbox></dropdown-with-textbox>');
            controller = $componentController('dropdownWithTextbox', { $scope: scope, $element: mockElementProvider });

            $compile(element)(scope)
            scope.$digest();
        });
    });

    it('has a select element', () => {
        expect(element.find('select').length).toEqual(1);
    });

    it('has an input element', () => {
        expect(element.find('input').length).toEqual(1);
    });

    it('selectEvents.mouseOver should set button state to hover', () => {
        scope.selectEvents.mouseOver();
        expect(scope.buttonState).toEqual('hover');
    });

    it('selectEvents.mouseOut should set button state to hover', () => {
        scope.selectEvents.mouseOut();
        expect(scope.buttonState).toEqual('');
    });

    it('selectEvents.mouseDown should set button state to an empty string', () => {
        scope.selectEvents.mouseDown();
        expect(scope.buttonState).toEqual('active');
    });

    it('selectEvents.blur should set button state to an empty string', () => {
        scope.buttonState = Math.random();
        scope.selectEvents.blur();
        expect(scope.buttonState).toEqual('');
    });

    describe('selectEvents.mouseUp', () => {
        it('should set button state to hover when it is not blank', () => {
            scope.buttonState = 'something';
            scope.selectEvents.mouseUp();
            expect(scope.buttonState).toEqual('hover');
        });

        it('should not set button state to hover when it is blank', () => {
            scope.buttonState = '';
            scope.selectEvents.mouseUp();
            expect(scope.buttonState).toEqual('');
        });
    });

    describe('when selectValue is "Other"', () => {
        beforeEach(() => {
            scope.selectValue = 'Other';
            scope.selectDisplayMode = Math.random();
            scope.$ctrl.ngModel = Math.random();
        });

        it('selectEvents.mouseOver should set selectDisplayMode to "menu"', () => {
            scope.selectEvents.mouseOver();
            expect(scope.selectDisplayMode).toEqual('menu');
        });

        it('selectEvents.mouseOut should set selectDisplayMode to "button"', () => {
            scope.selectEvents.mouseOut();
            expect(scope.selectDisplayMode).toEqual('button');
        });

        it('selectEvents.mouseUp should set selectDisplayMode to "button" ', () => {
            scope.selectEvents.mouseUp();
            expect(scope.selectDisplayMode).toEqual('button');
        });

        it('selectEvents.blur should set selectDisplayMode to "button"', () => {
            scope.selectEvents.blur();
            expect(scope.selectDisplayMode).toEqual('button');
        });

        it('selectEvents.change should ngModel to an empty string', () => {
            scope.selectEvents.change();
            expect(scope.$ctrl.ngModel).toEqual('')
        })

        it('selectEvents.change should set selectDisplayMode to "button"', () => {
            scope.selectEvents.change();
            expect(scope.selectDisplayMode).toEqual('button');
        });

        it('selectEvents.change should focus on the input element', () => {
            spyOn(mockInput[0], 'focus')

            scope.selectEvents.change();
            expect(mockInput[0].focus.calls.count()).toEqual(1);
        });
    });

    describe('when selectValue is not "Other"', () => {
        beforeEach(() => {
            scope.selectValue = Math.random();
            scope.selectDisplayMode = 'unknown'
            scope.$ctrl.ngModel = 'someValue'
        });

        it('selectEvents.mouseOver should not set selectDisplayMode', () => {
            scope.selectEvents.mouseOver();
            expect(scope.selectDisplayMode).toEqual('unknown');
        });

        it('selectEvents.mouseOut should not set selectDisplayMode', () => {
            scope.selectEvents.mouseOut();
            expect(scope.selectDisplayMode).toEqual('unknown');
        });

        it('selectEvents.mouseUp should not set selectDisplayMode ', () => {
            scope.selectEvents.mouseUp();
            expect(scope.selectDisplayMode).toEqual('unknown');
        });

        it('selectEvents.blur should not set selectDisplayMode', () => {
            scope.selectEvents.blur();
            expect(scope.selectDisplayMode).toEqual('unknown');
        });

        it('selectEvents.change should set ngModel to $scope.selectValue', () => {
            scope.selectEvents.change();
            expect(scope.$ctrl.ngModel).toEqual(scope.selectValue)
        })

        it('selectEvents.change should set selectDisplayMode to "menu"', () => {
            scope.selectEvents.change();
            expect(scope.selectDisplayMode).toEqual('menu');
        });

        it('selectEvents.change should add the "ng-dirty" class to the input element', () => {
            spyOn(mockInput, 'addClass')

            scope.selectEvents.change();
            expect(mockInput.addClass.calls.count()).toEqual(1);
            expect(mockInput.addClass.calls.first().args[0]).toEqual('ng-dirty');
        });
    });
});
