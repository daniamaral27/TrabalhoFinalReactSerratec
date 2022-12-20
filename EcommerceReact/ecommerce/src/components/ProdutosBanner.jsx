import '../styles/Products.css';
import icon1 from '../assets/produtos/shop1.png';
import icon2 from '../assets/produtos/credit-card 1.png';
import icon3 from '../assets/produtos/truck 1.png';

const ProdutosBanner = () => {
    return(
        <>
            <div className='banner-produtos'></div>
                <div className='banner-txt'>
                    <div className='banner-txt-content'>
                        <img src={icon1} alt="icon1" />
                        <p>PARCELAMENTO EM ATÉ 6X SEM JUROS</p>
                    </div>
                    <div className='banner-txt-content'>
                        <img src={icon2} alt="icon2" />
                        <p>PAC GRÁTIS PARA COMPRAS ACIMA DE R$ 500,00</p>
                    </div>
                    <div className='banner-txt-content'>
                        <img src={icon3} alt="icon3" />
                        <p>FÁBRICA PRÓPRIA</p>
                    </div>
                </div>
        </>
    );
}

export default ProdutosBanner;