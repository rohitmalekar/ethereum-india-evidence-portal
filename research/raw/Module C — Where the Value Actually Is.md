# Module C — Where the Value Actually Is
## Distributed settlement and tokenisation primitives inside Indian financial institutions: a process-level opportunity map

**Currency note:** Rupee figures are given first (Indian readers think in crore). USD conversions use the RBI reference rate of **₹95.45/USD as of 31 August 2026** (CEIC republishing RBI data — T2; note RBI has reportedly discontinued its own daily reference-rate publication, so confirm against FBIL/Reuters for any specific date). Stock figures struck at FY25 close (March 2025) were measured when the rupee was nearer ₹85–87/USD; where a source gave its own USD figure at the time, that figure is retained and labelled.

---

## TL;DR
- **The largest prizes and the nearest pilots do not overlap.** The three biggest rupee opportunities — correspondent-banking/nostro reconciliation on ~US$129bn/yr of remittance flow, the ₹53.6 lakh crore corporate bond market, and the ~₹25 lakh crore MSME credit gap — sit almost entirely in the domestic RBI/SEBI perimeter where on-chain settlement finality and ledger-as-register are legally unaddressed. The three nearest permitted pilots (GIFT City tokenisation sandbox, the RBI tokenised-CD pilot on UMI, and the SEBI corporate-bond DLT pilot announced 26 May 2026) are either offshore, tiny, or not yet live.
- **The single most defensible finding: India already runs a production DLT system.** SEBI's Security & Covenant Monitoring System (NSDL/CDSL, mandated 29 Mar 2022) has 4,291 issuers onboarded and ~90% of outstanding secured ISINs mapped. The debate in India is not "does DLT work in finance" but "which additional process is worth the organisational cost."
- **The binding constraint is legal-organisational, not technical.** For every domestic opportunity, the blocker is one of: settlement finality (Payment and Settlement Systems Act 2007 covers only RBI-designated systems), ledger-as-register (Depositories Act 1996 contemplates a depository, not a distributed ledger), VDA classificatory risk (CBDT has not clarified that tokenised securities fall outside s.115BBH), or simply that an incumbent system already clears the trade at T+1.

---

## Key Findings

1. **India's corporate bond market is large but barely trades — the friction is secondary-market illiquidity, not primary issuance.** Outstanding rose from ₹17.5 trillion (FY15) to **₹53.6 lakh crore (₹53.6 trillion) at FY25 close**, with the highest-ever fresh issuances of ₹9.9 trillion during 2024–25 (RBI Financial Stability Report, 30 Jun 2025, T1; NITI Aayog, *Deepening the Corporate Bond Market in India*, Dec 2025, T1). Yet average daily secondary turnover was only **₹7,645 crore in FY25**, up from ₹5,722 crore the prior year — average monthly turnover was just **3.8% of outstanding value** (RBI Annual Report 2024–25 and Financial Stability Report, via Business Standard 29 May 2025, T1/T3). This is the process SEBI's tokenisation pilot targets.

2. **The remittance corridor is the clearest cost story.** India received **US$129 billion in remittances in 2024** — "the highest amount ever recorded for any country in a single year," 14.3% of global remittances (World Bank, Ratha/Plaza/Kim blog, 18 Dec 2024, T2); RBI's compiled 2024 total was US$129.4bn, and RBI recorded US$135.46bn in FY25 (RBI/PIB, Jul 2025, T1). Average cost to send US$200 to India was **below 6%** (South Asia regional average 5.16%, the lowest-cost receiving region) in Q1 2024, but **banks remain the most expensive channel at 12.66%** (World Bank Remittance Prices Worldwide, Issue 49, Q1 2024, T2). The cost is concentrated in nostro pre-funding and correspondent-chain fees of US$15–50 per hop.

3. **The MSME collateral constraint is a ~₹25 lakh crore gap that a receivables-tokenisation primitive addresses directly — and India already has the rails.** Deloitte put the gap at **₹25 lakh crore as of March 2025** (potentially over ₹50 lakh crore), with **only 14% of MSMEs having formal credit access** ("State of Financial Services in India," 27 Jun 2026, T3). TReDS, the RBI-regulated receivables platform, discounted **₹3.47 lakh crore in FY26** (up from ₹40,000 crore in FY22; Ministry of MSME/PIB, 30 Jun 2026, T1). Deep-tier supply-chain finance is the unmet piece.

4. **The RBI has quietly built the settlement layer the domestic market would need.** Wholesale CBDC (e₹-W) has settled G-sec secondary trades since 1 Nov 2022 and interbank call money since ~Oct 2023 (RBI/Business Standard, T1/T3). The tokenised certificate-of-deposit pilot on the Unified Markets Interface (UMI) launched 8 October 2025 with "a few banks" (RBI CGM Suvendu Pati, via Business Standard/Moneycontrol, 7 Oct 2025, T1/T3). This is the piece most jurisdictions lack.

5. **Disconfirming evidence is abundant and matters.** e₹ retail circulation was only **₹1,016 crore to March 2025** (RBI, via IANS, May 2026, T1) — a warning that regulator-built rails do not create usage. SLB volumes are trivial (~19,000 trades in a month; NSE data via investyadnya, T2). The global graveyard (Module A: TradeLens, we.trade, Marco Polo, Contour) was overwhelmingly trade-finance consortia — the exact segment where India's opportunity looks largest on paper.

---

## Market Sizing (rupee-first, with addressable fraction)

