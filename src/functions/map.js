function direction(angle) {
	if (typeof angle === "string") angle = parseInt(angle);
	const arrows = {
		north: "North",
		north_east: "North-East",
		east: "East",
		south_east: "South-East",
		south: "South",
		south_west: "South-West",
		west: "West",
		north_west: "North-West",
	};
	const directions = Object.keys(arrows);
	const degree = 360 / directions.length;
	angle = angle + degree / 2;
	for (let i = 0; i < directions.length; i++) {
		if (angle >= i * degree && angle < (i + 1) * degree) return arrows[directions[i]];
	}
	return arrows["north"];
}

export { direction };
