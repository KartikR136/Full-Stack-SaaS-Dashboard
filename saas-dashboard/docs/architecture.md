\# Architecture Overview



\## Stack



Frontend:

\- Next.js 14

\- TypeScript

\- React Server Components



Backend:

\- Prisma ORM

\- PostgreSQL

\- NextAuth.js



Infrastructure:

\- GitHub Actions

\- Vercel



\## Design Decisions



\### Multi-Tenant Architecture



Each user belongs to an organization.



Tenant access is enforced through:



\- authenticated session checks

\- organization-aware database queries

\- role-based permission guards



\### Auth Strategy



Hybrid authentication:



\- Google OAuth

\- Email/password credentials



JWT sessions enriched with:



\- role

\- organizationId

