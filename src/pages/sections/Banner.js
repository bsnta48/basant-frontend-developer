import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import apiRequest from '../../api';
import { setBanner } from '../../service/actions';
import { Container } from "../../components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/css';

const Banner = () => {

    const { rocketReducer: { banners } } = useSelector(state => state)
    const dispatch = useDispatch();
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

    SwiperCore.use([Navigation]);

    // creating object for api request
    const api = new apiRequest();

    const fetchData = async () => {
        try {
            const response = await api.getData('rockets/?offset=1&limit=4')
            dispatch(setBanner(response.data))
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className='banner-section relative flex items-center'>
            <Swiper
                slidesPerView={1}
                autoplay
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
            >
                {
                    banners.map((banner, key) => {
                        const { rocket_name, description, flickr_images } = banner
                        return <SwiperSlide key={key} className='min-h-[80vh] flex items-center py-10'>
                            <div className='banner-image h-full absolute inset-0'>
                                <img className='w-full h-full object-cover' src={flickr_images && flickr_images[1]} />
                                <div className='overlay absolute inset-0 bg-black/20'></div>
                            </div>
                            <div className='banner-content w-full relative z-10 text-white md:px-[35px]'>
                                <Container>
                                    <div className='lg:max-w-xl'>
                                        <h1 className='text-4xl sm:text-5xl md:text-6xl mb-4'>{rocket_name}</h1>
                                        <p className='text-lg leading-8'>{description}</p>
                                    </div>
                                </Container>
                            </div>
                        </SwiperSlide>
                    })
                }
                <button ref={navigationPrevRef} role='slide button' aria-label='previous slide' className='hidden lg:inline-block leading-tight p-2 text-white border border-white hover:bg-white hover:text-black transition-all cursor-pointer absolute left-2 top-1/2 z-20 -translate-y-1/2' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button ref={navigationNextRef} role='slide button' aria-label='next slide' className='hidden lg:inline-block leading-tight p-2 text-white border border-white hover:bg-white hover:text-black transition-all cursor-pointer absolute right-2 top-1/2 z-20 -translate-y-1/2' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </Swiper>
        </section>
    )
}

export default Banner