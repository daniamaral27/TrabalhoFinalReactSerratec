import { useContext } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import { CartContext } from "../../context/cart";
import { ProdutoAPI } from "../../services/api";
import "./index.css";

const Produto = () => {
  const { handleAddItemToCart } = useContext(CartContext);

  const { id } = useParams();
  const { produtos, carregando } = ProdutoAPI(`/${id}`);

  const Carregando = () => {
    return (
      <>
        <div className="carregamento">
          <h1>CARREGANDO PRODUTO AGUARDE</h1>
        </div>
      </>
    );
  };

  const MostrarProduto = () => {
    console.log("Mostrar");
    return (
      <>
        <div className="produto-content">
          <div className="produto-img">
            <img className="img-produto" src={produtos.fotoLink} alt="" />
          </div>
          <div className="produto-description">
            <p className="categoria">{`Categoria: ${produtos.nomeCategoria}`}</p>
            <h2>{produtos.nome}</h2>
            <p>{`Descrição: ${produtos.descricao}`}</p>
            <h3>{`Valor: R$ ${produtos.valor}`}</h3>
            {/* <div className="produto-quantidade">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div> */}
            <div>
              <div className="buttons-links-pages">
                <button className="button-links" >
                  <NavLink to="/produtos" className="txt-button-links">Continuar Comprando</NavLink>
                </button>
                <button className="button-links" >
                  <NavLink to="/cart" className="txt-button-links">Ir para carrinho</NavLink>
                </button>
              </div>
              <button
                className="button-carrinho"
                onClick={() =>
                  handleAddItemToCart(
                    produtos.id,
                    produtos.fotoLink,
                    produtos.nome,
                    produtos.valor
                  )
                }
              >
                <NavLink className="navlink">Adicionar ao Carrinho</NavLink>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="produto-unico">
        <div className="produto-container">
          {(() => {
            if (carregando) {
              return <Carregando />;
            } else {
              return <MostrarProduto />;
            }
          })()}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Produto;
