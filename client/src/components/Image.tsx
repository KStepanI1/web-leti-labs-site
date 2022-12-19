import React from "react";

interface ImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  return <img {...props} ref={ref} alt={props.alt || ""} />;
});

export { Image };
