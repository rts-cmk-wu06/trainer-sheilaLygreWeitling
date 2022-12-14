import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Stars from './Stars';
import BackArrow from './BackArrow';
import HeaderBurgerMenu from './HeaderBurgerMenu';

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
                    <div>
                        <div className='h-[500px] w-[415px] absolute'
                            style={{
                                backgroundImage: `url(${groups.asset.url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            <div>
                                <div className='flex justify-between p-4'>
                                    <BackArrow />
                                    <HeaderBurgerMenu />
                                </div>
                                <h1 className='font-bold text-[36px] text-[#f1c40e] mt-[250px] pl-4'>{groups.className}</h1>
                                <div className='flex p-12 justify-between items-center'>
                                    <div className='flex'>
                                        <div className='text-[#f1c40e] pr-4'>
                                            <Stars />
                                        </div>
                                        <p className='text-[#f1c40e]' >5/5</p>
                                    </div>
                                    <div >
                                        <button className='text-[#f1c40e] border px-8 py-4 border-[#f1c40e] rounded-full'> Rate </button>
                                    </div>
                                </div>
                            </div>
                            <div className='pl-4 pt-4'>
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
                            <Link to="/loginPage">
                                <div>
                                    <button className='text-[#000000]  m-4 px-[160px] py-4 bg-[#f1c40e] rounded-full'> SIGN UP </button>
                                </div>
                            </Link>
                        </div>
                        )
                    </div>
                )
            }
        </div >
    )
}

export default SingleClassDetail