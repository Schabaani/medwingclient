import React, {Component} from 'react';
import {View} from 'react-native';
import {addressToPoint} from './src/utilities/geocoder';
import {Provider} from 'react-redux';
import CRUD from "./src/systems/map/screens/crud/container";
import configureStore from './src/store/';
import {PersistGate} from "redux-persist/lib/integration/react";

const {persistor, store} = configureStore();
// const RouterWithRedux = connect()(Router);

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        addressToPoint('Checkpoint Charlie');
        // Taken from https://flatuicolors.com/
        const items = [
            {name: 'TURQUOISE', code: '#1abc9c'}, {name: 'EMERALD', code: '#2ecc71'},
            {name: 'PETER RIVER', code: '#3498db'}, {name: 'AMETHYST', code: '#9b59b6'},
            {name: 'WET ASPHALT', code: '#34495e'}, {name: 'GREEN SEA', code: '#16a085'},
            {name: 'NEPHRITIS', code: '#27ae60'}, {name: 'BELIZE HOLE', code: '#2980b9'},
            {name: 'WISTERIA', code: '#8e44ad'}, {name: 'MIDNIGHT BLUE', code: '#2c3e50'},
            {name: 'SUN FLOWER', code: '#f1c40f'}, {name: 'CARROT', code: '#e67e22'},
            {name: 'ALIZARIN', code: '#e74c3c'}, {name: 'CLOUDS', code: '#ecf0f1'},
            {name: 'CONCRETE', code: '#95a5a6'}, {name: 'ORANGE', code: '#f39c12'},
            {name: 'PUMPKIN', code: '#d35400'}, {name: 'POMEGRANATE', code: '#c0392b'},
            {name: 'SILVER', code: '#bdc3c7'},
        ];


        return (

            <Provider store={store}>
                <PersistGate
                    loading={
                        <View style={{flex: 1, background: 'red'}}/>
                    }
                    // onBeforeLift={onBeforeLift}
                    persistor={persistor}>
                    <CRUD/>
                </PersistGate>
            </Provider>


        )
    }
}