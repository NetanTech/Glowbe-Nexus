const titles: Record<string, string> = {
  wallet: "Wallet",
  investments: "Investments",
  purchases: "My Purchases",
  support: "Help & Support",
  settings: "Settings",
};

export default async function DashboardSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const title = titles[section] || "Dashboard";

  return (
    <div>
      <h1 className="text-[22px] font-semibold tracking-tight text-[#1B2430] sm:text-[24px]">
        {title}
      </h1>
      <p className="mt-2 text-[14px] text-[#8B93A1]">This section is next. Home is ready to use.</p>
    </div>
  );
}
