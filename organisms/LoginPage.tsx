import React from "react";
import Logo from "../Logo";
import LoginForm from "../molecules/LoginForm";

type Props = {
  onSubmit?: (e: React.FormEvent) => void;
  loading?: boolean;
  error?: string | null;
  success?: string | null;
};

export default function LoginPage({ onSubmit, loading, error, success }: Props) {
  return (
    <div className="max-w-md w-full p-6 bg-white border border-border rounded">
      <div className="mb-6 flex items-center justify-center">
        <Logo />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-3 text-center">Sign in to your account</h2>
      <p className="text-sm text-gray-600 text-center mb-6">Use your email or continue with a social provider</p>

      <LoginForm onSubmit={onSubmit} loading={loading} error={error} success={success} />
    </div>
  );
}
