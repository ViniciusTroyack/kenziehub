import React from 'react'
import './styles.css'
import Input from '../Input'
import Button from '../Button'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useHistory } from 'react-router'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom'

export default function FormLogin({ authenticated, setAuthenticated }) {

    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        axios.post('https://kenziehub.me/sessions', data)
            .then((response) => {
                const { token } = response.data
                const { id } = response.data.user
                localStorage.clear();
                localStorage.setItem('@KenzieHub:token', JSON.stringify(token))
                localStorage.setItem('@KenzieHub:user_id', JSON.stringify(id))
                setAuthenticated(true)
                toast.success('Login feito com sucesso')
                history.push('/dashboard')
            })
            .catch((_) => {
                toast.error('Email ou Senha invalidos')
            })
    }

    if (authenticated) {
        return <Redirect to='/dashboard' />
    }


    return (
        <div>
            <div className='divForm'>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Login</h2>
                    <Input PlaceHolder={'Email'} name={'email'} register={register} />
                    {errors.email?.message}
                    <Input PlaceHolder={'Senha'} Type={'password'} name={'password'} register={register} />
                    {errors.password?.message}
                    <Button btnName={"Login"} type={'submit'} />
                    <button onClick={() => history.push('/register')}>CADASTRAR</button>
                </form>
            </div>
        </div>
    )
};
