import { planets } from "./const.js";

export const currentPlanet = {
	planetName: "earth",
	get name() {
		return this.planetName;
	},
	set name(inputName) {
		this.planetName = inputName;
		console.log("Current planet is " + this.planetName);
	},
};
export function getCurrentPlanetContent() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i];
		}
	}
}
//TODO don't forget to check different rotation mesurements
// export function getPlanetRotationTime() {
// 	for (let i = 0; i < $(planets).length; i++) {
// 		if ($(planets)[i].name === currentPlanet.name) {
// 			return $(planets)[i].rotation;
// 		}

// 		if (currentPlanet.name === "jupiter" || currentPlanet.name === "saturn" || currentPlanet.name === "uranus" || currentPlanet.name === "neptune") {
// 			$(".rotation__value").next().text("Hours");
// 		} else if (currentPlanet === "earth") {
// 			$(".rotation__value").next().text("Day");
// 		} else {
// 			$(".rotation__value").next().text("Days");
// 		}
// 	}
// }

// export function getPlanetRevolution() {
// 	for (let i = 0; i < $(planets).length; i++) {
// 		if ($(planets)[i].name === currentPlanet.name) {
// 			return $(planets)[i].revolution;
// 		}

// 		if (currentPlanet.name === "mercury" || currentPlanet.name === "venus" || currentPlanet.name === "earth") {
// 			$(".revolution__value").next().text("Days");
// 		} else {
// 			$(".revolution__value").next().text("Years");
// 		}
// 	}
// }
