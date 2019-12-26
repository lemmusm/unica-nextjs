import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Menu = () => (
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
      <NavDropdown title='CONSULTA DE ESPECIALIDADES' id='basic-nav-dropdown'>
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
);

export default Menu;
