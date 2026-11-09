"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";

const plans = [
  { id: "conservative", label: "Conservative Growth", rate: 0.19 },
  { id: "balanced", label: "Balanced Growth", rate: 0.22 },
  { id: "aggressive", label: "Aggressive Growth", rate: 0.27 },
] as const;

const durations = [
  { id: "1", label: "1 year", years: 1 },
  { id: "2", label: "2 years", years: 2 },
  { id: "3", label: "3 years", years: 3 },
  { id: "4", label: "4 years", years: 4 },
  { id: "5", label: "5 years", years: 5 },
] as const;

const currencies = [
  { id: "ngn", label: "Naira", symbol: "₦", locale: "en-NG" },
  { id: "usd", label: "USD", symbol: "$", locale: "en-US" },
] as const;

function formatMoney(value: number, currencyId: string) {
  const currency = currencies.find((item) => item.id === currencyId) ?? currencies[0];
  return new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currencyId === "usd" ? "USD" : "NGN",
    maximumFractionDigits: 2,
  }).format(value);
}

function SelectField({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12px] text-[#A1A1A1] sm:text-[13px]">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-[12px] border border-white/10 bg-[#242424] px-4 py-3.5 pr-10 text-[14px] text-white outline-none transition focus:border-white/25 sm:text-[15px]"
        >
          {children}
        </select>
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/45" aria-hidden>
          ▾
        </span>
      </div>
    </label>
  );
}

export default function InvestmentCalculator() {
  const [planId, setPlanId] = useState<string>(plans[0].id);
  const [durationId, setDurationId] = useState<string>(durations[0].id);
  const [currencyId, setCurrencyId] = useState<string>(currencies[0].id);
  const [amount, setAmount] = useState("100000");

  const currency = currencies.find((item) => item.id === currencyId) ?? currencies[0];

  const result = useMemo(() => {
    const plan = plans.find((item) => item.id === planId) ?? plans[0];
    const duration = durations.find((item) => item.id === durationId) ?? durations[0];
    const principal = Number(amount.replace(/,/g, "")) || 0;
    const total = principal * Math.pow(1 + plan.rate, duration.years);
    const growth = principal > 0 ? ((total / principal) - 1) * 100 : 0;

    return {
      principal,
      total,
      growth,
    };
  }, [amount, durationId, planId]);

  function onAmountChange(value: string) {
    const cleaned = value.replace(/[^\d.]/g, "");
    const [whole, fraction] = cleaned.split(".");
    const next =
      fraction === undefined ? whole : `${whole}.${fraction.slice(0, 2)}`;
    setAmount(next);
  }

  return (
    <section id="calculate" className="bg-black px-4 py-14 text-white sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="max-w-[520px]">
            <p className="text-[11px] font-medium tracking-[0.02em] text-white/60 sm:text-[12px]">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/60 align-middle" />
              Investment calculator
            </p>
            <h2 className="mt-4 text-balance text-[clamp(1.7rem,4vw,2.5rem)] font-semibold leading-[1.15] tracking-tight">
              See how your investment could grow.
            </h2>
          </div>

          <div className="max-w-[360px] lg:text-right">
            <p className="text-[13px] leading-relaxed text-[#A1A1A1] sm:text-[14px]">
              Choose an investment amount, currency, and tenure to compare the illustrative portfolio
              values for all three plans.
            </p>
            <Link
              href="/register"
              className="mt-4 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 lg:mt-5"
            >
              Get started
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 lg:mt-14 lg:grid-cols-2 lg:gap-5">
          <div className="rounded-[20px] bg-[#1A1A1A] p-5 sm:rounded-[24px] sm:p-6 md:p-7">
            <div className="space-y-4 sm:space-y-5">
              <SelectField label="Investment plan" value={planId} onChange={setPlanId}>
                {plans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.label}
                  </option>
                ))}
              </SelectField>

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <SelectField label="Duration" value={durationId} onChange={setDurationId}>
                  {durations.map((duration) => (
                    <option key={duration.id} value={duration.id}>
                      {duration.label}
                    </option>
                  ))}
                </SelectField>

                <SelectField label="Currency" value={currencyId} onChange={setCurrencyId}>
                  {currencies.map((currency) => (
                    <option key={currency.id} value={currency.id}>
                      {currency.label}
                    </option>
                  ))}
                </SelectField>
              </div>

              <label className="block">
                <span className="mb-2 block text-[12px] text-[#A1A1A1] sm:text-[13px]">Amount</span>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-[14px] text-white/55 sm:text-[15px]">
                    {currency.symbol}
                  </span>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    placeholder="Enter amount"
                    aria-label="Investment amount"
                    className="w-full rounded-[12px] border border-white/10 bg-[#242424] py-3.5 pl-9 pr-4 text-[14px] text-white outline-none transition placeholder:text-white/35 focus:border-white/25 sm:text-[15px]"
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[20px] bg-[#1A1A1A] p-5 sm:rounded-[24px] sm:p-6 md:p-7">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[12px] text-[#A1A1A1] sm:text-[13px]">Initial investment</p>
                <p className="mt-2 text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold tracking-tight">
                  {formatMoney(result.principal, currencyId)}
                </p>
              </div>
              <div>
                <p className="text-[12px] text-[#A1A1A1] sm:text-[13px]">Total growth percentage</p>
                <p className="mt-2 text-[clamp(1.25rem,2.5vw,1.75rem)] font-semibold tracking-tight">
                  {result.growth.toFixed(2)}%
                </p>
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <p className="text-[12px] text-[#A1A1A1] sm:text-[13px]">Total returns</p>
              <p className="mt-3 text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-none tracking-tight">
                {formatMoney(result.total, currencyId)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
