import React from 'react'
import { useRef } from 'react';
import HeaderBurgerMenu from '../Components/HeaderBurgerMenu';
import HomeFirstClass from '../Components/HomeFirstClass';
import HomeMultipleClasses from '../Components/HomeMultipleClasses';

const Home = () => {
    const constraintsRef = useRef(null)

    return (
        <div>
            <div className='flex flex-col gap-16'>
                <div>
                    <div className='p-6 flex justify-between'>
                        <h2 className='font-medium'>Popular classes</h2>
                        <HeaderBurgerMenu />
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
            </div>
        </div>
    )
}

export default Home