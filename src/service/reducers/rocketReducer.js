import { ActionTypes } from "../action-types"

const initialState = {
    isError: false,
    all_rockets: [],
    searched_rockets: [],
    isFetching: false,
    banners: []
}

const rocketReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ActionTypes.SET_BANNER:
            return { ...state, banners: payload }

        case ActionTypes.SET_ROCKETS:
            return { ...state, all_rockets: payload }

        case ActionTypes.SEARCH_ROCKETS:
            return { ...state, searched_rockets: payload }

        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isFetching: payload
            }

        default:
            return state
    }
}

export default rocketReducer