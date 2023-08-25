import { currentPlanet } from "./helpers.js";

const sky = document.querySelector(".sky");
const shootingStars = document.querySelector(".shootingstars");
const wishArray = [];

// Animate sky elements
/** Function creates containers, append star, adds class for blinking animation keyframes
 *  and over dynamic styles. Finally pushes item into sky container.
	@param {number} starsNumber - amount of containers
	@param {number} size - star max size
	@return {void} nothing
*/
export function createStars(starsNumber, size) {
	for (let i = 0; i <= starsNumber; i++) {
		const star = document.createElement("div");
		// generates random number from 1 - 5
		const chooseBlink = Math.floor(Math.random() * 5) + 1;
		star.classList.add(`blink__${chooseBlink}`);
		const param = randomNumber(size, 0, "px");
		star.style.height = star.style.width = param;
		// generates random opacity from 0.2 to 1
		star.style.opacity = Math.round(Math.random() * (1 - 0.2) * 100) / 100;
		// generates random animation duration from 2 - 5
		star.style.animationDuration = `${Math.floor(Math.random() * (5 - 2)) + 2}s`;
		star.style.left = randomNumber(60, 5, "px");
		star.style.top = randomNumber(60, 5, "px");
		const starContainer = document.createElement("div");
		starContainer.append(star);
		sky.append(starContainer);
	}
}

/** Function shuffles wishes on resize screen */
export function shuffleSky() {
	wishArray.forEach((wish) => {
		wish.style.top = randomNumber(window.innerHeight, "px");
		wish.style.left = randomNumber(window.innerWidth, "px");
	});
}

/** Function creates random star size or star position
 * @param {number} max - max value
 * @param {number} min - min value
 * @param {string} unit - units like 'px'
 * @return {string} size or postion like "63px"
 */
export function randomNumber(max, min, unit) {
	let randNum = null;
	if (min === 0) {
		randNum = Math.floor(Math.random() * max) + 1;
	} else {
		randNum = Math.floor(Math.random() * (max - min + 1) + min);
	}

	return `${randNum}${unit}`;
}

/** Function creates a certain quantity of wishes and animate them with anime.js
 * @param {number} quantity - amount of wishes
 */
export function createWish(quantity) {
	for (let i = 0; i < quantity; i++) {
		const wish = document.createElement("div");
		wish.style.left = randomNumber(window.innerWidth, 0, "px");
		wish.style.top = randomNumber(window.innerHeight, 0, "px");
		shootingStars.appendChild(wish);
		wishArray.push(wish);
	}

	anime({
		targets: [".shootingstars > div"],
		easing: "linear",
		loop: true,
		delay: (el, i) => 1000 * i,
		opacity: [
			{
				duration: 100,
				value: "1",
			},
		],
		width: [
			{
				value: "150px",
			},
			{
				value: "0px",
			},
		],
		translateX: 350,
	});
}

// Animate planet's name
export function animateTitle() {
	$(document).ready(function () {
		let textWrapper = $(".planet__title");
		textWrapper.html(currentPlanet.name.replace(/\S/g, "<span class='letter'>$&</span>"));
		anime.timeline({ loop: false }).add({
			targets: ".planet__title .letter",
			opacity: [0, 1],
			easing: "easeInOutQuad",
			duration: 500,
			delay: (el, i) => 50 * (i + 1),
		});
	});
}

// Animate planet's info numbers
export function animateStats() {
	const options = { duration: 1, separator: "," };
	let stats = $(".value");
	for (let i = 0; i < stats.length; i++) {
		let value = $(stats[i]).html();
		let demo = new countUp.CountUp($(stats)[i], value, options);
		if (!demo.error) {
			demo.start();
		} else {
			console.error(demo.error);
		}
	}
}

// Animate planets on planet menu click
export function animatePlanet() {
	$(".planet-img").addClass("animate__pulse");
	$(".planet-img-geo").addClass("animate__pulse");
	setTimeout(() => {
		$(".planet-img").removeClass("animate__pulse");
		$(".planet-img-geo").removeClass("animate__pulse");
	}, 500);
}

// Animate burger menu items
export function animateBurgerMenuItems() {
	anime({
		targets: ".burgerMenu__item-inner",
		translateX: [
			{ value: -200, duration: 0, delay: 0 },
			{ value: 0, duration: 700, delay: anime.stagger(80) },
		],
	});
}

// Reset items after adding animation
export function resetAnim(target) {
	$(target).css("transform", "none");
}

// Planet's enter animation
export function flyIn() {
	anime({
		targets: document.querySelector(".planet-img"),
		translateX: [
			{ value: -2000, duration: 0, delay: 0 },
			{ value: 0, duration: 1000, delay: 0 },
		],
		translatrY: [
			{ value: 2000, duration: 0, delay: 0 },
			{ value: 0, duration: 1000, delay: 0 },
		],
		scale: [
			{ value: 3, duration: 100, delay: 0, easing: "easeOutExpo" },
			{ value: 1, duration: 900 },
		],
		easing: "easeOutElastic(1, .8)",
		loop: false,
	});
}

// Planet's exit animation
export function flyOut() {
	anime({
		targets: document.querySelector(".planet-img"),
		translateX: [
			{ value: 0, duration: 0, delay: 0 },
			{ value: -200, duration: 1000, delay: 0 },
		],

		scale: [{ value: 0, duration: 200, delay: 0, easing: "easeOutExpo" }],
		easing: "easeOutElastic(1, .8)",
		loop: false,
	});
}
