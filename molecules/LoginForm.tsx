import React from "react";
import Input from "../atoms/Input";
import PasswordInput from "../atoms/PasswordInput";
import Button from "../atoms/Button";
import Link from "../atoms/Link";
import SocialButton from "../atoms/SocialButton";
import Alert from "../atoms/Alert";

type Props = {
  onSubmit?: (e: React.FormEvent) => void;
  loading?: boolean;
  error?: string | null;
  success?: string | null;
};

export default function LoginForm({ onSubmit, loading, error, success }: Props) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {success ? <Alert variant="success">{success}</Alert> : null}
      {error ? <Alert variant="error">{error}</Alert> : null}

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Username or Email</label>
        <Input placeholder="Username or Email" name="username" />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
        <PasswordInput placeholder="Password" name="password" />
      </div>

      <div className="flex items-center justify-between text-sm">
        <Link variant="primary">Forgot your password?</Link>
        <Link variant="muted">Create Account</Link>
      </div>

      <div>
        <Button type="submit" loading={loading} className="w-full">
          Sign In
        </Button>
      </div>

      <div className="pt-2">
        <div className="text-xs text-gray-500 text-center mb-2">Or continue with</div>
        <div className="space-y-2">
          <SocialButton provider="google" />
          <SocialButton provider="github" />
        </div>
      </div>
    </form>
  );
}
