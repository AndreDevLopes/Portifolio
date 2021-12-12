import React from 'react';

 import { Container , Card ,Box} from './styles';
 
 import SigmedImg from '../../assets/sigmed.png'; 
 import MattesImg from '../../assets/mattes.png';
 import LicitaImg from '../../assets/licitaboard.png';
 import FisicaImg from '../../assets/fisica.png';
 import TitleSection from '../../UI/TitleSection';  
 import Leadbot from '../../assets/leadbot.png';
 import Poker from '../../assets/poke.png';
 import Event from '../../assets/event.png';
 import Meudiploma from '../../assets/meudiploma.jpeg';
 import data from '../../data/Card';
 
function Portifolio() {
  return (
  <Container id='portifolio'>
      <TitleSection title="Portifolío" variant="lg" bar="17"/>
      <Box>
        <Card>
            <h2>{data[0].title}</h2>
            <img alt="Sigmed" src={SigmedImg}></img>
            <p>{data[0].description}</p>
        </Card>
        <Card>
            <h2>{data[1].title}</h2>
            <img alt="Experimetos" src={FisicaImg}></img>
            <p>{data[1].description}</p>
        </Card>
        <Card>
            <h2>{data[2].title}</h2>
            <img alt="Licitação" src={LicitaImg}></img>
            <p>{data[2].description}</p>
        </Card>
        <Card>
            <h2>{data[3].title}</h2>
            <img alt="Mattes" src={MattesImg}></img>
            <p>{data[3].description}</p>
        </Card> 
        <Card>
            <h2>{data[4].title}</h2>
            <img alt="Leadbot" src={Leadbot}></img>
            <p>{data[4].description}</p>
        </Card> 
        <Card>
            <h2>{data[5].title}</h2>
            <img alt="Poke" src={Poker}></img>
            <p>{data[5].description}</p>
        </Card> 
        <Card>
            <h2>{data[6].title}</h2>
            <img alt="event" src={Event}></img>
            <p>{data[6].description}</p>
        </Card> 
        <Card>
            <h2>{data[7].title}</h2>
            <img alt="meudiploma" src={Meudiploma}></img>
            <p>{data[7].description}</p>
        </Card> 
      </Box>
      
        
  </Container>);
}

export default Portifolio;