import React from 'react'
import welcomebackground from '../assets/Img/welcomebackgroundcrop.jpg'
import welcomecenter from '../assets/Img/welcomecentercrop.jpg'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <div className='absolute'>
                <img src={welcomebackground} alt="Training woman" />
                <img src={welcomecenter} alt="Training woman" />
            </div>
            <div className='relative pt-36'>
                <h1 className='font-bold text-[56px] text-[#f1c40e] p-8'>Believe Yourself</h1>
                <h2 className='font-semibold text-[36px] text-[#ffffff]'> - Train like a pro</h2>
            </div>
            <div className='relative pt-72 pl-28'>
                <Link to='/home'>
                    <button className='bg-[#f1c40e] p-4 rounded-full font-semibold'>
                        START TRAINING
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome