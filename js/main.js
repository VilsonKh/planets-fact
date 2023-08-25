import { animatePlanet, animateBurgerMenuItems, resetAnim } from "./animation.js";
import "./helpers.js";
import { changePlanetData, changePlanetDescription, currentPlanet, getCurrentPlanetContent } from "./helpers.js";
import "./startCaroutine.js";

// Opens burger menu
export function onBurgerMenuClick() {
	resetAnim(".burgerMenu__item-inner");
	$(".burgerMenu").toggle();
	$(".mobile__menu-content").toggle();
	animateBurgerMenuItems();
	$(".main").toggle();
	$(".stats").toggle();
}

// Changes desktop content
export function onDesktopMenuClick() {
	currentPlanet.name = $(this).attr("data-planet");

	const currentData = getCurrentPlanetContent();

	$(".desktopMenu > li").css("border-color", "transparent").removeClass("active");
	$(this).css("border-color", currentData.underlineColor);
	$(this).addClass(currentPlanet.name).addClass("active");
	$(".planet-img-geo").attr("src", "");
	$(".planet__menu > button").removeClass().addClass("planet__menu-button");
	$(".planet__menu > button:first-child").addClass(`active ${currentPlanet.name}Color`);

	changePlanetData();
}

// Changes mobile content
export function onMobileMenuClick() {
	currentPlanet.name = $(this).attr("data-planet");
	const currentData = getCurrentPlanetContent();
	$(".mobile__menu-content").show();
	$(".main").show();
	$(".stats").show();
	$(".burgerMenu").toggle();
	$(".mobile__menu-link").removeClass("active").css("border-color", "transparent");
	$(".mobile__menu-link:first-child").addClass("active").css("border-color", currentData.underlineColor);
	$(".planet-img-geo").attr("src", "");

	changePlanetData();
}

// Changes data on the page by clicking on the planet menu
export function onPlanetMenuClick() {
	$(".planet__menu > button").removeClass().addClass("planet__menu-button");
	$(this).addClass(`active ${currentPlanet.name}Color`);

	animatePlanet();

	changePlanetDescription($(this).attr("data-menu"));
}

// Changes data on the mobile page by clicking on the planet menu
export function onMobilePlanetMenuClick() {
	const currentData = getCurrentPlanetContent();
	$(".mobile__menu-link").removeClass();
	$(".mobile__menu-content > li").addClass("mobile__menu-link").css("border-color", "transparent");
	$(this).css("border-color", currentData.underlineColor).addClass(`active`);

	animatePlanet();

	changePlanetDescription($(this).attr("data-menu"));
}
