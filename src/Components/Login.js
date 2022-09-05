import React, { useEffect, useState } from 'react'

const Login = () => {
    const [login, setLogin] = useState({})


    useEffect(() => {
        fetch('http://localhost:4000/auth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(login),
        })
            .then(res => res.json())
            .then(data => { setLogin(data) })
            .catch(err => console.log(err))
    }, [login])

    return (
        <div>
            <div>
                <h1 className='font-bold text-[56px] text-[#f1c40e] p-8'>Believe Yourself</h1>
                <h2 className='font-semibold text-[36px] text-[#000000]'> - Train like a pro</h2>
            </div>
            <div>
                <h2>Login in with your credentials</h2>
            </div>
            <div>



            </div>
        </div >

    )
}

export default Login