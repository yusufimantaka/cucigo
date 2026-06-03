# CuciGo — Laundry Pickup & Delivery Marketplace

> Laundry pickup & delivery — made easy for Anak Kos

CuciGo is a mobile-first laundry marketplace connecting university students, local laundry businesses, and delivery drivers. Built by Group 6 at Universitas Gadjah Mada (UGM) as part of a Software Engineering course.

## Architecture

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | SQLite via Prisma 7 |
| Auth | Cookie-based sessions, bcryptjs |

## Project Structure

```
cucigo/
├── prisma/
│   ├── schema.prisma       # 11 database models
│   ├── seed.ts              # Sample data seeding
│   └── dev.db               # SQLite database
├── src/
│   ├── actions/auth.ts      # Server actions (login, orders, status)
│   ├── app/
│   │   ├── page.tsx          # Splash / onboarding
│   │   ├── auth/login/       # Authentication
│   │   ├── student/
│   │   │   ├── home/         # Student dashboard
│   │   │   ├── order/        # New order flow
│   │   │   ├── order/[id]/   # Summary & payment
│   │   │   ├── orders/       # Order history
│   │   │   ├── orders/[id]/  # Tracking
│   │   │   ├── shared/       # Shared laundry groups
│   │   │   └── spending/     # Spending tracker
│   │   ├── driver/home/      # Driver dashboard
│   │   ├── partner/dashboard/# Partner dashboard
│   │   └── admin/dashboard/  # Admin panel
│   ├── components/
│   │   ├── ui/               # Button, Card, Chip, Input, StatusDot
│   │   └── layout/           # MobileFrame, NavBar, TabBar
│   └── lib/
│       ├── auth.ts           # Session management
│       ├── constants.ts      # Service types, helpers
│       └── db.ts             # Prisma client
└── docs/slides/              # LaTeX slide deck (UGM beamer theme)
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/yusufimantaka/cucigo.git
cd cucigo
npm install
```

### Database Setup

```bash
npx prisma generate
npx prisma migrate dev
npm run seed
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Seed Data

After running `npm run seed`, the following test accounts are available:

| Role | Email | Password |
|------|-------|----------|
| Student | `rizki@student.ugm.ac.id` | `password123` |
| Partner | `bunda@laundry.id` | `password123` |
| Driver | `budi@cucigo.id` | `password123` |
| Admin | `admin@cucigo.id` | `password123` |

## Routes

| Route | Description |
|-------|-------------|
| `/` | Splash / onboarding screen |
| `/auth/login` | Phone/email + OTP authentication |
| `/student/home` | Student dashboard with services & orders |
| `/student/order` | New order (service, weight, schedule) |
| `/student/order/[id]/summary` | Order summary & timeline |
| `/student/order/[id]/payment` | Payment method selection |
| `/student/orders` | Order history with filters |
| `/student/orders/[id]/tracking` | Real-time order tracking |
| `/student/shared` | Shared laundry (cost splitting) |
| `/student/spending` | Monthly spending tracker |
| `/driver/home` | Driver dashboard & deliveries |
| `/partner/dashboard` | Partner order management & analytics |
| `/admin/dashboard` | Admin system monitoring |

## Design System

The UI follows design tokens defined in `src/app/globals.css` mapped from the original HTML prototypes:

- **Primary:** Teal/Aqua (`oklch(55% 0.15 190)`)
- **Secondary:** Coral (`oklch(68% 0.16 35)`)
- **Mobile viewport:** 390×844px frame
- **Font stack:** System UI sans-serif
- **Component library:** Button, Card, Chip, InputField, StatusDot, NavBar, TabBar, MobileFrame

## Database Schema

| Model | Purpose |
|-------|---------|
| `User` | All user roles (Student, Partner, Driver, Admin) |
| `Address` | Saved addresses with GPS coordinates |
| `LaundryPartner` | Partner profiles with ratings & pricing |
| `PartnerPrice` | Per-service pricing (Wash Only, Wash+Iron, Express) |
| `Order` | Full order lifecycle |
| `OrderStatusHistory` | Status change audit trail |
| `SharedGroup` | Roommate laundry groups |
| `SharedGroupMember` | Group membership & cost allocation |
| `SharedOrder` | Link between orders and groups |
| `Notification` | Push notification records |
| `AuditLog` | Admin action logs |
| `PromoCode` | Discount codes (e.g., FIRST30) |

## AI-Assisted Software Engineering Process

This project was developed using a three-phase AI-assisted approach:

| Phase | Tool | Purpose |
|-------|------|---------|
| **1. Ideation & SRS** | Kimi K2.6 (Moonshot AI) | Requirements elicitation, IEEE 830 SRS document creation |
| **2. UI/UX Design** | OpenDesign + Kimi K2.6 | 13 HTML prototypes with design system tokens |
| **3. Development & Testing** | GLM 5.1 + OpenCode | Next.js implementation, Prisma schema, server actions, build verification |

The slide deck documenting this process is at `docs/slides/cucigo-se-process.tex` (requires LaTeX with the UGM beamer theme to compile).

## SRS Reference

The full Software Requirements Specification is available at `../srs-extracted.txt` in the parent repository and covers:

- 30 functional requirements (FR-1 through FR-30)
- 17 quality requirements (QR-1 through QR-17)
- 4 compliance requirements (CR-1 through CR-4)
- 4 user roles: Student, Partner, Driver, Admin

## License

This project is developed for educational purposes at Universitas Gadjah Mada.