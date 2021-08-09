import axios from 'axios'
import React from 'react'
import { toast } from 'react-toastify'
import './styles.css'

export default function TechCard({ tech, token }) {

    const removeTech = (id) => {
        axios.delete(`https://kenziehub.me/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then((_) => toast.success('Tecnologia Excluida'))
            .catch((e) => console.log(e))
    }

    return (
        <div className='Card'>
            <span>{tech.title}</span>
            <span>{tech.status}</span>
            <button onClick={() => removeTech(tech.id)}>Remover</button>
        </div >
    )
}
