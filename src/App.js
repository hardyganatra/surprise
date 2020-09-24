import React from "react";
import minnion from "./Assets/minnion.gif";
import Foruu from "./Assets/Foruu01.jpg";
import messages from "./Messages/index";
import Messagecard from "./Components/MessageCard/index";
function App() {
	return (
		<div className="App">
			<div className="intropage">
				<img
					className="minnionintro"
					src={minnion}
					alt="..loading"
				></img>
			</div>
			<div id="container">
				<div class="box" id="bluebox">
					<h3>Happy Birthday mari FOruuuuuuuuuuuuuuuuuuu</h3>
				</div>
			</div>
			<div className="coverpic">
				<img className="coverpicimg" src={Foruu} alt="loading"></img>
			</div>
			<Messagecard message={messages.intromsg}></Messagecard>
		</div>
	);
}

export default App;
