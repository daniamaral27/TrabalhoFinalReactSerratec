import Footer from "../../components/Footer"
import { LayoutLogin } from "../../components/LayoutLogin"
import LogoLogin from "../../assets/LogoHomeB.png"
import { useState } from "react"
import { Link } from "react-router-dom"


export const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
                            className={name !== "" ? "has-val input" : "input"}
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <span className="focus-input" data-placeholder="Nome"></span>
                    </div>
                    
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

                    <div className="wrap-input">
                        <input
                            className={confirmPassword !== "" ? "has-val input" : "input"}
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value) }
                        />
                        <span className="focus-input" data-placeholder="Confirmar senha"></span>
                    </div>

                    <div className="container-login-form-btn">
                        <button className="login-form-btn" >Criar conta</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Já possui conta? </span>
                        <Link className="txt2" to="/login">
                            Voltar para login
                        </Link>
                    </div>
                </form>
            </LayoutLogin>
            <Footer />
        </>
    )
}