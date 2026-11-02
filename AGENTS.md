AGENTS.md — StudioSpace Project Instructions
Read this file before inspecting, planning, editing, or generating code.
These instructions apply to the entire StudioSpace project unless the user explicitly changes them.

1. Project Overview
   Project name: StudioSpace
   Project type: Peer-to-peer creative workspace and production studio rental marketplace.

StudioSpace connects:

- Hosts / Studio Owners: list and manage creative spaces.
- Creators / Customers: discover studios, view details, and request bookings.
  Supported studio types include photography studios, film stages, podcast rooms, music suites, and art workshops.

The goal is a working, responsive full-stack application, not just a static UI demonstration. 2. Mandatory Technology Stack
Use the following stack:
Frontend

- Next.js with App Router
- TypeScript (.ts and .tsx) — TypeScript is required.
- Shadcn UI
- Tailwind CSS
- Lucide icons where suitable
  Backend
- Node.js
- Express.js
- TypeScript (.ts) — TypeScript is required.
- REST API architecture
  Database and authentication
- MongoDB
- BetterAuth with the MongoDB adapter, following the assignment requirements
- JWT-based protection using secure HTTPOnly cookies for protected server-side mutations
  Do not silently replace these technologies with alternatives such as Firebase, Supabase, Prisma, Mongoose, NextAuth, or a Next.js-only backend. If a technical incompatibility or version issue requires a change, explain the issue and ask the user before changing the agreed stack.

Use the existing package manager and project setup. Do not change package managers without asking. 3. Beginner-Friendly Coding Rules
The user is learning full-stack development. Write code in a clear, beginner-friendly style while maintaining correct engineering practices.

- Prefer straightforward solutions over clever or unnecessarily advanced patterns.
- Use clear, descriptive variable, function, component, and file names.
- Keep components and functions focused on one main responsibility.
- Break large components into smaller reusable components when it improves readability.
- Avoid unnecessary abstractions, complex generic types, design patterns, and premature optimisation.
- Do not compress code into difficult one-line expressions.
- Use async/await and ordinary try/catch blocks where appropriate.
- Add short comments for non-obvious logic, not comments on every line.
- Explain important TypeScript types and interfaces in simple terms when introducing them.
- Avoid any. Prefer clear interfaces, types, and safe handling of unknown.
- Do not use @ts-ignore or disable TypeScript checks to hide errors. If an exception is genuinely necessary, explain it first.
- Do not copy code blindly from tutorials. Adapt it to the existing project and explain the adaptation.
- Do not add libraries for tasks that can be handled simply with the existing stack.
- Keep accessibility, validation, security, and responsive behaviour intact. Beginner-friendly does not mean insecure or incomplete.

4. Explanation and Collaboration Rules
   The user wants to understand the code, not merely receive code changes.

Before making a substantial change:

1. Inspect the relevant existing files and current implementation.
2. Explain briefly in Bangla what you plan to do and why.
3. Identify any important dependency, route, or data-model impact.
4. Ask before destructive, broad, or architecture-changing work.
   After making a change, explain in Bangla:

- Which files were created or changed.
- What each important change does.
- Why the change is needed.
- How the user can test it.
- Any known limitation or remaining task.
  When debugging:

1. Read the full error and inspect the related code.
2. Explain the likely cause in simple Bangla.
3. Make the smallest appropriate fix.
4. Run relevant checks.
5. Report the result honestly. Never claim a test passed unless it was actually run and passed.
   Do not overwhelm the user with long explanations for tiny changes. Keep explanations clear and practical.
6. Git Rules — Strictly No Commits
   NEVER create a Git commit.

- Do not run git commit.
- Do not run git push.
- Do not amend, rebase, reset, cherry-pick, or rewrite Git history.
- Do not create commits automatically, even when a feature is complete.
- Do not stage files automatically unless the user explicitly asks.
- Do not change branches unless the user explicitly asks.
- You may inspect Git status and history when useful.
- You may suggest meaningful commit messages, but the user will create commits manually.
  The assignment requires at least 15 notable client-side commits and 8 notable server-side commits. The agent must help the user plan meaningful milestones and suggest commit messages, but must never create those commits.

