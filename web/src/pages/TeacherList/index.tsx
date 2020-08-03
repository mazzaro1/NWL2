import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherList(){
    return (
    <div id="page-teacher-list" className="container">
        <PageHeader tittle="Estes são os proffys disponíveis">
            <form  id="search-teachers">
                <div className="input-block">
                    <label htmlFor="subject">Matéria</label>
                    <input type="text" id="subject"/>
                </div>

                <div className="input-block">
                    <label htmlFor="week_day">Dia da semana</label>
                    <input type="text" id="subject"/>
                </div>

                <div className="input-block">
                    <label htmlFor="time">Horário</label>
                    <input type="text" id="subject"/>
                </div>
            </form>
        </PageHeader>
        <main>
            <article className="teacher-itens">
                <header>
                    <img src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/60343196_2220200178055773_3875116182478520320_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeH7DMrFWAmDLNe0SZwitjP-nG6vXhw6KIGcbq9eHDoogbEIdrXeC1W3pJw8Jx-jzF3l-NoggX4MMLF1co6QunOA&_nc_ohc=BGkPGMqtUNQAX-jXzVQ&_nc_ht=scontent-gru1-1.xx&oh=80fd17018f9a7e237114616c02625fa4&oe=5F4D8E7E" alt="Carlos Ornelas"/>
                    <div>
                        <strong>Carlos Ornelas</strong>
                        <span>Teste de matéria</span>
                    </div>
                </header>
                <p> Teste de descrição Teste de descrição Teste de descrição
                Teste de descrição Teste de descrição Teste de descrição Teste de descrição
                </p>
                <footer>
                    <p>Preço/Hora
                    <strong>R$ 50,00</strong>
                    </p>
                    <button type="button">
                    <img src={whatsappIcon} alt="entre em contato"/>
                            Entre em contato
                </button>
                </footer>
            </article>
        </main>
    </div>
    )
}

export default TeacherList;