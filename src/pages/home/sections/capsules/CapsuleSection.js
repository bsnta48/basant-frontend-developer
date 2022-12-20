import React, { useEffect } from 'react'
import { Container, SearchCapsules } from '../../../../components'
import apiRequest from '../../../../api';
import { useSelector, useDispatch } from 'react-redux'
import { setCapsules } from '../../../../service/actions';
import Capsules from './Capsules';

const capsulesPerPage = 10;

const CapsuleSection = () => {

    const { capsulesReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    // creating object for api request
    const api = new apiRequest();

    const fetchData = async () => {
        const response = await api.getData('capsules')
        const data = response.data;
        const totalData = data.length;
        let nbPages = Math.ceil(totalData > capsulesPerPage ? (totalData / capsulesPerPage) : 1)
        dispatch(setCapsules({
            capsules: data,
            nbCapsules: totalData,
            nbPages
        }))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const { capsules, currentPage } = capsulesReducer

    const handleNextButton = () => {
        dispatch(setCapsules({
            currentPage: currentPage+1
        }))
    }

    const indexOfLastCapsule = currentPage * capsulesPerPage
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage
    const currentCapsules = capsules.slice(indexOfFirstCapsule, indexOfLastCapsule)

    return (
        <section className='capsules-section py-20'>
            <Container>
                <h2 className='text-3xl font-semibold mb-4'>Search Capsules</h2>
                <SearchCapsules />
                <Capsules capsules={currentCapsules} />
                <button onClick={() => handleNextButton()}>Next</button>
            </Container>
        </section>
    )
}

export default CapsuleSection