import React from "react";

const Home = () => {
  return (
    <>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>This is the best Website</p>
            <h1>Welcome To My Site</h1>
            <p>
            Creating a tech website involves merging cutting-edge design with robust functionality to deliver a seamless 
            user experience. Whether it’s providing tutorials on coding and software development,a well-crafted  tech website 
            should be fast, responsive, and easy to navigate. Integrating featureslike dynamic content updates, and mobile 
            optimization ensures that visitors stay engaged and find the information they need efficiently.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
              <button className="btn">Connect Now</button>
              </a>
              <a href="/service">
              <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/image/home1.png" alt="coding" width="400" height="500"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
