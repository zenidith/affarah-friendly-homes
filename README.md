# Affarah Friendly Homes

![Affarah Friendly Homes](public/logo.png)

A modern web platform designed to help people find their perfect home in Japan. Affarah Friendly Homes provides personalized housing solutions with a focus on customer satisfaction and cultural integration.

## About

Affarah Friendly Homes is a specialized real estate service dedicated to helping clients find comfortable housing in Japan. Our platform connects home seekers with vetted properties while providing cultural context and support throughout the entire process.

## Features

- **Personalized Property Matching**: Find homes that match your specific needs and preferences
- **Comprehensive Property Listings**: Browse through our extensive database of available homes
- **Expert Consultation**: Get advice from our team of real estate professionals
- **Cultural Integration Support**: Resources to help you adjust to living in Japan
- **Multilingual Support**: Available in multiple languages for international clients
- **Dark/Light Mode**: Comfortable viewing experience in any lighting condition

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

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/zenidith/affarah-friendly-homes.git
   cd affarah-friendly-homes
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development environment
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
affarah-friendly-homes/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Root application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global CSS
├── .eslintrc.json       # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, please reach out to our team at [contact@affarah-homes.com](mailto:contact@affarah-homes.com).
