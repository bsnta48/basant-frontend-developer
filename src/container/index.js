import React from 'react'
import { Provider } from 'react-redux'
import store from "../service/store"

const index = ({ children }) => {
    return (
        <Provider store={store}>
            <div>{children}</div>
        </Provider>
    )
}

export default index