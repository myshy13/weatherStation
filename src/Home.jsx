 
import { useEffect, useState } from "react";
import getData from "./functions/getData.js";
import { Mirror } from "./Mirror.jsx";
import { direction } from "./functions/map.js";

function Home() {
	const [temp, setTemp] = useState("loading...");
	const [windSpeed, setWindSpeed] = useState("loading...");
	const [windDir, setWindDir] = useState("loading...");
	const [windDirText, setWindDirText] = useState("loading...");
	const [rain, setRain] = useState("loading...");
	const [windSpeedLabel, setWindSpeedLabel] = useState("km/h");

	useEffect(() => {
		getData((te, ra, dir, speed) => {
			setTemp(te);
			setRain(ra);
			setWindDir(dir);
			if (!speed <= 1) {
				setWindSpeed(speed);
				setWindDirText(direction(windDir));
			} else if (speed <= 1) {
				setWindSpeed(speed);
			}

			if (speed <= 1) {
				setWindSpeedLabel("");
				setWindDirText("None");
				console.log(`speed: ${speed} km/h`);
			}

			console.log(windDir);
			console.log(windDirText);
		});
	});


	return new URLSearchParams(document.location.search).get("mode") != "mirror" ? (
		<>
			<div className="Home">

				<h1>Conder, ACT weather</h1>
				<h3>Temp:</h3>
				<div className="css-0">{temp}&deg;C</div>

				<h3>Rain since midnight:</h3>
				<div className="css-0">{rain}mm</div>
				<h3>Wind speed:</h3>
				<div className="css-0">
					{windSpeed}
					{windSpeedLabel}
				</div>
				<h3>Wind direction:</h3>
				<div className="css-0">{windDirText}</div>
			</div>
		</>
	) : <Mirror />;
}

export default Home;
