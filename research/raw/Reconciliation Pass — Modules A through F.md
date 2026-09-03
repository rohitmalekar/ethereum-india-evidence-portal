# Reconciliation Pass — Modules A through F

*This interrogates the six modules against each other. It surfaces internal disagreements, audits every number, isolates unsourced claims, and states plainly where the evidence supports, complicates, or contradicts the working thesis. Nothing here is new research; it is a consistency and defensibility check on what the modules already assert. Where a module's figure rests on T4/T5, that inheritance is flagged — this pass does not upgrade a source by repeating it.*

---

## 1. CONTRADICTIONS

Places two or more modules disagree on a fact, figure, date, or implication.

### 1.1 Ethereum's share of tokenised RWA value — CONTESTED, do not assert a point figure
- **Module A:** "roughly 58–63% of tokenised RWA value" (yellow.com, Aug 2026, T5), with The Block at "almost 34%" (Feb 2026) and an outlier ~68% flagged and rejected; RWA.xyz absolute ~$17.3bn of ~$33.5bn.
- **Module D:** "~$17.5bn of tracked RWA value, ~50% chain share" (RWA.xyz, Aug 2026, T2); matrix cell says "~50% share."
- **Module E:** "~65% of tokenised RWA value is on Ethereum" and "~$31–36bn total with Ethereum ~65%."
- **Verdict:** The three modules quote 50%, 58–63%, and 65% for the same quantity. The denominator and method differ (distributed value vs. represented value vs. issuer count), and the best-tier source (RWA.xyz, T2) supports "largest single share, roughly half" — not 65%. **Rely on: "Ethereum holds the largest single share of tokenised RWA value, roughly half by the best-tier measure (RWA.xyz), with estimates ranging 34–65% depending on method and date."** The 65% figure in Module E should be downgraded to match; it is the least defensible of the three and rests on weaker sourcing. Contested — never assert a single percentage in an external document without pulling RWA.xyz on the publication date and naming the measure.

### 1.2 Total tokenised RWA value (the denominator) — inconsistent across modules
- **Module A:** ~$33.5bn ex-stablecoins (RWA.xyz, July 2026, T2).
- **Module D:** "~$17.5–36bn" and separately "~$33.5–38bn tracked."
- **Module E:** "~$31–36bn."
- **Verdict:** These are not truly contradictory — they are the same fast-moving figure quoted on different dates with different inclusion rules (ex-stablecoins vs. inclusive; distributed vs. represented). But they read as sloppy side by side. **Rely on: the RWA.xyz ex-stablecoins figure with its exact date, re-pulled at use time.** Treat as a monthly-moving number, not a fixed one.

### 1.3 Broadridge DLR monthly volume — reconcilable, but the modules cite different months as if interchangeable
- **Module A:** "$8.0tn in July 2026" (Broadridge press release, T1/company).
- **Module D:** "~$7.3tn Jan 2026, ~$8tn Mar 2026, ~$7.5tn Jun 2026"; explicitly notes "no standalone April 2026 figure locatable."
- **Verdict:** Not a contradiction — a monthly series. But Module A's flat "$8.0tn July 2026" and Module D's "~$7.5tn June 2026" should not be quoted in the same document without the month attached, or a reader will think one is wrong. **Rely on: the dated monthly series, always with the month.** Note the source is Broadridge's own release (company/T4-promotional in substance even though a listed-company disclosure); the Bloomberg Terminal/Kaiko publication (T2) is the stronger citation and should be used where possible.

### 1.4 BUIDL AUM — CONTESTED range, no single number defensible
- **Module A:** "$1.7bn–$2.9bn" across sources; peak ~$2.9bn mid-2025; on-chain ~$1.73bn (RWA.xyz, June 2026).
- **Module E:** "~$2.85bn" stated as if settled.
- **Verdict:** Module A is honest about the range; Module E's "~$2.85bn" implies a precision the data does not support. **Rely on: the live RWA.xyz BUIDL entry on the query date, quoted as a range if not pulled fresh.** Contested at the point-figure level.

### 1.5 BUIDL's Ethereum share of its own AUM — internal drift
- **Module A:** "the majority of AUM sits on Ethereum mainnet" (Nov 2025).
- **Module E (caveat):** "Ethereum's share of BUIDL fell from a large majority to roughly 40% as the fund expanded across eight chains."
- **Verdict:** These genuinely conflict on direction. Module A says majority-on-Ethereum; Module E says ~40% (i.e., no longer a majority). Both are plausible at different dates given BUIDL's rapid multi-chain expansion, but they cannot both be current. **This is contested and should not be asserted without a fresh RWA.xyz per-chain pull.** Flag for re-check before any use.

### 1.6 India bank-channel remittance cost — same figure, drifting vintage
- **Module A/C:** "banks 12.66%" (World Bank RPW Issue 49, Q1 2024, T2).
- **Module E:** "12.66% ... later RPW issues show this figure rising — e.g., 14.55% in Q1 2025."
- **Verdict:** Not a contradiction but a staleness trap: the modules quote a Q1 2024 figure and a Q1 2025 figure for "bank remittance cost." The 12.66% is a **global bank-channel average**, not India-specific — a point Module E makes but Modules A/C blur. **Rely on: the most recent RPW issue, explicitly labelled "global bank-channel average, not India corridor-specific."** Anyone quoting 12.66% as India's cost will be corrected in the room.

