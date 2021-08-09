import React from 'react'
import "./styles.css"

export default function Input({ PlaceHolder, Type, register, name }) {
    return (
        <div>
            <input placeholder={PlaceHolder} type={Type} {...register(name)} />
        </div>
    )
}
