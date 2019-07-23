import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';
import logoPortada from './images/invie.png';
import logoPortada2x from './images/invie2x.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';

const data = {
  menu: [
    { href: 'index.html', title: 'Home' },
    { href: '#guitarras', title: 'Guitarras' },
    { href: 'precios.html', title: 'Precios' }
  ],
  logoPortada: logoPortada,
  logoPortada2x: logoPortada2x,
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio'
      ]
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: ['Estilo vintage', 'Liviana', 'Inicia tu camino como Rockstar']
    }
  ]
};

class Invie extends Component {
  render() {
    return (
      <section className='Invie'>
        <Portada
          menu={data.menu}
          logoPortada={data.logoPortada}
          logoPortada2x={data.logoPortada2x}
        />
        <Guitarras guitarras={data.guitarras} />
        <Footer />
      </section>
    );
  }
}

export default Invie;
