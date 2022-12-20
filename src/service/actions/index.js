import { ActionTypes } from "../action-types"

export const setBanner = (data) => {
    return {
        type: ActionTypes.SET_BANNER,
        payload: data
    }
}
export const setCapsules = (data) => {
    return {
        type: ActionTypes.SET_CAPSULES,
        payload: data
    }
}

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

export const setLoading = (data) => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: data
    }
}