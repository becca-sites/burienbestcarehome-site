// YouTube "Your Best Season" video series blog posts
// These posts correspond to videos from Becca Pitts' Your Best Season playlist
// Import and spread into the main posts array

import type { Post } from './posts'

export const youtubeSeriesPosts: Post[] = [
{
  slug: "understanding-hospice-care-what-families-need-to-know",
  title: "Understanding Hospice Care: What It Is, When It's Time, and What to Expect",
  description: "Becca sits down with a local hospice care professional to explain what hospice really is and isn't.",
  date: "2026-06-23",
  author: "Becca Pitts",
  readingTime: "8 min",
  tags: ["Hospice Care", "End of Life", "Family Caregiving", "Senior Care"],
  heroImage: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1600&h=900&q=80",
  videoUrl: "https://www.youtube.com/watch?v=gC4-fz5IZUc",
  body: [
    {
      type: 'p',
      text: 'Nobody wants to have this conversation. Not you, not your siblings, not the doctor who keeps using the word "options" instead of saying what everyone in the room already feels. Your parent is declining. The treatments are not working the way they used to. And somewhere in the back of your mind, a quiet voice is asking the question you have been afraid to google.'
    },
    {
      type: 'p',
      text: '"Is it time for hospice?"'
    },
    {
      type: 'p',
      text: 'If you are an adult daughter in Burien, Des Moines, SeaTac, White Center, or anywhere in South King County trying to figure out what hospice care actually is, what it covers, and whether your parent qualifies, this article is for you. I recently sat down with a hospice care professional right here in our community to have the conversation most families need but rarely get. Watch the full conversation in the video embedded above, and keep reading for the key things every family should understand.'
    },
    {
      type: 'h2',
      text: 'What Is Hospice Care, Really?'
    },
    {
      type: 'p',
      text: 'Hospice care is a philosophy of care, not a place. It is a comprehensive, holistic approach that shifts the focus from trying to cure an illness to providing comfort, dignity, and the best possible quality of life for someone who is terminally ill. Hospice meets your loved one wherever they live, whether that is their own home, an adult family home like ours in Burien, an assisted living facility, or a dedicated hospice center.'
    },
    {
      type: 'p',
      text: 'A hospice team typically includes a physician, registered nurses, home health aides, social workers, chaplains, and trained volunteers. Together, they manage pain, address symptoms, and provide emotional and spiritual support for both your parent and your entire family. Hospice is not about giving up. It is about choosing to spend the time that remains focused on comfort, connection, and presence rather than on treatments that are no longer helping.'
    },
    {
      type: 'p',
      text: 'One detail that surprises many families: hospice also includes bereavement support for up to 13 months after a loved one passes. The care does not end at the moment of death. It extends to you, your siblings, and anyone in the family who needs help navigating grief afterward.'
    },
    {
      type: 'h2',
      text: 'When Is It Time to Consider Hospice?'
    },
    {
      type: 'p',
      text: 'This is the question families wrestle with most, and for good reason. It feels like a line you cannot uncross. But the truth is, hospice is not a one-way door. You can leave hospice care at any time if your parent improves or if you change your mind. And research consistently shows that patients who receive hospice care earlier tend to have a better quality of life, better pain management, and in some cases, actually live longer than patients who continue aggressive treatment alone.'
    },
    {
      type: 'p',
      text: 'To qualify for the Medicare hospice benefit, a hospice physician and your parent\'s regular doctor must certify that your parent has a terminal illness with a life expectancy of six months or less if the disease runs its normal course. That does not mean your parent will die within six months. It means that based on the current trajectory, the medical team believes the illness is life-limiting on that timeline.'
    },
    {
      type: 'p',
      text: 'Here are some signs that families in our Burien community often describe when they look back and say, "That was when we should have called hospice."'
    },
    {
      type: 'ul',
      items: [
        'Frequent hospitalizations or emergency room visits over the past several months',
        'A noticeable, steady decline in physical function, appetite, or weight',
        'Increasing difficulty with daily activities like eating, walking, or communicating',
        'The doctor has said "there is nothing more we can do" or has started conversations about comfort care',
        'Your parent has said, in whatever words they have, that they are tired of fighting',
        'The family is exhausted from caregiving and the current path feels unsustainable'
      ]
    },
    {
      type: 'p',
      text: 'If you recognize your family in even two or three of those, it is worth having a conversation with your parent\'s doctor about a hospice evaluation. An evaluation is not a commitment. It is information.'
    },
    {
      type: 'h2',
      text: 'What Does the Medicare Hospice Benefit Actually Cover?'
    },
    {
      type: 'p',
      text: 'This is where most families are relieved, because the Medicare hospice benefit is one of the most comprehensive benefits in the entire Medicare program, and the out-of-pocket cost for most services is zero.'
    },
    {
      type: 'p',
      text: 'Under Medicare Part A, hospice coverage includes:'
    },
    {
      type: 'ul',
      items: [
        'Doctor services and nursing care',
        'Pain management and symptom control medications related to the terminal diagnosis',
        'Medical equipment like hospital beds, wheelchairs, and oxygen',
        'Medical supplies such as bandages and catheters',
        'Home health aide and homemaker services',
        'Physical therapy, occupational therapy, and speech-language pathology',
        'Social work services',
        'Dietary and nutritional counseling',
        'Grief and bereavement counseling for the family',
        'Short-term inpatient care for pain and symptom management when needed',
        'Short-term respite care to give family caregivers a break (up to five consecutive days)'
      ]
    },
    {
      type: 'p',
      text: 'The hospice benefit is structured in periods: two initial 90-day periods, followed by unlimited 60-day periods. At the start of each period, your parent must be recertified as terminally ill. There is no cap on how long someone can receive hospice care as long as they continue to qualify. Some people are on hospice for months, even over a year.'
    },
    {
      type: 'p',
      text: 'For 2026, CMS approved a 2.6% increase in hospice payment rates, which helps ensure that hospice providers in King County and across Washington State can continue delivering the level of care families depend on.'
    },
    {
      type: 'p',
      text: 'There are a few small costs to be aware of. You may pay a copayment of no more than $5 for each prescription for outpatient drugs for pain and symptom management. And if you use inpatient respite care, there is a 5% coinsurance. But for the vast majority of hospice services, the cost is fully covered.'
    },
    {
      type: 'h2',
      text: 'What Are the Most Common Myths About Hospice?'
    },
    {
      type: 'p',
      text: 'In our conversation, we spent a good deal of time on the myths that keep families from seeking hospice care when they need it. These myths are not just wrong; they actively harm families by delaying comfort and support.'
    },
    {
      type: 'h3',
      text: '"Hospice means giving up."'
    },
    {
      type: 'p',
      text: 'Hospice is not giving up. It is choosing to redirect care toward what matters most: comfort, pain relief, and time spent with family rather than in hospital waiting rooms. Families consistently report that hospice gave them back the person they loved, because once pain is managed and the burden of treatment is lifted, their parent is more present, more comfortable, and more themselves.'
    },
    {
      type: 'h3',
      text: '"Hospice is only for the last few days."'
    },
    {
      type: 'p',
      text: 'One of the biggest regrets families share is waiting too long. Hospice is available for patients with a prognosis of six months or less, and many people receive hospice care for weeks or months. The earlier you begin, the more benefit your parent and your family receive. Waiting until the final 48 hours means missing months of support, pain management, and guidance that could have made the entire journey more bearable.'
    },
    {
      type: 'h3',
      text: '"Pain medication will hasten death."'
    },
    {
      type: 'p',
      text: 'When medications like morphine are administered correctly under medical supervision, they do not hasten death. They relieve suffering. Hospice nurses are specifically trained in pain management for end-of-life care, and the goal is always comfort, never acceleration.'
    },
    {
      type: 'h3',
      text: '"You have to sign a Do Not Resuscitate order."'
    },
    {
      type: 'p',
      text: 'A DNR is not a requirement for hospice admission. It is one of several advance directive documents that families may choose to discuss, but hospice teams will never pressure you. These are your family\'s decisions, made at your own pace.'
    },
    {
      type: 'h2',
      text: 'How Does Hospice Work Inside an Adult Family Home?'
    },
    {
      type: 'p',
      text: 'At Burien Best Care Home, we work closely with hospice providers serving the South King County area. When one of our residents transitions to hospice care, the hospice team comes to us. Your parent does not have to move. They stay in their familiar room, with the same caregivers they know and trust, surrounded by the routines and faces that bring them comfort.'
    },
    {
      type: 'p',
      text: 'The hospice nurse visits regularly to manage medications, monitor symptoms, and adjust the care plan. Our caregivers, at a 1:3 staff-to-resident ratio, provide the round-the-clock personal care, companionship, and daily support. The hospice social worker and chaplain are available to your family for emotional and spiritual support. It is a partnership, and it works because a small adult family home with six to eight residents allows for the kind of individualized attention that hospice care requires.'
    },
    {
      type: 'p',
      text: 'Families often tell us that this arrangement gave them permission to stop being the medical coordinator and go back to being the daughter. When hospice and a trusted care home are working together, you can simply be present with your parent instead of managing medications, tracking symptoms, and making calls to pharmacies at midnight.'
    },
    {
      type: 'h2',
      text: 'How Do I Talk to My Family About Hospice?'
    },
    {
      type: 'p',
      text: 'This might be the hardest part of the entire process. Siblings disagree. Spouses resist. The parent themselves may not want to talk about it. Here are a few things I have seen work for families in our community.'
    },
    {
      type: 'p',
      text: '**Start with what you are observing, not what you are recommending.** Instead of saying "I think Mom needs hospice," try "I have noticed that Mom has been in the hospital three times in four months, and she told me last week that she is tired. I want to understand what options are available so we can support her." Observation invites conversation. Recommendation invites resistance.'
    },
    {
      type: 'p',
      text: '**Ask the doctor to initiate the conversation.** Many families find it easier when the physician raises the topic. You can call your parent\'s doctor privately and say, "I would like you to talk with my mother about whether hospice might be appropriate. She will hear it differently coming from you."'
    },
    {
      type: 'p',
      text: '**Separate the evaluation from the decision.** A hospice evaluation is free, covered by Medicare, and does not commit anyone to anything. It simply gives your family information. Framing it as "let\'s just learn what this would look like" takes the pressure out of the conversation.'
    },
    {
      type: 'p',
      text: '**Give siblings time.** Not everyone processes at the same speed. The sibling who lives far away and visits twice a year may be seeing your parent at their best and may genuinely not understand what you are seeing every week. Share your intake log. Share the doctor\'s notes. Be patient, but do not let one person\'s denial override the care your parent needs.'
    },
    {
      type: 'h2',
      text: 'What Hospice Resources Are Available in King County?'
    },
    {
      type: 'p',
      text: 'Families in Burien and South King County have access to several excellent hospice providers. Here are some starting points:'
    },
    {
      type: 'ul',
      items: [
        '**Providence Hospice of Seattle** serves all of King County as a not-for-profit, community-based hospice ministry with comprehensive physical, emotional, and spiritual care.',
        '**Continuum Care of King** is a family-owned hospice and palliative care provider serving the entire King County area, including Burien. Reach them at (206) 752-1100.',
        '**CHI Franciscan Hospice and Palliative Care** offers a full range of services from nursing care to physical therapy to home medical equipment.',
        '**Puget Sound Home Health and Hospice** provides exceptional hospice and palliative care throughout King County.',
        'The **Medicare Hospice Compare** tool at medicare.gov lets you search and compare hospice providers by zip code, quality ratings, and services offered.'
      ]
    },
    {
      type: 'p',
      text: 'You can also call the Hospice Foundation of America at 1-800-854-3402 or the National Hospice and Palliative Care Organization helpline at 1-800-658-8898 for general guidance and referrals.'
    },
    {
      type: 'h2',
      text: 'What Should Families Do Right Now?'
    },
    {
      type: 'p',
      text: 'If you are reading this article because someone you love is declining, here is what I would gently encourage you to do this week.'
    },
    {
      type: 'p',
      text: 'First, have a conversation with your parent\'s primary care doctor. Ask specifically whether a hospice evaluation might be appropriate given the current trajectory. Write down the doctor\'s response so you can share it with siblings.'
    },
    {
      type: 'p',
      text: 'Second, talk to one hospice provider. Not to enroll. Just to ask questions. Every hospice provider will send someone to meet with your family at no cost and no obligation. They will explain what services look like, what the timeline might be, and what your parent\'s specific care would include.'
    },
    {
      type: 'p',
      text: 'Third, give yourself permission to grieve. Considering hospice is a grief moment. You are not being dramatic. You are not being weak. You are a daughter who loves her parent and is trying to make the most loving decision available. That is strength, even when it does not feel like it.'
    },
    {
      type: 'p',
      text: 'Watch the full conversation with our local hospice professional in the video above. It covers topics we could not fit into this article, including how to prepare emotionally for the transition, what the first days of hospice care look like, and how to support children and grandchildren through the process.'
    },
    {
      type: 'h2',
      text: 'A Gentle Next Step'
    },
    {
      type: 'p',
      text: 'At Burien Best Care Home, we walk alongside families through every stage of their parent\'s care journey, including the transition to hospice. If your parent is currently in our home, or if you are exploring care options and want to understand how hospice works within a small, intimate adult family home setting, we are here to talk.'
    },
    {
      type: 'p',
      text: '[Schedule a visit to Burien Best Care Home](/contact) to see how we care for residents at every stage. Or [download our Family Guide](/family-guide.pdf) to learn more about what life looks like inside a licensed adult family home in Burien.'
    },
    {
      type: 'p',
      text: 'You do not have to figure this out alone. And you do not have to figure it out today. But when you are ready, we will be here.'
    },
    {
      type: 'h2',
      text: 'About the Author'
    },
    {
      type: 'p',
      text: 'Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She hosts the *Your Best Season* video series on YouTube, where she sits down with local professionals to discuss the topics families navigating senior care need most. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions.'
    },
    {
      type: 'p',
      text: '*Burien Best Care Home is a licensed adult family home in Burien, WA, serving families throughout King County. We accept private pay and Medicaid (COPES). Call us or [visit our contact page](/contact) to start a conversation.*'
    }
  ]
},

{
  slug: "estate-planning-101-wills-trusts-power-of-attorney",
  title: "Estate Planning 101: Wills, Trusts, Pay-on-Death Accounts, and Power of Attorney Explained",
  description: "Breaking down essential estate planning tools families need.",
  date: "2026-06-26",
  author: "Becca Pitts",
  readingTime: "10 min",
  tags: ["Estate Planning", "Legal Planning", "Power of Attorney", "Senior Care"],
  heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&h=900&q=80",
  videoUrl: "https://www.youtube.com/watch?v=Cpd3pZfKj1c",
  body: [
    {
      type: 'p',
      text: 'Here is something I hear from families in Burien and South King County almost every week: "I know we need to get Mom\'s paperwork in order, but I don\'t even know where to start." You are not alone in this. Estate planning sounds like something for wealthy people with attorneys on retainer, but the truth is, every family needs a basic plan in place, and the families who need it most urgently are the ones navigating a parent\'s aging or a transition into care.'
    },
    {
      type: 'p',
      text: 'I recently sat down with a professional who breaks down estate planning into language real families can actually use. Watch the full conversation in the video embedded above. In this article, I am going to walk through the four essential tools every family in Washington State should understand: wills, trusts, pay-on-death accounts, and power of attorney.'
    },
    {
      type: 'p',
      text: 'This is not legal advice. I am not an attorney. But after more than twenty years in senior care, I have watched too many families learn these terms for the first time during a crisis. My goal is to help you learn them now, while you still have time to act.'
    },
    {
      type: 'h2',
      text: 'What Is a Will and Why Does Every Washington Family Need One?'
    },
    {
      type: 'p',
      text: 'A will is a legal document that tells the state of Washington exactly what you want to happen with your assets, your property, and your dependents after you die. Without a will, the state decides for you, following a rigid set of intestacy laws that may not match your wishes at all.'
    },
    {
      type: 'p',
      text: 'In Washington State, a valid will requires three things: the person creating it must be at least 18 years old and of sound mind, and two witnesses must sign the document in the person\'s presence. Washington follows the requirements set out in RCW 11.12.020. The will names an executor (the person who carries out your wishes), specifies how assets should be distributed, and can name guardians for minor children or dependents.'
    },
    {
      type: 'p',
      text: 'Here is why this matters for families considering care placement. If your parent does not have a will and their health is declining, the window to create one is closing. A will requires "sound mind," which means your parent must be mentally competent at the time they sign. If your mother has moderate dementia and you have not yet discussed a will, talk to an attorney this month. Not next quarter. This month.'
    },
    {
      type: 'p',
      text: 'One important Washington-specific detail: our state has its own estate tax, separate from the federal estate tax. For 2026, the Washington estate tax exemption is approximately $3,076,000. Estates valued above that threshold are subject to state tax. Most families will fall below this line, but if your parent owns a home in King County (where property values have climbed significantly), it is worth having a conversation with an estate planning attorney to be sure.'
    },
    {
      type: 'h2',
      text: 'What Is the Difference Between a Will and a Trust?'
    },
    {
      type: 'p',
      text: 'This is one of the most common questions families ask, and the short answer is: a will tells a court what to do, while a trust avoids the court entirely.'
    },
    {
      type: 'p',
      text: 'When someone dies with only a will, their estate typically goes through probate, which is a court-supervised process that can take six months to over a year in Washington State. Probate is public, meaning anyone can see the details of the estate. It costs money in legal and court fees. And it can create delays at a time when family members are grieving and may need access to funds for funeral costs, ongoing bills, or care expenses.'
    },
    {
      type: 'p',
      text: 'A living trust (also called a revocable trust) is a legal container that holds your parent\'s assets during their lifetime and passes them directly to named beneficiaries when they die, without going through probate. The trust is private. It is typically faster. And crucially, a trust can also provide instructions for managing your parent\'s finances if they become incapacitated, not just after they die.'
    },
    {
      type: 'p',
      text: 'That last point is especially important for families dealing with dementia. A properly funded trust means that if your mother can no longer manage her finances, the successor trustee (often an adult child) can step in and pay bills, manage investments, and handle property transactions without going to court for a conservatorship. A conservatorship is expensive, time-consuming, and emotionally draining. A trust set up in advance avoids it.'
    },
    {
      type: 'p',
      text: 'Most estate planning attorneys in Western Washington recommend having both a will and a trust. The trust handles the assets you transfer into it during your lifetime. The will acts as a safety net (called a "pour-over will") to catch anything that was not transferred into the trust before death.'
    },
    {
      type: 'h2',
      text: 'What Are Pay-on-Death Accounts and How Do They Help?'
    },
    {
      type: 'p',
      text: 'Pay-on-death (POD) accounts are one of the simplest and most underused estate planning tools available, and you can set one up at your bank in about fifteen minutes.'
    },
    {
      type: 'p',
      text: 'A POD designation is an agreement between your parent and their bank that names one or more beneficiaries to receive the funds in that account when your parent dies. The beauty of a POD account is that it completely bypasses probate. When the account holder dies, the named beneficiary simply presents a death certificate and identification to the bank, and the funds are released. No court, no waiting, no legal fees.'
    },
    {
      type: 'p',
      text: 'During your parent\'s lifetime, the POD designation changes nothing about how the account works. Your parent keeps full control. They can spend the money, close the account, or change the beneficiary at any time. The named beneficiary has zero rights to the account until the moment of death.'
    },
    {
      type: 'p',
      text: 'You can add a POD designation to checking accounts, savings accounts, money market accounts, and certificates of deposit. The equivalent for investment accounts is called a transfer-on-death (TOD) designation.'
    },
    {
      type: 'p',
      text: 'Here is why POD accounts matter for families in the care transition: when a parent dies, there are immediate expenses. Funeral costs, final utility bills, a last month of rent or mortgage, outstanding medical bills. If all of the parent\'s money is locked in probate, the adult children often end up paying these costs out of pocket and waiting months for reimbursement. A POD account ensures that at least some funds are available immediately.'
    },
    {
      type: 'p',
      text: 'A word of caution: POD designations override whatever your parent\'s will says. If the will says "split everything equally among my three children" but the POD account names only one child, that one child gets the account. Make sure the POD beneficiaries are consistent with the overall estate plan.'
    },
    {
      type: 'h2',
      text: 'What Is Power of Attorney and Why Is It Critical for Aging Parents?'
    },
    {
      type: 'p',
      text: 'Power of attorney is the single most important legal document for families navigating a parent\'s cognitive decline, and it is the one families most often do not have when they need it. I cannot stress this enough. If your parent does not have a power of attorney in place and they are showing signs of cognitive change, this is the most urgent item on your list.'
    },
    {
      type: 'p',
      text: 'A power of attorney (POA) is a legal document that gives a named person (called the "agent" or "attorney-in-fact") the authority to make decisions on your parent\'s behalf. There are two primary types that every family should understand.'
    },
    {
      type: 'h3',
      text: 'Financial Power of Attorney'
    },
    {
      type: 'p',
      text: 'A financial POA gives the agent authority to manage your parent\'s money, property, and financial affairs. This includes paying bills, managing bank accounts, filing taxes, selling property, and handling insurance claims. Without a financial POA, if your parent becomes incapacitated, you may need to go to court for a guardianship or conservatorship to do any of these things, which can cost thousands of dollars and take months.'
    },
    {
      type: 'h3',
      text: 'Durable Power of Attorney for Health Care (DPOA-HC)'
    },
    {
      type: 'p',
      text: 'A healthcare POA (also called a Durable Power of Attorney for Health Care in Washington State) gives the agent authority to make medical decisions when your parent cannot make them for themselves. This includes decisions about treatment options, medications, surgery, and end-of-life care.'
    },
    {
      type: 'p',
      text: 'Here is a critical Washington State detail that many families miss. Under the Uniform Power of Attorney Act (RCW 11.125), powers of attorney in Washington are **not durable by default**. "Durable" means the document remains in effect even after the person becomes incapacitated. If the POA document does not include specific durability language as required by RCW 11.125.040, it will terminate the moment your parent loses capacity, which is exactly the moment you need it most.'
    },
    {
      type: 'p',
      text: 'To execute a valid Durable Power of Attorney for Health Care in Washington, your parent must sign the document in the presence of either two witnesses or a notary public. The person named as healthcare agent must be at least 18 years old and mentally competent. Importantly, your parent\'s care provider (including home care providers or staff at an adult family home or long-term care facility) cannot serve as the healthcare agent.'
    },
    {
      type: 'p',
      text: 'Like the will, a power of attorney requires mental competency at the time of signing. If your parent has moderate to advanced dementia, the window may already be closing or closed. This is not something to put off.'
    },
    {
      type: 'h2',
      text: 'What Happens If My Parent Has No Estate Plan?'
    },
    {
      type: 'p',
      text: 'When a parent becomes incapacitated with no power of attorney and no trust, the family\'s only option is often guardianship and/or conservatorship through King County Superior Court. This process involves filing a petition, hiring an attorney, attending hearings, and often paying for a court-appointed guardian ad litem to evaluate the situation. The costs typically range from $3,000 to $10,000 or more, and the process can take months.'
    },
    {
      type: 'p',
      text: 'During that time, nobody has legal authority to pay your parent\'s bills, manage their care, make medical decisions, or access their bank accounts. I have seen families in our Burien community unable to pay a parent\'s rent or mortgage, unable to authorize medical procedures, and unable to move a parent into an adult family home because no one had legal authority to sign the admission agreement.'
    },
    {
      type: 'p',
      text: 'When a parent dies without a will, Washington State\'s intestacy laws determine who inherits. Generally, the surviving spouse receives the community property and a share of separate property, with the remainder going to children. But the specifics can be complicated, especially in blended families, and the process goes through probate regardless.'
    },
    {
      type: 'p',
      text: 'All of this is avoidable with basic planning done while your parent is still competent.'
    },
    {
      type: 'h2',
      text: 'Why Does Estate Planning Matter for Families Considering Care Placement?'
    },
    {
      type: 'p',
      text: 'Families exploring adult family homes, assisted living, or memory care for a parent need these documents in place before the transition, not after. Here is why.'
    },
    {
      type: 'ul',
      items: [
        '**Admission agreements** require a legal representative if the resident cannot sign for themselves. Without a POA, the family may not be able to complete the placement.',
        '**Medicaid applications** (including Washington\'s COPES waiver) require detailed financial information and the ability to manage the applicant\'s assets. A financial POA makes this possible.',
        '**Medical decisions** during the care transition, from medication changes to therapy plans to end-of-life preferences, require someone with legal authority to consent.',
        '**Paying for care** may involve selling a parent\'s home, liquidating accounts, or accessing insurance benefits. Without proper legal documents, these financial moves are blocked.'
      ]
    },
    {
      type: 'p',
      text: 'At Burien Best Care Home, we encourage every family to have at least a durable financial POA, a durable healthcare POA, and a will (or trust) in place before beginning the care placement process. It does not have to be complicated or expensive. Many elder law attorneys in King County offer basic estate planning packages for $1,500 to $3,000.'
    },
    {
      type: 'h2',
      text: 'What Steps Should Families Take This Week?'
    },
    {
      type: 'p',
      text: 'If this article has made you realize that your family\'s paperwork is not in order, here is a simple action plan.'
    },
    {
      type: 'p',
      text: '**This week:** Have a conversation with your parent (and your siblings) about what legal documents are already in place. Ask: Do you have a will? Is there a trust? Who is named on your power of attorney? Where are these documents stored? You may be surprised by the answers.'
    },
    {
      type: 'p',
      text: '**This month:** Schedule a consultation with an elder law attorney in King County. The Washington State Bar Association offers a lawyer referral service, and organizations like the National Academy of Elder Law Attorneys (NAELA) maintain a directory of attorneys who specialize in exactly these issues. Many offer free or low-cost initial consultations.'
    },
    {
      type: 'p',
      text: '**Today:** If your parent has bank accounts without POD designations, that is a fifteen-minute errand at the bank that protects the family from months of probate delays. It is the smallest step with one of the biggest payoffs.'
    },
    {
      type: 'p',
      text: 'Watch the full conversation in the video above for a deeper walkthrough of each tool, including examples of how each one works in practice and common mistakes families make.'
    },
    {
      type: 'h2',
      text: 'A Gentle Next Step'
    },
    {
      type: 'p',
      text: 'At Burien Best Care Home, we see families at one of the most complex intersections of their lives: navigating a parent\'s care needs, legal planning, and financial decisions all at once. We are not attorneys and we do not provide legal advice, but we understand the landscape, and we are happy to share what we have learned from walking alongside hundreds of families through these transitions.'
    },
    {
      type: 'p',
      text: '[Schedule a visit to Burien Best Care Home](/contact) to see our home in Burien and talk about your family\'s situation. Or [download our Family Guide](/family-guide.pdf) to learn more about what the care placement process looks like from start to finish, including which legal documents you will need along the way.'
    },
    {
      type: 'p',
      text: 'Getting these documents in order is one of the most loving things you can do for your parent and for yourself. It is not about money. It is about making sure that when the time comes, you can focus on being present with your parent instead of fighting paperwork in a courtroom.'
    },
    {
      type: 'h2',
      text: 'About the Author'
    },
    {
      type: 'p',
      text: 'Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She hosts the *Your Best Season* video series on YouTube, where she sits down with local professionals to discuss the topics families navigating senior care need most. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions.'
    },
    {
      type: 'p',
      text: '*Burien Best Care Home is a licensed adult family home in Burien, WA, serving families throughout King County. We accept private pay and Medicaid (COPES). Call us or [visit our contact page](/contact) to start a conversation.*'
    }
  ]
},

{
  slug: "home-care-vs-home-health-difference-explained",
  title: "Home Care vs Home Health: What's the Difference and What You Need to Know",
  description: "Explaining the crucial difference between home care services and home health services.",
  date: "2026-06-30",
  author: "Becca Pitts",
  readingTime: "7 min",
  tags: ["Home Care", "Home Health", "Senior Care Options", "Caregiving"],
  heroImage: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1600&h=900&q=80",
  videoUrl: "https://www.youtube.com/watch?v=e8yVyO2d8Q0",
  body: [
    {
      type: 'p',
      text: 'If you are researching care options for a parent in Burien, SeaTac, Des Moines, or anywhere in South King County, you have probably encountered two terms that sound almost identical but mean very different things: home care and home health. The confusion between these two is one of the most common sources of frustration I hear from families, and it matters because the wrong assumption can cost you thousands of dollars or leave your parent without the care they actually need.'
    },
    {
      type: 'p',
      text: 'I recently had a conversation about this exact topic with a professional who lives and works in this space every day. Watch the full discussion in the video embedded above. Below, I am going to break down the difference in plain language, explain what insurance covers (and what it does not), and help you figure out which type of care your parent may need right now.'
    },
    {
      type: 'h2',
      text: 'What Is Home Health Care?'
    },
    {
      type: 'p',
      text: 'Home health care is **skilled medical care** delivered in your parent\'s home by licensed professionals. Think of it as bringing the clinic to the living room. Home health services are ordered by a doctor and provided by registered nurses, physical therapists, occupational therapists, speech-language pathologists, and medical social workers.'
    },
    {
      type: 'p',
      text: 'The types of services that fall under home health include:'
    },
    {
      type: 'ul',
      items: [
        'Wound care and dressing changes',
        'IV therapy and injections',
        'Physical, occupational, and speech therapy',
        'Monitoring serious health conditions and vital signs',
        'Pain management',
        'Medication management and education',
        'Post-surgical recovery support',
        'Chronic disease management (diabetes, heart failure, COPD)'
      ]
    },
    {
      type: 'p',
      text: 'Home health care is typically short-term and goal-oriented. Your parent receives it after a hospitalization, surgery, or a change in medical condition, and it continues until the medical goals are met or the doctor determines it is no longer needed. In Washington State, home health agencies must be licensed by the Department of Health, and agencies seeking Medicare certification must also receive approval from the state\'s Certificate of Need program.'
    },
    {
      type: 'h2',
      text: 'What Is Home Care?'
    },
    {
      type: 'p',
      text: 'Home care (sometimes called personal care, companion care, or non-medical home care) is **non-medical assistance** with daily living activities. Home care workers help with the tasks that your parent needs support with every day but that do not require a nurse or therapist.'
    },
    {
      type: 'p',
      text: 'Home care services typically include:'
    },
    {
      type: 'ul',
      items: [
        'Bathing, grooming, and personal hygiene assistance',
        'Help with dressing',
        'Meal preparation and feeding assistance',
        'Light housekeeping and laundry',
        'Medication reminders (not administration)',
        'Companionship and conversation',
        'Transportation to appointments or errands',
        'Help with mobility and transfers',
        'Supervision for safety, especially for those with cognitive decline'
      ]
    },
    {
      type: 'p',
      text: 'Home care is ongoing and can continue for months or years, for as long as your parent needs support. In Washington State, home care agencies are also licensed by the Department of Health, but with different requirements than home health agencies. Home care agencies are staffed by trained caregivers and certified nursing assistants rather than nurses and therapists.'
    },
    {
      type: 'h2',
      text: 'How Does Insurance Coverage Differ Between the Two?'
    },
    {
      type: 'p',
      text: 'This is where the distinction really matters for your family\'s budget.'
    },
    {
      type: 'p',
      text: '**Home health care is covered by Medicare.** If your parent\'s doctor orders home health services and your parent meets the eligibility requirements, Medicare Part A covers the cost at $0 to the family. To qualify, your parent must be considered "homebound" (meaning leaving home requires considerable effort) and must need skilled nursing care or therapy on a part-time or intermittent basis. Medicare also covers 80% of the cost of any durable medical equipment, like walkers or hospital beds, prescribed during home health care.'
    },
    {
      type: 'p',
      text: '**Home care is generally NOT covered by Medicare.** Medicare does not pay for custodial care, which includes help with bathing, dressing, meals, housekeeping, and companionship. This catches many families off guard. They assume that because their parent has Medicare, the aide who comes to help Mom shower three times a week is covered. In most cases, it is not.'
    },
    {
      type: 'p',
      text: 'So how do families pay for home care? There are several paths:'
    },
    {
      type: 'ul',
      items: [
        '**Private pay:** Out-of-pocket costs for home care in King County typically range from $35 to $50 per hour, depending on the agency and level of care.',
        '**Medicaid (COPES waiver):** Washington State\'s Community Options Program Entry System covers in-home personal care for eligible individuals. Eligibility is based on both functional need and financial criteria. Contact DSHS or Community Living Connections at 1-844-348-5464 for an assessment.',
        '**Long-term care insurance:** If your parent purchased a long-term care policy, it may cover home care services. Check the policy details carefully.',
        '**Veterans benefits:** The VA\'s Aid and Attendance benefit can help cover home care costs for qualifying veterans and surviving spouses.',
        '**Some Medicare Advantage plans** may offer limited home care benefits, such as a temporary aide or meal delivery, though these supplemental benefits vary by plan.'
      ]
    },
    {
      type: 'h2',
      text: 'Can My Parent Receive Both Home Care and Home Health at the Same Time?'
    },
    {
      type: 'p',
      text: 'Yes, and many families do. A common scenario looks like this: your mother comes home from a hip replacement surgery at Highline Medical Center. Her doctor orders home health care, which includes a physical therapist who visits three times a week and a nurse who checks the surgical site. Medicare covers all of it.'
    },
    {
      type: 'p',
      text: 'But Mom also needs help getting dressed in the morning, someone to prepare meals, and a hand getting in and out of the shower safely. The physical therapist is there for 45 minutes. The nurse visits for 30 minutes. The other 23 hours of the day, Mom is on her own. That is where home care fills the gap. A home care aide comes for four hours each morning to help with personal care, breakfast, and light housekeeping.'
    },
    {
      type: 'p',
      text: 'The home health portion is covered by Medicare. The home care portion is paid privately or through Medicaid. Two different services, two different payment structures, working together to keep your parent safe and recovering at home.'
    },
    {
      type: 'h2',
      text: 'How Do I Know Which Type of Care My Parent Needs?'
    },
    {
      type: 'p',
      text: 'Start with this simple question: Does my parent need medical treatment or daily living support?'
    },
    {
      type: 'p',
      text: 'If your parent needs wound care after surgery, physical therapy to regain strength, monitoring of a chronic condition, or skilled nursing for a medical issue, they need **home health care**. Talk to their doctor about a referral.'
    },
    {
      type: 'p',
      text: 'If your parent needs help getting through the day safely, including bathing, cooking, cleaning, medication reminders, or simply having someone present so they are not alone and at risk of falling, they need **home care**. Contact a licensed home care agency in King County to discuss a care plan.'
    },
    {
      type: 'p',
      text: 'If your parent needs both, which is common during recovery periods and for those with progressive conditions like dementia, they may benefit from both services working in coordination.'
    },
    {
      type: 'h2',
      text: 'When Is Home Care No Longer Enough?'
    },
    {
      type: 'p',
      text: 'This is the question families often arrive at after months or years of patching together in-home support. Home care is wonderful when the needs are moderate and predictable. But there comes a point for many families when the math stops working.'
    },
    {
      type: 'p',
      text: 'Here are the signs I see most often in families who eventually transition a parent to an adult family home:'
    },
    {
      type: 'ul',
      items: [
        'The parent needs help during nighttime hours, and hiring overnight care pushes costs above $15,000 to $20,000 per month',
        'The parent has dementia and is wandering, which creates safety risks that a part-time caregiver cannot address',
        'The family is coordinating multiple caregivers across multiple shifts, and gaps in coverage are causing problems',
        'The parent is increasingly isolated, and the home care aide is their only source of social interaction',
        'The primary family caregiver is burned out, and adding more home care hours is not solving the underlying exhaustion',
        'The parent\'s care needs have escalated to the point where they need someone available around the clock'
      ]
    },
    {
      type: 'p',
      text: 'When home care hours approach the cost of full-time residential care, a licensed adult family home becomes worth exploring. In Washington State, adult family homes are licensed to serve up to eight residents, with staff-to-resident ratios that provide continuous support. At Burien Best Care Home, our 1:3 caregiver-to-resident ratio means your parent has consistent, trained caregivers who know them by name, know their routines, and know the difference between a good day and a day that needs extra patience.'
    },
    {
      type: 'p',
      text: 'The transition from home care to an adult family home is not a step down. For many families, it is a step into sustainability. It is the moment when you stop managing a patchwork of aides, schedules, and backup plans, and start having your parent cared for inside a community that is built for exactly this stage of life.'
    },
    {
      type: 'h2',
      text: 'How Are Home Care Agencies Regulated in Washington State?'
    },
    {
      type: 'p',
      text: 'Both home care and home health agencies in Washington are licensed and regulated by the Washington State Department of Health. However, the licensing requirements differ significantly, which is worth understanding when you are choosing a provider.'
    },
    {
      type: 'p',
      text: 'Home health agencies must have a clinical director who is a registered nurse or physician. They are required to conduct comprehensive assessments of all patients and participate in the federal OASIS (Outcome Assessment Information Set) reporting system. To receive Medicare certification, they must also receive approval from the state\'s Certificate of Need program.'
    },
    {
      type: 'p',
      text: 'Home care agencies are required to have a supervisor of direct care services and must conduct criminal background checks on all staff. They must maintain commercial general liability insurance and pass a state survey process. While the clinical requirements are less intensive (because the services are non-medical), the oversight is still meaningful.'
    },
    {
      type: 'p',
      text: 'When choosing either type of provider in the Burien or King County area, ask for their license number, ask about staff training and turnover, ask how they handle emergencies, and ask for references from current clients. A good agency will welcome these questions.'
    },
    {
      type: 'h2',
      text: 'What Should Families Do Right Now?'
    },
    {
      type: 'p',
      text: 'If you are trying to figure out the right care setup for your parent, here are three steps you can take this week.'
    },
    {
      type: 'p',
      text: '**First, clarify what your parent actually needs right now.** Make a list: Are the needs medical (wound care, therapy, medication management) or daily living (bathing, meals, companionship, safety supervision)? Or both? This list will guide every conversation you have with providers.'
    },
    {
      type: 'p',
      text: '**Second, call your parent\'s doctor.** If your parent has medical needs that could be addressed at home, ask about a referral for home health services. This is often the fastest path to getting Medicare-covered skilled care started.'
    },
    {
      type: 'p',
      text: '**Third, if daily living support is the primary need, contact two or three home care agencies in King County for an in-home assessment.** Most agencies offer free assessments where they evaluate your parent\'s needs and propose a care plan with hours and costs. This gives you real numbers to work with.'
    },
    {
      type: 'p',
      text: 'And if you are already at the point where home care hours are stretching your budget or your parent\'s needs have outgrown what an in-home aide can provide, it may be time to visit a few adult family homes in the area. A visit costs nothing and commits you to nothing. It just gives you a picture of what the next chapter could look like.'
    },
    {
      type: 'p',
      text: 'Watch the full conversation in the video above for additional details on how these two types of care work together and how families in our community are navigating these decisions.'
    },
    {
      type: 'h2',
      text: 'A Gentle Next Step'
    },
    {
      type: 'p',
      text: 'At Burien Best Care Home, we welcome families at every stage of the decision-making process. Some families visit us when they are just beginning to explore options. Others come when home care is no longer meeting their parent\'s needs and they need a more sustainable solution. Wherever you are in the journey, we are happy to talk.'
    },
    {
      type: 'p',
      text: '[Schedule a visit to Burien Best Care Home](/contact) to see our home, meet our caregivers, and ask any questions you have about the care options available to your family. Or [download our Family Guide](/family-guide.pdf) for a comprehensive overview of what life looks like inside a licensed adult family home.'
    },
    {
      type: 'p',
      text: 'You are doing the right thing by researching your options. The fact that you are reading this article means your parent is lucky to have you in their corner.'
    },
    {
      type: 'h2',
      text: 'About the Author'
    },
    {
      type: 'p',
      text: 'Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She hosts the *Your Best Season* video series on YouTube, where she sits down with local professionals to discuss the topics families navigating senior care need most. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions.'
    },
    {
      type: 'p',
      text: '*Burien Best Care Home is a licensed adult family home in Burien, WA, serving families throughout King County. We accept private pay and Medicaid (COPES). Call us or [visit our contact page](/contact) to start a conversation.*'
    }
  ]
},

{
  "slug": "senior-home-maintenance-aging-in-place-safely",
  "title": "Senior Home Maintenance: Keeping Your Parent's Home Safe and Livable",
  "description": "Becca talks with Para Home Services about home maintenance for seniors aging in place. Learn which safety modifications matter most, common hazards to address, and how to know when staying home is no longer the safest option.",
  "date": "2026-07-03",
  "author": "Becca Pitts",
  "readingTime": "7 min",
  "tags": ["Home Maintenance", "Aging in Place", "Senior Safety", "Caregiving"],
  "heroImage": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&h=900&q=80",
  "videoUrl": "https://www.youtube.com/watch?v=B4XEkrOmvGk",
  "body": [
    {
      "type": "p",
      "text": "Your parent built a life in that house. Maybe thirty years of birthdays, holidays, and ordinary Tuesday evenings. The garden they planted. The kitchen where they taught you to cook. The front porch where they waved goodbye on your first day of school. When someone asks, \"Why does your dad want to stay in that house?\" the answer is not about square footage. It is about identity."
    },
    {
      "type": "p",
      "text": "But the house your parent loved at sixty is not always the house that keeps them safe at eighty. And if you are the adult daughter or son quietly noticing things on your weekend visits, things like a wobbly handrail, a bathroom with nothing to grab onto, or a front walkway that turns slippery every November, you are already doing the most important work: paying attention."
    },
    {
      "type": "p",
      "text": "I recently sat down with the team at Para Home Services for my Your Best Season series to talk about what senior home maintenance really looks like, and what families in Burien and South King County should be thinking about. Watch the full conversation in the embedded video above. Below, I want to walk you through what we covered and what I have learned from years of working with families navigating this exact question."
    },
    {
      "type": "h2",
      "text": "Why Does Home Maintenance Matter More as Parents Age?"
    },
    {
      "type": "p",
      "text": "Here is the number that should get every family's attention: over 14 million older adults report falling every year in the United States. Falls are the leading cause of injury for adults 65 and older, and 55 percent of those falls happen inside the home. Another 23 percent happen just outside, near the house. That means nearly four out of five fall injuries happen in or around the place your parent calls home."
    },
    {
      "type": "p",
      "text": "The fall death rate among older adults has been climbing steadily. In 2024, over 43,000 older adults died from preventable falls, and nearly 3.85 million were treated in emergency departments. These are not abstract statistics. They are somebody's mom slipping on a wet bathroom floor. Somebody's dad tripping over a threshold he has stepped over ten thousand times."
    },
    {
      "type": "p",
      "text": "Home maintenance for seniors is not just about keeping the gutters clean. It is about making sure the physical environment keeps pace with a person's changing needs. The things that were fine when your parent was sixty-five, a steep staircase, a bathtub with no grab bar, dim hallway lighting, can become genuine hazards by seventy-five or eighty."
    },
    {
      "type": "h2",
      "text": "What Are the Most Common Home Safety Hazards for Seniors?"
    },
    {
      "type": "p",
      "text": "When I talk with families in Burien, Tukwila, Des Moines, and SeaTac, the same hazards come up again and again. Most of them are fixable. Some of them are cheap to fix. All of them matter."
    },
    {
      "type": "h3",
      "text": "Bathrooms"
    },
    {
      "type": "p",
      "text": "The bathroom is the most dangerous room in the house for an older adult. Wet floors, hard surfaces, tight spaces, and the physical demands of getting in and out of a tub or shower create a perfect recipe for a fall. If your parent's bathroom has no grab bars, no non-slip mat, and no shower bench, that is where to start."
    },
    {
      "type": "h3",
      "text": "Lighting"
    },
    {
      "type": "p",
      "text": "Poor lighting is one of the simplest hazards to fix and one of the most commonly overlooked. Older eyes need significantly more light to see clearly, especially at night. Motion-sensor nightlights in hallways and bathrooms, brighter bulbs in stairways and entryways, and under-cabinet lighting in the kitchen can prevent the kind of misstep that leads to a broken hip."
    },
    {
      "type": "h3",
      "text": "Flooring and pathways"
    },
    {
      "type": "p",
      "text": "Loose area rugs are a classic tripping hazard. So are power cords stretched across walkways, clutter in hallways, and thresholds between rooms where flooring types change. Creating wide, clear walking paths through the home is one of the most effective safety measures you can take."
    },
    {
      "type": "h3",
      "text": "Stairs and entryways"
    },
    {
      "type": "p",
      "text": "Here in Burien and the greater South King County area, many older homes have front steps, uneven walkways, and split-level layouts. A wobbly handrail, a missing railing on one side, or exterior steps without non-slip treads can be dangerous, especially in our rainy Pacific Northwest winters. If your parent's front entry gets slippery from November through March, that is a problem worth solving before the next fall."
    },
    {
      "type": "h2",
      "text": "What Home Modifications Help Seniors Stay Safe?"
    },
    {
      "type": "p",
      "text": "The good news is that many home safety modifications are straightforward and affordable. Before spending money, though, consider walking through the home with an occupational therapist or a Certified Aging-in-Place Specialist (CAPS). These professionals are trained to identify hazards specific to your parent's physical condition and home layout. The King County Senior Hub in Burien can connect you with local resources."
    },
    {
      "type": "p",
      "text": "Here are the modifications that make the biggest difference:"
    },
    {
      "type": "ul",
      "items": [
        "**Grab bars** in the bathroom near the toilet and inside the shower or tub. Professional installation is recommended so they are anchored into studs.",
        "**Non-slip flooring and mats** in the bathroom, kitchen, and any area that gets wet.",
        "**Brighter lighting** throughout the home, with motion-sensor nightlights in hallways, bathrooms, and stairways.",
        "**Handrails on both sides** of all stairways, firmly anchored and at the right height.",
        "**Lever-style door handles** and faucet handles that are easier to grip than round knobs.",
        "**A walk-in shower or shower bench** to replace a high-sided bathtub.",
        "**Removal of area rugs** and loose floor coverings.",
        "**A raised toilet seat** with armrests for easier, safer transfers.",
        "**Non-slip treads** on exterior steps and a clear, well-lit path to the front door."
      ]
    },
    {
      "type": "p",
      "text": "One thing I appreciate about the conversation with Para Home Services is how practical it was. These are not major renovations. Most of them can be completed in a weekend. And every one of them reduces the risk of a fall that could change your parent's life overnight."
    },
    {
      "type": "h2",
      "text": "How Do You Know When Home Modifications Are Not Enough?"
    },
    {
      "type": "p",
      "text": "This is the harder question. And it is the one that families sit with for months, sometimes years, before they are ready to ask it out loud."
    },
    {
      "type": "p",
      "text": "Home modifications can extend the time a parent lives safely and comfortably in their own home. But there are situations where the house itself, no matter how many grab bars you install, cannot provide the level of care and supervision a person needs."
    },
    {
      "type": "p",
      "text": "You may be reaching that point if:"
    },
    {
      "type": "ul",
      "items": [
        "Your parent has fallen more than once in the past six months, even with safety modifications in place.",
        "They are leaving the stove on, forgetting to lock the door, or wandering outside at night.",
        "Basic daily activities like bathing, dressing, and meal preparation have become consistently difficult or unsafe.",
        "Their nutrition is declining because they are not eating regularly or cannot prepare meals.",
        "You or other family members are physically exhausted from providing care and the situation feels unsustainable.",
        "A doctor or occupational therapist has recommended a higher level of support than home care can provide."
      ]
    },
    {
      "type": "p",
      "text": "When a family reaches this point, it does not mean they failed. It means the situation has changed, and the most loving thing they can do is make sure their parent gets the right level of care."
    },
    {
      "type": "h2",
      "text": "What Makes an Adult Family Home Different from Aging in Place Alone?"
    },
    {
      "type": "p",
      "text": "At Burien Best Care Home, we care for up to eight residents with a staff-to-resident ratio that means someone is always nearby. Not hovering, but present. Ready to help with bathing, medication management, mobility, and meals. Our home is designed from the ground up for safety: wide doorways, accessible bathrooms, non-slip surfaces, and the kind of consistent, calm routine that reduces fall risk and supports cognitive health."
    },
    {
      "type": "p",
      "text": "Washington State adult family homes are licensed and regulated by the Department of Social and Health Services. The smaller setting, compared to a large assisted living facility, means more personalized attention. Studies show caregivers in adult family homes can spend up to 30 percent more time with each individual resident."
    },
    {
      "type": "p",
      "text": "For many families in Burien and South King County, an adult family home is not the last resort. It is the step that finally lets everyone breathe again. Your parent gets the daily support they need. You get to go back to being their daughter or son, not their full-time safety net."
    },
    {
      "type": "h2",
      "text": "Where Do Burien and South King County Families Start?"
    },
    {
      "type": "p",
      "text": "If your parent is still living at home and you want to make that home safer, start with a professional assessment. The City of Burien's Senior Wellness Resources and the King County Senior Hub can point you toward local occupational therapists, home safety evaluators, and service providers like Para Home Services who understand the specific needs of older adults."
    },
    {
      "type": "p",
      "text": "If you are starting to wonder whether staying home is still the right fit, that is a conversation worth having before a crisis forces the decision. Tour a few care options. Talk to providers. Ask questions. The families who plan ahead almost always have a smoother transition than the families who wait until a fall or a hospital stay forces the move."
    },
    {
      "type": "p",
      "text": "Watch the full conversation with Para Home Services in the video embedded above for more practical advice on keeping your parent's home safe and livable."
    },
    {
      "type": "p",
      "text": "**Ready to explore whether residential care is the right next step?** [Schedule a Visit](/contact) to tour Burien Best Care Home, or [Download Our Family Guide](/family-guide.pdf) for a clear, honest overview of what adult family home care looks like day to day."
    }
  ]
},

{
  "slug": "prepaid-cremation-planning-ahead-for-families",
  "title": "Planning Ahead: What Families Need to Know About Prepaid Cremation",
  "description": "Conversation with The Neptune Society about prepaid cremation and end-of-life planning. A gentle, practical guide for families navigating one of the most important conversations they will ever have.",
  "date": "2026-07-07",
  "author": "Becca Pitts",
  "readingTime": "7 min",
  "tags": ["End of Life Planning", "Cremation", "Family Planning", "Senior Care"],
  "heroImage": "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?auto=format&fit=crop&w=1600&h=900&q=80",
  "videoUrl": "https://www.youtube.com/watch?v=hTWmeg5KIgg",
  "body": [
    {
      "type": "p",
      "text": "Nobody wants to have this conversation. Not at the kitchen table on a Sunday afternoon, not during the drive home from Thanksgiving, not during a quiet moment on the back porch. It feels too heavy, too soon, too final. And yet, every family I have worked with over the past twenty years has told me the same thing: they wish they had talked about it sooner."
    },
    {
      "type": "p",
      "text": "End-of-life planning is not about giving up. It is about giving your family a gift: the gift of knowing what you want, the gift of removing the guesswork from a moment when grief makes everything harder, and the gift of one fewer financial burden during the most emotionally raw days of their lives."
    },
    {
      "type": "p",
      "text": "I recently sat down with a representative from The Neptune Society for my Your Best Season series to talk about prepaid cremation, what it means, how it works, and why so many families are choosing to plan ahead. Watch the full conversation in the embedded video above. Below, I want to share what I have learned and what Washington State families should know."
    },
    {
      "type": "h2",
      "text": "What Is Prepaid Cremation, and How Does It Work?"
    },
    {
      "type": "p",
      "text": "Prepaid cremation is exactly what it sounds like: making and paying for your cremation arrangements before they are needed. You sit down with a provider, discuss your wishes, choose your services, sign the paperwork, and pay either in a lump sum or through a payment plan. When the time comes, everything is already in place. Your family makes a single phone call, and the plan you created takes over."
    },
    {
      "type": "p",
      "text": "A pre-need cremation plan typically covers the essential services: transportation, the cremation process itself, a basic container or urn, the necessary permits and documentation, and the return of the cremated remains to your family. Some plans include additional options like a memorial service, a specific urn, or scattering at sea."
    },
    {
      "type": "p",
      "text": "The most important thing to understand is that a prepaid plan locks in today's prices. Cremation costs have been rising 3 to 5 percent annually, which means a plan purchased today could save your family hundreds of dollars compared to making arrangements at the time of need."
    },
    {
      "type": "h2",
      "text": "How Much Does Cremation Cost in Washington State?"
    },
    {
      "type": "p",
      "text": "Costs vary depending on the provider and the level of service, but here is a realistic picture for Washington State families in 2026:"
    },
    {
      "type": "ul",
      "items": [
        "**Direct cremation** (the most affordable option, with no formal viewing or ceremony) averages between $1,458 and $2,406 statewide. Some providers offer plans starting under $1,000; others charge over $3,000.",
        "**Full-service cremation** with a viewing, ceremony, and all components can reach $5,300 or more.",
        "**Traditional burial** costs significantly more, often six to eight times the cost of a basic cremation plan."
      ]
    },
    {
      "type": "p",
      "text": "These numbers matter because end-of-life expenses are one of those costs that families rarely budget for. When arrangements have to be made in the immediate aftermath of a death, people are emotionally vulnerable and often end up spending more than they would have with time to plan."
    },
    {
      "type": "h2",
      "text": "Why Are Families Choosing to Plan Ahead?"
    },
    {
      "type": "p",
      "text": "In my experience working with senior care families in Burien and South King County, the families who plan ahead do it for three reasons."
    },
    {
      "type": "p",
      "text": "**The first is financial clarity.** Prepaying removes the financial burden from the family during a time of grief. There is no scrambling to find funds, no credit card charges that linger, no disagreements between siblings about how much to spend. The cost is settled. The decision is made."
    },
    {
      "type": "p",
      "text": "**The second is emotional relief.** When a parent has already documented their wishes, the adult children do not have to guess. They do not have to argue about what Mom would have wanted. They do not have to carry the weight of making permanent decisions while they are barely functioning. The plan becomes the parent's final act of care for their family."
    },
    {
      "type": "p",
      "text": "**The third is practical protection.** In Washington State, preneed cremation contracts come with strong consumer protections. Funds paid under a preneed contract must be held in a regulated trust account, which means the money is protected from the provider's creditors or bankruptcy. Your family's money is safe."
    },
    {
      "type": "h2",
      "text": "What Should You Look for in a Prepaid Cremation Provider?"
    },
    {
      "type": "p",
      "text": "Not all prepaid plans are created equal, and this is an area where doing your homework matters. Here is what I would encourage any family to ask before signing:"
    },
    {
      "type": "ul",
      "items": [
        "**Is the price guaranteed?** Make sure the plan locks in the total cost and that your family will not owe anything additional at the time of need.",
        "**Where are the funds held?** Washington State law requires preneed funds to be placed in a trust account. Ask for documentation.",
        "**What exactly is included?** Get a written, itemized list of every service covered by the plan. Ask specifically about transportation, permits, and the container.",
        "**What happens if you move?** Some providers have locations in multiple states or partner networks. Ask how the plan transfers if your parent relocates.",
        "**Is the plan transferable or refundable?** Life circumstances change. Understand the cancellation and refund terms before you commit.",
        "**What is the provider's reputation?** Check reviews, ask for references, and look into any complaints filed with the Washington State Attorney General's office."
      ]
    },
    {
      "type": "p",
      "text": "Taking the time to compare providers and read the fine print is an act of care. You are protecting your parent and your family from unexpected costs or complications during an already difficult time."
    },
    {
      "type": "h2",
      "text": "How Does End-of-Life Planning Fit into the Bigger Picture of Senior Care?"
    },
    {
      "type": "p",
      "text": "At Burien Best Care Home, we see end-of-life planning as one part of a much larger conversation about caring well for aging parents. It sits alongside decisions about housing, daily care, finances, legal documents, and medical directives. None of these conversations are easy. All of them are important."
    },
    {
      "type": "p",
      "text": "Here is what I tell families: you do not have to do everything at once. But if you can start one conversation this month, make it this one. Sit with your parent. Ask them what they want. Write it down. You do not need to have every answer. You just need to start."
    },
    {
      "type": "p",
      "text": "A simple checklist for getting started:"
    },
    {
      "type": "ul",
      "items": [
        "Talk with your parent about their wishes for final arrangements. Cremation, burial, memorial service, scattering, or something else entirely.",
        "Identify whether they have any existing plans, insurance policies, or arrangements already in place.",
        "Research two or three local providers and request written price quotes.",
        "Review the plan details together as a family so everyone is on the same page.",
        "Keep all documents in a secure, accessible location and make sure at least two family members know where to find them.",
        "Consider connecting with an elder law attorney to review advance directives and power of attorney documents at the same time."
      ]
    },
    {
      "type": "h2",
      "text": "What If Your Parent Does Not Want to Talk About It?"
    },
    {
      "type": "p",
      "text": "This is common. Deeply common. Many parents resist these conversations because they feel like an admission of mortality, and that is a hard threshold to cross. Some parents worry about being a burden. Others simply do not want to think about it."
    },
    {
      "type": "p",
      "text": "What I have seen work, over and over, is reframing the conversation. Instead of, \"We need to talk about what happens when you die,\" try, \"I want to make sure we honor exactly what you want, and I do not want to have to guess.\" Instead of, \"Let's plan your cremation,\" try, \"I have been thinking about making things easier for our family in the future. Can we talk about that?\""
    },
    {
      "type": "p",
      "text": "Sometimes the door opens through a shared experience. A friend's parent passing. A news story. A visit from a hospice chaplain. When the door opens, walk through it gently."
    },
    {
      "type": "p",
      "text": "For Burien and South King County families who are navigating senior care decisions alongside end-of-life planning, know that these conversations do get easier with practice. And every conversation you have now is one less decision your family will have to make in a moment of grief."
    },
    {
      "type": "p",
      "text": "Watch the full conversation with The Neptune Society in the video embedded above for a warm, honest look at how prepaid cremation works and why it matters."
    },
    {
      "type": "p",
      "text": "**Thinking about the bigger picture of caring for your parent?** [Schedule a Visit](/contact) to see how Burien Best Care Home supports families through every stage of senior care, or [Download Our Family Guide](/family-guide.pdf) to start the conversation with your family today."
    }
  ]
},

{
  "slug": "reverse-mortgage-qa-seniors-families-guide",
  "title": "Reverse Mortgage Q&A: What Seniors and Families Actually Need to Know",
  "description": "Straight answers about reverse mortgages for seniors and their families. How they work, who they are for, common misconceptions, and how families use home equity to help pay for care.",
  "date": "2026-07-10",
  "author": "Becca Pitts",
  "readingTime": "10 min",
  "tags": ["Reverse Mortgage", "Senior Finance", "Home Equity", "Family Planning"],
  "heroImage": "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1600&h=900&q=80",
  "videoUrl": "https://www.youtube.com/watch?v=te1kDf5fflo",
  "body": [
    {
      "type": "p",
      "text": "If you mention the words \"reverse mortgage\" at a family dinner, you will get one of two reactions. Either someone will lean in with genuine curiosity, or someone will shake their head and say, \"Those are a scam.\" Very rarely is there anything in between."
    },
    {
      "type": "p",
      "text": "The truth is more nuanced. Reverse mortgages are not a miracle product, and they are not a trap. They are a financial tool with specific rules, real protections, and legitimate uses, especially for families trying to figure out how to pay for senior care. But they come with conditions that matter, and the details are where families need to pay attention."
    },
    {
      "type": "p",
      "text": "I sat down for my Your Best Season series to have a straight, jargon-free conversation about reverse mortgages: how they actually work, who they are designed for, and what the common misconceptions get wrong. Watch the full conversation in the embedded video above. Below, I am going to walk through the most important questions families ask."
    },
    {
      "type": "h2",
      "text": "What Is a Reverse Mortgage and How Does It Work?"
    },
    {
      "type": "p",
      "text": "The most common type of reverse mortgage is called a HECM, which stands for Home Equity Conversion Mortgage. It is insured by the Federal Housing Administration (FHA), and it is the only reverse mortgage product backed by the federal government."
    },
    {
      "type": "p",
      "text": "Here is how it works in plain language: a homeowner who is 62 or older borrows against the equity in their home. Instead of making monthly payments to the lender (like a regular mortgage), the lender pays the homeowner. The loan balance grows over time as interest and fees accumulate. The loan becomes due when the homeowner sells the home, moves out permanently, or passes away."
    },
    {
      "type": "p",
      "text": "Borrowers can receive the funds in several ways: as a lump sum, as a monthly payment, as a line of credit they draw from as needed, or as a combination of these options. The line of credit option is particularly interesting because the unused portion actually grows over time, giving the borrower access to more money the longer they wait to use it."
    },
    {
      "type": "h2",
      "text": "Who Is Eligible for a Reverse Mortgage?"
    },
    {
      "type": "p",
      "text": "The eligibility requirements for a HECM reverse mortgage are straightforward, though there are details that families often overlook:"
    },
    {
      "type": "ul",
      "items": [
        "**Age:** At least one borrower must be 62 or older.",
        "**Home equity:** The home must have significant equity. There is no hard minimum, but most lenders look for at least 50 percent equity.",
        "**Primary residence:** The home must be the borrower's primary residence. Vacation homes and investment properties do not qualify.",
        "**Property type:** Single-family homes, FHA-approved condos, and some manufactured homes are eligible.",
        "**Financial assessment:** There is no minimum credit score, but lenders review income, credit history, and existing debts to confirm the borrower can afford property taxes, homeowner's insurance, and home maintenance.",
        "**Counseling:** Every HECM borrower must complete a counseling session with a HUD-approved counselor before the loan can proceed. This is required by law and is designed to make sure borrowers understand the terms."
      ]
    },
    {
      "type": "p",
      "text": "One important detail for couples: if your parent's spouse is under 62, they may be listed as an \"eligible non-borrowing spouse.\" This protects their right to remain in the home if the borrowing spouse passes away first, though the non-borrowing spouse cannot receive additional loan proceeds."
    },
    {
      "type": "h2",
      "text": "How Much Can a Senior Borrow with a Reverse Mortgage?"
    },
    {
      "type": "p",
      "text": "The amount depends on three factors: the borrower's age, the home's appraised value, and current interest rates. Older borrowers can access a larger percentage of their home's value."
    },
    {
      "type": "p",
      "text": "As a rough guide: a 62-year-old may qualify for around 37 percent of their home's value, while a 92-year-old may qualify for up to 72 percent. For 2026, the HECM FHA mortgage limit is $1,249,125, which means even high-value homes have a cap on how much can be borrowed through the federally insured program."
    },
    {
      "type": "p",
      "text": "For families in Burien and South King County, where median home values have climbed steadily over the past decade, many homeowners have significant equity to work with. A home purchased thirty years ago for $150,000 that is now valued at $550,000 or more represents a substantial financial resource that a reverse mortgage can unlock."
    },
    {
      "type": "h2",
      "text": "What Are the Most Common Myths About Reverse Mortgages?"
    },
    {
      "type": "p",
      "text": "This is where the conversation gets important, because the myths around reverse mortgages keep some families from exploring a tool that could genuinely help them."
    },
    {
      "type": "h3",
      "text": "Myth: The bank takes your home"
    },
    {
      "type": "p",
      "text": "This is the most persistent myth, and it is false. With a reverse mortgage, the homeowner retains the title to the home. It remains their property, just as it would with a traditional mortgage. The lender has a lien on the property (just like any mortgage), but ownership does not transfer."
    },
    {
      "type": "h3",
      "text": "Myth: You can owe more than your home is worth"
    },
    {
      "type": "p",
      "text": "HECM reverse mortgages are \"non-recourse\" loans. This means that when the loan comes due, neither the borrower nor their heirs will ever owe more than the home's appraised value at the time of sale. If the loan balance has grown larger than the home's value, FHA insurance covers the difference. This is a significant protection that many families do not know about."
    },
    {
      "type": "h3",
      "text": "Myth: Your heirs cannot inherit the home"
    },
    {
      "type": "p",
      "text": "Your heirs absolutely can inherit the home. When the borrower passes away, the heirs have several options: they can pay off the loan balance and keep the home, they can sell the home and keep any equity above the loan balance, or they can simply walk away if the loan balance exceeds the home's value (with no further financial obligation). Nothing in the reverse mortgage documents excludes heirs."
    },
    {
      "type": "h3",
      "text": "Myth: You need to own your home free and clear"
    },
    {
      "type": "p",
      "text": "You do not need a mortgage-free home to qualify. If there is an existing mortgage, the reverse mortgage pays it off first, and the remaining proceeds go to the borrower. Many people use a reverse mortgage specifically to eliminate their monthly mortgage payment."
    },
    {
      "type": "h3",
      "text": "Myth: You have to make monthly payments"
    },
    {
      "type": "p",
      "text": "Unlike a traditional mortgage, a reverse mortgage does not require monthly repayments. The loan balance grows over time as interest and fees are added. The borrower's only ongoing financial obligations are property taxes, homeowner's insurance, and basic home maintenance."
    },
    {
      "type": "h2",
      "text": "Can a Reverse Mortgage Help Pay for Senior Care?"
    },
    {
      "type": "p",
      "text": "This is where the conversation connects directly to the families I work with. Many adult children come to me asking how to pay for their parent's care, whether that is in-home help, an adult family home, or assisted living. For homeowners with significant equity, a reverse mortgage is one way to turn that equity into a care-funding resource."
    },
    {
      "type": "p",
      "text": "Here is how families commonly use reverse mortgage proceeds in the context of senior care:"
    },
    {
      "type": "ul",
      "items": [
        "**Funding in-home care** while the parent continues to live in the home. The line of credit option works well here because the family draws funds as needed to pay caregivers.",
        "**Covering home modifications** like grab bars, stair lifts, walk-in showers, and improved lighting to make aging in place safer.",
        "**Paying for adult family home or assisted living costs** by using the proceeds from a lump sum or monthly payments."
      ]
    },
    {
      "type": "p",
      "text": "However, there is one critical rule to understand: the home must remain the borrower's primary residence. If the borrower moves out for more than 12 consecutive months, for example into a care facility, the reverse mortgage becomes due and payable. This means a reverse mortgage works well for funding in-home care or paying for a spouse's care, but it has limitations when both spouses move permanently to residential care."
    },
    {
      "type": "p",
      "text": "For families where one parent needs residential care and the other remains in the home, a reverse mortgage can be a powerful bridge. For families where both parents will eventually need care, it is more commonly used as part of a transition plan: draw on the equity while one parent is still at home, then sell the home when the time comes to fund the next phase."
    },
    {
      "type": "h2",
      "text": "What Are the Real Downsides?"
    },
    {
      "type": "p",
      "text": "No financial tool is perfect, and I want to be honest about the trade-offs:"
    },
    {
      "type": "ul",
      "items": [
        "**The loan balance grows over time.** Because interest compounds on the unpaid balance, the amount owed can grow significantly. This reduces the equity available to heirs.",
        "**Upfront costs are substantial.** HECM loans come with origination fees, closing costs, and FHA mortgage insurance premiums. These can total several thousand dollars.",
        "**Ongoing obligations remain.** The borrower must continue to pay property taxes, homeowner's insurance, and maintain the home. Failing to meet these obligations can trigger a loan default.",
        "**It reduces the inheritance.** If leaving the home's full equity to children or grandchildren is a priority, a reverse mortgage works against that goal.",
        "**It is not free money.** A reverse mortgage is a loan. The equity being accessed will need to be repaid from the home's value eventually."
      ]
    },
    {
      "type": "p",
      "text": "I always encourage families to consult with a financial advisor and a HUD-approved reverse mortgage counselor before making a decision. This is not a choice to make quickly or under pressure."
    },
    {
      "type": "h2",
      "text": "What Should Burien and South King County Families Do Next?"
    },
    {
      "type": "p",
      "text": "If you are exploring how to fund care for an aging parent, a reverse mortgage may be one piece of the puzzle. Here is a practical starting point:"
    },
    {
      "type": "ul",
      "items": [
        "**Get the home appraised** to understand your parent's current equity position.",
        "**Schedule a session with a HUD-approved counselor.** This is free or low-cost and required for any HECM loan. It is also a good education opportunity even if you are just exploring.",
        "**Talk with a financial advisor** who understands senior care costs and can help you compare options: reverse mortgage, long-term care insurance, Medicaid, VA benefits, or private pay.",
        "**Tour care options** so you understand what care actually costs in our area. Adult family homes in Burien and South King County typically range from $3,500 to $8,000 per month depending on the level of care needed."
      ]
    },
    {
      "type": "p",
      "text": "The best financial decisions are made when families have time, information, and options. Do not wait for a hospital discharge or a crisis to start this conversation."
    },
    {
      "type": "p",
      "text": "Watch the full reverse mortgage Q&A in the video embedded above for a straightforward, myth-busting conversation that cuts through the noise."
    },
    {
      "type": "p",
      "text": "**Exploring care options for your parent?** [Schedule a Visit](/contact) to tour Burien Best Care Home and talk with us about what care costs and how families fund it, or [Download Our Family Guide](/family-guide.pdf) for an honest overview of adult family home care in South King County."
    }
  ]
},

{
  "slug": "senior-move-management-transitioning-with-ease",
  "title": "Senior Move Management: Helping Your Parent Transition with Less Stress",
  "description": "How senior move managers help families navigate the physical and emotional process of downsizing and moving. A practical guide for Burien and South King County families preparing for a parent's transition.",
  "date": "2026-07-14",
  "author": "Becca Pitts",
  "readingTime": "7 min",
  "tags": ["Senior Move", "Downsizing", "Transition", "Family Caregiving"],
  "heroImage": "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1600&h=900&q=80",
  "videoUrl": "https://www.youtube.com/watch?v=FKhn1iLEjvY",
  "body": [
    {
      "type": "p",
      "text": "Your mom has lived in the same house for thirty-seven years. The closets are full. The garage is full. The spare bedroom has not been spare since 1998. Every drawer holds something that meant something once, and now you are standing in the living room together trying to figure out how to move her entire life into a single room."
    },
    {
      "type": "p",
      "text": "This is the moment that breaks families. Not because the logistics are impossible, but because the emotions are enormous. Downsizing is not really about stuff. It is about identity, memory, independence, and loss. And trying to manage all of that while also coordinating movers, sorting donations, canceling utilities, and meeting deadlines can push even the most organized family to their limit."
    },
    {
      "type": "p",
      "text": "That is why senior move managers exist. I recently sat down for my Your Best Season series to talk about how these specialized professionals help families navigate the physical and emotional process of a senior transition. Watch the full conversation in the embedded video above. Here is what every family should know."
    },
    {
      "type": "h2",
      "text": "What Is a Senior Move Manager?"
    },
    {
      "type": "p",
      "text": "A senior move manager is a professional who specializes in helping older adults and their families plan, organize, and execute a move. They are not regular movers with a truck. They are project managers, organizers, and emotional support professionals rolled into one."
    },
    {
      "type": "p",
      "text": "The profession is represented by the National Association of Senior and Specialty Move Managers (NASMM), which sets standards for training, ethics, and ongoing education. Many senior move managers hold certifications and have specific training in working with clients who have dementia, physical limitations, or complex emotional needs."
    },
    {
      "type": "p",
      "text": "Here is what a senior move manager typically handles:"
    },
    {
      "type": "ul",
      "items": [
        "**Space planning:** Measuring the new home and creating a floor plan that shows exactly which furniture pieces will fit and where they will go. This takes the guesswork out of what to keep.",
        "**Sorting and organizing:** Working alongside your parent to go through every room, every closet, every drawer. Deciding together what to keep, what to donate, what to sell, and what to let go.",
        "**Item disposition:** Coordinating estate sales, donations, consignment, auctions, or disposal of items that will not make the move.",
        "**Packing:** Professional packing of everything that is going to the new home, labeled and organized for easy unpacking.",
        "**Coordinating the move:** Hiring and managing the moving company, overseeing move day, and making sure everything arrives safely.",
        "**Unpacking and resettling:** Setting up the new home so that when your parent walks in, their bed is made, their pictures are on the wall, and their favorite chair is in the right spot.",
        "**Emotional support:** Understanding that every item has a story, and that letting go is a process, not an event."
      ]
    },
    {
      "type": "h2",
      "text": "How Is a Senior Move Manager Different from Regular Movers?"
    },
    {
      "type": "p",
      "text": "Regular movers load boxes onto a truck and unload them at the other end. That is valuable, but it is only one piece of a senior transition. A senior move manager handles everything that happens before and after the truck arrives."
    },
    {
      "type": "p",
      "text": "The biggest difference is the human element. Older adults who are making a transition have often lived in the same home for 30, 40, or even 50 years. They need to downsize considerably, and the organizational and physical tasks associated with planning that kind of move can be overwhelming for the entire family. A senior move manager understands the emotional weight of the process and approaches it with patience, empathy, and professionalism."
    },
    {
      "type": "p",
      "text": "They also know how to work with families who are spread across different cities or states. If you live in Portland but your parent is in Burien, a local senior move manager can be your boots on the ground, handling the day-to-day work while keeping you updated every step of the way."
    },
    {
      "type": "h2",
      "text": "Why Is Downsizing So Emotionally Difficult?"
    },
    {
      "type": "p",
      "text": "I want to talk about this directly, because it is the part that catches families off guard."
    },
    {
      "type": "p",
      "text": "When you ask a parent to sort through their belongings, you are asking them to confront the passage of time in the most tangible way possible. Every object is a decision: keep it or let it go. And behind every object is a memory, a relationship, a version of themselves they may be grieving."
    },
    {
      "type": "p",
      "text": "The holiday china that has not been used in fifteen years. The tools in the garage from a workshop they can no longer use. The children's drawings stored in a box since 1985. The wedding dress. The military uniform. The rocking chair where they nursed their babies."
    },
    {
      "type": "p",
      "text": "For adult children, the emotional difficulty is different but equally real. You may find yourself arguing with siblings about who gets what. You may feel guilty for pressuring your parent to let go of things. You may discover items you did not know existed, letters or photographs that open doors to parts of your parent's life you never knew about. And underneath all of it is the awareness that this move represents a change in your parent's capacity, their independence, and your relationship."
    },
    {
      "type": "p",
      "text": "A good senior move manager holds space for all of this. They do not rush the process. They do not minimize the feelings. They help your parent tell the stories attached to the objects, honor what matters, and find peace in letting go of what does not need to come along."
    },
    {
      "type": "h2",
      "text": "How Much Does Senior Move Management Cost?"
    },
    {
      "type": "p",
      "text": "Costs vary depending on the scope of the project, the location, and the size of the household. Here is a general picture:"
    },
    {
      "type": "ul",
      "items": [
        "**Hourly rates** typically range from $40 to $80 per hour, depending on the market and the complexity of the work.",
        "**A focused project** (help with sorting and downsizing only) might cost $1,500 to $5,000.",
        "**A full-service engagement** covering assessment, sorting, vendor coordination, packing, move-day supervision, and resettlement in the new home typically ranges from $3,000 to $10,000 or more, depending on the size of the household and the timeline."
      ]
    },
    {
      "type": "p",
      "text": "For families in Burien and the South King County area, it is worth getting quotes from two or three providers. Ask specifically about what is included, how they bill, and whether they charge differently for different phases of the project. The NASMM website (nasmm.org) has a directory of certified senior move managers searchable by location."
    },
    {
      "type": "p",
      "text": "One perspective I share with families: the cost of a senior move manager is often less than the cost of the stress, family conflict, and time away from work that comes with trying to manage a major downsizing on your own. If you are the adult daughter juggling your own job, your own kids, and your parent's transition, professional help is not an indulgence. It is a strategy."
    },
    {
      "type": "h2",
      "text": "How Do You Prepare a Parent for a Move to Care?"
    },
    {
      "type": "p",
      "text": "If your parent is moving from their home to an adult family home, assisted living, or another care setting, here are the things that matter most:"
    },
    {
      "type": "h3",
      "text": "Start the conversation early"
    },
    {
      "type": "p",
      "text": "The worst time to plan a move is in the middle of a crisis. If you can see that your parent's needs are increasing, start talking about options before a fall or a hospitalization forces the timeline. Give them time to process, ask questions, and feel involved in the decision."
    },
    {
      "type": "h3",
      "text": "Let them choose what comes along"
    },
    {
      "type": "p",
      "text": "When your parent moves to a smaller space, they cannot bring everything. But the items they do bring should be their choice. Their favorite blanket. Photographs of grandchildren. A piece of art they love. These personal items are not just decoration; they are anchors of identity in a new environment."
    },
    {
      "type": "h3",
      "text": "Visit the new home together before move day"
    },
    {
      "type": "p",
      "text": "If possible, bring your parent to see the care home before they move in. Meet the caregivers. See the room. Sit in the common area. Familiarity reduces anxiety. At Burien Best Care Home, we always welcome families to visit, ask questions, and spend time in the space before making a decision."
    },
    {
      "type": "h3",
      "text": "Plan for what stays behind"
    },
    {
      "type": "p",
      "text": "Decide in advance what will happen to the items that do not make the move. Will furniture go to family members? Will household goods be donated? Will the home be sold? Having a plan reduces the lingering stress of an unfinished project. A senior move manager can coordinate estate sales, donations, and clean-out services so you do not have to manage it all yourself."
    },
    {
      "type": "h2",
      "text": "What Resources Are Available in Burien and South King County?"
    },
    {
      "type": "p",
      "text": "Families in our area have access to several resources that can help with a senior transition:"
    },
    {
      "type": "ul",
      "items": [
        "**NASMM's online directory** (nasmm.org) lists certified senior move managers in the greater Seattle and South King County area.",
        "**The King County Senior Hub** in Burien connects families with local services, including transition support, caregiver resources, and community programs.",
        "**The City of Burien's Senior Wellness Resources** offers programs and referrals for seniors aged 60 and older.",
        "**Local estate sale companies and donation services** can help with the disposition of items that will not make the move."
      ]
    },
    {
      "type": "p",
      "text": "If you are in the early stages of thinking about a transition for your parent, you do not need to have all the answers right now. Start by understanding your parent's care needs, explore your options, and build a timeline that gives everyone room to breathe."
    },
    {
      "type": "p",
      "text": "Watch the full conversation about senior move management in the video embedded above for a deeper look at how families navigate this process with less stress and more grace."
    },
    {
      "type": "p",
      "text": "**Preparing for your parent's move to care?** [Schedule a Visit](/contact) to see Burien Best Care Home in person and talk with us about how we help families through the transition, or [Download Our Family Guide](/family-guide.pdf) for a clear, compassionate overview of life in an adult family home."
    }
  ]
}
];
