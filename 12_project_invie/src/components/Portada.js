import React, { Component } from 'react';

class Portada extends Component {
  render() {
    const { menu, logoPortada, logoPortada2x } = this.props;
    return (
      <section id='portada' className='portada background'>
        <header id='header' className='header contenedor'>
          <figure className='logotipo'>
            <img
              src={logoPortada}
              srcSet={`${logoPortada} 1x, ${logoPortada2x} 2x`}
              width='186'
              height='60'
              alt='Invie logotipo'
            />
          </figure>
          <span className='burguer-button icon-menu' id='burguer-button' />
          <nav className='menu' id='menu'>
            <ul>
              {menu.map((item, i) => {
                return (
                  <li href={item.href} key={i}>
                    {item.title}
                  </li>
                );
              })}
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
