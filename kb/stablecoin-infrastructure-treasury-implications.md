# Stablecoin Infrastructure: The Layered Stack and What It Means for Treasury

**Created:** 2026-02-27
**Source:** Dan Webber / FXC Intelligence LinkedIn post + Buyer's Guide
**Context:** FXC Intelligence published the first independent buyer's guide benchmarking stablecoin payments infrastructure vendors
**Tags:** stablecoins, cross-border payments, treasury, multi-rail, infrastructure

---

## Summary

Stablecoin infrastructure is not a single "alternative rail." It's a **layered stack of interoperating systems** that creates significant complexity for cross-border payments providers. FXC Intelligence published a first-of-its-kind buyer's guide benchmarking the leading vendors.

Two provider models are emerging:
1. **Modular point solutions** that address specific layers of the stack
2. **Vertically integrated, end-to-end infrastructure** providers

This distinction matters for treasury teams because as stablecoins move from experimentation to production, companies need to decide: assemble a stack from parts, or buy it whole?

---

## The Stablecoin Infrastructure Stack

The stack typically includes:

| Layer | Function | Example Vendors |
|-------|----------|----------------|
| **Issuance & custody** | Mint/burn stablecoins, hold reserves | Circle (USDC), Tether (USDT), Paxos |
| **Wallet & key management** | Secure storage, signing, access control | Dfns, Fireblocks |
| **On/off ramp** | Fiat-to-stablecoin conversion, bank connectivity | Bridge, BVNK, Yellow Card |
| **Settlement & routing** | Cross-chain movement, transaction execution | Fireblocks, Orbital, zerohash |
| **Compliance & monitoring** | KYC/AML, transaction monitoring, regulatory reporting | Chainalysis, Elliptic (embedded by most vendors) |
| **Orchestration** | Multi-rail routing, liquidity management, reconciliation | **This is where TreasuryPath fits** |

### Featured Vendors in FXC Buyer's Guide
Bitso Business, Bridge, BVNK, Dfns, Fipto, Fireblocks, Orbital, Triple-A, Yellow Card, zerohash

---

## Market Data: Stablecoins in Payments (2025-2026)

| Metric | Value | Source |
|--------|-------|--------|
| Actual stablecoin payment volume (2025) | **$390B** | McKinsey + Artemis Analytics |
| B2B payments share | ~$226B (60%) | McKinsey |
| B2B YoY growth | **733%** | McKinsey |
| Cross-border payments (total market) | $150T+ annually | G20/FSB |
| G20 cost target (remittances) | <3% avg by 2027, <1% by 2030 | FSB |

### Major Bank Stablecoin Activity (2025-2026)

The institutional adoption wave is real:
- **Bank consortium (Goldman, Deutsche Bank, BofA, Citi, UBS + others):** Exploring 1:1 reserve-backed digital money on public blockchains for G7 currencies
- **EU bank consortium (ING, UniCredit, CaixaBank + others):** Launching MiCAR-compliant EUR stablecoin
- **Japan (MUFG, SMBC, Mizuho):** Joint stablecoin issuance
- **DTCC:** Considering issuing a DTCC stablecoin
- **Fidelity:** Exploring operating a stablecoin or working with existing issuers
- **Amazon, Expedia:** Rumored stablecoin involvement (WSJ)

---

## Implications for TreasuryPath

### 1. Multi-Rail Complexity Is Exploding

Corporate treasury teams are going from managing 2-3 rails (bank wires, ACH, SWIFT) to potentially 5-8+ rails including stablecoins. Each stablecoin rail has its own:
- Settlement times and finality rules
- Compliance requirements by jurisdiction
- Liquidity pools and conversion costs
- Custody and key management overhead

**This is exactly the problem TreasuryPath's Cash Control Tower solves.** As the number of rails multiplies, the need for an orchestration layer that provides unified visibility, intelligent routing, and automated reconciliation across all of them becomes critical.

### 2. The "Stablecoin Sandwich" Pattern

