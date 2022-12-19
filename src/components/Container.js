import React, { Children } from 'react'

const Container = ({ children }) => {
    return (
        <div className='container mx-auto max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl px-4'>{children}</div>
    )
}

export default Container