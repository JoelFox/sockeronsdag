import logo from './logo.svg';
import polkagris from './polkagris.png';
import sugarprovider from './Hemkop_logo.png';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1 className="App-headingH1">Sockeronsdag</h1>
				<h4 className="App-subHeading">Upcoming event:</h4>
				<div className="App-event">
					<ul className="App-eventList">
						<li className="App-eventListItem is-animated">
							<span>2021-11-17</span><img src={sugarprovider} className="App-eventImage" />
						</li>
						<li className="App-eventListItem">
							<span>2021-11-24</span><img src={sugarprovider} className="App-eventImage" />
						</li>
					</ul>
				</div>
				<img src={polkagris} className="App-logo" alt="logo" />
			</header>
		</div>
	);
}

export default App;
