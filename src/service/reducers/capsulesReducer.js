import { ActionTypes } from "../action-types"

const initialState = {
    isFetching: false,
    capsules: [],
    nbCapsules: 0,
    nbPages: 0,
    currentPage: 1
}

const capsulesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CAPSULES:
            return { ...state, ...payload }

        default:
            return state
    }
}

export default capsulesReducer