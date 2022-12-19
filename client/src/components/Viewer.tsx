import React, { useState } from "react";

interface ViewerProps
  extends React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > {
  src: string;
}

const Viewer = React.forwardRef<HTMLIFrameElement, ViewerProps>(
  (props, ref) => {
    const style = {
      height: props.height || "100%",
      width: props.width || "100%",
    };
    const [clicked, setClicked] = useState(false);

    const handleBlur = () => {
      setClicked(false);
    };

    const handleClick = () => {
      setClicked(true);
    };

    return (
      <iframe
        sandbox="allow-same-origin"
        name="f"
        lang="ru"
        title={props.src}
        ref={ref}
        {...props}
        // referrerPolicy="same-origin"
        onBlur={(e) => {
          props.onBlur && props.onBlur(e);
          handleBlur();
        }}
        onClick={(e) => {
          props.onClick && props.onClick(e);
          handleClick();
        }}
        src={`${props.src}`}
        style={{ ...style, ...props.style }}
        className={`viewer ${props.className || ""}${!clicked ? " disabled" : ""}`}
      />
    );
  }
);

export { Viewer };
