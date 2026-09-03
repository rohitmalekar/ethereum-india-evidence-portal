# Module F — Adoption Precedent and the Devcon Question

*Currency note: rupee figures are given as reported. Where a USD equivalent is shown it uses USD/INR ≈ 88.5, the approximate rate as of 1 September 2026; treat conversions as indicative, not contractual. 1 lakh crore = ₹1 trillion = ~US$11.3bn at this rate. This module is current to early September 2026; UPI, Account Aggregator, ONDC and conference figures move monthly and should be re-checked before any use after roughly Q4 2026.*

## TL;DR
- New financial infrastructure in India crosses into adoption through a repeatable five-stage sequence — statute first, a regulator-owned or regulator-blessed utility second, a mandate or a subsidy third, phased compulsion fourth, network effects last — and a tokenised settlement layer today sits at the earliest stage (isolated pilots without an enabling statute), roughly where dematerialisation sat in 1994–95 before the Depositories Act.
- The single most instructive precedent is dematerialisation (1996–2002): it replaced a physical register with an electronic one against active broker and investor resistance, and it worked only because a statute (Depositories Act 1996), a regulator-owned utility (NSDL/CDSL) and phased compulsion (institutional investors from Jan 1998, all investors from Jan 1999) arrived together — none alone was sufficient.
- Institutional finance professionals attend developer-adjacent conferences when a named regulator is on the programme, when the format is a closed roundtable rather than a public stage, and when attendance is framed as policy or standards work rather than crypto; a developer conference in Mumbai can produce introductions and standards alignment but cannot produce a pilot without a pre-committed regulator and a post-event sandbox to move into.

## Key Findings

1. **Every successful Indian financial-infrastructure transition of the last three decades was preceded by, or accompanied by, a statute or a regulator-owned utility — never by market pull alone.** Demat had the Depositories Act 1996 and NSDL; UPI had NPCI (an RBI/IBA-promoted utility) and RBI oversight; NEFT/RTGS were built and run by the RBI itself. A tokenised settlement layer currently has neither an enabling statute (on-chain finality and DLT-as-register are unaddressed in Indian law, per Module B) nor a designated utility — which is the precise gap that precedent says must be filled first.

2. **Compulsion, not persuasion, closed the adoption gap in the two closest analogues (demat and NACH).** Dematerialisation stalled as a voluntary option through 1997 and only scaled once SEBI made settlement in demat form mandatory — first for institutional investors in eight scrips from January 1998, then for all investors from January 1999. This is the strongest evidence that a tokenised register will not displace the incumbent (the demat depository) on economics alone.

3. **The one case that adoption theorists most want to be "the next UPI" — Account Aggregator — is the cautionary tale, not the success.** Five years after launch it shows a conversion rate from "accounts enabled" to "accounts actually linked" of under 10%. Consent-based data sharing had a Master Direction, a coordinating body (Sahamati) and regulatory push, yet adoption lagged because the incentive to the data-holding bank was weak. A tokenised settlement layer faces the identical problem: the incumbent custodian/depository has no commercial reason to move.

4. **Regulators already attend technology and policy conferences in India and abroad — but on policy terms, in policy formats.** The RBI is a listed attending organisation at the Point Zero Forum; the RBI Governor and SEBI Chair keynote the Global Fintech Fest in Mumbai annually. What draws them is a policy or standards framing and public-sector peers, not a vendor showcase.

5. **The honest ceiling for a developer conference: it convenes and aligns, it does not procure.** No primary or tier-1 source attributes a specific institutional pilot, partnership or product to attendance at an Ethereum developer conference's institutional track. The mechanism that produces pilots in India is the regulatory sandbox (RBI, SEBI, IFSCA), not the conference.

---

## PART ONE — HOW FINANCIAL INFRASTRUCTURE CROSSES INTO ADOPTION IN INDIA

### Case 1 — Dematerialisation of Securities (1996–2002): the closest structural analogue

This is the single most useful historical case, because — like tokenisation — it replaced a physical register of ownership with an electronic one, against institutional resistance, and did so under an explicit legal framework.

**FINDING:** The Depositories Act 1996 created the legal basis for electronic securities; NSDL (promoted by IDBI, UTI and NSE) was established in August 1996 and commenced operations on 20 November 1996; CDSL followed in 1999. Section 9(1) of the Act provided that "All securities held by a depository shall be dematerialised and shall be in a fungible form." The trigger was the 1992 Harshad Mehta securities scam and the chronic problems of physical certificates — bad delivery, forgery, theft, signature mismatch, and settlement cycles of up to 14 days. [T1 — Depositories Act 1996 / SEBI; T3 — Business Standard, "From physical shares to demat", 20 Jul 2014] *(historical, stable)*

