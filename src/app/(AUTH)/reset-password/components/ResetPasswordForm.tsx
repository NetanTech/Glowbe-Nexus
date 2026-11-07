"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { EyeIcon, EyeOffIcon } from "../../components/AuthIcons";
import { authRequest, clearResetCode, readResetCode } from "@/src/lib/auth-api";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const password = String(form.get("password") || "");
    const confirm = String(form.get("confirm") || "");
    const email = searchParams.get("email") || "";
    const code = readResetCode();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setPending(true);

    try {
      await authRequest("/api/auth/reset-password", { email, code, password });
      clearResetCode();
      router.push("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not reset password");
      setPending(false);
    }
  }

  return (
    <div>
      <h1 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        New password
      </h1>
      <p className="mt-2 text-[14px] text-muted">Kindly enter your new password</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-foreground">New password</span>
          <div className="relative">
            <input
              required
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-line bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-brand"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-muted"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-foreground">
            Confirm password
          </span>
          <div className="relative">
            <input
              required
              name="confirm"
              type={showConfirm ? "text" : "password"}
              placeholder="Re-enter your password"
              className="w-full rounded-xl border border-line bg-white px-4 py-3 pr-11 text-sm outline-none transition focus:border-brand"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-muted"
              onClick={() => setShowConfirm((v) => !v)}
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </label>

        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={pending}
          className="btn-primary mt-2 w-full rounded-xl px-4 py-3.5 text-sm font-semibold disabled:opacity-70"
        >
          {pending ? "Saving..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
