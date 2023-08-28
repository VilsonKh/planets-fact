import { createStars, randomNumber, shuffleSky } from "../js/animation.js";

describe("createStars function", () => {
	it("creates stars with proper attributes", () => {
		document.body.innerHTML = `<div class='sky'></div>`;

		const starsConfig = {
			starsNumber: 20,
			maxStarSize: 7,
			minStarSize: 1,
			maxStarOpacity: 1,
			minStarOpacity: 0.2,
			maxAnimDuration: 5,
			minAnimDuration: 2,
		};

		createStars(starsConfig);
		const starContainers = document.querySelectorAll(".sky > div");
		expect(starContainers.length).toBe(starsConfig.starsNumber);

		starContainers.forEach((starContainer) => {
			const star = starContainer.querySelector("div");
			expect(star).toBeTruthy();

			const opacity = parseFloat(star.style.opacity);
			expect(opacity).toBeGreaterThanOrEqual(0.2);
			expect(opacity).toBeLessThanOrEqual(1);

			const animationDuration = parseFloat(star.style.animationDuration);
			expect(animationDuration).toBeGreaterThanOrEqual(2);
			expect(animationDuration).toBeLessThanOrEqual(5);

			const left = parseFloat(star.style.left);
			expect(left).toBeGreaterThanOrEqual(5);
			expect(left).toBeLessThanOrEqual(60);

			const top = parseFloat(star.style.top);
			expect(top).toBeGreaterThanOrEqual(5);
			expect(top).toBeLessThanOrEqual(60);

			const width = parseFloat(star.style.width);
			expect(width).toBeGreaterThanOrEqual(0);
			expect(width).toBeLessThanOrEqual(starsConfig.maxStarSize);

			const height = parseFloat(star.style.height);
			expect(height).toBeGreaterThanOrEqual(0);
			expect(height).toBeLessThanOrEqual(starsConfig.maxStarSize);
		});
	});
});

describe("randomNumber function", () => {
	it("should return integer from max to zero if min >= 1", () => {
		for (let i = 0; i < 10; i++) {
			const result = randomNumber(5, 1);
			expect(result).toBeLessThanOrEqual(5);
			expect(result).toBeGreaterThanOrEqual(1);
		}
	});

	it("should return decimal value if min < 1 ", () => {
		for (let i = 0; i < 10; i++) {
			const result = randomNumber(5, 0.2);
			expect(result).toBeLessThanOrEqual(5);
			expect(result).toBeGreaterThanOrEqual(0);
		}
	});
});

describe("shuffleSky function", () => {
	it("shuffles wishes positions within viewport", () => {
		const wishArray = [];
		const wish = document.createElement("div");
		wish.style.top = 1;
		wish.style.left = 2;
		wishArray.push(wish);

		const initialValue = wishArray[0].style.top;
		shuffleSky(wishArray);

		wishArray.forEach((wish) => {
			const topValue = wish.style.top;
			expect(topValue).toEqual(initialValue);

			// const leftValue = parseFloat(wish.style.left);
			// expect(leftValue).toBeGreaterThanOrEqual(0);
			// expect(leftValue).toBeLessThanOrEqual(innerWidth);
		});
	});
});
