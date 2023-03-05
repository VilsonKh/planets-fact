import { planets } from "./const.js";

$(function () {
  ////////////////////////
  // Переключает планеты//
  ////////////////////////
  $(".desktop-menu > li").click(function () {
    let currentPlanet = $(this).attr("data-planet");

    $(".desktop-menu > li").css("border-color", "transparent").removeClass("desktop-menu__active");

    $(this).addClass(currentPlanet).addClass("desktop-menu__active");

    function animateTitle() {
      $(document).ready(function () {
        let textWrapper = $(".planet__title");
        textWrapper.html(textWrapper.text().replace(/\S/g, "<span class='letter'>$&</span>"));

        anime.timeline({ loop: false }).add({
          targets: ".planet__title .letter",
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 1000,
          delay: (el, i) => 150 * (i + 1),
        });
      });
    }

    animateTitle();

    function animateNumbers() {
      let numbers = $(".stat__value");
      numbers.each(function (index) {
        let value = $(numbers[index]).html();
        var statisticAnimation = new CountUp(numbers[index], 0, value, 0, 5);
        statisticAnimation.start();
      });
    }

    animateNumbers()

    // Изменяет border color
    $(this).css("border-color", getPlanetColor());
    // Изменяет заголовок
    $(".planet__title").text(currentPlanet);
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
    $(".planet-img").attr("src", getPlanetImg());
    // Изменяет ссылку на Wiki
    $(".citation__link").attr("href", getPlanetUrl());

    function getPlanetColor() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].underlineColor;
        }
      }
    }

    function getPlanetContent() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].overview.content;
        }
      }
    }

    function getPlanetRotationTime() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].rotation;
        }
      }
    }

    function getPlanetRevolution() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].revolution;
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
    $(".planet__menu-content >li").removeClass("planet__menu-active");
    $(".planet__menu-content >li:first-child").addClass("planet__menu-active");
    $(".planet-img-geo").css("display", "none");
  });

  // Меню планет
  $(".planet__menu-content > li").click(function (evt) {
    $(".planet__menu-content >li").removeClass("planet__menu-active");
    $(this).addClass("planet__menu-active");

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
  /////////////////////////////
  // Открытие мобильного меню//
  /////////////////////////////
  $(".nav__mobile-burger").click(function () {
    $(".menu-burger").toggle();
    $(".mobile__menu-content").toggle();
  });

  ///////////////////////
  // Изменение контента//
  ///////////////////////
  $(".menu_item").click(function (evt) {
    let currentPlanet = $(this).find("p").text();
    console.log(currentPlanet);

    // Изменяет заголовок
    $(".planet__title").text(currentPlanet);
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
    $(".planet-img").attr("src", getPlanetImg());
    // Изменяет ссылку на Wiki
    $(".citation__link").attr("href", getPlanetUrl());

    function getPlanetColor() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].underlineColor;
        }
      }
    }

    function getPlanetContent() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].overview.content;
        }
      }
    }

    function getPlanetRotationTime() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].rotation;
        }
      }
    }

    function getPlanetRevolution() {
      for (let i = 0; i < $(planets).length; i++) {
        if ($(planets)[i].name === currentPlanet) {
          return $(planets)[i].revolution;
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
  });

  // Изменение контента (моб меню)
  $(".content-link").click(function () {
    $(".content-link").removeClass("link-active");
    $(this).addClass("link-active");

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
});
