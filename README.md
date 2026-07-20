# SAK Group of Institutions - Admin Portal & Website

Welcome to the official repository for the **SAK Group of Institutions** web application. This project is a full-stack Next.js application built with modern web technologies, serving as both the public-facing website and the secure administrative portal for managing college data.

## 🚀 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (Modular)
- **Database:** PostgreSQL (Neon Serverless)
- **ORM:** Prisma
- **Authentication:** NextAuth.js (v4)
- **Deployment:** Vercel

## ✨ Key Features

### 1. Public Website
- Modern, responsive, and highly aesthetic UI design.
- Dynamic course carousels fetching live data from the database.
- Quick Connect inquiry forms for prospective students.
- Fast, SEO-optimized static and dynamic pages.

### 2. Secure Admin Portal
- **Dashboard (`/admin`)**: Centralized view of recent inquiries and system metrics.
- **Course Management**: Add, edit, and manage course offerings dynamically.
- **Inquiry Management**: View and process student inquiries seamlessly.
- **Secure Authentication**: Protected routes with bcrypt password hashing and NextAuth session management.

## 📦 Getting Started Locally

To run this project on your local machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/NoviQ-Projects/SAK-Institute.git
cd SAK-Institute/frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env.local` and `.env` file in the `frontend/` directory with your PostgreSQL connection strings:
```env
DATABASE_URL="postgresql://username:password@hostname/dbname?sslmode=require"
NEXTAUTH_SECRET="your_secure_secret"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Setup the Database
Sync your Prisma schema with the database:
```bash
npx prisma db push
npx prisma generate
```

### 5. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ☁️ Deployment

This project is configured for seamless deployment on **Vercel**. 
Ensure that your Vercel project environment variables mirror your `.env` configuration. If using a connection pooler (like Neon), remember to append `&pgbouncer=true` to your `DATABASE_URL` in the Vercel dashboard.

---
*Developed & Maintained by [NoviQ Technologies]*
