# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/111ff0cd-8ec5-4b6b-8b03-6790c70d66e7

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/111ff0cd-8ec5-4b6b-8b03-6790c70d66e7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Local development

Scripts:

```sh
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run typecheck # TypeScript diagnostics (no emit)
npm run lint      # ESLint
npm run preview   # Preview prod build
```

## CI/CD

### GitHub Actions
- `.github/workflows/ci.yml`: Install, lint, typecheck, build on pushes/PRs to `main`.
- `.github/workflows/deploy.yml`: Deploy `dist/` to GitHub Pages on push to `main`.

### Jenkins
This repo includes a `Jenkinsfile` with stages: Checkout → Install → Lint → Typecheck → Build → Deploy (optional).

Deploy to GitHub Pages from Jenkins requires:
1. Jenkins credentials:
   - `github-pages-token`: GitHub token with `repo` scope.
   - `github-repo-fullname`: Secret text like `owner/repo`.
2. A pipeline parameter or env var `DEPLOY_PAGES=true` on main branch.
3. Enable Pages in repo Settings, source = `gh-pages` branch.

Project storyboard automation:
- `.github/workflows/project-auto.yml` adds new issues/PRs to your GitHub Project.
- Create repo secrets `PROJECT_URL` and `PROJECT_TOKEN` (token needs write access to that project).

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/111ff0cd-8ec5-4b6b-8b03-6790c70d66e7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
