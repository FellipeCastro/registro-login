import {Link} from 'react-router-dom'

import './FormStyle.css'

function Registro() {
    return (
        <div className="form-container">
            <form method="post" autoComplete='off'>
                <h1>Cadastre-se</h1>

                <div className="input-container">
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" placeholder='Digite seu nome aqui' required />
                    <span></span>
                </div>

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

                <div className="input-container">
                    <label htmlFor="confirm-password">Confirme sua senha: </label>
                    <input type="password" name="consfirm-password" id="confirm-password" placeholder='Confirme sua senha aqui' required />
                    <span></span>
                </div>

                <button type="submit" className='btn-submit'>Cadastrar</button>

                <span className='link'>Já tem uma conta? <Link to='/login'>Entre agora</Link> </span>
            </form>
        </div>
    )
}

export default Registro
