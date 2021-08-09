import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useState, useEffect } from 'react'


export default function Routes() {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('@KenzieHub:token'))

        if (token) {
            setAuthenticated(true)
        }

    }, [authenticated])

    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
                </Route>
                <Route path='/register'>
                    <Register authenticated={authenticated} />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard authenticated={authenticated} />
                </Route>
            </Switch>
        </div>
    )
}
