import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from 'redux/tokenSlice';
import { addUser } from 'redux/userSlice';
import { useLoginMutation } from 'services/phonebookApi';
import getFromLocalStorage from 'utilites/getFromLocalStore';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 60%;
margin-left:20%;
padding: 40px;
display: block;
border: 10px solid #eac748;
  background-color: #eceda0;

`;

const FormCell = styled.div`
padding:5px;
display: flex;
  justify-content: flex-start;
  `;

const StylLabel= styled.label`
    margin-left: 15%;
    display: grid;
grid-template-columns: 30% 70%;
grid-gap:20px;
& input {
    width: 300px;
    margin-left:10px;
}
`;

const Login = () => {
    const [login] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const credentials = { email, password };
        await login(credentials)
            .unwrap()
            .then(({ token, user: { email, name } }) => {
                localStorage.setItem("token", JSON.stringify(token));
                if (token) {
                    dispatch(addUser({ email, name }));
                }
            })
            .catch(() => {
                alert('The given data is incorrect. Check your email and password.');
            });

        const token = await getFromLocalStorage("token")
        if (token === undefined) {
            return;
        }

        await dispatch(addToken(token));
        await navigate('/contacts');
        form.reset();
    };

    return (
        <Wrapper>
            
                <h2>Login</h2>
                <form onSubmit={submitHandler}>
                    <FormCell>
                    <StylLabel>
                            E-mail
                            <input type="email" name="email" autoComplete="email" required />
                    </StylLabel>
                    </FormCell>
                    <FormCell>
                    <StylLabel>
                            Password
                            <input
                                type="password"
                                name="password"
                                autoComplete="current-password"
                                required
                            />
                    </StylLabel>
                    </FormCell>
                    <button type="submit">Log in</button>
                </form>
            
        </Wrapper>
    );
};

export default Login;