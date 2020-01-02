import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const EspecialidadPage = styled.div`
  ul > li {
    list-style: none;
    margin: 1em auto;
  }
  .icons {
    color: #ff7964;
    margin-right: 0.3em;
  }
`;

const SmallTitle = styled.h5`
  font-size: 1.1em;
  font-weight: bold;
`;

const Especialidad = () => (
  <EspecialidadPage>
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}></Col>
        <ul>
          <li>
            <SmallTitle>Medicina interna</SmallTitle>
          </li>
          <li>
            <SmallTitle>Medicina de rehabilitación</SmallTitle>
          </li>
          <li>
            <SmallTitle>Traumatología</SmallTitle>
          </li>
          <li>
            <SmallTitle>Infectología</SmallTitle>
          </li>
          <li>
            <SmallTitle>Rehabilitación física</SmallTitle>
          </li>
          <li>
            <SmallTitle>Laboratorio de análisis clínico</SmallTitle>
          </li>
          <li>
            <SmallTitle>Rayos X</SmallTitle>
          </li>
          <li>
            <SmallTitle>Podología</SmallTitle>
          </li>
        </ul>
      </Row>
    </Container>
  </EspecialidadPage>
);

export default Especialidad;
