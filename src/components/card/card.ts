import { createElement } from "../../utils/createElement";

export function createCard({ imgSrc, name, status, species, origin }) {
  return createElement("div", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card__portrait",
        src: imgSrc,
      }),
      createElement("div", {
        className: "card__info",
        childs: [
          createElement("h2", {
            className: "card__name",
            innerText: name,
          }),
          createElement("p", {
            className: "card__status",
            innerText: `${status === "Alive" ? "🥳🎉" : "💀"} - ${status}`,
          }),
          createElement("p", {
            className: "card_species",
            innerText: "Species: " + species,
          }),
          createElement("p", {
            className: "card__origin",
            innerText: "Origin: " + origin,
          }),
        ],
      }),
    ],
  });
}
