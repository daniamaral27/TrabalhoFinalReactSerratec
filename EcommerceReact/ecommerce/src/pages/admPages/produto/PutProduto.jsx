import axios from "axios";
import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {APIResponse} from '../../../services/apiPadrao';

const PutProduto = () => {
    const { id } = useParams();
    const { data } = APIResponse(`/produto/${id}`);
    const [errorS, setErrorS] = useState(null);
    const [apiResponse, setApiResponse] = useState(undefined);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [estoque, setEstoque] = useState(0);
    const [valor, setValor] = useState(0);

    const cadastrar = (e) => {
        e.preventDefault();
    
        axios
          .put(`https://ecommerce-api-react-serratec.herokuapp.com/produto/${id}`, {
            dataFabricacao: data.dataFabricacao,
            descricao: descricao,
            fotoLink: data.fotoLink,
            idCategoria: data.idCategoria,
            idFuncionario: data.idFuncionario,
            nome: nome,
            nomeCategoria: data.nomeCategoria,
            nomeFuncionario: data.nomeFuncionario,
            qtdEstoque: estoque,
            valor: valor
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
                    maxLength="30"
                    required
                    onChange={(e) => setNome(e.target.value)}/>
                </div>
                <div className="form-edit-content">
                  <h3>Descrição:</h3>
                  <input type="text" placeholder={data.descricao}
                    value={descricao}
                    minLength="5"
                    maxLength="200"
                    required
                    onChange={(e) => setDescricao(e.target.value)}/>
                </div>
                <div className="form-edit-content">
                  <h3>Estoque:</h3>
                  <input type="number" placeholder={data.qtdEstoque}
                    value={estoque}
                    minLength="1"
                    maxLength="10"
                    required
                    onChange={(e) => setEstoque(e.target.value)}/>
                </div>
                <div className="form-edit-content">
                  <h3>Valor:</h3>
                  <input type="number" placeholder={data.valor}
                    value={valor}
                    minLength="1"
                    maxLength="10"
                    required
                    onChange={(e) => setValor(e.target.value)}/>
                </div>
              </form>
              <div className="form-edit-content-cliente">
                <div className="form-edit-content">
                  <button className="buttons-cmd-child" type="submit" onClick={cadastrar}>Cadastrar</button>
                </div>
                <div className="form-edit-content">
                  <button className="buttons-cmd-child">
                      <NavLink  className="buttons-cmd-child" to="/produtoadm">
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
                        Produto Atualizado
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

export default PutProduto;
