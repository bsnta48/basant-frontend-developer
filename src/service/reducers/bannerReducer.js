import { ActionTypes } from "../action-types";

const initialState = {
    isFetching: false,
    main_banner: {}
}

const bannerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_BANNER:
            return { ...state, main_banner: payload }
            
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isFetching: payload
            }

        default:
            return state
    }
}

export default bannerReducer