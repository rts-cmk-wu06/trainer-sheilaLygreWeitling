import React, { useEffect, useState } from 'react'



const SubscribedClasses = () => {

    const [firstSubscribedClass, setFirstSubscribedClass] = useState([])
    const [secondSubscribedClass, setSecondSubscribedClass] = useState([])


    useEffect(() => {
        fetch('http://localhost:4000/api/v1/classes/3',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => {
                setFirstSubscribedClass(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/classes/4',
            {
                method: 'GET',
            }
        )
            .then(res => res.json())
            .then(data => {
                setSecondSubscribedClass(data)
            })
    }, [])

    return (
        <div>

            <div className='p-4 border m-4 rounded-lg'>
                <h2 className='p-4'>{firstSubscribedClass.className}</h2>
                <p className='p-4'>{firstSubscribedClass.classDay} - {firstSubscribedClass.classTime}</p>
            </div>

            <div className='p-4 border m-4 rounded-lg'>
                <h2 className='p-4'>{secondSubscribedClass.className}</h2>
                <p className='p-4'>{secondSubscribedClass.classDay} - {secondSubscribedClass.classTime}</p>
            </div>
        </div>
    )
}

export default SubscribedClasses