### 1.7 e₹ in circulation vs. transaction flow — presentation risk, not a contradiction
- **Module A:** e₹ circulation ₹1,016.5 crore (Mar 2025); FY26 fell to ₹771.7 crore (down ~24%).
- **Module B:** same ₹1,016 crore (Mar 2025) plus cumulative transaction claims (120m/175m transactions, ₹28,000 crore / ~₹400bn).
- **Module F:** repeats ₹1,016 crore and the transaction figures.
- **Verdict:** Consistent on the numbers, but the modules mix **stock in circulation** (₹771–1,016 crore) with **cumulative transaction flow** (hundreds of millions of transactions, tens of thousands of crore). These are different measures and must never be juxtaposed without labels, or the CBDC looks either trivial or huge depending on which a reader grabs. **Rely on: circulation and flow stated as explicitly different measures, both dated.** The FY26 *decline* in circulation (Module A) is the disconfirming fact and the most important of the set.

### 1.8 SEBI DLT covenant system — status label consistent, but "production" claim leans on vendor data
- **Modules B, C, D, E, F** all treat it as the one system IN PRODUCTION.
- **Verdict:** No contradiction — this is the report's spine. But note the adoption *figures* (4,291 issuers, ~90% of secured ISINs) come from **Cognizant's case study (T4/vendor) and NSDL IPO documents (T1-adjacent)**, not a SEBI statistical release. The *mandate* is T1 (the circular); the *adoption scale* is T4. **Rely on: the circular for the mandate (unimpeachable) and the vendor/NSDL figures for scale (labelled as such).** The status label is safe; the scale numbers carry a tier caveat every module should have flagged and only some did.

### 1.9 SEBI bond pilot timeline — "6–9 months" vs. "September 2026" 
- **Module B:** announced 26 May 2026, "6–9 month" implementation → roughly Nov 2026–Feb 2027.
- **Modules C/E/F:** first issuer reportedly REC Ltd, targeted September 2026 unveiling (Reuters exclusive, 25 Aug 2026, unconfirmed by regulators).
- **Verdict:** Mild tension: the Chairman's "6–9 months" from May implies late 2026/early 2027; the Reuters leak implies September 2026 (earlier). Both are sourced; the Reuters date is a single anonymous-sourced exclusive the regulators declined to confirm. **Rely on: "announced May 2026; reportedly targeting a first REC issuance around September 2026, unconfirmed by SEBI" — status ANNOUNCED ONLY.** Do not assert the September date as fact.

### 1.10 Implication-level tension: "Ethereum leads" (A/D) vs. "Ethereum is the wrong domestic answer" (D/E)
- **Module A** foregrounds Ethereum's dominance of tokenised-RWA value.
- **Modules D and E** conclude Ethereum is the wrong choice for almost every *domestic Indian* core-settlement use case (confidentiality, finality, sovereignty).
- **Verdict:** Not a contradiction once scoped — A measures the *global funds/stablecoin* layer, D/E judge the *Indian bank-settlement* layer. But stated carelessly they sound opposed. **Rely on the reconciled framing: Ethereum leads the global asset-tokenisation layer by value; permissioned ledgers lead the bank-settlement layer; India's near-term domestic path is CBDC-settled/permissioned, with public Ethereum relevant mainly to GIFT City and cross-border.** This bifurcation is the single most important interpretive point and must travel with any "Ethereum leads" claim.

---

## 2. FIGURE AUDIT — THE LEDGER

Every quantitative claim across the six modules. Columns: figure · unit · as-of · source · tier · flags. Flags: **[T4/5]** promotional or aggregator only; **[STALE]** older than six months from 1 Sep 2026 (i.e., before ~1 Mar 2026); **[CONFLICT]** two modules gave different numbers; **[DERIVED]** conversion/estimate, not a sourced primary.

