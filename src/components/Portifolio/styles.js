import styled from 'styled-components';

export const Container = styled.section`
    min-height: 100vh;
    width:100%;
    background: var(--color-secondary);
    display: flex;
    padding-top:5rem;
    flex-direction: column;

    @media (min-width: 1024px){
        margin-top:0;
        padding-top:50px;       
    }
   
  
`;

export const Card = styled.div `
    height:70rem;
    width:55rem;
    margin-left:3rem;
    margin-top:4rem;
    background: var(--color-quaternary);
    font-size:2rem;
    text-align:center;
    color: var(--color-primary);
    padding:2%;
    border-radius: 2rem;
    margin-bottom: 5rem;
    > img {
        width:84vw;
        height:40rem;
    }
    > p{
        margin-top: 20px;
        text-align: start;
        font-size: 2.5rem;
    }
  
    @media (min-width: 1024px){
        
        width:400px;
        height:400px;
        font-size: 16px;
        margin-left:5px;
        border-radius:10px;
        margin-top:0; 
        margin: 10px;
        > img {
            width:300px;
            height:150px;
            margin-bottom: 15px;
        }
        > p{
            font-size: 16px;
        }
      
    }

 `;

 export const Box = styled.div `
    @media (min-width: 1024px){
        margin-top:50px;
        margin-left: 5%;
        display: flex;
        margin-bottom: 100px;
        flex-wrap: wrap;
    }
 
 `;