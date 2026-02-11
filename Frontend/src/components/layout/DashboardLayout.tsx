import { AppSidebar } from "./AppSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main
        className={`min-h-screen transition-all duration-300 ${
          isMobile ? "pl-0 pt-16" : "pl-64"
        }`}
      >
        <div className="mx-auto max-w-7xl p-6">{children}</div>
      </main>
    </div>
  );
}