**FINDING:** Adoption was driven by phased compulsion, not choice. SEBI required institutional investors (FIs, FIIs, mutual funds, banks) and OCBs to settle trades in demat form in eight scrips from January 1998, expanding to 319 scrips by end-FY99. From 4 January 1999 settlement in demat form was made mandatory for all classes of investors, initially for 12 companies, expanded in phases to 31 and then to shares accounting for more than 90% of trading volume. Optional T+5 rolling settlement for the demat segment began 15 January 1998. [T1 — SEBI Annual Report 1998-99] *(historical, stable)*

**FINDING (disconfirming / resistance):** The transition met documented resistance. Parliament deliberately kept the electronic system as a parallel "substitute" rather than overwriting the paper-based legal regime, partly because the 1992 scam had made regulators wary of fully trusting a new electronic record. Older investors, brokers running physical back-offices, and retail holders were apprehensive about digital records and unfamiliar processes; even two decades later SEBI was still setting deadlines to force the last physical holdings into demat. The scale of adoption was still modest six to eight years in: NSDL alone reported 49,89,734 (≈5 million) investor accounts as on 29 February 2004, with demat custody value of ₹9,53,914 crore (~US$108bn), per NSDL's own "Nest Update – March 2004" bulletin — meaning mass retail adoption took roughly a decade and a securities-market boom (2006–08) to complete. [T1 — NSDL "Nest Update", Mar 2004; T3 — Business Standard] *(historical, stable)*

