import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg'

import'./styles.css';

interface PageHeaderProps{
    tittle: string;
}

const PageHeader:React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
            <strong>{props.tittle}</strong>
            {props.children}
            </div>
        </header>
    );
}

export default PageHeader;