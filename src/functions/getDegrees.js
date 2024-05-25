function getDegrees(callback) {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };
    fetch("http://localhost:3000/get/degrees", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            console.log(result);
            callback(result);
        })
        .catch((error) => console.error(error));
}

export default getDegrees;