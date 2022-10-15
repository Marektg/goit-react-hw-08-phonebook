import AboutApp from 'components/aboutApp';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ForwardingLink = styled(NavLink)`
    width: 100%;
    color: #000;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
      &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;


const Home = () => {
    const token = useSelector(state => state.token);

    return (
        <>
            <AboutApp />
            {!token && <p>
                <ForwardingLink to="/register">Sign up</ForwardingLink> or <ForwardingLink to="/login">log in</ForwardingLink> to get started!
            </p>}
        </>
    );
};

export default Home;