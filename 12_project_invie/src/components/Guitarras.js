import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const mapStateToProps = state => {
  return {
    guitarras: state.guitarras
  };
};

class Guitarras extends Component {
  render() {
    const { guitarras } = this.props;
    return (
      <section id='guitarras' className='guitarras contenedor'>
        <h2>Nuestra guitarras</h2>
        <div className='video-demo-contenedor'>
          <div className='video-demo'>
            <div className='video-responsive-contenedor'>
              <iframe
                title='video Air Guitar with Bradley Cooper'
                className='video-responsive-src'
                width='560'
                height='315'
                src='https://www.youtube.com/embed/R1dW8M4EqYY'
                frameBorder='0'
                allowFullScreen
              />
            </div>
          </div>
        </div>
        {guitarras.map((guitarra, i) => {
          return (
            <article className='guitarra' key={i}>
              <div className='guitarra-image-wrapper'>
                <CSSTransitionGroup
                  // Para que funcione CSSTransitionGroup debe haber un key
                  // React elimina del DOM los elementos que se están animando, transcurridos .5s
                  transitionName='flicker'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={500}
                >
                  <img
                    className='guitarra-image'
                    src={guitarra.image}
                    key={guitarra.image}
                    alt={guitarra.alt}
                    width='350'
                  />
                </CSSTransitionGroup>
              </div>
              <CSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={300}
                transitionLeave={false}
              >
                <div className='contenedor-guitarra' key={guitarra.name}>
                  <h3 className='guitarra-name'>{guitarra.name}</h3>
                  <ol>
                    {guitarra.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ol>
                </div>
              </CSSTransitionGroup>
            </article>
          );
        })}
      </section>
    );
  }
}

export default connect(mapStateToProps)(Guitarras);