### Global institutional (Module A)
| # | Figure | Unit | As-of | Source | Tier | Flags |
|---|---|---|---|---|---|---|
| 1 | JPMorgan Kinexys daily volume | >$5bn/day | Dec 2025 | JPMorgan (Arif Khan) | T4 | [T4] |
| 2 | Kinexys cumulative | >$3tn | Dec 2025 | JPMorgan | T4 | [T4][STALE] |
| 3 | Kinexys avg daily (later) | ~$7bn/day | Apr 2026 | American Banker/PYMNTS | T3 | — |
| 4 | J.P. Morgan total payments/day | >$10tn/day | 2025 | American Banker | T3 | [STALE] |
| 5 | BUIDL AUM | $1.7bn–$2.9bn | 2025–26 | RWA.xyz / Yahoo | T2/T3 | [CONFLICT →1.4] |
| 6 | BUIDL cumulative dividends | ~$100m | Dec 2025 | Messari | T5 | [T5][STALE] |
| 7 | BUIDL networks | 9 chains | Nov 2025 | Securitize | T4 | [T4][STALE] |
| 8 | BENJI/FOBXX suite AUM | $1.98bn | 29 Apr 2026 | Stellar/Franklin | T4 | [T4] |
| 9 | FOBXX AUM | ~$742m–$828m | Q1 2026 | Stellar press | T4 | [T4][CONFLICT internal] |
| 10 | BENJI 7-day yield | 3.58% | 8 Apr 2026 | (aggregator) | T5 | [T5] |
| 11 | WisdomTree WTGXX | ~$764.9m | (cut) | KuCoin/RWA.xyz | T5/T2 | [T5] |
| 12 | Citi Token Services volume | "billions since 2024" | 2024–25 | Citi | T1 | vague |
| 13 | HSBC Gold Token traded | >$1bn | 2024–26 | HSBC | T4 | [T4] |
| 14 | Broadridge DLR monthly | $8.0tn | Jul 2026 | Broadridge | T1/T4 | [CONFLICT →1.3] |
| 15 | Broadridge DLR daily avg | ~$365bn | Jul 2026 | Broadridge | T1/T4 | — |
| 16 | Stablecoin total mkt cap | ~$316bn | 12 Jun 2026 | DefiLlama | T2 | — |
| 17 | USDT share | ~$187bn / 59% | 12 Jun 2026 | DefiLlama | T2 | — |
| 18 | USDC share | ~$75bn / 24% | 12 Jun 2026 | DefiLlama | T2 | — |
| 19 | PYUSD peak / contraction | ~$4.2bn → ~$2.7–2.9bn | Mar–mid 2026 | DefiLlama/CoinDesk | T2/T3 | — |
| 20 | Visa stablecoin settlement run-rate | $7bn annualised | Apr 2026 | Visa | T1 | — |
| 21 | Visa earlier run-rate | ~$3.5bn annualised | 30 Nov 2025 | Visa | T1 | [STALE] |
| 22 | Stripe/Bridge acquisition | $1.1bn | closed Feb 2025 | CoinDesk | T3 | [STALE] |
| 23 | Tempo raise/valuation | $500m at $5bn | Oct 2025 | Ledger Insights | T3 | [STALE] |
| 24 | Ethereum tokenised RWA (abs) | ~$17.3bn / 2,090 RWAs | Aug 2026 | RWA.xyz | T2 | [CONFLICT →1.1] |
| 25 | Total tokenised RWA ex-stablecoin | ~$33.5bn | Jul 2026 | RWA.xyz | T2 | [CONFLICT →1.2] |
| 26 | Ethereum RWA share | 58–63% (34% low, 68% outlier) | Aug 2026 | yellow.com/The Block | T5 | [T5][CONFLICT →1.1] |
| 27 | Tokenised Treasuries: Ethereum | ~$7.1bn of ~$34.67bn | Aug 2026 | RWA.xyz | T2 | — |
| 28 | Tokenised equity: BNB > ETH | $1.2bn vs ~$0.8bn | 31 Aug 2026 | RWA.xyz | T2 | — |
| 29 | we.trade losses | >$8m loss on ~$4m rev | 2020 | S&P/Ledger Insights | T3 | [STALE] |
| 30 | Marco Polo cumulative losses | ~$85m | by 2021 | Ledger Insights/Irish Times | T3 | [STALE] |
| 31 | ASX CHESS write-off | A$245–255m (~US$165m) | Nov 2022 | Finextra/iTnews | T3 | [STALE] |
| 32 | ASX software completion | ~63% | 2022 | ASIC/press | T1/T3 | [STALE] |
| 33 | IBBIC investment | ₹5 cr/bank, ~₹90 cr total (~$10–12m) | Jun 2021 | Ledger Insights/ET | T3 | [STALE] |
| 34 | IBBIC LC time reduction | ~75% (8–9d → 2–3d) | — | (crypto media) | T5 | [T5] UNVERIFIED |

### India perimeter (Module B)
| # | Figure | Unit | As-of | Source | Tier | Flags |
|---|---|---|---|---|---|---|
| 35 | SEBI DLT issuers onboarded | 4,291 | FY25 | Cognizant | T4 | [T4][STALE][→1.8] |
| 36 | SEBI DLT secured ISINs mapped | 6,368 (~90%) | FY25 | Cognizant | T4 | [T4][STALE] |
| 37 | SEBI DLT trustee-approved ISINs | 6,366 (>95%) | FY25 | Cognizant | T4 | [T4][STALE] |
| 38 | NSDL registered issuers | 79,773 (6,287 listed) | 31 Mar 2025 | NSDL RHP | T1 | [STALE] |
| 39 | e₹ circulation | ₹1,016.5 cr (~$115m) | Mar 2025 | RBI AR | T1 | [STALE][→1.7] |
| 40 | e₹ circulation FY26 | ₹771.7 cr (−24%) | Mar 2026 | RBI AR FY26 | T1 | [→1.7] |
| 41 | e₹ retail users | ~6m / 17 banks | Mar 2025 | RBI AR | T1 | [STALE] |
| 42 | e₹ retail cumulative txns | ~120m, >₹28,000 cr | 5 Dec 2025 | Dep. Gov. speech | T3 | [→1.7] |
| 43 | e₹ users/txns (mid-26) | ~12m, >175m txns, ~₹400bn | 2 Jul 2026 | Governor speech | T3 | [→1.7] |
| 44 | Binance FIU penalty | ₹18.82 cr (~$2.25m) | Jun 2024 | press | T3/T4 | [STALE] |
| 45 | VDA tax rate | 30% + 4% cess | current | Income-tax Act s.115BBH | T1 | — |
| 46 | VDA TDS | 1% >₹10k (₹50k specified) | current | s.194S | T1 | — |
| 47 | DPDP max penalty | ₹250 cr per contravention | 2023 | DPDP Act s.33 | T1 | — |
| 48 | GST on crypto services | 18% | ~Jul 2025 | advisory blogs | T5 | [T5] UNVERIFIED |
| 49 | GST rate deliberated (not enacted) | 28% | 2022 | Business Standard | T3 | [STALE] |
| 50 | GIFT real-estate tokenisation deal | ~$7m, $150k min | — | CoinGeek | T5 | [T5] UNVERIFIED |
| 51 | IFSCA RWA consultation date | — | 26 Feb 2025 | IFSCA | T1 | [STALE] |
| 52 | UK DSS duration | 5 years from 8 Jan 2024 | 2024 | BoE/FCA | T1 | [STALE] |
| 53 | EU DLT Pilot derogation cap | up to 6 years | 2022/858 | EU reg | T1 | [STALE] |

