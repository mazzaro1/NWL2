import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItens from '../../components/TeacherItens';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList(){
    
    return (
    <div id="page-teacher-list" className="container">
        <PageHeader tittle="Estes são os proffys disponíveis">
            <form  id="search-teachers">
            <Select name="subject" 
                label="Matéria"
                options={[
                    {value:'Artes',label:'Artes'},  
                    {value:'Biologia',label:'Biologia'},
                    {value:'Ciências',label:'Ciências'},
                    {value:'Matemática',label:'Matemática'},
                    {value:'Física',label:'Física'},
                    {value:'Educação Física',label:'Educação Física'},
                    {value:'Filosofia',label:'Filosofia'},
                    {value:'Português',label:'Português'},
                    {value:'Informática',label:'Informática'},
                    {value:'História',label:'História'},
                    {value:'Quimica',label:'Quimica'}

                ]}
                />
             <Select name="week_day" 
                label="Dia da Semana"
                options={[
                    {value:'0',label:'Segunda-feira'},  
                    {value:'1',label:'Terça-feira'},
                    {value:'2',label:'Quarta-feira'},
                    {value:'3',label:'Quinta-feira'},
                    {value:'4',label:'Sexta-feira'},
                    {value:'5',label:'Sabado-feira'},
                    {value:'6',label:'Domingo-feira'},
                    

                ]}
                />
             <Input  type ="time" name="time" label="Hora"/>
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