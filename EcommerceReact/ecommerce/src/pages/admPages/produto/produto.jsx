import axios from "axios";
import React, { useState } from "react";
import {APIResponse} from '../../../services/apiPadrao'
import '../categoria/catAdm.css';
import { NavLink} from "react-router-dom";
import Footer from '../../../components/Footer'

const ProdutoAdm = () => {
    const { data, isFetching, error } = APIResponse("/produto");
    const [errorS, setErrorS] = useState(null);
    const [response, setResponse] = useState(null);

    const deletarProduto = (id) => {
        axios
          .delete(`https://ecommerce-api-react-serratec.herokuapp.com/produto/${id}`)
          .then((response) => {
            setResponse(response.status);
          })
          .catch((error) => {
            setErrorS(error);
          })
          .finally(() => {
            refresh();
          });
      };
    
      const refresh = () => {
        window.location.reload();
      };

      const Carregando = () => {
        return(
            <>
                <div className="categoriaAdm-main">
                    <h1>Carregando</h1>
                </div>
            </>
        );
      }

      const Mostrar = () => {
        return(
            <>
                {data?.map((x) => {
                    return(
                        <div className="catadm-container" key={x.id}>
                            <div className="catadm-content">
                                <h2>Nome: {x.nome}</h2>
                                <p>Estoque: {x.qtdEstoque}</p>
                                <p>Categoria: {x.nomeCategoria}</p>
                                <p>Data Fabricação: {x.dataFabricacao}</p>
                                <p>Descrição: {x.descricao}</p>
                                <p>Valor: {x.valor}</p>
                                <div className="buttons-cmd">
                                    <button className="buttons-cmd-child">
                                        <NavLink className="buttons-cmd-child" to={`/produtoadmput/${x.id}`}>
                                            edit
                                        </NavLink>    
                                    </button>
                                    <button className="buttons-cmd-child" onClick={()=>deletarCategoria(x.id)}>delete</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        );
      }

    return(
        <>
            <div className="categoriaAdm-main">
                <h1 className="title-adm-section">Produtos</h1>
                <div className="categoriaAdm-title">
                    <NavLink to="/adm">
                        <div>                    
                            <h2 className="links-move">Voltar a Central</h2>
                        </div>
                    </NavLink>
                    <NavLink to="/categoriaadmpost">
                        <div>
                            <h2 className="links-move">Adicionar Novo</h2>
                        </div>
                    </NavLink>
                </div>
                <div className="cat-views">
                    {(() => {
                        if (isFetching) {
                            return <Carregando />;
                        } else {
                            return <Mostrar />;
                        }
                    })()}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProdutoAdm;