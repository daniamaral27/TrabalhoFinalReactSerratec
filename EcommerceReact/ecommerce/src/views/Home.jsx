import '../styles/Home.css';
import computer3 from '../assets/home/3-computer.png';
import shop1 from '../assets/home/shop 1.png';
import shop2 from '../assets/home/shop 2.png';
import shop3 from '../assets/home/shop 3.png';
import noteD from '../assets/home/noteaberto-desktop.png';
import icon1 from '../assets/home/icon1.png';
import icon2 from '../assets/home/icon2.png';
import icon3 from '../assets/home/icon3.png';
import icon4 from '../assets/home/icon4.png';
import Footer from '../components/Footer';
// import { useContext } from 'react';
// import { AuthContext } from '../context/auth';


const Home = () => {
    // const {logout} = useContext(AuthContext);
    // const handleLogout = () =>{
    //     logout();
    // };
    return(
        <>
            <div className="home">
                <section className="banner-container"></section>
                <section className="top-section">
                    <div className="top-section-txt">
                        <h2 className="top-section-subtitle">Aqui você encontra os</h2>
                        <h1 className="top-section-title"> melhores produtos </h1>

                        <p className="top-section-description">
                            Com um atendimento exclusivo e personalizado, tornando acessível produtos de qualidade e com baixo custo, fazendo seu atendimento até a entrega uma incrivel experiência!  
                        </p>
                    </div>
                
                    <img className="top-section-banner" src={computer3} alt="infocardbanner" />
                </section>

                <section className="top-cards">
                    <div className="top-card123">
                        <img className="top-card-img" src={shop1} alt="card1" />

                        <p className="top-card-txt">
                            Loja Virtual com atendimento personalizado, onde você encontra os melhores produtos com os melhores preços.  
                        </p>
                    </div>

                    <div className="top-card123">
                        <img className="top-card-img" src={shop2} alt="card2" />

                        <p className="top-card-txt">
                            Enviamos para todo o Brasil, sempre bem embalado, com transportadoras seguras e dentro do prazo estimado. 
                        </p>
                    </div>

                    <div className="top-card123">
                        <img className="top-card-img" src={shop3} alt="card3" />

                        <p className="top-card-txt">
                            Trabalhamos com diversas formas de pagamento, com total segurança. 
                        </p>
                    </div>

                </section>

                <section>
                    <img className="middle-banner" src={noteD} alt="notebook.aberto" />
                </section>

                <section className="bottom-cards">
                    <div className="bottom-card-wrapper">
                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon1} alt="bottom-card-img1" />

                            <p className="bottom-card-txt">
                                Pagamento com cartão de crédito, boleto bancário e Pix.
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon2} alt="bottom-card-img2" />

                            <p className="bottom-card-txt">
                                O pagamento é feito com total segurança no tráfego de dados, tudo com controle do sistema da loja virtual.  
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon3} alt="bottom-card-img3" />

                            <p className="bottom-card-txt">
                             Todos os produtos vão com garantia, e prazo para troca ou devolução de 30 dias.   
                            </p>

                        </div>

                        <div className="bottom-card123">
                            <img className="bottom-card-img" src={icon4} alt="bottom-card-img4" />

                            <p className="bottom-card-txt">
                            Qualquer informação coletada no site, respeita a sua privacidade, solicitamos apenas informações pessoais para fornecer um serviço de qualidade.  
                            </p>

                        </div>
                    </div>
                </section>
                <Footer />
            </div>
          
        </>
    )
}

export default Home;
