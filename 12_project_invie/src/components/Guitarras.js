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
                  transitionName='flicker'
                  // React elimina los elementos que se están animando, transcurridos .5s
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
              <div className='contenedor-guitarra'>
                <h3 className='guitarra-name'>{guitarra.name}</h3>
                <ol>
                  {guitarra.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ol>
              </div>
            </article>
          );
        })}
      </section>
    );
  }
}

export default connect(mapStateToProps)(Guitarras);
