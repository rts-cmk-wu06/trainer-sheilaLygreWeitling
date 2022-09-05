import React from 'react'
import { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';




const HomeFirstClass = () => {
    const [randomClass, setRandomClass] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => setRandomClass(data))
            .catch(err => console.log(err))
    }
        , [])

    const randomImage = () => {
        const random = Math.floor(Math.random() * randomClass.length);
        return randomClass[random].asset.url;
    }

    const randomName = () => {
        const random = Math.floor(Math.random() * randomClass.length);
        return randomClass[random].className;
    }


    return (
        <div>
            <div className='flex px-5'>
                <Link to={`/Class/${id}`}>
                    {
                        randomClass.length > 0 && <div className=' h-[500px] w-[380px] rounded-xl'
                            style={{
                                backgroundImage: `url(${randomImage()})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <button className='bg-[#f1c40e] p-4 mt-[427px] rounded-bl-lg rounded-tr-lg'>
                                {randomName()} <p className='flex justify-evenly p-1'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                            </button>
                        </div>
                    }
                </Link>
            </div>
        </div >
    )
}

export default HomeFirstClass