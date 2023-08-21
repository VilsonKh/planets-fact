import { currentPlanet } from "./helpers.js";

$(".planet__menu > button:first-child").addClass(`${currentPlanet.name}Color`);
