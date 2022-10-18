const Loader = ({ size = "medium" }: { size: "small" | "medium" }) => {
  return (
    <div className={`loader`}>
      <div className={`spiner-${size}`} />
    </div>
  );
};

export { Loader };
