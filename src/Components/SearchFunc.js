import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SearchFunc = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        fetch('http://localhost:4000/api/v1/classes/',
            {
                method: 'GET',
            })
            .then(res => res.json())
            .then(data => setSearchTerm(data))
            .catch(err => console.log(err))
    }, [])

    const fuse = new Fuse(searchTerm, {
        keys: [
            'className',
            'classDescription',
            'classDay',
            'trainer.trainerName',
            'id'
        ]
    });

    const results = fuse.search(searchResults);
    const classSearchResults = searchResults ? results.map((result) => result.item) : searchTerm;

    const [isVisible, setIsVisible] = useState(false);
    function handleSearch({ currentTarget = {} }) {
        const { value } = currentTarget;
        setSearchResults(value);
        if (value === "") {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    }

    return (
        <div className='w-screen p-4'>
            <div className='relative'>
                <form action="search" className='w-full'>
                    <div className='flex items-center '>
                        {
                            classSearchResults.length === 0 ? (
                                <AiOutlineSearch className='absolute text-[#9e9e9e] ml-6' />
                            ) : (
                                <AiOutlineSearch className='absolute text-[#d4d4d4] ml-6' />
                            )
                        }
                        <input className='w-full border-[#d4d4d4] border-[1px] rounded-full p-4 pl-12' type='text' value={searchResults} onChange={handleSearch} placeholder='Search classes' />
                    </div>
                </form>
                {
                    isVisible && (
                        <ul>
                            {
                                classSearchResults.slice(0.2).map(({ classDay, classDescription, className, trainer, id }, index) => (
                                    <Link to={`/class/${id}`} key={index}>
                                        <li className='border-[#d4d4d4] border-[1px] rounded-full p-4 pl-12'>
                                            <ul>
                                                <li>{classDay}</li>
                                                <li className='truncate'>{classDescription}</li>
                                                <li className='truncate'>{className}</li>
                                            </ul>
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    )
                }
            </div>
        </div >
    )
}


export default SearchFunc