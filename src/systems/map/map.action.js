export const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

export function changeCategory(category) {
    return {
        type: CHANGE_CATEGORY,
        payload: {
            category,
        }
    }
}


export const CHANGE_SERVICE_GRADE = 'CHANGE_SERVICE_GRADE';

export function changeServiceGrade(serviceGrade) {
    return {
        type: CHANGE_SERVICE_GRADE,
        payload: {
            serviceGrade,
        }
    }
}

export const CHANGE_CAR_PROBLEMS = 'CHANGE_CAR_PROBLEMS';

export function changeCarProblems(carProblems) {
    return {
        type: CHANGE_CAR_PROBLEMS,
        payload: {
            carProblems,
        }
    }
}

export const DELETE_POINT = 'DELETE_POINT';

export function deletePointDispatcher(uuid) {
    return {
        type: DELETE_POINT,
        payload: {
            uuid,
        }
    }
}

export const SAVE_PAY_ITEM = 'SAVE_PAY_ITEM';

export function savePayItem(payItem) {
    return {
        type: SAVE_PAY_ITEM,
        payload: {
            payItem,
        }
    }
}

export const SAVE_SEARCH_RESULT = 'SAVE_SEARCH_RESULT';

export function saveSearchResult(searchResult) {
    return {
        type: SAVE_SEARCH_RESULT,
        payload: {
            searchResult,
        }
    }
}

export const CLEAR_JOB_REQUEST = 'CLEAR_JOB_REQUEST';

export function clearJobRequest() {
    return {
        type: CLEAR_JOB_REQUEST,
    }
}
