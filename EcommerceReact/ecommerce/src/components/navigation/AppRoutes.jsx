import { BrowserRouter, Routes, Router, Navigate, Route } from "react-router-dom";
import Home from "../../views/Home";
import Login from "../../views/Login";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "../../context/auth";

import Adm from "../../pages/admSet/Adm";
import About from "../../views/About";
import Cart from "../../views/Cart";
import Contact from "../../views/Contact";

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

const AppRoutes = () => {

    const Private = ({ children }) => {
        const { authenticated, loading } = useContext(AuthContext);
        if (loading) {
            return <div className="loading">Carregando...</div>;
        }
        if (!authenticated) {
            return <Navigate to="/login" />
        }
        return children;
    };

    return (
        <AuthProvider>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />


                <Route path="/produtos" element={<Products />} />
                <Route path="/produtos/:id" element={<Produto />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/contato" element={<Contact />} />

                <Route path="/cart" element={<Cart />} />
                <Route path="/adm" element={<Private><Adm /></Private>} />
                <Route path="/categoriaadm" element={<Private><CategoriaAdm /></Private>}></Route>
                <Route path="/categoriaadmpost" element={<Private><CategoriaAdmPost /></Private>}></Route>
                <Route path="/categoriaadmput/:id" element={<Private><CategoriaAdmPut /></Private>}></Route>
                <Route path="/clienteadm" element={<Private><ClienteAdm /></Private>}></Route>
                <Route path="/clienteadmput/:id" element={<Private><ClienteAdmPut /></Private>}></Route>
                <Route path="/clienteadmpost" element={<Private><ClienteAdmPost /></Private>}></Route>
                <Route path="/funcionarioadm" element={<Private><FuncionarioAdm /></Private>}></Route>
                <Route path="/funcionarioadmput/:id" element={<Private><FuncionarioAdmPut /></Private>}></Route>
                <Route path="/funcionarioadmpost" element={<Private><FuncionarioAdmPost /></Private>}></Route>
                <Route path="/produtoadm" element={<Private><ProdutoAdm /></Private>}></Route>
                <Route path="/produtoadmput/:id" element={<Private><ProdutoAdmPut /></Private>}></Route>


            </Routes>
        </AuthProvider>
    );
}

export default AppRoutes