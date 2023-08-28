import { getCurrentPlanetContent, chooseRevolutionMeasure } from "../js/helpers.js";
import { planets } from "../js/data.js";

describe("getCurrentPlanetContent", () => {
	it("should return the content of the current planet", () => {
		const expectedContent = planets[2];
		const currentPlanetStub = {
			planetName: expectedContent.name,
			get name() {
				return this.planetName;
			},
		};

		const result = getCurrentPlanetContent.call({ currentPlanet: currentPlanetStub });

		expect(result).toEqual(expectedContent);
	});
});

describe("chooseRevolutionMeasure", () => {
	it("should return the correct measure unit for revolution", () => {
		// Действие и проверка для каждой планеты
		const planetsData = [
			{ planetName: "mars", statsName: "revolution", expectedMeasure: "years" },
			{ planetName: "jupiter", statsName: "revolution", expectedMeasure: "years" },
			{ planetName: "mercury", statsName: "revolution", expectedMeasure: "days" },
			// ... добавьте остальные планеты
		];

		planetsData.forEach((data) => {
			const result = chooseRevolutionMeasure(data.planetName, data.statsName);
			expect(result).toEqual(data.expectedMeasure);
		});
	});

	it("should return the correct measure unit for rotation", () => {
		// Действие и проверка для каждой планеты
		const planetsData = [
			{ planetName: "mercury", statsName: "rotation", expectedMeasure: "days" },
			{ planetName: "venus", statsName: "rotation", expectedMeasure: "days" },
			{ planetName: "jupiter", statsName: "rotation", expectedMeasure: "hours" },
			// ... добавьте остальные планеты
		];

		planetsData.forEach((data) => {
			const result = chooseRevolutionMeasure(data.planetName, data.statsName);
			expect(result).toEqual(data.expectedMeasure);
		});
	});
});
