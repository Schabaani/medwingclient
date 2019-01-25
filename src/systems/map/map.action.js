import {ADD_POINT, DELETE_POINT, EDIT_POINT} from "./map.type";

export function deletePointDispatcher(uuid) {
    return {
        type: DELETE_POINT,
        payload: {
            uuid,
        }
    }
}

export function addPointDispatcher(point) {
    return {
        type: ADD_POINT,
        payload: {
            point,
        }
    }
}

export function editPointDispatcher(editingItem, selectingPoint) {
    return {
        type: EDIT_POINT,
        payload: {
            editingItem,
            selectingPoint,
        }
    }
}
