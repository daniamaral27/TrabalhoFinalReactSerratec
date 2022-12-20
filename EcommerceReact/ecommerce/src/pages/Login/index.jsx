import Footer from '../../components/Footer';
import { useState } from "react";
import { Link } from 'react-router-dom'
import LogoLogin from "../../assets/LogoHomeB.png"
import "../../styles/Login.css"
import { LayoutLogin } from '../../components/LayoutLogin';


const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <LayoutLogin>
                <form className="login-form">
                    <span className="login-form-title">
                        <img src={LogoLogin} alt="Logo" />
                    </span>
                    <span className="login-form-title"></span>

                    <div className="wrap-input">
                        <input
                            className={email !== "" ? "has-val input" : "input"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Email"></span>
                    </div>

                    <div className="wrap-input">
                        <input
                            className={password !== "" ? "has-val input" : "input"}
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Senha"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn">Login</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui conta? </span>
                        <Link className="txt2" to="/register">
                            Criar conta
                        </Link>
                    </div>
                </form>
            </LayoutLogin>

            <Footer />
        </>
    );
}

export default Login;