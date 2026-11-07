import DashboardShell from "@/src/components/DashboardShell";

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>;
}
