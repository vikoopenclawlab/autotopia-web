# nextjs-template-test

Full Next.js 14 application with complete CI/CD pipeline via GitHub Actions.

## Stack

- **Frontend**: Next.js 14 (App Router)
- **Backend API**: Next.js API Routes + Fastify
- **Database**: PostgreSQL + Prisma ORM
- **Container**: Docker/Containerfile (multi-stage build)
- **Orchestration**: Kubernetes (k8s manifests)
- **CI/CD**: GitHub Actions → GHCR (GitHub Container Registry)

## Quick Start

```bash
npm install
npx prisma generate
npm run dev
```

## Docker

```bash
docker build -t nextjs-template-test .
docker run -p 3000:3000 nextjs-template-test
```

## GitHub Actions

### Workflows

| Workflow | Trigger | Description |
|----------|---------|-------------|
| `CI` | PR, push to non-main | Lint, typecheck, test, build image |
| `Release` | Tag `v*` | Build, push to GHCR, security scan, create release |

### Required Secrets

| Secret | Description |
|--------|-------------|
| `GHCR_TOKEN` | PAT with `write:packages` scope for GHCR login |
| `KUBE_CONFIG` | Base64-encoded kubeconfig for k8s deploy |

## Image

```
ghcr.io/vikoopenclawlab/nextjs-template-test/nextjs:latest
ghcr.io/vikoopenclawlab/nextjs-template-test/nextjs:v1.0.0
```

## License

MIT

# AutoTopía 🚗
Plataforma de venta de autos - próximo release
