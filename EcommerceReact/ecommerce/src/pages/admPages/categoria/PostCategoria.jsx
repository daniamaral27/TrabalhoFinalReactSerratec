import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './catAdm.css';

const PostCategoria = () => {
    const [errorS, setErrorS] = useState(null);
    const [apiResponse, setApiResponse] = useState(undefined);
    const [descricao, setDescricao] = useState("");
    const [nome, setNome] = useState("");
  
    const cadastrar = (e) => {
      e.preventDefault();
  
      axios
        .post("https://ecommerce-api-react-serratec.herokuapp.com/categoria", {
          descricao: descricao,
          nome: nome
        })
        .then((response) => {
          setApiResponse(response);
        })
        .catch((error) => {
          setErrorS(error);
        });

        console.log(errorS);
  
    };

    const teste = () => {
      console.log("teste")
    }

    return (
        <>
          <div className="categoriaAdm-main">
            <div className="catadm-container">
              <form className="form-edit" onSubmit={(e) => cadastrar(e)}>
                <div className="form-edit-content">
                  <h3>Nome Categoria:</h3>
                  <input type="text" 
                    value={nome}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="form-edit-content">
                  <h3>Descrição:</h3>
                  <input type="text" 
                    value={descricao}
                    minLength="5"
                    maxLength="60"
                    required
                    onChange={(e) => setDescricao(e.target.value)} />
                </div>
              </form>
              <div className="form-edit-content-cliente">
                <div className="form-edit-content">
                  <button className="buttons-cmd-child" type="submit" onClick={cadastrar}>Cadastrar</button>
                </div>
                <div className="form-edit-content">
                  <button className="buttons-cmd-child">
                      <NavLink  className="buttons-cmd-child" to="/categoriaadm">
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
                        Categoria Cadastrada
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


export default PostCategoria;