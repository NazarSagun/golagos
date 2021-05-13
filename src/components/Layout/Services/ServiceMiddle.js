import React from 'react';
import '../MainPage/MainCategories/index.css';
import './index.css';

const ServiceMiddle = () => {
  return (
    <div>
      <section className="service-container">
        <h1>Design Agency</h1>
        <h3 className="cat-descr">The beaches of Sagres are simple stunning. There are four beaches within walking distance of the town: Praia da Mareta, Praia do Tonel. Praia da Mareta is the most popular one, offering.</h3>
        <h4>What we do...</h4>
      </section>

      <section className='service-cards'>
        
        <article className="main-page-article">
          <img src={`images/static/service1.png`} />
          <h2>Brand Identity</h2>
          <div>Brand identity is the collection of all elements that a company creates to portray the right image to its consumer.</div>
        </article>
        <article className="main-page-article">
          <img src={`images/static/service2.png`} />
          <h2>Strategy</h2>
          <div>Every marketing strategy needs a specific set of rules. The marketing strategy allows us to develop workflows dedicated exclusively to find better and more effective ways to reach to our segments.</div>
        </article>
        <article className="main-page-article">
          <img src={`images/static/service3.png`} />
          <h2>Graphic Design</h2>
          <div>Graphic design comes into play after a well thought conceptual process, the graphic systems are often the product of a strategy and are used to communicate a specific message to the selected segment/target.</div>
        </article>
        <article className="main-page-article">
          <img src={`images/static/service4.png`} />
          <h2>Printing</h2>
          <div>Printing is a process for reproducing text and images, typically with ink on paper using a printing press. </div>
        </article>
        <article className="main-page-article">
          <img src={`images/static/service5.png`} />
          <h2>Manufacturing</h2>
          <div>Manufacturing is the production of goods through the use of labor, machines, tools, and chemical or biological processing or formulation.</div>
        </article>
        <article className="main-page-article">
          <img src={`images/static/service6.png`} />
          <h2>Neon Lights</h2>
          <div>Neon lights are a type of cold cathode gas-discharge light. A neon tube is a sealed glass tube with a metal electrode at each end, filled with one of a number of gases at low pressure.</div>
        </article>
      </section>
      
      <h4 className="service-work">Work with us</h4>
     
    </div>
  )
}

export default ServiceMiddle;