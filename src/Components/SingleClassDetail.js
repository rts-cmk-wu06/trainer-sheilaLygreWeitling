import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const SingleClassDetail = () => {
    let { name } = useParams();

    const [choosenClass, setChoosenClass] = useState({})

    useEffect(() => {
        fetch('http://localhost:4000/api/v1/classes' + name, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        })
            .then(res => res.json())
            .then(data => setChoosenClass(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>


        </div>
    )
}

export default SingleClassDetail