const options = [
  { code: "USD", flag: "🇺🇸" },
  { code: "NGN", flag: "🇳🇬" },
] as const;

export default function CurrencyToggle() {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/40 bg-white/90 p-1 shadow-sm backdrop-blur">
      {options.map((option, index) => (
        <button
          key={option.code}
          type="button"
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            index === 0 ? "bg-brand text-white" : "text-foreground/70 hover:bg-surface"
          }`}
        >
          <span aria-hidden="true">{option.flag}</span>
          {option.code}
        </button>
      ))}
    </div>
  );
}
