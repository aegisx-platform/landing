# AegisX Starter Kit

Enterprise-grade full-stack starter kit with **Angular 19** frontend and **Fastify** backend.

## Tech Stack

### Frontend (Angular 19)
- **Framework**: Angular 19 with Signals
- **UI Components**: PrimeNG + TailwindCSS
- **State Management**: Angular Signals (reactive)
- **Build Tool**: Vite (via Angular CLI)

### Backend (Fastify)
- **Framework**: Fastify 5.x (high-performance Node.js)
- **Database**: PostgreSQL with Knex.js
- **Validation**: TypeBox (runtime + TypeScript types)
- **API Docs**: OpenAPI/Swagger auto-generated
- **Real-time**: WebSocket support

### DevOps
- **Monorepo**: Nx workspace
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Multi-instance**: Automatic port assignment per folder

## Feature Templates

AegisX Starter includes ready-to-use feature templates:

### Security & Authentication
| Feature | Description | Status |
|---------|-------------|--------|
| JWT Authentication | Token-based auth with refresh tokens | Ready |
| RBAC | Role-Based Access Control | Ready |
| Password Reset | Email-based password recovery | Ready |
| API Keys | Service-to-service authentication | Ready |
| 2FA | Two-Factor Authentication | Template |

### Data Management
| Feature | Description | Status |
|---------|-------------|--------|
| CRUD Generator | Auto-generate full-stack CRUD modules | Ready |
| Bulk Import | Excel/CSV import with validation | Ready |
| Export | CSV, Excel, PDF export | Ready |
| Audit Trail | Complete change history | Ready |
| Soft Delete | Trash and restore functionality | Ready |

### Real-time Features
| Feature | Description | Status |
|---------|-------------|--------|
| WebSocket Events | Real-time CRUD updates | Ready |
| Notifications | Push notifications system | Template |
| Activity Tracking | User activity monitoring | Ready |

### Enterprise Features
| Feature | Description | Status |
|---------|-------------|--------|
| Multi-tenancy | Organization-based data isolation | Template |
| PDF Templates | Dynamic PDF generation | Ready |
| Widget Framework | Dashboard widget system | Ready |
| Settings Management | Application configuration | Ready |
| Monitoring | System health monitoring | Ready |

## CRUD Generator

Generate complete full-stack modules from database tables:

```bash
# Generate backend CRUD
pnpm run crud -- products --force

# Generate with import functionality
pnpm run crud:import -- budgets --force

# Generate with real-time events
pnpm run crud:events -- notifications --force

# Generate full package (all features)
pnpm run crud:full -- products --force
```

### What You Get

- **Backend**: Routes, Controllers, Services, Repository, Schemas
- **Frontend**: List, Form, Service, Types (Angular)
- **Auto-detection**: Unique constraints, FK references, validations
- **Error Handling**: 409 Conflict, 422 Validation errors

## Quick Start

```bash
# Install dependencies
pnpm install

# Setup environment (generates ports based on folder name)
pnpm run setup

# Start development
pnpm run dev:api    # Backend on auto-assigned port
pnpm run dev:admin  # Admin UI on port 4250
pnpm run dev:web    # Web app on port 4249
```

## Documentation

- [Getting Started](./docs/getting-started/)
- [Architecture Overview](./docs/architecture/)
- [CRUD Generator Guide](./docs/crud-generator/)
- [Feature Development Standard](./docs/development/)
- [API Reference](./docs/api/)

## Landing Page

**Live URL**: https://aegisx-platform.github.io/landing/

This landing page showcases AegisX UI components and the starter kit features.

## License

MIT
