function getData(callback) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    Headers: myHeaders,
  };

  fetch(
    "https://api.weather.com/v2/pws/observations/current?format=json&units=m&apiKey=a5db811ffebc4b409b811ffebc4b40db&stationId=ICANBE1067",
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      callback(
        result["observations"][0]["metric"]["temp"],
        result["observations"][0]["metric"]["precipTotal"],
        result["observations"][0]["winddir"],
        result["observations"][0]["metric"]["windSpeed"],
      );
    })
    .catch((error) => console.error(error));
}

export default getData;
