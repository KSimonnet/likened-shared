# @ksimonnet/likened-shared

Shared constants and branding kit for Likened webapp and Chrome extension.

## Installation

```bash
npm install @ksimonnet/likened-shared
```

### GitHub Packages Authentication

This package is published to GitHub Packages. Ensure your `.npmrc` is configured:

```
@ksimonnet:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

Set `NPM_TOKEN` or `GITHUB_TOKEN` in your CI environment.

## Usage

#### Constants

```javascript
import { SEPARATOR } from "@ksimonnet/likened-shared";

// Use SEPARATOR for compound keys and entity URN parsing
const compound_key = `sales-api${SEPARATOR}salesapicompanies${SEPARATOR}post`;
```

#### Branding Styles

```html
<link rel="stylesheet" href="node_modules/@ksimonnet/likened-shared/dist/likened-brand-kit.css" />
```

Or in CSS:

```css
@import url("@ksimonnet/likened-shared/dist/likened-brand-kit.css");
```

## What's Included

- `src/constants.js` - Shared constants (SEPARATOR, etc.) used by both webapp and extension
- `dist/likened-brand-kit.css` - Shared branding tokens and typography

## What's NOT Included

⚠️ **ENTITY_SCHEMAS is extension-only domain knowledge**
- Ownership: chrome-extension domain (outside shared package API surface)
- Reason: Tightly coupled to extension's SQL-like query API and storage schema
- Usage: Extension-only (webapp does not use entity schemas)

## Contents

- `src/constants.js` - Shared constants (SEPARATOR, etc.)
- `dist/likened-brand-kit.css` - Branding kit
- `src/index.js` - Barrel export

## Versioning

This package uses semantic versioning. Current version: **1.0.1**

## Consumers

- [Likened webapp](https://github.com/KSimonnet/likened)
- Likened Chrome extension

## License

MIT
