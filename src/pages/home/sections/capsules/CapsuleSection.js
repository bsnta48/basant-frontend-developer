import React, { useEffect } from 'react'
import { Container, Pagination, SearchCapsules } from '../../../../components'
import apiRequest from '../../../../api';
import { useSelector, useDispatch } from 'react-redux'
import { setCapsules } from '../../../../service/actions';
import Capsules from './Capsules';

const CapsuleSection = () => {

    const { capsulesReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    const {
        isFetching,
        capsules,
        currentPage,
        capsPerPage,
        searchQuery,
        isError
    } = capsulesReducer

    // creating object for api request
    const api = new apiRequest();

    // query strings
    // calculate offset
    const capsOffset = (currentPage * capsPerPage) - capsPerPage;
    const apiQuery = `offset=${capsOffset}&limit=${capsPerPage}`
    const searchParams = new URLSearchParams(searchQuery).toString();

    const fetchData = async () => {
        try {
            dispatch(setCapsules({
                isFetching: true
            }))
            const response = await api.getData(`capsules/?${apiQuery}&${searchParams}`)
            dispatch(setCapsules({
                capsules: response.data,
                isFetching: false
            }))
        } catch (error) {
            dispatch(setCapsules({
                isError: error.message,
                isFetching: false
            }))
        }
    }

    useEffect(() => {
        fetchData()
    }, [currentPage, searchQuery])

    return (
        <section className='capsules-section py-20'>
            <Container>
                <h2 className='text-3xl font-semibold mb-12'>Capsules</h2>
                <div className='flex flex-wrap justify-between gap-4 mb-10'>
                    <Pagination />
                    <SearchCapsules className='inline-flex flex-wrap gap-2 lg:ml-auto' />
                </div>
                <hr className='my-8 border-t border-gray-200' />
                <Capsules capsules={capsules} loading={isFetching} error={isError} />
                <hr className='my-8 border-t border-gray-200' />
                <Pagination className='mt-10' />
            </Container>
        </section>
    )
}

export default CapsuleSection