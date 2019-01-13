import {DELETE_POINT, SAVE_SEARCH_RESULT, CLEAR_JOB_REQUEST, SAVE_PAY_ITEM} from './map.action'
import {removeKey} from "../../helper/utilities";

const initialState = {
    coordinates: [{
        title: 'checkpoint charlie',
        point: {latitude: -74.00751113891602, longitude: 40.746346606483826},
        uuid: 'uuid1000'
    }, {
        title: 'checkpoint charlie',
        point: {latitude: -74.00751113891602, longitude: 40.746346606483826},
        uuid: 'uuid1001'
    }, {
        title: 'checkpoint charlie',
        point: {latitude: -74.00751113891602, longitude: 40.746346606483826},
        uuid: 'uuid1002'
    }],
};

export default function userReducer(state = initialState, action = {}) {
    const payload = action.payload;
    switch (action.type) {
        case DELETE_POINT:
            let coordinates = removeKey(state.coordinates, action.payload.uuid);
            return {
                ...state, coordinates
            };
        case SAVE_SEARCH_RESULT:
            return {
                ...state, searchResult: payload.searchResult
            };
        case SAVE_PAY_ITEM:
            return {
                ...state, payItem: payload.payItem
            };
        case CLEAR_JOB_REQUEST:
            return {
                ...state,
                jobRequest: {}
            };
        default:
            return state;
    }
}
