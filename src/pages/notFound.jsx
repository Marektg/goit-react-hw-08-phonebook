import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HomeLink = styled(NavLink)`
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


const NotFound = () => {
    return (
        <>
            <p>404</p>
            <p>Sorry, we couldn't find that page :(</p>
            <p>If you want, you can go back to the <HomeLink to="/">main page</HomeLink>.
            </p>
        </>
    );
};

export default NotFound;