import { ActionTypes } from "../action-types"

const initialState = {
    isFetching: false,
    capsules: [],
    currentPage: 1,
    capsPerPage: 10,
    totCaps: 20,
    searchQuery: {}
}

const capsulesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CAPSULES:
            return { ...state, ...payload }

        case ActionTypes.SET_PAGE_NUMBER:
            return { ...state, currentPage: payload }

        case ActionTypes.SET_SEARCH:
            return { ...state, searchQuery: payload }

        default:
            return state
    }
}

export default capsulesReducer