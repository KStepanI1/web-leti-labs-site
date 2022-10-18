interface TagProps {
  name: string;
}

const Tag = ({ name }: TagProps) => {
  return <span className="card__tag">{name}</span>;
};

export { Tag };