Dan Webber coined #stablecoinsandwich to describe: fiat in → stablecoin transfer → fiat out. For this to work at scale, treasury teams need:
- Real-time visibility into stablecoin positions alongside fiat balances
- Automated FX conversion at optimal rates across both rails
- Reconciliation across on-chain and off-chain transactions
- Compliance and audit trails that span both worlds

No legacy TMS handles this. Kyriba doesn't. SAP Treasury doesn't. This is greenfield for TreasuryPath.

### 3. B2B Is the Beachhead

The McKinsey data is clear: B2B payments are 60% of stablecoin volume and growing 733% YoY. These are exactly TreasuryPath's target customers: companies managing multiple bank and PSP accounts with complex cash operations.

B2B stablecoin use cases that map to TreasuryPath features:
- **Supplier payments across borders** → Payment routing + FX optimization
- **Intercompany transfers** → Cash pooling + liquidity management
- **Treasury yield on idle stablecoin balances** → Sweep optimization
- **Multi-entity cash visibility** → Cash Control Tower

### 4. Modular vs. Integrated: We're the Orchestrator

The FXC framework of "modular point solutions vs. end-to-end providers" creates a strategic question. TreasuryPath doesn't need to be a stablecoin infrastructure provider. We need to be the **orchestration layer** that sits above all of them.

Position: **Rail-agnostic treasury intelligence.** Whether the payment flows over SWIFT, ACH, Wise, stablecoins, or any future rail, TreasuryPath provides the unified control plane.

### 5. The Compliance Moat

As banks issue their own stablecoins (Goldman consortium, EU consortium, Japanese banks), the compliance landscape fragments further. Each stablecoin will have different:
- Regulatory jurisdictions
- Reporting requirements
- Sanctions screening needs
- Audit trail standards

A treasury platform that bakes compliance verification into every transaction across every rail becomes essential. This reinforces the "liability layer" thesis from the BTV article.

---

## Competitive Landscape Impact

| Player | Stablecoin Strategy | Threat Level |
|--------|-------------------|-------------|
| **Kyriba** | None visible | Low (legacy architecture can't adapt quickly) |
| **Trovata** | Bank-data focused, no crypto/stablecoin | Low |
| **HighRadius** | AR/AP focused, no treasury-first stablecoin play | Low |
| **Fireblocks** | Infra layer, not treasury management | Complementary (potential integration) |
| **Bridge** | On/off ramp + API, not treasury orchestration | Complementary |
| **BVNK** | Stablecoin payments platform | Watch (could move upstream) |
| **Modern Treasury** | Payment ops, starting to add stablecoins | Medium (closest competitor on multi-rail) |

### Key Insight
Nobody is building the **treasury management + stablecoin orchestration** combination. The infra vendors handle the plumbing. The legacy TMS vendors ignore crypto entirely. The gap is the intelligence layer on top.

---

## Action Items

- [ ] Add stablecoin rail support to product roadmap (Wave 3-4 of AI chat features already includes payment routing)
- [ ] Explore integration partnerships with Bridge, BVNK, or Fireblocks for stablecoin connectivity
- [ ] Consider FXC Intelligence subscription for competitive intel on stablecoin infra vendors
- [ ] Add "stablecoin-ready" positioning to pitch deck and website
- [ ] Reach out to Dan Webber (FXC Intelligence) as potential content/research partner
- [ ] Draft content piece: "Why Your TMS Can't Handle Stablecoins (And What to Do About It)"

---

## References

- Dan Webber, LinkedIn post (Feb 2026): https://www.linkedin.com/posts/danwebberfx_stablecoininfrastructure-stablecoinpayments-activity-7429947899435909120-g5np
- FXC Intelligence Buyer's Guide: Stablecoin Payments Infrastructure (Feb 2026)
- FXC Intelligence: "How stablecoins took on cross-border payments: 2025 in data" (Dec 2025)
- McKinsey + Artemis Analytics: "Stablecoins in payments: What the raw transaction numbers miss" (Feb 2026) - $390B actual payment volume, $226B B2B
- The Payments Association: "Cross-border payments in 2026: Friction and reform" (Feb 2026)
- AlphaPoint: USDC Enterprise Guide (Feb 2026)
- Bank consortium press releases (Goldman, ING, MUFG, DTCC, Fidelity)
