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
import { authRequest, saveResetCode, saveSession } from "@/src/lib/auth-api";

const OTP_LENGTH = 6;

export default function VerificationForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "example@gmail.com";
  const next = searchParams.get("next");
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [focused, setFocused] = useState(0);
  const [seconds, setSeconds] = useState(59);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [shake, setShake] = useState(false);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
  const lastTried = useRef("");
  const busy = useRef(false);

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

  useEffect(() => {
    const code = otp.join("");
    if (code.length < OTP_LENGTH) {
      lastTried.current = "";
      return;
    }
    if (busy.current || lastTried.current === code) return;

    lastTried.current = code;
    busy.current = true;
    setError("");
    setPending(true);

    (async () => {
      try {
        if (next === "reset-password") {
          saveResetCode(code);
          router.push(`/reset-password?email=${encodeURIComponent(email)}`);
          return;
        }

        const result = await authRequest<{
          accessToken: string;
          refreshToken: string;
        }>("/api/auth/verify-email", { email, code });

        if (result.data?.accessToken && result.data.refreshToken) {
          saveSession(result.data.accessToken, result.data.refreshToken);
        }
        router.push("/verification-complete");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not verify code");
        setShake(true);
        window.setTimeout(() => setShake(false), 360);
        setPending(false);
      } finally {
        busy.current = false;
      }
    })();
  }, [otp, email, next, router]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  async function resend() {
    if (seconds > 0 || email === "example@gmail.com") return;
    setError("");
    try {
      await authRequest(
        next === "reset-password"
          ? "/api/auth/resend-reset-code"
          : "/api/auth/resend-verification",
        { email }
      );
      setSeconds(59);
      setOtp(Array(OTP_LENGTH).fill(""));
      inputsRef.current[0]?.focus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not resend code");
    }
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
        <div className={`flex gap-2 sm:gap-3 ${shake ? "otp-shake" : ""}`}>
          {otp.map((digit, index) => (
            <input
              key={`${index}-${digit ? "filled" : "empty"}`}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              inputMode="numeric"
              autoComplete={index === 0 ? "one-time-code" : "off"}
              maxLength={1}
              value={digit}
              disabled={pending}
              onChange={(e) => updateDigit(index, e.target.value)}
              onKeyDown={(e) => onKeyDown(index, e)}
              onPaste={onPaste}
              onFocus={() => setFocused(index)}
              className={`h-14 w-12 rounded-xl text-center text-lg font-semibold outline-none transition duration-200 sm:h-16 sm:w-14 ${
                digit ? "otp-pop border border-brand-soft bg-white" : ""
              } ${
                focused === index || digit
                  ? "border border-brand-soft bg-white"
                  : "border border-transparent bg-[#F3F4F6]"
              } focus:border-brand-soft focus:bg-white`}
              aria-label={`Digit ${index + 1}`}
            />
          ))}
        </div>

        {error ? <p className="mt-4 text-[13px] text-red-600">{error}</p> : null}
        {pending ? (
          <p className="mt-4 text-center text-[13px] font-medium text-brand-soft">Verifying...</p>
        ) : null}
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
