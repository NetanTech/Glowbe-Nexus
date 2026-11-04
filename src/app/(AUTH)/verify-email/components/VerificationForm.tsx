"use client";

import {
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import { useRouter, useSearchParams } from "next/navigation";

const OTP_LENGTH = 6;

export default function VerificationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "example@gmail.com";
  const next = searchParams.get("next");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [focused, setFocused] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = window.setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => window.clearInterval(id);
  }, [seconds]);

  function updateDigit(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const nextOtp = [...otp];
    nextOtp[index] = digit;
    setOtp(nextOtp);
    if (digit && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function onKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function onPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);
    if (!pasted) return;
    const nextOtp = Array(OTP_LENGTH)
      .fill("")
      .map((_, i) => pasted[i] || "");
    setOtp(nextOtp);
    const focusIndex = Math.min(pasted.length, OTP_LENGTH - 1);
    inputsRef.current[focusIndex]?.focus();
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (otp.join("").length < OTP_LENGTH) return;
    if (next === "reset-password") {
      router.push("/reset-password");
      return;
    }
    router.push("/verification-complete");
  }

  function resend() {
    if (seconds > 0) return;
    setSeconds(59);
    setOtp(Array(OTP_LENGTH).fill(""));
    inputsRef.current[0]?.focus();
  }

  return (
    <div>
      <h1 className="text-[28px] font-bold tracking-tight text-foreground sm:text-[32px]">
        Email verification
      </h1>
      <p className="mt-2 text-[14px] leading-relaxed text-muted">
        A verification code has been sent to{" "}
        <span className="font-semibold text-foreground">{email}</span>
      </p>

      <form onSubmit={onSubmit} className="mt-8">
        <div className="flex gap-2 sm:gap-3">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              inputMode="numeric"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              maxLength={1}
              value={digit}
              onChange={(e) => updateDigit(index, e.target.value)}
              onKeyDown={(e) => onKeyDown(index, e)}
              onPaste={onPaste}
              onFocus={() => setFocused(index)}
              className={`h-16 w-14 rounded-xl text-center text-lg font-semibold outline-none transition sm:h-20 sm:w-18 ${
                focused === index || digit
                  ? "border border-[#3B5BDB] bg-white"
                  : "border border-transparent bg-[#F3F4F6]"
              } focus:border-[#3B5BDB] focus:bg-white`}
              aria-label={`Digit ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-xl bg-brand px-4 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-soft"
        >
          Verify
        </button>
      </form>

      <p className="mt-5 text-center text-[13px] text-muted">
        Did not receive the otp?{" "}
        <button
          type="button"
          onClick={resend}
          className={`font-semibold ${seconds > 0 ? "text-[#3B5BDB]/70" : "text-[#3B5BDB]"}`}
          disabled={seconds > 0}
        >
          Resend
        </button>
        {seconds > 0 ? <span> in {seconds}s</span> : null}
      </p>
    </div>
  );
}
