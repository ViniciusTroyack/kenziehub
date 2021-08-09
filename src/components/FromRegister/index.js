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

export default function FormRegister() {

    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória").min(6, "Minimo de 6 caracteres"),
        name: yup.string().required("Nome obrigatória"),
        bio: yup.string().required("Bio obrigatória"),
        contact: yup.string().required("Campo obrigatória"),
        course_module: yup.string().required("Campo obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        axios.post('https://kenziehub.me/users', data)
            .then((_) => {
                toast.success('Cadastro Efetuado com sucesso')
                history.push('/')
            })
            .catch((_) => toast.error('Verique os dasco de cadastro'))
    }


    return (
        <div>
            <div className='divForm'>
                <form onSubmit={handleSubmit(onSubmitFunction)}>
                    <h2>Registro</h2>
                    <Input PlaceHolder={'Email'} name={'email'} register={register} />
                    {errors.email?.message}
                    <Input PlaceHolder={'Senha'} Type={'password'} name={'password'} register={register} />
                    {errors.password?.message}
                    <Input PlaceHolder={'Nome Completo'} name={'name'} register={register} />
                    {errors.name?.message}
                    <Input PlaceHolder={'Bio'} name={'bio'} register={register} />
                    {errors.bio?.message}
                    <Input PlaceHolder={'Contato'} name={'contact'} register={register} />
                    {errors.contact?.message}
                    <Input PlaceHolder={'Modulo(Nivel)'} name={'course_module'} register={register} />
                    {errors.course_module?.message}
                    <Button btnName={'Cadastrar'} type={'submit'} />
                    <button onClick={() => history.push('/')}>LOGIN</button>

                </form>
            </div>
        </div>
    )
};
