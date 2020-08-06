import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItens from '../../components/TeacherItens';


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
            <TeacherItens/>
            <TeacherItens/>
            <TeacherItens/>
            <TeacherItens/>
            <TeacherItens/>
            <TeacherItens/>
        </main>
    </div>
    )
}

export default TeacherList;