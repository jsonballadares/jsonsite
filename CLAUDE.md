# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A plain static personal resume/portfolio site — no build tools, no package manager, no framework. Open `index.html` directly in a browser to preview.

## Structure

- `index.html` — single-page resume with sections: Experience, Projects, Programming Skills, Education
- `styles.css` — all styles, including print and responsive (≤600px) breakpoints
- `script.js` — scroll-driven scale animation for the `.json-logo` SVG header (shrinks logo to 70% over the first 250px of scroll using a CSS custom property `--json-scale`)
- `assets/` — SVG/PNG company logos; each job's `<h3>` uses an inline `<img>` with a class like `.centene-logo`, `.circulo-logo`, `.accelirate-logo`, `.mdc-logo` to display the logo alongside the company name

## Logo pattern

Each job entry follows this pattern in `index.html`:

```html
<h3>Job Title<img src="assets/At_sign.svg" alt="at" class="at-sign"><img src="assets/company-logo.svg" alt="Company" class="company-logo"></h3>
```

The corresponding CSS class (e.g. `.centene-logo`) controls `height`, `max-width`, and `vertical-align` to size the logo inline with the text. Add new logos by dropping an SVG into `assets/` and adding a matching CSS class.
