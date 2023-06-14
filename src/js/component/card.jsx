import React from "react";

const Card = () => {
    return (<div className="container-fluid card mb-5 m-3 ps-0 pe-0" style={{ width: "18rem" }}>
                <div className="">
                <img src="http://placehold.it/260x230" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse autem aliquid, nesciunt architecto.</p>
                    <a href="#" className="btn btn-primary">Find Our More!</a>
                </div>
                </div>
            </div>)
}

export default Card