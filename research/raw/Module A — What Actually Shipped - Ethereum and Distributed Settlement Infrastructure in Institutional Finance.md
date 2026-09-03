# Module A — What Actually Shipped: Ethereum and Distributed Settlement Infrastructure in Institutional Finance

*Reference build for Indian institutional readers. Current as of September 1, 2026. FX convention: USD 1 = ₹88 (approximate RBI reference rate, late August 2026); rupee conversions rounded. Every figure carries its "as of" date and source tier. Anything older than six months is flagged. Source tiers per the master rules: T1 primary; T2 named data providers; T3 tier-1 financial press; T4 company blogs/press (promotional); T5 crypto media/aggregators (leads only).*

## TL;DR
- The production reality is narrow but real: tokenised **cash and short-term money** (bank-deposit tokens, tokenised money-market/Treasury funds, repo, stablecoins) is live at scale, while tokenised bonds, equities and trade finance remain pilots or have failed. JPMorgan Kinexys moves >$5bn/day (Dec 2025, T4/promotional); Broadridge DLR settled $8.0tn in July 2026 (T1); tokenised RWAs (ex-stablecoins) totalled ~$33.5bn (July 2026, T2 RWA.xyz).
- **Ethereum is the leading venue by value but not a monopoly.** RWA.xyz shows Ethereum hosting the largest single share of tokenised RWA value (~$17.3bn of the tracked total); the most defensible chain-level estimates put Ethereum mainnet at roughly **58–63% of tokenised RWA value** (Aug 2026, T5) — with at least one outlier estimate as low as ~34%. The highest-*volume* bank systems (Kinexys, Citi Token Services, Broadridge DLR, HSBC Orion, Goldman GS DAP) run on private permissioned ledgers, not public Ethereum — but **"permissioned" is not one stack**: multi-party securities, repo and depository settlement went to Canton (GS DAP, DLR, DTCC, Orion), while single-operator cash rails went to permissioned EVM or bank-built chains (Kinexys is Quorum-derived, i.e. Ethereum-lineage). See Part 5.
- **The graveyard is the most useful part for a skeptic:** TradeLens, we.trade, Marco Polo, Contour and the ASX CHESS replacement all failed — almost none for cryptographic reasons. They failed on consortium governance, competitor distrust, weak product-market fit and delivery complexity. The identical failure modes are latent in India's IBBIC/IBDIC consortium.

---

## PART 1 — ASSET MANAGEMENT AND FUNDS

### BlackRock — BUIDL (USD Institutional Digital Liquidity Fund)
**What it does:** A tokenised money-market-style fund holding US Treasuries, cash and repo, issued as an ERC-20-style token by Securitize acting as transfer agent. One token targets a stable $1.00 value; yield is distributed on-chain. Institutional cash-management vehicle; qualified purchasers only.
**Status: IN PRODUCTION.**
- Live date: March 2024, launched on Ethereum. (T4 Securitize/PRNewswire, promotional)
- AUM: crossed $1bn March 2025; peaked ~$2.9bn mid-2025; ~$2.87bn at 27 months (early 2026). On-chain AUM shown ~$1.73bn on the RWA.xyz treasuries page (June 2026). (T2 RWA.xyz; T3 Yahoo Finance; T5 Messari)
- Cumulative dividends ~$100m since inception, passing $2bn assets (Dec 30, 2025). (T5 Messari, UNVERIFIED at T1)
- Chains: launched Ethereum; expanded to Aptos, Arbitrum, Avalanche, Optimism, Polygon, Solana (Mar 2025), BNB Chain (Nov 14, 2025) — nine networks, cross-chain via Wormhole. Ethereum holds the majority of AUM. (T4 promotional; T3)
- Custody/access: Securitize transfer agent; allowlisted wallets only; KYC-gated; qualified purchasers.
- Claimed benefit: on-chain settlement, near-instant transfers, use as exchange collateral (Binance, Crypto.com, Deribit accepted BUIDL as collateral, 2025). (T5)

**FINDING:** The world's largest asset manager put a Treasury fund on public Ethereum, and the majority of its AUM sits on Ethereum mainnet (as of Nov 2025, T4/T5).
**INDIAN ANALOGUE:** A tokenised liquid/overnight/money-market mutual fund unit — e.g. an SBI, HDFC or ICICI Prudential liquid fund, with units recorded on a ledger rather than only at the RTA (CAMS/KFintech).
**WHO WOULD OWN IT:** An Indian AMC's digital/product team plus its RTA; supervised by SEBI. The budget sits with the AMC's product head and COO.
**WHAT BLOCKS IT TODAY:** SEBI mutual-fund units are recorded through RTAs and held in demat via NSDL/CDSL; there is no rule permitting a public-blockchain token to be the legal register of a mutual-fund unit. SEBI is a member of IOSCO's Tokenisation Working Group but has issued no enabling framework (as of Aug 2026, T3).
**WHAT WOULD HAVE TO CHANGE:** SEBI would need to recognise a DLT record as a valid register of ownership for MF units (amendment to SEBI (Mutual Funds) Regulations 1996 and RTA framework), or allow a tokenised feeder within an AIF wrapper.
**CONFIDENCE:** High that BUIDL is in production; medium on the exact current AUM (varies $1.7bn–$2.9bn across sources and dates).

### Franklin Templeton — FOBXX / BENJI
**What it does:** BENJI is the on-chain share token of the Franklin OnChain US Government Money Fund (FOBXX), a US-registered '40 Act mutual fund. One BENJI = one share at $1.00 NAV; the blockchain is the fund's official system of record. It is the only one of the large tokenised money funds wrapping a public registered mutual fund rather than a private vehicle.
**Status: IN PRODUCTION.**
- Live date: April 2021 (first US-registered mutual fund to use a public blockchain as system of record). (T4 Stellar/Franklin; T3)
- AUM: ~$742m (BNB Chain expansion coverage); ~$828m Q1 2026; BENJI suite $1.98bn AUM as of April 29, 2026. Cumulative P2P transfer volume >$211m as of March 31, 2026. (T4 Stellar press, promotional; T5)
- Chains: Stellar (primary), Ethereum, Polygon, Arbitrum, Aptos, Avalanche, Base, Solana, BNB Smart Chain — up to nine public chains. Allowlist model; transfers between non-allowlisted addresses blocked at contract level.
- Management fee 0.15%; 7-day effective yield 3.58% (April 8, 2026). (T5)
- Note: launched Intraday Yield (June 2025) and first tokenised UCITS fund in Luxembourg (2024, on Stellar).

