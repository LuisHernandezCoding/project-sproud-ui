import React, { useState } from "react";
import FormField from "./FormField";

interface AuthEmailFormProps {
  mode?: "login" | "register";
  submitText?: string;
  className?: string;
  onSubmit?: (email: string) => void;
}

const AuthEmailForm: React.FC<AuthEmailFormProps> = ({
  mode = "login",
  submitText,
  className = "",
  onSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    
    setLoading(true);
    try {
      onSubmit?.(email);
      setMessage("Check your email for a sign-in link");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitEmail}
      aria-label={`email-form-${mode}`}
      className={className}
    >
      <FormField
        id={`email-${mode}`}
        label="Email"
        helper={message ?? undefined}
        error={emailError}
      >
        <input
          id={`email-${mode}`}
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError(null);
          }}
          onBlur={() => {
            if (email && !isValidEmail(email))
              setEmailError("Please enter a valid email address");
          }}
          aria-describedby={emailError ? `email-error-${mode}` : undefined}
          className="w-full mb-3 px-3 py-2 rounded bg-white text-gray-900 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
      </FormField>

      {emailError && (
        <div
          id={`email-error-${mode}`}
          role="alert"
          className="text-sm text-red-400 mb-3"
        >
          {emailError}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bb-cta bb-radius-lg font-medium"
      >
        {loading
          ? "Working..."
          : (submitText ??
            (mode === "login" ? "Send sign-in link" : "Create account"))}
      </button>
    </form>
  );
};

export default AuthEmailForm;
