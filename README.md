# 🏆 TeamProof — Evidence-Based Team Contribution Ledger

> Part of the **Antigravity 20-Project Systems Engineering Portfolio**

TeamProof tracks actual high-leverage engineering contribution (Architecture Decision Records, critical code reviews, technical debt hygiene, incident response) rather than naive, easily gamed vanity counts like lines of code or commit frequencies.

---

## 🏗️ Architecture

```
Git Commits / PRs / ADRs / Post-Mortems
                  │
                  ▼
┌──────────────────────────────────────────┐
│             AntiGamingFilter             │ ──> Purges Lockfiles, Bundles & Bloat
└──────────────────────────────────────────┘
                  │
                  ▼
┌──────────────────────────────────────────┐
│            ContributionLedger            │ ──> Multi-Dimensional Categorization
├──────────────────────────────────────────┤
│ 1. ARCHITECTURE_DECISION (ADRs/RFCs)     │
│ 2. PEER_REVIEW_LEVERAGE (Security Saves) │
│ 3. CODE_QUALITY_HYGIENE (Dead Code RIDs) │
│ 4. INCIDENT_RESOLUTION (Outage Triage)   │
└──────────────────────────────────────────┘
                  │
                  ▼
Interactive Engineering Radar (ui/index.html)
```

---

## 🚀 Quick Start

### 1. Run Tests
```bash
npm test
```

### 2. Launch Individual UI Dashboard
```bash
npm run ui
```
Opens the contribution ledger at `http://localhost:4010`.
