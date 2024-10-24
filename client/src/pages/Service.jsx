import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>

      {/* Update the grid class to a single column layout */}
      <div className="container grid-one-col">
        {services && services.length > 0 ? (
          services.map((curElm, index) => {
            const { price, description, provider, service, image } = curElm;
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img
                    src={image || "/image/web-dev.jpg"} // Dynamic image, fallback if not provided
                    alt={service || "Service Image"}
                    width="200"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No services available</p>
        )}
      </div>
    </section>
  );
};

export default Service;






