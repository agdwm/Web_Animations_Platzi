import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Heart from './Heart';

const mapStateToProps = state => {
  return {
    logoPortada: state.logoPortada,
    isAnimated: state.isAnimated,
    menu: state.menu
  };
};

class Portada extends Component {
  renderHeart() {
    const hearts = new Array(100).fill({});
    return hearts.map((el, i) => {
      const style = {
        left: Math.floor(Math.random() * (window.innerWidth - 0)) + 0 + 'px',
        animationDelay: Math.floor(Math.random() * (10000 - 0)) + 0 + 'ms'
      };
      return <Heart key={i} style={style} />;
    });
  }
  render() {
    const { menu, logoPortada, isAnimated } = this.props;
    const isAnimatedClass = isAnimated || '';
    return (
      <section id='portada' className={`portada background ${isAnimatedClass}`}>
        <header id='header' className='header contenedor'>
          <figure className='logotipo'>
            <img
              src={logoPortada}
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
          {!isAnimated && (
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
        {isAnimated && this.renderHeart()}
      </section>
    );
  }
}

export default connect(mapStateToProps)(Portada);
