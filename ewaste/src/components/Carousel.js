import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3500"
      style={{ maxWidth: "800px", margin: "auto" }} // Fixed carousel width
    >
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
      </ol>
      
      {/* Ensuring consistent height */}
      <div className="carousel-inner" style={{ height: "500px", overflow: "hidden" }}>
        <div className="carousel-item active">
          <img 
            className="d-block w-100" 
            src="https://images.unsplash.com/photo-1524289286702-f07229da36f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMGFuZCUyMGxhcHRvcCUyMHdhdGNofGVufDB8fDB8fHww" 
            alt="First slide"
            style={{ height: "500px", objectFit: "cover" }}
          />
        </div>
        <div className="carousel-item">
          <img 
            className="d-block w-100" 
            src="https://media.istockphoto.com/id/1307392473/photo/bussnissman-and-traveller-accessories.webp?a=1&s=612x612&w=0&k=20&c=2DkXOMgM5cAxl8GUM_xqVxFLAZb8y9RAytydqFsmBXU=" 
            alt="Second slide"
            style={{ height: "500px", objectFit: "cover" }} 
          />
        </div>
        <div className="carousel-item">
          <img 
            className="d-block w-100" 
            src="https://media.istockphoto.com/id/1202574020/photo/electronic-gadgets-on-a-black-concrete-background-concept-of-accessories-for-successful.jpg?s=612x612&w=0&k=20&c=p5buW1wAO_LxFuzkGz7FYesbMHYnK3GVq6MykOZuWRQ=" 
            alt="Third slide"
            style={{ height: "500px", objectFit: "cover" }} 
          />
        </div>
      </div>

      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
