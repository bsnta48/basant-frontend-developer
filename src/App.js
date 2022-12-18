import React, { useEffect } from 'react'
import { Navbar } from './components'
import Home from './pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { setRockets } from './service/actions'
import apiRequest from './api'

const App = () => {

    const state = useSelector(state => state.rocketReducer);
    const dispatch = useDispatch();

    const api = new apiRequest();

    const fetchRockets = async () => {
        const res = await api.fetchRockets();
        dispatch(setRockets(res.data))
    }

    useEffect( () => {
        fetchRockets()
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            {
                state.all_rockets.map(rocket => <img src={rocket.image  } />)
            }
        </>
    )
}

export default App