import axios from "axios";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {APIResponse} from '../../../services/apiPadrao';

const PutFuncionario = () => {
    const { id } = useParams();
    const { data } = APIResponse(`/funcionario/${id}`);
    const [errorS, setErrorS] = useState(null);
    const [apiResponse, setApiResponse] = useState(undefined);
    const [nome, setNome] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
    
        axios
          .put(`https://ecommerce-api-react-serratec.herokuapp.com/funcionario/${id}`, {
            cpf: data.cpf,
            nome: nome
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
                  <input type="text" placeholder={data.nome}
                    value={nome}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setNome(e.target.value)}/>
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
                if (apiResponse?.status === 200) {
                  return (
                    <>
                      <div
                        className="txt-atualizar"
                      >
                        Funcionario Atualizado
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

export default PutFuncionario;