### India value/sizing (Module C)
| # | Figure | Unit | As-of | Source | Tier | Flags |
|---|---|---|---|---|---|---|
| 54 | Corp bonds outstanding | ₹53.6 lakh cr | FY25 | RBI FSR/NITI Aayog | T1 | — |
| 55 | Corp bond fresh issuance | ₹9.9 lakh cr | FY25 | NITI Aayog | T1 | — |
| 56 | Corp bond daily secondary turnover | ₹7,645 cr/day (3.8%/mo) | FY25 | RBI AR/FSR | T1 | — |
| 57 | G-sec annual settlement value | ₹1,812 lakh cr | 2024 | RBI PSS Report | T1 | [STALE] |
| 58 | CCIL weekly market repo | ₹8.4 lakh cr/wk | Mar 2025 | CCIL | T1 | [STALE] |
| 59 | RTGS annual value | ₹1,938 lakh cr (~₹7.75L cr/day) | CY2024 | RBI PSS Report | T1 | [STALE] |
| 60 | Inward remittances | US$129bn | 2024 | World Bank | T2 | — |
| 61 | Remittances (RBI, FY25) | US$135.46bn | FY25 | RBI/PIB | T1 | — |
| 62 | Remittance cost to India | <6% (banks 12.66%) | Q1 2024 | World Bank RPW | T2 | [CONFLICT →1.6][STALE] |
| 63 | MSME credit gap | ₹25 lakh cr | Mar 2025 | Deloitte | T3 | — |
| 64 | MSMEs with formal credit | 14% | Jun 2026 | Deloitte | T3 | — |
| 65 | TReDS discounting FY26 | ₹3.47 lakh cr | FY26 | PIB/Min MSME | T1 | — |
| 66 | Mutual fund AUM | ₹65.74 L cr (May26: ₹81.58) | Mar 2025 | AMFI | T2 | — |
| 67 | AIF commitments | ₹13.49 L cr (Dec25: ₹15.74) | Mar 2025 | SEBI/IVCA-Crisil | T2 | — |
| 68 | Private credit (Cat II subset) | ~₹1.95 L cr | Dec 2024 | Treelife/IBEF citing SEBI | T2/T3 | [STALE] |
| 69 | NPS+APY AUM | ₹16.55 L cr | 29 Mar 2026 | PFRDA | T1 | — |
| 70 | EPFO corpus | ~₹31.2 L cr | Aug 2026 | Avendus/Business Today | T3 | — |
| 71 | Trade finance covered/required | 28.5% of $284bn | 2025 | ADB/DGFT | T1/T2 | — |
| 72 | Household gold | ~25,000t (MS: 34,600t/$3.79tn) | 2024–25 | WGC/HSBC; MS | T2/T3 | [DERIVED valuation] |
| 73 | IEPF unclaimed dividend | ~₹5,262 cr | FY22 | IEPFA | T1 | [STALE] |
| 74 | IEPF refunded (2yr) | ₹77.82 cr, 4.36 cr shares, 75,417 claims | Jul 2026 | IEPFA/Parliament | T1 | — |
| 75 | PNB–Nirav Modi fraud | ₹14,356.84 cr (~$2.1bn) | reported May 2018 | Wikipedia/Finowings | T5/T3 | [T5][STALE] |
| 76 | eBG issuance time | 3–5 days → 2–4 hrs | — | NeSL | T4 | [T4] vendor claim |
| 77 | TREP daily average | ~₹4.3 L cr | Mar 2025 | CCIL | T1 | [STALE] |
| 78 | e₹-W pilot-week volume | ₹287.5–572.5 cr/day | Nov 2022 | CCIL/Business Standard | T3 | [STALE] |
| 79 | FX rate used (Module C) | ₹95.45/USD | 31 Aug 2026 | CEIC/RBI | T2 | [CONFLICT: E used ₹88.5, A/B used ₹88] |

### Technology comparison (Module D)
| # | Figure | Unit | As-of | Source | Tier | Flags |
|---|---|---|---|---|---|---|
| 80 | Ethereum uptime | 0 halts since 30 Jul 2015 | Aug 2026 | ethereumuptime.com | T5 | [T5] |
| 81 | Solana outages | ≥11 (2020–24) | 2024 | Helius/MEXC | T5 | [T5][STALE] |
| 82 | Ethereum avg fee | ~$0.16–0.22/tx | Mar 2026 | CoinLaw | T5 | [T5] |
| 83 | Ethereum finality | ~12.8 min (2 epochs) | 2026 | ethereum.org | T4 | [T4] |
| 84 | Broadridge DLR (Jan/Mar/Jun) | $7.3/8.0/7.5tn | 2026 | Broadridge | T4 | [T4][CONFLICT →1.3] |
| 85 | Canton represented value | ~$344.8bn | 12 May 2026 | RWA.xyz | T2 | — |
| 86 | Canton public TVL | ~$961k | Jun 2026 | DefiLlama | T2 | — |
| 87 | Bridge hacks 2022 | $2bn / 13 hacks / 69% | 2022 | Chainalysis | T2 | [STALE] |
| 88 | Crypto theft 2025 | >$3.4bn | Dec 2025 | Chainalysis | T2 | — |
| 89 | DPRK-linked theft 2025 | $2.02bn | Dec 2025 | Chainalysis | T2 | — |
| 90 | India Web3 developer share | 15.2% | Mar 2026 | Hashed Emergent | T3/T4 | — |
| 91 | India new-dev onboarding 2024 | 17% of 39,148 | 2024 | Electric Capital | T2 | [STALE] |
| 92 | UPI monthly (Module D) | 24.51bn / ₹29.82L cr | Aug 2026 | NPCI | T3 | — |
| 93 | Arbitrum RWA | ~$0.85bn / 10,713 holders | Aug 2026 | RWA.xyz | T2 | — |
| 94 | ZKsync RWA | ~$0.96bn / 266 holders | Aug 2026 | RWA.xyz | T2 | — |
| 95 | Solana RWA / holders | ~$4.1bn / 357k | Aug 2026 | RWA.xyz | T2 | — |
| 96 | Solana tokenised-equity share | 97% | Q2 2026 | Blockworks | T3 | — |
| 97 | Avalanche RWA | ~$1.7bn | Aug 2026 | RWA.xyz | T2 | — |
| 98 | Stellar RWA | ~$3.3bn | Aug 2026 | RWA.xyz | T2 | — |
| 99 | Digital Asset raise | ~$135m (2025) / ~$300m at ~$2bn (2026) | 2025–26 | CoinDesk | T3 | [CONFLICT internal: two raises] |