**INDIAN ANALOGUE:** A tokenised securities register (e.g. SEBI's corporate-bond tokenisation pilot, first issuer reportedly REC Ltd, per Module B) is the direct descendant of demat: both replace an ownership register with a new technical substrate.
**WHO WOULD OWN IT:** SEBI (Market Regulation and the market-infrastructure/debt departments hold the mandate); operationally NSDL and CDSL, the incumbent depositories, plus the clearing corporations (NSCCL/ICCL). The budget for any register change sits with SEBI's technology and market-infrastructure functions and the depositories' boards.
**WHAT BLOCKS IT TODAY:** The Depositories Act 1996 contemplates a depository as the register of record (Module B); there is no statutory basis for a distributed ledger to be the legal register, and no provision equating a token to a "security held by a depository." On-chain settlement finality is unaddressed by the Payment and Settlement Systems Act 2007.
**WHAT WOULD HAVE TO CHANGE:** Either an amendment to the Depositories Act (Parliament, on SEBI's recommendation) recognising a DLT register, or a SEBI framework operating a token strictly as a representation while the demat record remains authoritative — the model the RBI's tokenised-CD pilot effectively uses (CBDC-settled, incumbent register retained).
**CONFIDENCE:** High that the sequencing lesson holds (statute + utility + compulsion); medium on timing, because SEBI has shown it will pilot narrowly before legislating.

**Derived lesson:** Demat succeeded because three things arrived together — a statute, a regulator-owned utility, and phased compulsion. Tokenisation today has a pilot but none of the three at scale.

---

### Case 2 — UPI (2016–2026): the mandate-plus-subsidy model

**FINDING:** UPI was launched by NPCI (under RBI oversight) on 11 April 2016 with 21 banks; the public rollout followed on 25 August 2016. Bank participation rose from 44 in FY2016-17 to 703 in FY2025-26 and 741 by July 2026. Volume grew from 1.78 crore transactions in FY2016-17 to 24,162 crore in FY2025-26. It first crossed one billion transactions in a month in October 2019 (about three years after launch); the second billion came within roughly a year. [T1 — PIB/Ministry of Finance, 30 Apr 2026; T3 — Business Today, 25 Aug 2026] *(current)*

**FINDING:** The demand-side accelerant was a shock (demonetisation, November 2016), and the supply-side accelerant was price: since January 2020 UPI has operated under a zero-MDR regime, mandated via amendments to Section 10A of the Payment and Settlement Systems Act 2007 and Section 269SU of the Income-tax Act 1961. Because zero-MDR removed the revenue banks would earn, the government substituted a direct subsidy — an incentive scheme paying acquiring banks 0.15% on small-merchant P2M transactions up to ₹2,000. [T1 — PIB press notes; T3 — Forbes India] *(current)*

**FINDING (disconfirming / cost):** The zero-MDR-plus-subsidy model is not self-financing. The Parliamentary Standing Committee on Finance's 32nd Report (dated 12 March 2026) described zero MDR as having made the UPI ecosystem "financially unsustainable"; the Department of Financial Services told the Committee that incentive support "covers only 11% of the cost the industry incurs, and about 14% of the MDR it could have collected." The incentive paid over 2021-22 to 2024-25 was ₹8,730 crore (~US$986m); the FY2023-24 incentive alone was ₹3,631 crore (~US$410m), up from ₹2,210 crore in 2022-23 (Ministry of Finance statement, 18 April 2025). Proposals to reintroduce a tiered MDR on larger merchants followed. [T1 — Standing Committee on Finance, 32nd Report, 12 Mar 2026; T3 — Business Standard, 17 Aug 2026; T3 — Deccan Herald] *(current)*

**INDIAN ANALOGUE:** A tokenised programmable-payments or settlement rail (e.g. RBI's tokenised-CD pilot settled via wholesale CBDC, Module B) is the UPI-equivalent for wholesale/institutional flows.
**WHO WOULD OWN IT:** RBI (Department of Payment and Settlement Systems / Fintech Department) and NPCI for retail-adjacent rails; RBI's e₹ team for CBDC settlement. Budget sits with RBI and, for any subsidy, the Ministry of Finance (DFS).
**WHAT BLOCKS IT TODAY:** There is no commercial revenue model for participants, and — unlike UPI — no political constituency demanding free institutional settlement. The VDA tax question (whether tokenised instruments are Virtual Digital Assets under s.115BBH) is unresolved by CBDT (Module B), which chills participation.
**WHAT WOULD HAVE TO CHANGE:** RBI designation of the rail under the PSS Act 2007 to give settlement finality; a CBDT clarification that regulated tokenised instruments are not VDAs; and either a fee model or an explicit subsidy decision by MoF.
**CONFIDENCE:** High that mandate + funded incentive is the Indian playbook; high that the funding question is unavoidable, given UPI's own ~11%-cost-recovery experience.

**Derived lesson:** UPI shows India will subsidise adoption of infrastructure it deems a public good — but the subsidy is large, contested, and eventually forces the pricing question. Any "free" tokenised rail inherits this problem.

---

### Case 3 — Aadhaar and eKYC (2016–2019): the litigation-and-reversal case

**FINDING:** Aadhaar-based eKYC became embedded in banking and telecom onboarding after 2016, then was abruptly curtailed. On 26 September 2018 the Supreme Court (Justice K.S. Puttaswamy v. Union of India) upheld Aadhaar 4:1 but struck down Section 57 of the Aadhaar Act — the provision that let private entities (banks acting commercially, fintechs, telcos) use Aadhaar for authentication — holding that private use based on contract failed the proportionality/legality test. This halted private eKYC overnight and left banks and fintechs "unsure on delinking." A 2019 amendment subsequently permitted voluntary, opt-in private authentication. [T1 — Supreme Court judgment; T3 — Hindustan Times, 28 Sep 2018] *(historical, stable)*

**INDIAN ANALOGUE:** Any identity or verification layer for machine/institutional transactions built on a public-infrastructure primitive (e.g. on-chain identity or verifiable credentials for KYC in a tokenised system).
**WHO WOULD OWN IT:** UIDAI and RBI jointly for KYC; SEBI for market-intermediary KYC (via KRAs). Budget in the sponsoring regulator.
**WHAT BLOCKS IT TODAY:** The precedent itself — the courts will strike down a private-sector data primitive that lacks an explicit, proportionate statutory basis. A tokenised-identity layer used by private banks would face the same challenge absent legislation.
**WHAT WOULD HAVE TO CHANGE:** A statute expressly authorising the use, satisfying the three-part Puttaswamy privacy test, and now the DPDP Act 2023 consent architecture.
**CONFIDENCE:** High. This is a direct, litigated warning about deploying a private-sector identity primitive without a statute.

**Derived lesson:** In India, a data/identity primitive can be built and adopted, then reversed by the courts if the legal basis is contractual rather than statutory. Sequencing must put the statute first, not retrofit it.

---

### Case 4 — Account Aggregator (2021–2026): the "slower than expected" case

**FINDING:** The AA framework has a Master Direction basis (RBI NBFC-AA Directions, September 2016) and launched in September 2021 with a coordinating body, Sahamati, recognised by the RBI as the ecosystem's self-regulatory organisation on 5 June 2026. Per Sahamati's ecosystem dashboard, cumulative linked accounts reached 326.30 million and cumulative fulfilled consents 538.32 million by July 2026. In FY26 the ecosystem facilitated about 3.8 crore financial services, 45 crore consents and 500 crore data fetches. [T1/T2 — Sahamati dashboard; T3 — Business Standard] *(current)*

**FINDING (disconfirming / lag):** Despite headline growth, the conversion from "accounts enabled" to "accounts actually linked" remained under 10% (284.6 million linked against 2.88 billion enabled) as of March 2026 — the framework's central weakness. The documented causes: weak FIP (data-holding bank) reliability, with ecosystem success rates historically low and only reaching about 60% after intervention; uneven bank onboarding; low consumer awareness; and — critically — the absence of a commercial incentive for the incumbent data-holder to make sharing reliable. FD/RD data is supported by only ~40% of banks; joint accounts are excluded entirely. [T2 — Sahamati; T3 — IMPRI; T5 — Tigerfeathers, labelled analytical] *(current)*

**INDIAN ANALOGUE:** This is the closest behavioural analogue to a tokenised settlement/collateral layer: a consent- or ledger-based network where value depends on the incumbent (bank/depository) actively participating, and where the incumbent's incentive to do so is weak.
**WHO WOULD OWN IT:** RBI (for AA); by analogy, whichever regulator sponsors the tokenised rail. Budget in the sponsoring institution and participating banks' technology functions.
**WHAT BLOCKS IT TODAY:** The incentive-misalignment problem — the party asked to invest in reliability (the incumbent) captures little of the benefit. For tokenisation, the depository/custodian has no commercial reason to migrate settlement off its existing, profitable rails.
**WHAT WOULD HAVE TO CHANGE:** Either a mandate (as with demat) or a funded incentive (as with UPI) — the two mechanisms that actually moved Indian incumbents. Voluntary frameworks with only a coordinating body have under-delivered.
**CONFIDENCE:** High. AA is well-documented evidence that a Master Direction plus an SRO, without a mandate or subsidy, produces enablement without usage.

**Derived lesson:** AA is the single strongest counter-example to "build the rails and adoption follows." It is the outcome a tokenised layer should expect absent compulsion or subsidy.

---

### Case 5 — ONDC (2021–2025): the interoperable-network case, honestly assessed

**FINDING:** ONDC (launched 2021, government-backed, operated by a not-for-profit) reached over 1,200 cities and more than 7 lakh sellers by early 2025, with seller apps rising from 31 to 72. But its retail segment peaked at 6.5 million orders in October 2024 and fell to 4.6 million by February 2025, tracking the withdrawal of financial incentives; ONDC introduced a service fee of ₹1.5 per transaction above ₹250 from April 2025. Mobility and logistics (not retail) came to dominate volume, at about 56% of transactions. [T3 — Business Standard, 27 Mar 2025; T3 — Policy Circle] *(current — verify latest volumes if used after ~Q1 2026)*

**FINDING (disconfirming):** ONDC's documented weaknesses are directly relevant: it is more complex than UPI for participants; grievance redressal and liability allocation were unresolved at scale; and demand fell when subsidies were cut — evidence that its early growth was subsidy-driven rather than organic. [T3 — Inc42; T3 — Business Standard] *(current)*

**INDIAN ANALOGUE:** An open, interoperable settlement or receivables network (e.g. deep-tier MSME receivables, Module C) where many parties must join for value to appear.
**WHO WOULD OWN IT:** For receivables, RBI (TReDS is RBI-authorised) and the TReDS operators; DPIIT for ONDC-style commerce.
**WHAT BLOCKS IT TODAY:** The cold-start / network-effect problem and unresolved liability and dispute mechanics — the same governance failures that sank the permissioned consortia in Module A (TradeLens, we.trade, Marco Polo).
**WHAT WOULD HAVE TO CHANGE:** A neutral operator with a credible governance and dispute framework, and — on the ONDC evidence — a sustained rather than temporary incentive.
**CONFIDENCE:** Medium-high. ONDC shows interoperability alone does not overcome incumbent network effects; it corroborates Module A's governance-failure thesis.

---

### Case 6 — NEFT, RTGS and NACH: the earlier settlement generation

**FINDING:** The RBI built and operated the wholesale rails directly. RTGS went live on 26 March 2004 for inter-bank transactions and was extended to customer transactions from 29 April 2004; NEFT launched in November 2005, replacing the earlier EFT/SEFT systems. Both were developed at IDRBT on the SFMS/INFINET infrastructure and now operate under the Payment and Settlement Systems Act 2007, which empowers the RBI to authorise and regulate payment systems. NACH, operated by NPCI, replaced the RBI's regional ECS from 1 May 2016, consolidating fragmented regional clearing into one centralised, standardised rail. [T1 — BIS/RBI (CPSS Red Book); T1 — IDRBT; T3 — multiple] *(historical, stable)*

**INDIAN ANALOGUE:** Wholesale tokenised settlement between banks (the RBI UMI / tokenised-CD pilot).
**WHO WOULD OWN IT:** RBI (DPSS), operationally IDRBT/NPCI.
**WHAT BLOCKS IT TODAY:** Settlement finality for a tokenised/on-chain system is not covered by the PSS Act 2007, which applies only to RBI-designated systems (Module B). Until the RBI designates such a system, on-chain settlement has no statutory finality.
**WHAT WOULD HAVE TO CHANGE:** RBI designation under the PSS Act 2007 — an administrative act the RBI can take without primary legislation, which is why the RBI's own CBDC-settled pilots are the most legally tractable near-term path.
**CONFIDENCE:** High. The PSS Act designation route is well-established and is the mechanism the RBI already controls.

**Derived lesson:** For wholesale settlement, the RBI does not wait for the market — it builds and designates. This is why the near-term Indian tokenisation architecture is CBDC-settled and RBI-run (Module B/E), not public-chain.

---

### DERIVED MODEL — How infrastructure change happens in Indian finance, and where tokenised settlement sits

The six cases yield a consistent five-stage sequence:

1. **Trigger / statute** — a crisis or policy decision produces an enabling law or Master Direction (Depositories Act 1996 after the 1992 scam; PSS Act 2007; NBFC-AA Directions 2016).
2. **Regulator-owned or regulator-blessed utility** — a neutral operator is created or designated (NSDL/CDSL; NPCI; IDRBT; Sahamati).
3. **Mandate or subsidy** — adoption is forced (demat compulsion; NACH replacing ECS) or paid for (UPI incentive).
4. **Phased compulsion / expansion** — scope widens in tranches (demat: 8 → 319 scrips; institutions → all investors).
5. **Network effects / organic use** — only after 1–4 does self-sustaining adoption appear (UPI post-2019; demat post-2006).

**Where a tokenised settlement layer sits today: between Stage 0 and Stage 1.** It has isolated pilots (RBI UMI tokenised-CD, 8 Oct 2025; SEBI corporate-bond pilot announced 26 May 2026 — Module B) but no enabling statute for on-chain finality or DLT-as-register, no designated utility, and neither a mandate nor a subsidy. This is roughly where dematerialisation sat in 1994–95: the problem was understood and pilots existed, but the Depositories Act had not yet passed.

**What the next stage requires, specifically:** (a) an RBI designation under the PSS Act 2007 for any settlement rail, and/or a SEBI/Depositories-Act treatment for any register — Stage 1; and (b) a decision on whether adoption will be mandated or subsidised — Stage 3. Absent (b), the Account Aggregator outcome (enablement without usage) is the base case.

---

## PART TWO — WHAT BRINGS INSTITUTIONS TO DEVELOPER-ADJACENT CONFERENCES

### Conference 1 — Sibos (SWIFT)

**FINDING:** Sibos, run by SWIFT since 1978, is the reference case for institutional convening. Sibos 2025 (Frankfurt, 29 Sep–2 Oct) drew over 12,500 members of the Sibos community with 168 countries represented — described in Sibos's own recap as "the event's largest ever in-person gathering" — with senior executives from more than 200 international banks and over 500 speakers; participants span commercial banks, fintechs, central banks and vendors. The 2025 programme covered digital-asset interoperability, T+1 settlement and ISO 20022 — infrastructure topics, not asset speculation — and SWIFT's shared digital-ledger launch involved 30 financial institutions. [T4 — SWIFT/Sibos (promotional for own event); T3 — corroborated by multiple] *(current)*
**Why institutions attend:** it is owned by their own cooperative (SWIFT), framed around operations and standards, and attendance is a professional expectation. **Repetition signal:** annual since 1978 — the strongest possible repeat signal.

### Conference 2 — Point Zero Forum (GFTN / Swiss SIF)

**FINDING:** The Point Zero Forum (Zurich, annual since 2022; 2025 held 5–7 May) is a curated policy-technology dialogue convened with the Swiss State Secretariat for International Finance and in cooperation with the BIS Innovation Hub, the Monetary Authority of Singapore (MAS), the Swiss Financial Market Supervisory Authority (FINMA) and the Swiss National Bank. Per GDF, "In 2025 alone, the Forum brought together more than 2,000 participants from over 60 countries, with about one-third representing public sector institutions." The Reserve Bank of India is a listed 2025 attending organisation. Policymakers and regulators receive a complimentary "Policy pass"; industry passes cost €2,000+. [T4 — Point Zero Forum (promotional); T2/T4 — GDF] *(current)*
**Why institutions and regulators attend:** explicit public-private policy framing, central-bank co-conveners, free access for regulators, and Chatham-House-style candour. **Repetition signal:** four consecutive years and a confirmed 2026 edition.

### Conference 3 — Token2049

**FINDING:** Token2049 Singapore 2025 (1–2 Oct, Marina Bay Sands) drew about 25,000 attendees from ~7,000 companies. The 2025/2026 editions foregrounded institutional participation, with senior leaders from BlackRock, J.P. Morgan, Morgan Stanley, Nasdaq, NYSE, CME and Franklin Templeton listed as expected; the 2026 edition explicitly emphasises bridging traditional finance and digital assets. [T4 — Token2049 (promotional); T5 — event recaps, labelled promotional] *(current)*
**Caveat / conflation:** Token2049's own composition is estimated at only ~15–20% "investors, funds & institutions," with the majority founders, BD and developers — and much of the programme conflates the infrastructure question with the token-asset/investment question. For an institutional infrastructure audience this is a lead-generation venue, not a policy venue. **Repetition signal:** twice-yearly since 2022, but institutional framing is recent.

### Conference 4 — Consensus

**FINDING (disconfirming):** At Consensus Hong Kong 2026, institutional presence was real but the mood among industry participants was described as "somber," with institutional-side-event trading teams "significantly down from the previous year," and a consensus that crypto is becoming "a license-driven business where compliance and traditional financial credibility matter more than crypto-native experience" — some serious projects now preferring Nasdaq or HKEX IPOs to token listings. [T5 — BeInCrypto, labelled] *(current)* This is useful counter-evidence: institutional attendance at a crypto-media conference does not equal institutional commitment, and the venue's own audience read the moment as a retrenchment.

### Conference 5 — Money20/20

**FINDING:** Money20/20 is a global payments-and-fintech conference series (US, Europe, Asia) that draws banks, payment companies and fintechs to a commercial/partnership format. *(Note: the live search budget was exhausted before a specific dated attendance figure for the 2025 Asia/Bangkok edition could be captured; this item is UNVERIFIED on exact numbers. To confirm, pull the official Money20/20 post-event report for delegate count and BFSI share.)* [UNVERIFIED — needs Money20/20 official post-event report]

### Conference 6 — Devcon / Devconnect institutional programming (the core question)

**FINDING:** Devconnect Argentina 2025 (Buenos Aires, 17–22 November) drew 14,000+ attendees from 130+ countries, of whom 45% were from Argentina and 53% were first-time Ethereum Foundation event attendees. The Ethereum Foundation deliberately keeps the main Devcon/Devconnect week to a developer core and lets institutional programming run as adjacent events. [T1 — Ethereum Foundation blog, 4 Dec 2025] *(current)*

**FINDING:** Dedicated institutional programming ran alongside the developer week. "Casa ZK: Institutional Day" took place on 19 November 2025 as a closed-door gathering, organised by ZKsync (Matter Labs) and co-hosted with the Ethereum Foundation, Crecimiento, Ripio and LNET; its agenda covered "Institutions Onchain," "Tokenize Everything" and a "Governments & Institutions" panel featuring an Argentine regulator and the Cámara Argentina Fintech. A separate institutional/RWA day, "The Capital Layer" (organiser ForkOff), ran on 18 November 2025. Note: the audience-composition claim (banks, family offices, asset managers) comes from the organiser's promotional page and should be treated as marketing; no named tier-1 global bank appears in the public speaker agenda. [T4 — event organiser pages (promotional); T1 — devconnect.org calendar] *(current)*

**FINDING:** The precedent extends back a year: the Enterprise Ethereum Alliance ran its "first ever" EEA Industry Day at Devcon 7 Bangkok on 11 November 2024, sponsored by Circle, the Ethereum Foundation, Microsoft, EY and Sky, with speakers from Microsoft, EY, Circle and Ethereum co-founder Vitalik Buterin. [T4 — EEA/Luma (promotional); T3 — The Defiant, labelled EEA-contributed] *(current)*

**FINDING (repetition — the honest signal):** The *concept* of an institutional/RWA day recurred across Devcon 7 (2024) and Devconnect 2025, but under *different organisers each year* (EEA in 2024; ZKsync and ForkOff in 2025). There is no single continuously branded institutional track. This matters: repetition of a format is the honest test of whether it worked, and here the recurrence is of the theme, not of a proven, repeated institution-facing product. [Composite of above sources]

**FINDING (disconfirming — no attributable outcome):** No primary or tier-1 source attributes any specific institutional pilot, partnership or product to attendance at Casa ZK Institutional Day, the EEA Industry Day, or any comparable Devcon/Devconnect institutional track. Large TradFi tokenisation pilots (e.g. HKMA Project Ensemble, whose pilot participants included Standard Chartered, HSBC, Bank of China HK, BlackRock and Franklin Templeton; and the DTCC/Digital Asset tokenisation of DTC-custodied US Treasuries) advanced in the same period but are not linked to conference attendance. The honest claim is that these tracks convene and align; they are not documented to procure. [Subagent research, Sep 2026; no attributable outcome found]

### The Indian context — what draws senior Indian FI people, and the constraints

**FINDING:** The format that reliably draws the most senior Indian financial-institution and regulator participation is the Global Fintech Fest in Mumbai (organised by the Payments Council of India, NPCI and the Fintech Convergence Council, with RBI/IFSCA support). GFF 2024 drew more than 80,000 participants across 350+ sessions, including 120 central bankers from 27 countries and delegates from 50 countries, with keynotes from the Prime Minister, the RBI Governor (Shaktikanta Das) and the SEBI Chair (Madhabi Puri Buch); GFF 2025 ran 7–9 October at the Jio World Convention Centre, Mumbai. [T3 — Business Standard; T4 — GFF/organiser materials; corroborated by Future Finance recap and PRNewswire] *(current)*

**Practical constraints on Indian institutional attendance (analytical synthesis):**
- **Compliance and optics.** Being publicly listed as a speaker at an event branded "crypto" carries reputational risk for a regulated Indian bank, given the RBI's repeated public preference against private crypto/stablecoins (Governor Sanjay Malhotra, Deputy Governor T. Rabi Sankar, through mid-2026 — Module E). A policy/standards framing (as at Point Zero Forum and GFF) removes this risk; a "Web3 summit" framing amplifies it.
- **Seniority and format.** Senior Indian FI leaders participate on closed roundtables and panels with regulators and peers (the GFF and Point Zero model), not on open developer stages. The difference between a closed roundtable and a public session is the difference between attendance and non-attendance for this audience.
- **Regulator presence is the gating factor.** Indian regulators attend when framed as policy dialogue with public-sector peers (the RBI is a listed Point Zero Forum attendee; the RBI/SEBI keynote GFF). A developer conference without a regulator on the programme will not draw senior institutional participation.

### DELIVER — Three format recommendations for institutional engagement at a developer conference in Mumbai

**Recommendation 1 — A closed-door, Chatham-House institutional roundtable co-badged with a policy convener, held adjacent to (not inside) the developer programme.**
*Precedent:* Point Zero Forum's regulator-inclusive closed format and free "Policy pass"; Casa ZK Institutional Day's closed-door structure at Devconnect 2025.
*Why it works for this audience:* it removes the crypto-optics problem, matches the seniority expectation (roundtable, not stage), and gives regulators a policy — not vendor — framing. It should be invitation-only, off the record, and explicitly about settlement/register/collateral infrastructure, separated from any token-asset discussion.

**Recommendation 2 — A standards-and-interoperability working session modelled on Sibos's ISO 20022 / T+1 programming, not a product showcase.**
*Precedent:* Sibos's operations-and-standards framing, repeated annually since 1978; the EEA Industry Day's enterprise-standards agenda.
*Why it works:* Indian institutions engage with infrastructure as a standards question (demat, NEFT, NACH were all standardisation exercises). A session that treats a tokenised layer as an interoperability/standards problem — how it maps to the depository record, to CBDC settlement, to ISO messaging — speaks the language of the audience that holds the budget.

**Recommendation 3 — A regulator-anchored policy panel co-hosted with an existing Indian convener (e.g. within or alongside GFF), with a named regulator confirmed before the event is announced.**
*Precedent:* GFF's RBI/SEBI/IFSCA keynote model; Point Zero Forum's central-bank co-conveners.
*Why it works:* regulator presence is the gating factor for senior Indian attendance. Anchoring to an established Indian policy venue borrows its compliance-safe reputation and its regulator relationships, rather than asking regulators to legitimise a standalone developer event.

### Honest assessment — what institutional attendance at a developer conference can and cannot achieve

**Can:** create senior introductions; align on standards and vocabulary; let regulators observe the technology in a low-commitment setting; surface which institutions have live internal interest. These are real and are the documented function of Sibos, Point Zero and the institutional days at Devconnect.

**Cannot:** produce a pilot or a procurement. In India the mechanism that produces a pilot is the regulatory sandbox (RBI, SEBI, IFSCA) and a designated legal pathway — not a conference. No sourced outcome links a conference track to an institutional pilot.

**What must happen before and after for it to matter:**
- *Before:* a named regulator confirmed on the programme; a closed, policy-framed format; a specific infrastructure question (settlement finality, register, collateral) rather than a general "Web3" agenda; and a defined destination — the sandbox or pilot the conversation is meant to feed.
- *After:* a written follow-through into a sandbox application or a standards working group within weeks; without a pre-arranged destination, the convening dissipates. This is the AA lesson applied to events: enablement (a good meeting) without a mechanism (a mandate, subsidy or sandbox slot) produces no usage.

---

## CLOSING FIVE ITEMS

### 1. The five findings hardest for a skeptical institutional reader to dismiss

1. **Demat only scaled under compulsion (institutional investors from Jan 1998, all investors from Jan 1999), not as a voluntary option.** [T1 — SEBI Annual Report 1998-99] Hard to dismiss because it is the closest structural analogue and the source is the regulator's own report.
2. **Account Aggregator's enabled-to-linked conversion is under 10% (284.6m linked vs 2.88bn enabled, Mar 2026) five years after launch.** [T2 — Sahamati] Hard to dismiss because it is the freshest, most direct evidence that a consent/ledger network without a mandate or subsidy produces enablement without usage — exactly the tokenisation risk.
3. **UPI's zero-MDR subsidy covers only ~11% of the industry's cost (₹8,730 crore over 2021-25), per the Parliamentary Standing Committee on Finance's 32nd Report (12 Mar 2026), which called the model "financially unsustainable."** [T1 — Standing Committee on Finance] Hard to dismiss because it comes from Parliament's own committee and kills the "free rails scale themselves" argument.
4. **RTGS/NEFT were built and run by the RBI itself and derive finality from PSS Act 2007 designation — a route unavailable to on-chain settlement until the RBI designates it.** [T1 — BIS/RBI; Module B] Hard to dismiss because it identifies the exact, administratively available legal lever and shows why CBDC-settled pilots lead.
5. **No sourced outcome links any Ethereum developer-conference institutional track to an institutional pilot.** [Subagent, Sep 2026] Hard to dismiss because it is stated as an absence of evidence and is the honest ceiling on what an event can do.

### 2. The strongest chart in this module
A two-line time series: **UPI monthly transaction volume (FY2016-17 to July 2026) with vertical markers at (a) demonetisation, Nov 2016, and (b) zero-MDR, Jan 2020** — overlaid against **the count of participating banks (21 → 741).** Pull volume and bank-count from the PIB/Ministry of Finance release "UPI completes 10 glorious years" (30 April 2026) and NPCI monthly statistics. It visually demonstrates the mandate/shock/subsidy inflection model that the whole module argues.

### 3. The three claims most likely to be challenged in a meeting
- **"Tokenised settlement sits at Stage 0–1 of the adoption model."** Best evidence: Module B's finding that on-chain finality (PSS Act 2007) and DLT-as-register (Depositories Act 1996) are both unaddressed, plus the pilots-only status of RBI UMI and the SEBI bond pilot. A challenger may argue the pilots are Stage 2; concede the ambiguity but note no statute or designated utility exists.
- **"Adoption needs a mandate or subsidy."** Best evidence: demat compulsion (SEBI AR 1998-99) and NACH-replacing-ECS (2016) for mandate; UPI incentive (PIB) and AA's sub-10% conversion (Sahamati) for the counterfactual. Challenge risk: someone cites organic UPI P2P growth — answer that even UPI required a shock plus a funded zero-MDR regime.
- **"A developer conference can't produce a pilot."** Best evidence: the absence of any attributable outcome from Casa ZK / EEA Industry Day, and the sandbox-based mechanism for Indian pilots. Challenge risk: anecdotes of deals "done at Sibos" — answer that convening enables, but the Indian pilot pathway is the sandbox, and ask for a sourced counter-example.

### 4. One-sentence summary for a non-technical executive
In India, new financial plumbing becomes real only when a law, a regulator-run utility, and either a mandate or a subsidy arrive together — tokenised settlement today has pilots but none of those three, so a conference in Mumbai can convene the right people and align them on standards, but it cannot substitute for the statute and the regulator's decision that every prior success required.

### 5. What this module could NOT establish, and what would be needed
- **Money20/20 Asia specific attendance and BFSI composition** — search budget exhausted before a dated figure was captured. *Needed:* the official Money20/20 post-event report.
- **Any causal outcome from a developer-conference institutional track** — none found. *Needed:* a named institution publicly attributing a pilot/partnership to conference attendance, or a post-event MoU/sandbox filing that cites the event.
- **The exact scope, participant banks and current status of the SEBI corporate-bond tokenisation pilot (REC Ltd, September 2026)** — remained ANNOUNCED ONLY / unconfirmed by regulators as of the Reuters exclusive (25 Aug 2026, Module B). *Needed:* a SEBI circular or NSDL/CDSL notice confirming issuer, size and go-live.
- **Whether any Indian bank's compliance function has formally cleared senior participation in an Ethereum-branded event** — not establishable from public sources. *Needed:* a named bank's public participation or an internal policy disclosure.
- **Staleness flags:** UPI, AA, ONDC and conference figures are current to mid-2026 but move monthly — re-check UPI/AA/ONDC volumes and the SEBI bond-pilot status before any use after roughly Q4 2026.