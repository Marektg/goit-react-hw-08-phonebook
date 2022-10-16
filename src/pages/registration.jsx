import React from 'react';
import { useSignupMutation } from 'services/phonebookApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from 'redux/userSlice';
import { addToken } from 'redux/tokenSlice';
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

const StylLabel = styled.label`
    margin-left: 15%;
    display: grid;
grid-template-columns: 30% 70%;
grid-gap: 20px;
& input {
    width: 300px;
    margin-left:10px;
}
`;

const Registration = () => {
    const [signup] = useSignupMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async e => {
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = `${firstName} ${lastName}`;
        const email = form.email.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;

        if (password !== passwordConfirm) {
            return alert('Password and password confirmation do not match!');
        }

        const credentials = { name, email, password };
        await signup(credentials)
            .unwrap()
            .then(({ token, user: { email, name } }) => {
                localStorage.setItem("token", JSON.stringify(token));
                if (token) {
                    dispatch(addUser({ email, name }));
                }
            })
            .catch(() => {
                alert('User with this email address already exists!');
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
          
                <h2>Registration</h2>
                <form onSubmit={submitHandler}>
                <FormCell>
                    <StylLabel>
                            First name
                            <input type="text" name="firstName" required />
                    </StylLabel>
                </FormCell>
                <FormCell>
                    <StylLabel>
                            Last name
                            <input type="text" name="lastName" required />
                    </StylLabel>
                    </FormCell>
                    <FormCell>
                    <StylLabel>
                            E-mail
                            <input
                                type="email"
                                name="email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                autoComplete="email"
                                required
                            />
                    </StylLabel>
                    </FormCell>
                    <FormCell>
                    <StylLabel>
                            Password
                            <input
                                type="password"
                                name="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
                                autoComplete="new-password"
                                required
                            />
                    </StylLabel>
                    </FormCell>
                    <FormCell>
                    <StylLabel>
                            Confirm password
                            <input
                                type="password"
                                name="passwordConfirm"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
                                autoComplete="new-password-confirm"
                                required
                            />
                    </StylLabel>
                    </FormCell>
                    <button type="submit" style={{ cursor: "pointer", marginTop: "20px"}}>Sign up</button>
                </form>
          
        </Wrapper>
    );
};

export default Registration;