### Objection bank (Module E)
| # | Figure | Unit | As-of | Source | Tier | Flags |
|---|---|---|---|---|---|---|
| 100 | Bybit hack | $1.5bn (ETH) | Feb 2025 | Chainalysis | T2 | [STALE] |
| 101 | Crypto scams/fraud 2025 | ~$17bn (≥$14bn on-chain) | 13 Jan 2026 | Chainalysis | T2 | — |
| 102 | Impersonation scam growth | 1,400% YoY | 2025 | Chainalysis | T2 | — |
| 103 | DeFi protocol losses 2025 | $680m (−74% vs 2022) | Jan 2026 | Immunefi | T2 | — |
| 104 | Personal-wallet compromise | 158,000 cases / $713m | 2025 | Chainalysis | T2 | — |
| 105 | Stablecoin mkt cap (E) | $314.68bn / 382 coins | 21 Jun 2026 | DefiLlama | T2 | — |
| 106 | Stablecoin ATH | $322.4bn | 17 May 2026 | DefiLlama | T2 | — |
| 107 | On-chain insurance active | $130.2m (−20.2%), ~0.9% of losses | 27 Aug 2026 | CoinGecko | T4 | [T4] |
| 108 | Uninsured share | 89% (11% insured) | 2024 | GlobalData | T4 | [T4][STALE] |
| 109 | DeFi exploits Q2 2026 | 99 exploits (record count) | Q2 2026 | DefiLlama | T2 | — |
| 110 | Marsh crypto facility | $825m Lloyd's-backed | Mar 2024 | Marsh | T4 | [T4][STALE] |
| 111 | FATF R.15 non/partial compliance | 65% (43% partial, 22% non) | Apr 2026 | FATF | T1 | — |
| 112 | AA linked accounts | 326.30m cumulative | Jul 2026 | Sahamati | T2 | — |
| 113 | AA fulfilled consents | 538.32m | Jul 2026 | Sahamati | T2 | — |
| 114 | AA enabled-to-linked conversion | <10% (284.6m of 2.88bn) | Mar 2026 | Sahamati/IMPRI | T2/T3 | — |

### Adoption precedent (Module F)
| # | Figure | Unit | As-of | Source | Tier | Flags |
|---|---|---|---|---|---|---|
| 115 | NSDL commenced ops | 20 Nov 1996 | 1996 | Depositories Act/SEBI | T1 | [STALE-historical, stable] |
| 116 | Demat mandatory (institutions) | Jan 1998, 8 scrips | 1998 | SEBI AR 1998-99 | T1 | [historical] |
| 117 | Demat mandatory (all investors) | 4 Jan 1999 | 1999 | SEBI AR | T1 | [historical] |
| 118 | NSDL investor accounts | ~5.0m (4,989,734) | 29 Feb 2004 | NSDL Nest Update | T1 | [historical] |
| 119 | NSDL demat custody value | ₹9,53,914 cr (~$108bn) | Feb 2004 | NSDL | T1 | [historical] |
| 120 | UPI launch banks | 21 → 741 | 2016 → Jul 2026 | PIB/NPCI | T1 | — |
| 121 | UPI volume FY17 → FY26 | 1.78 cr → 24,162 cr txns | FY26 | PIB | T1 | — |
| 122 | UPI Aug 2026 | 24.51bn / ₹29.82L cr | Aug 2026 | NPCI | T3 | — |
| 123 | UPI zero-MDR incentive 21-25 | ₹8,730 cr (~$986m) | 2021–25 | Standing Committee 32nd Report | T1 | — |
| 124 | UPI incentive FY24 | ₹3,631 cr | FY24 | Min Finance | T1 | [STALE] |
| 125 | Incentive cost-recovery | ~11% of cost / ~14% of MDR | Mar 2026 | Standing Committee/DFS | T1 | — |
| 126 | Aadhaar Sec 57 struck down | 26 Sep 2018 | 2018 | Supreme Court | T1 | [historical] |
| 127 | AA linked/enabled (F) | 326.30m / 538.32m | Jul 2026 | Sahamati | T2 | [dup of 112/113] |
| 128 | ONDC scale | 1,200+ cities, 7L+ sellers | early 2025 | Business Standard | T3 | [STALE] |
| 129 | ONDC retail orders peak→trough | 6.5m (Oct24) → 4.6m (Feb25) | 2024–25 | Business Standard | T3 | [STALE] |
| 130 | ONDC service fee | ₹1.5/txn >₹250 | Apr 2025 | Policy Circle | T3 | [STALE] |
| 131 | RTGS live | 26 Mar 2004 | 2004 | BIS/RBI | T1 | [historical] |
| 132 | NEFT launch | Nov 2005 | 2005 | RBI | T1 | [historical] |
| 133 | NACH replaced ECS | 1 May 2016 | 2016 | NPCI | T1 | [historical] |
| 134 | Sibos 2025 attendance | >12,500 / 168 countries | Oct 2025 | SWIFT/Sibos | T4 | [T4] |
| 135 | Point Zero Forum 2025 | >2,000 / 60 countries / ~⅓ public | May 2025 | Point Zero/GDF | T4 | [T4][STALE] |
| 136 | Token2049 SG 2025 | ~25,000 / ~7,000 cos | Oct 2025 | Token2049 | T4 | [T4] |
| 137 | Devconnect 2025 | 14,000+ / 130+ countries | Nov 2025 | Ethereum Foundation | T1 | — |
| 138 | GFF 2024 | >80,000 / 120 central bankers | 2024 | GFF/Business Standard | T4/T3 | [STALE] |

