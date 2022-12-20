import { useContext } from "react";
import "../styles/Cart.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { CartContext } from "../context/cart";

const Cart = () => {
  let totalPrice = 0;
  const {
    productsCart,
    clearCart,
    handleAddItemToCart,
    handleRemoveItemToCart,
    removalItem,
  } = useContext(CartContext);

  return (
    <>
      <div className="main-carrinho">
        <div className="carrinho-container">
          <div className="items-content">
            <h1>Carrinho de Produtos</h1>
            <p>linha</p>

            {productsCart.length === 0 && <h1 className="teste">CARRINHO VAZIO</h1>}

            {productsCart?.map((prod) => {
              const subTotal = prod.valor * prod.quantidade;
              totalPrice += subTotal;
              console.log(productsCart);

                return(
                    <>
                        <div className="produto-container-carrinho">
                          <div className="produto-content-carrinho">
                              <div className="imagem-content">
                                  <img className="imagem" src={prod.fotoLink} alt="Imagem Produto" />
                              </div>
                              <div className="nome">
                                  <h2>{prod.nome}</h2>
                              </div>
                              <div className="button-addrmv">
                                  <button onClick={() => handleRemoveItemToCart(prod.id)}>-</button>
                                  <p>{prod.quantidade}</p>
                                  <button onClick={() =>
                                    handleAddItemToCart(
                                      prod.id,
                                      prod.fotoLink,
                                      prod.nome,
                                      prod.valor
                                    )
                                  }>+</button>
                              </div>
                              <div className="produto-valortotal">
                                  <h2>R$ {subTotal.toFixed(2)}</h2>
                              </div>
                              <div className="produto-excluir">
                                  <button onClick={() => removalItem(prod.id)}>x</button>
                              </div>
                          </div>
                        </div>
                    </>
                );
            })}
          </div>
          <div className="dados-container">
            <div className="dados-content">
              <div className="title">
                <h2>Informações:</h2>              
                <p>x</p>
              </div>
              <div className="dados-valores">
                <div>
                  <h2>Pedidos: {productsCart.length}</h2>
                </div>
                <div>
                  <h2>Total: R$ {totalPrice}</h2>
                </div>
                <div className="dados-buttons">
                  <button onClick={clearCart}>LIMPAR</button>
                  <button>COMPRAR</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
