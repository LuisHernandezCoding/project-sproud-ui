import React from "react";
import FormField from "./FormField";
import AtomSelect from "../atoms/Select";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  id?: string;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: string | null;
  children?: React.ReactNode;
};

export default function Select({
  id,
  label,
  helper,
  error = null,
  children,
  ...rest
}: Props) {
  const selectProps = rest as React.SelectHTMLAttributes<HTMLSelectElement>;

  return (
    <FormField id={id} label={label} helper={helper} error={error}>
      {/* Render the styled select; FormField uses Input for input fields but wrapping here keeps layout consistent */}
      <AtomSelect id={id} {...selectProps}>
        {children}
      </AtomSelect>
    </FormField>
  );
}
