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

## Deployment

### GitHub Pages Deployment

This project is configured for easy deployment to GitHub Pages. Follow these steps to deploy:

1. **Create a GitHub Repository**
   - Create a new repository on GitHub named `affarah-friendly-homes`
   - Initialize it with a README if you prefer

2. **Push Your Code to GitHub**
   ```bash
   # Initialize git repository (if not already done)
   git init
   git add .
   git commit -m "Initial commit"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YOUR_USERNAME/affarah-friendly-homes.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select "GitHub Actions"
   
4. **Automatic Deployment**
   - The included GitHub Actions workflow will automatically build and deploy your site when you push to the main branch
   - Your site will be available at: `https://YOUR_USERNAME.github.io/affarah-friendly-homes/`

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
