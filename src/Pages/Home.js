import React from 'react'
import { useRef } from 'react';
import HomeFirstClass from '../Components/HomeFirstClass';
import HomeMultipleClasses from '../Components/HomeMultipleClasses';

const Home = () => {
    const constraintsRef = useRef(null)

    return (
        <div className='flex flex-col gap-16'>
            <div>
                <div className='pl-4 pt-9'>
                    <h2 className='font-medium'>Popular classes</h2>
                </div>
                <div>
                    <HomeFirstClass />
                </div>
            </div>
            <div className='place-content-end'>
                <div className='pl-4'>
                    <h2 className='font-bold'>Classes for you</h2>
                </div>
                <div ref={constraintsRef} className=''>
                    <HomeMultipleClasses />

                </div>
            </div>
        </div >
    )
}

export default Home