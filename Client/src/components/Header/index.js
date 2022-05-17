import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from '../../assets/logo.png'
import './style.css'

const Header = () =>{
    return(
        <>
            <Navbar collapseOnSelect expand="lg" className="header-color">
            <Container>
            <Navbar.Brand href="/">
                <img className="img-logo" src={logo} alt=""/>
            </Navbar.Brand>
            </Container>
            </Navbar>
            <div className="margin-black"></div>
        </>
    )
}

export default Header;