import { ActionTypes } from "../action-types"

const initialState = {
    all_rockets: [],
    searched_rockets: [],
}

const rocketReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_ROCKETS:
            return { ...state, all_rockets: payload }

        case ActionTypes.SEARCH_ROCKETS:
            return { ...state, searched_rockets: payload }

        default:
            return state
    }
}

export default rocketReducer