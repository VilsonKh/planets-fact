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

export function getPlanetContent() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].overview.content;
		}
	}
}

export function getPlanetColor() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].underlineColor;
		}
	}
}

export function getPlanetRotationTime() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].rotation;
		}

		if (currentPlanet.name === "jupiter" || currentPlanet.name === "saturn" || currentPlanet.name === "uranus" || currentPlanet.name === "neptune") {
			$(".rotation__value").next().text("Hours");
		} else if (currentPlanet === "earth") {
			$(".rotation__value").next().text("Day");
		} else {
			$(".rotation__value").next().text("Days");
		}
	}
}

export function getPlanetRevolution() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].revolution;
		}

		if (currentPlanet.name === "mercury" || currentPlanet.name === "venus" || currentPlanet.name === "earth") {
			$(".revolution__value").next().text("Days");
		} else {
			$(".revolution__value").next().text("Years");
		}
	}
}

export function getPlanetRadius() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].radius;
		}
	}
}

export function getPlanetTemp() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet) {
			return $(planets)[i].temperature;
		}
	}
}

export function getPlanetImg() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].images.planet;
		}
	}
}

export function getPlanetUrl() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i].overview.source;
		}
	}
}

export function getOverviewParagraph() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].overview.content;
		}
	}
}

export function getOverviewUrl() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].overview.source;
		}
	}
}

export function getOverviewImg() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].images.planet;
		}
	}
}

export function getStructureParagraph() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].structure.content;
		}
	}
}

export function getStructureUrl() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].structure.source;
		}
	}
}

export function getStructureImg() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].images.structure;
		}
	}
}

export function getGeologyParagraph() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].geology.content;
		}
	}
}

export function getGeologyUrl() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].geology.source;
		}
	}
}

export function getGeologyImg() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === $(".planet__title").text()) {
			return $(planets)[i].images.geology;
		}
	}
}
