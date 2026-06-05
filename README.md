# Static Portfolio Project

This is a static portfolio site built with **Next.js (App Router)** and **TypeScript**, optimized for **Vercel's Static Generation**.

## Features

- **Zero Deployment Cost:** Configured for `output: 'export'`, allowing it to be hosted on Vercel's free tier as a static site.
- **TypeScript:** Type safety for better developer experience.
- **App Router:** Using the latest Next.js features.

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see the result.

3. **Build for Production:**
   ```bash
   npm run build
   ```
   The static files will be generated in the `out/` directory.

## Deployment on Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the project into Vercel.
3. Vercel will automatically detect Next.js and use the `npm run build` command.
4. Ensure the **Build Command** is `next build` and the **Install Command** is `npm install`.

## License

This project is open-source and available under the MIT License.
