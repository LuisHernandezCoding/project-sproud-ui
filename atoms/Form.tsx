import React from "react";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
  children?: React.ReactNode;
};

export default function Form({
  children,
  className = "",
  ...rest
}: Props & { className?: string }) {
  const classes = [className].filter(Boolean).join(" ");
  return (
    <form className={classes} {...rest}>
      {children}
    </form>
  );
}
