import React from 'react'
import BackArrow from '../Components/BackArrow'
import SearchFunc from '../Components/SearchFunc'
import HomeMultipleClasses from '../Components/HomeMultipleClasses'
import HeaderBurgerMenu from '../Components/HeaderBurgerMenu'
import PopularTrainers from '../Components/PopularTrainers'

const Search = () => {
    return (
        <div>
            <div className='flex justify-between p-6'>
                <BackArrow />
                <h1 className=''>Search</h1>
                <HeaderBurgerMenu />
            </div>
            <SearchFunc />
            <div>
                <h2 className='font-bold pl-4'>Popular classes</h2>
                <HomeMultipleClasses />
            </div>
            <div>
                <h2 className='font-bold pl-4'>Popular trainers</h2>
                <PopularTrainers />
            </div>
        </div>
    )
}

export default Search