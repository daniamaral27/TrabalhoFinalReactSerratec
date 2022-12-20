import '../index.css';
import Footer from '../components/Footer';
import { useState, useContext } from "react";
import LogoLogin from "../assets/LogoHomeB.png"
import "../styles/Login.css"
import { AuthContext } from '../context/auth';




const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit",{email,password})
    login(email,password);
  }

  const { athenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form className="login-form" onSubmit={handleSubmit}>
              <span className="login-form-title">
                <img src={LogoLogin} alt="Logo" />
              </span>
              <span className="login-form-title"></span>

              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>

              <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <a className="txt2" href="#">
                  Criar conta
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;