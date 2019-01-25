
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
    });

    it('delete first index of points', async () => {
        await element(by.id(`DELETE_0`)).tap();

    });
    it('edit first index of points', async () => {
        await element(by.id(`EDIT_0`)).tap();
        await element(by.id('SEARCH_BOX')).clearText();
        await element(by.id('SEARCH_BOX')).typeText("hamburg");
        await element(by.id(`SUGGESTION_ITEM_0`)).tap();
        await element(by.id(`SUGGESTION_ITEM_0`)).tap();
    });

});