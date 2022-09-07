import React from 'react'
import { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import Stars from './Stars';


const HomeFirstClass = () => {
    const [allClasses, setAllClasses] = useState([]);
    /* const [randomClass, setRandomClass] = useState([]); */
    let randomClass = []

    allClasses.forEach(index => {
        if (index.className !== null) {
            randomClass.push(index);
        }
    }
    )


    let random = Math.floor(Math.random() * randomClass.length);

    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => setAllClasses(data))
            .catch(err => console.log(err))
    }
        , [])



    const randomImage = () => {
        return randomClass[random].asset.url;
    }

    const randomName = () => {
        return randomClass[random].className;
    }


    return (
        <div>
            {
                randomClass[random] && (
                    <div className='flex px-5'>
                        <Link to={`/class/${randomClass[random].id}`}>
                            {
                                randomClass.className !== null && <div className=' h-[500px] w-[380px] rounded-xl'
                                    style={{
                                        backgroundImage: `url(${randomImage()})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                >
                                    <button className='bg-[#f1c40e] p-4 mt-[434px] rounded-bl-lg rounded-tr-lg'>
                                        {randomName()}
                                        <div className='bg-[#f1c40e]'>
                                            <Stars />
                                        </div>
                                    </button>
                                </div>
                            }
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default HomeFirstClass