6. Preserve the Existing Next.js Agent Rules
   The following block is required. Keep it intact and do not remove or rewrite it:
   <!-- BEGIN:nextjs-agent-rules -->This is NOT the Next.js you know
   This version has breaking changes — APIs, conventions, and file structure may all differ. Read the relevant guide in node_modules/next/dist/docs/ (resolved from this file's directory; in monorepos the next package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by next dev — verify at node_modules/next/dist/server/lib/generate-agent-files.js. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Before using a Next.js API or convention:

- Check the installed Next.js version.
- Read the relevant documentation available in the installed package at node_modules/next/dist/docs/.
- Follow the installed version's documentation, not assumptions from older tutorials.
- Do not invent APIs or use deprecated APIs when the installed documentation provides the correct approach.

7. Suggested Repository Structure
   Keep frontend and backend separate. Adapt to the actual repositories if they already exist; do not reorganise an existing project without asking.

Suggested structure:
studiospace/
├── client/
│ ├── src/
│ │ ├── app/
│ │ │ ├── (public)/
│ │ │ ├── (auth)/
│ │ │ ├── dashboard/
│ │ │ ├── studios/
│ │ │ ├── add-studio/
│ │ │ ├── my-listings/
│ │ │ └── my-bookings/
│ │ ├── components/
│ │ │ ├── layout/
│ │ │ ├── home/
│ │ │ ├── studios/
│ │ │ └── ui/
│ │ ├── lib/
│ │ ├── hooks/
│ │ └── types/
│ └── ...
│
└── server/
├── src/
│ ├── config/
│ ├── middleware/
│ ├── modules/
│ │ ├── studios/
│ │ ├── bookings/
│ │ └── users/
│ ├── routes/
│ ├── utils/
│ ├── types/
│ └── server.ts
└── ...
This is a suggested organisation, not permission to move existing files. Keep the actual project structure if it is already established and understandable. 8. Frontend Requirements
8.1 Shared layout
Create a consistent Navbar and Footer.

Navbar:

- StudioSpace logo with a suitable aperture or spotlight visual.
- Home (/)
- Explore Studios (/studios)
- How It Works
- About Us
- Logged-out state: Login and Register actions.
- Logged-in state: user avatar/profile menu with Dashboard, Add New Studio, My Studio Listings, My Bookings, and Logout.
- Sticky behaviour and active-route indication.
  Footer:
- Brand and short mission statement.
- Quick links and studio categories.
- Newsletter input UI.
- Social links, using the current X logo rather than the old Twitter bird.
- Copyright and terms links.
  8.2 Homepage (/)
  Build these sections:

1. Hero slider with at least three slides, clear headline, supporting text, and calls to action.
2. Featured Studios: fetch up to six records from the API. Show image, category, title, hourly rate, rating, location, and View Details action.
3. Browse by Categories: Photo Studio, Film Stage, Podcast Lounge, Music Suite, and Workshop. Selecting a category should open /studios with that category selected.
4. How Booking Works: Discover Spaces → Select Shoot Hours → Book Instantly → Create & Produce.
5. Host Guarantee and Creator Support: present only genuine platform capabilities. Do not claim protections or services that have not actually been implemented.
   8.3 Authentication pages
   Login page:

- Email and password fields.
- Login action.
- Forgot Password link may be displayed, but do not implement password reset unless the user later asks.
- Google sign-in.
- Link to Register.
  Registration page:
- Name, email, photo URL, password, and Register action.
- Password must include at least one uppercase letter, one lowercase letter, and at least six characters.
- Show clear field-level validation messages.
- Google sign-in.
- Link to Login.
- Do not implement email verification for the assignment unless later requested.
  After successful login, return the user to the intended protected page when possible; otherwise navigate to the home page. Show useful toast feedback for success and failure.
  8.4 Studio pages
- /studios: public studio discovery page with responsive grid, category filtering, and useful empty/loading states.
- /studios/[id]: public studio details page with full description, gallery, amenities, host information, reviews if available, and Book Workspace Now action.
- /add-studio: protected page to create a studio.
- /my-listings: protected page showing only the current user's studios.
- /studios/edit/[id]: protected edit page with pre-filled values.
- /my-bookings: protected page showing the current user's bookings.
  8.5 Add Studio form
  Include:
- Title
- Category
- Hourly rate
- Security deposit
- Maximum capacity
- Location/address
- Image URL or supported image upload
- Amenities
- Detailed overview
- Read-only host name and email from the authenticated session
  Store studio data in MongoDB through the Express API. Do not trust owner information submitted by the browser; derive ownership from the authenticated server-side user.
  8.6 Booking experience
  The details page should open a booking dialog/modal.
  Collect the studio and requested booking date/time information required by the implemented booking model.
  New bookings start with Pending status.
  Show the user's bookings with status labels:
- Pending
- Confirmed
- Completed
- Cancelled
  Allow cancellation of eligible Pending bookings. Enforce permissions on the server, not only in the UI.

9. Backend and API Requirements
   Use Express.js with TypeScript for the backend. Keep database access and business logic out of route handlers when a small module/service structure makes the code clearer.

Suggested API groups:
/api/auth
/api/studios
/api/bookings
Studio API capabilities:

- Create a studio.
- Get all studios, with optional category/filter/sort support.
- Get one studio by ID.
- Get the current user's studio listings.
- Update a studio.
- Delete a studio.
  Booking API capabilities:
- Create a booking.
- Get the current user's bookings.
- Cancel an eligible booking.
- Support the status workflow needed by the application.
  Use correct HTTP methods and status codes. Validate request bodies, route parameters, and query parameters. Return consistent JSON responses and useful error messages without exposing secrets or stack traces.

Use pagination for larger lists when appropriate. The homepage Featured Studios endpoint/query should return no more than six records. 10. MongoDB Data Requirements
Use the official MongoDB Node.js driver unless the existing project already has an approved MongoDB access approach. Do not introduce another ODM without asking.

At minimum, plan for these collections:

- users or the collection managed by BetterAuth
- studios
- bookings
  Studio documents should include appropriate fields such as:
- title
- category
- hourlyRate
- securityDeposit
- maxCapacity
- location
- image/gallery information
- amenities
- overview/description
- ownerId and ownerEmail
- createdAt and updatedAt
  Booking documents should include:
- studioId
- customerId
- hostId where needed
- booking date and start/end time
- calculated price where appropriate
- status
- createdAt and updatedAt
  Use consistent TypeScript types for database documents and API payloads. Validate MongoDB ObjectIds before querying. Add useful indexes for common queries, ownership lookups, and booking conflict checks.

Do not store passwords directly in application collections. Let the authentication system manage credentials securely. 11. Authentication and Security
Follow the assignment's BetterAuth + MongoDB Adapter + JWT/HTTPOnly-cookie requirements.

Before implementation:

- Inspect the installed BetterAuth version and read its current documentation.
- Read the current documentation for the installed Next.js and Express versions.
- Plan the authentication boundary between the Next.js client and Express API.
- Explain how the session/token is created, stored, sent, and verified.
- Do not invent a BetterAuth API or assume an old configuration example is current.
  Security rules:
- Use HTTPOnly cookies for authentication tokens where required.
- Use Secure cookies in production and an appropriate SameSite setting.
- Configure CORS for the exact frontend origin and credentials when cookies are used.
- Never put secrets or private keys in frontend code or NEXT*PUBLIC* variables.
- Validate authentication on every protected backend endpoint.
- Return 401 Unauthorized when the request is unauthenticated.
- Check resource ownership on the server before updating or deleting a studio.
- Check booking ownership before cancellation.
- Validate and sanitise user-controlled input.
- Do not trust userId, ownerEmail, price, or permissions supplied by the client.
- Avoid leaking internal errors, tokens, or sensitive user data.
- Consider CSRF protection appropriate to the chosen cookie-based authentication flow.
  The assignment explicitly calls for protection of:
- POST /api/studios
- DELETE /api/studios/:id
- POST /api/bookings
  Also protect update and other private endpoints.

If BetterAuth and the Express API need a custom integration, explain the design and verify it against official documentation before coding. Do not weaken security merely to make the integration easier. 12. Double-Booking Prevention
Before creating a booking, check existing Confirmed bookings for the same studio and date.

A time conflict exists when:
existingStart < newEnd
AND
existingEnd > newStart
Reject overlapping requests with a clear error message.

Do not rely only on a frontend check. Perform the check on the server. Consider concurrent requests and use an appropriate MongoDB transaction or atomic strategy where supported by the deployment configuration. Explain any limitation if the database environment does not support transactions. 13. UI, UX, and Design Rules
Design direction:

- Modern creative studio marketplace.
- Clear, premium-looking but usable interface.
- Consistent typography, spacing, colours, and button styles.
- Strong studio photography and consistent image ratios.
- Equal-sized cards in listing grids.
- Use Shadcn UI components where they help consistency.
- Do not blindly copy another marketplace. Use references for inspiration and create an original StudioSpace identity.
  Required UX:
- Responsive layouts for mobile, tablet, and desktop.
- Branded skeletons or loading indicators during data fetching.
- Friendly empty states with useful calls to action.
- Custom 404 page with a return-home action.
- Toast notifications using Sonner or an equivalent approved toast library.
- Use confirmation dialogs for destructive actions.
- Do not use browser alert() for success or error messages.
- Do not use Lorem Ipsum text.
- Forms must have labels, validation, disabled/loading states, and useful feedback.
- Provide accessible keyboard focus, semantic elements, and appropriate image alt text.
  Theme:
- Implement a complete light/dark theme toggle.
- The selected theme should apply consistently across the application.
- Avoid hard-coded colours that break one of the themes.

14. Optional Features
    Only implement these after all required features work:

- PDF invoice for confirmed bookings.
- Saved Studios Wishlist.
- Additional search and sorting features.
  Do not let optional features delay required assignment work.

15. Error Handling and Quality

- Use a consistent API error response format.
- Handle loading, success, empty, and error states in the UI.
- Avoid unhandled promise rejections.
- Validate environment variables at startup where practical.
- Keep .env files out of Git.
- Provide .env.example with placeholder values only, never real secrets.
- Do not log passwords, tokens, or private credentials.
- Ensure a direct page refresh works for application routes after deployment.
- A logged-in user should remain authenticated after refreshing a protected route.
- Test both successful and failing cases.

16. Testing and Verification
    After a meaningful implementation:

- Run the relevant frontend/backend TypeScript checks.
- Run linting if configured.
- Run the build when practical.
- Test the affected API endpoint.
- Test the UI at mobile and desktop sizes when relevant.
- Verify access control using both an owner and a different user where applicable.
- Verify booking overlap rejection.
- Report exactly which checks were run and their outcomes.
  Do not claim that a feature works until it has been tested. If a check cannot be run, state why.

17. Environment Variables
    Use environment variables for database URLs, authentication secrets, origins, and other private configuration.

Examples of variable names (adapt to the actual implementation):

Frontend:
NEXT_PUBLIC_API_URL=
Backend:
PORT=
MONGODB_URI=
DB_NAME=
CLIENT_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
JWT_SECRET=
NODE_ENV=
These are names/examples only. Confirm the actual requirements of the installed authentication version. Never fill in fake production secrets or commit real .env values. 18. Deployment and README
Prepare the frontend and backend for deployment on suitable platforms. Confirm production environment variables, CORS, cookies, API URLs, and database access.

The client README must include:

- Project name and description.
- Live website URL.
- Main features (at least five bullet points).
- Technology stack.
- Local setup steps.
- Examiner test credentials, only when the user provides or approves safe test credentials.
  Provide a separate backend README if the repositories are separate.

Do not invent a live URL or examiner credentials. 19. Git Milestones (Suggestions Only)
Help the user plan meaningful milestones for the assignment:

- At least 15 notable client-side changes.
- At least 8 notable server-side changes.
  Suggest clear commit messages when useful, but do not stage, commit, or push anything. The user performs all Git operations.

20. Working Process
    For each feature, follow this sequence:
1. Inspect the existing code and relevant installed documentation.
1. Explain the task and plan in Bangla.
1. Identify the files likely to change.
1. Implement the smallest complete, beginner-friendly solution.
1. Run relevant checks and fix errors caused by the change.
1. Summarise changed files, behaviour, and test results in Bangla.
1. Mention remaining work honestly.
1. Leave all changes uncommitted.
   Do not build the whole application in one uncontrolled change. Work in small, understandable milestones. Do not overwrite existing work without inspecting it first.
1. Priority Order
   Recommended implementation order:
1. Inspect repositories, versions, and current project structure.
1. Set up frontend and backend TypeScript foundations.
1. Build shared layout and responsive homepage.
1. Build studio listing and studio details using sample data.
1. Connect MongoDB and implement studio APIs.
1. Implement authentication and protected routes.
1. Implement studio create, update, and delete operations.
1. Implement booking creation and My Bookings.
1. Implement server-side double-booking prevention.
1. Implement JWT/HTTPOnly-cookie security and ownership checks.
1. Add theme toggle, loading states, empty states, and custom 404.
1. Test, document, and deploy.
1. Consider optional features only after required work is complete.
   Final rule: Build StudioSpace using Next.js, Shadcn UI, TypeScript, Node.js, Express.js, and MongoDB. Keep the code understandable for a beginner, explain changes, follow the assignment requirements, and never create Git commits or pushes.
   Explain everything in clear, simple English.
   Do not explain in Bangla unless I explicitly ask.
   Keep explanations beginner-friendly.
   Explain what you changed, why you changed it,
   and how I can test it.
