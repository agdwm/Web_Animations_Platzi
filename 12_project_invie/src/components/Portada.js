import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const mapStateToProps = state => {
  return {
    logoPortada: state.logoPortada,
    logoPortada2x: state.logoPortada2x,
    isAnimated: state.isAnimated,
    menu: state.menu
  };
};

class Portada extends Component {
  render() {
    const { menu, logoPortada, logoPortada2x } = this.props;
    const isAnimated = this.props.isAnimated || '';
    return (
      <section id='portada' className={`portada background ${isAnimated}`}>
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
        <CSSTransitionGroup
          transitionName='animationInOut'
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}
        >
          {!this.props.isAnimated && (
            <div className='contenedor' key='portada'>
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
          )}
        </CSSTransitionGroup>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Portada);