| Market | Figure | As-of | Source (tier) | Realistically addressable |
|---|---|---|---|---|
| Corporate bonds outstanding | ₹53.6 lakh crore (~US$642bn at time) | FY25 | RBI FSR / NITI Aayog Dec 2025 (T1) | Secondary turnover only, not the stock |
| Corp bond daily secondary turnover | ₹7,645 crore/day (3.8% of outstanding/month) | FY25 | RBI Annual Report/FSR (T1) | This IS the opportunity, not outstanding |
| G-sec market (annual settlement value) | ₹1,812 lakh crore (₹1,812 trillion) | 2024 | RBI Payment Systems Report (T1) | Repo/collateral leg |
| CCIL weekly market repo | ₹8.4 lakh crore/week | Mar 2025 | CCIL (T1) | Collateral mobility |
| RTGS annual settlement value | ₹1,938 lakh crore (~₹7.75 lakh crore/day) | CY2024 | RBI Payment Systems Report (T1) | Intraday liquidity timing |
| Inward remittances | US$129bn (~₹10.9 lakh crore) | 2024 | World Bank (T2) | The FX-margin + fee slice, ~5% |
| Remittance cost to India | <6% (banks 12.66%) | Q1 2024 | World Bank RPW Issue 49 (T2) | Cost compression |
| MSME credit gap | ₹25 lakh crore | Mar 2025 | Deloitte (T3) | Receivables-backed portion |
| TReDS discounting (annual) | ₹3.47 lakh crore | FY26 | PIB/Min. MSME (T1) | Deep-tier extension |
| Mutual fund AUM | ₹65.74 lakh crore (May 2026: ₹81.58 lakh crore) | Mar 2025 / May 2026 | AMFI (T2) | TA/subscription-redemption cycle |
| AIF commitments | ₹13.49 lakh crore (Dec 2025: ₹15.74 lakh crore) | Mar 2025 | SEBI/IVCA-Crisil (T2) | Cat II unit transfer/secondary |
| Private credit (Cat II subset) | ~₹1.95 lakh crore | Dec 2024 | Treelife/IBEF citing SEBI (T2/T3) | Secondary market (currently near-zero) |
| NPS + APY AUM | ₹16.55 lakh crore | 29 Mar 2026 | PFRDA (T1) | Long-dated collateral |
| EPFO corpus | ~₹31.2 lakh crore | Aug 2026 | Avendus/Business Today (T3) | Long-dated collateral |
| India trade finance | Export credit covered only 28.5% of US$284bn required | 2025 | ADB Global Trade Finance Gap Survey / DGFT (T1/T2) | LC/BG digitisation |
| Household gold | ~25,000 tonnes (Morgan Stanley: 34,600t, ~US$3.79tn) | 2024–25 | WGC/HSBC; Morgan Stanley (T2/T3) | See caveat — NOT an addressable market |
| IEPF unclaimed dividend corpus | ~₹5,262 crore | FY22 | IEPFA (T1) | Corporate-actions failure proxy |