**FINDING:** A US-registered mutual fund has used a public blockchain as its legal share register since 2021 (T4/T3) — five years of production operation, mostly on Stellar rather than Ethereum.
**INDIAN ANALOGUE:** A SEBI-registered money-market/liquid mutual fund using DLT as the register of record, distributed via an app (parallel: the Benji Investments app).
**WHO WOULD OWN IT:** AMC + RTA; SEBI-supervised.
**WHAT BLOCKS IT TODAY:** Same as BUIDL — no SEBI recognition of a DLT register for MF units; FOBXX's legal standing rests on US SEC transfer-agent rules that have no Indian equivalent.
**WHAT WOULD HAVE TO CHANGE:** SEBI framework recognising tokenised MF units; RBI comfort where money-market instruments are involved.
**CONFIDENCE:** High on production status and April 2021 launch; medium on precise current AUM.

### WisdomTree, Janus Henderson, Invesco, Apollo, Hamilton Lane
- **WisdomTree** Treasury Money Market Digital fund (WTGXX): ~$764.9m (T5 KuCoin/RWA.xyz cut). Status: IN PRODUCTION.
- **Janus Henderson** Treasury Fund (JTRSY): live and trading on Ethereum, individual $100k lots visible on RWA.xyz treasuries dashboard (Aug 2026). (T2 RWA.xyz) Status: IN PRODUCTION.
- **Invesco** Short Duration US Government Securities Fund (USTB): live on Ethereum, visible on RWA.xyz (Aug 2026). (T2) Status: IN PRODUCTION.
- **Apollo, Hamilton Lane:** tokenised private-market/credit fund feeders, drawn to Polygon for lower fees per RWA guide (T5). Status: LIMITED PILOT / IN PRODUCTION (small scale) — could not confirm exact AUM at T1-T3.

**FINDING:** Multiple regulated asset managers independently chose Ethereum (mainnet or L2) for tokenised Treasury and MMF products (2024–2026, T2 RWA.xyz).
**INDIAN ANALOGUE:** Debt/liquid fund and AIF (Cat II) feeder units on DLT.
**WHO WOULD OWN IT:** AMCs / AIF managers; SEBI-supervised.
**WHAT BLOCKS IT TODAY:** No SEBI tokenisation framework; the cleanest current Indian route is an AIF wrapper with blockchain-based unit tracking as a bookkeeping layer inside an already-regulated structure (T5 legal commentary).
**WHAT WOULD HAVE TO CHANGE:** SEBI tokenisation rules; clarity on custody of tokenised units.
**CONFIDENCE:** Medium — several products confirmed live on RWA.xyz, but AUM figures for private-market products are thin at T1-T3.

---

## PART 2 — BANKS AND MARKET INFRASTRUCTURE

### JPMorgan — Kinexys (formerly Onyx)
**What it does:** A private, permissioned blockchain platform (rebranded from Onyx, Nov 2024) for institutional digital payments and tokenised deposits (JPM Coin). Participants move funds held in JPMorgan deposit accounts near-real-time, 24/7, across borders. Also runs the Tokenized Collateral Network and, from 2025, a tokenised money-market fund (JLTXX) on Ethereum.
**Status: IN PRODUCTION.**
- Live since 2019/2020 (commercial launch 2020). (T4 JPMorgan)
- Volume: per Arif Khan, chief product officer for Kinexys Digital Payments, "Since inception, over US$3 trillion in transaction volume has been processed on the Kinexys platform, which processes on average more than US$5 billion daily in transaction volume" (Dec 2025). JPMorgan is targeting >$10bn/day, with average daily ~$7bn cited April 2026. (T4 JPMorgan promotional; T3 American Banker, PYMNTS)
- Context: J.P. Morgan Payments processes >$10tn/day overall — Kinexys is a small fraction (framing from American Banker, T3).
- Chains: primarily its own private permissioned chain; in 2025 deployed JPM Coin on Base (public L2) and launched JLTXX tokenised MMF (~$779m, Ethereum). (T2 RWA.xyz; T5)
- Named clients: Siam Commercial Bank, Qatar National Bank (QNB), Mitsubishi Corporation (first Japanese corporate, Mar 2026), Trafigura. (T3)
- Stated reason for private/permissioned: operates entirely within the regulated banking system; deposits move within JPMorgan accounts.

**FINDING:** The largest US bank runs a production blockchain payment rail at >$5bn/day, but chose a private permissioned ledger — not public Ethereum — for its core deposit-token business (Dec 2025, T4/T3).
**INDIAN ANALOGUE:** Tokenised bank deposits for 24/7 corporate treasury movement — precisely what the RBI's October 2025 tokenised certificate-of-deposit pilot on the wholesale CBDC (e₹-W) layer is testing.
**WHO WOULD OWN IT:** A large Indian bank's transaction-banking / GTS division (SBI, HDFC, ICICI, Axis), with RBI as supervisor and settlement-layer provider (e₹-W).
**WHAT BLOCKS IT TODAY:** India already routes this through RBI infrastructure. RBI's approach is a permissioned CBDC layer, not public chains. The blocker to a Kinexys-style *cross-border* 24/7 deposit rail is FEMA/cross-border settlement rules and the absence of a live cross-border CBDC bridge (RBI plans bilateral pilots only in 2026-27).
**WHAT WOULD HAVE TO CHANGE:** RBI would extend the e₹-W tokenised-deposit pilot to production and open cross-border corridors; FEMA operational clarity for tokenised-deposit settlement.
**CONFIDENCE:** High on Kinexys production status; the Indian analogue is directly evidenced by the RBI pilot.