**Audit headline counts:** 138 distinct quantitative claims. **T4/T5-only (must not stand alone as sole source for a volume/adoption/performance figure): #1, 2, 6, 7, 8, 9, 10, 11, 13, 26, 34, 35, 36, 37, 48, 50, 76, 80, 81, 82, 83, 84, 90, 107, 108, 110, 134, 135, 136, 138.** That is ~22% of all figures resting on the weakest two tiers — the single most important output of this audit. **Unverified (T5-only, flagged in-text): #34 (IBBIC 75%), #48 (GST 18%), #50 (GIFT deal).** **Stale (pre-Mar 2026), non-historical, needing re-pull before use: #2, 4, 6, 7, 21, 22, 23, 30–33, 35–39, 41, 44, 49, 51–53, 57–59, 68, 73, 77, 78, 81, 87, 91, 100, 108, 110, 124, 128–130, 135, 138.** **FX inconsistency (#79): three modules used three rates (₹88, ₹88.5, ₹95.45) — standardise before any cross-module rupee/USD comparison.**

---

## 3. UNSUPPORTED OR WEAKLY-SUPPORTED ASSERTIONS

Claims stated without a source, or on a source too weak to carry them, that must be sourced or cut before external use.

1. **"IBBIC/IBDIC cut LC processing ~75%"** (A) — T5-only, explicitly UNVERIFIED. Cut or replace with the T3 design-goal ("4–5 days to hours").
2. **"18% GST on crypto services in practice"** (B) — rests on advisory blogs, no CBIC notification. Either find the primary notification or state "no confirmed primary instrument."
3. **"GIFT City real-estate tokenisation, ~$7m, Terazo/Realdom"** (B) — CoinGeek-only for the deal specifics. The IFSCA sandbox authorisation is sourced; the deal size is not.
4. **"Ethereum's share of BUIDL fell to ~40%"** (E caveat) — asserted without a dated per-chain pull; directly conflicts with Module A. Unsupported as stated.
5. **"~65% of tokenised RWA value on Ethereum"** (E) — the 65% point figure is not supported by the T2 source (RWA.xyz), which supports ~50%. Downgrade.
6. **"eBG issuance falls from 3–5 days to 2–4 hours"** (C) — NeSL vendor claim (T4), presented with a hedge but still used. Label as vendor claim, not a measured outcome.
7. **Practical constraints on Indian institutional conference attendance** (F) — "compliance and optics," "seniority expectations," "closed roundtable vs public session" are presented as "analytical synthesis" with no source. They are reasonable but are assertions, not findings. Flag as judgement, not evidence, in any external doc.
8. **"The RBI was the blocking party" on the crypto discussion paper** (B/E) — sourced to Moneycontrol via CryptoTimes (T5-adjacent). Plausible and widely reported but rests on anonymous sourcing; present as "reported," not fact.
9. **Household gold as any kind of addressable figure** (C) — Module C correctly warns against it, but the ~$3.79tn Morgan Stanley number is a price-inflated valuation, not a mobilisable base. Any downstream use that treats it as a market size is unsupported.
10. **"Most Canton throughput is a single application (DLR repo), a market-structure artefact"** (A/D) — the interpretive claim (gross volume inflated by repeated overnight cycles) is sourced to Rosa & Roubini (T3) but is an analytical inference; defensible but should be attributed as analysis, not stated as fact.
11. **"Digital Asset raise"** (D, #99) — two different raises (~$135m 2025; ~$300m at ~$2bn 2026) appear; the 2026 figure is stated without a clean primary. Reconcile or drop the larger one.
12. **Falsifiable-condition thresholds** (D) — e.g., ">70% of RWA value by 2028," "single-slot finality not delivered by end-2027" — these are analyst-constructed benchmarks, not sourced projections. Legitimate as a framework, but must never be cited as if forecast by a named source.

---

## 4. THE STRONGEST TEN

Ranked by how hard a skeptical Indian institutional audience would find them to dismiss. Each with its single best supporting source.

1. **India already runs one DLT system in mandatory production in regulated finance: SEBI's Security & Covenant Monitoring System (NSDL/CDSL).** Best source: **SEBI circular SEBI/HO/MIRSD/CRADT/CIR/P/2022/38, 29 Mar 2022 (T1).** Undismissable because the mandate is a primary regulatory instrument; it converts the debate from "does DLT work here" to "what else is worth it." (Scale figures are T4 — lead with the circular, not the 4,291.)

2. **There is no crypto ban in India — the Supreme Court struck down the RBI's 2018 banking-access circular.** Best source: **IAMAI v. RBI, WP(C) 528/2018, 4 Mar 2020 (T1).** A reported judgment; cannot be waved away.

3. **The entire first wave of bank-consortium trade-finance blockchains failed, and mostly on governance, not technology.** Best source: **Maersk/IBM TradeLens wind-down, Q1 2023 (T3, corroborated).** Undismissable because it is the skeptic's own ammunition used honestly — and it disarms "permissioned is obviously safer."

4. **The highest-volume tokenised-settlement system in the world runs on a permissioned ledger, not public Ethereum.** Best source: **Broadridge DLR monthly volume, dated, via Bloomberg Terminal/Kaiko (T2)** (prefer over the company release). Establishes the public/permissioned bifurcation with a hard number.

5. **Confidentiality is why JPMorgan, Goldman, DTCC and HSBC chose permissioned Canton over public Ethereum — on the record.** Best source: **Digital Asset CEO Yuval Rooz, The Defiant, Dec 2025 (T3),** with DTCC's SEC No-Action Letter (T1) as corroboration. Concedes the skeptic's strongest technical point and turns it into an architecture argument.

6. **Both of India's near-term tokenisation pilots settle in wholesale CBDC, not stablecoins — the sovereign-rail path the RBI actually wants.** Best source: **RBI Annual Report FY26, 29 May 2026 (T1).** Aligns the case with the regulator's stated preference rather than against it.

7. **Adoption of new financial infrastructure in India historically required compulsion or subsidy, not market pull — demat scaled only under mandate.** Best source: **SEBI Annual Report 1998-99 (T1).** A regulator's own record; the closest structural analogue to tokenisation.

8. **Account Aggregator shows a consent/ledger network without a mandate produces enablement without usage — under 10% conversion after five years.** Best source: **Sahamati ecosystem dashboard, Mar 2026 (T2).** The freshest, most direct warning about the base-case failure mode.

9. **UPI's "free" model is not self-financing — the subsidy covers only ~11% of industry cost.** Best source: **Parliamentary Standing Committee on Finance, 32nd Report, 12 Mar 2026 (T1).** Kills the "free rails scale themselves" narrative from Parliament's own committee.

10. **The largest single crypto loss of 2025 ($1.5bn, Bybit) was a key-management/supply-chain failure, not an Ethereum protocol failure — and DeFi protocol losses fell 74%.** Best source: **Chainalysis 2026 Crypto Crime Report, Dec 2025 (T2)** + **Immunefi 2026 (T2).** Correctly relocates the risk to custody/operations, where a bank already has controls.

*(Note: #1's headline scale figure and #4's volume both have tier caveats — lead each with its T1/T2 anchor, not its T4 embellishment.)*

---

## 5. THE WEAKEST FIVE

Where the research is thinnest and where an informed opponent attacks first.

1. **Every vendor volume claim is company-reported and unaudited (Kinexys >$5bn/day, Citi "billions," Broadridge, HSBC Gold >$1bn).** An opponent says: "these are marketing numbers." *Fix:* obtain a Bloomberg/Reuters or filing-based confirmation for at least Kinexys and Broadridge; until then, always label as company disclosure and never build a chart solely on them. The Broadridge Bloomberg-Terminal/Kaiko feed (T2) is the one upgrade available now — use it.

2. **Ethereum's RWA share is quoted at 50%, 58–63%, and 65% across three modules with different denominators.** An opponent picks the lowest (34%, The Block) and calls the rest advocacy. *Fix:* commit to one measure (RWA.xyz distributed value), one date, and the phrase "largest single share, roughly half"; retire the 65% and 58–63% figures from external use.

3. **The India-specific "so what" is under-evidenced at the point of impact.** The report sizes markets well (₹53.6L cr bonds, US$129bn remittances) but has **no measured Indian cost-saving or efficiency figure** from any live pilot — the RBI disclosed none, and the eBG/IBBIC time-savings are vendor/T5. An opponent says: "you have not shown one rupee saved in India." *Fix:* obtain RBI/SEBI pilot post-mortem data, or an NSDL/CDSL operational metric; until then, concede openly that no measured Indian benefit exists yet.

4. **The conference/Devcon thesis rests on absence of evidence.** Module F honestly finds no attributable pilot from any developer-conference institutional track, and the Indian-attendance constraints are unsourced synthesis. An opponent says: "so the event achieves nothing measurable." *Fix:* either surface one sourced conference-to-pilot causal case, or reframe the recommendation explicitly as "convening, not procurement," which the module already does — but the external version must not overclaim.

5. **The legal-cure path is long, unowned, and partly speculative.** The strongest domestic prizes need a PSS Act finality provision, a Depositories Act register change, and a CBDT VDA carve-out — none of which has a named sponsor or timeline. An opponent says: "you are asking for three legislative changes with no champion." *Fix:* identify which body could move each (RBI can designate under PSS Act *administratively* — the one near-term lever; the others need SEBI/Parliament/CBDT), and separate the administratively-achievable from the legislative. Overstating near-term legal feasibility is the fastest way to lose credibility.

---

## 6. WHAT CHANGED THE THESIS

Working position: *Ethereum's role in India is a neutral settlement and interoperability layer beneath India's existing domestic infrastructure, complementing rather than replacing it; the institutional case is about infrastructure, not about holding any asset.*

**Where the evidence SUPPORTS it.**
- The infrastructure-not-asset framing holds cleanly and is vindicated. India's regulators are demonstrably willing to mandate and pilot DLT *infrastructure* (SEBI covenant system; RBI UMI/CD pilot) while remaining hostile to crypto *as an asset* (VDA tax, RBI's stated prohibition preference). The asset/infrastructure distinction is not a rhetorical convenience — it is the actual line Indian regulators draw. This is the strongest confirmation.
- "Complementing rather than replacing" holds for the one production case: the SEBI DLT system sits *inside* the depository perimeter (NSDL/CDSL operate it), layered onto existing infrastructure rather than substituting for it. Demat precedent (Module F) says this is exactly how India absorbs new plumbing.

**Where the evidence COMPLICATES it.**
- "Neutral settlement layer" is doing more work than the evidence supports. For the *domestic* core-settlement layer, the market — globally and in India's own pilots — chose *permissioned* ledgers and *CBDC* settlement, not a neutral public chain. Ethereum's neutrality is a virtue for the funds/reachability layer and a liability for the confidentiality/finality layer. So "neutral settlement layer beneath domestic infrastructure" is right for GIFT City and cross-border, and wrong for domestic bank settlement.
- "Interoperability layer" is aspirational, not demonstrated. No Indian production case uses Ethereum for interoperability today; the interoperability value (reachability to ~$33bn of global tokenised assets) is real but sits offshore, behind the GIFT City perimeter and the FEMA/finality gaps.

**Where the evidence CONTRADICTS it.**
- The implicit premise that *Ethereum specifically* is the substrate does not survive contact with the production record. For every domestic use case the modules examined, the honest answer (Modules D and E) is that a **permissioned ledger or the CBDC is the right rail, and public Ethereum is the wrong one** — on confidentiality, on finality, on sovereignty. Public Ethereum's defensible domestic role narrows to: (a) GIFT City fund tokenisation for reachability, and (b) genuinely cross-border flows. That is a much smaller claim than "a neutral settlement layer beneath India's infrastructure."
- Directly stated: **the evidence does not support Ethereum as the general-purpose settlement layer beneath Indian finance.** It supports Ethereum as one venue — leading at the global asset-tokenisation layer, marginal at the Indian domestic-settlement layer, and relevant to India mainly through GIFT City and cross-border. The working position should be revised from "Ethereum as the neutral layer beneath Indian infrastructure" to "distributed-ledger settlement as an emerging layer, on which India will use sovereign/permissioned rails domestically and public Ethereum selectively offshore." The infrastructure-not-asset half of the thesis is confirmed; the Ethereum-as-neutral-domestic-layer half is not.

---

## 7. FORM FACTOR MAP

Which ledger findings anchor which output. Numbers refer to the Section-2 ledger; named findings refer to Section 4.

**a) One-page conference leave-behind** (must be undismissable, few claims, big):
- Strongest-Ten #1 (SEBI DLT in production, circular #35/T1 anchor)
- #54 + #56 (₹53.6L cr bonds, ₹7,645 cr/day turnover — the illiquidity gap in one line)
- #60 (US$129bn remittances)
- Strongest-Ten #4 (Broadridge on permissioned, #14/#84 dated)
- Bifurcation framing (§1.10) as the one-sentence thesis.

