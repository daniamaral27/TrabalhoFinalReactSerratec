import { Route, Routes } from "react-router-dom";
import Adm from "../../pages/admSet/Adm";
import About from "../../views/About";
import Cart from "../../views/Cart";
import Contact from "../../views/Contact";
import Home from "../../views/Home";
import Login from "../../pages/Login/index";
import Products from "../../views/Products";
import Produto from "../../views/produtoUnico/Produto";
import CategoriaAdm from '../../pages/admPages/categoria/categoria';
import CategoriaAdmPut from "../../pages/admPages/categoria/PutCategoria"
import CategoriaAdmPost from "../../pages/admPages/categoria/PostCategoria"
import ClienteAdm from '../../pages/admPages/cliente/cliente';
import ClienteAdmPut from "../../pages/admPages/cliente/PutCliente"
import ClienteAdmPost from "../../pages/admPages/cliente/PostCliente"
import FuncionarioAdm from '../../pages/admPages/funcionario/funcionario';
import FuncionarioAdmPut from "../../pages/admPages/funcionario/PutFuncionario"
import FuncionarioAdmPost from "../../pages/admPages/funcionario/PostFuncionario"
import ProdutoAdm from '../../pages/admPages/produto/produto';
import ProdutoAdmPut from "../../pages/admPages/produto/PutProduto"
import { Register } from "../../pages/Register";

const Content = (props) => (
  <div>
    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/produtos/:id" element={<Produto />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/adm" element={<Adm />} />
<
      <Route path="/categoriaadm" element={<CategoriaAdm/>}></Route>
      <Route path="/categoriaadmpost" element={<CategoriaAdmPost/>}></Route>
      <Route path="/categoriaadmput/:id" element={<CategoriaAdmPut/>}></Route>
      <Route path="/clienteadm" element={<ClienteAdm/>}></Route>
      <Route path="/clienteadmput/:id" element={<ClienteAdmPut/>}></Route>
      <Route path="/clienteadmpost" element={<ClienteAdmPost/>}></Route>
      <Route path="/funcionarioadm" element={<FuncionarioAdm/>}></Route>
      <Route path="/funcionarioadmput/:id" element={<FuncionarioAdmPut/>}></Route>
      <Route path="/funcionarioadmpost" element={<FuncionarioAdmPost/>}></Route>
      <Route path="/produtoadm" element={<ProdutoAdm/>}></Route>
      <Route path="/produtoadmput/:id" element={<ProdutoAdmPut/>}></Route>
    </Routes> */}



      {/* <Route path="/categoriaadm" element={<CategoriaAdm />}></Route>
      <Route path="/categoriaadmpost" element={<CategoriaAdmPost />}></Route>
      <Route path="/categoriaadmput/:id" element={<CategoriaAdmPut />}></Route>
      <Route path="/clienteadm" element={<ClienteAdm />}></Route>
      <Route path="/clienteadmput/:id" element={<ClienteAdmPut />}></Route>
      <Route path="/clienteadmpost" element={<ClienteAdmPost />}></Route>
      <Route path="/funcionarioadm" element={<FuncionarioAdm />}></Route>
      <Route path="/funcionarioadmput/:id" element={<FuncionarioAdmPut />}></Route>
      <Route path="/funcionarioadmpost" element={<FuncionarioAdmPost />}></Route>
      <Route path="/produtoadm" element={<ProdutoAdm />}></Route>
      <Route path="/produtoadmput/:id" element={<ProdutoAdmPut />}></Route>
    </Routes> */}
  </div>
);

export default Content;
