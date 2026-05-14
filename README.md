# Full-Stack SaaS Dashboard

Production-inspired multi-tenant SaaS dashboard built with Next.js 14, TypeScript, PostgreSQL, Prisma, and NextAuth.js.

## Overview

This project simulates a modern SaaS product architecture with enterprise-style authentication, role-based access control, tenant-aware data modeling, analytics dashboards, billing workflows, and CI/CD automation.

Designed as a production-grade portfolio project demonstrating full-stack engineering practices.

---
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-green)
![License](https://img.shields.io/badge/license-MIT-purple)

## Features

- Multi-tenant SaaS architecture
- Role-based access control (RBAC)
- Google OAuth + credentials authentication
- Secure protected dashboard routes
- Team & organization management
- Subscription and billing module
- Analytics dashboard
- Audit logging
- API route architecture
- Jest unit testing
- GitHub Actions CI/CD pipeline
- Automated deployment to Vercel

---

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- React Server Components
- CSS Modules / Global Styling
- Recharts

### Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL
- NextAuth.js
- Zod Validation

### DevOps
- GitHub Actions
- Vercel
- Jest
- ESLint
- Prettier

---

## Folder Structure

```bash
saas-dashboard/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── hooks/
│   ├── services/
│   └── types/
│
├── prisma/
├── public/
├── tests/
├── .github/workflows/
