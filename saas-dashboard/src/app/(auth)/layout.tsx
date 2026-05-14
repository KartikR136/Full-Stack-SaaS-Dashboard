export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="auth-layout">
      <div className="auth-branding">
        <h1>Orbit SaaS</h1>
        <p>Manage your teams, analytics, billing, and growth from one dashboard.</p>
      </div>

      <div className="auth-content">{children}</div>
    </div>
  );
}