**Household gold caveat:** The ~₹188.9 lakh crore / US$2.29–3.79 trillion headline is repeatedly cited by tokenisation vendors as an addressable market. It is not. Physical gold monetisation has failed repeatedly in India (the Gold Monetisation Scheme mobilised a tiny fraction of the stock over a decade) for reasons that are cultural, tax-related and trust-related, not technological. Tokenising a gold claim does not solve the assay, custody, and "will not part with family gold" problems. Treat as a distant, politically sensitive opportunity, not a near-term pilot surface. (Household stock: ~25,000 tonnes per WGC/HSBC 2024–25; Morgan Stanley's higher 34,600t / US$3.79tn June 2025 figure is price-rally-inflated — a valuation, not a mobilisable base.)

---

## The Opportunity Chains

### SEGMENT 1 — Large Indian banks

#### 1A. Correspondent banking / nostro-vostro reconciliation
- **INSTITUTION TYPE / EXAMPLE:** Large public and private banks with foreign-currency clearing — State Bank of India, HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank. Supervised by RBI.
- **PROCESS:** Nostro reconciliation — matching the bank's internal ledger of its foreign-currency accounts held abroad against correspondent statements (SWIFT MT940/MT103).
- **CURRENT COST/FRICTION:** Correspondent-chain fees of **US$15–50 per transfer per hop**, plus an FX markup; total 3–5% per payment for retail-scale flows (industry sources, T4/T5). India's inward remittance base is **US$129bn (2024)**; average cost to India below 6% (Q1 2024, World Bank RPW, T2), banks 12.66%. The deeper cost is trapped liquidity: banks overfund nostro accounts because they lack real-time visibility.
- **EXISTING SOLUTION:** SWIFT messaging + correspondent accounts; end-of-day statement reconciliation; treasury sweeps.
- **PRIMITIVE:** Shared registry (a single reconciled ledger between correspondents removes the two-sided matching problem). NOT atomic settlement — the constraint here is reconciliation and liquidity visibility.
- **EXPECTED IMPROVEMENT:** JPMorgan Kinexys (Module A) processes >US$5bn/day on exactly this primitive; the documented gain is intraday liquidity release and elimination of end-of-day breaks, not fee reduction per se. Uncertain for India because the parent-programme connection is the real unlock (see Segment 2).
- **REGULATORY PATHWAY:** Domestic on-chain settlement finality is unaddressed by the PSS Act 2007. A GIFT City entity connecting to a parent programme is the permitted route. **Sandbox/offshore only for the shared-ledger version.**
- **MINIMUM VIABLE PILOT:** One Indian bank's GIFT City IBU + one foreign parent's tokenised-deposit programme, USD leg only, 20–50 intragroup transfers/day for 90 days. Proves reconciliation-break elimination.
- **SUCCESS METRIC:** Number of unreconciled items per 1,000 transactions (target: near-zero vs current baseline).
- **WHY NOT ALREADY DONE:** Organisational — nostro reconciliation sits in operations, not treasury, and no one owns the cross-border P&L. Also, UPI-PayNow already solves the retail P2P leg cheaply, removing the most visible pain.
- **INDIAN ANALOGUE:** Nostro desks at SBI/HDFC treasury operations.
- **WHO WOULD OWN IT:** Head of Transaction Banking / Global Payments, and the Treasury function that holds the nostro-funding cost line.
- **WHAT BLOCKS IT TODAY:** No settlement-finality recognition for on-chain transfers under PSS Act 2007; the counterparty must be outside India or in GIFT.
- **WHAT WOULD HAVE TO CHANGE:** RBI designation of a DLT settlement system under the PSS Act, or restriction of the pilot to GIFT IFSC.
- **CONFIDENCE:** Medium — the global proof is strong, but the domestic legal gap is real and UPI-PayNow blunts the retail case.

#### 1B. Tokenised deposits (interbank + collateral)
- **PROCESS:** Representing bank deposits as transferable tokens for interbank settlement, cash collateral, and programmable payments.
- **CURRENT COST/FRICTION:** Interbank call-money and G-sec settlement already run on e₹-W. The friction being tested is settlement-guarantee/collateral overhead in the interbank market.
- **EXISTING SOLUTION:** CCIL-guaranteed settlement (TREP daily average ~₹4.3 lakh crore, CCIL Mar 2025, T1); RTGS.
- **PRIMITIVE:** Tokenised collateral / programmable payment.
- **EXPECTED IMPROVEMENT:** RBI (Pati, 7 Oct 2025) stated efficiency gains are "immense"; no quantified figure disclosed — **UNVERIFIED** pending pilot data.
- **REGULATORY PATHWAY:** **LIMITED PILOT** — the tokenised-CD pilot on UMI launched 8 Oct 2025 with undisclosed "few banks," settled via e₹-W.
- **MINIMUM VIABLE PILOT:** Already running. The defensible next step: extend to commercial paper (RBI has said it is exploring this).
- **SUCCESS METRIC:** Settlement-cycle compression (T+1 → T+0/intraday) and collateral released per rupee of throughput.
- **WHY NOT ALREADY DONE:** It is being done, cautiously. RBI's stated position (Pati): "integrity and enforceability have to be established" before scaling.
- **INDIAN ANALOGUE:** CCIL/TREP interbank market.
- **WHO WOULD OWN IT:** Bank treasury / money-markets desk; RBI Fintech Department owns the pilot.
- **WHAT BLOCKS SCALING:** Enforceability of a tokenised deposit as a legal claim is not codified; the Depositories Act does not contemplate a ledger-based register.
- **WHAT WOULD HAVE TO CHANGE:** RBI regulatory guardrails (in progress) + a statutory ledger-based-security concept (Switzerland's DLT Act is the model, per Module B).
- **CONFIDENCE:** High that the pilot exists; low on quantified benefit.

#### 1C. Trade finance / letters of credit / bank guarantees
- **PROCESS:** Issuance and verification of LCs and bank guarantees; import trade credit.
- **CURRENT COST/FRICTION:** India's export credit covered only **28.5% of the US$284bn required** to support shipment volumes (ADB Global Trade Finance Gap Survey, 2025, citing DGFT, T1/T2). The catastrophic failure mode is fake/unrecorded instruments: the **PNB–Nirav Modi fraud reached ₹14,356.84 crore (~US$2.1bn, reported 18 May 2018)**, executed by issuing SWIFT Letters of Undertaking that never entered the core banking system. RBI discontinued LoUs/LoCs for trade credit on 13 March 2018 in response.
- **EXISTING SOLUTION:** SWIFT + paper; NeSL's Digital Document Execution platform for e-bank-guarantees (backed by RBI/IBA).
- **PRIMITIVE:** Shared registry (every guarantee visible to all parties in real time — this directly closes the "off-book instrument" gap that PNB exploited).
- **EXPECTED IMPROVEMENT:** eBG issuance reportedly falls from ~3–5 business days to ~2–4 hours (NeSL/industry, T4 promotional — treat as vendor claim). The fraud-prevention value is the stronger argument.
- **REGULATORY PATHWAY:** Domestic — the e-BG/NeSL rail is **IN PRODUCTION** but is a centralised information-utility, not a distributed ledger. A DLT version is **ANNOUNCED ONLY** at best.
- **MINIMUM VIABLE PILOT:** Consortium of 3–4 banks issuing e-BGs to a shared ledger with a large PSU buyer; 500 guarantees over 6 months; prove zero off-book instruments.
- **SUCCESS METRIC:** Fraudulent/unrecorded instruments detected pre-issuance (target: 100% on-ledger).
- **WHY NOT ALREADY DONE:** The global trade-finance graveyard (Module A: we.trade, Marco Polo, Contour, TradeLens — all WOUND DOWN) is the single most important cautionary precedent. These failed on the network-effect / commercial-governance problem, not the technology. India's NeSL centralised utility already captures much of the benefit without a consortium.
- **INDIAN ANALOGUE:** Trade-finance operations at SBI, Bank of Baroda; NeSL.
- **WHO WOULD OWN IT:** Head of Trade Finance / Transaction Banking.
- **WHAT BLOCKS IT TODAY:** Consortium governance and the demonstrated failure of exactly this use case globally; not regulation.
- **WHAT WOULD HAVE TO CHANGE:** A neutral operator (IBA or NeSL) mandated to run it, avoiding the bank-consortium governance trap.
- **CONFIDENCE:** Low that a DLT consortium succeeds where global ones failed; medium that the centralised e-BG rail keeps expanding.

---

### SEGMENT 2 — Foreign bank India operations
- **INSTITUTION TYPE / EXAMPLE:** HSBC India, Citi India, JPMorgan India, Standard Chartered India. Supervised by RBI (domestic) and IFSCA (GIFT branches).
- **PROCESS:** Cross-border settlement, custody, securities services; the specific question — can an Indian entity connect to a parent's live tokenisation programme (HSBC Orion, Citi Token Services, JPMorgan Kinexys — all IN PRODUCTION per Module A)?
- **CURRENT COST/FRICTION:** Foreign banks run parent programmes moving billions/day globally but cannot extend them to the Indian balance sheet because on-chain settlement is not recognised domestically.
- **EXISTING SOLUTION:** Parent programme abroad + conventional nostro rails into India.
- **PRIMITIVE:** Tokenised deposit / programmable payment (extend existing parent rail).
- **EXPECTED IMPROVEMENT:** Kinexys >US$5bn/day and Citi Token Services are the proof points; the marginal Indian benefit is 24/7 intragroup liquidity movement.
- **REGULATORY PATHWAY:** **GIFT City is the permitted surface.** IFSCA (TechFin and Ancillary Services) Regulations 2025 permit the tooling layer via Certificate of Registration; platform operation is sandbox-only (Module B). Domestic connection is **BLOCKED** by the PSS Act finality gap.
- **MINIMUM VIABLE PILOT:** HSBC or Citi GIFT IBU connects its parent tokenised-deposit programme for USD intragroup treasury movements; 90 days; proves regulatory containment within IFSC.
- **SUCCESS METRIC:** Intragroup USD liquidity moved on-ledger without a domestic-finality breach finding.
- **WHY NOT ALREADY DONE:** The GIFT perimeter for platform operation is sandbox-only; the parent's compliance function will not connect a production programme to a sandbox-status node.
- **INDIAN ANALOGUE:** GIFT IBUs of foreign banks.
- **WHO WOULD OWN IT:** Regional Head of Securities Services / Treasury, with GIFT-branch CEO.
- **WHAT BLOCKS IT TODAY:** IFSCA has not notified the final RWA tokenisation framework; platform operation remains a Limited Use Authorisation (sandbox).
- **WHAT WOULD HAVE TO CHANGE:** IFSCA notification of the final tokenisation framework, giving GIFT entities a statutory disapply/exempt power comparable to the EU DLT Pilot Regime or UK Digital Securities Sandbox (Module B).
- **CONFIDENCE:** High that GIFT is the near-term surface; medium on timing.

---

### SEGMENT 3 — Market infrastructure (NSE, BSE, NSDL, CDSL, CCIL, clearing corporations)

#### 3A. Corporate bond secondary settlement
- **PROCESS:** Clearing and settlement of secondary corporate-bond trades.
- **CURRENT COST/FRICTION:** Settles T+1 via NSCCL/ICCL with cash in RTGS and securities in NSDL/CDSL (DvP-1). The real friction is not the exchange leg (already T+1) but the OTC/retail leg, which can take **3–7 days** with manual DI-slip paperwork and transaction-failure risk (NSDL platform materials, T4). Secondary turnover is thin: **₹7,645 crore/day (FY25)**, 3.8% of outstanding per month.
- **EXISTING SOLUTION:** NDS-OM (wholesale, CCIL), NSE CBRICS / BSE BOND (retail), RFQ platform.
- **PRIMITIVE:** Atomic settlement (DvP on a single ledger, eliminating the securities/cash timing split).
- **EXPECTED IMPROVEMENT:** T+1/3–7 days → intraday. SEBI Chairman Tuhin Kanta Pandey (26 May 2026): "greater possibility of more liquidity and instantaneous autonomous settlements."
- **REGULATORY PATHWAY:** **ANNOUNCED ONLY.** SEBI corporate-bond tokenisation pilot announced 26 May 2026 at the CareEdge Debt Market Summit, 6–9 month timeline, to plug into RBI wholesale CBDC; no participants named, no launch date. SEBI's Aug 2026 annual report confirmed the pilot is active and expanded scope to automated debt servicing and smart-contract programmability.
- **MINIMUM VIABLE PILOT:** One depository (NSDL or CDSL) + 2–3 large issuers + e₹-W settlement leg; tokenise a single new AAA issue; run primary + 20 secondary trades over 3 months.
- **SUCCESS METRIC:** Settlement cycle achieved (target T+0) and settlement-failure rate.
- **WHY NOT ALREADY DONE:** Two legal gaps (Module B): the Depositories Act 1996 contemplates a depository, not a distributed ledger (ledger-as-register unaddressed); and settlement finality on-chain is unaddressed by the PSS Act. Also the exchange leg already clears at T+1, so the marginal benefit is modest for the liquid segment.
- **INDIAN ANALOGUE:** NSDL/CDSL + NSCCL/ICCL.
- **WHO WOULD OWN IT:** SEBI (Market Regulation Dept) as sponsor; depository CTO/COO holds the build budget.
- **WHAT BLOCKS IT TODAY:** RBI has yet to release the final framework for the settlement leg; Pandey said "we are quite ready to launch it as soon as the RBI clears it."
- **WHAT WOULD HAVE TO CHANGE:** RBI final framework + a SEBI power to disapply Depositories Act register requirements for the pilot's named ISINs.
- **CONFIDENCE:** Medium — announced and sponsored, but the legal register gap is not yet cured and the liquid-segment benefit is small.

#### 3B. Collateral / margin movement and repo
- **PROCESS:** Intraday movement of collateral for margin and repo.
- **CURRENT COST/FRICTION:** CCIL market repo ~₹8.4 lakh crore/week; TREP daily average ~₹4.3 lakh crore (Mar 2025). Collateral is immobilised during settlement windows.
- **PRIMITIVE:** Tokenised collateral (atomic pledge/release).
- **REGULATORY PATHWAY:** e₹-W already settles G-sec repo — the rail exists. Extending tokenised collateral is **LIMITED PILOT**-adjacent.
- **SUCCESS METRIC:** Collateral velocity (reuse per day) and intraday liquidity released.
- **WHY NOT ALREADY DONE:** CCIL's guaranteed-settlement model already compresses counterparty risk; the incremental gain must beat a well-functioning CCP.
- **WHO WOULD OWN IT:** CCIL; RBI Financial Markets Regulation Dept.
- **CONFIDENCE:** Medium.

#### 3C. Corporate actions / dividend & interest distribution
- **PROCESS:** Processing corporate actions (dividends, interest, redemptions) and reconciling entitlements.
- **CURRENT COST/FRICTION:** The failure proxy is unclaimed dividends: **~₹5,262 crore in the IEPF corpus (FY22)**; over two years to July 2026, IEPFA refunded ₹77.82 crore and returned 4.36 crore shares against 75,417 approved claims (IEPFA/Parliament reply, T1). No public operational error-rate metric exists — this is the closest proxy and has limitations (unclaimed ≠ mis-processed).
- **PRIMITIVE:** Programmable payment (entitlements auto-execute against a registry of record).
- **REGULATORY PATHWAY:** Domestic; would ride on the same ledger-as-register gap as 3A. **ANNOUNCED ONLY** as part of SEBI's broader "automated servicing of debt instruments" scope.
- **SUCCESS METRIC:** Reduction in unclaimed/failed distributions and reconciliation headcount.
- **WHY NOT ALREADY DONE:** Registrars and transfer agents (RTAs — CAMS, KFin) already automate most of this; the residual failure is stale investor data, which a ledger does not fix.
- **WHO WOULD OWN IT:** Depositories + RTAs; issuer company secretary.
- **CONFIDENCE:** Low — the primitive does not address the actual failure cause (stale KYC/bank data).

---

### SEGMENT 4 — NPCI and NPCI International
- **PROCESS:** Cross-border payment corridors and UPI internationalisation.
- **CURRENT COST/FRICTION:** UPI-PayNow (India-Singapore, live Feb 2023, RBI+MAS) cut the ~5% corridor cost by roughly half; 19 Indian banks now receive. But daily caps are low (₹60,000/S$1,000) and it is a P2P retail rail — it does **not** solve wholesale/B2B settlement or the nostro pre-funding problem.
- **EXISTING SOLUTION:** UPI-PayNow linkage; conventional correspondent banking for wholesale.
- **PRIMITIVE:** Programmable payment + shared registry for the settlement (not messaging) leg.
- **EXPECTED IMPROVEMENT:** UPI-PayNow already delivers instant P2P; the unaddressed problem is inter-central-bank net settlement, which BIS Project Nexus and CBDC bridges target. RBI has joined BIS Projects Rialto and Mandala.
- **REGULATORY PATHWAY:** Retail corridor **IN PRODUCTION**; wholesale CBDC-bridge settlement **LIMITED PILOT** (BIS projects).
- **MINIMUM VIABLE PILOT:** e₹-W ↔ a partner wholesale CBDC for one corridor's net settlement; the BIS bridge projects are the vehicle.
- **SUCCESS METRIC:** Corridor settlement finality time and pre-funding capital released.
- **WHY NOT ALREADY DONE:** UPI-PayNow solved the visible retail pain; the wholesale leg needs a counterparty central bank, which is a diplomatic/standards problem, not a technical one.
- **WHO WOULD OWN IT:** NPCI International (NIPL) for corridors; RBI for the CBDC-bridge settlement.
- **WHAT BLOCKS IT TODAY:** No bilateral CBDC-settlement agreement operationalised (UAE MoU discussed, not live; MAS digital-asset MoU signed).
- **CONFIDENCE:** High on the retail state of play; medium on wholesale-bridge timing.

---

### SEGMENT 5 — Asset managers, AMCs, AIFs, wealth platforms
- **PROCESS:** Subscription/redemption, transfer agency, and — critically — AIF unit transfer and private-credit secondary trading.
- **CURRENT COST/FRICTION:** MF AUM ₹65.74 lakh crore (FY25); AIF commitments ₹13.49 lakh crore (Mar 2025), of which Category II private credit ~₹1.95 lakh crore (Dec 2024). AIF units and private credit are effectively **held-to-maturity with no established secondary market** — an investor wanting to exit before maturity has no venue. Business Standard: private-credit deals are "highly structured and negotiated, as a result of which, the secondary market is fairly limited"; Chambers' *Private Credit 2025 – India*: the secondary market "is still considered illiquid... the wholesale debt market needs more liquidity for easier price discovery."
- **EXISTING SOLUTION:** RTAs (CAMS, KFin) for MF TA; bilateral negotiated transfers for AIF units.
- **PRIMITIVE:** Shared registry (a tokenised AIF unit register that makes ownership transfer standard rather than bespoke).
- **EXPECTED IMPROVEMENT:** The prize is creating a secondary market where none exists — the strongest "new capability" case rather than a cost-reduction case. Uncertainty is high because illiquidity is partly a demand problem, not just an infrastructure problem.
- **REGULATORY PATHWAY:** **GIFT City sandbox** is the live surface — Terazo's ORYX (US$7m single-asset property AIF, 100% primary subscribed) and Realdom India/Pinvest Exchange (fractional real-estate) tokenise AIF units under the IFSCA sandbox. Domestic AIF-unit tokenisation is **ANNOUNCED ONLY / sandbox-only**.
- **MINIMUM VIABLE PILOT:** Already partially live in GIFT (Terazo/Realdom). Domestic MVP: a single Category II fund issues tokenised units to accredited investors with an on-ledger transfer register; 12 months; prove one clean secondary transfer.
- **SUCCESS METRIC:** Number of secondary transfers executed (baseline: ~zero).
- **WHY NOT ALREADY DONE:** VDA classificatory risk — CBDT has not clarified that a tokenised AIF unit is outside s.115BBH's 30% VDA tax; no manager will risk it domestically. Payments in GIFT pilots must run through fiat USD escrow, not tokens.
- **WHO WOULD OWN IT:** AMC/AIF COO; in GIFT, the fund-management-entity CEO.
- **WHAT BLOCKS IT TODAY:** CBDT classificatory silence + no domestic ledger-as-register recognition.
- **WHAT WOULD HAVE TO CHANGE:** A CBDT circular clarifying tokenised securities are not VDAs, plus SEBI recognition of a ledger register.
- **CONFIDENCE:** Medium — GIFT proof exists; domestic path blocked by tax ambiguity.

---

### SEGMENT 6 — Insurers and pension funds
- **PROCESS:** Holding long-dated collateral and long-duration assets; annuity servicing.
- **CURRENT COST/FRICTION:** NPS+APY AUM ₹16.55 lakh crore (29 Mar 2026, PFRDA); EPFO corpus ~₹31.2 lakh crore. IRDAI caps combined REIT/InvIT exposure at 6%. These are natural holders of tokenised long-dated instruments but are the most conservative allocators.
- **PRIMITIVE:** Tokenised collateral / verifiable credential (for annuity life-certificate verification).
- **EXPECTED IMPROVEMENT:** Marginal on the asset side; the credible near-term use is verifiable-credential-based "digital life certificate" for pension continuation, reducing annual physical verification friction.
- **REGULATORY PATHWAY:** **BLOCKED / ANNOUNCED ONLY** — IRDAI and PFRDA investment regulations do not contemplate a tokenised instrument as an eligible asset class.
- **SUCCESS METRIC:** For the credential use case: pensioners verified without branch visit.
- **WHY NOT ALREADY DONE:** Prudential rules enumerate permitted asset classes; a token is not listed. Insurers/pension funds will be last movers, not pilots.
- **WHO WOULD OWN IT:** Chief Investment Officer (insurer); PFRDA/EPFO trustees.
- **WHAT WOULD HAVE TO CHANGE:** IRDAI/PFRDA amendment to eligible-asset schedules.
- **CONFIDENCE:** Low near-term.

---

### SEGMENT 7 — Corporates and treasuries (supply chain finance, MSME receivables)
- **PROCESS:** Receivables discounting and deep-tier supply-chain finance against MSME receivables.
- **CURRENT COST/FRICTION:** MSME credit gap ₹25 lakh crore (Mar 2025); only 14% have formal credit. TReDS discounted ₹3.47 lakh crore in FY26 but reaches only Tier-1 suppliers with accepted invoices — deep-tier (Tier-2/3) suppliers are excluded. MSME working-capital substitutes carry ~15% annual interest (ADB).
- **EXISTING SOLUTION:** TReDS (RXIL, M1xchange, Invoicemart) — RBI-regulated, IN PRODUCTION.
- **PRIMITIVE:** Verifiable credential / tokenised receivable (a receivable that carries its own verified provenance down the supply chain, enabling deep-tier financing without re-verification).
- **EXPECTED IMPROVEMENT:** ADB frames deep-tier SCF as the specific unmet need; the primitive extends financing past Tier-1. Uncertainty high — deep-tier finance has failed globally (Marco Polo) on the same network problem.
- **REGULATORY PATHWAY:** TReDS is production; a tokenised-receivable layer on top is **ANNOUNCED-adjacent** — Budget 2026 permits TReDS receivables to be securitised as asset-backed securities and integrates GeM procurement data.
- **MINIMUM VIABLE PILOT:** One TReDS platform + one large anchor buyer + its Tier-2 suppliers; tokenise accepted-invoice provenance; 6 months; prove Tier-2 financing at Tier-1 rates.
- **SUCCESS METRIC:** Value financed to Tier-2/3 suppliers who were previously excluded.
- **WHY NOT ALREADY DONE:** TReDS already captures the Tier-1 pain; deep-tier requires anchor-buyer data-sharing, a commercial/organisational barrier.
- **WHO WOULD OWN IT:** Corporate treasurer (anchor buyer) + TReDS operator; RBI DPSS regulates.
- **WHAT WOULD HAVE TO CHANGE:** RBI comfort with tokenised-receivable provenance under the June 2026 TReDS Master Directions; anchor-buyer participation.
- **CONFIDENCE:** Medium — strong policy tailwind (Budget 2026), but deep-tier is where global peers failed.

---

### SEGMENT 8 — GIFT City / IFSC entities (the near-term pilot surface)
- **PROCESS:** Everything domestic entities cannot do — RWA tokenisation, tokenised-fund distribution to NRI/foreign capital, tokenised deposits connected to foreign parents.
- **CURRENT COST/FRICTION:** GIFT is the only Indian perimeter where token issuance/platform operation is permitted, and only via sandbox. Live entrants: **Terazo (ORYX, US$7m real-estate AIF, 100% primary subscribed), Realdom India (Pinvest Exchange, fractional real estate)**. IFSCA FinTech Sandbox Framework updated 16 March 2026 (superseding the 2020 and 2022 frameworks).
- **PRIMITIVE:** Shared registry / tokenised fund unit.
- **REGULATORY PATHWAY:** **SANDBOX / LIMITED PILOT.** Tooling layer permitted via CoR (TAS Regulations 2025); platform operation is Limited Use Authorisation pending the final RWA framework (IFSCA consultation paper "Regulatory Approach towards Tokenization of Real-World Assets," 26 Feb 2025).
- **MINIMUM VIABLE PILOT:** Already live (Terazo, Realdom). Next: a debt instrument rather than real estate — a GIFT-listed tokenised bond to accredited investors.
- **SUCCESS METRIC:** Foreign/NRI capital raised into a compliant tokenised vehicle; secondary transfers executed.
- **WHY NOT ALREADY DONE (at scale):** Payments must run through fiat USD escrow, not tokens/stablecoins; accredited-investor-only (US$150k–250k minimums); final framework not notified.
- **WHO WOULD OWN IT:** IFSCA (regulator); the registered TechFin/FME entity.
- **WHAT WOULD HAVE TO CHANGE:** IFSCA notification of the final RWA tokenisation framework, converting sandbox authorisations to full licences.
- **CONFIDENCE:** High — this is demonstrably the nearest permitted surface.

---

### SEGMENT 9 — Government (central and state)
- **PROCESS:** Bond issuance, subsidy/DBT disbursement, land/asset registries, credential verification, procurement.
- **CURRENT COST/FRICTION:** DBT leakage-reduction is the marquee claim; the RBI has run programmable-CBDC DBT pilots (food subsidy in Gujarat, Puducherry, Chandigarh, FY26). Land registries are state subjects with severe title-fraud problems.
- **PRIMITIVE:** Programmable payment (DBT with end-use conditions); shared registry (land/asset title).
- **EXPECTED IMPROVEMENT:** Programmable CBDC can enforce subsidy end-use (RBI FY26 pilots); land-title tokenisation is frequently pitched (Maharashtra's ₹50 trillion asset-tokenisation announcement) but title-registry reform has failed for non-technical reasons for decades.
- **REGULATORY PATHWAY:** DBT-CBDC **LIMITED PILOT** (live); land registry **ANNOUNCED ONLY** (Maharashtra) and should be treated skeptically.
- **SUCCESS METRIC:** Subsidy leakage reduction; for land, disputes reduced (unlikely near-term).
- **WHY NOT ALREADY DONE:** Land is a state subject; the binding constraint is the quality and legal status of the underlying record, which a ledger does not fix (garbage-in problem).
- **WHO WOULD OWN IT:** DEA / relevant ministry (central); state revenue departments (land).
- **WHAT WOULD HAVE TO CHANGE:** For DBT, scale the RBI pilot; for land, primary legislation making the ledger the register of title — not currently contemplated.
- **CONFIDENCE:** Medium on DBT; low on land registry.

---

## Ranking

**Three largest prizes (by rupee friction addressed):**
1. **Cross-border settlement / nostro reconciliation** — ~5% margin on US$129bn (~₹10.9 lakh crore) of inbound flow plus trapped nostro liquidity. Primitive: shared registry.
2. **Corporate bond secondary market** — ₹53.6 lakh crore outstanding, but the addressable friction is the thin ₹7,645 crore/day turnover and 3–7 day OTC settlement. Primitive: atomic settlement.
3. **MSME receivables / deep-tier SCF** — ₹25 lakh crore credit gap. Primitive: verifiable credential / tokenised receivable.

**Three nearest to a permitted pilot (given Module B):**
1. **GIFT City RWA tokenisation** — live sandbox (Terazo, Realdom). Permitted today.
2. **RBI tokenised-CD / deposit pilot on UMI** — live since 8 Oct 2025, e₹-W settlement.
3. **SEBI corporate-bond DLT pilot** — announced 26 May 2026, sponsored, 6–9 month timeline.

**The strategic gap:** Only the corporate bond opportunity appears on both lists — and even there, the "nearest" pilot (SEBI's) targets the least-frictional (already T+1) exchange leg, not the 3–7 day OTC/retail leg where the pain is. The largest prizes (cross-border, MSME deep-tier) are furthest from a permitted domestic pilot because they collide with the PSS Act finality gap and CBDT's VDA silence. The nearest permitted surface (GIFT City) is offshore and accredited-investor-only, so it cannot touch the domestic mass-market friction that makes the prizes large. **The strategic problem is that India's permission surface and its value surface are disjoint.**

---

## Recommendations

**Stage 1 (0–6 months) — build evidence where permission already exists.**
- Foreign banks: stand up a GIFT IBU tokenised-deposit intragroup pilot connecting a live parent programme (Kinexys/Orion/Citi Token Services). Threshold to proceed: IFSCA confirmation that a Limited Use Authorisation covers intragroup USD settlement.
- Domestic banks/depositories: join or shadow the SEBI corporate-bond pilot and the RBI UMI tokenised-CD pilot rather than launching independent PoCs. Threshold: RBI release of the final settlement framework Pandey referenced.

**Stage 2 (6–18 months) — press the two legal cures that unlock the domestic prizes.**
- Lobby CBDT for a circular clarifying that tokenised securities/AIF units/deposits are outside the s.115BBH VDA definition. This single clarification unblocks Segments 5 and 7 domestically. Benchmark that would change strategy: a CBDT clarification (go) vs continued silence (stay in GIFT).
- Support a statutory ledger-as-register concept (Switzerland DLT Act model) and an RBI power to designate a DLT settlement system under the PSS Act. Until both exist, treat all domestic on-chain settlement as sandbox-only.

**Stage 3 (18+ months) — scale only what cleared a success metric.**
- Prioritise deep-tier SCF on TReDS (Budget 2026 tailwind) and corporate-bond OTC settlement (not the liquid exchange leg).
- Do NOT build a bank trade-finance consortium: the global graveyard (we.trade, Marco Polo, Contour, TradeLens) is decisive. If trade finance is pursued, route it through a neutral operator (NeSL/IBA).
- Do NOT pitch household gold or land registry as near-term tokenisation opportunities to this audience; both fail for non-technical reasons and will discredit the credible cases.

---

## Caveats and staleness
- **FX conversions** use ₹95.45/USD (31 Aug 2026); FY25 stock figures were struck near ₹85–87. Re-check any USD figure against the rate on its own as-of date. The RBI reference rate is republished via CEIC/MSEI, not RBI's own daily publication — confirm against FBIL/Reuters for a formal citation.
- **Fast-moving items (re-check within 6 months):** SEBI corporate-bond pilot (announced May 2026, confirmed active Aug 2026 — check for launch date and named participants); RBI UMI tokenised-CD pilot (Oct 2025 — check for volume disclosure and expansion to commercial paper); IFSCA final RWA framework (pending — check for notification); TReDS Master Directions 2026 (June 2026 — check securitisation/tokenisation implementation).
- **UNVERIFIED figures flagged in text:** quantified benefit of the RBI tokenised-CD pilot (none disclosed); eBG issuance time reduction (vendor claim); e₹-W current volumes (only early-2022 pilot figures found: ₹287.5–572.5 crore/day, CCIL via Business Standard Nov 2022); the India remittance point-cost of 5.33% (World Bank G20 update) could not be independently confirmed against the primary RPW report, which gives South Asia 5.16% and India "below 6%" — use the regional figure.
- **No consolidated system-wide bank-guarantee/LC outstanding figure** exists in public sources; must be pulled from RBI Statistical Tables or individual bank contingent-liability schedules.
- **Household gold, private-credit projections (EY US$60–70bn by 2028), and Maharashtra's ₹50tn land plan are projections/announcements, not realised figures** — do not present as current.
- **Source conflation note:** Several vendor and crypto-media sources (T4/T5) conflated the infrastructure question (settlement/tokenisation) with the asset question (ETH/crypto as investment) and with price-driven headline valuations (e.g., Morgan Stanley's US$3.79tn gold figure is a valuation inflated by the 2025 price rally, not a mobilisable base). These have been separated throughout and the asset-price framing excluded per scope.

---

## The five closing items

**1. The five findings hardest for a skeptic to dismiss:**
- India already runs a production DLT system (SEBI Security & Covenant Monitoring, 4,291 issuers, ~90% of secured ISINs mapped, Cognizant/NSDL) — the "does it work" argument is settled domestically.
- The RBI has settled real G-sec and call-money transactions on wholesale CBDC since 2022 and launched a tokenised-CD pilot on 8 Oct 2025 — the settlement rail exists.
- The corporate bond secondary market genuinely is illiquid (₹7,645 crore/day against ₹53.6 lakh crore outstanding; 3.8% of outstanding traded per month) — the friction is real and SEBI has publicly committed to a pilot.
- The PNB-Nirav Modi ₹14,356 crore fraud is an unambiguous, on-the-record case where a shared registry would have prevented off-book instruments — the strongest fraud-prevention argument.
- The global trade-finance graveyard (Module A) proves the technology is not sufficient — which paradoxically makes the argument credible to skeptics, because it shows honest scoping.

**2. The one dataset that would make the strongest chart:** Corporate bond outstanding (₹53.6 lakh crore, FY25) versus average daily secondary turnover (₹7,645 crore, FY25) — a single bar pair that visually captures the illiquidity that tokenisation claims to address. Pull from the RBI Annual Report 2024–25 / Financial Stability Report (30 Jun 2025) and NITI Aayog, *Deepening the Corporate Bond Market in India* (Dec 2025).

**3. The three claims most likely to be challenged, and the best evidence:**
- "Remittances cost ~5%" — challenger will cite UPI-PayNow as already cheap. Best evidence: World Bank RPW Issue 49 Q1 2024 (South Asia 5.16%, India below 6%; banks 12.66%), and note UPI-PayNow is retail P2P only and capped at ₹60,000, so it does not touch wholesale flows.
- "The MSME gap is ₹25 lakh crore" — challenger will note estimates range ₹20–30 lakh crore. Best evidence: Deloitte (Mar 2025) ₹25 lakh crore and RBI U.K. Sinha Committee ₹20–25 trillion — cite the range, not a point.
- "Tokenisation improves bond settlement" — challenger will note the exchange leg is already T+1. Best evidence: concede the point and pivot to the 3–7 day OTC/retail leg (NSDL platform materials) — that is the real target.

**4. One-sentence summary for a non-technical executive:** India has already built and proven the plumbing for tokenised finance in narrow places, but the processes where the money actually is — cross-border settlement, the corporate bond secondary market, and MSME receivables — remain blocked by two unfixed laws (settlement finality and ledger-as-register) and one unanswered tax question, so the near-term action is in GIFT City and the RBI/SEBI pilots, not the domestic mass market.

**5. What this module could NOT establish, and what would be needed:**
- **No quantified benefit** from any live Indian pilot (RBI declined to disclose tokenised-CD efficiency gains) — would need the RBI/SEBI pilot post-mortem data.
- **No system-wide bank-guarantee/LC outstanding figure** — would need RBI Statistical Tables Relating to Banks or aggregated bank contingent-liability schedules.
- **No operational corporate-action error-rate or settlement-failure-rate** — the IEPF corpus (~₹5,262 crore, FY22) is only a proxy; would need NSCCL/ICCL settlement-failure statistics or a depository operational report.
- **No named participants** in the SEBI corporate-bond pilot or the RBI UMI pilot — would need the respective regulators' pilot documentation.
- **No current e₹-W volume** — only Nov 2022 pilot-week figures found (₹287.5–572.5 crore/day); would need an RBI CBDC progress disclosure.