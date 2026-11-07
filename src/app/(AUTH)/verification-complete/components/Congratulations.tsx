"use client";

import { useRouter } from "next/navigation";
import { CongratulationIcon } from "../../../../../public/svgs/svg";

export default function Congratulations() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center">
        <CongratulationIcon className="h-16 w-16" />
      </div>

      <h1 className="mt-6 text-center text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        Successful
      </h1>
      <p className="mt-2 max-w-[340px] text-center text-[14px] leading-relaxed text-muted">
        Your account has been successfully created. Make your first investment or course
      </p>

      <button
        type="button"
        onClick={() => router.push("/dashboard")}
        className="btn-primary mt-8 w-full rounded-xl px-4 py-3.5 text-sm font-semibold"
      >
        Proceed to Dashboard
      </button>
    </div>
  );
}
