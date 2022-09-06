import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Stars from './Stars';

const SingleClassDetail = () => {
    const { id } = useParams();

    const [groups, setGroups] = useState();
    const [trainer, setTrainer] = useState();

    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/classes/' + id,
        )
            .then(res => res.json())
            .then(data => setGroups(data))
            .catch(err => console.log(err))

    }, [id])

    useEffect(() => {
        fetch(
            'http://localhost:4000/api/v1/trainers/' + id,
        )
            .then(res => res.json())
            .then(data => setTrainer(data))
            .catch(err => console.log(err))

    }, [id])


    return (
        <div className='flex'>
            {
                groups && (
                    <div className='h-[500px] w-[415px]'
                        style={{
                            backgroundImage: `url(${groups.asset.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className=''>
                            <h1 className='font-bold text-[36px] text-[#f1c40e] mt-[300px]'>{groups.className}</h1>
                            <div className='flex p-12 justify-between items-center'>
                                <div className='flex'>
                                    <p className='text-[#f1c40e] pr-4'><Stars /></p>
                                    <p className='text-[#f1c40e]' >5/5</p>
                                </div>
                                <div >
                                    <button className='text-[#f1c40e] border px-8 py-4 border-[#f1c40e] rounded-full'> Rate </button>
                                </div>
                            </div>
                        </div>
                        <div className='pl-4'>
                            <div className='font-medium pb-4'>
                                <p>{groups.classDay} - {groups.classTime}</p>
                            </div>
                            <div>
                                <p>{groups.classDescription}</p>
                            </div>
                        </div>
                        <div className='p-4 pt-8'>
                            <h2 className='pb-4 font-bold text-[24px]'>Trainer</h2>
                            <div>
                                {
                                    trainer && (
                                        <div className='w-[130px] h-[130px] rounded-xl'
                                            style={{
                                                backgroundImage: `url(${trainer.asset.url})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        >
                                            <div className='ml-[150px]  font-semibold'>
                                                <p >{trainer.trainerName}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )

            }
        </div >
    )
}

export default SingleClassDetail