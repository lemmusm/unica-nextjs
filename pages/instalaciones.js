import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Layout from './Layout';
import Banner from '../components/Banner';

const InstalacionesPage = styled.div`
  .gallery {
    justify-content: space-between | space-around !important;
    cursor: default !important;
  }
  @media (max-width: 768px) {
    .gallery > div {
      width: 48% !important;
    }
    .container {
      maring: 0 auto;
      max-width: 95%;
    }
  }
`;

const Title = styled.h1`
  color: #e52d27;
  font-size: 3em;
  font-weight: bold;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Instalaciones = () => (
  <Layout>
    <InstalacionesPage>
      <Banner></Banner>
      <Container className='mt-5 mb-5'>
        <Title className='mb-5'>Nuestras instalaciones</Title>
        {/* <Gallery
          className='gallery'
          images={randomPhotos}
          enableMasonry
          gutterInPercent={gutterInPercent}
          columnsMaxCount={columnsMaxCount}
        /> */}
      </Container>
    </InstalacionesPage>
  </Layout>
);

export default Instalaciones;
