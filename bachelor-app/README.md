# The Bachelor App

![Figma Design](docs/figma-screenshot.png)

## Overview

The Bachelor App is a modern, responsive front-end application built with Next.js, React, and Tailwind CSS. Its purpose is to explore academic topics, connect with professors, and help students discover their Bachelor degree interests. This repository contains the initial UI implementation based on our Figma design—featuring a clean layout, a placeholder hero section, and the foundation for future feature development.

## Features

- **Explore Topics**: Browse and learn about various academic fields.
- **Connect with Professors**: Reach out to faculty members for guidance and mentorship.
- **Discover Interests**: Find and refine your Bachelor degree focus areas.
- **Next.js** for fast server-side rendering and routing.
- **React** functional components for a modular UI.
- **Tailwind CSS** for utility-first, responsive styling.
- **Mobile-first** design to ensure compatibility across devices.

## Screenshot

Below is the initial screenshot from our Figma design, imported into the project under `docs/figma-screenshot.png`:

![Initial Figma Screenshot](docs/figma-screenshot.png)

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <your-repo>
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App in Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and visit `http://localhost:3000` to view the app.

### Building for Production

1. Build the optimized production bundle:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. Start the production server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Project Structure

```
bachelor-app/
├── docs/                # Project documentation and assets (e.g., Figma screenshot)
├── pages/               # Next.js pages
│   └── index.tsx        # Home page with placeholder hero section
├── components/          # Reusable React components
│   └── Layout.tsx       # Base layout component
├── public/              # Static files (images, fonts)
├── styles/              # Global and component-specific styles
└── README.md            # Project overview and instructions
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/<YourFeature>`.
3. Commit your changes: `git commit -m "feat(ui): add <YourFeature>"`.
4. Push to your branch: `git push origin feature/<YourFeature>`.
5. Open a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Original Figma design by [Your Name or Designer]
