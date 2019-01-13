import {SAVE_JOB_REQUEST, SAVE_SEARCH_RESULT, CLEAR_JOB_REQUEST, SAVE_PAY_ITEM} from './map.action'

const initialState = {
    jobRequest: {
        serviceCategory: undefined,
        serviceGrade: undefined,
        carProblems: undefined,
        name: '',
        startSchedule: undefined,
        region: undefined,
        selectedBusinessOwner: undefined,
        carId: undefined,
        mapType: undefined
    },
    searchResult: [],
    payItem:[],
    searchParameters: {
        serviceCategory: undefined,
        serviceGrade: undefined,
        name: '',
        startSchedule: undefined,
        region: undefined,
        serviceTypes: undefined,
        selectedBusinessOwner: undefined
    },
};

export default function userReducer(state = initialState, action = {}) {
    const payload = action.payload;
    console.log('action is ',action);
    switch (action.type) {
        case SAVE_JOB_REQUEST:
            return {
                ...state, jobRequest: payload.jobRequest
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
