import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HomeLink = styled(NavLink)`
   
    color: #000;
    font-size: 0.8em;
   
    text-decoration: underline;
      &:hover {
        color: blue;
        box-shadow: 0px 10px 8px 0px rgba(80, 80, 80, 0.75);
        background-color: burlywood;
  }`;


const Wrapper = styled.section`
width: 60%;
margin-left:20%;
margin-top: 150px;
padding: 40px;
display: block;
border: 10px solid #eac748;
  background-color: #eceda0;

`;


const NotFound = () => {
    return (
        <Wrapper>
            <p>404</p>
            <p>Sorry, we couldn't find that page :(</p>
            <p>If you want, you can go back to the <HomeLink to="/">main page</HomeLink>.
            </p>
        </Wrapper>
    );
};

export default NotFound;