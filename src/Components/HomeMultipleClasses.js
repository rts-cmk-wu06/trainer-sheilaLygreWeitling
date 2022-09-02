import React from 'react'
import { useState, useEffect } from 'react';

const HomeMultipleClasses = () => {
    const [classes, setClasses] = useState([]);


    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>

            <div className='flex'>
                {classes && classes.map(({ className, asset, url }, index) => {
                    return (
                        <div className='p-4'>
                            <div className=''>
                                <img src={classes[index].asset.url} alt="classes" className='rounded-l-lg rounded-tr-lg w-[200px] h-[133px]  absolute' />
                            </div>
                            <div className=' '>
                                <button className='bg-[#f1c40e] font-medium rounded-tr-lg rounded-bl-lg text-[12px] w-[200px] mt-24 p-4 relative'>{classes[index].className}</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeMultipleClasses