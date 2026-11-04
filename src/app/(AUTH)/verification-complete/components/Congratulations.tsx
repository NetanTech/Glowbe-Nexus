"use client";

import { useRouter } from "next/navigation";
import { CheckIcon } from "../../components/AuthIcons";

export default function Congratulations() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-start">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand">
        <CheckIcon />
      </div>

      <h1 className="mt-6 text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        Successful
      </h1>
      <p className="mt-2 max-w-[340px] text-[14px] leading-relaxed text-muted">
        Your account has been successfully created. Make your first investment or course
      </p>

      <button
        type="button"
        onClick={() => router.push("/")}
        className="mt-8 w-full rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-soft"
      >
        Proceed to Dashboard
      </button>
    </div>
  );
}
