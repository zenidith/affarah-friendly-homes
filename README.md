# Affarah Friendly Homes

![Affarah Friendly Homes](public/logo.png)

A modern web platform designed to help people find their perfect home in Japan. Affarah Friendly Homes provides personalized housing solutions with a focus on customer satisfaction and cultural integration.

## Features

- **Personalized Property Matching**: Find homes that match your specific needs and preferences.
- **Comprehensive Property Listings**: Browse through our extensive database of available homes.
- **Expert Consultation**: Get advice from our team of real estate professionals.
- **Cultural Integration Support**: Resources to help you adjust to living in Japan.
- **Multilingual Support**: Available in multiple languages for international clients.
- **Dark/Light Mode**: Comfortable viewing experience in any lighting condition.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **UI Components**: Shadcn UI (based on Radix UI)
- **Routing**: React Router
- **State Management**: React Context API
- **Theme Management**: next-themes
- **Data Fetching**: TanStack Query
- **Form Handling**: React Hook Form with Zod validation
- **Testing**: Vitest & React Testing Library
- **Component Documentation**: Storybook

---

## Development

This section provides guidance for setting up and developing the project locally.

### Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd affarah-friendly-homes
    ```

2.  **Install dependencies:**
    This project uses `npm` for package management.
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:8080`.

### Available Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement (HMR).
- `npm run build`: Compiles and bundles the application for production.
- `npm run preview`: Serves the production build locally for previewing.
- `npm run lint`: Runs ESLint to check for code quality and style issues.
- `npm test`: Runs all unit and integration tests using Vitest.
- `npm run test:ui`: Starts the interactive Vitest UI for a visual test-running experience.
- `npm run storybook`: Starts the Storybook server to view and develop UI components in isolation.
- `npm run build-storybook`: Builds the Storybook documentation as a static site.

### Code Quality & Tools

This project is equipped with a suite of tools to ensure code quality, robustness, and maintainability.

#### Testing with Vitest

The project uses **Vitest** for unit and integration testing. Tests are co-located with the components they test (e.g., `Button.test.tsx` lives alongside `Button.tsx`).

- **Run all tests:** `npm test`
- **Run tests in watch mode with UI:** `npm run test:ui`

#### Error Handling

**React Error Boundaries** are implemented to gracefully handle rendering errors. A global boundary in `App.tsx` prevents the entire application from crashing, while page-level boundaries in `src/router/index.tsx` isolate errors to specific routes.

#### Design System with Storybook

**Storybook** serves as the interactive documentation for the project's UI components. It allows for developing and testing components in isolation, ensuring consistency and reusability.

- **Start Storybook:** `npm run storybook`
- **Location:** Stories are co-located with their components (e.g., `Button.stories.tsx`). This makes it easy to find, update, and contribute to the design system.

