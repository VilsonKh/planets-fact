import { animateTitle, animateStats, animatePlanet, animateBurgerMenuItems, flyIn, flyOut } from "./animation.js";
import "./helpers.js";
import { currentPlanet, getCurrentPlanetContent } from "./helpers.js";
import "./startCaroutine.js";

/////////////////////////////////////////////
// Меню планет overview, structure, surface//
/////////////////////////////////////////////

export function onPlanetMenuClick() {
	$(".planet__menu > button").removeClass().addClass("planet__menu-button");
	$(this).addClass(`planet__menu-active ${currentPlanet.name}Color`);

	animatePlanet();

	const currentData = getCurrentPlanetContent();

	if ($(this).children("p").text().indexOf("overview") >= 0) {
		$(".planet__paragraph").text(currentData.overview.content);
		$(".citation__link").attr("href", currentData.overview.source);
		$(".planet-img").attr("src", currentData.images.planet);
		$(".planet-img-geo").css("display", "none");
	} else if ($(this).children("p").text().indexOf("structure") >= 0) {
		$(".planet__paragraph").text(currentData.structure.content);
		$(".citation__link").attr("href", currentData.structure.source);
		$(".planet-img").attr("src", currentData.images.structure);
		$(".planet-img-geo").css("display", "none");
	} else if ($(this).children("p").text().indexOf("geology") >= 0) {
		$(".planet__paragraph").text(currentData.geology.content);
		$(".citation__link").attr("href", currentData.geology.content);
		$(".planet-img").attr("src", currentData.images.planet);
		$(".planet-img-geo").css("display", "block").attr("src", currentData.images.geology);
	}
}

/////////////////////////////
// Открытие мобильного меню//
/////////////////////////////

export function onBurgerMenuClick() {
	$(".menu-burger").toggle();
	$(".mobile__menu-content").toggle();
	animateBurgerMenuItems();
	$(".main").toggle();
	$(".stats").toggle();
}

////////////////////////
// Переключает планеты//
////////////////////////
export function onDesktopMenuClick() {
	currentPlanet.name = $(this).attr("data-planet");
	$(".desktop-menu > li").css("border-color", "transparent").removeClass("desktop-menu__active");
	$(this).addClass(currentPlanet.name).addClass("desktop-menu__active");

	const currentData = getCurrentPlanetContent();
	// Изменяет border color
	$(this).css("border-color", currentData.underlineColor);
	// Изменяет заголовок
	animateTitle();
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

	flyOut();

	setTimeout(() => {
		$(".planet-img").attr("src", currentData.images.planet);
		flyIn();
	}, 500);

	// Изменяет ссылку на Wiki
	$(".citation__link").attr("href", currentData.overview.source);

	$(".planet__menu > button").removeClass().addClass("planet__menu-button");
	$(".planet__menu > button:first-child").addClass(`planet__menu-active ${currentPlanet.name}Color`);

	$(".planet-img-geo").css("display", "none");

	animateStats();
}

////////////////////////////////////////
// Изменение контента мобильной версии//
////////////////////////////////////////

export function onMobileMenuClick() {
	currentPlanet.name = $(this).attr("data-planet");
	const currentData = getCurrentPlanetContent();
	$(".mobile__menu-content").show();
	$(".main").show();
	$(".stats").show();
	animateTitle();
	animateStats();
	// Изменяет заголовок
	$(".planet__title").text(currentPlanet.name);
	// Измененяет параграф
	$(".planet__paragraph").text(currentData.content);
	// Изменяет rotation time
	$(".rotation__value").text(currentData.rotation);
	// Изменяет revolution time
	$(".revolution__value").text(currentData.revolution);
	// Изменяет radius
	$(".radius__value").text(currentData.radius);
	// Изменяет average temp.
	$(".average__value").text(currentData.temperature);
	// Изменяет изображение планеты
	$(".planet-img").addClass("planetFlyOut");
	setTimeout(() => {
		$(".planet-img").removeClass("planetFlyOut");
	}, 500);

	setTimeout(() => {
		$(".planet-img").attr("src", currentData.images.planet);
		$(".planet-img").addClass("planetFlyIn");
	}, 500);

	setTimeout(() => {
		$(".planet-img").removeClass("planetFlyIn");
	}, 1000);
	// Изменяет ссылку на Wiki
	$(".citation__link").attr("href", currentData.overview.source);

	$(".menu-burger").toggle();
	$(".content-link").removeClass("link-active");
	$(".content-link:first-child").addClass("link-active");
	$(".planet-img-geo").css("display", "none");
}

// Изменение контента (моб меню)

export function onMobilePlanetMenuClick() {
	$(".content-link").removeClass("link-active");
	$(this).addClass("link-active");
	const currentData = getCurrentPlanetContent();
	animatePlanet();

	if ($(this).text().indexOf("overview") >= 0) {
		$(".planet__paragraph").text(currentData.overview.content);
		$(".citation__link").attr("href", currentData.overview.source);
		$(".planet-img").attr("src", currentData.images.planet);
		$(".planet-img-geo").css("display", "none");
	} else if ($(this).text().indexOf("structure") >= 0) {
		$(".planet__paragraph").text(currentData.structure.content);
		$(".citation__link").attr("href", currentData.structure.source);
		$(".planet-img").attr("src", currentData.images.structure);
		$(".planet-img-geo").css("display", "none");
	} else if ($(this).text().indexOf("surface") >= 0) {
		$(".planet__paragraph").text(currentData.geology.content);
		$(".citation__link").attr("href", currentData.geology.source);
		$(".planet-img").attr("src", currentData.images.planet);
		$(".planet-img-geo").css("display", "block").attr("src", currentData.images.geology);
	}
}
