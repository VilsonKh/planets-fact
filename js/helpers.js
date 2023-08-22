import { animateStats, animateTitle, flyIn, flyOut } from "./animation.js";
import { planets } from "./data.js";

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

function chooseRevolutionMeasure(planetName, stats__item) {
	let measure = null;

	if (stats__item === "revolution") {
		if (planetName === "mars" || planetName === "jupiter") {
			measure = "years";
		} else {
			measure = "days";
		}
	} else {
		if (planetName === "mercury" || planetName === "venus" || planetName === "earth" || planetName === "mars") {
			measure = "days";
		} else {
			measure = "hours";
		}
	}
	return measure;
}

export function changePlanetData() {
	// Изменяет заголовок
	animateTitle();
	const { overview, rotation, name, revolution, radius, temperature, images } = getCurrentPlanetContent();
	// Измененяет параграф
	$(".planet__paragraph").text(overview.content);
	// Изменяет rotation time
	$(".rotation__value").text(rotation);
	$(".rotation__value + p").text(chooseRevolutionMeasure(name, "rotation"));
	// Изменяет revolution time
	$(".revolution__value").text(revolution);
	$(".revolution__value + p").text(chooseRevolutionMeasure(name, "revolution"));
	// Изменяет radius
	$(".radius__value").text(radius);
	// Изменяет average temp.
	$(".average__value").text(temperature);

	// Анимирует статистику
	animateStats();

	flyOut();

	setTimeout(() => {
		$(".planet-img").removeClass().attr("src", images.planet).addClass(`planet-img animate__animated ${name}`);
		flyIn();
	}, 500);

	// Изменяет ссылку на Wiki
	$(".planet__wikiLink-link").attr("href", overview.source);

	$(".planet-img-geo").css("display", "none");
}

export function changePlanetDescription(textKey) {
	const currentData = getCurrentPlanetContent();
	$(".planet__paragraph").text(currentData[textKey]["content"]);
	$(".planet__wikiLink-link").attr("href", currentData[textKey]["content"]);
	if (textKey === "structure") {
		$(".planet-img").attr("src", currentData.images.structure);
	} else {
		$(".planet-img").attr("src", currentData.images.planet);
	}

	if (textKey === "overview" || textKey === "structure") {
		$(".planet-img-geo").hide();
	} else {
		$(".planet-img-geo").show().attr("src", currentData["images"][textKey]);
	}
}
