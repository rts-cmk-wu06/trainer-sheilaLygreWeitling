/* import React from 'react'
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

import { StateContext } from './Hooks/stateContext';

const schema = yup
    .object({
        email: yup.string().email("Eks. navn@domæne.dk").required("Skriv venligst din email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Eks. navn@domæne.dk"),
        password: yup.string().min(3, "Kodeord skal være minimum 3 bogstaver").required(),
    }).required();

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();
    const { setEmail } = useContext(StateContext);
    const onSubmit = (data) => {
        navigate("/Payment")

        setEmail(data.email)
    };

    return (
        <div className="app" >
            <div>
                <h1 className='font-bold text-[56px] text-[#f1c40e] p-8'>Believe Yourself</h1>
                <h2 className='font-semibold text-[36px] text-[#000000]'> - Train like a pro</h2>
            </div>
            <div className='pt-10 pl-4'>
                <h2>Login in with your credentials</h2>
            </div>
            <div>
                <form className=' flex flex-col  p-4'>
                    <div className='pb-4 '>
                        <input type="text" placeholder='Enter your email...' className='p-4 pr-[190px] border-2 rounded-full' {...register("email", { required: true, pattern: { value: /^\S+@\S+$/i, message: "Skriv en valid email" } })} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className=''>
                        <input type="text" placeholder='Enter your password...' className='p-4 pr-[190px]  border-2 rounded-full' {...register("password", { required: true })} />
                        <p>{errors.password?.message}</p>
                    </div>
                    <div className='pt-4'>
                        <input type="submit" value="LOG IN" className='bg-[#f1c40e] text-[#000000] px-[165px] py-4 rounded-full' />LOG IN
                    </div>
                </form>
            </div>
            <div className="login-form">
            </div>
        </div >
    )
}


 */