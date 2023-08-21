import { currentPlanet } from "./helpers.js";

$(".planet__menu-content >li:first-child").addClass(`${currentPlanet.name}Color`);
