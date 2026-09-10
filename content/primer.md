# Why Institutions Need a Shared Ledger

> **A primer for people who do not work in crypto.** The rest of this portal assumes you accept the premise and want the Indian evidence. This page does not assume it. It starts from the ordinary problem a distributed ledger is meant to solve, works through the four things one actually does in production, separates why a company would want one from why a government would, and ends with the questions to ask when a proposal lands on your desk. No token prices appear anywhere in it.

## Start with the boring problem

Two organisations, one fact, two copies.

A bank has financed an invoice. The supplier's own system records the same invoice. A second bank, approached with the same paperwork a week later, has no way to see the first bank's copy. Each institution's record is internally consistent and privately held, and there is no shared place where the three of them meet.

That is not a technology failure. It is the normal architecture of commerce, and most of it works. What it costs is a permanent function inside every large institution whose job is to make copies of the same fact agree: reconciliation. Nostro accounts matched line by line. Trustees confirming to issuers what the issuers already told them. Custodians, depositories and brokers running end-of-day breaks. Nobody questions the line item, because it has been there longer than anyone in the building.

Occasionally the divergence is not a cost but a hole. Between 2011 and 2018, letters of undertaking issued at a single Punjab National Bank branch were not recorded in the bank's core system, so the guarantees existed at the receiving banks and not at the issuing one. When the two records were finally compared, the gap was roughly ₹14,000 crore. Sources for that figure are weak (T5/T3, see the [Figure Ledger](ledger.html)), but the shape of the failure is not in dispute: an obligation that exists on one party's copy and not the other's.

A distributed ledger is a bet that in some specific, narrow cases, the second copy is optional.

## Start with "ledger", not "blockchain"

A ledger is the oldest information technology in commerce: a list of entries in an agreed order. A database is a ledger with one owner, and the owner's copy is the real one. That is a governance answer, not a technical one, and for most records it is the right answer. You trust your bank's balance because you trust the bank, its auditor and its regulator, and if the balance is wrong you call someone who can fix it.

What "distributed" changes is only that governance answer. In a distributed ledger, the authoritative record is the one the participants jointly computed, and any of them can check it without asking the operator's permission or taking the operator's word.

That is the entire idea. Mining, tokens, wallets, exchanges, the price of anything: those are either implementation details of particular networks or, more often, a different business altogether. An institution can adopt everything described on this page without ever holding a crypto-asset, and the one system running in mandatory production in Indian regulated finance does exactly that.

## The three properties you are buying

**One copy, many writers.** Several parties write to the same record rather than each keeping a version to be matched later. The reconciliation function shrinks because there is nothing to reconcile.

**Tamper-evidence.** Entries are appended, not edited, and the history is cryptographically chained, so a later alteration is detectable rather than merely against policy. You can prove what the record said on a date, to someone who was not there.

**Independent verification.** A participant, an auditor or a regulator can confirm the state of the record directly, instead of receiving a report about it.

Each has a price, and the prices are what most pitches leave out. Participants see more than they would in a private system, which is why confidentiality is the single most cited reason banks reject public chains. Agreeing an entry among many parties is slower and costlier per write than a single database doing the same thing. And the rules become genuinely hard to change afterwards, which is the point, and also the problem: an institution used to fixing a bad record quietly at 6pm now has to fix it in public, with a correcting entry.

## The one test worth applying

Before any architecture discussion, one question separates a real case from a pitch:

**What happens when the party who keeps the record is wrong, absent, or conflicted?**

If the answer is "we call them and they fix it," you want a database with good audit logs. Say so in the meeting. That is the correct answer for the overwhelming majority of records inside any institution, and being the person who says it is worth more than being the person who says yes.

Three answers point the other way.

*"We cannot call them, because there are forty of them and half are competitors."* No single participant will be accepted as the keeper of the record, and no one wants to fund a neutral one.

*"They are a party to the transaction they are recording."* The keeper has an interest in the entry. This is the case for registries of obligation: covenants, guarantees, charges, custody.

*"The record has to outlive them."* Continuity beyond the operator, the vendor contract, the ministry reorganisation or the government. This is mostly a state's answer, and it is the one enterprises rarely reach for.

