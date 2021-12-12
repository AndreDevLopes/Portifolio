import React from 'react';
import Header from '../components/Header';
import Post from '../components/Post';
import Profile from '../components/Profile';
import Portifolio from  '../components/Portifolio';
import Footer from '../components/Footer';
import Skill from '../components/Skill';

function Home() {
  
  return (<> 
    <Header />
    <Post />
    <Profile />
    <Portifolio />
    <Skill />
    <Footer />
  </>
  );
}

export default Home;