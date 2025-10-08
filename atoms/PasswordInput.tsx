import React, { useState } from "react";
import Input from "./Input";
import Icon from "./Icon";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  variant?: "default" | "dark";
};

export default function PasswordInput({
  className = "",
  error = false,
  variant = "default",
  ...rest
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={["relative", className].filter(Boolean).join(" ")}>
      <Input
        {...rest}
        type={visible ? "text" : "password"}
        error={error}
        variant={variant}
        className="pr-10"
      />

      <button
        type="button"
        aria-label={visible ? "Hide password" : "Show password"}
        onClick={() => setVisible((v) => !v)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        {/* inline SVGs keep this component self-contained and avoid depending on external icon names */}
        {visible ? (
          <svg className="w-4 h-4" viewBox="0 0 640 512" fill="currentColor" aria-hidden>
            <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" viewBox="0 0 576 512" fill="currentColor" aria-hidden>
            <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80z" />
          </svg>
        )}
      </button>
    </div>
  );
}
