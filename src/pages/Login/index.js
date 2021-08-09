import './styles.css'
import FormLogin from '../../components/FormLogin'
import { Redirect } from 'react-router-dom'

export default function Login({ authenticated, setAuthenticated }) {

    if (authenticated) {
        <Redirect to='/dashboard' />
    }

    return (
        <div className='loginPage'>
            <div className='loginPage_img'>
                <h1>Kenzie Hub</h1>
                <div className='imgLogin'></div>
            </div>
            <FormLogin setAuthenticated={setAuthenticated} />
        </div >
    )
}