### Citi — Citi Token Services (CTS)
**What it does:** Tokenised deposits on a private permissioned blockchain owned and operated solely by Citi, giving corporate/institutional clients 24/7 cross-border USD and EUR movement between Citi branches. Clients hold no tokens themselves; it is a back-end liquidity tool. Integrated with Citi's 24/7 USD Clearing.
**Status: IN PRODUCTION.**
- Moved from pilot to commercial October 2024. (T1 Citi press release)
- Live in US, UK, Singapore, Hong Kong; extended to Dublin (EUR) 2025. (T1 Citi)
- Named clients: Mars (corporate), Siam Commercial Bank (first FI client). CTS for Trade piloted with CB Fenton and GAC Panama Shipping. (T1 Citi)
- Volume: "billions of dollars in transaction value globally since launch in 2024" — no precise daily figure disclosed. (T1 Citi, but vague)
- Chain: private permissioned, Citi-owned. Stated reason: "operating entirely within the regulated banking system," safety/soundness.

**FINDING:** Citi runs tokenised-deposit cash movement in production across four-plus jurisdictions on a wholly Citi-owned private chain (2024–2025, T1).
**INDIAN ANALOGUE:** A single-bank tokenised-deposit liquidity network for a large Indian bank's global corporate clients (intra-bank, cross-branch).
**WHO WOULD OWN IT:** Transaction-banking division of a large Indian bank with international branches (SBI, ICICI, Axis); RBI-supervised; FEMA-relevant.
**WHAT BLOCKS IT TODAY:** Cross-border movement of tokenised deposits engages FEMA and correspondent-banking rules; no RBI framework yet for a single-bank cross-border tokenised-deposit product outside the CBDC pilot.
**WHAT WOULD HAVE TO CHANGE:** RBI operational approval; FEMA clarity.
**CONFIDENCE:** High on production; the "billions since 2024" figure is real but too vague to chart.

### HSBC — Orion and Gold Token
**What it does:** Orion is HSBC's private permissioned DLT platform for issuing and settling digitally native bonds end-to-end (issuance through redemption), operated out of Luxembourg and integrated with the HKMA's Central Moneymarkets Unit (CMU). HSBC Gold Token tokenises ownership of physical gold in HSBC's London vault, sold to retail in Hong Kong.
**Status: IN PRODUCTION.**
- Orion launched 2022; used for the HKMA/Hong Kong government multi-currency digital green bond and the Luxembourg government's first digital treasury certificates; chosen by the UK government for its Digital Gilt Instrument (DIGIT) pilot. (T1/T4 HSBC; T3)
- Gold Token: launched to Hong Kong retail April 2024 (first DLT-based retail product authorised by Hong Kong SFC); >$1bn in traded value since launch. (T4 HSBC promotional; T3)
- Chain: private permissioned; stated reason — integration with CMU/ICSD linkages and regulated settlement.

