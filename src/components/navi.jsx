// import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from '../redux/tokenSlice';
import { deleteUser } from 'redux/userSlice';
import { useLogoutMutation } from 'services/phonebookApi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    width: 90%;
    color: #000;
    font-size: 0.8em;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    border: 5px rgb(126, 53, 2) solid;
    padding: 10px;
    border-radius: 50%;
      &:hover {
        color: white;
        font-size: 1em;
        font-weight: 600;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;

const StyledNav = styled.div`
display: block; 
margin-top: 30px;
margin-bottom: 30px; 
`;

const StyledList = styled.ul`
width: 60%;
align-items: center;
margin-left: 20%;
display: grid;
grid-template-columns: repeat(3, 1fr);
`;


function Navi() {
    const token = useSelector(state => state.token);
    const user = useSelector(state => state.user);
    const [logout] = useLogoutMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await localStorage.setItem("token", JSON.stringify(""));
        await logout().then(() => {
            dispatch(deleteToken());
            dispatch(deleteUser());
        });
        await navigate('/login');
    };

    return (
        <>
            <StyledNav>
                <StyledList>
                    <li>
                        <StyledLink to="/" end>
                            Home
                        </StyledLink>
                    </li>
                    {token && (
                        <li>
                            <StyledLink to="/contacts">Contacts</StyledLink>
                        </li>
                    )}
                    {!token && (
                        <li>
                            <StyledLink to="/register">Sign up</StyledLink>
                        </li>
                    )}
                    {!token && (
                        <li>
                            <StyledLink to="/login">Login</StyledLink>
                        </li>
                    )}
                    {token && (
                        <li>
                            <StyledLink as="button" onClick={logoutHandler}>
                                Log out
                            </StyledLink>
                        </li>
                    )}
                </StyledList>
            </StyledNav>
            {token && <p><span>User:</span> {user.email}</p>}
        </>
    );
}

export default Navi;