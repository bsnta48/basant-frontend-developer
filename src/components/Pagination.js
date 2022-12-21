import React, { useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCapsules, setPageNumber } from '../service/actions';

const Pagination = (props) => {

    const { capsulesReducer: {
        capsules,
        currentPage,
        totCaps,
        capsPerPage,
        searchQuery
    } } = useSelector(state => state);
    const dispatch = useDispatch();

    // number of pages
    const nbPages = Math.ceil(totCaps / capsPerPage);

    // handle page number
    const handlePageNumber = (e, page) => {
        e.preventDefault();
        dispatch(setPageNumber(page))
    }

    // if number of pages is 1
    if (nbPages == 1) {
        return;
    }

    return (
        <div {...props}>
            <ul className='inline-flex flex-wrap gap-2'>
                {
                    currentPage != 1 && <li>
                        <a
                            href="#"
                            aria-label='Previous Page'
                            role='page number'
                            className='leading-tight inline-block px-4 py-2 border border-black hover:bg-black hover:text-white transition-all'
                            onClick={(e) => handlePageNumber(e, (currentPage > 1 && currentPage - 1) || 1)}
                        >
                            Prev
                        </a>
                    </li>
                }
                {
                    [...Array(nbPages)].map((a, i) => {
                        const pageNumber = i + 1;
                        return <li key={i}>
                            <a
                                href="#"
                                aria-label={`Page ${pageNumber}`}
                                role='page number'
                                className={`leading-tight inline-block px-4 py-2 border border-black hover:bg-black hover:text-white transition-all${currentPage == pageNumber && ' bg-black text-white' || ''}`}
                                onClick={(e) => handlePageNumber(e, pageNumber)}
                            >
                                {pageNumber}
                            </a>
                        </li>
                    })
                }
                {
                    nbPages != currentPage && <li>
                        <a
                            href="#"
                            aria-label='Previous Page'
                            role='page number'
                            className='leading-tight inline-block px-4 py-2 border border-black hover:bg-black hover:text-white transition-all'
                            onClick={(e) => handlePageNumber(e, (currentPage < nbPages && currentPage + 1 || nbPages))}
                        >
                            Next
                        </a>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Pagination