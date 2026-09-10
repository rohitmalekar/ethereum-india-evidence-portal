# A primer on distributed ledgers for institutions

> Written for readers who do not work in crypto. The modules in this portal assume the premise; this page does not. No figure appears here that is not sourced elsewhere in this base, and no token prices appear at all.

## Two copies of one fact

A bank finances an invoice. The supplier's system records the same invoice. A second bank, shown the same paperwork a week later, cannot see the first bank's copy. Each record is internally consistent and privately held, and there is no shared place where the three meet.

That is the normal architecture of commerce and most of it works. Its cost is a permanent function inside every large institution whose job is to make copies of the same fact agree: reconciliation. Nostro accounts matched line by line, custodians and brokers running end-of-day breaks. The line item survives because it has been there longer than anyone in the building.

Sometimes the divergence stops being a cost. Letters of undertaking issued at one Punjab National Bank branch between 2011 and 2018 were never recorded in the bank's core system, so the guarantees existed at the receiving banks and not at the issuing one. The gap was roughly ₹14,000 crore by the time the records were compared. Sources for that figure are weak (T5/T3, see the [Figure Ledger](ledger.html)), though the shape of the failure is not in dispute.

## Start with the ledger

A ledger is a list of entries in an agreed order, and a database is a ledger with one owner whose copy is authoritative. That is a governance arrangement, and for most records it is the right one. You trust your bank's balance because you trust the bank, its auditor and its regulator, and a wrong balance gets fixed by someone you can call.

Distribution changes that arrangement and nothing else. The authoritative record becomes the one the participants jointly computed, and any of them can check it without the operator's permission or the operator's word.

Everything else belongs to implementation choices in particular networks, or to a different business: mining, tokens, wallets, exchanges, prices. An institution can adopt everything on this page without holding a crypto-asset, and the one system running in mandatory production in Indian regulated finance does exactly that.

## The properties you are buying

Several parties write to the same record instead of each keeping a version to be matched later, which shrinks the reconciliation function.

Entries are appended and the history is cryptographically chained, so a later alteration is detectable rather than merely against policy. You can prove what the record said on a given date, to someone who was not there.

A participant, an auditor or a regulator confirms the state of the record directly, instead of receiving a report about it.

Each carries a price that most proposals leave out. Participants see more than they would in a private system, which is the reason banks give for rejecting public chains. Agreeing an entry among many parties costs more per write than one database doing the same work. And the rules become hard to change afterwards, which is the point and also the problem: an institution used to correcting a bad record at six in the evening now corrects it in public, with a second entry.

## The test to apply first

What happens when the party who keeps the record is wrong, absent, or conflicted?

If the answer is that you call them and they fix it, you want a database with good audit logs, and saying so in the meeting is worth more than saying yes. That covers most records inside any institution.

The cases that point the other way sound different. There are forty counterparties and half of them compete, so none will be accepted as the keeper and none wants to fund a neutral one. Or the keeper is a party to the transaction it is recording, which is the situation for registries of obligation: covenants, guarantees, charges. Or the record has to outlive the keeper, the vendor contract and the government, which is a state's answer far more often than a company's.

## The primitives that reach production

Strip the vocabulary away and production systems come down to a small set of moves. Most proposals promise all of them and deliver one.

### A shared registry

One authoritative list that many parties write to and all can read.

