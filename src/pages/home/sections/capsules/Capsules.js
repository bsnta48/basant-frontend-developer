import React from 'react'

const Capsules = ({ capsules }) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16'>
            {
                capsules?.map((capsule, key) => {
                    const { missions, details, original_launch, type, status } = capsule;
                    return <div key={key} className='border-l-2 border-sky-900 pl-4'>
                        {/* <span className='inline-block w-10 border-t-2 border-black mb-1' /> */}
                        <h5 className='mb-2 text-2xl font-bold'>{missions?.[0]?.name}</h5>
                        <p className='text-lg'>{details}</p>
                        <div className='grid gap-1 text-sm mt-2'>
                            <span className='block'>
                                <span className='text-gray-500'>Original Launch: </span>
                                {new Date(original_launch).toLocaleDateString('en-us', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                            </span>
                            {/* <span className='w-1 h-1 rounded-full bg-gray-400' /> */}
                            <span className='block'>
                                <span className='text-gray-500'>Type: </span>
                                {type}
                            </span>
                            <span className='block'>
                                <span className='text-gray-500'>Status: </span>
                                {status}
                            </span>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Capsules