import React from 'react'
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';


const BackArrow = () => {
    return (
        <div className='text-[#9e9e9e] text-[24px]'>
            <Link to='/Home'>
                < FiArrowLeft />
            </Link>
        </div >
    )
}

export default BackArrow