# Grants Contracts Management Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIGrantManagement`
- `AIContractLifecycleManager`
- `AISubrecipientMonitoring`
- `AIProgramReporting`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/grants-contracts-management-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:4730`

Seeded users:
- `admin@grants-contracts.local / admin123`
- `manager@grants-contracts.local / manager123`
- `analyst@grants-contracts.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/grants-contracts-management-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:4730 npm run smoke
```