**b) Fifteen-slide bank technology committee deck** (decision-useful, honest about cost):
- Strongest-Ten #1, #4, #5 (production reality + public/permissioned split)
- #85 + #86 (Canton $344.8bn represented vs $961k public TVL — the value-vs-liquidity slide)
- #54/#56 (the domestic problem) + gap analysis (which Module A cases India can/can't run)
- Strongest-Ten #3 (consortium graveyard) as the risk slide
- Weakest-Five #1 and #3 as the "what we don't yet know" slide (vendor figures unaudited; no measured Indian saving).

**c) Policy note for a regulator's technical staff** (legal precision, sovereign framing):
- #6 (RBI FY26 AR: CBDC-settled pilots)
- The finality gap (PSS Act 2007) and register gap (Depositories Act 1996) — Module B legal findings
- #111 (FATF R.15 65% non/partial compliance) for the AML-realism point
- Comparative mechanisms: UK DSS (#52), EU DLT Pilot (#53), Switzerland ledger-based security — the transplantable instruments
- Strongest-Ten #6 + the sovereignty two-way analysis (Module E 5.1).

**d) Op-ed for the Indian financial press** (one counter-intuitive, well-sourced claim):
- Strongest-Ten #1 (India already runs a production blockchain in regulated finance — the hook)
- Strongest-Ten #7 (demat precedent, SEBI AR 1998-99) + #9 (UPI subsidy ~11% cost-recovery, Standing Committee)
- #40 (e₹ circulation *fell* 24% — the honest disconfirming detail that earns credibility)
- Bifurcation framing (§1.10) as the thesis: sovereign rails at home, public chains offshore.

