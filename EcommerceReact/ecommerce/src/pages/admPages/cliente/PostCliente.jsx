import axios from "axios";
import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import './clienteadm.css';

const PostCliente = () => {
    const [errorS, setErrorS] = useState(null);
    const [apiResponse, setApiResponse] = useState(undefined);
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("");
    const [cep, setCep] = useState("");
    const [cpf, setCpf] = useState("");
    const[dataNascimento, setDataNascimento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [complemento, setComplemento] = useState("");
    const [estado, setEstado] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");

    const cadastrar = (e) => {
        e.preventDefault();
    
        axios
          .post(`https://ecommerce-api-react-serratec.herokuapp.com/cliente`, {
            cpf: cpf,
            dataNascimento: `${dataNascimento}T18:46:19Z`,
            email: email,
            endereco: {
                cep: cep,
                bairro: bairro,
                cidade: cidade,
                complemento: complemento,
                estado: estado,
                numero: numero,
                rua: rua,
            },
            nome: nome,
            usuario: usuario,
          })
          .then((response) => {
            setApiResponse(response);
          })
          .catch((error) => {
            setErrorS(error);
          });

          console.log(errorS)
    
      };

      return (
        <>
          <div className="clienteAdm-main">
            <div className="catadm-container">
              <form className="form-cliente-edit" onSubmit={(e) => cadastrar(e)}>
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
                  <h3>Usuario:</h3>
                  <input type="text"
                    value={usuario}
                    minLength="6"
                    maxLength="15"
                    required
                    onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Email:</h3>
                  <input type="text"
                    value={email}
                    minLength="4"
                    maxLength="30"
                    required
                    onChange={(e) => setEmail(e.target.value)} />
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
                <div className="form-edit-content">
                  <h3>Data Nascimento:</h3>
                  <input type="date"
                    value={dataNascimento}
                    minLength="6"
                    maxLength="11"
                    required
                    onChange={(e) => setDataNascimento(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>CEP:</h3>
                  <input type="text"
                    value={cep}
                    minLength="8"
                    maxLength="8"
                    required
                    onChange={(e) => setCep(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Bairro:</h3>
                  <input type="text"
                    value={bairro}
                    minLength="6"
                    maxLength="40"
                    required
                    onChange={(e) => setBairro(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Cidade:</h3>
                  <input type="text"
                    value={cidade}
                    minLength="6"
                    maxLength="40"
                    required
                    onChange={(e) => setCidade(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Estado:</h3>
                  <input type="text"
                    value={estado}
                    minLength="2"
                    maxLength="2"
                    required
                    onChange={(e) => setEstado(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Rua:</h3>
                  <input type="text"
                    value={rua}
                    minLength="4"
                    maxLength="40"
                    required
                    onChange={(e) => setRua(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Numero:</h3>
                  <input type="text"
                    value={numero}
                    minLength="1"
                    maxLength="20"
                    required
                    onChange={(e) => setNumero(e.target.value)} />
                </div>
                <div className="form-edit-content">
                  <h3>Complemento:</h3>
                  <input type="text"
                    value={complemento}
                    required
                    onChange={(e) => setComplemento(e.target.value)} />
                </div>
              </form>
              <div className="form-edit-content-cliente">
                <div className="form-edit-content">
                  <button className="buttons-cmd-child" type="submit" onClick={cadastrar}>Cadastrar</button>
                </div>
                <div className="form-edit-content">
                  <button className="buttons-cmd-child">
                      <NavLink  className="buttons-cmd-child" to="/clienteadm">
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
                        Cliente Cadastrado
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

export default PostCliente;