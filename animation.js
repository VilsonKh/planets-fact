import { currentPlanet } from "./helpers.js";

export function animateTitle() {
	$(document).ready(function () {
		let textWrapper = $(".planet__title");
		textWrapper.html(currentPlanet.name.replace(/\S/g, "<span class='letter'>$&</span>"));
		anime.timeline({ loop: false }).add({
			targets: ".planet__title .letter",
			opacity: [0, 1],
			easing: "easeInOutQuad",
			duration: 500,
			delay: (el, i) => 100 * (i + 1),
		});
	});
}

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

// Анимирует планеты
export function animatePlanet() {
	$(".planet-img").addClass("animate__pulse");
	setTimeout(() => {
		$(".planet-img").removeClass("animate__pulse");
	}, 500);
}

export function animateBurgerMenuItems() {
	anime({
		targets: ".name-container",
		translateX: 50,
		easing: "easeInOutSine",
		direction: "alternate",
		duration: 300,
		delay: (el, i) => 50 * i,
	});
}

function resetAnim() {
	$(this).css("transform", "none");
}

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
export function flyOut(target) {
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

$(function () {
	//////////////////////////////
	// Создает и анимирует звезды//
	//////////////////////////////
	//   const paramsStar = {
	//     amount: 100,
	//     size: {
	//       min: 1,
	//       max: 5,
	//       giant: 9,
	//     },
	//     duration: {
	//       min: 5,
	//       max: 25,
	//     },
	//   };
	//   const randomBetween = (a, b) => {
	//     return Math.round(a + Math.random() * (b - a));
	//   };
	// let starsArray = []
	//   for (let i = 0; i < paramsStar.amount; i++) {
	//     let star = $("<div class='star'></div>");
	//     let size = Math.round(Math.random() * 10) === 0 ? paramsStar.size.giant : randomBetween(paramsStar.size.min, paramsStar.size.max);
	//     star.css({
	//       width: size + "px",
	//       height: size + "px",
	//       left: randomBetween(0, 100) + "%",
	//       top: randomBetween(0, 100) + "%",
	//       "animation-duration": randomBetween(paramsStar.duration.min, paramsStar.duration.max) + "s",
	//     });
	//     starsArray.push(star);
	//     console.log(`${starsArray.length} old`)
	//     for(let i = 0; i< starsArray.length;i++ ){
	//       let leftPercI = $(starsArray[i]).css('left')
	//       //console.log(+leftPercI.substring(0,leftPercI.length-1))
	//       for(let j=1;j<starsArray.length;j++){
	//         let leftPercJ = $(starsArray[j]).css('left')
	//         if((+leftPercI.substring(0,leftPercI.length-1)) - (+leftPercJ.substring(0,leftPercJ.length-1)) < 5){
	//           starsArray.slice(j,1)
	//           console.log(`${starsArray.length}  new`)
	//         }
	//       }
	//     }
	//   }
	// anime({
	//   targets: [".star"],
	//   opacity: [
	//     {
	//       duration: 1500,
	//       value: "0",
	//     },
	//     {
	//       duration: 1500,
	//       value: "100",
	//     },
	//   ],
	//   easing: "linear",
	//   loop: true,
	//   delay: (el, i) => 500 * i,
	// });
	////////////////////////////////
	// Создает и анимирует кометы//
	///////////////////////////////
	//   const paramsComet = {
	//     amount: 30,
	//     size: {
	//       min: 1,
	//       max: 5,
	//     },
	//     duration: {
	//       min: 10,
	//       max: 25,
	//     },
	//   };
	//   for (let i = 0; i < paramsComet.amount; i++) {
	//     let comet = $("<div class='comet'></div>");
	//     // let size = Math.round(Math.random() * 10) === 0 ? paramsComet.size.giant : randomBetween(paramsComet.size.min, paramsComet.size.max);
	//     comet.css({
	//       width: randomBetween(paramsComet.size.min, paramsComet.size.max) + "px",
	//       height: randomBetween(paramsComet.size.min, paramsComet.size.max) + "px",
	//       left: randomBetween(0, 100) + "%",
	//       top: randomBetween(0, 100) + "%",
	//       transform: "rotate(45deg)",
	//       "box-shadow": "0 0 " + randomBetween(paramsComet.size.min, paramsComet.size.max) + "px " + randomBetween(paramsComet.size.min, paramsComet.size.max) / 2 + "px #043668",
	//       "animation-duration": randomBetween(paramsComet.duration.min, paramsComet.duration.max) + "s",
	//     });
	//     $(".shootingstars").append(comet);
	//   }
	//   anime({
	//     targets: [".comet"],
	//     easing: "linear",
	//     loop: true,
	//     delay: (el, i) => 1000 * i,
	//     opacity: [
	//       {
	//         duration: 1000,
	//         value: "1",
	//       },
	//     ],
	//     width: [
	//       {
	//         value: "150px",
	//       },
	//       {
	//         value: "0px",
	//       },
	//     ],
	//     //здесь было 350, поправил, чтобы не было совсем криво
	//     translateX: 1000,
	//   });
});
