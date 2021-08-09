import React from 'react'
import { Redirect } from 'react-router-dom'
import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Dashboard({ authenticated }) {
    const [token] = useState(JSON.parse(localStorage.getItem('@KenzieHub:token') || ''))
    const [id] = useState(JSON.parse(localStorage.getItem('@KenzieHub:user_id') || ''))
    const [tech, setTech] = useState([])


    useEffect(() => {
        axios.get(`http://kenziehub.me/users/${id}`)
            .then((response) =>
                console.log(id))
            // setTech(...response.data.user.tech))
            .catch((err) => console.log(err))
    }, [])

    if (!authenticated) {
        return <Redirect to='/' />
    };

    return (
        <div className='divDashboard'>
            <div className='board'>
                <h2>Tecnologias</h2>
            </div>
            <div className='divImg'></div>
        </div>
    )
}
