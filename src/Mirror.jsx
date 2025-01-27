import getData from "./functions/getData.js";
import { useEffect, useState } from "react";
import "./mirror.css";
import { direction } from "./functions/map.js";

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
    var date = new Date();

    function reset() {
      getData((te, ra, dir, speed) => {
        setTemp(te);
        setRain(ra);
        setWindDir(dir);
        if (speed == 0) {
          setWindSpeed("Calm");
          setWindDirText("none");
          setWindSpeedLabel("");
        } else if (speed > 0) {
          setWindSpeed(speed);
          setWindSpeedLabel("km/h");
          setWindDir(direction(dir));
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
      date = new Date();
      setSecond(date.getSeconds());
      function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
      }
      setTime(formatAMPM(new Date()));
    }, 99);
  }, [second, windDir, windDirText]);

  return (
    <>
      <div className="mirror">
        <div className="info">
          <div className="time">
			<span className="label">{second}&nbsp;&nbsp;</span>
            <span className="title">{time}</span>
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
