# WatchGrid Project Showcase Dashboard

## Overview
The **WatchGrid (Intelligent Border Video Analytics Platform)** Dashboard is a front-end showcase designed for hackathon presentations. It serves as a visual README to demonstrate how the platform transforms ordinary CCTV footage into actionable, context-aware intelligence using AI perception, tracking, and behavioural analytics.

This project does **not** rely on a heavy backend; it is a purely front-end visualization engineered to convey the core concepts of the Sentinel pipeline efficiently.

## Tech Stack
The dashboard is built using modern, fast, and lightweight web technologies:

- **Framework**: React 18
- **Build Tool**: Vite (for rapid development and optimized production builds)
- **Styling**: Vanilla CSS (CSS3) with custom CSS variables (No external CSS frameworks like Tailwind were used, ensuring full control over the bespoke, cinematic surveillance aesthetic).
- **Icons**: Lucide React (for clean, consistent, SVG-based technical icons).
- **Media**: HTML5 Video API (with dynamic aspect-ratio support for both 16:9 and 9:16 portrait videos).

## Architecture & Component Design
The application is structured as a Single Page Application (SPA) composed of modular React components:

- **`App.jsx`**: The main orchestrator that sequences the story flow.
- **`HeroSection`**: The cinematic entry point.
- **`ProblemSolutionSection`**: A comparative flow diagram explaining the "Why?".
- **`CapabilitiesGrid`**: A detailed, responsive grid outlining all AI modules.
- **`BehaviouralIntelligenceSection`**: A CSS-animated timeline component that visually explains the concept of temporal risk escalation.
- **`VideoDemonstrations`**: A custom-built, interactive HTML5 video player gallery. It dynamically handles multiple video sources and aspect ratios, displaying synchronized metadata (Risk level, active events, tracking IDs) alongside the video.
- **`ExplainableAlerts`**: A UI component simulating what an operator sees when a high-risk event is triggered.
- **`ArchitectureDiagram`**: A purely CSS/HTML-based flowchart depicting the data pipeline from ingestion to alert generation.
- **`TemporalIntelligence`**: Visual explanation of Sentinel's adaptive baseline technology.
- **`StatusAndFuture`**: A roadmap component separating the current prototype capabilities from future modular additions.

## Design System
The visual language was built from scratch to look like a modern AI/security technology showcase:
- **Theme**: Dark Mode (Glassmorphism, deep dark backgrounds with subtle grid patterns).
- **Colors**: 
  - Cyan (`#06b6d4`) for system/tracking info.
  - Red (`#ef4444`) for high-risk alerts and intrusions.
  - Yellow (`#eab308`) for rising risk warnings.
  - Green (`#22c55e`) for normal activity.
- **Typography**: `Inter` for general readability, combined with `Roboto Mono` for technical data overlays.

## Running the Project
To run the dashboard locally for development or presentation:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Vite development server:
   ```bash
   npm run dev
   ```
3. Open your browser to the local address provided by Vite (typically `http://localhost:5173`).

## Video Assets
The dashboard relies on local video assets for the demonstration section. These should be placed in the `public/videos/` directory:
- `virtual fence.mp4` (9:16)
- `Tracking Vehicles.mp4` (16:9)
- `Person Tracking.mp4` (16:9)
- `intent_normal.mp4` (9:16)
- `inten_Risk.mp4` (9:16)

*Note: The `VideoDemonstrations` component uses CSS `object-fit: contain` and a dynamic wrapper to ensure videos of any aspect ratio are displayed without cropping.*



Website link: https://hritikjena.github.io/IBVAP-Sentinels/
