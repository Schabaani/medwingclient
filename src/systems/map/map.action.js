export const DELETE_POINT = 'DELETE_POINT';

export function deletePointDispatcher(uuid) {
    return {
        type: DELETE_POINT,
        payload: {
            uuid,
        }
    }
}

export const ADD_POINT = 'ADD_POINT';

export function addPointDispatcher(point) {
    return {
        type: ADD_POINT,
        payload: {
            point,
        }
    }
}
