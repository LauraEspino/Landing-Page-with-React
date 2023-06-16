import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <>
      <Navbar />
	  < div className="divPagina">
      <Jumbotron />
			<div className="row mycard inline-flex">
		  {/* style={{width: 18rem;margin-left: 60px;margin-right: 5px;}} */}
			<div className="col-lg-3 col-sm-1"><Card /></div>
			<div className="col-lg-3 col-sm-1"><Card /></div>
			<div className="col-lg-3 col-sm-1"><Card /></div>
			<div className="col-lg-3 col-sm-1"><Card /></div>
			
			</div>
		</div>
		<Footer/>
    </>
  );
};

export default Home;
