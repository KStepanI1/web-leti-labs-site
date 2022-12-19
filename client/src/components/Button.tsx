import React from "react";
import { Loader } from "./Loader";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "icon" | "default" | "transparent-icon";
  isPending?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = "default", className = "", children, isPending = false, ...rest } = props;

    return (
      <button {...rest} className={`button ${variant} ${className}`} ref={ref}>
        <div className={`button__children${isPending ? ' -loader' : ''}`}>
          {children}
        </div>

        {isPending && <div className="button__loader">
          <Loader size="small" />
        </div>}
      </button>
    );
  }
);

export { Button };
