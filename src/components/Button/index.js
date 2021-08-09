import React from 'react'
import './styles.css'

export default function Button({ btnName, type }) {
    return (
        <div>
            <button type={type}>{btnName}</button>
        </div>
    )
}
