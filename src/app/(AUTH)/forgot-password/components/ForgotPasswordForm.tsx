"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    router.push(`/verify-email?email=${encodeURIComponent(email)}&next=reset-password`);
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

        <button
          type="submit"
          className="w-full rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-soft"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
