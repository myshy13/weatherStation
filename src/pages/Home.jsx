import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getData from "../functions/getData.js";
import { Mirror } from "./Mirror.jsx";
import Header from "../components/Header.jsx";
import { direction } from "../functions/map.js";

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
				setWindDirText("Not available");
				console.log(`speed: ${speed} km/h`);
			}

			console.log(windDir);
			console.log(windDirText);
		});
	});
	if (new URLSearchParams(document.location.search).get("mode") != "mirror") {
		return (
			<>
				<div className="Home">
					<Header />

					<h1>Conder, ACT weather</h1>
					<h3>Temp:</h3>
					<Box>{temp}&deg;</Box>

					<h3>Rain since midnight:</h3>
					<Box>{rain}mm</Box>
					<h3>Wind speed:</h3>
					<Box>
						{windSpeed}
						{windSpeedLabel}
					</Box>
					<h3>Wind direction:</h3>
					<Box>{windDirText}</Box>
				</div>
			</>
		);
	} else {
		return <Mirror />;
	}
}

export default Home;