**FINDING:** HSBC has a production bond-tokenisation platform used by sovereign issuers (HKMA, Luxembourg, EIB, UK gilt pilot) and a retail tokenised-gold product with >$1bn traded (2024–2026, T4/T3).
**INDIAN ANALOGUE (bonds):** Tokenised G-Sec or state development loan issuance; India already has a highly digitised G-Sec system (RBI's E-Kuber / NDS-OM / CCIL). (gold): a tokenised Sovereign Gold Bond or digital-gold product.
**WHO WOULD OWN IT:** For G-Secs, RBI (Public Debt Office) and CCIL; for gold, RBI/government (SGB) or SEBI-regulated platforms.
**WHAT BLOCKS IT TODAY:** India's G-Sec settlement (CCIL, E-Kuber) already delivers near-atomic DvP with central-bank money; the marginal benefit of tokenisation is small, which is precisely why RBI is testing tokenised CDs, not G-Secs. For retail digital gold, SEBI/regulatory ambiguity over who can issue.
**WHAT WOULD HAVE TO CHANGE:** A demonstrated efficiency gain over CCIL/E-Kuber; RBI/SEBI issuance framework.
**CONFIDENCE:** High on Orion/Gold Token production; the Indian analogue confidence is medium — India's existing plumbing already solves much of what Orion solves.

### Goldman Sachs — GS DAP (and planned spin-out)
**What it does:** Goldman's production blockchain platform for issuing and settling tokenised bonds and money-market fund tokens, built on the Canton Network using Daml smart contracts, with atomic (T+0, DvP) settlement. Launched Nov 2022 via Project Venus (a €100m EIB digital bond). Goldman announced (Nov 2024) intent to spin GS DAP out into an independent, industry-owned company, targeted mid-2026, with Tradeweb as first strategic partner.
**Status: IN PRODUCTION (platform); spin-out ANNOUNCED ONLY (regulatory approvals pending as of April 2026).**
- Chain: Canton (privacy-enabled permissioned). Stated reason: sub-transaction privacy required by institutions; atomic DvP.
- Goldman participated in Digital Asset's $135m round (June 2025) alongside Citadel Securities, BNP Paribas, DTCC. (T3 CoinDesk; T5)

**FINDING:** Goldman built its production tokenisation platform on Canton, a permissioned privacy-focused ledger — explicitly *not* public Ethereum — because institutions demanded transaction privacy (2022–2026, T3/T5).
**INDIAN ANALOGUE:** A tokenised corporate-bond issuance-and-settlement platform for Indian debt capital markets.
**WHO WOULD OWN IT:** NSE/BSE, NSDL/CDSL, or a bank consortium; SEBI-supervised.
**WHAT BLOCKS IT TODAY:** India's corporate-bond settlement runs through NSDL/CDSL and clearing corporations; SEBI has no tokenised-security issuance framework. Privacy vs. SEBI's transparency/surveillance expectations is an unresolved design tension.
**WHAT WOULD HAVE TO CHANGE:** SEBI framework for DLT-based issuance and settlement of debt securities.
**CONFIDENCE:** High on platform production; the spin-out is announced-only.

### DTCC, Euroclear, Broadridge, Canton — market plumbing
- **Broadridge DLR (Distributed Ledger Repo):** IN PRODUCTION and the single largest institutional tokenised-RWA settlement venue by volume. Launched mid-2021; per Broadridge's Aug 10, 2026 release it "processed an average of $365 billion in daily repo transactions during July, with volumes totaling $8.0 trillion... the world's largest institutional platform for settling tokenized real assets" (+28% YoY); $7.5tn June 2026; ~$9tn Dec 2025. Horacio Barakat, Global Head of Digital Innovation: "With DLR, we're seeing tokenized finance move into a new phase of maturity." Named client: UBS. Runs on a private DLT (Daml/Canton lineage) interoperating with JPM Coin; DLR market data is now on the Bloomberg Terminal via Kaiko. (T1 Broadridge press releases via StockTitan/PRNewswire; T2 Kaiko/Bloomberg)
- **DTCC:** received an SEC No-Action Letter and chose the Canton Network to tokenise DTC-custodied US Treasuries; joined the Canton Foundation as co-chair alongside Euroclear (Dec 2025). Status: LIMITED PILOT moving toward production. (T3 CoinDesk)
- **Canton cross-border repo:** first cross-border intraday repo using tokenised UK gilts, with LSEG, Euroclear, DTCC, Tradeweb, Citadel Securities, Societe Generale, Archax, Cumberland DRW (Feb 2026). Status: LIMITED PILOT. (T3 CoinDesk)

**FINDING:** The highest-volume production tokenised-asset system in the world is Broadridge's repo platform at $8.0tn in July 2026 — and it runs on a permissioned ledger, not public Ethereum (T1).
**INDIAN ANALOGUE:** Tokenised tri-party repo / collateralised borrowing (India's CROMS/TREP and CCIL-operated repo markets).
**WHO WOULD OWN IT:** CCIL (Clearing Corporation of India) and RBI; RBI-supervised.
**WHAT BLOCKS IT TODAY:** CCIL already provides guaranteed central-counterparty repo settlement; the incremental benefit of a DLT repo layer in India is unproven, and RBI has not identified repo as a tokenisation priority (it chose CDs).
**WHAT WOULD HAVE TO CHANGE:** A demonstrated collateral-mobility or intraday-liquidity gain over CCIL; RBI sponsorship.
**CONFIDENCE:** High on Broadridge production volume; medium on Indian applicability.

---

## PART 3 — PAYMENTS AND STABLECOIN INFRASTRUCTURE

### Stablecoins (Circle USDC, Tether USDT, PayPal PYUSD)
**Status: IN PRODUCTION (as payment/settlement infrastructure).**
- Total stablecoin market cap ~$316bn as of June 12, 2026 (DefiLlama). USDT ~$187bn (~59%); USDC ~$75bn (~24%); together ~83%. (T2 DefiLlama)
- PYUSD (issued by Paxos for PayPal): peaked ~$4.2bn March 2026; contracted ~31–35% to ~$2.7–2.9bn by mid-2026 as incentives tapered; ~$1.8bn of it on Ethereum. Paxos converted to OCC national trust charter Dec 2025. (T2 DefiLlama; T3 CoinDesk; T5)
- Note: the US GENIUS Act (signed 2025) prohibits interest-bearing stablecoins, which is why tokenised MMFs (BUIDL, FOBXX) occupy the on-chain-yield niche instead. (T3/T5) This is an example of a source category that **conflates the infrastructure question with the asset question** — stablecoin "market cap" is a supply-in-circulation measure, not an investment valuation. Treated here as infrastructure only.

### Card networks and Stripe
- **Visa:** IN PRODUCTION. Stablecoin settlement (issuer/acquirer leg) reached ~$3.5bn annualised run-rate as of Nov 30, 2025; per Visa's Apr 29, 2026 release it reached a **$7bn annualized run rate, up 50% QoQ, across nine chains**, with Rubail Birwadker (global head of growth products) stating "Our partners are building in a multi-chain world, and they expect their options to reflect that reality." US launch Dec 16, 2025 with Cross River Bank and Lead Bank settling in USDC over Solana. First USDC settlement pilot 2021 (Crypto.com, on Ethereum). (T1 Visa press releases; T3)
- **Mastercard:** announced settlement support for USDC, PYUSD, RLUSD on June 3, 2026. Status: ANNOUNCED/early production. (T5/T3)
- **Stripe:** acquired Bridge for $1.1bn (announced Oct 2024, closed Feb 2025); launched Stablecoin Financial Accounts in 101 countries (May 2025); acquired Privy (June 2025); co-launched Tempo, a payments-focused EVM-compatible L1, with Paradigm (Sept 4, 2025), which raised $500m at a $5bn valuation (Oct 2025). Status: Bridge/accounts IN PRODUCTION; Tempo LIMITED PILOT (private testnet). (T3 CoinDesk, Ledger Insights; T5)

**FINDING:** Stablecoins are used as back-end settlement, not consumer checkout; Visa's stablecoin settlement is real but small ($7bn annualised, April 2026) against its total volume, and skews to Solana and Ethereum (T1 Visa; T3).
**INDIAN ANALOGUE:** UPI already provides instant 24/7 retail settlement; the stablecoin analogue is *cross-border* remittance and B2B settlement, not domestic payments.
**WHO WOULD OWN IT:** NPCI (UPI), banks, and remittance providers; RBI-supervised.
**WHAT BLOCKS IT TODAY:** India has no legal framework for INR stablecoins; the RBI has consistently favoured the CBDC (e₹) over private stablecoins, and FEMA restricts foreign-currency stablecoin use. Domestically, UPI removes most of the pain stablecoins solve elsewhere.
**WHAT WOULD HAVE TO CHANGE:** RBI/Parliament stablecoin legislation (the Parliamentary Standing Committee's 36th report, tabled July 23, 2026, urged phased VDA regulation under SEBI or RBI); FEMA amendment for cross-border use.
**CONFIDENCE:** High on global stablecoin production; high that India's domestic case is weak because of UPI.

---

## PART 4 — CORPORATE AND SOVEREIGN

- **European Investment Bank (EIB):** issued a €100m digital bond (Project Venus, Nov 2022) on GS DAP/Canton, settled T+0 with experimental French/Luxembourg wholesale CBDC. By Jan 2025 EIB digital bonds made up a large share of global tokenised-bond volume. Status: IN PRODUCTION (repeat issuer). (T5/T3)
- **Hong Kong government:** multi-tranche multi-currency tokenised green bonds via HSBC Orion; >200 investors in the 2025 issuance. Status: IN PRODUCTION. (T4 HSBC; T3)
- **UK government:** chose HSBC Orion for its Digital Gilt Instrument (DIGIT) pilot. Status: ANNOUNCED/pilot. (T4 HSBC)

---

## PART 5 — PATTERN ANALYSIS

**Recurrent primitives, ranked by number of institutions independently adopting:**
1. **Tokenised cash / deposit tokens and stablecoin settlement** (JPMorgan, Citi, Visa, Mastercard, Stripe, Circle, Tether, PayPal, RBI e₹-W) — the single most-adopted primitive. Cash is the leg everyone needs first.
2. **Tokenised money-market/Treasury funds** (BlackRock, Franklin Templeton, WisdomTree, Janus Henderson, Invesco, JPMorgan JLTXX) — the most-adopted *asset* primitive.
3. **Atomic settlement / DvP** (Goldman GS DAP, HSBC Orion, Broadridge DLR) — recurring design goal.
4. **Tokenised collateral / intraday repo** (Broadridge DLR, JPMorgan TCN, Canton cross-border repo) — highest *volume* but fewer distinct owners.
5. **Tokenised bonds** (EIB, HKMA, UK, HSBC, Goldman) — many issuances, mostly one-off or pilot.
6. **Verification without disclosure / privacy** (Canton adopters: Goldman, DTCC, Euroclear, HSBC) — the reason permissioned ledgers keep winning at banks.
7. **Trade finance / shared registry** — the most-attempted and most-failed (see graveyard).

**Which asset classes moved first, and why.** Money-market and Treasury products moved first. The hypothesis that this happened because *credit quality was uncontroversial* — not because the technology fit better — is well supported: RWA.xyz shows Treasuries and private credit dominating, with >50% of RWA value in government-backed instruments (2026). A $1.00-NAV Treasury fund needs no price discovery, no complex corporate actions, and carries near-zero credit ambiguity, so the token is a thin wrapper over an uncontroversial asset. The technology is not a better fit for MMFs than for equities; the *legal and credit simplicity* is. This is the single most important pattern for a skeptic: tokenisation went where the *law and credit were easy*, not where the technology was uniquely suited.

**Public vs private, quantified (initiatives found IN PRODUCTION in this module):**
- On **public Ethereum (mainnet or L2)**: BUIDL, WisdomTree, Janus Henderson, Invesco, JPMorgan JLTXX, PYUSD/USDC (as tokens), Visa settlement (partly Ethereum).
- On **public non-Ethereum chains**: BENJI (Stellar primary), Visa/PYUSD (Solana), BUIDL (multi-chain incl. BNB, Solana).
- On **permissioned ledgers — Canton/Daml lineage**: Goldman GS DAP (Canton), Broadridge DLR (Canton lineage), DTCC (Canton), HSBC Orion (Daml).
- On **permissioned ledgers — Ethereum-lineage or bank-proprietary**: JPMorgan Kinexys core (Quorum-derived EVM), Citi CTS (Citi-built, stack undisclosed), RBI e₹-W (CBDC layer, stack undisclosed).
- **Pattern:** *funds and stablecoins* chose public chains; *banks and market infrastructure* chose permissioned ledgers — but the permissioned camp is **not one stack, and the split falls along the number of counterparties in a single settlement**. Multi-party securities, repo and depository settlement went to **Canton**, where many counterparties must settle one atomic transaction while each sees only its own leg (GS DAP, Broadridge DLR, DTCC, HSBC Orion). Single-operator cash rails went to **permissioned EVM or bank-proprietary chains**, where the privacy boundary is the institution's own perimeter and no cross-counterparty confidentiality problem arises (Kinexys, Citi CTS, e₹-W). Kinexys — >$3tn cumulative, ~$5–7bn/day — descends from Quorum, an Ethereum client, so the largest bank-run *cash* rail in this module is Ethereum-lineage rather than Canton. The highest-*volume* systems are permissioned; the highest-*value tokenised-asset* pool (RWA) is on public Ethereum.
- **Sourcing caveat on the split:** the Canton/Daml attributions are sourced above (GS DAP T3/T5, Broadridge T1, DTCC T3, HSBC T3). **Kinexys' current stack is UNVERIFIED** — the Quorum lineage is well documented for Onyx, but the Nov 2024 Onyx→Kinexys rebrand may have come with stack changes that are not public, and Citi has never disclosed CTS's underlying technology. Confirm with a JPMorgan/Citi disclosure (T1/T4) before citing the lineage claim externally; the *behavioural* claim (single-operator rails did not choose Canton) stands on the deployment record regardless.
- **Live counter-trend, stated so the split is not overclaimed:** Module E records JPMorgan announcing (7 Jan 2026) a plan to issue JPM Coin **natively on Canton**. If that ships, the cash layer starts migrating toward Canton too and the two-layer split becomes a snapshot of 2020–2026 rather than a stable structure. It is ANNOUNCED ONLY as of this cut. *Check before publication:* whether JPM Coin is live on Canton, and whether Kinexys' own chain is being retired or kept alongside it.

**Ethereum's specific share.** RWA.xyz's global overview shows Ethereum with 2,090 RWAs and ~$17.3bn total value — the largest single network, ahead of BNB Chain (~$5.7bn), Solana (~$4.1bn), Stellar (~$3.3bn). On the share question, sources disagree and the number should be handled carefully: yellow.com (Aug 2026) estimates Ethereum hosts **~58–63% of tokenised RWA value** by chain, citing DefiLlama's RWA breakdown and Steakhouse Financial's on-chain analytics; The Block (Feb 17, 2026) put mainnet at "almost 34% of total onchain RWA value." An earlier ~68% estimate circulated but is an outlier and should be avoided. For tokenised Treasuries specifically, Ethereum carried ~$7.1bn of ~$34.67bn, ahead of BNB Chain ~$4.7bn and Stellar ~$1.2bn. **Crucially, the measure changes the answer:** by *value* and *issuer count* Ethereum leads; but by *tokenised equity* BNB Chain overtook Ethereum ($1.2bn vs ~$800m, Aug 31, 2026). Total on-chain RWA value ex-stablecoins was ~$33.5bn (RWA.xyz, July 2026). **Staleness flag: all RWA figures move monthly; re-check RWA.xyz before any publication.** (T2 RWA.xyz; T5 yellow.com, The Block for share estimates)

**Source conflation warning:** Several sources (e.g. cryptodaily, yellow.com) discuss Ethereum's RWA share alongside ETH price and "price follow-through." That conflates the infrastructure question (where tokenised assets settle) with the asset question (ETH as an investment). They are separate: Ethereum can host the majority of tokenised RWA value regardless of ETH's price. This report addresses only the infrastructure question.

---

## PART 6 — THE GRAVEYARD (disconfirming evidence)

### TradeLens (Maersk + IBM)
Promised: a shared blockchain (Hyperledger Fabric) for global shipping documents and supply-chain data. Funded by Maersk and IBM; launched 2018. Stopped: wound down, offline by Q1 2023. **Stated reason:** "not reached the level of commercial viability necessary… as an independent business" (Rotem Hershko, Maersk). **Probable reason:** rivals would not route sensitive data through a platform carrying a competitor's (Maersk's) name; failure of *neutral governance*, not technology. (T3 Supply Chain Dive, The Register, Maersk) **Status: WOUND DOWN (Q1 2023).**

### we.trade
Promised: SME trade-finance digitisation for a 12-bank European consortium (HSBC, Deutsche Bank, Santander, SocGen, UBS, UniCredit, KBC, Nordea, Rabobank, CaixaBank, Erste, IBM) on Hyperledger Fabric. Stopped: insolvency/liquidation mid-2022. **Stated reason:** transaction growth "not quick enough to ensure the network effect needed." **Numbers:** lost >$8m on ~$4m revenue in 2020; only two of the shareholder banks fully deployed. (T3 S&P Global, Ledger Insights, Futurum) **Status: WOUND DOWN (2022).**

### Marco Polo Network (TradeIX)
Promised: receivables/payables trade finance for ~30–45 banks on R3 Corda. Backers: Commerzbank, BNY Mellon, ING Ventures, BNP Paribas, Mastercard, SMBC. Stopped: insolvency Ireland, Feb/Mar 2023. **Numbers:** liabilities exceeded assets by €2.5m; total debt €5.2m; cumulative losses ~$85m by 2021; a $12m Bank of America deal collapsed after FTX's failure. **Probable reason:** no product-market fit; documentary trade finance is paper- and manual-process-heavy, hard to integrate. (T3 Ledger Insights, FinTech Futures, Irish Times) **Status: WOUND DOWN (2023).**

### Contour
Promised: letter-of-credit digitisation (nine-bank backing). Stopped: ceased operations late 2023, unable to secure further funding. Left Komgo as the sole major survivor of the 2019 "big four" trade-finance networks. (T3 Ledger Insights) **Status: WOUND DOWN (2023).**

### ASX CHESS replacement (Australia)
Promised: replace the 25-year-old CHESS clearing/settlement system with a Digital Asset (Daml/DLT) platform; announced 2016/2017, "world-first industrial-scale blockchain." Stopped: scrapped November 2022 after an Accenture review; A$245–255m (~US$165m) pre-tax write-off. Software was only ~63% complete. ASIC later took ASX to court; ASIC chair Joe Longo said ASX "failed to demonstrate appropriate control." **Stated reason:** "significant technology, governance and delivery challenges"; excessive complexity. ASX is rebuilding *without* blockchain. (T3 Finextra, iTnews; T1 ASIC statement) **Status: WOUND DOWN (Nov 2022).**

### Indian bank consortium — IBBIC → IBDIC
Promised: 15 (later 18) Indian banks (SBI, ICICI, HDFC, Axis, Kotak, BoB, Canara, IndusInd, Yes, Federal, South Indian, IDFC First, RBL, Indian Bank, Standard Chartered) incorporated the Indian Banks' Blockchain Infrastructure Company (IBBIC) in June 2021, each investing ₹5 crore (~$670,000; total ~₹90 crore / ~$10–12m), on Infosys Finacle Connect, to digitise domestic letters of credit, GST invoices and e-way bills. Aim: cut LC processing from 4–5 days to hours; prevent duplicate-financing fraud (the Nirav Modi / Mehul Choksi problem). Renamed IBDIC (Indian Banks' Digital Infrastructure Company). **Status: LIMITED PILOT / partially in production.** Early pilots reportedly cut processing time ~75% (8–9 days to 2–3); its blockchain financing system passed the RBI Regulatory Sandbox in 2025. (T3 Ledger Insights, Economic Times, The Ken; T5 for the 75% figure — UNVERIFIED at T1)

**Failure patterns (grouped):**
1. **Consortium governance / competitor distrust** — TradeLens, we.trade, IBBIC risk. When competitors must share a platform (often named after one of them), adoption stalls.
2. **No product-market fit / weak network effects** — we.trade, Marco Polo, Contour. Trade finance is paper-heavy and hard to integrate; the token did not remove the underlying legal/documentary friction.
3. **Delivery complexity / over-engineering** — ASX CHESS. The DLT rewrite of a working core system introduced unmanageable complexity for marginal benefit.
4. **Weak commercial model** — every trade-finance network ran losses far exceeding revenue.

**INDIA TRANSLATION (graveyard):**
**FINDING:** Every bank-consortium trade-finance blockchain (TradeLens, we.trade, Marco Polo, Contour) failed on governance and commercial viability, not cryptography (2022–2023, T3).
**INDIAN ANALOGUE:** IBDIC (ex-IBBIC) is structurally the same model — a bank consortium, a shared LC/trade-finance ledger, a single tech vendor (Infosys).
**WHO WOULD OWN IT:** IBDIC's member banks and board (SBI, ICICI, Axis, Kotak, BoB representatives); RBI as sandbox supervisor.
**WHAT BLOCKS IT / WOULD REPEAT:** The identical competitor-distrust and weak-commercial-model failure modes. IBDIC's mitigants are: (a) RBI involvement from the start, (b) a domestic-only, single-jurisdiction scope avoiding the cross-border coordination that sank the others, (c) a genuine fraud-prevention driver (duplicate LC financing) that the others lacked.
**WHAT WOULD HAVE TO BE DIFFERENT:** Mandatory participation or an RBI nudge to reach network effect; a real per-transaction commercial model; not naming/positioning it around any one bank.
**CONFIDENCE:** High that the global consortiums failed for these reasons; medium on IBDIC's current live status (the 75% time-saving is single-sourced at T5).

---

## PART 7 — INDIA: WHAT IS ACTUALLY SHIPPING

- **RBI tokenised certificate-of-deposit pilot:** launched **October 8, 2025**, on the wholesale CBDC (e₹-W) settlement layer, via the **Unified Markets Interface (UMI)**. RBI chose CDs deliberately — short-dated, high-volume, operationally simple. **Named banks NOT disclosed** — RBI said only "a few banks" / "a small set of banks" (RBI CGM Fintech Suvendu Pati). RBI Governor Sanjay Malhotra called early results "encouraging" (Global Fintech Fest 2025). **No transaction volume published.** Status: LIMITED PILOT. (T3 Business Standard, Moneycontrol; T1 RBI Annual Report 2025-26 via T3)
- **Unified Markets Interface (UMI):** per RBI Annual Report 2025-26 (released May 29, 2026), "a multi-layer platform to facilitate tokenisation of financial assets while leveraging wholesale CBDC to enhance settlement efficiencies." Unveiled at GFF 2025. Status: LIMITED PILOT. (T1 RBI via T3 Business Standard)
- **CBDC and Asset Tokenisation ("CAT") Sandbox:** RBI plans a framework in 2026-27 for testing CBDC-based products; also bilateral cross-border CBDC pilots (MoU signed with MAS Singapore; discussions with CBUAE). Status: ANNOUNCED ONLY. (T1 RBI via T3 Business Standard)
- **Digital Rupee (e₹) adoption:** circulation ₹1,016.5 crore (~$116m at ₹88) as of March 31, 2025, then — per the RBI Annual Report 2025-26 as reported by Business Upturn — "stood at ₹771.7 crore as on March 31, 2026, down from ₹1,016.5 crore a year earlier — a fall of about 24%" (~$88m), despite pilot expansion. RBI is shifting from incentive-driven headline numbers to specific use cases, e.g. programmable PDS food-subsidy DBT credited to beneficiaries in Gujarat, Puducherry and Chandigarh. Retail: ~17 banks and ~6 million users (March 2025); ~19 banks / ~7 million users cited around late 2025 (secondary). (T1 RBI Annual Reports via T3 Business Standard/Business Upturn, Medianama; the 19-bank/7m figure T5/secondary — flagged)
- **IFSCA / GIFT City:** IFSCA issued a Consultation Paper "Regulatory Approach towards Tokenization of Real-World Assets" dated **February 26, 2025** (comments due March 20, 2025), covering tokenised securities, financial products and other assets; an Expert Committee on Asset Tokenization has existed since Sept 2023. As of Aug 2026 there is still no completed stand-alone licensing category for tokenisation-as-a-business at GIFT IFSC. A reported first real-estate tokenisation (Collated Ventures / Terazo on Polygon, ~$7m raise, $150k minimum) is **UNVERIFIED (T5 CoinGeek only).** (T1 IFSCA consultation paper PDF; T5 for the deal)
- **SEBI:** member of IOSCO's Tokenisation Working Group; kept a tokenisation pilot on its agenda per its 2025-26 annual report; no enabling framework issued. (T3 CryptoTimes; T1 committee report via T3)

---

## RECOMMENDATIONS (staged, with thresholds that change them)

**Stage 1 — Now (next 3 months): position around cash and money-market instruments, not securities.** The evidence says the only tokenisation primitives that reach production are cash-like: deposit tokens, MMF/Treasury tokens, repo, stablecoin settlement. For any Indian institution, the defensible first move is to engage RBI's UMI / tokenised-CD pilot as a participant, or to model a tokenised liquid-fund/AIF-wrapper pilot with SEBI. Do **not** pitch tokenised equities or a consortium trade-finance ledger as a first project — the graveyard is unambiguous. *Threshold to escalate:* RBI publishing tokenised-CD transaction volumes or naming pilot banks; SEBI issuing a tokenisation consultation paper.

**Stage 2 — 6–12 months: pick the primitive with a real Indian pain point.** The strongest Indian case is (a) 24/7 intraday liquidity/collateral mobility, and (b) duplicate-financing fraud prevention in trade finance (the IBDIC driver). Frame any proposal as fraud/operational-risk reduction, not "efficiency," because India's existing rails (UPI, CCIL, E-Kuber, NSDL/CDSL) already deliver most of the efficiency tokenisation claims elsewhere. *Threshold to proceed:* a documented, sourced cost or fraud-loss baseline that tokenisation measurably beats.

**Stage 3 — Contingent on regulation: infrastructure choice.** If/when SEBI or RBI permits tokenised securities, the choice is **three-way, not two-way** — the common framing of "public Ethereum vs Canton" omits the option that most of the global production book actually sits on. Decide by counterparty count and by who operates the register:

1. **Multi-party confidential settlement → Canton-class architecture.** Where many counterparties settle one atomic transaction and each may see only its own leg — dealer-to-dealer corporate-bond settlement, tri-party repo, a depository settling across competing participants — sub-transaction privacy is a hard requirement and the global record is unambiguous (GS DAP, Broadridge DLR, DTCC, HSBC Orion). Cost: Daml is a scarce skill everywhere, so an NSDL/CDSL or CCIL deployment means building an India Daml practice from near zero.
2. **Single-operator rails → permissioned EVM.** Where one institution or utility operates the register and participants are its clients rather than each other's counterparties — a bank's tokenised-deposit rail, a single-depository register, a CCIL-adjacent collateral system — a permissioned EVM is sufficient, and it is what the largest bank-run cash rail in this module (Kinexys) actually runs. This is the **lowest talent-risk option for India by a wide margin**: Module D records India at ~15.2% of global Web3 developers concentrated in Solidity/EVM, against Daml and Corda skills that are scarce in every market. It also preserves migration optionality — one codebase and one skillset spans private chain → permissioned L2 → public L2, which is exactly the ladder JPMorgan climbed when it put JPM Coin on Base and JLTXX on Ethereum while keeping the core private. Canton offers no equivalent ladder (~$961k public TVL against ~$344.8bn represented).
3. **Public Ethereum → fund tokens and cross-border reach only.** Realistic in India only for fund tokens with an allowlist model, and only after a SEBI register-of-ownership change; otherwise it belongs at GIFT City for cross-border and distribution.

The honest trade-off in the middle option: Canton is a *network* with a global synchroniser and cross-institution composability, whereas every permissioned-EVM deployment is an island that needs bilateral bridges (Kinexys↔DLR is exactly that). But that composability is bought with a governance commitment to a foundation — the same axis on which TradeLens, we.trade and Marco Polo died. *Threshold:* a SEBI amendment recognising a DLT record as a valid ownership register.

**What would change these recommendations:** a demonstrated production failure of a permissioned bank ledger (would strengthen the public-chain case); RBI opening a live cross-border CBDC corridor (would make cross-border deposit tokens actionable); or a SEBI framework for tokenised securities (would move securities from "blocked" to "pilotable").

---

## CAVEATS

- **Vendor figures are not audited.** Kinexys volumes and Citi's "billions since 2024" are company disclosures (T4/T1-promotional). Broadridge DLR figures are the most robust because Broadridge is NYSE-listed and the data is now on the Bloomberg Terminal, but they are still company-reported.
- **RWA share numbers conflict and move monthly.** Ethereum's share of tokenised RWA value is quoted between ~34% (The Block) and ~63% (yellow.com); use "largest single share, roughly half to two-thirds by value" and re-pull RWA.xyz on the publication date. All Part 5 RWA figures are staleness-flagged.
- **Named-participant gaps.** RBI has not disclosed the banks in its October 2025 CD-tokenisation pilot; this would require an RBI circular or RTI. The IBDIC "75% time saving" is single-sourced at T5 and should be presented as "reported," with the T3 design goal ("4–5 days to hours") as the defensible fallback.
- **AUM volatility.** BUIDL ($1.7bn–$2.9bn) and BENJI/FOBXX (~$742m–$1.98bn suite) figures vary by source and date; cite the live RWA.xyz entry or issuer filings on the query date.
- **This module excludes the asset question entirely.** No ETH price, market-cap-as-valuation, or return framing is included; where sources conflated infrastructure with the ETH asset (noted in Part 3 and Part 5), the conflation is flagged.
- **Staleness.** Everything dated before March 2026 (TradeLens/we.trade/Marco Polo/Contour/ASX outcomes; BUIDL early milestones; RBI FY25 figures) is historical and stable; the moving items are RWA totals, chain shares, Kinexys/Broadridge/Visa volumes, PYUSD supply, and the RBI/UMI pilot status — re-check all of these before any re-cut.

---

## MODULE CLOSE — FIVE STANDARD ITEMS

### 1. Five findings hardest for a skeptic to dismiss
1. **Broadridge DLR settled $8.0tn in July 2026 ($365bn/day) of tokenised repo** — a T1 disclosure from a NYSE-listed firm, now visible on the Bloomberg Terminal, on a permissioned ledger. Hard to dismiss because it is a real production number, not a projection.
2. **JPMorgan Kinexys processes >$5bn/day and >$3tn cumulative** (Dec 2025) — but note it is a *fraction* of JPM's >$10tn/day total, which is itself the honest, deflating framing a skeptic will respect.
3. **BlackRock and Franklin Templeton run tokenised funds in production** — BUIDL on public Ethereum since March 2024, FOBXX/BENJI (mostly on Stellar) as a US-registered fund's legal register since 2021. Five years, not a pilot.
4. **The entire first wave of bank-consortium trade-finance blockchains failed** (TradeLens, we.trade, Marco Polo, Contour) and ASX wrote off ~A$250m — documented, dated, and mostly for non-technical reasons.
5. **RBI is doing exactly what the evidence predicts** — tokenising the simplest cash-like instrument (CDs) on a permissioned central-bank layer, not putting securities on public chains.

### 2. Strongest chart in this module
**Tokenised RWA value by blockchain network**, pulled directly from the RWA.xyz global overview dashboard (app.rwa.xyz) — Ethereum ~$17.3bn / 2,090 RWAs vs BNB ~$5.7bn, Solana ~$4.1bn, Stellar ~$3.3bn. Single T2 source, self-contained, and it makes the "Ethereum leads but is not a monopoly" point visually. Pair with a second bar: highest-*volume* systems (Broadridge $8tn/mo, Kinexys ~$150bn/mo implied) sit on permissioned ledgers — the value-vs-volume contrast is the whole module in one chart.

### 3. Three claims most likely to be challenged in a meeting
- **"Ethereum hosts most tokenised RWA value."** Best evidence: RWA.xyz chain-level data ($17.3bn Ethereum, the largest single network). Present as "largest single share, roughly half to two-thirds by value," and disclose the conflict (The Block ~34% vs yellow.com ~58–63%). Weakest link: methodology and date vary by source.
- **"Kinexys does $5bn+ a day."** Best evidence: JPMorgan's own disclosures (Arif Khan, T4) plus American Banker (T3). Caveat proactively: company figure, not independently audited, small vs JPM's total payments.
- **"IBBIC/IBDIC cut LC processing 75%."** Weakest claim in the module — single-sourced at T5. Present as "reported" and flag as unverified; the defensible version is the *design goal* of "4–5 days to hours" from T3 launch coverage.

### 4. One-sentence summary for a non-technical executive
Tokenisation is genuinely in production for cash, money-market funds and repo — mostly on private bank-run ledgers, with public Ethereum leading the smaller pool of tokenised funds — while every ambitious bank-consortium trade-finance project of the last decade has failed for governance and commercial reasons, and India's regulators are deliberately starting with the narrowest, safest instrument (tokenised certificates of deposit on the digital rupee).

### 5. What this module could NOT establish
- **Named banks in the RBI October 2025 CD-tokenisation pilot** — RBI disclosed only "a few banks." Would need an RBI circular or an RTI response.
- **IBDIC's current live transaction volume** — no T1-T3 figure exists; the 75% time-saving is T5. Would need an IBDIC or member-bank disclosure.
- **Precise current AUM for BUIDL and BENJI** — sources conflict across dates ($1.7bn–$2.9bn); would need the live RWA.xyz entry or Securitize/Franklin filings on the query date.
- **Independent corroboration of vendor volume claims** (Kinexys, Citi "billions since 2024") — these remain company figures.
- **Whether any tokenised-bond issuance beat conventional settlement on cost** — issuers claim efficiency but no independent cost study was found; would need a BIS or central-bank post-issuance study.
- **GIFT City live tokenisation deals** — only a T5 report exists; would need an IFSCA authorisation notice.
- **SocGen Forge (EURCV stablecoin) and UBS uMINT specifics** — flagged in scope but the search budget was exhausted before primary confirmation; both are believed live (SocGen's EURCV on public Ethereum; UBS uMINT tokenised MMF) but are left UNVERIFIED here pending a dedicated pull from issuer disclosures and RWA.xyz.