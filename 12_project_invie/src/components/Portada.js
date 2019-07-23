import React, { Component } from 'react';
import logo from '../images/invie.png';
import logo2x from '../images/invie2x.png';

class Portada extends Component {
  render() {
    return (
      <section id='portada' className='portada background'>
        <header id='header' className='header contenedor'>
          <figure className='logotipo'>
            <img
              src={logo}
              srcSet={`${logo} 1x, ${logo2x} 2x`}
              width='186'
              height='60'
              alt='Invie logotipo'
            />
          </figure>
          <span className='burguer-button icon-menu' id='burguer-button' />
          <nav className='menu' id='menu'>
            <ul>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='#guitarras'>Guitarras</a>
              </li>
              <li>
                <a href='precios.html'>Precios</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className='contenedor'>
          <h1 className='titulo'>
            Guitarras <span>invie</span>sibles
          </h1>
          <h3 className='title-a'>
            Sé la estrella de rock que siempre quisiste ser
          </h3>
          <a className='button' href='#guitarras'>
            Conoce mas
          </a>
        </div>
      </section>
    );
  }
}

export default Portada;
