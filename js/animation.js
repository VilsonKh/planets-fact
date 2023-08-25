import { currentPlanet } from "./helpers.js";

const sky = document.querySelector(".sky");
const shootingStars = document.querySelector(".shootingstars");
const starsArray = [];
const wishArray = [];

// Animate sky elements

export function createStars(starsNumber, size) {
	for (let i = 0; i <= starsNumber; i++) {
		const star = document.createElement("div");
		const chooseBlink = Math.floor(Math.random() * 5) + 1;
		star.classList.add(`blink__${chooseBlink}`);
		const param = randomNumber(size, "px");
		star.style.height = star.style.width = param;
		star.style.opacity = Math.round(Math.random() * (1 - 0.2) * 100) / 100;
		star.style.animationDuration = `${Math.floor(Math.random() * (5 - 2)) + 2}s`;
		star.style.left = randomNumber(window.innerWidth, "px");
		star.style.top = randomNumber(window.innerHeight, "px");
		starsArray.push(star);
		// sky.appendChild(star);}
	}
}

export function shuffleSky() {
	starsArray.forEach((star) => {
		star.style.top = randomNumber(window.innerHeight, "px");
		star.style.left = randomNumber(window.innerWidth, "px");
	});

	wishArray.forEach((wish) => {
		wish.style.top = randomNumber(window.innerHeight, "px");
		wish.style.left = randomNumber(window.innerWidth, "px");
	});
}

export function showStars(stars, size) {
	// while (starsArray.length < 60) {
	// 	createStars(5, size);
	// 	if (starsArray.length > 2) {
	// 		console.log(starsArray.length);
	// 		thinOutArray();
	// 	}
	// }

	console.log(starsArray);

	starsArray.forEach((star) => sky.append(star));
}

export function randomNumber(range, unit) {
	let randNum = Math.floor(Math.random() * range) + 1;
	return `${randNum}${unit}`;
}

export function createWish(quantity) {
	for (let i = 0; i < quantity; i++) {
		const wish = document.createElement("div");
		wish.style.left = randomNumber(window.innerWidth, "px");
		wish.style.top = randomNumber(window.innerHeight, "px");
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

// Animate planets
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
			{ value: 0, duration: 1000, delay: anime.stagger(100) },
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
			{ value: 4, duration: 100, delay: 0, easing: "easeOutExpo" },
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
			{ value: 200, duration: 1000, delay: 0 },
		],

		scale: [{ value: 0, duration: 200, delay: 0, easing: "easeOutExpo" }],
		easing: "easeOutElastic(1, .8)",
		loop: false,
	});
}

/////////////--TEST--////////////////
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// console.log(array);
// function thinOutArray() {
// 	for (let i = 0; i < array.length - 1; i++) {
// 		for (let e = i + 1; e < array.length; e++) {
// 			// console.log(array[i], array[e]);
// 			if (Math.abs(array[i] - array[e]) >= 5) {
// 				console.log("подходит", array[i], " - ", array[e]);
// 			} else {
// 				console.log("не подходит", array[i], " - ", array[e]);
// 				array.splice(e, 1);
// 				console.log(array);
// 				thinOutArray();
// 			}

// 			console.log(array);
// 		}
// 	}
// }

// thinOutArray();

////////// --- TEST WITH APPENDED STARS --- ////////////
// function thinOutArray() {
// 	for (let i = 0; i < starsArray.length - 1; i++) {
// 		const coordinateX = (index) => starsArray[index].getBoundingClientRect().x;
// 		const coordinateY = (index) => starsArray[index].getBoundingClientRect().y;

// 		for (let e = i + 1; e < starsArray.length; e++) {
// 			if (Math.abs(coordinateX(i) - coordinateX(e)) >= 100) {
// 				console.log("подходит", starsArray[i].getBoundingClientRect().x, starsArray[e].getBoundingClientRect().x);
// 			} else {
// 				console.log("не подходит", starsArray[i].getBoundingClientRect().x, starsArray[e].getBoundingClientRect().x);
// 				starsArray.splice(e, 1);
// 				thinOutArray();
// 			}
// 		}
// 	}
// }

///////////// --- TEST WITH ARRAY OF STARS --- ////////////////
// function thinOutArray() {
// 	for (let i = 0; i < starsArray.length - 1; i++) {
// 		const coordinateX = (index) => starsArray[index].style.top.slice(0, starsArray[index].style.top.length - 2);
// 		const coordinateY = (index) => starsArray[index].style.left.slice(0, starsArray[index].style.left.length - 2);

// 		for (let e = i + 1; e < starsArray.length; e++) {
// 			if (Math.abs(coordinateX(i) - coordinateX(e) || coordinateY(i) - coordinateY(e)) >= 20) {
// 				console.log("подходит", coordinateX(i), coordinateX(e));
// 			} else {
// 				console.log("не подходит", coordinateX(i), coordinateX(e));
// 				starsArray.splice(e, 1);
// 				// thinOutArray();
// 			}
// 		}

// 		console.log(starsArray);
// 	}
// }
