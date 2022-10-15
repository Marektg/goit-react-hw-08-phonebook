// import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from '../redux/tokenSlice';
import { deleteUser } from 'redux/userSlice';
import { useLogoutMutation } from 'services/phonebookApi';
import { StyledLink } from './MainNav.styled';

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
            <nav>
                <ul>
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
                </ul>
            </nav>
            {token && <p><span>User:</span> {user.email}</p>}
        </>
    );
}

export default Navi;