import '../styles/Contact.css';
import Footer from '../components/Footer';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

const Contact = (props) => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    function sendEmail (e){
        e.preventDefault();

        if(nome ==='' || email === '' || mensagem === ''){
            console.log("Algum campo em branco")
            alert("Preencha todos os campos");
            return;
        }

        const templateParams ={
            from_name: nome,
            message:mensagem,
            email:email
        }

        emailjs.send("service_6qz5yrp","template_y1wz8yj",templateParams,"Rl7YKP_Ea2CTak5QY")
        .then((response) => {
            console.log("Email Enviado",response.status,response.text)
            setNome('')
            setEmail('')
            setMensagem('')

            alert("Enviado com sucesso") 
            
        }, (erro)=>{
            console.log("ERRO:",erro)
        })

    }

    return (
        <>
            <div className='contato'>
                <div className='wrap-contato'>
                    <div className='contato-titles'>
                        <h2 className='title'>Entre em contato</h2>
                        <p className='sub-title'>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. </p>
                    </div>
                    <div className='main-form' onSubmit={sendEmail}>
                        <div className='main-form-title'><p>Nome</p></div>
                        <input
                            className='input_nome' required
                            type="text"
                            placeholder='NOME'
                            onChange={(e) => setNome(e.target.value)}
                            value={nome}
                        />
                        <div className='main-form-title'><p>E-mail</p></div>
                        <input
                            className='input_email' required
                            type="text"
                            placeholder='EMAIL'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <div className='main-form-title'><p>Mensagem</p></div>
                        <textarea className='input_msg'
                            maxLength={500}
                            name="mensagem"
                            cols="20" rows="12"
                            placeholder="MENSAGEM"
                            onChange={(e) => setMensagem(e.target.value)}
                            value={mensagem}
                        />
                        <div className='main-button'>
                            <button className='button-v'>VOLTAR</button>
                            <button className='button-e' onClick={sendEmail}>ENVIAR</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;