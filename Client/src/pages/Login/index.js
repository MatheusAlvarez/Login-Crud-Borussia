import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import login from '../../assets/logo.png'
import './style.css';

import Axios from "axios";
import { Button } from 'react-bootstrap';

function Login(){
  const [emailAccount, setEmail] = useState("")
  const [pswd, setPassword] = useState("")

  const handleLogin = () => {
      Axios.post("http://localhost:3001/login", {
      email: emailAccount,
      password: pswd,
    }).then((response) => {
      if(response.data.msg === 1){
        window.location.href = '/home'
      }
      else{
        alert('Senha incorreta!!!')
      }
    }); 
  };

  
  return (
    
        <div className="container-login">
          <div className="img-box">
            <img src={login} alt="teste"/>
          </div>
          <div className="content-box">
              <div className="form-box">
                  <h2>Entrar</h2>
                  <form>
                      <div className="input-box">
                          <span>Username</span>
                          <input type="email" className='reste' placeholder="Informe seu email" onChange={e => setEmail(e.target.value)}/>
                          <div className="mb-3">
                      </div>
                      </div>

                      <div className="input-box">
                          <span>Password</span>
                          <input type="password" placeholder="Informe sua senha" onChange={e => setPassword(e.target.value)}/>
                      </div>

                      <div className="remember">
                          <label>
                              <input type="checkbox"/> Remember me
                          </label>
                          <Link to="/atualizar">
                          Esqueceu a Senha?
                          </Link>
                      </div>

                      <div className="input-box">
                        <Button onClick={handleLogin} className="btnEntrar">Entrar</Button>
                      </div>
                      
                      <div className="input-box">
                        <p>Não Tem Uma Conta? <Link to="/cadastro">Criar</Link></p>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Login;