describe('component: office status', () => {
    let element;

    beforeEach(() => {
        angular.mock.module('MaintenanceApp')

        inject(($compile, $rootScope) => {
            const parentScope = $rootScope.$new();
            element = angular.element('<office-status></office-status>');

            $compile(element)(parentScope);
            parentScope.$digest();
        });
    });

    describe('when mocked up', () => {
        it('displays a static message', () => {
            const expected = 'The office will be open until 5pm';
            expect(element.find('p').text()).toEqual(expected);
        });

        it('displays a static status', () => {
            const expected = '/assets/images/office-status/available.png'
            expect(element.find('img').attr('src')).toEqual(expected);
        });
    });
});
