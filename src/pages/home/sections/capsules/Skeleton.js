import React from 'react'

const Skeleton = ({ items }) => {
    return (
        <>
            {
                [...Array(items)].map((key, i) => {
                    return <div key={i} className='border-l-2 border-sky-900 pl-4'>
                        <div role="status" className="max-w-sm animate-pulse">
                            <div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                            <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[120px] mb-2.5"></div>
                            <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[150px] mb-2.5"></div>
                            <div className="h-1 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[100px] mb-2.5"></div>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default Skeleton