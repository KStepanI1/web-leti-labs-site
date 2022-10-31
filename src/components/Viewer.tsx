import React from "react";
import {BASE_URL} from "../utils/constants";

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

    return (
      <iframe
        frameBorder="no"
        sandbox=""
        name="f"
        lang="ru"
        title={props.src}
        ref={ref}
        {...props}
        src={`${BASE_URL}${props.src}`}
        style={{ ...style, ...props.style }}
        className={`viewer ${props.className || ""}`}
      />
    );
  }
);

export { Viewer };
