# Sahayaka - AI-Powered Healthcare Automation

![Sahayaka Logo](https://img.shields.io/badge/Sahayaka-Healthcare%20AI-blue?style=for-the-badge)

A comprehensive healthcare startup platform focused on AI agentic workflow automation of administrative tasks. The platform creates comprehensive patient profiles, reduces clinician burden, and improves accuracy in healthcare operations.

## 🏗️ Monorepo Structure

This repository is organized as a monorepo containing multiple applications and packages:

```
sahayaka/
├── apps/
│   └── websites/
│       └── sahayaka.ai/          # Main marketing website
├── packages/                     # Shared packages (future)
├── docs/                        # Documentation (future)
└── tools/                       # Build tools and utilities (future)
```

## 🚀 Quick Start

### Prerequisites

- Node.js 22.0.0 or higher
- npm 10.0.0 or higher
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sahayaka
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```

3. **Start the website development server**
   ```bash
   npm run dev
   # or specifically for the website
   npm run dev:website
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Applications

### 🌐 Marketing Website (`apps/websites/sahayaka.ai`)

The main marketing website showcasing Sahayaka's AI-powered healthcare automation platform.

**Features:**
- Modern Next.js 13 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design
- SEO optimized

**Tech Stack:**
- Next.js 13+
- TypeScript
- Tailwind CSS
- React 18

**Commands:**
```bash
# Development
npm run dev:website

# Build
npm run build:website

# Production
npm run start --workspace=apps/websites/sahayaka.ai
```

## 🛠️ Development

### Workspace Commands

```bash
# Install dependencies for all workspaces
npm install

# Run development server for website
npm run dev

# Build all applications
npm run build

# Lint all code
npm run lint

# Type check all TypeScript
npm run type-check

# Clean build artifacts
npm run clean
```

### Working with Specific Apps

```bash
# Work on the website specifically
cd apps/websites/sahayaka.ai
npm run dev

# Or from root using workspace commands
npm run dev --workspace=apps/websites/sahayaka.ai
```

## 🎯 Platform Features

- **AI Agentic Workflow Automation** - Intelligent automation that learns and adapts
- **Comprehensive Patient Profiles** - Longitudinal health data management
- **Administrative Task Automation** - Streamlined scheduling, billing, and documentation
- **Clinician Burden Reduction** - Free up healthcare professionals for patient care
- **Improved Accuracy** - AI-powered validation and verification systems
- **Scalable Architecture** - Monorepo structure for future expansion

## 📊 Performance Metrics

- **75% Reduction** in administrative time
- **95% Improvement** in data accuracy
- **3x Faster** patient processing
- **500+ Healthcare Providers** served

## 🚀 Deployment

### Website Deployment

The marketing website can be deployed to various platforms:

**Vercel (Recommended):**
```bash
cd apps/websites/sahayaka.ai
vercel --prod
```

**Netlify:**
```bash
cd apps/websites/sahayaka.ai
npm run build
# Deploy the .next folder
```

**Docker:**
```bash
cd apps/websites/sahayaka.ai
docker build -t sahayaka-website .
docker run -p 3000:3000 sahayaka-website
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes in the appropriate workspace
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write TypeScript for all new code
- Use conventional commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📁 Project Structure

```
sahayaka/
├── apps/
│   └── websites/
│       └── sahayaka.ai/
│           ├── app/                 # Next.js app directory
│           │   ├── about/
│           │   ├── contact/
│           │   ├── features/
│           │   ├── solutions/
│           │   ├── globals.css
│           │   ├── layout.tsx
│           │   └── page.tsx
│           ├── components/          # React components
│           │   ├── Header.tsx
│           │   ├── Hero.tsx
│           │   ├── Features.tsx
│           │   └── ...
│           ├── package.json
│           ├── next.config.js
│           ├── tailwind.config.js
│           └── tsconfig.json
├── package.json                    # Root package.json with workspaces
├── README.md                       # This file
└── .gitignore
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` in the website directory:
```bash
cd apps/websites/sahayaka.ai
cp .env.example .env.local
# Edit .env.local with your values
```

### TypeScript Configuration

Each workspace has its own `tsconfig.json` that extends the base configuration.

## 📞 Support

For support and questions:
- **Email**: contact@sahayaka.ai
- **Phone**: +1 (555) 123-4567
- **Website**: [sahayaka.ai](https://sahayaka.ai)

## 📄 License

This project is proprietary and confidential. All rights reserved by Sahayaka.

## 🏥 About Sahayaka

Sahayaka is revolutionizing healthcare through AI-powered workflow automation. Our platform reduces administrative burden, improves accuracy, and enables healthcare professionals to focus on what matters most: exceptional patient care.

---

**Built with ❤️ for better healthcare**
