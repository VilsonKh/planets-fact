import { animateStats, animateTitle, flyIn, flyOut } from "./animation.js";
import { planets } from "./data.js";

export const currentPlanet = {
	planetName: "earth",
	get name() {
		return this.planetName;
	},
	set name(inputName) {
		this.planetName = inputName;
	},
};

// Function return certain element from data array, based on currentPlanet getter
export function getCurrentPlanetContent() {
	for (let i = 0; i < $(planets).length; i++) {
		if ($(planets)[i].name === currentPlanet.name) {
			return $(planets)[i];
		}
	}
}

/** Function switch between measure units like hours, days of years
 * @param {string} planetName - active planet name
 * @param {string} statsName -  stat name like rotation, revolution, radius
 * @returns {string} measure unit
 */
export function chooseRevolutionMeasure(planetName, statsName) {
	let measure = null;

	if (statsName === "revolution") {
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

// Changes data on the page to active planet data
export function changePlanetData() {
	const { overview, rotation, name, revolution, radius, temperature, images } = getCurrentPlanetContent();
	//	Animate and change heading
	animateTitle();
	// Change main paragraph
	$(".planet__paragraph").text(overview.content);
	// Change rotation time
	$(".rotation__value").text(rotation);
	$(".rotation__value + p").text(chooseRevolutionMeasure(name, "rotation"));
	// Change revolution time
	$(".revolution__value").text(revolution);
	$(".revolution__value + p").text(chooseRevolutionMeasure(name, "revolution"));
	// Change radius
	$(".radius__value").text(radius);
	// Change average temp.
	$(".average__value").text(temperature);

	animateStats();

	// Animates previous planet
	flyOut();

	// Animates new planet after previous planet has flown away
	setTimeout(() => {
		$(".planet-img").removeClass().attr("src", images.planet).addClass(`planet-img animate__animated ${name}`);
		flyIn();
	}, 500);

	// Changes Wiki link
	$(".planet__wikiLink-link").attr("href", overview.source);

	// Disables geo image
	$(".planet-img-geo").css("display", "none");
}

/** Function changes data on the page after planet menu has been clicked
 * @param {string} textKey - article key like structure or overview
 * @returns {void} nothing
 */
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
