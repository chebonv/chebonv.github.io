# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static portfolio website for Vincent Chebon, deployed via GitHub Pages at `chebonv.github.io`. No build tools, bundlers, or package managers — just plain HTML, CSS, and JavaScript.

## Development

Open `index.html` directly in a browser. No build or install steps required.

## Architecture

- **`index.html`** — Single-page site with sections: hero, about, projects, skills, experience, contact. Navigation uses anchor links (`#home`, `#about`, etc.).
- **`projects.html`** — Dedicated projects page showing all projects (no limit). Links back to `index.html` sections.
- **`js/main.js`** — All JS in one file. Handles:
  - Mobile nav toggle
  - Scroll-based active nav link highlighting
  - Sticky header shrink on scroll
  - Project card rendering from a `projects` data array (lines 127–219)
  - Project filtering by category (`web`, `mobile`, `website`)
  - `index.html` shows 3 projects; `projects.html` shows all (controlled by `isProjectsPage` check)
  - Contact form validation (no backend — just client-side alert)
- **`css/style.css`** — All styles in one file. Uses CSS custom properties defined in `:root` for the brown color theme, typography (Montserrat headings, Open Sans body), and spacing. Responsive breakpoints at 992px, 768px, and 576px.

## Key Patterns

- **Projects are data-driven**: The `projects` array in `js/main.js` is the single source for all project cards. To add/edit/remove projects, modify this array — not the HTML.
- **Project categories**: `web`, `mobile`, `website` — used for filter buttons.
- **External dependencies** (loaded via CDN): Font Awesome 6.4.0, Google Fonts (Montserrat, Open Sans). No local dependencies.
- **Images** go in `images/`, named `{project-slug}-projects-feature.png`. CV/resume lives in `files/`.
