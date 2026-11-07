"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon, GoogleIcon } from "../../components/AuthIcons";
import { AuthApiError, authRequest, saveSession } from "@/src/lib/auth-api";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");
    setError("");
    setPending(true);

    try {
      const result = await authRequest<{
        accessToken: string;
        refreshToken: string;
      }>("/api/auth/login", { email, password });
      if (result.data?.accessToken && result.data.refreshToken) {
        saveSession(result.data.accessToken, result.data.refreshToken);
      }
      router.push("/");
    } catch (err) {
      if (
        err instanceof AuthApiError &&
        err.payload.data &&
        typeof err.payload.data === "object" &&
        "verification_required" in err.payload.data
      ) {
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
        return;
      }
      setError(err instanceof Error ? err.message : "Could not sign in");
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <h1 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        Welcome back
      </h1>
      <p className="mt-2 text-[14px] text-muted">Sign into your account</p>

      <button
        type="button"
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F3F4F6] px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[#EBECEF]"
      >
        <GoogleIcon />
        Sign in with Google
      </button>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-line" />
        <span className="text-[12px] font-medium uppercase tracking-wide text-muted">OR</span>
        <div className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-foreground">Email</span>
          <input
            required
            name="email"
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
          />
        </label>

        <label className="block">
          <div className="mb-1.5 flex items-center justify-between gap-3">
            <span className="text-[13px] font-medium text-foreground">Password</span>
            <Link href="/forgot-password" className="text-[13px] font-medium text-[#3B5BDB]">
              Forgot password?
            </Link>
          </div>
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

        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={pending}
          className="btn-primary mt-2 w-full rounded-xl px-4 py-3.5 text-sm font-semibold disabled:opacity-70"
        >
          {pending ? "Logging in..." : "Log in"}
        </button>
      </form>

      <p className="mt-5 text-center text-[13px] text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-[#3B5BDB]">
          Sign up
        </Link>
      </p>
    </div>
  );
}
