import React from 'react'
import BackArrow from '../Components/BackArrow'
import HeaderBurgerMenu from '../Components/HeaderBurgerMenu'
import SubscribedClasses from '../Components/SubscribedClasses'

const Schedule = () => {
    return (
        <div>
            <div className='p-6 flex justify-between'>
                <BackArrow />
                <h2 className='font-medium'>Schedule</h2>
                <HeaderBurgerMenu />
            </div>
            <div>
                <SubscribedClasses />
            </div>
        </div>
    )
}

export default Schedule