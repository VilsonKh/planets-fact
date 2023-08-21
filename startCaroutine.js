import { animateStats, animateTitle, flyIn } from "./animation.js";
import { currentPlanet } from "./helpers.js";
import { onBurgerMenuClick, onDesktopMenuClick, onMobileMenuClick, onMobilePlanetMenuClick, onPlanetMenuClick } from "./main.js";

$(".planet__menu > button:first-child").addClass(`${currentPlanet.name}Color`);
$(".desktop-menu > li").click(onDesktopMenuClick);
$(".planet__menu > button").click(onPlanetMenuClick);
$(".nav__mobile-burger").click(onBurgerMenuClick);
$(".menu_item").click(onMobileMenuClick);
$(".content-link").click(onMobilePlanetMenuClick);

$(function () {
	$(document).ready(function () {
		flyIn();
		animateStats();
		animateTitle();
	});
});
