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
	const [time, setTime] = useState();
	const [second, setSecond] = useState();

	useEffect(() => {
		var Date_ = new Date();

		function reset() {
			setTime(`${Date_.getHours()}:${Date_.getMinutes()}`);
			getData((te, ra, dir, speed) => {
				setTemp(te);
				setRain(ra);
				setWindDir(dir);
				if (!speed <= 0) {
					setWindSpeed(speed);
					setWindDirText(direction(windDir));
				} else if (speed <= 1) {
					setWindSpeed(speed);
				}

				if (speed <= 1) {
					setWindSpeed("Calm");
					setWindSpeedLabel("");
					setWindDirText("Not available");
					console.log(`speed: ${speed} km/h`);
				}

				console.log(windDir);
				console.log(windDirText);
			});
		}
		reset();
		setInterval(() => {
			reset();
		}, 60000);
		setInterval(() => {
			Date_ = new Date();
			setSecond(Date_.getSeconds());
		}, 1000);
	}, [windDir, windDirText]);

	return (
		<>
			<div className="mirror">
				<div className="info">
					<div className="time">
						<span className="title">{time}</span>
						<span className="label">{second}</span>
					</div>
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
