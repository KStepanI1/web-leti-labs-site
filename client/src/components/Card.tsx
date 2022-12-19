import { Tag } from "./Tag";

export interface CardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const Card = ({ title, id, description, tags }: CardProps) => {
  return (
    <section className="card">
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <div className="card__tags">
        {tags.map((tag, i) => (
          <Tag name={tag} key={`card__${id}_tag_${i}`} />
        ))}
      </div>
    </section>
  );
};

export { Card };
