import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <main className="dashboard-main">
        <Navbar />
        {children}
      </main>
    </div>
  );
}