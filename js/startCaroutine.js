import { animateStats, animateTitle, createStars, createWish, flyIn, shuffleSky } from "./animation.js";
import { currentPlanet } from "./helpers.js";
import { onBurgerMenuClick, onDesktopMenuClick, onMobileMenuClick, onMobilePlanetMenuClick, onPlanetMenuClick } from "./main.js";
import { starsConfig } from "./starsConfig.js";

$(".planet__menu > button:first-child").addClass(`${currentPlanet.name}Color`);
$(".desktopMenu > li").click(onDesktopMenuClick);
$(".planet__menu > button").click(onPlanetMenuClick);
$(".burgerMenu__icon").click(onBurgerMenuClick);
$(".burgerMenu__item").click(onMobileMenuClick);
$(".mobile__menu-link").click(onMobilePlanetMenuClick);

window.addEventListener("resize", shuffleSky);

createStars(starsConfig);
createWish(60);

$(function () {
	$(function () {
		flyIn();
		animateStats();
		animateTitle();
	});
});
