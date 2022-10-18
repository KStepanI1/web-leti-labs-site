import { Card, CardProps } from "./Card";

const cards: CardProps[] = [
  {
    id: 1,
    title: "Лабораторная работа 1",
    description: "В данной работе происходит начало работы с html и css.",
    tags: ["Знакомство", "Начало"],
  },
];

const Cards = () => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </div>
  );
};

export { Cards };
