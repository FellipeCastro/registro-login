import {Link} from 'react-router-dom'

import './FormStyle.css'

function Login() {
    return (
        <div className="form-container">
            <form method="post" autoComplete='off'>
                <h1>Login</h1>

                <div className="input-container">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" id="email" placeholder='Digite seu e-mail aqui' required />
                    <span></span>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" id="password" placeholder='Digite sua senha aqui' required />
                    <sapn></sapn>
                </div>

                <button type="submit" className='btn-submit'>Login</button>

                <span className='link'>Ainda não tem uma conta? <Link to='/'>Crie uma agora</Link> </span>
            </form>
        </div>
    )
}

export default Login
