import React from 'react'

const SearchCapsules = () => {
    return (
        <form className='flex flex-wrap mb-20 gap-4'>
            <label className='block w-full md:w-72'>
                <select className='w-full text-lg py-3 px-4 border border-black'>
                    <option value={{}}>Status</option>
                    <option value={{}}>Option one</option>
                    <option value={{}}>Option one</option>
                    <option value={{}}>Option one</option>
                </select>
            </label>
            <label className='block w-full md:w-72'>
                <select className='w-full text-lg py-3 px-4 border border-black'>
                    <option value={{}}>Type</option>
                    <option value={{}}>Option one</option>
                    <option value={{}}>Option one</option>
                    <option value={{}}>Option one</option>
                </select>
            </label>
            <label className='block w-full md:w-72'>
                <select className='w-full text-lg py-3 px-4 border border-black'>
                    <option value={{}}>Original Launch</option>
                    <option value={{}}>Option one</option>
                    <option value={{}}>Option one</option>
                    <option value={{}}>Option one</option>
                </select>
            </label>
            <button type='submit' className='text-lg leading-none py-3 px-8 bg-black text-white border border-black transition-all hover:bg-transparent hover:text-black'>Search</button>
        </form>
    )
}

export default SearchCapsules