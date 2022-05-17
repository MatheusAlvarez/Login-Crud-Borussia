import React from 'react'
import './style.css'
import Header from '../../components/Header';
import CarouselCom from '../../components/Carousel';
import Cadastrar from '../../components/Cadastrar';

const Home = () =>{
    return(
        <>
        <Header />
        <CarouselCom />
        <Cadastrar />
        </>
    );
}

export default Home;