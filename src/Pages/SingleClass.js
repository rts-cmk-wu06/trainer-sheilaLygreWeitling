import React from 'react'
import SingleClassDetail from '../Components/SingleClassDetail'
import BackArrow from '../Components/BackArrow'
import HeaderBurgerMenu from '../Components/HeaderBurgerMenu'

const SingleClass = () => {
    return (
        <div>
            <div className='flex justify-between p-4'>
                <BackArrow />
                <HeaderBurgerMenu />
            </div>
            <SingleClassDetail />
        </div>
    )
}

export default SingleClass