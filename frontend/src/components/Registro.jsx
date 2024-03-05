import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './FormStyle.css'

function Registro() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmitRegistro = (e) => {
        e.preventDefault()

        axios.post('http://localhost:3000/auth/register', {
            name,
            email,
            password,
            confirmPassword
        })
        .then(() => {
            console.log(msg)
        })
        .catch((err) => console.log(`Erro ao cadastrar usuários: ${err}`))
      }

    return (
        <div className="form-container">
            <form method="post" autoComplete='off' onSubmit={handleSubmitRegistro}>
                <h1>Cadastre-se</h1>

                <div className="input-container">
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" placeholder='Digite seu nome aqui' value={name} onChange={(e) => setName(e.target.value)} />
                    <span></span>
                </div>

                <div className="input-container">
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" id="email" placeholder='Digite seu e-mail aqui' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span></span>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" id="password" placeholder='Digite sua senha aqui' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <sapn></sapn>
                </div>

                <div className="input-container">
                    <label htmlFor="confirm-password">Confirme sua senha: </label>
                    <input type="password" name="consfirm-password" id="confirm-password" placeholder='Confirme sua senha aqui' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <span></span>
                </div>

                <button type="submit" className='btn-submit'>Cadastrar</button>

                <span className='link'>Já tem uma conta? <Link to='/login'>Entre agora</Link> </span>
            </form>
        </div>
    )
}

export default Registro
