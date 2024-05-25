import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getDegrees from "../functions/getDegrees";
import getWind from "../functions/getWind";
import getMoisture from "../functions/getmoisture";

function Home() {
	const [temp, setTemp] = useState("loading...");
	const [wind, setWind] = useState("loading...");
	const [moisture, setMoisture] = useState("loading...");

	useEffect(() => {
		getDegrees((res) => {
			setTemp(res);
		});
		getWind((res) => {
			setWind(res);
		});
		getMoisture((res) => {
			setMoisture(res);
		});
	}, []);
	return (
		<>
			<h1>conder, ACT weather</h1>
			<h3>temp:</h3>
			<Box>{temp}</Box>
			<h3>wind:</h3>
			<Box>{wind}</Box>
			<h3>moisture:</h3>
			<Box>{moisture}</Box>
		</>
	);
}

export default Home;
