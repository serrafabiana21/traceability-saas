# SustainTable Dashboard (Next.js + Tailwind CSS)

A clean and minimal sustainability dashboard for restaurants, built with Next.js and Tailwind CSS.

## Features

- Fixed left sidebar with core SaaS navigation.
- Top header showing restaurant identity and avatar.
- Dashboard view at `/restaurant` including:
  - Upload Documentation panel with drag-and-drop support for PDF and image files.
  - Circular Sustainability Score widget.
  - Verified Suppliers list with check indicators.
  - Recent Uploads table with realistic sample data.
  - CO2 Emissions Summary chart placeholder.

## Project Structure

```text
pages/
  _app.js
  index.js
  restaurant/
    index.js
components/
  Header.js
  RecentUploads.js
  ScoreWidget.js
  Sidebar.js
  UploadArea.js
  VerifiedSuppliers.js
styles/
  globals.css
tailwind.config.js
package.json
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open:

- Landing page: http://localhost:3000
- Restaurant dashboard: http://localhost:3000/restaurant

## Build for Production

```bash
npm run build
npm run start
```

