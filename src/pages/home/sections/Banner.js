import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import apiRequest from '../../../api';
import { setBanner, setLoading } from '../../../service/actions';
import { Logo, Container } from "../../../components"

const Banner = () => {

    const { bannerReducer: { isFetching, main_banner } } = useSelector(state => state)
    const dispatch = useDispatch();

    // creating object for api request
    const api = new apiRequest();

    const fetchData = async () => {
        dispatch(setLoading(true))
        const response = await api.getData('rockets')
        dispatch(setLoading(false))
        dispatch(setBanner(response.data[1]))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { rocket_name, description, flickr_images } = main_banner

    return (
        <section className='banner-section relative py-20 flex items-center min-h-screen'>
            <div className='banner-image h-full absolute inset-0'>
                <img className='w-full h-full object-cover' src={flickr_images && flickr_images[1]} />
                <div className='overlay absolute inset-0 bg-black/75'></div>
            </div>
            <div className='banner-content w-full relative z-10 text-white'>
                <Container>
                    <div className='max-w-xl'>
                        <div className='logo mb-8 w-40 sm:w-60'>
                            <Logo />
                        </div>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl font-semibold mb-4 uppercase'>{rocket_name}</h1>
                        <p className='text-lg leading-7'>{description}</p>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Banner