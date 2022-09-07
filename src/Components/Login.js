import React from 'react'

const Login = () => {
    return (
        <div>
            <div >
                <h1 className='font-bold text-[56px] text-[#f1c40e] p-8'>Believe Yourself</h1>
                <h2 className='font-semibold text-[36px] text-[#000000]'> - Train like a pro</h2>
            </div>
            <div className='pt-10 pl-4 font-medium'>
                <h2>Log in with your credentials</h2>
            </div>
            <div>
                <form className='flex flex-col items-center'>
                    <input className='border-2 border-[#d4d4d4] rounded-full w-[380px] h-[40px] mt-4 px-8' type='text' placeholder='Enter your email...' />
                    <input className='border-2 border-[#d4d4d4] rounded-full w-[380px] h-[40px] mt-4 px-8' type='password' placeholder='Enter your password...' />
                    <button className='bg-[#f1c40e] rounded-full w-[380px] h-[40px] mt-4 font-medium'>LOG IN</button>
                </form>
            </div>
        </div>
    )
}

export default Login