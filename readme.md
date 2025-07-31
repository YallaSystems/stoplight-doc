# @essex/stoplight-docs

A lightweight middleware for serving beautiful Stoplight Elements OpenAPI documentation in [NestJS/Express](https://nestjs.com/) applications — with support for custom title and SVG favicon/logo.

---

## Features

- Serves interactive API docs using **Stoplight Elements**
- Plug-and-play NestJS Express middleware
- No controller/module setup needed

---

## Installation

```bash
npm i git+https://github.com/YallaSystems/stoplight-doc
```

## Upgrade Package

```bash
npm upgrade @essex/stoplight-docs
```

### Usage
```typescript
import { apiReference } from '@essex/stoplight-docs';

app.use('/api-docs', apiReference({
  spec: { content: openApiDocument },
}));
```

### Why we create this package
- We want to serve Stoplight Elements OpenAPI documentation in NestJS/Express applications with minimal setup.
- To avoid redundant code accross the projects.