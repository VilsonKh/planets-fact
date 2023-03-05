$(function () {
  //////////////////////////////
  // Создает и анимирует звезды//
  //////////////////////////////
  const paramsStar = {
    amount: 20,
    size: {
      min: 1,
      max: 5,
      giant: 9,
    },
    duration: {
      min: 5,

      max: 25,
    },
  };
  const randomBetween = (a, b) => {
    return a + Math.random() * (b - a);
  };

  for (let i = 0; i < paramsStar.amount; i++) {
    let star = $("<div class='star'></div>");
    let size = Math.round(Math.random() * 10) === 0 ? paramsStar.size.giant : randomBetween(paramsStar.size.min, paramsStar.size.max);
    star.css({
      width: size + "px",
      height: size + "px",
      left: randomBetween(0, 100) + "%",
      top: randomBetween(0, 100) + "%",

      "box-shadow": "0 0 " + size + "px " + size / 2 + "px #043668",
      "animation-duration": randomBetween(paramsStar.duration.min, paramsStar.duration.max) + "s",
    });

    $(".sky").append(star);
  }

  anime({
    targets: [".star"],
    opacity: [
      {
        duration: 1500,
        value: "0",
      },
      {
        duration: 1500,
        value: "100",
      },
    ],
    easing: "linear",
    loop: true,
    delay: (el, i) => 50 * i,
  });
  ////////////////////////////////
  // Создает и анимирует кометы//
  ///////////////////////////////
  const paramsComet = {
    amount: 30,
    size: {
      min: 1,
      max: 5,
    },
    duration: {
      min: 10,
      max: 25,
    },
  };

  for (let i = 0; i < paramsComet.amount; i++) {
    let comet = $("<div class='comet'></div>");
    // let size = Math.round(Math.random() * 10) === 0 ? paramsComet.size.giant : randomBetween(paramsComet.size.min, paramsComet.size.max);
    comet.css({
      width: randomBetween(paramsComet.size.min, paramsComet.size.max) + "px",
      height: randomBetween(paramsComet.size.min, paramsComet.size.max) + "px",
      left: randomBetween(0, 100) + "%",
      top: randomBetween(0, 100) + "%",
      transform: "rotate(45deg)",
      "box-shadow": "0 0 " + randomBetween(paramsComet.size.min, paramsComet.size.max) + "px " + randomBetween(paramsComet.size.min, paramsComet.size.max) / 2 + "px #043668",
      "animation-duration": randomBetween(paramsComet.duration.min, paramsComet.duration.max) + "s",
    });

    $(".shootingstars").append(comet);
  }

  anime({
    targets: [".comet"],
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

  // Анимация заголовка

  
});
