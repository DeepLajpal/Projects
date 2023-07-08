import React from 'react';
import HeroSection from './components/HeroSection';
import Trusted from './components/Trusted';
import Services from './components/Services';

const Home = () => {

  const myData = {
    name : "Monkey ECOM"
  }

  return (
    <>
    <HeroSection myData={myData}/>
    <Services/>
    <Trusted/>
    </>
  )
}


export default Home