import { motion } from 'framer-motion';
import React from 'react'
import { useRef } from 'react';
import HomeFirstClass from '../Components/HomeFirstClass';
import HomeMultipleClasses from '../Components/HomeMultipleClasses';


const Home = () => {
    const constraintsRef = useRef(null)

    return (
        <div className='grid grid-row-2 gap-24'>
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
                <div ref={constraintsRef} className='overflow-hidden'>
                    <motion.div drag="x" dragConstraints={{ left: -570, right: 0, top: 0, bottom: 0 }} className='overflow-hidden'>
                        <HomeMultipleClasses />
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Home