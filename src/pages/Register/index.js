import React from 'react'
import { Redirect } from 'react-router-dom'
import FormRegister from '../../components/FromRegister'
import './styles.css'

export default function Register({ authenticated }) {

    if (authenticated) {
        <Redirect to='/dashboard' />
    }

    return (
        <div className='loginPage'>
            <FormRegister />
            <div className='loginPage_img'>
                <h1>Faça Parte</h1>
                <div className='img'></div>
            </div>
        </div >
    )
}
