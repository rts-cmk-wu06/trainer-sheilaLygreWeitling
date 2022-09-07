import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Stars from './Stars';


const HomeMultipleClasses = () => {
    const [classes, setClasses] = useState([]);
    const [randomClass, setRandomClass] = useState(0);

    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes',
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
        <div >

            <div className='flex overflow-x-scroll overflow-hidden gap-8 p-5'>
                {
                    classes && classes?.map(({ asset, url, className, id }, index) => {

                        if (asset !== null) {
                            return (
                                <Link to={`/class/${id}`} key={index}>
                                    <div className=''>
                                        <div className='w-[150px] h-[150px] rounded-l-lg rounded-tr-lg'
                                            style={{
                                                backgroundImage: `url(${classes[index].asset.url})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}>
                                            <div>
                                                <button className=' bg-[#f1c40e] truncate w-full p-1 mt-[103px] rounded-tr-lg'>{className}</button>
                                                <div className='bg-[#f1c40e] rounded-bl-lg p-1' >
                                                    <Stars />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )

                        }
                    }
                    )

                }
            </div>

        </div>
    )
}
export default HomeMultipleClasses