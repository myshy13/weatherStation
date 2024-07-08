import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import getData from "../functions/getData.js";

function Home() {
  const [temp, setTemp] = useState("loading...");
  const [windSpeed, setWindSpeed] = useState("loading...");
  const [windDir, setWindDir] = useState("loading...");
  const [rain, setRain] = useState("loading...");

  useEffect(() => {
    getData((te, ra, dir, speed) => {
      setTemp(te);
      setRain(ra);
      setWindDir(dir);
      setWindSpeed(speed);
    });
  });

  return (
    <>
      <h1>conder, ACT weather</h1>
      <h3>temp:</h3>
      <Box>{temp}&deg;</Box>
      <h3>wind speed:</h3>
      <Box>{windSpeed}</Box>
      <h3>rain:</h3>
      <Box>{rain}mm</Box>
      <h3>wind dir:</h3>
      <Box>{windDir}</Box>
    </>
  );
}

export default Home;
