import './App.css'

function App() {

  return (
    <>
      <div className="form-container">
        <form method="post" autoComplete='off'>
          <fieldset>
            <legend>Cadastre-se</legend>

            <div className="input-container">
              <label htmlFor="nome">Nome: </label>
              <input type="text" name="nome" id="nome" placeholder='Digite seu nome aqui' required />
            </div>
            <div className="input-container">
              <label htmlFor="email">E-mail: </label>
              <input type="email" name="email" id="email" placeholder='Digite seu e-mail aqui' required />
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha: </label>
              <input type="password" name="password" id="password" placeholder='Digite sua senha aqui' required />
            </div>
            <div className="input-container">
              <label htmlFor="confirm-password">Confirme sua senha: </label>
              <input type="password" name="consfirm-password" id="confirm-password" placeholder='Confirme sua senha aqui' required />
            </div>
            <button type="submit" className='btn-submit'>Cadastrar</button>
          </fieldset>
        </form>
      </div>
    </>
  )
}

export default App
