import { planets } from "./const.js";
import { animateTitle, animateStats, animatePlanet, animateBurgerMenuItems, flyIn, flyOut } from "./animation.js";
import "./helpers.js";
import {
	currentPlanet,
	getGeologyImg,
	getGeologyParagraph,
	getGeologyUrl,
	getOverviewImg,
	getOverviewParagraph,
	getOverviewUrl,
	getPlanetColor,
	getPlanetContent,
	getPlanetImg,
	getPlanetRadius,
	getPlanetRevolution,
	getPlanetRotationTime,
	getPlanetTemp,
	getPlanetUrl,
	getStructureImg,
	getStructureParagraph,
	getStructureUrl,
} from "./helpers.js";
import "./startCaroutine.js";
$(function () {
	////////////////////////
	// Переключает планеты//
	////////////////////////

	$(".desktop-menu > li").click(function () {
		currentPlanet.name = $(this).attr("data-planet");
		$(".desktop-menu > li").css("border-color", "transparent").removeClass("desktop-menu__active");
		$(this).addClass(currentPlanet.name).addClass("desktop-menu__active");

		// Изменяет border color
		$(this).css("border-color", getPlanetColor());
		// Изменяет заголовок
		animateTitle();
		// Измененяет параграф
		$(".planet__paragraph").text(getPlanetContent());
		// Изменяет rotation time
		$(".rotation__value").text(getPlanetRotationTime());
		// Изменяет revolution time
		$(".revolution__value").text(getPlanetRevolution());
		// Изменяет radius
		$(".radius__value").text(getPlanetRadius());
		// Изменяет average temp.
		$(".average__value").text(getPlanetTemp());
		// Изменяет изображение планеты добавляет анимацию планет

		//$(".planet-container").addClass("planetFlyOut");

		// setTimeout(() => {
		//   $(".planet-container").removeClass("planetFlyOut");
		// }, 500);

		// setTimeout(() => {
		//   $(".planet-img").attr("src", getPlanetImg());
		//   $(".planet-container").addClass("planetFlyIn");
		// }, 500);

		// setTimeout(() => {
		//   $(".planet-container").removeClass("planetFlyIn");
		// }, 1000);
		flyOut();

		setTimeout(() => {
			$(".planet-img").attr("src", getPlanetImg());
			flyIn();
		}, 500);

		// Изменяет ссылку на Wiki
		$(".citation__link").attr("href", getPlanetUrl());

		$(".planet__menu-content >li").removeClass().addClass("planet__menu-item");
		$(".planet__menu-content >li:first-child").addClass(`planet__menu-active ${currentPlanet.name}Color`);

		$(".planet-img-geo").css("display", "none");

		animateStats();
	});
	/////////////////////////////////////////////
	// Меню планет overview, structure, surface//
	/////////////////////////////////////////////
	$(".planet__menu-content > li").click(function (e) {
		$(".planet__menu-content > li").removeClass().addClass("planet__menu-item");
		$(this).addClass(`planet__menu-active ${currentPlanet.name}Color`);

		animatePlanet();

		if ($(this).children("p").text().indexOf("overview") >= 0) {
			$(".planet__paragraph").text(getOverviewParagraph());
			$(".citation__link").attr("href", getOverviewUrl());
			$(".planet-img").attr("src", getOverviewImg());
			$(".planet-img-geo").css("display", "none");
		} else if ($(this).children("p").text().indexOf("structure") >= 0) {
			$(".planet__paragraph").text(getStructureParagraph());
			$(".citation__link").attr("href", getStructureUrl());
			$(".planet-img").attr("src", getStructureImg());
			$(".planet-img-geo").css("display", "none");
		} else if ($(this).children("p").text().indexOf("geology") >= 0) {
			$(".planet__paragraph").text(getGeologyParagraph());
			$(".citation__link").attr("href", getGeologyUrl());
			$(".planet-img").attr("src", getOverviewImg());
			$(".planet-img-geo").css("display", "block").attr("src", getGeologyImg());
		}
	});
	/////////////////////////////
	// Открытие мобильного меню//
	/////////////////////////////
	$(".nav__mobile-burger").click(function () {
		$(".menu-burger").toggle();
		$(".mobile__menu-content").toggle();
		animateBurgerMenuItems();
		$(".main").toggle();
		$(".stats").toggle();
	});

	////////////////////////////////////////
	// Изменение контента мобильной версии//
	////////////////////////////////////////
	$(".menu_item").click(function (evt) {
		let currentPlanet = $(this).find("p").text();
		$(".mobile__menu-content").show();
		$(".main").show();
		$(".stats").show();
		animateTitle();
		animateStats();
		// Изменяет заголовок
		$(".planet__title").text(currentPlanet.name);
		// Измененяет параграф
		$(".planet__paragraph").text(getPlanetContent());
		// Изменяет rotation time
		$(".rotation__value").text(getPlanetRotationTime());
		// Изменяет revolution time
		$(".revolution__value").text(getPlanetRevolution());
		// Изменяет radius
		$(".radius__value").text(getPlanetRadius());
		// Изменяет average temp.
		$(".average__value").text(getPlanetTemp());
		// Изменяет изображение планеты
		$(".planet-img").addClass("planetFlyOut");
		setTimeout(() => {
			$(".planet-img").removeClass("planetFlyOut");
		}, 500);

		setTimeout(() => {
			$(".planet-img").attr("src", getPlanetImg());
			$(".planet-img").addClass("planetFlyIn");
		}, 500);

		setTimeout(() => {
			$(".planet-img").removeClass("planetFlyIn");
		}, 1000);
		// Изменяет ссылку на Wiki
		$(".citation__link").attr("href", getPlanetUrl());

		function getPlanetContent() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet.name) {
					return $(planets)[i].overview.content;
				}
			}
		}

		function getPlanetRotationTime() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet.name) {
					return $(planets)[i].rotation;
				}

				if (currentPlanet.name === "jupiter" || currentPlanet.name === "saturn" || currentPlanet.name === "uranus" || currentPlanet.name === "neptune") {
					$(".rotation__value").next().text("Hours");
				} else if (currentPlanet === "earth") {
					$(".rotation__value").next().text("Day");
				} else {
					$(".rotation__value").next().text("Days");
				}
			}
		}

		function getPlanetRevolution() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet) {
					return $(planets)[i].revolution;
				}

				if (currentPlanet === "mercury" || currentPlanet === "venus" || currentPlanet === "earth") {
					$(".revolution__value").next().text("Days");
				} else {
					$(".revolution__value").next().text("Years");
				}
			}
		}

		function getPlanetRadius() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet) {
					return $(planets)[i].radius;
				}
			}
		}

		function getPlanetTemp() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet) {
					return $(planets)[i].temperature;
				}
			}
		}

		function getPlanetImg() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet) {
					return $(planets)[i].images.planet;
				}
			}
		}

		function getPlanetUrl() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === currentPlanet) {
					return $(planets)[i].overview.source;
				}
			}
		}

		$(".menu-burger").toggle();
		$(".content-link").removeClass("link-active");
		$(".content-link:first-child").addClass("link-active");
		$(".planet-img-geo").css("display", "none");
	});

	// Изменение контента (моб меню)
	$(".content-link").click(function () {
		$(".content-link").removeClass("link-active");
		$(this).addClass("link-active");

		animatePlanet();

		if ($(this).text().indexOf("overview") >= 0) {
			$(".planet__paragraph").text(getOverviewParagraph());
			$(".citation__link").attr("href", getOverviewUrl());
			$(".planet-img").attr("src", getOverviewImg());
			$(".planet-img-geo").css("display", "none");
		} else if ($(this).text().indexOf("structure") >= 0) {
			$(".planet__paragraph").text(getStructureParagraph());
			$(".citation__link").attr("href", getStructureUrl());
			$(".planet-img").attr("src", getStructureImg());
			$(".planet-img-geo").css("display", "none");
		} else if ($(this).text().indexOf("surface") >= 0) {
			$(".planet__paragraph").text(getGeologyParagraph());
			$(".citation__link").attr("href", getGeologyUrl());
			$(".planet-img").attr("src", getOverviewImg());
			$(".planet-img-geo").css("display", "block").attr("src", getGeologyImg());
		}

		function getOverviewParagraph() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].overview.content;
				}
			}
		}

		function getOverviewUrl() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].overview.source;
				}
			}
		}

		function getOverviewImg() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].images.planet;
				}
			}
		}

		function getStructureParagraph() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].structure.content;
				}
			}
		}

		function getStructureUrl() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].structure.source;
				}
			}
		}

		function getStructureImg() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].images.structure;
				}
			}
		}

		function getGeologyParagraph() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].geology.content;
				}
			}
		}

		function getGeologyUrl() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].geology.source;
				}
			}
		}

		function getGeologyImg() {
			for (let i = 0; i < $(planets).length; i++) {
				if ($(planets)[i].name === $(".planet__title").text()) {
					return $(planets)[i].images.geology;
				}
			}
		}
	});

	$(window).resize(function () {
		// if ($(".mobile__menu-content").hide()) {
		//   $(".mobile__menu-content").css("display", "flex");
		// }
	});

	$(document).ready(function () {
		// $(".planet-container").addClass("planetFlyIn");

		// setTimeout(() => {
		//   $(".planet-container").removeClass("planetFlyIn");
		// }, 1000);
		flyIn();

		animateStats();
	});
});
