import React from 'react'
import { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";




const HomeMultipleClasses = () => {
    const [classes, setClasses] = useState([]);
    const [randomClass, setRandomClass] = useState(0);


    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(err => console.log(err))

    }, [])

    useEffect(() => {
        let randomClasses = Math.floor(Math.random() * classes.length);
        setRandomClass(randomClasses);
    }, [classes])



    return (
        <div className='flex overflow-x-scroll overflow-hidden gap-8 p-5'>
            {
                classes?.map(({ asset, url, className }, index) => {
                    return (
                        <div className=''>
                            <div key={index} className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                style={{
                                    backgroundImage: `url(${classes[index].asset.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                <div>
                                    <button className=' bg-[#f1c40e] truncate w-full p-1 mt-[103px] rounded-tr-lg'>{className}</button>
                                    <p className='bg-[#f1c40e] rounded-bl-lg flex justify-evenly p-1'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
                                </div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}
export default HomeMultipleClasses