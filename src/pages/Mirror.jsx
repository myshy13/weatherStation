import getData from "../functions/getData.js";
import { useEffect, useState } from "react";
import "./mirror.css";
import { direction } from "../functions/map.js";

function Mirror() {
	const [temp, setTemp] = useState("loading...");
	const [windSpeed, setWindSpeed] = useState("loading...");
	const [windDir, setWindDir] = useState("loading...");
	const [windDirText, setWindDirText] = useState("loading...");
	const [rain, setRain] = useState("loading...");
	const [windSpeedLabel, setWindSpeedLabel] = useState("km/h");

	useEffect(() => {
		getData((te, ra, dir, speed) => {
			speed = 0;
			setTemp(te);
			setRain(ra);
			setWindDir(dir);
			if (speed != 0) {
				setWindSpeed(speed);
				setWindDirText(direction(windDir));
			} else if (speed == 0) {
				setWindSpeed(speed);
			}

			if (speed == 0) {
				setWindSpeed("Calm");
				setWindSpeedLabel("");
				setWindDirText("Not available");
			}

			console.log(windDir);
			console.log(windDirText);
		});
	});

	return (
		<>
			<div className="mirror">
				<div className="info">
					<div className="temp-rain">
						<p className="temp title">
							{temp}&deg;<span className="label">C</span>
						</p>
						<p className="rain">
							<span className="label">rain: </span>
							{rain}mm
						</p>
					</div>
					<div className="wind-wrapper">
						<p className="wind-speed title">
							{windSpeed} <span className="label">{windSpeedLabel}</span>
						</p>
						<p className="wind-dir">
							<span className="label">Direction: </span>
							{windDirText}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export { Mirror };
