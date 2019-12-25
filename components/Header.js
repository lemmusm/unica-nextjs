import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logoImage from '../static/img/logo.png';

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
        <Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
          <Nav>
            <Link href='/'>
              <a className='nav-link'>INICIO</a>
            </Link>
            <Link href='/instalaciones'>
              <a className='nav-link'>INSTALACIONES</a>
            </Link>
            <Link href='/pacientes'>
              <a className='nav-link'>INFORMACIÓN A PACIENTES</a>
            </Link>
            <NavDropdown
              title='CONSULTA DE ESPECIALIDADES'
              id='basic-nav-dropdown'
            >
              <Link href='/clinica'>
                <a className='dropdown-item'>CLÍNICA</a>
              </Link>
              <Link href='/comodin'>
                <a className='dropdown-item'>
                  FARMACOS Y ARTÍCULOS MÉDICOS DE HERIDAS
                </a>
              </Link>
            </NavDropdown>
            <Link href='/contacto'>
              <a className='nav-link'>CONTACTO</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Styles>
);

export default Header;
