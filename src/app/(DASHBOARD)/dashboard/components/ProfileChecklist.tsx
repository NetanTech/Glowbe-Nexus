import Link from "next/link";

export type ProfileStep = {
  title: string;
  text: string;
  done: boolean;
  action?: string;
  href?: string;
};

const defaultSteps: ProfileStep[] = [
  {
    title: "Complete your profile",
    text: "Personalize your account with details",
    done: true,
  },
  {
    title: "Verify your identity",
    text: "Submit your BVN for verification",
    done: true,
  },
  {
    title: "Make your first investment",
    text: "Great opportunity with awesome returns",
    done: true,
  },
  {
    title: "Buy your first course or Mentorship",
    text: "Become familiar with the world of investment",
    done: false,
    action: "Browse courses",
    href: "/academy",
  },
];

export default function ProfileChecklist({ steps = defaultSteps }: { steps?: ProfileStep[] }) {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="flex items-center gap-3 rounded-xl border border-[#ECEEF2] bg-white px-3.5 py-3"
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
              step.done ? "bg-[#2F6BFF] text-white" : "bg-[#F2F4F7] text-[#667085]"
            }`}
          >
            {step.done ? "✓" : index + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[13px] font-semibold text-[#1B2430]">{step.title}</p>
            <p className="text-[12px] text-[#8B93A1]">{step.text}</p>
          </div>
          {step.href ? (
            <Link
              href={step.href}
              className="shrink-0 rounded-lg border border-[#E4E7EC] bg-white px-3 py-1.5 text-[12px] font-medium text-[#1B2430]"
            >
              {step.action}
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}
