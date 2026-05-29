import React from "react";

const Home = (props) => {
	return (
		<div className="text-center mt-5">
			<h1>{props.seconds}</h1>
		</div>
	);
};

export default Home;