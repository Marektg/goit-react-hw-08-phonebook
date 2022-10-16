import AboutApp from 'components/aboutApp';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ForwardingLink = styled(NavLink)`
    
    color: #000;
    font-size: 0.8em;
   
    text-decoration: underline;
      &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;

const Footer = styled.p`
width: 60%;
margin-left:20%;
padding: 10px;
display: block;
border: 10px solid #eac748;
  background-color: #eceda0;

`;


const Home = () => {
    const token = useSelector(state => state.token);
    console.log(token);
    return (
        <>
            <AboutApp />
            {!token && <Footer>
                <ForwardingLink to="/register">Sign up</ForwardingLink> or <ForwardingLink to="/login">log in</ForwardingLink> to get started!
            </Footer>}
        </>
    );
};

export default Home;