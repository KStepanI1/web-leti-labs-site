const Viewer = ({ path }: { path: string }) => {
  return (
    <iframe
      className="viewer"
      src={path}
      title={path}
      width="100%"
      frameBorder="no"
      name="f"
      lang="ru"
    />
  );
};

export { Viewer };
