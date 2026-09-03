# Module E — The Objection Bank
## Ethereum and Distributed Settlement Infrastructure in Indian Institutional Finance

*Reference document. Every objection-and-response block is self-contained and can be lifted intact with its source and date attached. Status labels — IN PRODUCTION / LIMITED PILOT / ANNOUNCED ONLY / WOUND DOWN — carry more weight than the surrounding description. Currency conversions name the rate and date used. Figures older than six months are flagged for re-checking. Scope: Ethereum as financial infrastructure (settlement, tokenisation, registries, collateral, custody, verification, programmable payments, identity), not ETH as an investment or asset.*

---

## TL;DR

- **The regulatory objections are the strongest and largely correct as stated; the technical and strategic objections are mostly true-in-part but overstated.** India has no crypto ban, but the RBI is on record preferring prohibition of private crypto (Governor Sanjay Malhotra, "huge risk," reported 21 Nov 2025; Deputy Governor T. Rabi Sankar, stablecoins "serve no purpose," 12 Dec 2025), the 30% VDA tax with no loss set-off (s.115BBH) makes the private-crypto-asset route uneconomic, and neither on-chain settlement finality nor DLT-as-legal-register has statutory recognition. These are real, unresolved, and honestly conceded.
- **The "consortium blockchain always fails" and "solution looking for a problem" objections are the ones most likely to be won by the skeptic and should not be argued against head-on** — the failure record (TradeLens, Marco Polo ~$85m cumulative losses, we.trade, Contour, ASX CHESS ~A$250m write-off) is overwhelmingly permissioned DLT, and India already runs UPI (24.51bn transactions, ₹29.82 lakh crore in Aug 2026) and a live DLT covenant-monitoring system, so any new proposal must clear a specific "why not the rail we already have" test.
- **The honest position is narrow and defensible: public-chain settlement has one production foothold in India (SEBI's DLT covenant-monitoring system, 4,291 issuers) and two nascent CBDC-settled pilots (RBI's tokenised-CD pilot, SEBI's REC corporate-bond pilot targeted for September 2026) — everything else globally runs on permissioned Canton, not public Ethereum.** Lead with the specific rupee problem and the named owner, not the technology.

---

## Key Findings

1. **Every regulatory objection contains a conceded truth, and three of them (finality, register, data-erasure) have no current Indian legal answer.** The correct response is not to deny the gap but to scope pilots inside the one perimeter (GIFT City/IFSC) or settlement layer (wholesale CBDC) where the gap is contained.
2. **The reputational objection is empirically the strongest against public chains and the weakest against the specific institutional use case.** 2025 was the worst year on record for crypto theft ($3.4bn, Chainalysis), and the single largest loss — the $1.5bn Bybit hack, Feb 2025 — was ETH. But the failure mode was operational/key-management (a compromised Safe{Wallet} developer machine), not an Ethereum protocol failure, and institutional tokenised-fund infrastructure (BUIDL, ~$2.85bn) has not been the target.
3. **The confidentiality objection is decisive and should be conceded without qualification.** It is the explicit, on-record reason JPMorgan, Goldman, DTCC and HSBC chose permissioned Canton, not public Ethereum. Public-chain proposals for bank balance-sheet activity in India are answering the wrong question.
4. **India's own nearest-term pilots both settle on wholesale CBDC (e₹-W), not on a public chain or a stablecoin** — this is the domestically viable architecture, and it sidesteps the RBI's dollarisation objection entirely.
5. **The commercial "pioneer cost" objection is real and currently correct: no Indian institution has a public-chain settlement system in production.** The defensible near-term ask is a sandboxed or CBDC-settled pilot on a contained rupee problem, not a balance-sheet migration.

---

## Details — The Objection Bank

Each block: **THE OBJECTION IN ITS STRONGEST FORM · WHAT IS TRUE IN IT · THE EVIDENCE-BASED RESPONSE · THE RESIDUAL WEAKNESS · WHO RAISES IT.**

---

### CATEGORY 1 — REGULATORY

---

#### Objection 1.1 — "Crypto is effectively prohibited in India, or about to be."

**THE OBJECTION IN ITS STRONGEST FORM.** The central bank has spent a decade trying to keep crypto out of the regulated system. It issued a banking ban in 2018; when the Supreme Court struck that down on proportionality grounds (IAMAI v. RBI, 4 Mar 2020), the RBI simply shifted tactics. The government's crypto discussion paper has been shelved at least five times, with the RBI cited as the blocking party (Moneycontrol, reported Apr 2026). A Parliamentary Standing Committee is studying "Virtual Digital Assets and the Way Forward." The direction of travel is prohibition-by-attrition, and building institutional infrastructure on an asset class the RBI wants gone is building on sand.

**WHAT IS TRUE IN IT.** The RBI's institutional preference for prohibition of *private* crypto is on the public record, not inferred. Governor Sanjay Malhotra: crypto and stablecoins carry "a huge risk" and the RBI is "adopting a very cautious approach" (Delhi School of Economics, reported 21 Nov 2025). Deputy Governor T. Rabi Sankar: stablecoins "serve no purpose" fiat cannot and pose "an existential threat to policy sovereignty" (Mint BFSI Conclave, 12 Dec 2025). The discussion paper has genuinely stalled. The direction of official sentiment is real and not improving.

**THE EVIDENCE-BASED RESPONSE.** Prohibition of private crypto assets is not prohibition of distributed-ledger infrastructure, and India's regulators actively distinguish the two. The single genuinely production DLT system in Indian regulated finance — SEBI's Security and Covenant Monitoring System on NSDL/CDSL (mandated by circular SEBI/HO/MIRSD/CRADT/CIR/P/2022/38, 29 Mar 2022) — is a permissioned blockchain system SEBI *built and mandated*, with 4,291 issuers onboarded (Cognizant/NSDL case study, FY25). The RBI itself launched a tokenised-CD pilot settled on wholesale CBDC on 8 October 2025, and SEBI announced a corporate-bond tokenisation pilot on 26 May 2026. A regulator building tokenisation rails is not a regulator banning the technology. The correct reading: India is hostile to *private crypto assets as instruments* and simultaneously investing in *tokenisation as infrastructure*, with wholesale CBDC as the settlement asset instead of a private stablecoin.

**THE RESIDUAL WEAKNESS.** The distinction between "asset" and "infrastructure" is clean in principle and muddy in law. The CBDT has not clarified whether a tokenised security or deposit falls inside the VDA definition (s.2(47A)), so an infrastructure project can be dragged into the asset regime by classification. And a regulator that supports *permissioned, CBDC-settled* tokenisation is not thereby endorsing *public-chain* settlement — which is the actual subject of this report. The RBI's comfort does not extend to Ethereum.

**WHO RAISES IT.** A **regulator** raising this is stating a policy preference and testing whether you understand the asset/infrastructure line. A **bank CEO or board member** raising it is asking a career-risk question — "will I be on the wrong side of the RBI?" — and needs the reassurance that a mandated SEBI DLT system already exists.

---

#### Objection 1.2 — "The central bank has stated a prohibition preference, so this is politically dead."

**THE OBJECTION IN ITS STRONGEST FORM.** This is not ambiguity you can work around. The RBI's Financial Stability Report (Dec 2025) flagged the global stablecoin market — roughly $300bn, overwhelmingly dollar-pegged — as a fire-sale, de-pegging, and monetary-sovereignty risk. The Governor has told global central banks to prefer CBDCs over stablecoins (IMF–World Bank annual meetings, Washington). When the institution that supervises every bank in the country has decided, the commercial case is irrelevant.

**WHAT IS TRUE IN IT.** The RBI's position is settled, consistent, and repeated across officials and forums for over two years. It is not a passing mood. Any proposal that requires the RBI to endorse *public* dollar-stablecoin settlement is dead on arrival. The stablecoin market is genuinely large and dollar-concentrated: total stablecoin market cap was $314.68bn across 382 tracked coins with USDT and USDC together holding 83.02% (USDT $186.35bn / 59.22%; USDC $74.89bn / 23.80%), per DefiLlama aggregation as of 21 Jun 2026, having set an all-time high of $322.4bn on 17 May 2026.

**THE EVIDENCE-BASED RESPONSE.** The RBI's objection is specifically to *private, dollar-denominated* value instruments displacing the rupee — "dollarisation" and loss of seigniorage. It is not an objection to ledger technology, and crucially the RBI has offered its *own* rail as the substitute: wholesale CBDC (e₹-W). Both of India's nearest-term tokenisation pilots settle on e₹-W, not on USDC or USDT. That is the tell: the RBI is not blocking tokenised settlement, it is insisting the settlement asset be sovereign. A proposal built on rupee-denominated, CBDC-settled or permissioned-rupee infrastructure is aligned with the RBI's stated preference, not opposed to it.

**THE RESIDUAL WEAKNESS.** This response concedes that the specific thing public Ethereum is best at — open, dollar-stablecoin settlement with global reachability — is precisely what the RBI will not permit domestically. You are left arguing for the parts of the technology the RBI is comfortable with, which are also the parts a permissioned ledger or the CBDC delivers without Ethereum at all. The public-chain case survives only offshore (GIFT City) or for genuinely cross-border rupee-in/foreign-out flows.

**WHO RAISES IT.** A **regulator** is signalling a red line and watching whether you respect it. A **treasury or markets head** is asking whether the RBI's stance forecloses a revenue line they were considering — and the honest answer for domestic dollar-stablecoin settlement is yes.

---

#### Objection 1.3 — "The tax treatment makes any institutional case uneconomic."

**THE OBJECTION IN ITS STRONGEST FORM.** Section 115BBH taxes income from VDA transfers at a flat 30% (plus surcharge and 4% cess), allows no deduction except cost of acquisition, and — decisively for any trading or market-making book — permits no set-off of losses against other income and no carry-forward. Section 194S imposes 1% TDS on transfers. For an institution that must mark-to-market, hedge, and net gains against losses, a regime that ring-fences every loss is not a high tax, it is a structural prohibition. No desk can run a book where losses simply vanish.

**WHAT IS TRUE IN IT.** All of it, as a description of the VDA regime. The 30% rate, no loss set-off, no carry-forward, and 1% TDS are correctly stated and were carried forward unchanged into the Income Tax Act 2025 (effective 1 Apr 2026). For anything that is a VDA, the objection is dispositive: the regime is punitive by design and makes an institutional trading book unviable.

**THE EVIDENCE-BASED RESPONSE.** The regime bites on *VDAs*, and the open question is whether tokenised securities, tokenised deposits, and CBDC-settled instruments are VDAs at all. The VDA definition (s.2(47A)) was written for crypto-assets; a tokenised corporate bond that is a security under the Securities Contracts (Regulation) Act, or a tokenised CD settled in central-bank money, is arguably a security or a deposit, taxed as such — not a VDA. SEBI's and the RBI's own pilots are structured as securities and deposits, not as crypto-assets, which is consistent with them sitting outside the VDA regime. The tax objection therefore applies with full force to the *private-crypto-asset* route and with uncertain force to the *tokenised-regulated-instrument* route.

**THE RESIDUAL WEAKNESS.** "Arguably outside the VDA definition" is not "confirmed outside." The CBDT has issued no express clarification, so the classificatory risk is live and unquantified — an institution could structure a tokenised-bond desk and later find the instrument deemed a VDA, retroactively poisoning its loss treatment. Until the CBDT rules, tax counsel cannot give a clean opinion, and that uncertainty alone is enough for a conservative CFO to decline.

**WHO RAISES IT.** A **CFO or head of tax** raising this wants a written CBDT position and will not move without one. A **regulator** raising it is pointing to an inter-agency gap (CBDT vs SEBI/RBI) that is not theirs to close.

---

#### Objection 1.4 — "There is no legal recognition of on-chain settlement finality."

**THE OBJECTION IN ITS STRONGEST FORM.** Settlement finality is the whole point of a settlement system. In India, legal finality flows from the Payment and Settlement Systems Act 2007, which protects settlement only in systems the RBI has *designated*. No public chain — and no tokenisation pilot outside a designated system — enjoys that protection. If a transfer is unwound, or a counterparty enters insolvency mid-settlement, an on-chain "final" transaction has no statutory shield. And the Depositories Act 1996 contemplates a *depository* holding securities in dematerialised form; it does not contemplate a distributed ledger as the legal register of title. Until both statutes are amended, on-chain settlement is legally unfinished, whatever the block confirmations say.

**WHAT IS TRUE IN IT.** This is correct and is the most serious legal objection in the entire bank. On-chain settlement finality is genuinely unaddressed by the PSS Act, and DLT-as-legal-register is genuinely unaddressed by the Depositories Act. Neither gap has been closed. Comparators have closed it — the EU DLT Pilot Regime and the UK Digital Securities Sandbox both give the regulator a statutory power to disapply named securities law for DLT infrastructure, and Switzerland's DLT Act created a "ledger-based security" whose legal register *is* the ledger — and no Indian regulator holds that power outside the IFSC.

**THE EVIDENCE-BASED RESPONSE.** The gap is real, and the response is architectural, not rhetorical: settle on a system that already has finality. India's pilots do exactly this — the RBI's tokenised-CD pilot and SEBI's corporate-bond pilot both settle through wholesale CBDC, i.e., in central-bank money inside the RBI's own designated infrastructure, which imports finality from the settlement asset rather than asserting it on the ledger. For securities, the register problem is being handled by keeping the depository (NSDL/CDSL) in the loop rather than replacing it — the reported "DEMAT 2.0" securities-wallet approach layers DLT onto the existing depository rather than substituting a ledger for it. The honest framing: finality is achievable today only by anchoring to an already-designated system or an already-recognised depository, not by putting settlement on an open chain and hoping the law catches up.

**THE RESIDUAL WEAKNESS.** This works only for the narrow, CBDC-anchored, depository-in-the-loop design. The moment you want the thing public Ethereum is actually good at — atomic, peer-to-peer, delivery-versus-payment settlement on an open ledger without a central operator — the finality gap is fatal, and no workaround exists short of the RBI designating such a system (which it will not) or Parliament amending the PSS Act. The prizes that most need on-chain finality (true DvP corporate-bond settlement) are the ones the law blocks most completely.

**WHO RAISES IT.** A **regulator or a general counsel** raising this is identifying the single hardest legal barrier and is correct; the honest response is agreement plus an architecture that routes around it. A **markets/operations head** is asking "what happens in a default at 2am on a Sunday" and needs to hear that finality is imported from the CBDC leg, not asserted by the chain.

---

#### Objection 1.5 — "Data-protection law is incompatible with an immutable public ledger."

**THE OBJECTION IN ITS STRONGEST FORM.** The Digital Personal Data Protection Act 2023 gives a data principal the right to erasure (s.12) and the right to withdraw consent (s.6(4)). An immutable ledger cannot erase. If personal data — a name, a wallet mapped to an identity, a KYC record — is written on-chain, the controller is in permanent, structural breach the moment a principal exercises a right the ledger cannot honour, with penalties up to ₹250 crore per contravention. A public ledger and a statutory right to be forgotten cannot coexist.

**WHAT IS TRUE IN IT.** The tension is real and the penalty is large. An immutable ledger holding personal data in the clear is genuinely non-compliant with ss.6(4) and 12, and "the blockchain can't delete it" is not a defence a Data Protection Board will accept.

**THE EVIDENCE-BASED RESPONSE.** The tension is with putting *personal data on-chain*, not with using a ledger at all, and the standard architecture already solves it: personal data is held off-chain in a conventional, erasable store, and only a hash or pointer sits on-chain. Erasing the off-chain record renders the on-chain hash meaningless, satisfying the erasure right in substance. This is not a workaround invented for India — it is the default pattern for regulated tokenisation globally, and it is why BUIDL's on-chain data is holdings and transfers between whitelisted addresses, not investors' personal files. India's DLT covenant-monitoring system is permissioned precisely so that identity and access are controlled off the public record.

**THE RESIDUAL WEAKNESS.** The off-chain-data/on-chain-hash pattern is settled for *identity data* but not for the harder case: where the *transaction graph itself* is personal data. On a public chain, the pattern of transfers to and from an address can re-identify a person even with no name on-chain, and it is unsettled whether that pattern is "personal data" under the DPDP Act. If it is, hashing the KYC file does not cure it, because the offending data is the visible transaction history — which is exactly what a public ledger cannot hide and a permissioned ledger can. This pushes back toward permissioned infrastructure for anything involving identifiable Indian data principals.

**WHO RAISES IT.** A **CISO or DPO** raising this wants to see the off-chain architecture and a DPIA; it is answerable. A **regulator** raising it is testing whether you have thought about re-identification via the transaction graph — the harder question — and a glib "we hash it" answer will lose the room.

---

### CATEGORY 2 — REPUTATIONAL

---

#### Objection 2.1 — "This sector is dominated by fraud and speculation; association is a career risk."

**THE OBJECTION IN ITS STRONGEST FORM.** 2025 was the worst year on record for crypto theft — over $3.4bn stolen (Chainalysis 2026 Crypto Crime Report, 18 Dec 2025), led by a single $1.5bn hack of Bybit in February. In scams and fraud specifically, Chainalysis estimated a record $17bn stolen in 2025 (on-chain inflows of at least $14bn, projected to exceed $17bn), with impersonation scams showing 1,400% year-over-year growth and the average scam payment rising 253% from $782 to $2,764 ("Record $17 Billion Estimated Stolen in Crypto Scams and Fraud in 2025," Chainalysis, 13 Jan 2026). DPRK-linked actors alone stole $2.02bn. An Indian bank executive who attaches their name to "blockchain" is attaching it to the most fraud-saturated corner of finance, and when the next collapse hits the headlines — and it will — that association is a personal liability at the next board review.

**WHAT IS TRUE IN IT.** The theft and fraud figures are accurate and large, the trend is worsening in dollar terms, and reputational contagion in this sector is real. The Bybit hack was the largest single crypto theft in history. A skeptic who says "this ecosystem is dangerous to be associated with" is not wrong about the ecosystem.

**THE EVIDENCE-BASED RESPONSE.** The losses cluster in venues and activities that have nothing to do with institutional tokenisation infrastructure, and the distinction is on the record. The $1.5bn Bybit loss was not an Ethereum protocol failure — it was an operational compromise of a third-party multisig UI (a Safe{Wallet} developer's workstation, injected JavaScript), i.e., a key-management and supply-chain failure that could occur in any custody system. Chainalysis noted that in 2025 *DeFi hack losses remained suppressed even as value locked rebounded*, a reversal of the 2021–23 pattern, and Immunefi put DeFi protocol losses at $680m in 2025, down 74% from the $2.62bn 2022 peak. The fraud is concentrated in retail exchanges, personal-wallet compromise (158,000 cases, but only $713m total, down from $1.5bn in 2024), and scams — not in whitelisted, permissioned institutional tokenisation such as BUIDL (~$2.85bn), which has not been a theft venue. The reputational risk attaches to the retail/speculative layer; the institutional infrastructure layer has a different and better record.

**THE RESIDUAL WEAKNESS.** Reputational risk does not respect these distinctions in a headline. "Indian bank in blockchain project" and "$X billion crypto hack" can appear in the same news cycle regardless of whether they are technically related, and the executive carries that association whether or not it is fair. The distinction is defensible in a memo and useless on the front page. And the trend is genuinely up: total losses rose year-on-year, and 2026 DeFi incident *counts* set records even as dollar losses fell.

**WHO RAISES IT.** A **board member or CEO** raising this is making a career-and-franchise-risk calculation, and no technical rebuttal fully answers it — only a narrow, sovereign-rail, CBDC-settled framing lowers it. A **compliance head** is asking about direct exposure and is more readily satisfied by the institutional/retail distinction.

---

#### Objection 2.2 — "AML exposure is unmanageable."

**THE OBJECTION IN ITS STRONGEST FORM.** On a public chain, funds can arrive from anywhere — a mixer, a sanctioned address, a North Korean laundering wallet. The FATF Travel Rule requires originator and beneficiary information to travel with every transfer, but public chains were built for pseudonymous transfers with no such data. A bank that touches a public chain inherits an AML surveillance problem it cannot bound, and the Enforcement Directorate has already flagged unauthorised crypto transactions. The exposure is open-ended and the regulator will hold the bank, not the chain, responsible.

**WHAT IS TRUE IN IT.** Public-chain AML is genuinely harder than closed-system AML, and Travel Rule compliance across public-chain, unhosted-wallet transfers remains incompletely solved industry-wide. Per FATF's Seventh Targeted Update on Virtual Assets (April 2026), 43% of assessed jurisdictions were rated partially compliant and 22% non-compliant with Recommendation 15 (65% combined), with only one jurisdiction fully compliant; FATF's own summary states "75% of jurisdictions are only partially or not compliant with the FATF's requirements." Cross-jurisdiction transfers to non-compliant counterparties are a real gap, and sanctioned-address exposure on open chains is a live risk.

**THE EVIDENCE-BASED RESPONSE.** Two points cut against the "unmanageable" framing. First, public-ledger transparency is an AML *asset* as well as a liability: the Bybit stolen funds were traced address-by-address in near-real-time by Chainalysis and industry collaborators — a level of forensic traceability the SWIFT correspondent-banking network does not offer, and the exact opposite of the off-book, untraceable mechanism behind the PNB–Nirav Modi fraud (₹14,356.84 crore, reported May 2018), which was executed through unrecorded SWIFT Letters of Undertaking precisely *because* there was no shared, immutable record. Second, institutional tokenisation does not use open pseudonymous transfers — BUIDL and comparable products transfer only between *whitelisted* addresses, so the counterparty set is KYC'd before any transfer, and the Travel Rule problem is bounded by design. The Travel Rule's June 2025 FATF revision even aligns crypto transfers to the ISO 20022 messaging standard banks already use.

**THE RESIDUAL WEAKNESS.** Whitelisting bounds AML risk only inside a closed set; it does not solve the case where an institution wants to receive value from the *open* chain (the reachability that is Ethereum's main advantage). The moment you accept an inbound transfer from an address you did not pre-approve, the unbounded surveillance problem returns, and tooling maturity varies. And traceability is not prevention — you can trace the Bybit funds and still not recover most of them.

**WHO RAISES IT.** A **compliance/AML head** raising this wants to see the whitelisting model and the transaction-monitoring vendor; it is answerable for closed-loop designs. A **regulator** is asking whether you will import sanctioned-flow risk into the domestic system and needs the closed-loop assurance in writing.

---

### CATEGORY 3 — TECHNICAL AND OPERATIONAL

---

#### Objection 3.1 — "Public chains cannot deliver the confidentiality institutions require."

**THE OBJECTION IN ITS STRONGEST FORM.** On a public chain, positions and transfers are visible to everyone in real time. A bank's holdings, a fund's flows, a counterparty's exposures — all readable on a block explorer. No institution can operate with its book visible to competitors, and "whitelisting" does not fix this: restricting *who can transact* is access control, not confidentiality — the transfers themselves remain public. This is not a tunable parameter; it is what a public ledger *is*.

**WHAT IS TRUE IN IT.** Entirely true, and it is the strongest technical objection in the bank. BUIDL's holder addresses and transfers are fully visible on Etherscan; whitelisting gates entry but does not conceal activity. This is why the objection should be conceded outright rather than argued.

**THE EVIDENCE-BASED RESPONSE.** The response is to agree and to note that the market has already voted the same way. Every major bank and market-infrastructure tokenisation effort chose a *permissioned* ledger — overwhelmingly the Canton Network — specifically for sub-transaction privacy: Goldman's GS DAP (on Canton/Daml, chosen for sub-transaction privacy), HSBC Orion, DTCC's pilots, and JPMorgan's plan to issue JPM Coin natively on Canton (announced 7 Jan 2026). Digital Asset's CEO Yuval Rooz put it plainly: institutions "can't have their positions visible to the entire world in real time" (Dec 2025). The bifurcation is evidence-based: public Ethereum won the funds and stablecoin layer, where holdings are already disclosed or the instrument is a bearer-like token; permissioned Canton won the bank balance-sheet layer, where confidentiality is non-negotiable. A proposal that puts confidential bank activity on public Ethereum is simply the wrong tool, and saying so is more credible than pretending zero-knowledge techniques are production-ready for this.

**THE RESIDUAL WEAKNESS.** Conceding this concedes most of the domestic bank use case to permissioned ledgers, which weakens the "why Ethereum specifically" argument to the point where it survives only for (a) the funds/stablecoin layer and (b) cross-border reachability. Privacy-preserving techniques (zk-proofs, encrypted state) exist but are not mature or audited enough for an Indian institution to rely on for regulated activity today, so the concession is not merely tactical — it reflects a real, current capability gap.

**WHO RAISES IT.** A **bank CTO or head of markets technology** raising this is correct and expects you to concede; the win is showing you know the Canton-vs-public line. A **regulator** raising confidentiality is often asking the *opposite* question — whether *they* will retain supervisory visibility — so the same word means "hide my book" from a bank and "will I still be able to see everything" from a supervisor.

---

#### Objection 3.2 — "Throughput and cost are unpredictable."

**THE OBJECTION IN ITS STRONGEST FORM.** Ethereum's fees spike unpredictably with network congestion, and a settlement system cannot run on a fee base that moves by an order of magnitude between a quiet Tuesday and a busy one. An institution needs deterministic cost and guaranteed throughput; a public chain offers neither. UPI processes ~763 million transactions a day at effectively zero marginal cost to the user — why would anyone settle on a rail whose cost you cannot forecast?

**WHAT IS TRUE IN IT.** Base-layer Ethereum fees are genuinely variable and congestion-sensitive, and for high-volume retail-scale payments the economics do not compare to UPI. Cost unpredictability is a real operational objection for anything latency- and volume-sensitive.

**THE EVIDENCE-BASED RESPONSE.** Two responses. First, the cost/throughput problem is largely addressed by Layer-2s and by *not using public Ethereum for high-frequency retail flow* — the institutional use cases (tokenised bond issuance, treasury settlement, collateral mobility) are low-frequency, high-value transactions where a few dollars of settlement cost is immaterial against the trade size. Second, and more honestly, the institutions that cared about deterministic cost chose permissioned ledgers, where the operator sets the economics: Broadridge's DLR settles on the order of $7.5–8.0tn monthly on Canton-lineage permissioned infrastructure, and JPMorgan's Kinexys processes over $5bn/day (cumulative over $3tn by Dec 2025) on a private permissioned ledger — neither is exposed to public-chain fee spikes. The cost objection is a strong argument *against public chains for high-volume flow* and a weak argument against tokenisation as such.

**THE RESIDUAL WEAKNESS.** This again resolves in favour of permissioned infrastructure or L2s rather than public Ethereum mainnet, narrowing the case for the specific technology this report is about. And L2 confidentiality is no better than mainnet — L2s reduce cost but do not solve the privacy problem in 3.1 — so you cannot claim the L2 fix for cost without re-inheriting the confidentiality loss.

**WHO RAISES IT.** A **COO or head of operations** raising this wants deterministic unit economics and is right to; the answer is "not mainnet for high volume." A **CFO** is asking about a cost line they can budget.

---

#### Objection 3.3 — "There is no accountable party when something goes wrong."

**THE OBJECTION IN ITS STRONGEST FORM.** In the existing system, if a settlement fails, there is a clearing corporation, a depository, or a central bank to call — a legal entity with obligations, a rulebook, and a balance sheet. On a public chain there is no operator, no service-level agreement, no one to sue, and no one to reverse an erroneous transfer. When ₹500 crore goes to the wrong address because of a bad smart contract, who makes the institution whole? "The protocol" is not an answerable party.

**WHAT IS TRUE IN IT.** Correct, and it is a genuine structural feature of permissionless systems: there is no operator of record on public Ethereum, no SLA, and no reversibility. For a regulated institution accustomed to a designated system operator with defined liability, this is a real accountability vacuum.

**THE EVIDENCE-BASED RESPONSE.** This is why regulated deployments do not use bare public chains — they insert an accountable operator. BUIDL has BlackRock as issuer and Securitize as the transfer agent controlling the whitelist and able to freeze and reissue tokens; the "code is law, no reversibility" property is deliberately overridden by a named, regulated intermediary. India's DLT covenant system has NSDL/CDSL as the accountable operator; the CD and bond pilots have the RBI and SEBI-supervised depositories in the loop. The accountability gap is real for *permissionless* use and is closed by *permissioned or intermediated* use — which is what every institutional deployment actually is. The relevant question is not "is the chain accountable" but "is there a regulated transfer agent / operator," and in production systems the answer is yes.

**THE RESIDUAL WEAKNESS.** Inserting an accountable operator re-introduces the single point of control that public chains were meant to remove, so the institution ends up trusting Securitize, or NSDL, or the RBI — which raises the fair question of what the ledger adds over a well-run conventional database with the same operator. The honest answer (shared state across parties without reconciliation) is real but narrower than the original pitch. And smart-contract errors are still irreversible even with an operator, unless the operator has built in freeze/reissue functions in advance.

**WHO RAISES IT.** A **general counsel or risk head** raising this wants to see the named operator and its liability; it is answerable. A **regulator** is asking whether there is a supervised entity it can hold responsible, which is the same requirement and is met by the transfer-agent model.

---

#### Objection 3.4 — "Key management at institutional scale is unsolved, and smart-contract risk is unquantifiable and uninsurable."

**THE OBJECTION IN ITS STRONGEST FORM.** The Bybit hack — $1.5bn — was not a cryptography failure; it was a *key-management* failure at one of the most sophisticated crypto-native firms in the world. If Bybit cannot secure its signing process, no Indian bank should assume it can. On top of that, smart-contract risk is unquantifiable: bugs are discovered in production, losses are irreversible, and the insurance market is thin against multi-billion-dollar loss events. You cannot run a regulated business on a risk you cannot insure.

**WHAT IS TRUE IN IT.** Key management is genuinely the dominant failure mode — most 2025 losses stemmed from stolen keys, credential theft, and social engineering rather than protocol bugs (CoinDesk/Immunefi, Jan 2026: "a people problem"). The Bybit compromise proves that even elite operators fail here. And the insurance market is genuinely limited: per CoinGecko's 2026 State of Crypto Security Report (released 27 Aug 2026), active on-chain insurance coverage fell 20.2% to $130.2m and covered "roughly 0.9% of total losses" against $3.63bn stolen across 245 incidents (Jan 2025–Jul 2026); the widely-cited "89% uninsured" figure derives from GlobalData's 2024 Emerging Trends Insurance Consumer Survey (only 11% of crypto holders insured). Individual custody policies run to figures like Crypto.com's $120m (Aon/Lloyd's, Q1 2025) or BitGo's ~$250m — orders of magnitude below single-event losses. Smart-contract exploits remain frequent (DefiLlama logged 99 exploits in Q2 2026, a record count).

**THE EVIDENCE-BASED RESPONSE.** Key management is a solved *engineering* problem for institutions that adopt bank-grade custody — MPC/threshold signatures, hardware security modules, and qualified custodians (Fidelity Digital Assets, Anchorage, BitGo) — and the Bybit failure was specifically a *third-party UI supply-chain* compromise, not a failure of the underlying cryptography, meaning the mitigation is known (verified signing, air-gapped review, supply-chain controls). Crucially, this risk is *not novel to blockchain*: an Indian bank already manages signing keys for SWIFT, RTGS, and its HSM estate, and the PNB fraud was a failure of exactly that existing control environment. On smart-contract risk, the institutional mitigation is to minimise on-chain logic — BUIDL and comparable products keep contracts simple (transfer, whitelist, freeze) rather than running complex DeFi logic, which is why institutional tokenised funds have not been exploited even as DeFi protocols were. Insurability is improving (Marsh's $825m Lloyd's-backed facility, Mar 2024) but is honestly still a gap.

**THE RESIDUAL WEAKNESS.** The insurance gap is real and not closed: available cover is far below plausible loss (CoinGecko's ~0.9%-of-losses-covered figure is stark), so an institution self-insures the tail whether it admits it or not. And "keep the contracts simple" limits the functionality to roughly what a database does, again narrowing the marginal benefit. Key-management maturity depends on the custodian; a bank building in-house rather than using a qualified custodian inherits exactly the Bybit-class risk. This objection is only partly answerable and should be conceded in part.

**WHO RAISES IT.** A **CISO or head of custody operations** raising this is technically correct and wants the custody architecture and insurance schedule; answerable in part, with an honest concession on tail insurance. A **risk committee** is asking whether the residual, uninsured loss is within appetite — often it is not, today.

---

### CATEGORY 4 — STRATEGIC AND ARCHITECTURAL

---

#### Objection 4.1 — "We would use a private chain, so the public-chain question is irrelevant."

**THE OBJECTION IN ITS STRONGEST FORM.** If we ever tokenise, we will do it on a permissioned ledger we control, with known participants and confidentiality — like every serious bank has. So the entire debate about Ethereum, public settlement, and open reachability is beside the point. Show us Canton, or Corda, or Finacle Connect; do not show us a public chain.

**WHAT IS TRUE IN IT.** For the bank's own balance-sheet activity, this is correct and is what the market did. Goldman, HSBC, DTCC, JPMorgan and Broadridge all run permissioned infrastructure; India's DLT covenant system and the IBBIC/IBDIC consortium are permissioned. A bank that says "we'll go permissioned" is aligned with the dominant institutional choice.

**THE EVIDENCE-BASED RESPONSE.** Two honest points. First, "permissioned is obviously safer" is not supported by the failure record: the consortium graveyard is *overwhelmingly permissioned* DLT that failed on governance and network effect, not public-chain projects — TradeLens (Maersk/IBM, wound down Q1 2023, failed because rivals would not route data through a competitor-branded platform), Marco Polo (R3 Corda, ~30–45 banks, wound down 2023, cumulative losses ~$85m), we.trade (12-bank EU consortium, wound down 2022, lost >$8m on ~$4m revenue), Contour (wound down late 2023), and the ASX CHESS replacement (Digital Asset/Daml, scrapped Nov 2022, ~A$250m write-off, software only 63% complete). Choosing permissioned does not avoid failure risk; it swaps technical risk for governance and network-effect risk, which is what actually killed these projects. Second, the one thing a permissioned ledger cannot give you is *counterparty reachability* — the ~$31–36bn of tokenised real-world assets and ~$300bn+ of stablecoins that exist as potential counterparties are overwhelmingly on public chains (Ethereum ~65% of tokenised RWA value, RWA.xyz). If the use case is purely internal, permissioned is right; if it needs to reach that external liquidity, a private chain is an island.

**THE RESIDUAL WEAKNESS.** For most Indian banks' near-term use cases (internal settlement, collateral, covenant monitoring), reachability to public-chain liquidity is not yet a requirement, so the "island" critique is theoretical for them today. And the governance-failure record cuts both ways — it is a warning about *any* multi-party network, public or private, including a public-chain consortium. The response wins the "permissioned isn't automatically safer" point but does not establish that *this* institution needs a public chain.

**WHO RAISES IT.** A **bank CTO/architect** raising this has usually already decided on permissioned and is testing whether you understand why; agree on the balance-sheet layer, and reserve the public-chain case for reachability-dependent flows. A **strategy head** is asking about optionality — whether going permissioned strands them if the market standardises on public rails.

---

#### Objection 4.2 — "We already have UPI, an account aggregator, and a functioning depository. What problem remains?"

**THE OBJECTION IN ITS STRONGEST FORM.** India built the most successful real-time retail payment system in the world without a blockchain. UPI did 24.51bn transactions worth ₹29.82 lakh crore in August 2026 alone. The Account Aggregator framework moves consented financial data across 1,120+ regulated entities. NSDL and CDSL dematerialised the entire securities market decades ago. Every problem the blockchain pitch describes — fast settlement, data portability, transparent registry — India already solved with conventional, sovereign, centrally-governed infrastructure. This is a solution looking for a problem that India uniquely does not have.

**WHAT IS TRUE IN IT.** This is the most powerful strategic objection and is largely correct for the domestic retail and data layers. UPI's scale and cost structure are genuinely world-leading (24.51bn transactions, ₹29.82 lakh crore, Aug 2026, NPCI); the AA framework is a genuine consent-based data rail (over 294 million linked accounts, ~500 crore cumulative data fetches by FY26, Sahamati); dematerialisation is done. For these layers, there is no problem left for a ledger to solve, and any pitch that ignores this deserves to be dismissed.

**THE EVIDENCE-BASED RESPONSE.** The response must concede the retail/data layer entirely and point to the specific gaps these systems structurally do not address, because they were not built to. UPI moves *rupees between accounts*; it does not settle *securities against cash* atomically (delivery-versus-payment), does not carry programmable settlement conditions, and does not reach cross-border. The gaps are specific and rupee-denominated: (a) corporate-bond *secondary* settlement — India has ₹53.6 lakh crore of bonds outstanding but only ~₹7,645 crore/day of secondary turnover, and settlement is OTC and slow, which is exactly why SEBI is piloting tokenised bonds with DvP against wholesale CBDC; (b) cross-border remittances — India received US$129bn in 2024 (World Bank), and while the *average* cost to India is below 6%, remittances sent *through banks specifically* cost 12.66% (World Bank Remittance Prices Worldwide, Q1 2024, a global bank-channel average), a corridor UPI does not serve internationally; (c) MSME deep-tier receivables finance — a ₹25 lakh crore credit gap (Deloitte, Mar 2025) that TReDS (₹3.47 lakh crore discounted in FY26) reaches only at the first tier. These are not problems UPI or the AA were designed to solve. The correct posture: UPI wins retail payments; the ledger question is only about atomic securities settlement, cross-border, and multi-tier receivables.

**THE RESIDUAL WEAKNESS.** Even for these genuine gaps, it is not established that a *ledger* is the only or best fix — the RBI could extend UPI/RTGS to DvP, or SEBI could shorten settlement conventionally, without DLT. The gaps are real; the claim that blockchain is the necessary answer to them is not proven, and the skeptic can fairly say "fix the existing rails." Module C's central finding stands: the largest rupee prizes are the ones furthest from a permitted domestic pilot, so the answer to "what problem remains" is honest but currently un-actionable at scale.

**WHO RAISES IT.** A **senior policy or strategy figure** raising this is the hardest audience and is mostly right; the only winning move is to concede the retail layer and be surgically specific about the three residual gaps. A **product head** is asking where the incremental revenue is, and needs the bond/cross-border/MSME specificity, not a technology story.

---

#### Objection 4.3 — "Every consortium blockchain effort of the last decade failed. Why is this different? And the vendor will disappear."

**THE OBJECTION IN ITS STRONGEST FORM.** We have watched this movie. TradeLens, we.trade, Marco Polo, Contour, the ASX CHESS replacement — all launched with major-bank backing, all dead, some with nine-figure write-offs. The pattern is not bad luck; it is that shared-infrastructure consortia cannot solve governance ("whose platform is it?") and cannot reach network-effect escape velocity. Meanwhile the vendors churn. Whatever we build on, the counterparty risk is that the vendor is gone in three years and we are left maintaining orphaned infrastructure.

**WHAT IS TRUE IN IT.** The failure record is real, consistent, and correctly recalled. TradeLens (wound down Q1 2023 on neutral-governance grounds), Marco Polo (~$85m cumulative losses), we.trade (lost >$8m on ~$4m revenue), Contour, and ASX CHESS (~A$250m write-off, software only 63% complete) all failed, and governance/network-effect — not cryptography — killed them. Vendor durability is a legitimate procurement risk. This is the objection with the strongest empirical base and it should largely be conceded.

**THE EVIDENCE-BASED RESPONSE.** The honest response is that the failures teach a design lesson, not a verdict on the technology, and the lesson is being applied. Every failed project was a *new, private, single-purpose consortium* that had to bootstrap its own network from zero and resolve governance among competitors — the two things that killed them. The systems that survived did the opposite: they either had a single accountable operator on an *existing* network (Broadridge DLR at ~$7.5–8.0tn/month; JPMorgan Kinexys, >$3tn cumulative) or issued onto an *already-populated* public network rather than building a private island (BUIDL onto Ethereum). India's live system, SEBI's DLT covenant platform, survived for the same reason — it has a mandated operator (NSDL/CDSL) and a regulatory mandate that supplies the network effect by fiat. On vendor risk: the mitigation is to avoid single-vendor lock-in by using either open standards or a regulator-operated system, not to avoid the technology. The correct read of the graveyard is "do not build a new competitor-governed private consortium," which is a specific and avoidable mistake.

**THE RESIDUAL WEAKNESS.** The surviving systems survived partly because they are *permissioned and operator-run* — which again is an argument for Canton/permissioned infrastructure over public Ethereum, not for it. And a regulator-mandated system (the SEBI DLT platform) "succeeds" only in the sense that compliance is compulsory; it has not been market-tested for voluntary adoption, so it is weak evidence that a *voluntary* ledger network would reach escape velocity in India. Vendor risk is genuinely unmitigated for any proprietary-stack choice.

**WHO RAISES IT.** A **procurement or vendor-risk head** raising this wants contractual exit and open standards; answerable. A **CIO who lived through one of these failures** is raising a scar, and the only credible response is to name the specific design mistake (competitor-governed private consortium) and show the proposal does not repeat it.

---

### CATEGORY 5 — SOVEREIGNTY AND POLICY (cuts both ways)

---

#### Objection 5.1 — "This moves value, standards-setting, and supervisory control offshore. Building on infrastructure governed elsewhere is strategically unwise for a country of India's scale."

**THE OBJECTION IN ITS STRONGEST FORM.** Public Ethereum's protocol rules, upgrade schedule, and core-developer governance sit entirely outside India's jurisdiction — no Indian regulator has a vote on a hard fork. Dollar stablecoins, the dominant settlement asset on those chains, entrench the dollar and transfer seigniorage to private US issuers; the RBI's dollarisation fear is precisely this. Cross-border programmable flows on infrastructure India does not govern create supervisory blind spots — value can move on conditions the RBI cannot see or halt. For a country building sovereign digital public infrastructure (UPI, CBDC, AA) as a matter of strategic policy, adopting foreign-governed settlement rails is a step backwards. India should set its own standards, not import someone else's.

**WHAT IS TRUE IN IT.** Substantially true, and it is the RBI's actual stated position. Public-chain governance is genuinely offshore; dollar-stablecoin dominance is genuine (USDT and USDC together hold 83.02% of the $314.68bn stablecoin market, DefiLlama, 21 Jun 2026); the seigniorage and monetary-sovereignty concerns are real and articulated by the RBI Governor, Deputy Governor, and the Chief Economic Adviser. India's DPI strategy is explicitly sovereign. A country of India's scale importing foreign-governed core financial rails is a legitimate strategic concern, not a xenophobic one.

**THE EVIDENCE-BASED RESPONSE — and this objection cuts both ways.** *Direction one (supports the objection):* for domestic settlement, sovereignty argues decisively for rupee-denominated, RBI-governed rails — which is exactly why India's pilots settle on wholesale CBDC, not stablecoins, and why the domestic case for public Ethereum is weak. On this axis the objection wins, and the honest response is to concede it and design for CBDC/permissioned-rupee settlement. *Direction two (cuts against the objection):* absence from public-chain standards-setting is itself a sovereignty risk. If tokenised global markets standardise on infrastructure India does not participate in, India becomes a *rule-taker* rather than a rule-maker — the same logic that made India build UPI also argues for India having a presence (via GIFT City/IFSC, which permits the technology layer today under the IFSCA TechFin and Ancillary Services Regulations notified 8 Jul 2025) where global tokenisation standards are being set. Sitting out does not protect sovereignty; it forfeits influence over the standard everyone else adopts. The RBI's own cross-border engagements (MoU with the Monetary Authority of Singapore on digital assets; BIS Project Mandala/Rialto participation) reflect exactly this "engage to shape" logic.

**THE RESIDUAL WEAKNESS.** The two directions are not symmetric in the RBI's eyes: the RBI weights domestic monetary sovereignty far above standards-setting influence, so "engage to shape" is a weaker argument to the actual decision-maker than "keep it sovereign" is. And GIFT City participation is a real but small lever — it lets India observe and participate at the edge, not set the core protocol rules. The honest position is that on the dominant (domestic) axis, the sovereignty objection is correct and the public-chain case loses.

**WHO RAISES IT.** A **central banker or finance-ministry official** raising this is stating national strategy; the winning move is to agree on domestic sovereignty and reframe the residual case as GIFT City / standards-participation, not domestic adoption. A **bank strategy head** raising it is often really asking about geopolitical/sanctions exposure of US-governed rails, which is a narrower and answerable procurement question.

---

### CATEGORY 6 — COMMERCIAL

---

#### Objection 6.1 — "The business case does not clear our hurdle rate; integration cost exceeds the benefit; and nobody else in our market has done it, so we carry the pioneer cost."

**THE OBJECTION IN ITS STRONGEST FORM.** Strip away the technology and this is a capital-allocation decision. Integration into core banking, custody, compliance, and reconciliation systems is a multi-year, multi-crore program with an uncertain payback. The measurable benefits — a few basis points of settlement efficiency on low secondary volumes — do not clear our cost of capital. And we would be first in our market: no Indian bank, exchange, or depository runs a public-chain settlement system in production, so we would bear the full cost of proving the rails, the regulatory engagement, and the operational learning, while any follower gets it cheaper. First-mover economics in infrastructure are usually negative.

**WHAT IS TRUE IN IT.** Correct on all three counts today. Integration cost is real and large; measurable near-term benefit on India's thin secondary volumes is modest; and there is no Indian production precedent for public-chain settlement, so the pioneer cost is genuine and un-defrayed. For a bank applying a standard hurdle rate to a narrowly-scoped efficiency case, the objection is right and the project does not clear.

**THE EVIDENCE-BASED RESPONSE.** Do not fight the hurdle-rate maths on efficiency grounds; it loses. The honest commercial case has two legs. First, the near-term ask is not a balance-sheet migration but a *contained, low-cost pilot* on a specific rupee problem, ideally inside an environment that subsidises the pioneer cost — the GIFT City/IFSC sandbox (technology layer permitted today under the IFSCA TechFin regulations; live entrants Realdom/Pinvest, Terazo) or participation in the regulator-driven pilots. Per a Reuters exclusive (25 Aug 2026, citing three sources with direct knowledge; RBI, SEBI and REC declined to comment), SEBI's corporate-bond tokenisation pilot has a named first issuer — REC Ltd (Rural Electrification Corporation) — with an issue of under ₹5bn (~₹500 crore), a three-month lock-in, settlement in wholesale CBDC, and a target unveiling at a Mumbai fintech event in September 2026; exchanges are expected to build secondary-market infrastructure by December 2026. In these pilots the RBI/SEBI and the depositories carry much of the rail-proving cost, which changes the capital question from "fund a multi-year integration" to "second a small team to a regulator-led pilot." Second, the pioneer-cost objection has a shelf life: once SEBI's bond pilot moves to secondary-market infrastructure and names its investor set, "nobody in our market has done it" stops being true, and the follower cost the objector prefers to pay may come bundled with follower disadvantage in a regulator-shaped standard. The benchmark that should change the decision: a named Indian issuer completing a tokenised issuance with disclosed settlement on e₹-W.

**THE RESIDUAL WEAKNESS.** Even the "cheap pilot" case does not produce a positive NPV on its own — it buys optionality and regulatory relationship, which a strict hurdle-rate discipline may refuse to value. And the pilots are small (REC's first issue is deliberately sub-₹500 crore) and CBDC-settled, so they do not actually prove the *public-chain* commercial case at all — they prove the CBDC-settled tokenisation case. For public Ethereum specifically, there is no Indian commercial precedent and none imminent, so the pioneer-cost objection remains substantially unanswered for the actual subject of this report.

**WHO RAISES IT.** A **CFO or capital-allocation committee** raising this is correctly applying discipline; the answer is a sandbox/regulator-led pilot framed as optionality, not an efficiency-NPV case. A **business-line head** raising "nobody else has done it" is managing internal career risk and wants cover — which regulator-led participation provides.

---

## Also Produced

### A. The three objections for which our honest response is weakest — and what would strengthen them

1. **"There is no legal recognition of on-chain settlement finality" (1.4).** Our response routes around the gap by anchoring to CBDC/depository finality; it does not close it, and for true on-chain DvP there is no answer. *What would strengthen it:* an amendment to the Payment and Settlement Systems Act 2007 giving the RBI power to designate a DLT settlement system, or an EU/UK-style statutory power to disapply named provisions for DLT infrastructure. Until then, do not claim on-chain finality — claim CBDC-imported finality.
2. **"Smart-contract risk is uninsurable" (3.4).** The insurance market is genuinely below plausible single-event losses — CoinGecko's 2026 report puts active on-chain cover at $130.2m, roughly 0.9% of the $3.63bn stolen across Jan 2025–Jul 2026 — and we concede the tail is self-insured. *What would strengthen it:* a named institutional insurer writing DLT-settlement cover at a limit comparable to the settled value, or an Indian custodian with a disclosed, adequately-sized policy. We do not have this and should not imply we do.
3. **"We already have UPI / this is a solution looking for a problem" (4.2).** We can name three genuine gaps, but we cannot prove a ledger is the necessary fix rather than an extension of existing rails. *What would strengthen it:* a completed pilot showing atomic bond DvP settlement that conventional rails demonstrably could not achieve at comparable cost — evidence that does not yet exist in India.

### B. The five objections most likely from a regulator specifically — and what the regulator is really asking

When a regulator and a commercial audience use the same words, they mean different things. Read the subtext:

1. **Confidentiality (3.1).** *Bank means:* "hide my book from competitors." *Regulator means:* "will I keep full supervisory visibility?" — the opposite requirement. A privacy design that satisfies the bank may alarm the regulator, and vice versa. Address both explicitly.
2. **Settlement finality (1.4).** *Markets desk means:* "what happens operationally in a default?" *Regulator means:* "is this systemically safe and does it sit inside my designated-system perimeter?" The regulator is asking about the PSS Act boundary, not the operations manual.
3. **AML (2.2).** *Compliance head means:* "what's my direct exposure and tooling?" *Regulator means:* "will this import sanctioned or illicit flows into the domestic system, and can I trace them?" The regulator wants the closed-loop and traceability assurance in writing.
4. **Sovereignty (5.1).** *Bank strategist means:* "geopolitical/sanctions exposure of US-governed rails." *Regulator means:* "monetary sovereignty, dollarisation, and seigniorage" — a macro concern the bank does not carry. Answer the macro version for the RBI.
5. **Prohibition preference (1.1/1.2).** *Bank CEO means:* "career/franchise risk." *Regulator means:* "have you understood the asset-vs-infrastructure line I am drawing, and are you on the CBDC-settled side of it?" The regulator is testing comprehension, not seeking reassurance.

### C. Concessions worth making unprompted

Conceding these before they are raised is more persuasive than defending them afterwards:

- **On confidentiality:** "Public Ethereum cannot give you sub-transaction privacy; whitelisting is access control, not confidentiality. For balance-sheet activity, a permissioned ledger — the market chose Canton — is the right tool. We are not proposing public-chain settlement for confidential bank activity."
- **On the tax regime:** "For anything that is a VDA, the 30% / no-set-off regime makes an institutional book unviable. Our case depends on tokenised regulated instruments sitting outside the VDA definition, and the CBDT has not confirmed that. That is an open risk."
- **On the failure record:** "Most bank blockchain consortia failed — TradeLens, Marco Polo, we.trade, Contour, ASX CHESS. They failed on governance and network effect. Any proposal that rebuilds a competitor-governed private consortium deserves to fail again."
- **On finality and register:** "Indian law does not recognise on-chain settlement finality (PSS Act) or a distributed ledger as a legal register of title (Depositories Act). We work inside those gaps by settling on CBDC and keeping the depository in the loop; we do not pretend the gaps are closed."
- **On the domestic public-chain case:** "For domestic settlement, sovereignty and the RBI's stated preference argue for rupee/CBDC rails. The public-chain case in India is narrow: GIFT City, standards participation, and genuinely cross-border flows."
- **On maturity:** "No Indian institution runs public-chain settlement in production. The near-term ask is a contained pilot, not a migration."

---

## Recommendations

**Staged, with the benchmarks that would change each stage.**

**Stage 0 — Now (position, don't build).** Adopt the concession-led posture in section C for every internal and external conversation. Lead with the specific rupee problem (bond secondary settlement, bank-channel remittance cost, MSME multi-tier receivables) and the named owner, never with the technology. *Benchmark to advance:* internal risk/strategy committee accepts that a contained pilot is worth optionality value even at negative standalone NPV.

**Stage 1 — 0–6 months (observe the regulator-led pilots).** Track SEBI's REC corporate-bond pilot (targeted September 2026 unveiling; secondary-market infrastructure targeted December 2026) and the RBI's tokenised-CD pilot on the Unified Markets Interface. Second a small team to depository/industry working groups rather than funding an independent build. *Benchmark to advance:* a named Indian issuer completes a tokenised issuance with disclosed e₹-W settlement — at which point "nobody in our market has done it" is false and follower economics begin.

**Stage 2 — 6–18 months (pilot inside a subsidised perimeter).** If advancing, run a contained pilot in the GIFT City/IFSC sandbox (technology layer permitted under the IFSCA TechFin and Ancillary Services Regulations, notified 8 Jul 2025) or as a named participant in a regulator-led CBDC-settled pilot. Scope it to one instrument and a closed, whitelisted counterparty set. Use a qualified custodian, not an in-house key build. *Benchmarks to advance or halt:* (a) CBDT clarifies that the tokenised instrument is outside the VDA definition — advance; if it does not, halt domestic plans. (b) A named insurer writes DLT-settlement cover near the settled value — advance; if not, cap pilot size to self-insurable loss. (c) The RBI/SEBI signal willingness to extend finality/register recognition (or the IFSC extends it) — advance to production planning; if not, keep everything inside the sandbox.

**Stage 3 — 18+ months (production only on resolved gaps).** Move to production only for use cases where finality is imported from CBDC or a designated system, confidentiality is met by the chosen ledger (permissioned for balance-sheet activity; public only for funds/reachability), and the tax classification is confirmed. Reserve public-Ethereum specifically for cross-border and reachability-dependent flows, routed through GIFT City.

**What would change the whole plan:** an amendment to the PSS Act or Depositories Act recognising DLT settlement/registers (accelerate), a CBDT VDA carve-out for tokenised securities/deposits (accelerate materially), or a formal RBI prohibition of private crypto that sweeps in tokenised instruments by classification (halt domestic, retreat to GIFT City).

---

## Caveats

- **Staleness.** This subject moves monthly. Every figure dated before ~March 2026 should be re-checked before reuse: specifically the crypto-theft totals (2025 annual, will be superseded by 2026 figures), the stablecoin and RWA market sizes (move weekly), BUIDL AUM and chain-share (BlackRock's own multi-chain allocations shifted sharply through 2025–26 — Ethereum's share of BUIDL fell from a large majority to roughly 40% as the fund expanded across eight chains), and the status of the SEBI/RBI pilots.
- **Source tiering on the pilots.** The REC/September detail for SEBI's bond pilot rests on a Reuters exclusive (25 Aug 2026) citing anonymous sources; RBI, SEBI and REC declined comment, and no formal SEBI circular naming participants had been issued as of writing. Treat as a firm plan, not confirmed execution. The RBI tokenised-CD pilot is confirmed ongoing (RBI FY26 annual report, ~May 2026) but participant banks and volumes remain undisclosed — a genuine information gap, not an omission.
- **Asset vs infrastructure.** Several sources conflate the ETH-as-asset question with the Ethereum-as-infrastructure question, particularly stablecoin-market and BUIDL coverage that mixes AUM/price commentary with settlement-rail description. Where cited, only the infrastructure claims are used; asset/price framing is excluded by scope.
- **Numbers most likely to be challenged.** The bank-channel remittance cost (12.66%, World Bank RPW Q1 2024) is a *global bank-average*, not India-specific (later RPW issues show this figure rising — e.g., 14.55% in Q1 2025 — so cite the exact issue). The ₹7,645 crore/day bond secondary turnover, ₹53.6 lakh crore outstanding, and ₹25 lakh crore MSME gap are carried from Module C and should be re-verified against the latest SEBI/Deloitte releases before reuse.

---

## The Five Standard Closing Items

### 1. The five findings a skeptical institutional reader would find hardest to dismiss — and why

1. **India's only production DLT system in regulated finance is one SEBI mandated (covenant monitoring, NSDL/CDSL, 4,291 issuers).** Hard to dismiss because it is a regulator's own live system, not a vendor pilot — it proves the regulator distinguishes infrastructure from asset.
2. **The confidentiality loss is why JPMorgan, Goldman, HSBC and DTCC chose permissioned Canton, not public Ethereum, on the record (Yuval Rooz, Dec 2025).** Hard to dismiss because it is the institutions' own stated reasoning, and it concedes the skeptic's strongest technical point.
3. **The consortium graveyard is overwhelmingly permissioned DLT that failed on governance, not public-chain projects (TradeLens, Marco Polo ~$85m, we.trade, Contour, ASX CHESS ~A$250m).** Hard to dismiss because it refutes "permissioned is safer" using the failure record the skeptic themselves cites.
4. **Both of India's nearest-term pilots settle on wholesale CBDC (e₹-W), not stablecoins.** Hard to dismiss because it shows the domestically viable architecture already exists and sidesteps the RBI's dollarisation objection.
5. **The $1.5bn Bybit loss (Feb 2025) was a key-management/supply-chain compromise, not an Ethereum protocol failure — and DeFi protocol losses fell 74% (Immunefi, $680m in 2025).** Hard to dismiss because it correctly locates the risk (operations/custody) where an Indian bank already has controls, rather than in the ledger.

### 2. The one dataset that would make the strongest chart

**Crypto losses by category and year, 2022 vs 2025 (Chainalysis 2026 Crypto Crime Report, 18 Dec 2025 + Immunefi 2026 Ecosystem Vulnerability Audit).** A grouped bar chart showing total theft ($3.3bn 2022 → $3.4bn 2025) split into *exchange/custody/key-management* vs *DeFi protocol* losses makes the single most persuasive institutional point in one image: the money is lost at the operational/custody layer, and DeFi protocol losses *fell 74%* ($2.62bn → $680m) even as the total held flat. Pull the totals from Chainalysis's December 2025 report and the DeFi split from Immunefi's 2026 report.

### 3. The three claims most likely to be challenged in a meeting — and the best evidence

1. **"Tokenised securities/deposits are outside the VDA tax regime."** *Best evidence:* the VDA definition (s.2(47A)) and the structuring of SEBI's/RBI's own pilots as securities and CBDC-settled deposits rather than crypto-assets. *Weakness to flag first:* the CBDT has issued no express clarification — concede this is unconfirmed.
2. **"Ethereum has never had an outage."** *Best evidence:* no chain halt since genesis on 30 July 2015, against Solana's ~7 network-wide halts (up to ~19 hours; last full cluster halt 6 Feb 2024). *Caveat:* this is liveness of the base layer only; "Ethereum is down" reports almost always refer to an L2, wallet or RPC provider, and it says nothing about application-layer or custody risk.
3. **"~65% of tokenised real-world asset value is on Ethereum."** *Best evidence:* RWA.xyz, cited across mid-2026 reporting putting total distributed RWA value at ~$31–36bn with Ethereum ~65% share (July 2026). *Caveat:* trackers differ on methodology (distributed ~$27–36bn vs "represented" ~$343bn), and much of the value is issuance, not active trading — state the tracker and date, and separate distributed from represented.

### 4. The single sentence for a non-technical executive

India is not banning the technology — it is building its own tokenisation rails settled in central-bank digital rupees, so the honest question for our institution is not "public Ethereum, yes or no," but "which specific rupee settlement problem is worth a small, regulator-aligned pilot," and for confidential balance-sheet activity the answer is a permissioned ledger, not a public chain.

### 5. What this module could NOT establish — and what would be needed

- **Whether the CBDT treats tokenised securities/deposits as VDAs.** *Needed:* an express CBDT circular or a ruling. Until then the tax risk is unquantified.
- **The participant banks and transaction volumes in the RBI's tokenised-CD pilot.** *Needed:* RBI disclosure; the FY26 annual report confirmed the pilot but named no banks and gave no volumes — a genuine gap as of September 2026.
- **Whether SEBI's REC bond issuance actually executed on its September 2026 target.** *Needed:* a SEBI circular or confirmed post-issuance disclosure; the September date rests on a Reuters exclusive (25 Aug 2026) citing anonymous sources.
- **Any positive-NPV commercial case for public-chain settlement in India specifically.** *Needed:* a completed Indian pilot with disclosed cost and benefit; none exists, so the commercial and pioneer-cost objections remain substantially unanswered for public Ethereum as such.
- **Whether privacy-preserving techniques (zk-proofs, encrypted state) are production-ready for regulated Indian use.** *Needed:* an audited, in-production deployment by a comparable institution; none was found, so the confidentiality concession stands.