[SEBI](https://www.sebi.gov.in/)'s [Security and Covenant Monitoring System](https://www.sebi.gov.in/legal/circulars/mar-2022/operational-guidelines-for-security-and-covenant-monitoring-using-distributed-ledger-technology-dlt-_57331.html) has recorded charges and covenants for corporate bonds on a permissioned distributed ledger since April 2022, operated by the depositories [NSDL](https://nsdl.co.in/) and [CDSL](https://www.cdslindia.com/). It is mandatory: no ISIN activates without it, and coverage of the secured-debt universe is close to complete (the adoption counts rest on a T4 vendor case study; see [What's legal in India](whats-legal-in-india.html)).

It registers facts about securities inside the existing depository perimeter, transfers no property and settles no cash. That is why it shipped while more ambitious systems did not.

### Atomic exchange

Two transfers that either both complete or neither does.

Delivery versus payment: I send you the bond, you send me the cash, and between the two someone carries the risk that the other leg never arrives. The industry answer has been intermediaries, margin and settlement windows measured in days. A ledger holding both legs makes the swap conditional on itself, so the failure mode becomes "nothing happened" instead of "one side is exposed".

The largest production volumes sit here. [Broadridge](https://www.broadridge.com/capability/middle-and-back-office-solutions/post-trade-processing/distributed-ledger-repo-solutions)'s distributed-ledger repo platform settled roughly $8tn in July 2026, on a permissioned ledger.

### Programmable settlement

The condition lives in the record instead of in a person's inbox. Money spendable only on eligible goods, collateral that releases when a price is breached, a payment that executes when a document is filed.

The [RBI](https://www.rbi.org.in/) used programmable central bank digital currency in FY26 for direct benefit transfers of food subsidy in Gujarat, Puducherry and Chandigarh, redeemable only against eligible purchases. Whatever one thinks of CBDC, that is a working programmable-payments deployment with no crypto-asset in it.

### Verifiable provenance

An append-only history a third party can audit later without the operator's cooperation.

This one draws the least vendor attention, because there is no transaction fee in it, and governments should care about it most. It makes a record evidence instead of an assertion: land titles, public procurement, custody chains, subsidy disbursement. The value arrives years later in a dispute, by which point a business case written in payback periods has stopped counting.

## Enterprises and states buy different things

An enterprise buys working capital, headcount and days. The CFO asks about payback, and for most processes there is none, because the incumbent rail already clears the trade. Indian securities settle at T+1. [UPI](https://www.npci.org.in/what-we-do/upi/product-overview) clears retail payments instantly at zero merchant cost. Against that baseline, "faster and cheaper" collapses within ten minutes in a room of Indian bankers.

The enterprise cases that survive are about something other than efficiency. One is fraud that a single-copy record makes mechanical: the same invoice financed twice, the same collateral pledged to three lenders, the guarantee recorded at the receiving bank and nowhere else. A shared registry removes the blind spot the fraud depended on. The other is capital mobility, collateral that moves or substitutes in minutes instead of at end of day. The saving sits in the buffer an institution funds because its assets cannot move fast enough, and that buffer is visible on the balance sheet in a way a headcount saving never is.

A state buys things that do not fit a business case. Continuity, meaning a record that survives the vendor, the contract, the department and the government. Neutrality it can demonstrate, because a state compels participation and shows it is not favouring a participant, which is why regulator-built systems ship where consortiums of equals do not. Auditability of public money without a special request or the cooperation of the department being audited. Independence from a rail whose operator sits in another jurisdiction and can be leaned on there, which drives most CBDC and cross-border settlement work without appearing in the press releases.

A state also holds an instrument no enterprise has: it can mandate. India's own record says this is usually decisive. Dematerialisation of securities succeeded because a statute, a regulator-owned utility and phased compulsion arrived together, and mass adoption still took about a decade. See [How adoption happens](how-adoption-happens.html).

## The graveyard

Every major bank-consortium trade-finance blockchain of the last decade is dead. [TradeLens](https://www.maersk.com/news/articles/2022/11/29/maersk-and-ibm-to-discontinue-tradelens) (Maersk and IBM) wound down in early 2023. [we.trade](https://www.ledgerinsights.com/trade-finance-blockchain-contour-acquires-assets-from-we-trade/), a twelve-bank European consortium, went insolvent in 2022 having lost more than $8m on about $4m of revenue, with two of its shareholder banks fully deployed. [Marco Polo](https://www.ledgerinsights.com/marco-polo-blockchain-trade-finance-insolvency/) followed in 2023 with roughly $85m of cumulative losses. [Contour](https://www.ledgerinsights.com/contour-blockchain-trade-finance-network-shutter/) closed the same year. The Australian exchange's [blockchain rebuild of its clearing and settlement system](https://www.ledgerinsights.com/asx-pauses-dlt-settlement-chess/) was scrapped in November 2022 after a write-off of A$245-255m, the software about 63% complete.

Almost none of them failed for cryptographic reasons. Rivals would not route commercially sensitive data through a platform carrying a competitor's name. The network effect never arrived, and a shared ledger with half its participants is worth less than the system it replaced. Documentary trade finance turned out not to want the product. The commercial models never covered the cost of running the thing.

The difficulty was persuading institutions that compete with each other to write to the same record, then keeping that arrangement funded and neutral for the years a network effect takes to arrive. Every failure above would have failed identically on a shared database.

What survived has one of two shapes: a single operator whose perimeter is the privacy boundary, or a regulator who can compel participation and be believed when it claims neutrality. That is a much narrower category than the market for the technology suggested it would be.

## Public or private is the second question

Non-specialists hear "distributed ledger", think "public blockchain, therefore everything is visible, therefore not for us", and stop reading. The production record separates the two questions.

The highest settlement volumes run on permissioned ledgers, at banks and market infrastructure, with confidentiality given as the reason. The highest tokenised-asset value sits on public chains, mostly Ethereum, in funds and stablecoins where the holder base is broad and reach is the point. These are two layers of the stack, and treating them as one is the most common error in writing on this subject.

The practical choice is three-way: a multi-party confidential architecture where many counterparties settle one transaction and each sees only its own leg; a single-operator permissioned chain where the privacy boundary is the institution's own perimeter; and a public chain where reach matters more than confidentiality. [Ethereum vs alternatives](ethereum-vs-alternatives.html) works through the trade-offs, and [The privacy question](the-privacy-question.html) covers what is being built to close the confidentiality gap.

Decide whether you need a shared ledger before deciding which one. Most proposals run that order backwards, and most vendors prefer it that way.

## The limits

Bad data survives the move. A ledger makes a wrong entry durable and provable, where a database lets you correct it. Every input still arrives from a system or a person you already had reason to doubt.

Anything about the physical world stays outside. Whether the cargo was loaded, whether the borrower is solvent, whether the goods match the invoice: all of it enters through a human or a sensor, and the ledger records whatever they said. Half the trade-finance graveyard was built assuming this problem would yield.

The legal question stays open. A ledger entry is a fact about a computer until a law makes it a fact about ownership. In India, settlement finality is conferred only on RBI-designated systems under the [Payment and Settlement Systems Act 2007](https://rbidocs.rbi.org.in/rdocs/Publications/PDFs/PSS29042022228C43D5250B4A69A12899CD5054894C.PDF), and the [Depositories Act 1996](https://www.sebi.gov.in/legal/acts/sep-1995/depositories-act-1996-as-amended-by-the-international-financial-services-centres-authority-act-2019-w-e-f-october-01-2020-_1.html) contemplates a depository rather than a ledger. These are gaps rather than prohibitions, which matters, because a gap closes with an administrative act or a narrow amendment. A pilot does not close it, and no amount of engineering will.

Adoption does not follow the rail. The retail e-rupee's stock in circulation fell about 24% year on year, from ₹1,016 crore in March 2025 to ₹772 crore in March 2026, while the pilot was expanding. The Account Aggregator framework, built without a mandate, still converts under 10% of enabled accounts to linked ones five years in. Both were technically sound and regulator-blessed, and neither had a mandate or a subsidy behind it.

## Reading a proposal

1. Name the record that more than one party keeps a copy of, in one sentence. If nobody can produce it, there is no use case, only a technology looking for one.
2. Name the parties who must write to it, and say why none of them can hold it. If one of them obviously can, the answer is a database and an API.
3. State what breaks today, in rupees or days, with a source. Not a market size: the corporate bond market being ₹53.6 lakh crore tells you nothing, while secondary turnover of ₹7,645 crore a day against that stock tells you where the friction sits.
4. Name who owns that budget. Cross-organisational savings with no single owner are the most common reason a sound pilot never becomes a system. Reconciliation cost usually sits in operations while the benefit accrues to treasury, and neither will fund it.
5. Ask what the incumbent rail already does. If it clears the trade at T+1 for near-zero fees, make the fraud or capital-mobility argument, or drop the proposal.
6. Ask what happens on day one if only half the participants join. If the answer is that nothing works, the problem is the network effect, and that is what emptied the graveyard above. Then ask who can compel the other half, and what it would take.

The last question applies to your own enthusiasm as much as to a vendor's: could a shared database with strong audit logs and one trusted operator do this? If yes, do that. It is cheaper, faster, better understood and easier to hire for. A distributed ledger earns its cost at the point where no one exists whom every participant will accept as that operator, and there is no realistic prospect of appointing one.

Next: [What shipped](what-shipped.html) for the production record and the graveyard in full, [What's legal in India](whats-legal-in-india.html) for what is barred against what is merely unaddressed, [Where the value is](where-the-value-is.html) for the Indian opportunities and their owners, and [The objections](the-objections.html) for the strongest case against everything above.

*Every figure on this page carries its source, date and tier in the [Figure Ledger](ledger.html). Two of them rest on the weakest tiers and are flagged in the text. This subject moves monthly; re-check anything before it leaves the room.*
