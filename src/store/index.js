import { persistStore, persistCombineReducers } from 'redux-persist'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native
import combineReducers from './reduceCombiner' // where reducers is an object of reducers

export const storageConfig = {
    key: 'medwingclient',
    storage,
};

const reducer = persistCombineReducers(storageConfig, combineReducers);

function configureStore () {
    // let middleWare = applyMiddleware(thunk);
    const store = createStore(
        reducer,
        {},
        compose(
            applyMiddleware(thunk)
        )
    );
    // let store = createStore(reducer, middleWare);
    let persistor = persistStore(store);

    return { persistor, store }
}

export default configureStore;
