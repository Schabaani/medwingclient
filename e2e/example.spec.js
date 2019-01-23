
describe('Add and delete an area', () => {
    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should open modal box, type berlin and add it.', async () => {
        await element(by.id('ADD_NEW_AREA')).tap();
        element(by.id('SEARCH_BOX')).typeText("berlin").then(async () => {

        });
        await element(by.id(`SUGGESTION_ITEM_0`)).tap();
        await element(by.id(`SUGGESTION_ITEM_0`)).tap();
        // await element(by.id('GRID_VIEW')).withDescendant(by.text('Delete')).atIndex(0).tap();


    });

    it('delete first index of points', async () => {

        // await element(by.id('GRID_VIEW').withDescendant(by.text('Delete'))).atIndex(0).tap();
        await element(by.id(`delete_0`)).tap();
        // await element(element(by.id('GRID_VIEW').atIndex(0)).byText('Delete')).tap();
        // element(by.id('SEARCH_BOX')).typeText("berlin").then(async () => {
        //
        // });
        // await element(by.id(`SUGGESTION_ITEM_0`)).tap();

    });
    it('edit first index of points', async () => {

        // await element(by.id('GRID_VIEW').withDescendant(by.text('Delete'))).atIndex(0).tap();
        await element(by.id(`edit_0`)).tap();
        element(by.id('SEARCH_BOX')).typeText("berlin").then(async () => {

        });
        await element(by.id(`SUGGESTION_ITEM_0`)).tap();
        await element(by.id(`SUGGESTION_ITEM_0`)).tap();
        // await element(element(by.id('GRID_VIEW').atIndex(0)).byText('Delete')).tap();
        // element(by.id('SEARCH_BOX')).typeText("berlin").then(async () => {
        //
        // });
        // await element(by.id(`SUGGESTION_ITEM_0`)).tap();

    });

});