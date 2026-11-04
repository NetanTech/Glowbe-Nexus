"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeOffIcon, GoogleIcon } from "../../components/AuthIcons";

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    router.push(`/verify-email?email=${encodeURIComponent(email)}`);
  }

  return (
    <div>
      <h1 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        Create your account
      </h1>
      <p className="mt-2 text-[14px] text-muted">Enter your personal info to sign up</p>

      <button
        type="button"
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#F3F4F6] px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[#EBECEF]"
      >
        <GoogleIcon />
        Sign up with Google
      </button>

      <div className="my-6 flex items-center gap-3">
        <div className="h-px flex-1 bg-line" />
        <span className="text-[12px] font-medium uppercase tracking-wide text-muted">OR</span>
        <div className="h-px flex-1 bg-line" />
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-medium text-foreground">Name</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-xl border border-line bg-white px-4 py-3 text-sm outline-none transition focus:border-brand"
          />
        </label>

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
          <span className="mb-1.5 block text-[13px] font-medium text-foreground">Password</span>
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

        <p className="pt-1 text-[12px] leading-relaxed text-muted">
          By clicking continue, you agree to the{" "}
          <Link href="#terms" className="underline underline-offset-2">
            Terms of Use
          </Link>{" "}
          and{" "}
          <Link href="#privacy" className="underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>

        <button
          type="submit"
          className="w-full rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-soft"
        >
          Sign up
        </button>
      </form>

      <p className="mt-5 text-center text-[13px] text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-[#3B5BDB]">
          Login
        </Link>
      </p>
    </div>
  );
}
