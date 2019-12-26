import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/main.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = props => (
  <div>
    <Head>
      <title> UNI-CA Clínica Ambulatoria</title>
      <meta
        name='description'
        content='Es una unidad médica de vanguardia en la cual nos especializamos en
        atender problemas y complicaciones de píe diebético, heridas crónicas y
        cirugías laparoscópica y de corta estancia, siguiendo los estándares de
        calidad vigentes, ofreciendo servicios profesionales con ética,
        responsabilidad y de primer nivel.'
      />
      <meta
        name='keywords'
        content='clinica ambulatoria, unica, uni-ca, penjamo, guanajuato, especialidad, pie diabetico, cirugia ambulatoria'
      ></meta>
      <meta name='author' content='@lemmusm'></meta>
    </Head>

    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