**e) Briefing for a non-beat journalist** (plain, memorable, no jargon):
- Strongest-Ten #2 (no crypto ban — Supreme Court 2020) to clear the biggest misconception
- Strongest-Ten #1 (SEBI already mandates a blockchain system) as the surprise
- #75 (PNB–Nirav Modi ₹14,356 cr) as the concrete "what problem it solves" story — *labelled, since its sourcing is T5/T3*
- Asset-vs-infrastructure distinction (Section 6) as the framing they must not get wrong.

**f) Session abstract for a developer conference's institutional track** (credible to both sides):
- Strongest-Ten #4 + #5 (public/permissioned bifurcation, Canton's confidentiality win) — signals honesty to institutions
- #90/#91 (India's developer depth — 15.2% of global Web3 devs) — the "why here" hook
- Module F format precedent (closed roundtable, regulator-anchored — Point Zero/GFF model)
- Weakest-Five #4 (honest ceiling: convening not procurement) — sets expectations the room will respect.

---

*End of reconciliation pass. The two things to fix before anything external ships: (1) standardise the Ethereum-RWA-share claim to one measure/date and retire the 65% and 58–63% variants; (2) attach a tier label to every vendor volume figure and never chart on a T4/T5 number alone. The two things that most strengthen the whole body: a Bloomberg/filing confirmation of one bank volume, and any measured Indian pilot cost/benefit figure — currently the single biggest evidentiary hole.*