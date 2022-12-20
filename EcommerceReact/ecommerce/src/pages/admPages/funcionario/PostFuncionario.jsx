import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../categoria/catAdm.css';

const PostFuncionario = () => {
  const [errorS, setErrorS] = useState(null);
  const [apiResponse, setApiResponse] = useState(undefined);
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");

  const cadastrar = (e) => {
    e.preventDefault();

    axios
      .post("https://ecommerce-api-react-serratec.herokuapp.com/funcionario", {
        cpf: cpf,
        nome: nome,
      })
      .then((response) => {
        setApiResponse(response);
      })
      .catch((error) => {
        setErrorS(error);
      });
  };

  return (
    <>
      <div className="categoriaAdm-main">
        <div className="catadm-container">
          <form className="form-edit" onSubmit={(e) => cadastrar(e)}>
            <div className="form-edit-content">
              <h3>Nome:</h3>
              <input type="text" 
                value={nome}
                minLength="5"
                maxLength="60"
                required
                onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className="form-edit-content">
              <h3>CPF:</h3>
              <input type="text" 
                value={cpf}
                minLength="11"
                maxLength="11"
                required
                onChange={(e) => setCpf(e.target.value)} />
            </div>
          </form>
          <div className="form-edit-content-cliente">
                <div className="form-edit-content">
                  <button className="buttons-cmd-child" type="submit" onClick={cadastrar}>Cadastrar</button>
                </div>
                <div className="form-edit-content">
                  <button className="buttons-cmd-child">
                      <NavLink  className="buttons-cmd-child" to="/funcionarioadm">
                        Voltar
                      </NavLink>
                    </button>
                </div>
              </div>
          {(() => {
            if (apiResponse?.status === 201) {
              return (
                <>
                  <div
                    className="txt-atualizar"
                  >
                    Funcionario Cadastrado
                  </div>
                </>
              );
            }
          })()}
        </div>

      </div>
    </>
  )
}

export default PostFuncionario;