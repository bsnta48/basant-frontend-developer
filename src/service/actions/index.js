import { ActionTypes } from "../action-types"

export const setRockets = (data) => {
    return {
        type: ActionTypes.SET_ROCKETS,
        payload: data
    }
}

export const searchRocket = (data) => {
    return {
        type: ActionTypes.SEARCH_ROCKETS,
        payload: data
    }
}