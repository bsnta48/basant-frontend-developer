import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import apiRequest from '../api';
import { setCapsules, setSearch } from '../service/actions';

const SearchCapsules = (props) => {

    const { capsulesReducer: { capsules, searchQuery } } = useSelector(state => state);
    const dispatch = useDispatch();
    const [state, setState] = useState({});

    // creating object for api request
    const api = new apiRequest();

    // handle search data
    const handleSearch = e => {
        const key = e.target.name
        const value = e.target.value
        dispatch(setSearch({ ...searchQuery, [key]: value }))
        dispatch(setCapsules({ currentPage: 1 }))
    }

    // fetching data for the filter options
    const fetchData = async () => {
        const { data } = await api.getData('capsules')
        const types = data.map(t => t.type)
        const status = data.map(s => s.status)
        const launch = data.map(l => l.original_launch)
        setState({
            type: new Set(types),
            status: new Set(status),
            original_launch: new Set(launch),
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div {...props}>
            {Object.entries(state)?.map((key, i) => {
                const [name, values] = key;
                return <label key={i}>
                    <select
                        name={name}
                        value={searchQuery[name]}
                        onChange={handleSearch}
                        className='w-full h-38 p-2 border border-black'
                    >
                        <option value=''>{name}</option>
                        {
                            [...values]?.map((_value, i) => {
                                return <option key={i} value={_value}>
                                    {
                                        name === 'original_launch' && new Date(_value).toDateString() || _value
                                    }
                                </option>
                            })
                        }
                    </select>
                </label>
            })}
        </div>
    )
}

export default SearchCapsules