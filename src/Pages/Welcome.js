import React from 'react'
import welcomebackground from '../assets/Img/welcomebackground.jpg'
import welcomecenter from '../assets/Img/welcomecenter.png'
import { Link } from 'react-router-dom'

const Welcome = () => {

    return (
        <div>
            <div className='relative h-screen'
                style={{
                    backgroundImage: `url(${welcomebackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='relative'>
                    <h1 className='font-bold text-[56px] text-[#f1c40e] p-8'>Believe Yourself</h1>
                    <h2 className='font-semibold text-[36px] text-[#ffffff]'> - Train like a pro</h2>
                </div>
                <div className=' absolute h-1/2 w-full left-0 bottom-0 z-10'
                    style={{
                        backgroundImage: `url(${welcomecenter})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>
                </div>
                <div className='fixed bottom-8 flex justify-center w-full z-20 '>
                    <Link to='/home'>
                        <button className='bg-[#f1c40e] p-4 rounded-full font-semibold'>
                            START TRAINING
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Welcome