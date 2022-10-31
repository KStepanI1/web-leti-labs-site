import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "icon" | "default";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = "default", className = "", children, ...rest } = props;

    return (
      <button {...rest} className={`button ${variant} ${className}`} ref={ref}>
        {children}
      </button>
    );
  }
);

export { Button };
