import React from 'react'
import { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";

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
                        <button className='bg-[#f1c40e] font-medium rounded-tr-lg rounded-bl-lg text-[12px] mt-[122px] p-4 relative'>{firstClass.className} <p className='flex pt-2 justify-evenly'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></p> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFirstClass