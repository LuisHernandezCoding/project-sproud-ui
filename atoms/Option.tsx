import React from "react";

type Props = React.OptionHTMLAttributes<HTMLOptionElement> & {
  children?: React.ReactNode;
};

export default function Option({ children, ...rest }: Props) {
  return <option {...rest}>{children}</option>;
}
