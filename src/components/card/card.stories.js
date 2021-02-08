import "./card.css";
import { createCard } from "./card";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const Rick = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanches",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
  });

export const Morty = () =>
  createCard({
    imgSrc: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
  });
