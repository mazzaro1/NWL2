import React, {useState} from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
    const [scheduleItens, setScheduleItens] = useState([
        { week_day:0, from:'', to:''}
            
 ]);
    
    function addNewScheduleItem(){
        setScheduleItens([
            ...scheduleItens,
            { week_day:0, from:'', to:''}
        ])
        
    }
    return (
        <div id="page-teacher-form" className="container">
           <PageHeader tittle="Que incrível que você quer dar aulas !"
            description=" O primeiro passo é preencher esse formulário de inscrição"
           />


        <main>
            <fieldset>
                <legend>Seus Dados</legend>
                <Input name="name" label="Nome Completo"/>
                <Input name="Avatar" label="Avatar"/>
                <Input name="Whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="biografia"/>
            </fieldset>
            
            <fieldset>
                <legend>Sobre a Aula</legend>
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
                <Input name="cost" label="Custo da sua hora por aula"/>
            </fieldset>

            <fieldset>
                <legend>Horários disponíveis
                <button type="button" onClick={addNewScheduleItem}>
                    + Novo Horário
                </button>
                </legend>
                {scheduleItens.map(scheduleIten =>{
                    return (
                        <div key={scheduleIten.week_day} className="schedule-item">
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
                <Input name="from" label="Das" type="time"/>
                <Input name="to" label="Até" type="time"/>
                </div>
                    )
                })}
            </fieldset>

            <footer>
                <p>
                 <img src={warningIcon} alt='warningIcon'/>
                 Importante! <br/>
                 Preencha todos os dados
                 </p>
                 <button type='button'>
                     Salvar Cadastro
                 </button>
            </footer>
        </main>
        </div>
        )
    }

export default TeacherForm;