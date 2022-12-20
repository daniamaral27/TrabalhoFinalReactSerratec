import '../styles/About.css';
import Footer from '../components/Footer';
import mapa from '../assets/mapa.png'

const About = () => {
    return (
        <>
            <div className='about'>

                <section>
                    <div className='banner_container'>
                        <div className='titulo'>
                            <h1>SOBRE</h1>
                        </div>
                    </div>
                </section>
                <section className='sobre'>
                    <div className='sobre_pt_1'>
                        <div className='introducao'>
                            <h2 className='texto'>Somos um e-commerce de produtos eletrônicos, que oferece os melhores produtos com as melhores ofertas! Você não se arrependerá de comprar conosco, pois além do preço competitivo, facilitamos a forma de pagamento e um atendimento ao cliente diferenciado.</h2>
                        </div>
                        <div className='mapa'>
                            <img src={mapa} alt="mapa" />
                        </div>
                    </div>
                    <div className='sobre_pt_2'>
                        <div className='endereco'>
                            <h3>Rua Manoel Madruga, n. 148, Várzea, Teresópolis -Rj</h3>
                                <h3>De segunda a sexta, de 8h às 18h</h3>
                                <h3>techshop@gmail.com</h3>
                                <h3>(21) 99999-9999</h3>
                        </div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}

export default About;