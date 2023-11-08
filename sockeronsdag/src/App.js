import polkagris from './polkagris.png';
import sugarprovider from './Hemkop_logo.png';
import './App.css';

function App() {

	var date1 = new Date();
	date1.setDate(date1.getDate() + (3 + 7 - date1.getDay()) % 7);

	var date2 = new Date();
	date2.setDate(date1.getDate() + 7);

	var date3 = new Date();
	date3.setDate(date2.getDate() + 7);

	var isToday = new Date(date1).setHours(0,0,0,0) === (new Date()).setHours(0,0,0,0);

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
			<header className="App-header">
				<h1 className="App-headingH1">{isToday ? "Idag är det " : ""}Sockeronsdag</h1>
				<h4 className="App-subHeading">Upcoming events:</h4>
				<div className="App-event">
					<ul className="App-eventList">
						<li className="App-eventListItem is-animated">
							<span>{date1.toLocaleDateString("sv-SE")}</span><img src={sugarprovider} className="App-eventImage" />
						</li>
						<li className="App-eventListItem">
							<span>{date2.toLocaleDateString("sv-SE")}</span><img src={sugarprovider} className="App-eventImage" />
						</li>
						<li className="App-eventListItem">
							<span>{date3.toLocaleDateString("sv-SE")}</span><img src={sugarprovider} className="App-eventImage" />
						</li>
					</ul>
				</div>
				<img src={polkagris} className="App-logo" alt="logo" />
			</header>
		</div>
	);

}

export default App;
