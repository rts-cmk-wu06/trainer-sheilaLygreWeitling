import React from 'react'
import { useState, useEffect } from 'react';

const HomeFirstClass = () => {

    const [firstClass, setFirstClass] = useState([]);

    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes/3',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => setFirstClass(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className='flex'>
                <div className='p-4'>
                    <div className='absolute'>
                        <img src={firstClass.asset && firstClass.asset.url} alt="classes" className='rounded-xl' />
                    </div>
                    <div className='relative'>
                        <button className='bg-[#f1c40e] font-medium rounded-tr-lg rounded-bl-lg text-[12px] w-[200px] mt-[194.7px] p-4 relative'>{firstClass.className} </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFirstClass