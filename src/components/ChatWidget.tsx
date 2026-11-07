"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { LogoAiIcon, MessageAiIcon, SendIcon } from "../../public/svgs/svg";

type ChatMessage = {
  id: string;
  from: "bot" | "user";
  text: string;
  time: string;
};

const suggestions = [
  "How do I invest?",
  "Are returns guaranteed",
  "Explore plans",
  "Get help with my account",
  "Beginner friendly?",
  "Talk to the support team",
];

const replies: Record<string, string> = {
  "How do I invest?":
    "Open the Invest page, compare the plans, and create an account when you are ready to begin. You can also use the calculator to see how an amount could grow.",
  "Are returns guaranteed":
    "No. Figures on the site are projections, not a promise. The value of an investment can rise or fall.",
  "Explore plans":
    "The investment plans are on the Invest page. You can compare them there before you choose one.",
  "Get help with my account":
    "Sign in from the login page to manage your account. If you cannot get in, use Forgot password to reset it.",
  "Beginner friendly?":
    "Yes. Academy starts with Foundation, then Market Mastery, then Advanced Strategy, so you can begin from the basics.",
  "Talk to the support team":
    "Use Contact us in the footer and the support team can follow up on your account, course, or investment question.",
};

const welcome =
  "Hi there! 👋 I'm Glowbe, Glowbe Nexus's virtual assistant.\n\nI can help you explore our investment plans, understand how investing works, learn about projected growth, and get answers to your account or investment questions.\n\nWhat can I help you with today?";

function formatTime(date: Date) {
  return date
    .toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })
    .replace(" ", "");
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", from: "bot", text: welcome, time: "" },
  ]);
  const scroller = useRef<HTMLDivElement>(null);
  const asked = messages.some((message) => message.from === "user");

  useEffect(() => {
    const time = formatTime(new Date());
    setMessages((current) =>
      current.map((message) =>
        message.id === "welcome" && !message.time ? { ...message, time } : message
      )
    );
  }, []);

  useEffect(() => {
    if (!open) return;
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [messages, open]);

  function pushExchange(text: string) {
    const question = text.trim();
    if (!question) return;
    const now = formatTime(new Date());
    const answer =
      replies[question] ||
      "I can help with investment plans, courses, and your account. Ask me about those, or pick one of the options above.";

    setMessages((current) => [
      ...current,
      { id: `user-${current.length}`, from: "user", text: question, time: now },
      { id: `bot-${current.length}`, from: "bot", text: answer, time: formatTime(new Date()) },
    ]);
    setDraft("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    pushExchange(draft);
  }

  return (
    <div className="fixed bottom-6 right-4 z-[60] sm:bottom-24 sm:right-12">
      {open ? (
        <section
          role="dialog"
          aria-label="Glowbe Nexus assistant"
          className="flex h-[min(440px,calc(100dvh-7rem))] w-[min(280px,calc(100vw-2rem))] flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_12px_36px_rgba(15,23,42,0.16)]"
        >
          <header className="flex items-center justify-between bg-[#2A446B] px-3 py-2.5 text-white">
            <div className="flex items-center gap-1.5">
              <LogoAiIcon className="h-10 w-10" />
              <p className="text-[13px] font-semibold tracking-tight">Glowbe Nexus</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/70"
            >
              <span className="block h-px w-3 bg-white" />
            </button>
          </header>

          <div ref={scroller} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((message) =>
              message.from === "bot" ? (
                <div key={message.id} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2A446B]">
                    <LogoAiIcon className="h-8 w-8" />
                  </span>
                  <div className="min-w-0">
                    <p className="whitespace-pre-line rounded-2xl rounded-tl-md bg-[#F3F4F6] px-3 py-2.5 text-[12px] leading-relaxed text-foreground">
                      {message.text}
                    </p>
                    <p className="mt-1 text-[11px] text-muted">{message.time}</p>
                  </div>
                </div>
              ) : (
                <div key={message.id} className="flex justify-end">
                  <div className="max-w-[85%]">
                    <p className="rounded-2xl rounded-tr-md bg-[#F3F4F6] px-3 py-2.5 text-[12px] leading-relaxed text-foreground">
                      {message.text}
                    </p>
                    <p className="mt-1 text-right text-[11px] text-muted">{message.time}</p>
                  </div>
                </div>
              )
            )}

            {asked ? null : (
              <div className="flex flex-wrap gap-1.5 pl-8">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => pushExchange(suggestion)}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-[12px] text-foreground transition-colors hover:bg-[#F3F4F6]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="px-3 py-3 shadow-[inset_0_1px_0_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-2 rounded-lg bg-[#F3F4F6] px-4 py-2">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Type your message here..."
                aria-label="Message"
                className="min-w-0 flex-1 bg-transparent py-1.5 text-[13px] text-foreground outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="flex h-7 w-7 shrink-0 items-center justify-center"
              >
                <SendIcon className="h-7 w-7" />
              </button>
            </div>
          </form>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="ai-float flex h-12 w-12 items-center justify-center rounded-full bg-[#2A446B] shadow-[0_10px_30px_rgba(42,68,107,0.35)]"
        >
          <MessageAiIcon className="h-8 w-8" />
        </button>
      )}
    </div>
  );
}
