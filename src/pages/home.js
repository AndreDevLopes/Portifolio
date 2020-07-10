import React from 'react';
import Navbar from '../components/navbar';
import Pefil from '../components/perfil';
import Resumo from '../components/resumo';
import Fita from '../components/fita';
import Portifolio from '../components/portfolio';
import Know from '../components/know';
import Contato from '../components/contato';
import Mark from '../components/mark';
import '../components/style.css';

// import { Container } from './styles';




function Home() {
  
  return (<>
    
    <Navbar></Navbar>
    <Mark></Mark>
    <Fita name="Perfil" top="20px"></Fita>
    <Pefil ></Pefil>
    <Fita name="Resumo"></Fita>
    <Resumo></Resumo>
    <Fita name="Habilidades"></Fita>
    <Know ></Know>
    <Fita name="Portifólio"></Fita>
    <Portifolio ></Portifolio>
    <Fita name="Contato"></Fita>
    <Contato ></Contato>
  
  </>
  );
}

export default Home;