import polkagris from './polkagris.png';
import sugarprovider from './Hemkop_logo.png';
import './App.css';
import Snowfall from "react-snowfall";

function App() {

	let options = {
		width: "300px",
		border: true,
		borderColor: "#2e2e2e",
		baseColor: "#17a2b8",
		centerColor: "#459cff",
		centerBorderColor: "#ffffff",
		handColors: {
			second: "#d81c7a",
			minute: "#ffffff",
			hour: "#ffffff"
		}
	};
	

	return (
		<div className="App">
			<Snowfall />
			<header className="App-header">
				<h1 className="App-headingH1">Sockeronsdag</h1>
				<h4 className="App-subHeading">Upcoming event:</h4>
				<div className="App-event">
					<ul className="App-eventList">
						<li className="App-eventListItem is-animated">
							<span>2022-12-21</span><img src={sugarprovider} className="App-eventImage" />
						</li>
						<li className="App-eventListItem">
							<span>2023-01-04</span><img src={sugarprovider} className="App-eventImage" />
						</li>
						<li className="App-eventListItem">
							<span>2023-01-11</span><img src={sugarprovider} className="App-eventImage" />
						</li>
					</ul>
				</div>
				<img src={polkagris} className="App-logo" alt="logo" />
			</header>
		</div>
	);

}

export default App;
