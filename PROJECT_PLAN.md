# Project Plan: CS 399 Ecosite Portfolio

## ✅ Completed Phases

### 1. Infrastructure & Setup
- [x] Resolved development server issues and port conflicts.
- [x] Consolidated project structure (removed duplicate `ecosite` folder).
- [x] Configured `pnpm` workspace for `my-app`.
- [x] Installed `shadcn/ui` components (Button, Card, Badge).
- [x] Configured `vercel.json` for deployment.

### 2. Core UI & Design
- [x] Designed Full-Screen Homepage Layout.
- [x] Implemented Custom Color Theme (Orange `#ff6d00` & Purple `#9d4edd`).
- [x] Added Dark Mode support with `next-themes`.
- [x] Created Custom Vertical Slider for Theme Toggle.

### 3. Content Integration
- [x] **Resume Integration**: Linked "Download Resume" to PDF.
- [x] **GitHub Integration**: Linked "View My Work" to GitHub profile.
- [x] **Content Tailoring**: Updated Homepage with Resume details (Bio, Skills, Projects).
- [x] **Contact Page**: Created a clean, centered contact page with Email, GitHub, and LinkedIn links.

## 🚧 Current Status
- The application is build-ready (`pnpm build` passes).
- Git repository is prepared for push (`.gitignore` created).
- Ready for Vercel deployment.

## 📋 Next Steps

### Phase 4: Portfolio Showcase (Immediate Priority)
- [ ] Create individual pages for each project (ML UFC Predictor, Solar Calculator, Seed Suggestor).
- [ ] Add screenshots/demos to project pages.
- [ ] Link "View Project" buttons on homepage to these new pages.

### Phase 5: Blog System
- [ ] Configure MDX for writing blog posts.
- [ ] Create a Blog Listing page.
- [ ] Write first blog post (e.g., "Building this Portfolio").

### Phase 6: Deployment
- [ ] Push latest changes to GitHub.
- [ ] Connect repository to Vercel.
- [ ] Configure Environment Variables (`CONVEX_DEPLOYMENT`, `NEXT_PUBLIC_CONVEX_URL`).
- [ ] Verify live deployment.
