"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authRequest } from "@/src/lib/auth-api";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    setError("");
    setPending(true);

    try {
      await authRequest("/api/auth/forgot-password", { email });
      router.push(
        `/verify-email?email=${encodeURIComponent(email)}&next=reset-password`
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send reset code");
      setPending(false);
    }
  }

  return (
    <div>
      <h1 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        Reset password
      </h1>
      <p className="mt-2 text-[14px] text-muted">
        Let&apos;s verify it&apos;s you. Kindly enter your email
      </p>

      <form onSubmit={onSubmit} className="mt-8 space-y-5">
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

        {error ? <p className="text-[13px] text-red-600">{error}</p> : null}

        <button
          type="submit"
          disabled={pending}
          className="btn-primary w-full rounded-xl px-4 py-3.5 text-sm font-semibold disabled:opacity-70"
        >
          {pending ? "Sending..." : "Continue"}
        </button>
      </form>
    </div>
  );
}
