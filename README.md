# VoiceLink Landing Page

A modern, responsive landing page for VoiceLink built with React and Vite.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components for each section
│   ├── Header.jsx
│   ├── ProblemSection.jsx
│   ├── SolutionSection.jsx
│   ├── FeaturesSection.jsx
│   ├── ValuesSection.jsx
│   ├── CTASection.jsx
│   └── Footer.jsx
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point
```

## Deployment

The project is configured for static hosting (GitHub Pages, Netlify, etc.). Build the project and deploy the `dist` folder.

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to your gh-pages branch
```

### Netlify
Connect your Git repository and Netlify will automatically build and deploy from the `main` branch.

## Features

- **Voice Navigation**: Navigate using voice commands
- **Offline Capability**: Works without internet connectivity
- **Simple Interface**: Clean, intuitive design
- **Inclusive Design**: Accessible to all users

## Values

- **Inclusion**: Technology for everyone
- **Empowerment**: User agency first
- **Simplicity**: Reducing, not adding complexity
