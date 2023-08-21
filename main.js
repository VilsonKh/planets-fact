import { animateTitle, animateStats, animatePlanet, animateBurgerMenuItems, flyIn, flyOut } from "./animation.js";
import "./helpers.js";
import { changePlanetData, changePlanetDescription, currentPlanet, getCurrentPlanetContent } from "./helpers.js";
import "./startCaroutine.js";

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

	const currentData = getCurrentPlanetContent();

	//desktop///////
	$(".desktop-menu > li").css("border-color", "transparent").removeClass("desktop-menu__active");
	$(this).css("border-color", currentData.underlineColor);
	$(this).addClass(currentPlanet.name).addClass("desktop-menu__active");
	$(".planet__menu > button").removeClass().addClass("planet__menu-button");
	$(".planet__menu > button:first-child").addClass(`planet__menu-active ${currentPlanet.name}Color`);
	///////////////
	changePlanetData();
}

////////////////////////////////////////
// Изменение контента мобильной версии//
////////////////////////////////////////

export function onMobileMenuClick() {
	currentPlanet.name = $(this).attr("data-planet");

	// mobile ///////////
	$(".mobile__menu-content").show();
	$(".main").show();
	$(".stats").show();
	$(".menu-burger").toggle();
	$(".content-link").removeClass("link-active");
	$(".content-link:first-child").addClass("link-active");
	/////////////////////

	changePlanetData();
}

/////////////////////////////////////////////
// Меню планет overview, structure, surface//
/////////////////////////////////////////////

export function onPlanetMenuClick() {
	$(".planet__menu > button").removeClass().addClass("planet__menu-button");
	$(this).addClass(`planet__menu-active ${currentPlanet.name}Color`);

	animatePlanet();

	const currentData = getCurrentPlanetContent();

	changePlanetDescription($(this).attr("id"));
}

// Изменение контента (моб меню)

export function onMobilePlanetMenuClick() {
	const currentData = getCurrentPlanetContent();
	$(".content-link").removeClass();
	$(".mobile__menu-content > li").addClass("content-link").css("border-color", "transparent");
	$(this).css("border-color", currentData.underlineColor).addClass(`link-active`);

	animatePlanet();

	changePlanetDescription($(this).attr("id"));
}
