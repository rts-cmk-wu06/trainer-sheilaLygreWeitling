import React, { useEffect, useState } from 'react'

const PopularTrainers = () => {
    const [popularTrainers, setPopularTrainers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/trainers',
            {
                method: 'GET'
            })
            .then(res => res.json())
            .then(data => {
                setPopularTrainers(data)
            })
    }, [])

    return (
        <div className='p-4'>
            {
                popularTrainers.map(({ trainerName, asset, url }, index) => {
                    return (
                        <div key={index} className='flex gap-4 pb-4' >
                            <div className='flex justify-between h-[100px] w-[100px] rounded-lg'
                                style={{
                                    backgroundImage: `url(${popularTrainers[index].asset.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>
                            <p className='mt-[35px] font-semibold'>{trainerName}</p>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default PopularTrainers