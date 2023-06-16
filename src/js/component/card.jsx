import React from "react";

const Card = () => {
  return (
    <div className="rounded inline-flex  mb-5 ps-0 pe-0 individualCard border border-light w-100">
      <div>
        <img
          src="http://placehold.it/260x230"
          className="card-img-top rounded-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h5 className="card-title">Card title</h5>
          <p className="card-text ps-2 pe-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse autem
            aliquid, nesciunt architecto.
          </p>
          <a href="#" className="btn btn-primary mb-3">
            Find Our More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
