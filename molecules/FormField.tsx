import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

type Props = {
  id?: string;
  label?: React.ReactNode;
  helper?: React.ReactNode;
  error?: string | null;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"input">;

export default function FormField({
  id,
  label,
  helper,
  error = null,
  children,
  ...rest
}: Props) {
  return (
    <div className="space-y-1">
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      {children ? (
        children
      ) : (
        <Input id={id} aria-invalid={!!error} error={!!error} {...rest} />
      )}
      {error ? (
        <p className="text-sm text-red-400">{error}</p>
      ) : helper ? (
        <p className="text-sm text-gray-800">{helper}</p>
      ) : null}
    </div>
  );
}
