import { animateStats, animateTitle, createWish, flyIn, showStars, shuffleSky } from "./animation.js";
import { currentPlanet } from "./helpers.js";
import { onBurgerMenuClick, onDesktopMenuClick, onMobileMenuClick, onMobilePlanetMenuClick, onPlanetMenuClick } from "./main.js";

$(".planet__menu > button:first-child").addClass(`${currentPlanet.name}Color`);
$(".desktopMenu > li").click(onDesktopMenuClick);
$(".planet__menu > button").click(onPlanetMenuClick);
$(".burgerMenu__icon").click(onBurgerMenuClick);
$(".burgerMenu__item").click(onMobileMenuClick);
$(".mobile__menu-link").click(onMobilePlanetMenuClick);

window.addEventListener("resize", shuffleSky);

showStars(60, 7);
createWish(60);

$(function () {
	$(document).ready(function () {
		flyIn();
		animateStats();
		animateTitle();
	});
});
