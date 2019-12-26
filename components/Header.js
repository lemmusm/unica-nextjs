import styled from 'styled-components';
import { Container, Navbar } from 'react-bootstrap';
import logoImage from '../static/img/logo.png';
import Menu from './Menu';

const Styles = styled.div`
  .navbar {
    background-color: white;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  }
  .navbar-brand {
    display: inline-block;
    float: left;
    text-align: center;
    margin: 0.3em 0;
    width: 250px !important;
  }
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: #34495e !important;
    font-size: 0.93em;
    font-weight: bold;
    &:hover {
      color: #ff7964 !important;
    }
  }
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .dropdown {
    position: relative;
  }
  .dropdown-item {
    font-size: 0.85em;
    font-weight: bold;
    &:hover {
      color: #ff7964 !important;
    }
  }
  .dropdown > .dropdown-menu {
    margin-top: -10px;
    -webkit-border-radius: 0px 0px 6px 6px;
    -moz-border-radius: 0px 0px 6px;
    border-radius: 0px 0px 6px 6px;
  }
  .dropdown:hover > .dropdown-menu {
    display: block;
  }
`;

const Header = () => (
  <Styles>
    <Navbar sticky='top' expand='lg'>
      <Container>
        <Navbar.Brand>
          <img src={logoImage} alt='logo_unica' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Menu />
      </Container>
    </Navbar>
  </Styles>
);

export default Header;
