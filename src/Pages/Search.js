import React from 'react'
import BackArrow from '../Components/BackArrow'
import SearchFunc from '../Components/SearchFunc'
import HomeMultipleClasses from '../Components/HomeMultipleClasses'
import HeaderBurgerMenu from '../Components/HeaderBurgerMenu'

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
                <HomeMultipleClasses />
            </div>
        </div>
    )
}

export default Search