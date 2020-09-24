import React from "react";
import minnion from "./Assets/minnion.gif";
import Foruu from "./Assets/Foruu01.jpg";
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
			<div className="MessageCard">
				It is a long established fact that a reader will be distracted
				by the readable content of a page when looking at its layout.
				The point of using Lorem Ipsum is that it has a more-or-less
				normal distribution of letters, as opposed to using 'Content
				here, content here', making it look like readable English. Many
				desktop publishing packages and web page editors now use Lorem
				Ipsum as their default model text, and a search for 'lorem
				ipsum' will uncover many web sites still in their infancy.
				Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like) It
				is a long established fact that a reader will be distracted by
				the readable content of a page when looking at its layout. The
				point of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using 'Content here,
				content here', making it look like readable English. Many
				desktop publishing packages and web page editors now use Lorem
				Ipsum as their default model text, and a search for 'lorem
				ipsum' will uncover many web sites still in their infancy.
				Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like)
			</div>
		</div>
	);
}

export default App;
