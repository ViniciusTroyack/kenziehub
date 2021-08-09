import React from 'react'
import { Redirect } from 'react-router-dom'
import './styles.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TechCard from '../../components/TechCard'
import { toast } from 'react-toastify'


export default function Dashboard({ authenticated }) {
    const [token] = useState(JSON.parse(localStorage.getItem('@KenzieHub:token') || ''))
    const [id] = useState(JSON.parse(localStorage.getItem('@KenzieHub:user_id') || ''))
    const [techs, setTechs] = useState([])
    const [newTitle, setNewTitle] = useState('')
    const [newStatus, setNewStatus] = useState('')


    useEffect(() => {
        axios.get(`https://kenziehub.me/users/${id}`)
            .then((response) =>
                setTechs(response.data.techs))
            .catch((err) => console.log(err))
    })

    if (!authenticated) {
        return <Redirect to='/' />
    };

    const addNewTech = () => {
        axios.post(`https://kenziehub.me/users/techs`, {
            title: newTitle, status: newStatus
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((_) => toast.success('Tecnologia adicionada com sucesso'))
            .catch((e) => console.log(e))
    }

    return (
        <div className='divDashboard' >
            <h3>Tecnologias</h3>

            <input className='IptDashboard' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder={'Nova Tech'} />
            <input className='IptDashboard' value={newStatus} onChange={(e) => setNewStatus(e.target.value)} placeholder={'Status'} />
            <button onClick={() => addNewTech()}>Add</button>

            <div className='board'>
                {techs.map((tech, index) => <TechCard key={index} tech={tech} token={token} />)}
            </div>
            <div className='divImg'>
            </div>
        </div >
    )
}
