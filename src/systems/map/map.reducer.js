import {DELETE_POINT, ADD_POINT, EDIT_POINT} from './map.type'
import {removeKey, editPoint} from "../../helper/utilities";

const uuidv1 = require('uuid/v1');

const initialState = {
    coordinates: [{
        title: 'checkpoint charlie',
        point: {latitude: 52.5074434, longitude: 13.3903913},
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
        case EDIT_POINT:
            coordinates = editPoint(state.coordinates, payload.editingItem, payload.selectingPoint);
            return {
                ...state, coordinates
            };
        default:
            return state;
    }
}
