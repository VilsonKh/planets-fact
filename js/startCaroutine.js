import { animateStats, animateTitle, createStars, createWish, flyIn, shuffleSky } from "./animation.js";
import { currentPlanet } from "./helpers.js";
import { onBurgerMenuClick, onDesktopMenuClick, onMobileMenuClick, onMobilePlanetMenuClick, onPlanetMenuClick } from "./main.js";
import { starsConfig, wishAmout } from "./starsConfig.js";

$(".planet__menu > button:first-child").addClass(`${currentPlanet.name}Color`);
$(".desktopMenu > li").on("click", onDesktopMenuClick);
$(".planet__menu > button").on("click", onPlanetMenuClick);
$(".burgerMenu__icon").on("click", onBurgerMenuClick);
$(".burgerMenu__item").on("click", onMobileMenuClick);
$(".mobile__menu-link").on("click", onMobilePlanetMenuClick);

window.addEventListener("resize", shuffleSky);

createStars(starsConfig);
createWish(wishAmout);

$(function () {
	$(function () {
		flyIn();
		animateStats();
		animateTitle();
	});
});
