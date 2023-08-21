import { animateStats, animateTitle, flyIn, flyOut } from "./animation.js";
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

export function changePlanetData() {
	// Изменяет заголовок
	animateTitle();

	const currentData = getCurrentPlanetContent();
	console.log(currentData);
	// Измененяет параграф
	$(".planet__paragraph").text(currentData.overview.content);
	// Изменяет rotation time
	$(".rotation__value").text(currentData.rotation);
	// Изменяет revolution time
	$(".revolution__value").text(currentData.revolution);
	// Изменяет radius
	$(".radius__value").text(currentData.radius);
	// Изменяет average temp.
	$(".average__value").text(currentData.temperature);

	// Анимирует статистику
	animateStats();
	flyOut();

	setTimeout(() => {
		$(".planet-img").attr("src", currentData.images.planet);
		flyIn();
	}, 500);

	// Изменяет ссылку на Wiki
	$(".citation__link").attr("href", currentData.overview.source);

	$(".planet-img-geo").css("display", "none");
}

export function changePlanetDescription(textKey) {
	const currentData = getCurrentPlanetContent();
	$(".planet__paragraph").text(currentData[textKey]["content"]);
	$(".citation__link").attr("href", currentData[textKey]["content"]);
	if (textKey === "structure") {
		$(".planet-img").attr("src", currentData.images.structure);
	} else {
		$(".planet-img").attr("src", currentData.images.planet);
	}

	if (textKey === "overview" || textKey === "structure") {
		$(".planet-img-geo").css("display", "none");
	} else {
		$(".planet-img-geo").css("display", "block").attr("src", currentData["images"][textKey]);
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
