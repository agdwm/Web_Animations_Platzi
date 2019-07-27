import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

class Invie extends Component {
  render() {
    return (
      <section className='Invie'>
        {/* <Portada menu={data.menu} logoPortada={data.logoPortada} logoPortada2x={data.logoPortada2x} /> */}
        <Portada />
        {/* <Guitarras guitarras={data.guitarras} /> */}
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default Invie;