## The four things a shared ledger actually does

Strip away the vocabulary and production systems do four things. Each is worth understanding on its own, because most proposals quietly promise all four and deliver one.

### 1. A shared registry

One authoritative list that many parties write to and all can read.

India runs the clearest example in the world of this, and its regulator built it. [SEBI](https://www.sebi.gov.in/)'s [Security and Covenant Monitoring System](https://www.sebi.gov.in/legal/circulars/mar-2022/operational-guidelines-for-security-and-covenant-monitoring-using-distributed-ledger-technology-dlt-_57331.html) has recorded charges and covenants for corporate bonds on a permissioned distributed ledger since April 2022, operated by the depositories [NSDL](https://nsdl.co.in/) and [CDSL](https://www.cdslindia.com/). It is not a pilot and not optional: no ISIN activates without it, and coverage of the secured-debt universe is close to complete (the specific adoption counts rest on a T4 vendor case study; see [What's legal in India](whats-legal-in-india.html)).

Note what it is and is not. It is a register of *facts about* securities, sitting inside the existing depository perimeter. It transfers no property and settles no cash. That is precisely why it shipped while more ambitious systems did not.

### 2. Atomic exchange

Two transfers that either both complete or neither does.

Delivery versus payment is the oldest problem in settlement: I send you the bond, you send me the cash, and between the two someone carries the risk that the other leg never arrives. The industry's answer has been intermediaries, margin, and settlement windows measured in days. A ledger that holds both legs can make the swap conditional on itself, so the failure mode is "nothing happened" rather than "one side is exposed."

This is where the largest production volumes are. [Broadridge](https://www.broadridge.com/capability/middle-and-back-office-solutions/post-trade-processing/distributed-ledger-repo-solutions)'s distributed-ledger repo platform settled roughly $8tn in July 2026 alone. It runs on a permissioned ledger, not a public one.

### 3. Programmable settlement

The condition lives in the record rather than in a person's inbox.

Money that can only be spent on eligible goods, collateral that releases when a price is breached, a payment that executes when a document is filed. The Indian example is again a state one: in FY26 the [RBI](https://www.rbi.org.in/) used programmable central bank digital currency for direct benefit transfers of food subsidy in Gujarat, Puducherry and Chandigarh, redeemable only against eligible purchases. Whatever one thinks of CBDC, that is a working programmable-payments deployment with no crypto-asset anywhere in it.

### 4. Verifiable provenance

An append-only history a third party can audit later without the operator's cooperation.

This one attracts the least vendor attention, because there is no transaction fee in it, and it is the one governments should care about most. It is the property that makes a record evidence rather than an assertion: land titles, public procurement, custody chains, subsidy disbursement, clinical or environmental measurement. The value shows up years later, in a dispute, which is exactly when a business case written in payback periods has stopped counting.

## Enterprises and states want different things

The technology is the same. The reason for buying it is not, and conflating the two is why so many pitches land badly in both rooms.

**An enterprise is buying working capital, headcount and days.** The CFO's question is payback, and for most processes the honest answer is that there is none, because the incumbent rail already clears the trade. India's securities settle at T+1. [UPI](https://www.npci.org.in/what-we-do/upi/product-overview) clears retail payments instantly and at zero merchant cost. Against that baseline, "faster and cheaper" is not a case, and a room full of Indian bankers will say so within ten minutes.

Two enterprise cases do survive that test, and neither is an efficiency argument.

The first is **fraud that a single-copy record makes possible**: the same invoice financed twice, the same collateral pledged to three lenders, the guarantee that exists at the receiving bank and not the issuing one. A shared registry does not detect fraud cleverly. It removes the blind spot that made the fraud mechanical.

The second is **capital mobility**: collateral that can be moved, substituted or recalled in minutes rather than at end of day. The saving is not in fees, it is in the buffer an institution holds because its assets cannot move fast enough. That buffer is large, it is funded, and unlike a headcount saving it is visible on the balance sheet.

**A state is buying something an enterprise cannot put in a business case.**

*Continuity.* A record that survives the vendor, the contract, the department and the government. A state plans in decades and has been burned by systems it cannot read after the supplier's contract lapses.

*Provable neutrality.* This is the underrated one. The reason consortium ledgers failed and regulator-built ones ship is that a state can compel participation and simultaneously demonstrate it is not favouring a participant. No private consortium can do either.

*Auditability of public money.* Spending traceable without a special request, an RTI application, or the cooperation of the department being audited.

*Sovereignty over infrastructure it does not operate.* The unstated driver behind most central bank digital currency and cross-border settlement work: not depending on a rail whose operator sits in another jurisdiction and can be leaned on there.

And a state holds the instrument no enterprise has: it can mandate. India's own record says this is usually decisive. Dematerialisation of securities succeeded because a statute, a regulator-owned utility and phased compulsion arrived together; none of the three alone would have done it, and mass adoption still took about a decade. See [How adoption happens](how-adoption-happens.html).

## The graveyard, and what actually killed it

Any primer that skips this part is a brochure.

Every major bank-consortium trade-finance blockchain of the last decade is dead. [TradeLens](https://www.maersk.com/news/articles/2022/11/29/maersk-and-ibm-to-discontinue-tradelens) (Maersk and IBM) wound down in early 2023. [we.trade](https://www.ledgerinsights.com/trade-finance-blockchain-contour-acquires-assets-from-we-trade/), a twelve-bank European consortium, went insolvent in 2022 having lost more than $8m on about $4m of revenue, with only two of its shareholder banks fully deployed. [Marco Polo](https://www.ledgerinsights.com/marco-polo-blockchain-trade-finance-insolvency/) followed in 2023 with roughly $85m of cumulative losses. [Contour](https://www.ledgerinsights.com/contour-blockchain-trade-finance-network-shutter/) closed the same year. The Australian exchange's [blockchain rebuild of its clearing and settlement system](https://www.ledgerinsights.com/asx-pauses-dlt-settlement-chess/) was scrapped in November 2022 after a write-off of A$245–255m, with the software about 63% complete.

Almost none of them failed for cryptographic reasons. They failed because rivals would not route commercially sensitive data through a platform carrying a competitor's name; because the network effect never arrived and a shared ledger with half the participants is worth less than the system it replaced; because documentary trade finance turned out not to want the product; and because the commercial models never covered the cost of running the thing.

The lesson generalises. **A shared ledger is a governance arrangement wearing a technology costume.** The cryptography has been the easy part for a decade. The hard part is persuading institutions that compete with each other to write to the same record, and then keeping that arrangement funded and neutral for the years it takes network effects to arrive. Every failure above is a governance failure, and every one of them would have failed identically on a shared database.

Which is why the systems that survive have one of two shapes: a single operator whose perimeter is the privacy boundary (a bank's own rail), or a regulator who can mandate participation and be believed when it says it is neutral (SEBI's covenant system). Consortiums of equals are the shape with the graveyard.

## Public or private is the second question

Non-specialists often hear "distributed ledger" and think "public blockchain, therefore everything is visible, therefore not for us." Those are separable questions, and the production record separates them cleanly.

The highest settlement *volumes* run on permissioned ledgers: banks and market infrastructure, with confidentiality given as the stated reason. The highest tokenised-asset *value* sits on public chains, mostly Ethereum: funds and stablecoins, where the holder base is broad and the point is reach. These are two different layers of the stack, and treating them as one is the most common error in writing on this subject.

The practical choice is three-way rather than two-way: a multi-party confidential architecture where many counterparties settle one transaction and each may see only its own leg; a single-operator permissioned chain where the privacy boundary is the institution's own perimeter; and a public chain where reach matters more than confidentiality. [Ethereum vs alternatives](ethereum-vs-alternatives.html) works through the trade-offs, and [The privacy question](the-privacy-question.html) covers what is being built to close the confidentiality gap.

Decide whether you need a shared ledger before deciding which one. Most proposals do it in the wrong order, and most vendors prefer it that way.

## What a distributed ledger does not fix

**Bad data.** A ledger makes a wrong entry durable and provable, which is worse than a database where it can be corrected quietly. Every input still arrives from a system or a person you already had reason to doubt.

**Anything about the physical world.** Whether the cargo was loaded, whether the borrower is solvent, whether the goods match the invoice: all of it enters through a human or a sensor, and the ledger faithfully records whatever they said. Half the trade-finance graveyard was built on the assumption that this problem would yield.

**The legal question.** A ledger entry is a fact about a computer until a law makes it a fact about ownership. In India, settlement finality is conferred only on RBI-designated systems under the [Payment and Settlement Systems Act 2007](https://rbidocs.rbi.org.in/rdocs/Publications/PDFs/PSS29042022228C43D5250B4A69A12899CD5054894C.PDF), and the [Depositories Act 1996](https://www.sebi.gov.in/legal/acts/sep-1995/depositories-act-1996-as-amended-by-the-international-financial-services-centres-authority-act-2019-w-e-f-october-01-2020-_1.html) contemplates a depository rather than a ledger. These are gaps rather than prohibitions, which matters, because a gap closes with an administrative act or a narrow amendment. But a pilot does not close it, and no amount of engineering will.

**Adoption.** Building the rail does not produce usage. India has two clean demonstrations. The retail e-rupee's *stock in circulation* fell about 24% year on year, from ₹1,016 crore in March 2025 to ₹772 crore in March 2026, while the pilot was expanding. The Account Aggregator framework, built without a mandate, still converts under 10% of enabled accounts to linked ones five years in. Both were technically sound and regulator-blessed. Neither had a mandate or a subsidy behind it.

## How to read a proposal

Six questions, in order. A proposal that cannot answer the first three is not a proposal.

1. **Name the record that more than one party keeps a copy of.** One sentence, no adjectives. If nobody can produce it, there is no use case, only a technology looking for one.
2. **Name the parties who must write to it, and say why none of them can hold it.** If one of them obviously can, the answer is a database and an API.
3. **State what breaks today, in rupees or days, with a source.** Not a market size. The corporate bond market being ₹53.6 lakh crore tells you nothing; secondary turnover of ₹7,645 crore a day against that stock tells you where the friction is.
4. **Name who owns that budget.** Cross-organisational savings with no single owner are the most common reason a sound pilot never becomes a system. Reconciliation cost usually sits in operations while the benefit accrues to treasury, and neither will fund it.
5. **Ask what the incumbent rail already does.** If it clears the trade at T+1 and the fee is near zero, efficiency is not your case. Fraud or capital mobility might be. Make that argument instead, or drop it.
6. **Ask what happens on day one if only half the participants join.** If the answer is "nothing works," you have a network-effect problem rather than a technology problem, and that is what killed everything in the graveyard. Then ask who can compel the other half, and what it would take.

And the closing test, worth applying to your own enthusiasm as much as to a vendor's: **could a shared database with strong audit logs and one trusted operator do this?** If yes, do that. It is cheaper, faster, better understood, and easier to hire for. A distributed ledger starts earning its cost only at the point where the honest answer is that there is no one every participant will accept as that operator, and no realistic prospect of appointing one.

## Where this leaves you

The pitch a decade ago was that distributed ledgers would replace institutions. The production record shows something duller and more useful: institutions using them to stop keeping duplicate copies of each other's records, in a small number of places where the duplication was expensive or dangerous enough to be worth the governance fight.

That is a real category of problem, and it is not going away, because the underlying condition — several organisations needing to agree on one fact that none of them can be trusted to hold alone — is a permanent feature of finance, trade and government. It is just much narrower than the market for the technology suggested it would be.

Where it has worked, someone could name the record, name the parties, and name who pays. That is the whole test.

**Next.** [What shipped](what-shipped.html) is the production record and the graveyard in full. [What's legal in India](whats-legal-in-india.html) separates what is barred from what is merely unaddressed. [Where the value is](where-the-value-is.html) sizes the Indian opportunities and names their owners. [The objections](the-objections.html) states the strongest case against everything above.

*Every figure on this page is drawn from the modules and carries its source, date and tier in the [Figure Ledger](ledger.html). Two of them rest on the weakest tiers and are flagged as such in the text. This subject moves monthly; re-check anything before it leaves the room.*
