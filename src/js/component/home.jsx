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
      <Jumbotron />
	  	<div className="d-flex cardstyle" >
		  {/* style={{width: 18rem;margin-left: 60px;margin-right: 5px;}} */}
			<Card />
			<Card />
			<Card />
			<Card />  
		</div>
		<Footer/>
    </>
  );
};

export default Home;
