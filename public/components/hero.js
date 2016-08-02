import React from 'react';

const Hero = () =>
  <header className="main-header">
    <nav className="main-navigation">
      <div className="container">
        <a href="" className="openid-logo">
          <h1 className="logo-text">OpenID</h1>
        </a>
        <ul className="navigation">
          <li className="navigation-item">
            <a href="">Debugger</a>
          </li>
          <li className="navigation-item">
            <a href="">Introduction</a>
          </li>
          <li className="navigation-item">
            <a href="">Ask</a>
          </li>
          <li className="navigation-item is-disabled">
            <a href="">Get a T-shirt!</a>
          </li>
        </ul>
        <div className="social-icons">
          <span className="crafted">Crafted by</span>
          <a href="https://auth0/com" className="auth0-icon"></a>
        </div>
      </div>
    </nav>
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">OpenID Connect Playground</h1>
        <h2 className="hero-subtitle">
          The OIDC playground is for developers to test and work with OpenID
          Connect calls step-by-step, giving them more insight into how OpenID Connect works.
        </h2>
      </div>
    </section>
  </header>;

export default Hero;