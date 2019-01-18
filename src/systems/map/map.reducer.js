import {DELETE_POINT, ADD_POINT} from './map.action'
import {removeKey} from "../../helper/utilities";

const uuidv1 = require('uuid/v1');

const initialState = {
    coordinates: [{
        title: 'checkpoint charlie',
        point: {latitude: -74.00751113891602, longitude: 40.746346606483826},
        uuid: uuidv1()
    }, {
        title: 'checkpoint charlie',
        point: {latitude: -74.00751113891602, longitude: 40.746346606483826},
        uuid: uuidv1()
    }, {
        title: 'checkpoint charlie',
        point: {latitude: -74.00751113891602, longitude: 40.746346606483826},
        uuid: uuidv1()
    }],
};

export default function userReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case DELETE_POINT:
            let coordinates = removeKey(state.coordinates, payload.uuid);
            return {
                ...state, coordinates
            };
        case ADD_POINT:
            payload.point.uuid = uuidv1();
            state.coordinates.push(payload.point);
            return {
                ...state,
            };
        default:
            return state;
    }
}
