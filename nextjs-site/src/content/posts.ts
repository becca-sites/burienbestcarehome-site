import { youtubeSeriesPosts } from './posts-youtube-series'
// Blog post registry
// Each post is a plain TypeScript object. Body is an array of paragraph-level
// blocks: { type: 'p' | 'h2' | 'h3' | 'ul' | 'quote', text | items }.
// Paragraph/heading/list text may contain a small inline subset: **bold**,
// *italic*, and [text](/internal or https://external) links. These are parsed
// by renderInline() in the article and index routes (no markdown runtime dep).
//
// GENERATED from the blog/ markdown source. Edit the markdown and regenerate
// rather than hand-editing the prose here.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; attribution?: string }

export interface Post {
  slug: string
  title: string
  description: string
  date: string // ISO date string
  author: string
  readingTime: string
  tags: string[]
  heroImage?: string
  videoUrl?: string // optional YouTube/Vimeo embed URL (future use)
  body: Block[]
}

export const posts: Post[] = [
    ...youtubeSeriesPosts,
  {
    "slug": "adult-family-home-vs-assisted-living-burien",
    "title": "Adult Family Home vs. Assisted Living: What Burien Families Actually Need to Know Before Choosing",
    "description": "The real differences between adult family homes and assisted living facilities in Washington State -- staffing ratios, costs, Medicaid coverage, and what daily life actually looks like in each.",
    "date": "2026-06-19",
    "author": "Becca Pitts",
    "readingTime": "9 min",
    "tags": [
      "Choosing Care",
      "Adult Family Home",
      "Senior Care",
      "Washington State"
    ],
    "heroImage": "/images/blog/afh-vs-assisted-living.jpg",
    "body": [
      {
        "type": "p",
        "text": "It is late at night. Your laptop is open on the kitchen counter and you are searching \"adult family home vs assisted living\" for the third time this week. The results are a mess of ads, facility listings, and articles that read like they were written by the same marketing department. Half of them want you to fill out a form before they will tell you anything useful."
      },
      {
        "type": "p",
        "text": "You are not looking for a sales pitch. You are looking for someone to explain the actual differences so you can figure out which one is right for your parent."
      },
      {
        "type": "p",
        "text": "This is that explanation. No form required."
      },
      {
        "type": "h2",
        "text": "What Is an Adult Family Home in Washington State?"
      },
      {
        "type": "p",
        "text": "An adult family home is a real house in a real neighborhood, licensed by the Washington State Department of Social and Health Services to provide 24/7 care for up to eight residents. The provider lives on site or maintains a consistent daily presence, and the staff-to-resident ratio is typically one caregiver for every two to three residents."
      },
      {
        "type": "p",
        "text": "Washington has more than 3,000 licensed adult family homes, more than any other state in the country. The model has been part of the long-term care system here since the early 1990s. If you grew up on the East Coast or in the Midwest, you may never have heard of it. If you grew up in King County, there is probably one on your block."
      },
      {
        "type": "p",
        "text": "Residents in an adult family home share a kitchen table, a living room, and a daily routine that looks more like a household than a facility. Meals are cooked on site, often by the same caregiver who helps residents get dressed in the morning. Care plans are individualized. The environment is calm, predictable, and small enough that every caregiver knows every resident by name, by preference, and by mood."
      },
      {
        "type": "h2",
        "text": "What Is Assisted Living and How Is It Different?"
      },
      {
        "type": "p",
        "text": "Assisted living facilities are larger, typically housing 20 to 200 or more residents in apartment-style units within a commercial building. Residents have their own rooms or small apartments, often with a kitchenette, and share common spaces like dining rooms, activity areas, and gardens."
      },
      {
        "type": "p",
        "text": "Staffing works differently. The caregiver-to-resident ratio in a large assisted living facility is often one to ten or one to twelve during the day, and thinner at night. Staff rotate on shifts. Your parent may see a different aide each morning. The facility has more structured programming: activity calendars, group outings, scheduled meals in a dining hall."
      },
      {
        "type": "p",
        "text": "Assisted living is licensed under different regulations than adult family homes in Washington. Both are overseen by DSHS, but the requirements, inspection schedules, and staffing rules are separate. Neither is inherently better. They serve different needs at different stages."
      },
      {
        "type": "h2",
        "text": "How Does the Daily Experience Compare?"
      },
      {
        "type": "p",
        "text": "In an adult family home, your parent eats family-style meals at a kitchen table with five or six other people. The caregiver who cooked the meal sits down with them. If your mother wants eggs instead of oatmeal this morning, the caregiver makes eggs. If your father has a rough night and sleeps until ten, nobody wakes him at seven for a breakfast schedule. The rhythm of the day bends to the person."
      },
      {
        "type": "p",
        "text": "The caregivers are consistent. Your parent sees the same faces every day. Over weeks and months, those caregivers learn things that medical charts do not capture: that your mother gets anxious before dinner, that your father calms down when someone sits with him and talks about fishing, that a particular song from 1968 changes the entire temperature of the room."
      },
      {
        "type": "p",
        "text": "In assisted living, there is more variety. More people to meet, more activities on the calendar, more physical space to explore. For a social, relatively independent senior, this can be energizing. There may be a fitness room, a library, organized bus trips. The social programming is a genuine strength of larger communities."
      },
      {
        "type": "p",
        "text": "The tradeoff is individual attention. When one caregiver is responsible for ten or twelve residents, the care is competent but less personalized. Meals happen on a set schedule. The dining room is louder. The hallways are longer. For a parent with dementia or anxiety, that scale can feel overwhelming rather than stimulating."
      },
      {
        "type": "h2",
        "text": "What Do They Cost and Does Medicaid Help?"
      },
      {
        "type": "p",
        "text": "In King County in 2026, adult family home care typically runs between $4,000 and $8,000 per month, depending on the level of care your parent needs. Private rooms, memory care services, and higher acuity needs push the cost toward the upper range. Assisted living in the same area runs $4,500 to $10,000 or more per month, with memory care units at the higher end."
      },
      {
        "type": "p",
        "text": "The most important financial difference for many Washington families is Medicaid coverage. Washington's COPES Medicaid waiver pays for adult family home care when a resident qualifies financially and clinically. The current daily rate is approximately $87 per day, which covers room, board, and personal care. This is the same waiver program that makes long-term care accessible for families who have spent down their savings or whose parent's income falls within the eligibility window."
      },
      {
        "type": "p",
        "text": "Medicaid also covers some assisted living, but the availability of Medicaid beds in larger facilities varies, and the waitlists can be long. Many adult family homes in Washington accept Medicaid directly, and some work with families on private-pay-to-Medicaid transitions. If the financial picture is a significant factor in your decision, and for most families it is, read [our walkthrough of the COPES and Medicaid application process](/blog/copes-medicaid-adult-family-home-burien) for the full breakdown."
      },
      {
        "type": "h2",
        "text": "What Should You Look for When Touring Either Option?"
      },
      {
        "type": "p",
        "text": "Whether you are walking into a six-bed adult family home or a 150-unit assisted living building, the things that matter most are the same. Ask about the staff-to-resident ratio on day shift and night shift. Ask how long the current caregivers have worked there. High turnover is a red flag in any care setting, because continuity of care is what keeps your parent safe and known."
      },
      {
        "type": "p",
        "text": "Ask how the home or facility handles medical changes. If your parent falls, what happens in the first five minutes? If their condition declines, at what point do they need to move? Some assisted living communities discharge residents when care needs exceed a certain threshold. Many adult family homes can increase the level of care within the same house, sometimes all the way through hospice."
      },
      {
        "type": "p",
        "text": "Pay attention to how staff interact with the people who already live there. Are they talking to residents, or past them? Is the environment calm or chaotic? Does the building smell clean? These are the details that marketing brochures cannot fake."
      },
      {
        "type": "p",
        "text": "For a deeper dive into the touring process, read [our touring checklist for adult family homes](/blog/touring-adult-family-home-burien). Most of those questions apply to assisted living tours too."
      },
      {
        "type": "h2",
        "text": "When Is an AFH the Better Choice?"
      },
      {
        "type": "p",
        "text": "An adult family home is often the better fit when your parent needs memory care, when they do best with routine and consistency, when a smaller and calmer environment helps them feel safe, or when they become anxious or agitated in crowds. Parents who have lived their whole lives in houses, not apartments, often feel more at home in a setting that looks and feels like a house."
      },
      {
        "type": "p",
        "text": "The staffing ratio makes a measurable difference for parents who need hands-on help with bathing, dressing, eating, and mobility. When one caregiver is responsible for two or three people instead of ten, the pace of care changes. Nobody is rushed through breakfast. Nobody waits forty-five minutes for help getting to the bathroom."
      },
      {
        "type": "p",
        "text": "Families who want to stay closely involved also tend to prefer adult family homes. In a small home, you know the caregivers. They know you. Communication is direct. When something changes, you hear about it the same day, often by phone from the person who noticed the change."
      },
      {
        "type": "h2",
        "text": "When Might Assisted Living Be the Better Fit?"
      },
      {
        "type": "p",
        "text": "Assisted living is often the better fit for a parent who is relatively independent, socially active, and looking for a community with more programming and amenities. If your mother wants to take a watercolor class on Tuesday, join a book club on Thursday, and ride a shuttle to the grocery store on Saturday, a larger community can offer that."
      },
      {
        "type": "p",
        "text": "Some seniors prefer apartment-style living with their own space, their own kitchenette, and the freedom to come and go. If your parent is mobile, cognitively sharp, and values independence above all else, the assisted living model may feel more like the next chapter and less like a transition they did not choose."
      },
      {
        "type": "p",
        "text": "Larger facilities also sometimes offer specialized amenities that smaller homes cannot: a swimming pool, a physical therapy gym, an on-site salon, or a dedicated memory care wing with secured access. If a specific amenity matters to your parent's quality of life, that is worth weighing."
      },
      {
        "type": "h2",
        "text": "How Do You Decide?"
      },
      {
        "type": "p",
        "text": "Visit both. Not the websites. The actual places. Walk through an adult family home at lunchtime and watch how the meal happens. Walk through an assisted living community during an activity hour and see who is participating. Bring your parent if they are willing. Bring a notebook."
      },
      {
        "type": "p",
        "text": "Trust your gut in the first five minutes. The right place feels right before anyone hands you a brochure. The light is okay. The sound is okay. The people who work there look like they want to be there. Your parent's face relaxes, even slightly."
      },
      {
        "type": "p",
        "text": "That is the one."
      },
      {
        "type": "p",
        "text": "If you are in Burien, SeaTac, White Center, Des Moines, or anywhere in south King County and want to see what a small adult family home actually feels like, we would love to show you around."
      },
      {
        "type": "p",
        "text": "[Schedule a Visit](/contact) to tour Burien Best Care Home, or [Download Our Family Guide](/family-guide.pdf) to take the key questions with you when you tour any care option."
      }
    ]
  },
  {
    "slug": "spring-planting-party-may-2026",
    "title": "Dirt Under Our Nails and Sun on Our Faces: Inside the Spring Planting Party at Burien Best Care Home",
    "description": "The real story behind Burien Best Care Home's spring planting party -- raised cedar garden beds, wheelchair-accessible design, and what a community event at a small adult family home actually looks like.",
    "date": "2026-06-12",
    "author": "Becca Pitts",
    "readingTime": "7 min",
    "tags": [
      "Life at the Home",
      "Community",
      "Garden Therapy",
      "Memory Care"
    ],
    "heroImage": "/images/gallery/events/spring-planting-2026/spring-1.webp",
    "body": [
      {
        "type": "p",
        "text": "It was a warm May afternoon, the kind of sunny Pacific Northwest day that makes you forget the last four months of gray. The brick patio behind Burien Best Care Home was lined with new raised cedar planting beds, bags of organic soil stacked along the walkway, and flats of petunias and sweet potato vine waiting in the shade."
      },
      {
        "type": "p",
        "text": "Our residents were already outside. Some in wheelchairs, some in lawn chairs, all of them watching the preparations with the quiet interest of people who know exactly what a garden is for."
      },
      {
        "type": "p",
        "text": "This is the story of our spring planting party. Not the polished version. The real one."
      },
      {
        "type": "h2",
        "text": "Why Would an Adult Family Home Throw a Planting Party?"
      },
      {
        "type": "p",
        "text": "Because our residents live here. This is their home. And one of the hardest things about moving into any care setting is the feeling that you have stopped being useful, that the world is happening around you instead of with you."
      },
      {
        "type": "p",
        "text": "Gardening gives that back. Not in a therapeutic, clinical sense, although the research on horticultural therapy for older adults is strong. It gives it back in the simple, human sense of putting your hands in dirt and making something grow. Of being needed by a plant that will die if nobody waters it."
      },
      {
        "type": "p",
        "text": "We built the raised beds at waist height on purpose. Every bed is accessible from a wheelchair. Nobody has to bend down. Nobody has to kneel. A resident who cannot walk to the mailbox can reach into that bed and plant a petunia with their own two hands."
      },
      {
        "type": "h2",
        "text": "What Did the Planting Party Actually Look Like?"
      },
      {
        "type": "p",
        "text": "Messy. Joyful. Slow in the best possible way."
      },
      {
        "type": "p",
        "text": "Residents sat at the raised beds with their wheelchairs pulled up to the edge, hands deep in the soil, working alongside staff and family members who had come out for the afternoon. One of our residents, who usually speaks very little, spent twenty minutes carefully arranging petunias by color. Nobody rushed her. Nobody rearranged her work."
      },
      {
        "type": "p",
        "text": "A daughter and her mother planted herbs together in the same bed, the daughter following her mother's instructions about spacing even though the spacing did not matter. What mattered was that her mother was giving instructions again."
      },
      {
        "type": "p",
        "text": "The garden slowed everyone to the same pace. There was no schedule to keep. No activity to transition to. Just soil, sun, and the sound of people doing something together."
      },
      {
        "type": "h2",
        "text": "Why Does Gardening Matter for Older Adults?"
      },
      {
        "type": "p",
        "text": "Gardening engages procedural memory, the body-level memory of how to do things. A resident who cannot remember what day it is may remember exactly how to pat soil around the base of a plant. That kind of memory lives deeper than the parts of the brain that dementia damages first. When you watch someone with advanced memory loss pick up a trowel and start working without being told how, you are watching their body remember what their mind has let go of."
      },
      {
        "type": "p",
        "text": "There is a sensory dimension too. The smell of soil and marigolds. The warmth of sun on bare arms. The texture of a leaf between two fingers. For residents who spend most of their time indoors, these are not small things. They are the difference between a day that blurs into the next and a day that feels like it belonged to them."
      },
      {
        "type": "p",
        "text": "And then there is the simple beauty of it. A raised bed full of bright petunias outside the window where your parent eats breakfast every morning. That is not decoration. That is dignity."
      },
      {
        "type": "h2",
        "text": "How Do Raised Garden Beds Help Residents Who Use Wheelchairs?"
      },
      {
        "type": "p",
        "text": "Traditional garden beds are on the ground. They require bending, kneeling, or crouching, all movements that are impossible or unsafe for many older adults and completely out of reach for anyone in a wheelchair."
      },
      {
        "type": "p",
        "text": "Our cedar beds sit at wheelchair-seat height, about 24 inches off the ground, with enough clearance underneath for a wheelchair footrest. A resident can roll up to the bed, reach over the edge, and work in the soil with full arm extension. No assistance required. No adaptive equipment. Just a person and a garden."
      },
      {
        "type": "p",
        "text": "That distinction matters more than it might seem. There is a difference between being helped to garden and gardening independently. Our residents are gardening. Their caregivers are nearby if they need anything, but the work is theirs."
      },
      {
        "type": "h2",
        "text": "What Happens to the Garden After the Party?"
      },
      {
        "type": "p",
        "text": "The garden is permanent. It did not go away when the last guest drove home."
      },
      {
        "type": "p",
        "text": "Staff water the beds daily. The herbs, basil, rosemary, and mint so far, are already being used in the kitchen. Residents walk or wheel out to the beds whenever they want, checking on their plants, pulling a weed, pinching off a dead bloom."
      },
      {
        "type": "p",
        "text": "We are already talking about what comes next. Tomatoes in the sunny bed along the south wall. Lavender in the bed near the patio door, where the scent drifts inside on warm afternoons. One resident has been asking about strawberries."
      },
      {
        "type": "p",
        "text": "A garden is a project that does not end. That is exactly the point."
      },
      {
        "type": "h2",
        "text": "What Does a Community Event Tell You About a Care Home?"
      },
      {
        "type": "p",
        "text": "Quite a lot, actually."
      },
      {
        "type": "p",
        "text": "When you are looking at care homes for your parent, look at whether the home does things *with* residents or *to* them. A planting party where residents are sitting at the beds, hands in the soil, making decisions about what goes where, is a different kind of event than a planting party where staff put flowers in pots and residents watch from the patio."
      },
      {
        "type": "p",
        "text": "A garden is real. It grows. It changes. It needs tending. It is not a photo opportunity. It is not something you can stage for the website and then let die. Six months from now, you will be able to walk up to our patio and see whether those petunias made it. That kind of accountability is built into the dirt."
      },
      {
        "type": "p",
        "text": "When you tour any care home, ask what the residents did last week. Not what is on the activity calendar. What actually happened. The answer will tell you everything you need to know."
      },
      {
        "type": "p",
        "text": "[View all photos from the Spring Planting Party](/gallery)"
      },
      {
        "type": "p",
        "text": "If you are a family in Burien, Des Moines, SeaTac, or south King County exploring care options, we would love to show you around, garden included."
      },
      {
        "type": "p",
        "text": "[Schedule a Visit](/contact) to see Burien Best Care Home in person, or [Download Our Family Guide](/family-guide.pdf) to take the key questions with you."
      }
    ]
  },
  {
    "slug": "dementia-parent-stopped-eating-burien",
    "title": "When Mom Stops Eating: A Burien Family's Guide to the Grief Nobody Talks About",
    "description": "When a parent with dementia stops eating, families face a grief nobody prepared them for. A Burien adult family home owner explains what is really happening and what genuinely helps.",
    "date": "2026-06-05",
    "author": "Becca Pitts",
    "readingTime": "17 min",
    "tags": [
      "Memory Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is a Tuesday afternoon in Burien. You are standing in your mother's kitchen, looking at a plate that you spent forty minutes preparing. Half a scrambled egg. A quarter of a piece of toast. A few slices of strawberry arranged the way she used to arrange them for you when you were eight. The plate is sitting in front of her on the same placemat she has used since 1994. And she is pushing it away with the kind of gentle, distracted motion a toddler uses to push away a blanket."
      },
      {
        "type": "p",
        "text": "\"I'm not hungry, honey.\""
      },
      {
        "type": "p",
        "text": "You want to scream. You want to cry. You want to open the fridge and pull out everything she ever loved and line it up on the counter and say, \"Please, Mom. Please eat something. Just one bite. Just one.\""
      },
      {
        "type": "p",
        "text": "Instead you say, \"Okay. Maybe later.\""
      },
      {
        "type": "p",
        "text": "She nods. She looks out the window at a bird feeder she has stopped filling."
      },
      {
        "type": "p",
        "text": "Later, when you are alone in your car in her driveway, you will search on your phone: \"dementia mom won't eat.\" You will scroll past twenty articles about small portions and finger foods and Ensure shakes. You will read that forty percent of people with dementia experience significant weight loss. You will feel a hot ring of panic in your chest. You will text your sister a picture of the plate."
      },
      {
        "type": "p",
        "text": "This article is not another listicle about cutting sandwiches into quarters."
      },
      {
        "type": "p",
        "text": "This is for the adult daughter or son in Burien, Seattle, Des Moines, SeaTac, White Center, or anywhere in King County who is watching their parent shrink inside their own clothes and cannot figure out whether they are witnessing a problem to be solved or a grief to be faced."
      },
      {
        "type": "p",
        "text": "My name is Becca, and I have spent twenty years in senior care. I am the owner of Burien Best Care Home. I am going to tell you what the internet keeps dancing around."
      },
      {
        "type": "h2",
        "text": "Why Has My Parent With Dementia Stopped Eating?"
      },
      {
        "type": "p",
        "text": "A parent with dementia stops eating for four overlapping reasons, and sorting out which one is happening is the most important thing you can do this week. Up to fifty-seven percent of people with dementia experience some kind of eating or swallowing disturbance, and the cause is almost never just one thing."
      },
      {
        "type": "p",
        "text": "The first reason is medical and treatable. A urinary tract infection in an older adult rarely looks like a UTI. It looks like confusion, refusal, agitation, and sudden loss of appetite. Constipation, undiagnosed pain, a loose denture, a mouth ulcer, untreated reflux, a new medication, or a medication dose that needs adjusting can all shut appetite down within days. Before you accept that your parent has \"stopped eating because of dementia,\" you need a conversation with their primary care physician and ideally a geriatrician. A physical exam, a basic blood panel, a urinalysis, and a medication review catches the reversible causes."
      },
      {
        "type": "p",
        "text": "The second reason is dementia itself. Dementia changes the brain structures that regulate hunger, satiety, taste, and smell. The parent who built her identity on a Sunday roast may genuinely no longer recognize food as food. She may not remember how to use a fork. She may look at a plate and see shapes. She may chew and forget to swallow. She may feel full after three bites and then genuinely hungry again two hours later. Food preferences often shift toward extremes, especially sweet. The mother who used to scold you for eating dessert first may now only eat dessert. This is not rebellion. This is neurology."
      },
      {
        "type": "p",
        "text": "The third reason is depression, grief, and environment. Older adults who eat alone eat less. Older adults who feel anxious at mealtimes eat less. Older adults who have lost a spouse often stop eating the foods they used to share. A noisy television, a bright overhead light, a table set in a hurry, or a caregiver hovering with a spoon all reduce intake. The setting around the plate matters as much as what is on it."
      },
      {
        "type": "p",
        "text": "The fourth reason is the one most articles will not name directly. In late-stage dementia, a parent's body begins a gradual, orderly withdrawal from the work of staying alive. Appetite is the first organ system to quiet down, because the body no longer needs the fuel it used to need. The person needs less because the person is doing less. At the very end of a dementia journey, refusing food is not a symptom to be fought. It is the body's oldest language for saying, I am beginning to let go."
      },
      {
        "type": "p",
        "text": "Your job in this first week is not to decide which of these four is happening. Your job is to rule out reason one with a doctor visit, reduce the friction of reasons two and three with practical adjustments, and ask the hospice question when the pattern starts looking like reason four. The rest of this article walks you through all three."
      },
      {
        "type": "h2",
        "text": "How Much Weight Loss Is Dangerous in an Older Adult?"
      },
      {
        "type": "p",
        "text": "Five pounds in a week or ten pounds in a month is the threshold at which every reputable geriatrician will tell you to call the doctor today. Unintentional weight loss of more than five percent of body weight over six to twelve months is considered clinically significant. In practical terms, if your ninety-five-pound mother in Burien lost five pounds since the last time you saw her at Easter, that is not a cosmetic shift. That is her body telling you something is changing."
      },
      {
        "type": "p",
        "text": "The thing no one warns you about is that dementia weight loss often happens silently. Your parent may still appear to be eating. You may watch her eat an entire bowl of soup at dinner. But she is also often forgetting to drink water, skipping breakfast when no one is there, refusing lunch, or chewing and quietly spitting food into a napkin. Without someone tracking intake over a whole day, you are looking at a ten percent slice of the truth."
      },
      {
        "type": "p",
        "text": "The most useful thing you can do this week is start a simple intake log. Not a calorie counter. Just a three-column sheet of paper on the fridge. Date. What she ate. What she refused. You will see patterns within a week. You will know whether you are watching a bad month or a slow trajectory. You will have something to show the doctor that is more specific than \"she's not eating much.\""
      },
      {
        "type": "p",
        "text": "You can also ask her doctor for a referral to a registered dietitian who works with older adults. In Washington, Medicare Part B usually covers this when medical necessity is documented. A dietitian will not give you a brochure about the food pyramid. She will sit in your mother's kitchen and figure out which foods are realistic, which ones can carry the most calories per bite, and how to get protein into someone who can tolerate three tablespoons of anything at a time."
      },
      {
        "type": "h2",
        "text": "Should I Force My Parent With Dementia to Eat?"
      },
      {
        "type": "p",
        "text": "You should not force your parent with dementia to eat, and the hospice movement, the Alzheimer's Association, and every experienced dementia nurse will tell you the same thing. Forcing food into a person who is signaling \"no\" increases agitation, breaks trust, raises the risk of aspiration pneumonia, and turns every meal into a battleground that poisons the remaining relationship."
      },
      {
        "type": "p",
        "text": "But nobody told you this growing up."
      },
      {
        "type": "p",
        "text": "If you were raised by a grandmother who survived the Depression, or by immigrant parents who kept cans in the pantry like a talisman, or by any family in any culture where food is how you say \"I love you,\" then the instruction to \"not force eating\" sounds like the instruction to stop loving. It is not. It is the instruction to start speaking a different love language."
      },
      {
        "type": "p",
        "text": "Here is the reframe that changes everything for families I work with in King County. Food was never the love. Presence was the love. Food was just the delivery vehicle your parent used because she had a body and a kitchen and you had a mouth and a stomach. Now she has less body, less appetite, and less fluency with the kitchen. So the delivery vehicle has to change."
      },
      {
        "type": "p",
        "text": "Sit next to her. Hold her hand. Put on the music she used to hum while she cooked. Bring her a warm washcloth. Brush her hair. Tell her a story about her own life that you only know because she told you. Show her a photograph. These are not lesser forms of love. These are the love that the food was always carrying."
      },
      {
        "type": "p",
        "text": "If she eats during any of it, that is a gift. If she does not, you have still fed her. You have fed the thing that was always hungrier than her stomach."
      },
      {
        "type": "h2",
        "text": "What Actually Works When My Mom or Dad Won't Eat?"
      },
      {
        "type": "p",
        "text": "The practical strategies that consistently help dementia patients eat more fall into five categories, and they are almost never the ones families try first."
      },
      {
        "type": "p",
        "text": "Calorie density beats volume every time. A half cup of whole milk Greek yogurt with a tablespoon of almond butter and a drizzle of honey delivers more useful nutrition than a full plate of chicken and vegetables she will refuse. Whole milk, full fat cottage cheese, scrambled eggs with cream, avocado, nut butters on soft bread, and ice cream milkshakes with protein powder mixed in are all appropriate. This is not the moment for low fat anything. Your mother is not trying to lose weight. She is trying to stay alive, and her body is asking for the richest fuel you can offer."
      },
      {
        "type": "p",
        "text": "Serving size matters more than you think. A full plate is overwhelming to a brain that cannot organize visual information the way it used to. Try one food at a time on a small plate. A single piece of toast cut into four triangles on a salad plate. Two minutes later, a small bowl with three strawberries. Ten minutes after that, a teacup of tomato soup. Five small offerings across ninety minutes will almost always outperform one big meal."
      },
      {
        "type": "p",
        "text": "Color contrast helps. A white plate on a white placemat with pale food disappears for a dementia brain. Serve mashed potatoes on a blue plate. Serve applesauce in a red bowl. It sounds small. Research shows it increases intake by up to twenty-five percent in some studies."
      },
      {
        "type": "p",
        "text": "Timing follows the person, not the clock. Many people with dementia eat better earlier in the day when cognition is sharpest and appetite has not been blunted by fatigue. Breakfast may be your best meal. Protein at breakfast. Bigger portion of the day before ten a.m. A grazing pattern of six small offerings over the day often works better than three meals. This is why institutional mealtimes often fail dementia residents and why smaller, more flexible homes usually do better with eating."
      },
      {
        "type": "p",
        "text": "Environment is the invisible ingredient. Turn off the television. Sit across from her, not above her. Eat something yourself. Use dishes and utensils she recognizes. Avoid asking questions during the meal. Do not coax. Do not remind her how much she is eating. Hand her the fork instead of feeding her when possible, even if it gets slow and messy. Autonomy is appetite."
      },
      {
        "type": "p",
        "text": "Hydration matters more than food in the short term. A dehydrated older adult loses appetite fast, and dehydration is the most common preventable cause of sudden eating refusal in memory care. Popsicles, watermelon, broth, herbal tea, and thin smoothies count as hydration. A person who hates drinking water will often eat an ice pop. You can put a pitcher of lemon water on the table at every meal whether or not she drinks from it. Visual cues help."
      },
      {
        "type": "h2",
        "text": "When Should a Family in Burien Think About Hospice for a Parent With Dementia?"
      },
      {
        "type": "p",
        "text": "A family in Burien should consider a hospice conversation when a parent with advanced dementia is losing weight steadily despite intake adjustments, eating less than half of what used to be normal, sleeping most of the day, developing recurring infections, no longer recognizing close family, or physically unable to transfer, walk, or speak in full sentences."
      },
      {
        "type": "p",
        "text": "Hospice is not giving up. Hospice is not calling time of death. Hospice is a specific Medicare benefit available in Washington State to any patient with a prognosis of six months or less if the disease runs its typical course, and dementia qualifies when the signs above are present."
      },
      {
        "type": "p",
        "text": "The thing that surprises most families is what hospice actually does. Hospice adds a nurse, a social worker, a chaplain if desired, a home health aide several times a week, all medications and supplies related to the primary diagnosis, and a twenty four hour on-call line. Hospice does not remove your parent's doctor. Hospice does not shorten life. The research on dementia hospice enrollment is clear: patients who enroll in hospice for dementia often live as long or longer than those who do not, because they stop getting hospital transfers that cause setbacks, they get better pain and anxiety management, and they live in a calmer environment."
      },
      {
        "type": "p",
        "text": "In Washington, hospice is covered at one hundred percent by Medicare and by most Medicaid plans, including the COPES waiver that covers many adult family home residents in King County. You do not need permission from your parent's primary doctor to ask for a hospice evaluation. You can call any local hospice directly. King County has multiple hospice providers with strong reputations, and most of them will do a free home consultation whether or not your parent ends up enrolling."
      },
      {
        "type": "p",
        "text": "The question to ask yourself is not \"Is my mother dying?\" The question is, \"Is the pattern of her decline consistent with a disease that kills people within six months if it keeps progressing?\" If the answer is yes or maybe, you are the right audience for a hospice consult. Most families I have worked with in Burien wish they had called sooner."
      },
      {
        "type": "p",
        "text": "For more on navigating this kind of transition, our sister education site [Your Best Season](https://yourbestseason.com) covers the emotional and practical landscape of late-stage dementia caregiving for Washington families."
      },
      {
        "type": "h2",
        "text": "Why Is It Easier for My Parent to Eat in a Small Adult Family Home?"
      },
      {
        "type": "p",
        "text": "A parent with dementia often eats more in a six-bed adult family home than at home alone or in a large assisted living facility because the staff-to-resident ratio, the pace of meals, the visual environment, and the continuity of caregivers all align with how a dementia brain actually works. This is not marketing. This is the neurology of mealtimes."
      },
      {
        "type": "p",
        "text": "At a typical Burien adult family home with six residents and one to two caregivers on shift, your mother is sitting at a kitchen table with five familiar people, watching a caregiver she knows by name prepare food she can smell from across the room. The caregiver is not on a schedule that demands one hundred residents finish dinner in forty-five minutes. She can serve your mother three small plates across two hours. She can sit next to her and eat a small plate of her own. She can notice when your mother is chewing food she forgot to swallow. She can offer a glass of juice at two p.m. when your mother is suddenly alert."
      },
      {
        "type": "p",
        "text": "That ratio, one caregiver to three residents, is the single most important factor in dementia nutrition that nobody writes about. At a large facility with a one to ten or one to twelve ratio, a well-meaning caregiver who loves her residents still cannot sit with your mother long enough to coax her through a meal. The math does not allow it."
      },
      {
        "type": "p",
        "text": "At Burien Best Care Home, we plan meals around our residents rather than asking our residents to adjust to the meals. We notice weight changes within days because we are weighing, tracking, and living with each person. We work closely with family members and primary care physicians to catch reversible causes quickly. And when eating genuinely becomes part of the body's natural slowing at the end of a dementia journey, we know how to honor that without panicking, without force, and without shame, alongside hospice partners who specialize in this exact moment."
      },
      {
        "type": "p",
        "text": "Families who move a parent to a small home after months of unsuccessful eating at home almost always see a weight rebound in the first four to six weeks. Part of that is calories. Part of it is the absence of the low grade stress the family unintentionally carried into every meal. When the food police go back to being daughters and sons, appetites often return."
      },
      {
        "type": "h2",
        "text": "What Local Burien and King County Resources Help With This?"
      },
      {
        "type": "p",
        "text": "King County families dealing with a dementia parent who has stopped eating have more resources than most realize, and all of them are free or covered by insurance."
      },
      {
        "type": "p",
        "text": "Community Living Connections at 1-855-567-0252 is Washington's single point of contact for caregivers. They will walk you through Medicaid, COPES, hospice eligibility, and adult family home placement in one call. The call is free and confidential."
      },
      {
        "type": "p",
        "text": "The Alzheimer's Association Western and Central Washington Chapter has a twenty-four hour helpline at 1-800-272-3900. Midnight calls are welcome. The people who pick up have worked with thousands of Washington families through exactly this moment."
      },
      {
        "type": "p",
        "text": "Your parent's primary care physician can give you a referral to a geriatrician through UW Medicine, Virginia Mason Franciscan Health, or MultiCare. A geriatrician visit for an elder who has stopped eating is often the single highest-value medical appointment you can schedule. They review medications, rule out reversible causes, and help you understand the trajectory."
      },
      {
        "type": "p",
        "text": "The DSHS Adult Family Home Locator lists all twenty-one licensed AFHs in Burien, with up-to-date license status, specialty training, and capacity. Most Burien homes, including ours, specialize in memory care and have trained staff for dementia-related eating changes."
      },
      {
        "type": "p",
        "text": "If you are beginning to think about the family home itself, whether because your parent can no longer safely live there or because care costs are approaching the five-year Medicaid look-back, our partners at [Your Next Step Home](https://yournextstephome.com) guide Washington families through real estate transitions during senior care crises without pressure or rush."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**Can a person with dementia live a long time without eating?**"
      },
      {
        "type": "p",
        "text": "Yes. People in advanced dementia can live for weeks, sometimes months, with very minimal food intake. The body becomes extraordinarily efficient at the end of life. Hydration matters more than calories in the last months. Hospice nurses have seen patients live three to six months on very little solid food. This is biologically normal and not a sign of suffering when pain and anxiety are well managed."
      },
      {
        "type": "p",
        "text": "**Is my parent suffering when they refuse food?**"
      },
      {
        "type": "p",
        "text": "Research on late-stage dementia and natural eating decline consistently shows that patients are not suffering from hunger when they stop eating as part of the body's natural slowing. Forcing food, on the other hand, often does cause suffering. Good hospice care includes excellent mouth care and small offerings of comfort foods without pressure, which is what the research defines as compassionate end-of-life nutrition."
      },
      {
        "type": "p",
        "text": "**When should I call a doctor about my parent's weight loss?**"
      },
      {
        "type": "p",
        "text": "Call today if your parent has lost five pounds in a week or ten pounds in a month, has stopped drinking fluids, has a fever, has not eaten anything in forty-eight hours, or is showing new confusion on top of baseline dementia. Call within two weeks for gradual decline over a month or two."
      },
      {
        "type": "p",
        "text": "**Does Medicaid pay for memory care in Washington?**"
      },
      {
        "type": "p",
        "text": "Yes, through the COPES waiver. Washington State Medicaid pays approximately $87 per day for adult family home care when the resident qualifies financially and clinically. Burien Best Care Home accepts Medicaid and works with families on private-pay-to-Medicaid transitions. For a detailed walkthrough of how this works, see our guide on [COPES and Medicaid for Adult Family Homes](./blog-2026-04-21-copes-medicaid-adult-family-home-burien.md)."
      },
      {
        "type": "p",
        "text": "**How do I know if my parent's eating refusal is reversible?**"
      },
      {
        "type": "p",
        "text": "The only way to know is a full medical workup. Get a urinalysis, a medication review, a dental check, a thyroid panel, and a basic metabolic panel. About one-third of sudden eating refusal in older adults has a reversible cause. Dementia patients deserve the same medical workup as anyone else before we accept that eating refusal is the disease."
      },
      {
        "type": "p",
        "text": "**Suggested schema:** Wrap these six questions and answers in JSON-LD FAQPage structured data to support featured snippets and AI Overview citation."
      },
      {
        "type": "h2",
        "text": "A Closing Word From Becca"
      },
      {
        "type": "p",
        "text": "If you are sitting in your car in your mother's driveway right now, scrolling through this on your phone, I want you to know something."
      },
      {
        "type": "p",
        "text": "You have not failed her."
      },
      {
        "type": "p",
        "text": "The plate that keeps coming back full is not a report card on your love. It is a message from a body and a brain that are doing what bodies and brains eventually do. Your mother's relationship with food is one of the last expressions of her autonomy, and the most loving thing you can do is keep offering without demanding, keep noticing without panicking, and keep sitting with her even when the meal ends with half a piece of toast."
      },
      {
        "type": "p",
        "text": "The real question is not whether your mother will eat dinner tonight. The real question is whether she feels safe, loved, and seen in the time she has left. That question has nothing to do with calories and everything to do with presence."
      },
      {
        "type": "p",
        "text": "If the weight of being the food police and the daughter and the case manager and the nurse is finally too much, and you are starting to wonder whether there is a home where your mother could eat at her own pace with trained caregivers who know her by name, I would be glad to talk. Come walk through our kitchen in Burien. See a plate being served slowly, in a quiet room, at a pace that respects who your mother still is. No pressure. No pitch. Just a real conversation about a real moment."
      },
      {
        "type": "p",
        "text": "You can reach me directly through [burienbestcarehome.com](https://burienbestcarehome.com) or by calling the home. If it is not the right fit, I will help you find the home that is. That is what this neighborhood does for its own."
      },
      {
        "type": "p",
        "text": "And the next time you sit with your mother at her kitchen table, try this. Put down the fork. Take her hand. Look at the bird feeder she has stopped filling. Tell her about the bird you saw on your way over. Do not ask if she is hungry. Just sit."
      },
      {
        "type": "p",
        "text": "She is still in there. And she is still being fed."
      },
      {
        "type": "p",
        "text": "*About the Author: Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions.*"
      },
      {
        "type": "p",
        "text": "*Burien Best Care Home is a licensed adult family home in Burien, WA (King County), specializing in long-term residential care, memory and dementia care, short-term and respite care, and adult day care. We accept Medicaid and work with families across the full spectrum of dementia journeys.*"
      }
    ]
  },
  {
    "slug": "bathing-refusal-dementia-burien",
    "title": "When She Won't Let You Bathe Her: Why Bathing Refusal in Dementia Isn't Defiance, and Why You May Not Be the Right Person to Win This Fight",
    "description": "Bathing refusal in dementia is not defiance. A Burien adult family home owner explains why your parent resists, why you may not be the right person to win this fight, and what helps.",
    "date": "2026-05-29",
    "author": "Becca Pitts",
    "readingTime": "16 min",
    "tags": [
      "Memory Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "*A note for families in Burien, King County, and across Washington State who are quietly falling apart over a bathroom door that won't open.*"
      },
      {
        "type": "p",
        "text": "It is a Tuesday morning in April, and a woman in South King County is sitting on the hallway floor outside her mother's bathroom. She has been trying for ninety minutes. The water was warm twenty minutes ago. The towels are folded on the counter the way her mother likes them. The bathrobe is warming on the radiator. She has tried the spa-day script she read about on a dementia blog at two in the morning last Thursday. She has tried the you-will-feel-so-much-better angle. She has tried firmness. She has tried tears. Her mother is in the bedroom in the same nightgown she has worn for six days, and when her daughter asked her gently one more time if she would come shower, her mother looked her in the face and said, \"Why do you care?\""
      },
      {
        "type": "p",
        "text": "That question is the one the daughter is still sitting in the hallway with."
      },
      {
        "type": "p",
        "text": "If you have been searching at midnight for phrases like *mom won't shower dementia* or *elderly parent refuses to bathe* or *I stopped caring about my mom's bathing*, I want to tell you something that almost no article on this topic will tell you. You are not failing. You are not being impatient. You are not going to fix this with a better redirection technique. And there is a very specific reason your mother is not cooperating, and a very specific reason you, specifically, are the person she is not cooperating with."
      },
      {
        "type": "p",
        "text": "I have run an adult family home in Burien, Washington, for two decades. I have bathed, or overseen the bathing of, more human beings than I can count. What I am about to tell you is what I wish someone had told the daughter on the hallway floor before she spent another three months believing she was the problem."
      },
      {
        "type": "h2",
        "text": "Why Won't My Parent With Dementia Let Me Bathe Them?"
      },
      {
        "type": "p",
        "text": "Bathing refusal in moderate to advanced dementia is not defiance. It is a neurological response to what the dementia brain is registering as sensory assault, combined with a relational crisis that the family member bathing the parent almost always underestimates."
      },
      {
        "type": "p",
        "text": "Here is the clinical reality. Somewhere around Stage 5 of dementia, on the seven-stage Global Deterioration Scale, the brain begins to lose its ability to integrate multiple simultaneous sensory inputs. A shower, for a neurotypical adult, is a single experience. For a brain in Stage 5 or 6 dementia, a shower is not one thing. It is the cold of stripped skin in a tiled room, plus the unfamiliar slipperiness of the floor, plus the sound of running water that is no longer recognized as the sound of cleaning, plus the sensation of water hitting the scalp from above, which the UCLA Health dementia program describes as often being experienced by the patient as something invisible attacking her head. It is soap in eyes that no longer blink defensively fast enough. It is the loss of balance that comes from closing your eyes to rinse shampoo. It is being naked in front of a person who used to be your baby. It is not remembering why any of this is happening."
      },
      {
        "type": "p",
        "text": "Your mother is not refusing a shower. Her nervous system is interpreting the shower as a threat to survival and responding accordingly. The refusal is not a personality problem. It is the brain doing exactly what a dementia brain does when it cannot integrate sensory input quickly enough to understand a situation as safe."
      },
      {
        "type": "p",
        "text": "This changes what you are trying to do. You are not trying to convince a stubborn person to do a reasonable thing. You are trying to convince a frightened person that a thing her brain is telling her is dangerous is actually safe. Those are different problems, and they require different approaches."
      },
      {
        "type": "h2",
        "text": "Why Does This Particular Caregiving Task Break Families?"
      },
      {
        "type": "p",
        "text": "Bathing breaks families because it is the one care task that fuses three things the culture has no language for: shame about smell, the intimacy of a naked body, and the full reversal of the parent-child relationship in one bathroom."
      },
      {
        "type": "p",
        "text": "When your mother washed you as a child, the relationship was unambiguous. She was the mother. You were the child. The nakedness was innocent because the roles were clear. When you try to wash your mother as an adult, every piece of that scaffolding collapses. She is naked in front of her own daughter. You are seeing a body that gave birth to you, now frail and incontinent and not recognizable to itself in the mirror. Some part of your mother, even in dementia, knows that this is not supposed to be happening. Some part of you, even after years of caregiving, knows it too."
      },
      {
        "type": "p",
        "text": "What you are experiencing on the hallway floor is not just frustration about hygiene. It is grief. It is the grief of the relationship inverting. It is the grief of no longer being her daughter in the original sense, but her caregiver in a sense that your own body was not designed to accept easily. Families in the online caregiver forums keep using the same phrase about this moment, in different words. They say some version of, *I do not recognize my own life*. That sentence is not about the bathroom. It is about what the bathroom has become a symbol of."
      },
      {
        "type": "p",
        "text": "The \"she smells\" shame compounds this. You walk her into a grocery store and you can feel the other shoppers noticing. You schedule a doctor visit and you want to apologize to the receptionist before your mother even sits down. You have an older sibling coming in from out of town and you are not sleeping for a week before the visit because you know what they will think when they hug her. None of this is vanity. It is the social membrane of being a daughter who is, by every external measure, failing at the one task daughters are supposed to be able to do. Which is keeping their mother clean."
      },
      {
        "type": "p",
        "text": "I want to name this out loud because it is almost never named. You are not ashamed of your mother. You are ashamed of the version of yourself that a Tuesday morning in that hallway is turning you into. That is what is actually hurting."
      },
      {
        "type": "h2",
        "text": "When Should I Stop Trying to Bathe My Parent at Home?"
      },
      {
        "type": "p",
        "text": "You should stop trying to bathe your parent at home when the bathing refusal has stopped being a behavioral problem and become a medical problem, and you should not wait for your own nervous system to collapse before you do."
      },
      {
        "type": "p",
        "text": "Here is the medical threshold that matters more than the smell. Chronic incomplete bathing in an elderly person with incontinence or limited mobility produces a predictable cascade. Urinary tract infections, which present differently in elders (confusion, aggression, falling, sudden worsening of dementia, not the classic burning and urgency). Skin breakdown in the groin and under skin folds. Pressure injuries where moist skin meets a chair cushion or a bed sheet for too many hours. Fungal infections. Open wounds that do not heal because the skin around them is compromised. Each of these can become a hospitalization. Each hospitalization in an elder with dementia typically drops their cognitive baseline, and the cognition lost to a hospital stay often does not come back."
      },
      {
        "type": "p",
        "text": "This is the real risk of the hallway stalemate. It is not that your mother will smell at Easter dinner. It is that the untreated hygiene situation is the runway to a UTI-induced delirium episode that puts her in Highline Medical Center's emergency department at two in the morning, and the hospital stay puts her in a rehab bed, and the rehab bed is the beginning of the end of her staying in her own apartment."
      },
      {
        "type": "p",
        "text": "Families almost always wait too long on this. They wait because they are still hoping to find the right script. They wait because they do not want to be the one to escalate care. They wait because escalating care feels like defeat. I want to be as honest as I am able to be here. Escalating care at the hygiene threshold is not defeat. Escalating care at the hygiene threshold is often the move that keeps your mother out of an emergency room for another six months and keeps her cognition intact enough to know you when you walk in the door."
      },
      {
        "type": "p",
        "text": "If you are crying on the hallway floor more than once a week, you are past the threshold. If you are finding yourself avoiding visits because you cannot bear the smell, you are past the threshold. If you are starting to think \"why do I care\" along with your mother, you are past the threshold. None of these are moral failures. They are information."
      },
      {
        "type": "h2",
        "text": "Why Can a Professional Caregiver Succeed When I Can't?"
      },
      {
        "type": "p",
        "text": "A professional caregiver can often bathe a parent with dementia when the adult child cannot, and the reason has nothing to do with skill. It has to do with the fact that a stranger does not trigger the role-reversal shame, does not carry the relational history, and does not have sixty years of mother-daughter tension in the bathroom with them."
      },
      {
        "type": "p",
        "text": "This is one of the most documented and least discussed truths in dementia caregiving. Post after post on AgingCare and r/CaregiverSupport and the Family Caregiver Alliance forums says some version of the same thing. Mom would not let me bathe her for a year. The home care aide walked in, and within three weeks Mom was showering twice a week with her. When families ask why, the answer is almost always that the aide was patient and kind, which is true, but it is incomplete. The deeper answer is that your mother's dignity is less threatened by nakedness in front of a kind stranger than it is by nakedness in front of her own child."
      },
      {
        "type": "p",
        "text": "Your mother is not being difficult. She is protecting something sacred about who she has been to you. When you insist on being her caregiver in the shower, you are asking her to let that sacred thing go, and her nervous system is refusing. This is not stubbornness. This is her trying to stay your mother in the one role she can still remember how to hold."
      },
      {
        "type": "p",
        "text": "Releasing the bathing task to someone else is often the single kindest thing an adult child can do for a parent with moderate to advanced dementia. You do not have to do everything yourself. You were never supposed to do everything yourself. The care model that says you should is a uniquely American export of rugged individualism onto an aging process that the rest of the world, and the rest of human history, handled through extended kinship and paid caregivers and community elders. You are not failing by accepting help. You are returning to the way humans have always handled this."
      },
      {
        "type": "h2",
        "text": "What Does Bathing Look Like in a Small Adult Family Home?"
      },
      {
        "type": "p",
        "text": "In a licensed adult family home in Washington State, bathing is not a battle that happens once or twice a week. It is a rhythm inside a day that is built around the resident's tolerance window."
      },
      {
        "type": "p",
        "text": "I can tell you what this looks like inside my own home in Burien. We have six private care suites. We know each resident's specific sensory triggers. One of our residents cannot tolerate overhead water, so she has a hand-held shower head and we rinse from below her shoulders only. Another resident becomes agitated in fluorescent light, so her bathing time is mid-morning with the bathroom overhead off and only the warm yellow vanity light on. A third resident responds well to a specific song from her own wedding playing from a small speaker while she is rinsed. A fourth prefers a full bed bath with no-rinse products on Mondays, Wednesdays, and Fridays, and a full shower only on Sundays when her daughter comes to visit because having her daughter waiting for her afterward is the motivation that works for her."
      },
      {
        "type": "p",
        "text": "None of this is magic. This is what a 1:3 caregiver-to-resident ratio, combined with staff continuity, allows. Staff who have been with a resident for months or years know the resident's bathing profile the way a good pediatrician knows a toddler's temperament. They know when the tolerance window is open. They know which approach works. They know how to pivot when today is a harder day than yesterday."
      },
      {
        "type": "p",
        "text": "In a larger facility with a 1:10 or 1:12 staff ratio, bathing is typically scheduled. There is a bath aide, there is a rotating shower day for each resident, and the resident gets the shower on the day and time that the staffing allows, regardless of whether her tolerance window is open that morning. That model is not cruel. It is what the math forces. But it is not the same as a small home model."
      },
      {
        "type": "p",
        "text": "Washington State licenses roughly three thousand adult family homes, the highest per-capita rate in the United States, and there are twenty-one licensed adult family homes in Burien alone. This is not an accident of geography. It is a deliberate state policy choice that recognizes the small home model is especially well-suited to exactly this kind of care. If you are a King County family trying to solve the bathing problem, you are in the part of the country with the most infrastructure for solving it."
      },
      {
        "type": "h2",
        "text": "How Do I Let Go of the Shame Without Letting Go of My Mother?"
      },
      {
        "type": "p",
        "text": "You let go of the shame by separating two things that have become fused in your chest. You are not your mother's smell. You are your mother's daughter. Those are different things."
      },
      {
        "type": "p",
        "text": "The way to let go of the shame is to stop measuring yourself against the impossible task of personally keeping a dementia patient clean while holding a job and raising your own kids and sleeping less than six hours a night. The way to hold on to your mother is to keep showing up in the room after someone else has done the bathing. To sit beside her in the chair after she is warm and clean and dressed in the sage cardigan she loves, and hold her hand, and watch the afternoon light move across the windowsill. To be her daughter in the part of the day where being her daughter is still possible. To outsource the part of the day that was breaking both of you."
      },
      {
        "type": "p",
        "text": "Many Burien families arrive at my door having already cried in that hallway a hundred times. They arrive thinking they have failed. What they have actually done is carried something for longer than a human body is designed to carry it. The fact that they are finally at my kitchen table asking about placement is not a failure. It is the beginning of a different way of loving their mother, one where they get to be her daughter again instead of the person she fights in the bathroom."
      },
      {
        "type": "p",
        "text": "If you are sitting in the hallway today, I want you to do three small things before you go to bed tonight. Write down the last time your mother was comfortable after a bath and what was different about that day. Call the Washington State Community Living Connections line at 1-844-348-5464 and ask what in-home bathing aide services your area supports, because you may be eligible for COPES-funded in-home care even before placement is on the table. And tell one person, a sibling, a spouse, a friend, that you have started to cry when you try to bathe your mother. Not to fix it. Just to say it. The shame of the hallway loses a lot of its power the moment one other person knows you have been sitting in it."
      },
      {
        "type": "p",
        "text": "You are not past caring. You are at the edge of what a single person is able to carry alone. Those are also different things."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How often does a person with dementia actually need to bathe?**"
      },
      {
        "type": "p",
        "text": "Not as often as families believe. Unless the person is incontinent or has an acute skin issue, a full bath or shower twice a week combined with daily personal hygiene (face, hands, underarms, peri-care) is typically sufficient for health. The daily shower model that most adults use is a cultural norm, not a medical requirement. Reducing expectations from daily to twice-weekly often defuses the battle without compromising health."
      },
      {
        "type": "p",
        "text": "**Is it safe to use no-rinse bathing products instead of a full shower?**"
      },
      {
        "type": "p",
        "text": "Yes. Commercial no-rinse body wash products are widely used in skilled nursing, hospice, and adult family home settings. They clean effectively and do not require water rinsing, which removes most of the sensory triggers (overhead water, temperature shock, wet floor balance risk) that drive bathing refusal in dementia. Many Washington State adult family homes use a combination of no-rinse bathing and full showers depending on the resident's tolerance that day."
      },
      {
        "type": "p",
        "text": "**At what stage of dementia does bathing refusal typically start?**"
      },
      {
        "type": "p",
        "text": "Bathing refusal most commonly appears at Stage 5 of the Global Deterioration Scale, which corresponds to moderate dementia. It tends to intensify through Stages 6 and 7. If a parent is refusing bathing in early-stage dementia (Stage 3 or 4), the cause is more often physical discomfort, depression, or a specific sensory fear, and may be resolvable without outside help. Moderate to advanced stage refusal usually requires a change of approach or a change of caregiver."
      },
      {
        "type": "p",
        "text": "**Does Medicaid pay for in-home bathing help in Washington State?**"
      },
      {
        "type": "p",
        "text": "Yes, for eligible families. Washington's COPES waiver, administered through DSHS, pays for in-home personal care including bathing assistance when a person meets functional and financial eligibility. Families can also access professional bathing through private-pay home care agencies in King County at rates typically between $38 and $45 per hour. Community Living Connections at 1-844-348-5464 can help families in Burien and South King County navigate which program fits."
      },
      {
        "type": "p",
        "text": "**How do I know if it is time to consider an adult family home instead of in-home help?**"
      },
      {
        "type": "p",
        "text": "Generally when the bathing issue is one of several care tasks that have become unmanageable, rather than the only issue. If your parent is also experiencing night wandering, medication refusal, falls, isolation, or escalating cognitive decline, an adult family home may offer a more sustainable structure than piecing together in-home help around increasingly complex needs. A tour of two or three local homes does not commit you to anything. It just gives you information."
      },
      {
        "type": "p",
        "text": "**Will my parent's hygiene actually improve in a care home?**"
      },
      {
        "type": "p",
        "text": "In most cases yes, often dramatically, within three to six weeks of placement in a small home with consistent staff. The combination of a stranger performing the care (which reduces role-reversal resistance), staff with specific dementia-care training, a predictable daily rhythm, and time-enough-to-wait-for-the-tolerance-window tends to resolve bathing refusal in most residents. Families commonly report that within a month their parent is bathing more regularly than they did at any point in the prior year."
      },
      {
        "type": "h2",
        "text": "Related Reading"
      },
      {
        "type": "p",
        "text": "If this article resonated, you may also find these helpful:"
      },
      {
        "type": "ul",
        "items": [
          "[Signs It's Time for Residential Care](blog-2026-04-16-signs-its-time-residential-care-burien.md). A practical companion piece on the other breaking-point moments families face before placement.",
          "[A Day in the Life at a Burien Adult Family Home](blog-2026-04-17-day-in-the-life-adult-family-home-burien.md). What daily care actually looks like inside a six-bed home, including bathing rhythms.",
          "[Ambiguous Loss and Visiting a Parent Who Doesn't Recognize You](blog-2026-04-22-ambiguous-loss-dementia-parent-burien.md). On the grief of dementia caregiving and how to visit a parent in moderate to advanced decline.",
          "[COPES, Medicaid, and Paying for an Adult Family Home in Burien](blog-2026-04-21-copes-medicaid-adult-family-home-burien.md). For families who need in-home bathing help now and are calculating long-term runway."
        ]
      },
      {
        "type": "p",
        "text": "For broader context on senior transitions, our sister site [Your Best Season](https://yourbestseason.com) has additional resources for families navigating this stage. When the time comes to think about the family home, [Your Next Step Home](https://yournextstephome.com) helps Washington families through that piece of the puzzle without pressure."
      },
      {
        "type": "h2",
        "text": "A Gentle Next Step"
      },
      {
        "type": "p",
        "text": "If you are in Burien, South King County, or anywhere in the Seattle metro area, and you are sitting in a hallway somewhere quietly falling apart because your mother will not let you bathe her, I would be honored to talk with you. Not to sell you anything. To sit at my own kitchen table with you, or on a phone call, and talk about what your mother actually needs right now. If our home in Burien is the right fit, we will talk about how a transition might look. If another home is a better match, I will help you figure out who. If you are not ready for placement and you just need a bathing aide twice a week through COPES or private pay, I will help you find one."
      },
      {
        "type": "p",
        "text": "You are not failing. You are learning that this task was never one person's job."
      },
      {
        "type": "p",
        "text": "[Schedule a visit to Burien Best Care Home](https://burienbestcarehome.com) or call us directly. We answer the phone."
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "*Resources mentioned in this article:*"
      },
      {
        "type": "ul",
        "items": [
          "Washington State Community Living Connections: 1-844-348-5464",
          "Alzheimer's Association WA State 24/7 Helpline: 1-800-272-3900",
          "DSHS Adult Family Home Locator: washington.gov"
        ]
      },
      {
        "type": "p",
        "text": "*Burien Best Care Home is a licensed adult family home in Burien, WA, serving families throughout King County. We accept private pay and Medicaid (COPES).*"
      },
      {
        "type": "h2",
        "text": "FAQ Schema Suggestion (for developer)"
      },
      {
        "type": "p",
        "text": "For AEO/GEO surfacing, implement JSON-LD FAQPage schema on this article including the six FAQ questions and answers above. Primary entity should be `Question`, with each `acceptedAnswer` carrying the full answer text. Schema helps Google and AI assistants surface this content in answer boxes and generative responses."
      }
    ]
  },
  {
    "slug": "ambiguous-loss-dementia-parent-burien",
    "title": "The First Time She Didn't Know Me: Ambiguous Loss, Dementia, and How to Visit a Parent Who Has Already Started to Leave",
    "description": "A Burien adult family home owner names the grief most families feel but cannot find words for. Ambiguous loss, the long goodbye, and how to keep visiting a parent with dementia when they do not recognize you anymore.",
    "date": "2026-05-22",
    "author": "Becca Pitts",
    "readingTime": "17 min",
    "tags": [
      "Memory Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is a Thursday afternoon in April. The cherry trees along 16th Avenue SW are dropping petals onto the sidewalk like confetti from a parade no one announced. She has brought her mother a small bouquet of them, wrapped in a paper towel, because her mother used to cut cherry blossoms from the tree in their front yard in Normandy Park every single spring of her childhood. She walks into the living room of the small house in Burien where her mother has lived for four months now. Her mother is in the rocker by the window with the afternoon light on her hair. Her mother looks up, smiles politely, and says:"
      },
      {
        "type": "p",
        "text": "\"Hi there, dear. Are you new here? You have kind eyes.\""
      },
      {
        "type": "p",
        "text": "And the daughter stands in the doorway holding the cherry blossoms and cannot speak for a second, because she has spent forty three years being known by this woman. She was known at the moment she was born. She was known when she lost her first tooth on a red-gravel playground in 1989. She was known at her wedding. She was known the morning her first son was born and her mother drove through a snowstorm from Normandy Park to Swedish First Hill to hold him. And now she is standing in a doorway holding cherry blossoms, and her mother has kind eyes but she does not know her."
      },
      {
        "type": "p",
        "text": "I want to talk to the woman in that doorway."
      },
      {
        "type": "p",
        "text": "I have watched this exact scene more than a hundred times from the kitchen of the small house I run in Burien, and every time, I feel it in my chest like it is the first time. You are not the first daughter to stand in my doorway holding something from your own childhood and realizing that the person you brought it for is not exactly the person in the rocker anymore. You will not be the last. And I need you to hear something that almost nobody said to me when I was standing in my own version of that doorway with my own parents a few years ago."
      },
      {
        "type": "p",
        "text": "What you are feeling has a name. It is not a failure of love. It is not a sign that you should stop visiting. And the visit you are about to have matters more than you think it does, in ways that have nothing to do with whether she remembers it afterward."
      },
      {
        "type": "h2",
        "text": "Why Does It Hurt This Much When My Parent Doesn't Recognize Me?"
      },
      {
        "type": "p",
        "text": "It hurts this much because you are grieving a person who is still alive, and that particular kind of grief has no ceremony attached to it. Psychologists call it **ambiguous loss**, a term the researcher Pauline Boss gave to this experience decades ago. Ambiguous loss is grief that does not resolve, because the person you are grieving is still physically in the room."
      },
      {
        "type": "p",
        "text": "With a death, the world knows what to do. People bring casseroles. Coworkers sign cards. There is a funeral and a rhythm to the days after. With ambiguous loss, there is no casserole. There is no card. There is only you, driving home on the 509 with cherry blossoms wilting in the cup holder, trying to figure out whether you are allowed to cry when nobody has technically died."
      },
      {
        "type": "p",
        "text": "You are allowed. You are grieving the version of your mother who knew your name. That version of your mother is gone. The woman in the rocker is a different woman, a woman who deserves her own kindness and her own cherry blossoms, but she is not the woman who drove through the snowstorm in 1998. That mother is gone even though this mother is still here. You are allowed to mourn her. You have to mourn her, because grief that does not get a ceremony tends to sit inside the body for years."
      },
      {
        "type": "p",
        "text": "In Washington State, more than one hundred and twenty thousand people are living with Alzheimer's disease right now, and roughly three hundred thousand King County residents are family caregivers of someone with some form of dementia. The research on this group is consistent. The ones who fare best emotionally are the ones who understand, explicitly, that what they are doing is grief work alongside caregiving work. The ones who collapse, quietly and late, are the ones who kept expecting to feel normal during a process that is not normal, and kept punishing themselves for feeling sad during what they told themselves should be a practical task."
      },
      {
        "type": "p",
        "text": "It is not a practical task. It is a grief. Name it as one."
      },
      {
        "type": "h2",
        "text": "What Is Ambiguous Loss, and Why Isn't My Family Seeing It?"
      },
      {
        "type": "p",
        "text": "Ambiguous loss is the particular form of grief that happens when a person is physically present but psychologically absent, or psychologically present but physically absent. In dementia, it is the first kind. Your mother is in the rocker by the window in Burien. She is also gone. Both sentences are true at the same time. Your brain does not know how to hold them both at once, so it flips back and forth between them and exhausts you."
      },
      {
        "type": "p",
        "text": "The reason your family is not seeing it is not because they do not care. It is because our culture has almost no language for this. When my neighbor down the street lost her husband to a heart attack in 2019, our whole block knew what to do. Food arrived. Lawn got mowed. Kids got invited over. When my friend across town watched her husband slowly disappear into Lewy body dementia between 2021 and 2025, nobody brought anything, because nobody knew he was gone yet. He was sitting at his kitchen table the whole time. People would ask, \"how is he?\" and she never knew how to answer, because the honest answer was \"he has been gone for a year and he is also eating toast.\""
      },
      {
        "type": "p",
        "text": "Your siblings probably do not see what you are carrying. Your friends probably do not see it. Your spouse may not see it unless you name it for them out loud. This is the reason ambiguous loss is the loneliest grief I have ever watched families carry. You are mourning, and the rest of the world is still expecting you to show up to the PTA meeting."
      },
      {
        "type": "p",
        "text": "Here is the permission I want to give you, directly, in plain English. You are allowed to cry on the drive home from visits. You are allowed to tell your brother, \"I lost Mom this year, even though she is still alive.\" You are allowed to grieve a different version of your mother every year for three or four years running, because dementia takes people in stages, and each stage is its own goodbye."
      },
      {
        "type": "h2",
        "text": "Does She Still Know It's Me, Even If She Can't Say My Name?"
      },
      {
        "type": "p",
        "text": "Often, yes, in the way that matters most. Cognitive memory and emotional memory live in different parts of the brain, and they do not fail at the same rate. Your mother may have lost the name, the date, the year, and the connection between your face and her daughter. What she almost certainly has not lost, especially in the early and middle stages, is the feeling of safety that your presence gives her nervous system."
      },
      {
        "type": "p",
        "text": "Research on dementia and emotional memory, including widely cited work from the University of Iowa, has shown that people with significant cognitive impairment can retain the emotional imprint of a visit long after they have forgotten the visit itself occurred. A daughter who comes on Thursday afternoons and is warm and patient leaves her mother in a calmer, more peaceful state for hours after she has left, even if the mother cannot, ten minutes later, tell anyone that her daughter was just there."
      },
      {
        "type": "p",
        "text": "This is the single most important first-principle shift for families standing in my doorway, and I say it slowly every time so it lands. The point of the visit is not whether your mother remembers the visit. The point of the visit is that during the visit, she felt loved. That hour was real while it was happening. Forgetting does not erase it from having existed."
      },
      {
        "type": "p",
        "text": "Think about the last truly beautiful meal you ate. Can you name every dish? Probably not. Can you recall the exact conversation? Probably not. Does that mean the meal did not happen, or that it did not nourish you? Of course not. You were fed. The fact that you cannot produce the menu on command does not undo the fact that you sat down hungry and got up full."
      },
      {
        "type": "p",
        "text": "Your visits feed her that way."
      },
      {
        "type": "h2",
        "text": "How Do I Visit a Parent With Dementia Without Breaking My Own Heart?"
      },
      {
        "type": "p",
        "text": "You stop trying to be recognized, and you start trying to be present. That is the whole shift. Almost every piece of heartbreak I have watched families bring to my door was downstream of one quiet expectation: that if they did it right, if they brought the right photo album, if they said the right phrase, if they wore the right perfume, their mother would look up and say their name and the old relationship would come back for ten minutes."
      },
      {
        "type": "p",
        "text": "It will not. Chasing that recognition is what breaks you. Letting it go is what saves you."
      },
      {
        "type": "p",
        "text": "Here is what I have seen work, from the kitchen of this house, across hundreds of Thursday afternoons."
      },
      {
        "type": "p",
        "text": "Walk in like a beloved friend, not a long-lost daughter. Friends do not require recognition. Friends get to be warm to each other without history. When your mother says \"are you new here,\" the right answer is not \"Mom, it is me, Sarah, your daughter, I was here on Tuesday.\" The right answer is something like \"I am. I am Sarah. I brought you some cherry blossoms, because they are blooming on 16th right now and I thought you might like them.\" You gave her your name, gently, without the weight of her failure to produce it. You gave her a reason to be happy you came. You did not ask her to climb a cliff she cannot climb."
      },
      {
        "type": "p",
        "text": "Sit beside her rather than across from her. Faces are harder to process than a warm presence at the shoulder. Sit in the other chair in the sunlight. Hold her hand. Look at the same window she is looking at. You do not need to face each other for the love to move between you."
      },
      {
        "type": "p",
        "text": "Bring a sensory anchor, not a memory test. A sweater that smells like cedar from her own closet. A cup of the exact lipton tea she drank for forty years. A song she used to hum in the kitchen. The smell of lemon you peel slowly at the table. A small vase of the flowers from the tree she grew up with. These things travel to older, deeper parts of the brain that dementia has not yet touched. Photographs, on the other hand, can backfire in later stages, because they ask her to identify people and she cannot."
      },
      {
        "type": "p",
        "text": "Tell her what is happening right now, gently, over and over if she needs it. \"We are having tea.\" \"The sun is warm today.\" \"Those are cherry blossoms.\" Orientation to the present moment is one of the most loving things you can give someone with dementia, and it does not require her to remember anything."
      },
      {
        "type": "p",
        "text": "When she drifts into an old year, go with her. If she tells you the baby is sleeping and the baby has been a grandmother for thirty years, do not correct her. Ask what the baby is like. Ask if the baby slept through the night. You are not lying. You are meeting her where she is living, which is an act of profound respect. The Alzheimer's Association calls this therapeutic companionship. I call it being kind."
      },
      {
        "type": "p",
        "text": "Give yourself permission to end the visit while it is still good. Thirty minutes of warm presence is worth more than ninety minutes that end with her tired and agitated because you were trying to prove to yourself that you were a devoted daughter. She does not need you to prove anything. She needs you to come back."
      },
      {
        "type": "h2",
        "text": "What Does the Right Environment Look Like for Visits Like This?"
      },
      {
        "type": "p",
        "text": "It looks like a home, not a hallway. This is the structural reason a small adult family home outperforms a large memory care building on ambiguous-loss visits in ways nobody puts on the brochure."
      },
      {
        "type": "p",
        "text": "In a sixty-unit memory care wing, your mother has to navigate a corridor, a lobby, a shared dining hall, name-tagged staff she does not recognize from one day to the next, and a care ratio of roughly one caregiver to every eight to twelve residents. By the time you sit down with her, her nervous system has already been stretched by the ambient stimulation of the building. Her behavior in the visit will reflect that. She will be more agitated, more confused, and less able to feel your warmth, because she is already operating at the edge of her tolerance before you walk in."
      },
      {
        "type": "p",
        "text": "In a six-bed adult family home in Burien, the ratio is one caregiver to three residents. The caregivers are the same caregivers day after day, month after month. They know your mother's history, her voice, her preferred chair, the way she likes her tea, the hour of the afternoon when she gets restless. When you walk in, they can tell you in one sentence what kind of day she is having before you have even taken your coat off. The space is a living room, not a lobby. The kitchen is six feet away. Lunch is something she participates in, not a cafeteria she gets wheeled to."
      },
      {
        "type": "p",
        "text": "That is not luxury. That is the architecture of a good ambiguous-loss visit. Your mother has not been depleted by the building before you arrive, so she has more of herself available for you when you sit down."
      },
      {
        "type": "p",
        "text": "There are twenty one licensed adult family homes in Burien, most of them six-bed. Washington State has more licensed adult family homes per capita than any other state in the country, roughly three thousand statewide, because our state made a deliberate policy choice decades ago to invest in small-scale residential care over large facilities. Families in King County have an option most American families do not have. You can place your mother in a house with five other residents and a consistent team of caregivers, for roughly half what a dementia-wing memory care unit would cost, on a Medicaid waiver if you need it. That option exists because of our state, not in spite of it."
      },
      {
        "type": "h2",
        "text": "What Do I Do Tonight, Before I Go to Bed?"
      },
      {
        "type": "p",
        "text": "Three small things."
      },
      {
        "type": "p",
        "text": "First, give yourself a minute alone in the car, or in the bathroom, or on the back porch, and say the sentence out loud that nobody around you is saying. *I am grieving my mother even though she is still alive.* Say it until you believe it. The sentence is not disloyal. The sentence is the beginning of being able to carry this without it hollowing you out."
      },
      {
        "type": "p",
        "text": "Second, write down one thing your mother did today that was still her. Not the confused things. Not the ways she has changed. One gesture, one turn of phrase, one laugh, one moment when her old self flickered through. Keep a small notebook in the glovebox of your car. Over a year, those gestures become a ledger of her that you will treasure later in ways you cannot imagine right now."
      },
      {
        "type": "p",
        "text": "Third, tell one person in your life what you are carrying. A spouse. A sibling. A friend who has been through it. Your pastor. A therapist who knows dementia grief, and there are several in the Burien and South King County area who specialize in this exact work. Ambiguous loss metastasizes when you carry it alone. It softens when you say it out loud to someone who will not try to fix it."
      },
      {
        "type": "p",
        "text": "If you want a longer conversation about how memory care looks inside a small adult family home in Burien, or whether our home might be the right fit for your mother at this stage of her disease, I am here. You can reach me any day of the week. I will not sell you anything. I will sit at my own kitchen table with you and talk about what your mother needs right now. If our home is not the right fit, I will help you figure out who is. That is what this work is."
      },
      {
        "type": "p",
        "text": "You are not failing her. You are learning a new way to love her, one that does not depend on her being able to say your name back to you. That love counts. It is the hardest love there is, and it is the most generous one a daughter can give."
      },
      {
        "type": "p",
        "text": "She has kind eyes today. She got those eyes from being loved, once, by the woman standing in the doorway holding cherry blossoms. That woman did that. Nothing takes that from her. Not dementia, not time, not the long goodbye."
      },
      {
        "type": "p",
        "text": "Come back on Thursday. Bring something that smells like home. Sit in the sunlight beside her. Stay thirty minutes. Leave while she is still smiling. Drive home on the 509 and cry if you need to cry, because you are a daughter and this is grief and you are allowed."
      },
      {
        "type": "p",
        "text": "She will not remember that you came. But for one hour on a Thursday afternoon in April, in a small house in Burien with cherry blossoms on the table, she was safe. She was warm. She was loved."
      },
      {
        "type": "p",
        "text": "That hour was real."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**Q: At what point in dementia do people stop recognizing their adult children?**"
      },
      {
        "type": "p",
        "text": "A: There is no single point, and the loss of recognition is rarely a clean on-off switch. Most families notice intermittent recognition loss in the moderate stage of Alzheimer's disease, roughly three to six years after diagnosis, though the range is wide. Your mother may not know your name on a Thursday and know it on a Sunday. She may know your face but not your relationship to her. This fluctuation is normal and does not mean she is getting rapidly worse. What matters more than recognition is her emotional response to your presence, which tends to survive cognitive recognition by months or years."
      },
      {
        "type": "p",
        "text": "**Q: Should I correct my mother when she thinks I am her sister or her own mother?**"
      },
      {
        "type": "p",
        "text": "A: No. Correction tends to cause distress without producing lasting orientation, because she cannot hold the correction long enough to benefit from it. Most dementia care specialists recommend a practice sometimes called therapeutic companionship or validation. Meet her in the reality she is living in right now. If she thinks you are her sister, be her sister for the afternoon. If she thinks the baby is sleeping, ask what the baby is like. You are not lying to her. You are declining to drag her into a reality she cannot reach, and offering to sit with her in the one she can."
      },
      {
        "type": "p",
        "text": "**Q: Does visiting still matter if she does not remember the visit afterward?**"
      },
      {
        "type": "p",
        "text": "A: Yes, profoundly. Cognitive memory and emotional memory live in different parts of the brain and fade at different rates. Your mother may not be able to tell anyone that you were just there, but her nervous system holds the calm of your presence for hours afterward. Families of residents at small adult family homes in Burien and throughout King County consistently report that their loved one is more peaceful, sleeps better, and experiences fewer episodes of agitation on the days they have had a visit, even when they cannot name the visitor."
      },
      {
        "type": "p",
        "text": "**Q: What is the difference between memory care in an adult family home and memory care in a larger facility?**"
      },
      {
        "type": "p",
        "text": "A: Staffing ratio, consistency of caregivers, and environment. A licensed adult family home in Washington typically has a ratio of one caregiver to three residents, compared to one caregiver to eight to twelve residents in a larger memory care wing. The same small team of caregivers is there day after day, which matters enormously for someone with dementia who cannot form new relationships easily. The physical space is a residential home rather than a clinical corridor, which reduces ambient stimulation and agitation. For families of a parent in the moderate to advanced stages of dementia, the small home model often produces noticeably better day-to-day quality of life."
      },
      {
        "type": "p",
        "text": "**Q: How do I know when it is time to move my parent with dementia to residential care?**"
      },
      {
        "type": "p",
        "text": "A: The reliable signs are safety concerns that cannot be solved by more help at home (wandering, unsafe use of appliances, falls, medication errors), caregiver collapse (you are exhausted beyond sustainability), and escalating behavioral symptoms (agitation, sundowning, aggression) that are outgrowing what a family member can manage in a home setting. We wrote a longer guide to this question in our post on the signs it is time for residential care, linked on our blog page at burienbestcarehome.com."
      },
      {
        "type": "p",
        "text": "**Q: Is there a support group in Burien for families going through ambiguous loss with a parent who has dementia?**"
      },
      {
        "type": "p",
        "text": "A: Yes, several. The Alzheimer's Association Washington State chapter runs a free 24/7 helpline at 1-800-272-3900 and moderates both in-person and online support groups for King County caregivers. Community Living Connections at 1-844-348-5464 can connect you to additional King County resources. For grief counseling specific to dementia, there are therapists in the Burien, Normandy Park, and Des Moines area who specialize in anticipatory and ambiguous grief. We are happy to share our informal referral list if you call."
      },
      {
        "type": "p",
        "text": "*For SEO and AI discoverability, this FAQ section should be marked up with JSON-LD FAQPage schema in the site's head or body using the schema.org FAQPage specification. Each question-answer pair becomes a separate Question and Answer entity, allowing Google and AI search surfaces to cite individual Q&As directly.*"
      },
      {
        "type": "h2",
        "text": "Related Reading on This Site"
      },
      {
        "type": "ul",
        "items": [
          "**If the decision is still ahead of you:** [Signs It Is Time for Residential Care](blog-2026-04-16-signs-its-time-residential-care-burien.md)",
          "**If you are researching homes in Burien:** [A Day in the Life at a Burien Adult Family Home](blog-2026-04-17-day-in-the-life-adult-family-home-burien.md)",
          "**If you are three weeks into placement and working out your rhythm:** [How Often Should I Visit My Parent in an Adult Family Home?](blog-2026-04-18-visiting-parent-adult-family-home-burien.md)",
          "**If she is still in sundowning at home:** [When Sundowning Becomes the Breaking Point](blog-2026-04-10-sundowning-breaking-point-dementia-burien.md)",
          "**For the broader conversation about aging and identity:** Your Best Season, Becca's senior transitions education platform at [yourbestseason.com](https://yourbestseason.com)",
          "**If the family home conversation is on the horizon:** Your Next Step Home, for Washington families navigating real estate transitions at [yournextstephome.com](https://yournextstephome.com)"
        ]
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "*Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions.*"
      },
      {
        "type": "p",
        "text": "*Burien Best Care Home is a licensed six-bed adult family home in Burien serving King County families with long-term residential care, memory and dementia care, short-term and respite care, and adult day care. We accept Medicaid. To schedule a tour or ask a question about whether our home might be the right fit for your parent, visit [burienbestcarehome.com](https://burienbestcarehome.com) or call anytime.*"
      }
    ]
  },
  {
    "slug": "copes-medicaid-adult-family-home-burien",
    "title": "When Mom's Money Runs Out: The Honest Guide to COPES, Medicaid, and Paying for an Adult Family Home in Burien, WA",
    "description": "How the Washington COPES Medicaid waiver helps families pay for an adult family home in Burien. Who qualifies, what it covers, and how to start, in plain language.",
    "date": "2026-05-15",
    "author": "Becca Pitts",
    "readingTime": "25 min",
    "tags": [
      "Paying for Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is 10:47 on a Tuesday night. You have Mom's bank statements spread across the kitchen table, a legal pad with a column of numbers you have scratched out and rewritten three times, and a spreadsheet glowing on your laptop that you do not remember opening. Your coffee is cold. The dog is asleep. Your husband went to bed an hour ago and said the thing husbands say, which is that we will figure it out in the morning."
      },
      {
        "type": "p",
        "text": "You did the math twice because you did not believe it the first time."
      },
      {
        "type": "p",
        "text": "Mom has $84,000 left. The assisted living in Des Moines is $6,300 a month. That is thirteen months. Thirteen months, and then what."
      },
      {
        "type": "p",
        "text": "You pulled up Reddit and typed \"what happens when mom runs out of money\" into the search bar, and the top result was an AgingCare thread where a woman in California wrote that when the money runs out the facility starts discharge proceedings, and once the discharge is final they do not hear from her again unless money is owed. You read that sentence three times. You closed the laptop. You opened it again. You started typing \"Medicaid\" into the search bar and then you stopped, because Medicaid is the word your mother spent forty years telling you was for other people."
      },
      {
        "type": "p",
        "text": "I want to talk to you at that kitchen table tonight."
      },
      {
        "type": "p",
        "text": "My name is Becca Pitts, and I run Burien Best Care Home, a six-bed adult family home on a quiet street in Burien, Washington. I have walked roughly a hundred families through the exact calculation you just did at your kitchen table. I have watched the same look cross the same faces. And I am writing this article because almost everything you are afraid of tonight is either not true in Washington, or is true but is solvable, and you do not know that yet because nobody has sat down with you and explained how the system actually works here."
      },
      {
        "type": "p",
        "text": "Here is the short version, and then we will do the long version. In Washington State, a program called COPES pays for adult family home care for seniors who qualify. It is a real program. It has real money behind it. It is not a last resort and it is not a shameful thing. It was specifically designed for the situation you are in right now. The application takes forty-five days. Your mother's home is protected. Your father, if he is still living, is protected. And the small adult family home your mother may actually be happier in costs Medicaid less than half of what a nursing home costs, which is why Washington State funds adult family homes generously and why this works out, in the end, for almost everyone except the big-box nursing home chains."
      },
      {
        "type": "p",
        "text": "That is the short version. Now, the long version."
      },
      {
        "type": "h2",
        "text": "Why Is This Moment Hitting Me So Hard?"
      },
      {
        "type": "p",
        "text": "You are not in a financial crisis. You are in an identity crisis dressed up as a financial crisis, and you deserve to know the difference."
      },
      {
        "type": "p",
        "text": "Your mother worked. Or your father worked, and your mother worked harder than anyone gave her credit for. They paid off a house. They saved. They taught you, in a thousand small ways, that people who plan ahead do not need help from the government. Needing help was something that happened to other people. Asking for help was weakness."
      },
      {
        "type": "p",
        "text": "And now you are sitting at the kitchen table at 10:47 on a Tuesday night calculating that everything your parents built to keep themselves out of this moment will be gone in thirteen months, and you are about to apply for the thing your mother told you was for other people, on her behalf, without her full blessing, because she does not fully understand what is happening and she would rather die broke in her own bed than accept a single dollar of Medicaid money."
      },
      {
        "type": "p",
        "text": "That is the real weight on your chest. It is not the spreadsheet. It is the feeling that you are undoing your parents' life's work in a single application. It is the feeling that you are admitting, on the official state record, that the family is out of options."
      },
      {
        "type": "p",
        "text": "I want to name this directly, because almost no financial-advice article names it directly. The grief you are feeling tonight is not about money. It is about the story your family told itself about who you were. You were the family that took care of its own. You were the family that did not take handouts. And you are realizing, in the kitchen light at 10:47 on a Tuesday, that the story was a kindness your parents told themselves during a long era of their lives when American long-term care was not yet what it has become, and the story is not the same story anymore."
      },
      {
        "type": "p",
        "text": "The story is not the same story anymore because nursing home care in King County now costs $137,000 a year. Because the average caregiver spends $7,200 a year of her own money on her parent and has cut her work hours or left her job entirely. Because a middle-class person who lived exactly the life your mother lived can now burn through fifteen years of savings in six years of care."
      },
      {
        "type": "p",
        "text": "You are not failing your parents. The American middle-class plan for aging failed your parents. What you are doing tonight is catching them before they fall through the gap. That is love. Medicaid is the net. Your job is to help them find it."
      },
      {
        "type": "h2",
        "text": "What Is COPES, and Why Does Washington Have It?"
      },
      {
        "type": "p",
        "text": "COPES stands for Community Options Program Entry System, and it is a Washington State Medicaid waiver program that pays for long-term care services in your home, a family member's home, an adult family home, or an assisted living facility. It is the program most Washington seniors use when their private money runs out and they still want to live in a small, home-like setting rather than a large institutional nursing home."
      },
      {
        "type": "p",
        "text": "Washington is unusual, and I want you to understand why that matters. Most states in the country run their Medicaid long-term care program primarily through nursing homes, because nursing homes are what the federal Medicaid system was originally built around in 1965. Washington made a deliberate policy choice decades ago to invest in what the state calls community-based alternatives, which in plain language means Washington would rather pay for your mother to live in a six-bed adult family home in Burien than in a 120-bed nursing home in Tukwila, because the small home costs the state less, the outcomes are better, and the residents are happier."
      },
      {
        "type": "p",
        "text": "That is why COPES exists. Washington funds it because Washington wants your mother in the adult family home. The adult family home costs Medicaid roughly $4,500 to $5,500 a month. The nursing home costs Medicaid roughly $10,000 to $12,000 a month. The state has done the math and the state would like you to do the math too."
      },
      {
        "type": "p",
        "text": "This is also why Washington has roughly 3,000 licensed adult family homes, the highest per-capita concentration in the United States, with 21 of them in Burien alone. Our state built the infrastructure because our state decided, policy-wise, that this was the right way to care for aging adults."
      },
      {
        "type": "p",
        "text": "You are not sneaking into a program. You are using a program the state built for you."
      },
      {
        "type": "h2",
        "text": "Who Qualifies for COPES in Washington?"
      },
      {
        "type": "p",
        "text": "COPES has two eligibility tests, and your mother has to pass both of them. Financial eligibility, and functional eligibility."
      },
      {
        "type": "p",
        "text": "Financial eligibility in 2026 works like this. Your mother's gross monthly income must be at or below $2,982. Her countable assets must be at or below $2,000. Some assets do not count, and we will go through those in a minute because this is where most of the fear lives."
      },
      {
        "type": "p",
        "text": "Functional eligibility is a separate assessment, and it is just as important. A DSHS case manager will evaluate your mother using a tool called the CARE assessment, and she has to demonstrate that she needs substantial help with at least two activities of daily living, such as bathing, dressing, toileting, transferring, eating, or mobility. Most families going through placement in an adult family home meet this threshold easily. In fact, if your mother is a candidate for an adult family home at all, she almost certainly qualifies functionally. The financial test is the one that causes the anxiety."
      },
      {
        "type": "p",
        "text": "Let me walk through the financial test honestly, because this is where most of the internet fails you."
      },
      {
        "type": "h2",
        "text": "What Counts as an Asset, and What Does Not?"
      },
      {
        "type": "p",
        "text": "Not everything your mother owns counts toward the $2,000 asset limit. A lot of things are exempt, and the exemptions are often more generous than families expect."
      },
      {
        "type": "p",
        "text": "The house your mother lives in is exempt, provided your father still lives there, or a disabled child of any age lives there, or a child under 21 lives there. If your mother is moving into an adult family home and selling the house is on the table, that is a conversation for a different article, and it is one I am glad to have with you later. There is a home equity cap, which in 2026 is generally around $752,000 of equity, higher in some cases. For most Washington families, the home equity exemption is not the problem."
      },
      {
        "type": "p",
        "text": "One car is exempt, regardless of value. If your mother has one vehicle, it does not count."
      },
      {
        "type": "p",
        "text": "Personal belongings are exempt. Her wedding ring, her furniture, her clothing, her photographs. The state is not going to inventory her jewelry box."
      },
      {
        "type": "p",
        "text": "Prepaid funeral and burial plans are exempt up to certain limits, which means your family can spend down a portion of her assets by prepaying her funeral, and that money is protected and it comes out of the asset calculation. Most Washington funeral homes know exactly how to structure this."
      },
      {
        "type": "p",
        "text": "Term life insurance is exempt. Whole life insurance with a cash value above $1,500 is not exempt, and the cash value counts. This is the one that trips families up. If your mother has a $50,000 whole life policy she has been paying on since 1978, the cash value of that policy counts as an asset."
      },
      {
        "type": "p",
        "text": "A small amount of money in the bank is allowed, and it is where the $2,000 asset limit lives. Checking account, savings account, CDs, money market accounts, stock and bond accounts, IRAs that are not in payout status, and most other liquid accounts all count."
      },
      {
        "type": "p",
        "text": "What this means, practically, is that for a lot of Washington seniors who own their home and drive one car, most of their wealth is already either exempt or quickly spendable on legitimate purposes. The asset panic usually shrinks substantially once you actually sit down and list what counts and what does not."
      },
      {
        "type": "p",
        "text": "If your mother has a higher-value estate with substantial liquid savings, investment accounts, or a whole life policy with a big cash value, this is where an elder law attorney becomes worth their fee. Washington has several elder law attorneys who specialize in Medicaid planning, and a one-hour consultation at around $350 will often save your family tens of thousands of dollars. I am happy to recommend names in King County if you call me."
      },
      {
        "type": "h2",
        "text": "What Is the Spend-Down, and What Can I Actually Do with the Money?"
      },
      {
        "type": "p",
        "text": "The spend-down is the process of reducing your mother's countable assets below the $2,000 threshold by spending her money on permissible things. This is not fraud. This is not hiding assets. This is using her own money to pay for things that are exempt from Medicaid's calculation, which Washington State explicitly allows and the DSHS caseworker will walk you through."
      },
      {
        "type": "p",
        "text": "Legitimate spend-down categories that I see families use all the time include: paying off her mortgage or home equity loan if she still has one, paying off her credit card debt and medical bills, paying off her car loan, home repairs and improvements on the exempt home, prepaying her funeral and burial, buying a new car if her current one is unreliable, buying medical equipment and mobility aids, buying hearing aids and dentures and glasses that Medicare does not cover well, and paying for care she has already received from family caregivers under a formal personal care agreement."
      },
      {
        "type": "p",
        "text": "That last one is important. If you have been providing unpaid care to your mother for the last two years, Washington allows a properly drafted personal care agreement to compensate you retroactively and going forward, and those payments are not considered gifts and do not trigger the lookback period. This is another place where an elder law attorney pays for themselves many times over."
      },
      {
        "type": "p",
        "text": "What you cannot do is give the money away to family members, pay for a grandchild's college tuition, or transfer assets into a trust without following very specific rules. Those actions trigger the Medicaid lookback period, which brings us to the next fear."
      },
      {
        "type": "h2",
        "text": "What Is the Lookback Period, and Should I Be Afraid of It?"
      },
      {
        "type": "p",
        "text": "Washington Medicaid reviews the last 60 months of your mother's financial records when she applies for COPES. This is called the lookback period. The reason the state does this is to catch people who tried to give away their money to qualify for Medicaid, which is a thing that used to be common before the rule tightened in 2006."
      },
      {
        "type": "p",
        "text": "Here is what the lookback actually looks for. Gifts. Assets transferred for less than fair market value. Money moved into irrevocable trusts. Property sold to a family member below market price."
      },
      {
        "type": "p",
        "text": "Here is what the lookback does not penalize. Legitimate spending. Medical bills. Home repairs. Car purchases. Paying off debt. Prepaying a funeral. Paying a caregiver under a formal personal care agreement. Normal household expenses. Gifts to charity that look like the gifts she has been making for twenty years."
      },
      {
        "type": "p",
        "text": "If the lookback finds disqualifying transfers, the penalty is a period of Medicaid ineligibility calculated based on the size of the transfer divided by the state's average nursing home private-pay rate. It is not a permanent disqualification. It just delays the start of coverage. But it can delay coverage by months, which is why you want to be careful about what you do in the five years before an application."
      },
      {
        "type": "p",
        "text": "Practically, for most families, the lookback is not a problem. Your mother has been living a normal life, paying her bills, occasionally buying her grandchildren birthday presents, and occasionally writing a check to her church. None of that is a problem. The problem would be if, three years ago, she transferred $100,000 to you with the explicit purpose of getting it out of her estate so she could qualify for Medicaid. That would be a problem. Normal spending is not."
      },
      {
        "type": "p",
        "text": "If your family has done any large transfers in the last five years that you are worried about, call an elder law attorney before you file the application. Do not guess. The attorney will tell you in twenty minutes whether you have a problem, and if you do, what to do about it."
      },
      {
        "type": "h2",
        "text": "What If Dad Is Still Living at Home?"
      },
      {
        "type": "p",
        "text": "If your father is still alive and still living in the family home, Washington protects him. This is one of the most important things to understand about the COPES application, and it is the place where I see families almost cry with relief when they hear it for the first time."
      },
      {
        "type": "p",
        "text": "The home your father lives in is completely exempt. The state will not force the sale of the house while he is living in it. There is no lien, no clawback, no seizure while he is alive and living there."
      },
      {
        "type": "p",
        "text": "Your father is also allowed to keep a protected amount of the couple's combined assets, called the Community Spouse Resource Allowance, or CSRA. In 2026, this amount is $162,660. That means if your parents have $200,000 in savings when your mother applies for COPES, your father gets to keep $162,660 and the remaining $37,340 is what needs to be spent down before your mother qualifies."
      },
      {
        "type": "p",
        "text": "Your father also gets to keep a protected amount of monthly income called the Minimum Monthly Maintenance Needs Allowance, which in Washington in 2026 is approximately $2,555 per month, higher if he has documented shelter costs. If your mother's Social Security and pension are the family's primary income, some of that income stays with your father so he can continue to pay the mortgage, the utilities, and the grocery bill."
      },
      {
        "type": "p",
        "text": "The practical takeaway is that applying for Medicaid on your mother's behalf does not strip your father. The system was designed, on purpose, to keep him in his home with enough money and enough income to live on. You are not impoverishing him. You are using a program that was specifically designed to protect him."
      },
      {
        "type": "h2",
        "text": "How Long Does the Application Take?"
      },
      {
        "type": "p",
        "text": "Standard COPES applications take up to 45 days. Applications that require a disability determination can take up to 90 days. The clock starts the day your complete application is received by DSHS, which is why accuracy on the first filing matters more than speed."
      },
      {
        "type": "p",
        "text": "Forty-five days is a long time when your mother is already in a private-pay adult family home burning through $5,500 a month. This is the gap that causes the most panic, and it is the one you need to plan for."
      },
      {
        "type": "p",
        "text": "Here is the practical playbook for the 45-day gap. Your mother's private pay continues during the application period. You are responsible for covering her care during those 45 days. If she has the money, this is relatively straightforward. If she is nearly out of money, we need to have a different conversation, and the sooner the better."
      },
      {
        "type": "p",
        "text": "Some adult family homes, including mine, will accept a resident on a pending COPES application when we have high confidence the application will be approved, with a written agreement that private pay covers the gap and Medicaid reimbursement kicks in when approved. This is not every home, and it is not offered to every family, but for families with well-documented functional and financial eligibility, it is a real option. I say yes to this about half the time. I say no when the documentation is not there yet or when the clinical needs are outside what our home can safely provide."
      },
      {
        "type": "p",
        "text": "Other adult family homes only accept residents on an already-approved COPES authorization, which means you need to secure placement at a private-pay home for the 45-day window and then transition. This is workable but it costs money and it is stressful for the resident."
      },
      {
        "type": "p",
        "text": "The best thing you can do is file the application before the money runs out, not after. If your mother has nine months of private-pay money left, you should file now, not in month eight. Starting the clock early is the single highest-leverage thing you can do, because COPES eligibility is measured as of the application date, not the approval date. File now. Spend down during the 45 days. Qualify retroactively on the date of filing if everything checks out."
      },
      {
        "type": "h2",
        "text": "What If I Hit the COPES Waitlist?"
      },
      {
        "type": "p",
        "text": "COPES has an enrollment cap of roughly 62,450 participants per year. When the cap is hit, new applicants go on a waitlist. This is the second panic point for families, and I want to address it directly."
      },
      {
        "type": "p",
        "text": "In practice, Washington has historically managed COPES funding at levels that keep the waitlist short. In boom budget years it is nonexistent. In tight budget years it can be weeks to months. The state has not, to my knowledge, had a years-long COPES waitlist in the last decade, which makes Washington extraordinarily good among states on this dimension."
      },
      {
        "type": "p",
        "text": "If your mother hits a waitlist, the first thing to do is call DSHS at 1-877-501-2233 and ask whether she qualifies for Nursing Home Medicaid, which is an entitlement program with no waitlist. If she qualifies for that level of care, the state must cover her. This is sometimes used as a bridge while the COPES slot opens up, although it can come with unwanted pressure to actually enter a nursing home rather than an adult family home, which is why I would rather help you avoid the waitlist in the first place by filing early."
      },
      {
        "type": "p",
        "text": "If you are within sight of the money running out and you are nervous about timing, call me. I have navigated the timing on this with enough families that I can usually help you figure out the order of operations that keeps your mother in the right placement without a coverage gap."
      },
      {
        "type": "h2",
        "text": "How Do I Actually File the Application?"
      },
      {
        "type": "p",
        "text": "You can apply for COPES in four ways."
      },
      {
        "type": "p",
        "text": "You can apply online through Washington Connection at washingtonconnection.org, which is the state's main public benefits portal. This is the fastest path, and most families I work with use it."
      },
      {
        "type": "p",
        "text": "You can apply by phone by calling DSHS at 1-877-501-2233, which will get you routed to your local Home and Community Services office. The King County office handles Burien, Des Moines, SeaTac, Normandy Park, White Center, and the surrounding South King County communities."
      },
      {
        "type": "p",
        "text": "You can apply in person at a DSHS Community Services Office. There is one in Renton and one in Federal Way that serve most Burien families."
      },
      {
        "type": "p",
        "text": "You can apply by mail or fax using the paper application, which DSHS will send you on request."
      },
      {
        "type": "p",
        "text": "Before you apply, gather the documents. Social Security card, Medicare card, state ID, proof of citizenship or lawful presence, the last five years of bank statements for all accounts, the last five years of tax returns, any life insurance policies, any trust documents, the deed to the house, the title to any vehicles, and documentation of all monthly income. Having all of this in one folder before you submit will save you weeks."
      },
      {
        "type": "p",
        "text": "A DSHS case manager will contact you to schedule a CARE assessment for the functional eligibility piece. This can be done in person at the home where your mother is currently living, whether that is her own home, your home, or an adult family home on a pending application. The case manager will evaluate her ADLs, her cognition, and her care needs, and will determine the level of care COPES will fund."
      },
      {
        "type": "p",
        "text": "The approval letter, when it comes, will specify the monthly COPES payment amount, which will be based on the CARE assessment level and the service setting. For an adult family home placement in King County, this typically runs between roughly $4,500 and $5,500 per month all-in for room, board, and care, which is usually less than what the same resident was paying private-pay in an assisted living facility. Your mother may actually save money."
      },
      {
        "type": "h2",
        "text": "How Does COPES Work Specifically at an Adult Family Home in Burien?"
      },
      {
        "type": "p",
        "text": "Once COPES approves your mother and she moves into a Medicaid-contracted adult family home, the payment structure is simple. The state pays the home a daily rate. Your mother contributes what is called her participation, which is most of her monthly income minus a small personal needs allowance of about $71.62 per month in 2026 that she gets to keep for haircuts, sodas, new slippers, gifts to the grandchildren, and anything else she wants to spend it on."
      },
      {
        "type": "p",
        "text": "There is no more billing. No more calculating. No more month-to-month dread. The check comes from the state every month. The personal needs allowance comes out of her Social Security. Your mother has a home, her care is covered, and you have your evenings back."
      },
      {
        "type": "p",
        "text": "Burien Best Care Home accepts Medicaid for qualifying residents, and we accept COPES placements. We are a small home. We have six beds, private rooms, and semi-private bathrooms shared with only one other resident. Our staff-to-resident ratio is roughly one to three, which is more than three times better than the average large assisted living facility and roughly five times better than most nursing homes. We are a home, not a facility. Your mother would have her own room, her own chair by the window, her own drawer of photographs, and a staff who knows her by name and knows how she takes her coffee."
      },
      {
        "type": "p",
        "text": "Not every Burien adult family home accepts Medicaid. Roughly half do. The DSHS Adult Family Home locator at fortress.wa.gov/dshs/adsaapps/lookup lets you filter by Medicaid acceptance, which is the fastest way to narrow the search."
      },
      {
        "type": "h2",
        "text": "What Do I Do Tonight, Before I Go to Bed?"
      },
      {
        "type": "p",
        "text": "Close the spreadsheet. The spreadsheet is not going to solve this. I promise."
      },
      {
        "type": "p",
        "text": "Make a list of three things you need to do this week. The first is to gather the documents I listed above and put them in a single folder labeled Mom's application. The second is to call DSHS at 1-877-501-2233 and ask for a COPES screening appointment. The screening is free. It does not commit you to anything. It will take about 30 minutes and at the end of it you will know whether your mother is likely to qualify. The third is to call one or two adult family homes you have already toured, or that you are interested in touring, and ask them whether they accept Medicaid and whether they accept pending COPES applications. If you want to call mine, our number is on burienbestcarehome.com, and the call is free and there is no pressure."
      },
      {
        "type": "p",
        "text": "That is the whole list. Three calls. One folder. No decisions tonight."
      },
      {
        "type": "p",
        "text": "When you close the laptop, I want you to remember that your mother's story is not a story about running out of money. It is a story about a middle-class woman who worked her whole life and paid her taxes and is now using a program her own tax dollars helped build, for the exact reason the program was built. The program is not charity. It is infrastructure. She paid into it. You are helping her draw on it. That is all that is happening here."
      },
      {
        "type": "p",
        "text": "Now go to bed."
      },
      {
        "type": "h2",
        "text": "The Reveal, Not the Failure"
      },
      {
        "type": "p",
        "text": "The calculation you did at the kitchen table tonight is not a failure. It is a reveal. The reveal is that your mother is now at a point in her life where the help she needs is larger than her own savings can cover, and the country and the state of Washington have built, over the last sixty years, a set of programs specifically designed to cover it. You did not create this situation. You did not fail to plan around it. You are not behind."
      },
      {
        "type": "p",
        "text": "You are, in fact, exactly on time. You saw the numbers early. You started researching. You found this article. You are about to make three phone calls you were afraid to make. That is not what failure looks like. That is what love looks like."
      },
      {
        "type": "p",
        "text": "Your mother's life is not getting smaller because her savings did. Her life is changing shape. The next chapter is not less than the last one. It is just different, and it will have more hands in it, and more people who know her name, and fewer moments where you have to be the one who gets up at 3 a.m. when something goes wrong."
      },
      {
        "type": "p",
        "text": "Whatever comes next, you do not have to figure it out alone. I have been the woman on the other end of that 3 a.m. phone call for a hundred Burien families, and I am the woman who sits at her own kitchen table now, long after the residents are asleep, writing articles like this one because someone should have written them for my parents, and nobody did."
      },
      {
        "type": "p",
        "text": "If you want to talk, call me. Even if our home is not the right fit for your mother, I will help you figure out who is. That is what this work is. That is what a neighbor does."
      },
      {
        "type": "p",
        "text": "You are not alone in this. And you are not late."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**What is COPES in Washington State?**"
      },
      {
        "type": "p",
        "text": "COPES is Washington's Community Options Program Entry System, a Medicaid waiver program that pays for long-term care services for seniors in their own home, a family member's home, an adult family home, or an assisted living facility. It is administered by the Washington State Department of Social and Health Services (DSHS)."
      },
      {
        "type": "p",
        "text": "**Does Medicaid pay for adult family homes in Washington?**"
      },
      {
        "type": "p",
        "text": "Yes. Washington is one of the best states in the country for Medicaid coverage of adult family homes. Through the COPES waiver program, Medicaid pays for room, board, and care at Medicaid-contracted adult family homes for seniors who meet the financial and functional eligibility requirements. Typical COPES payments to adult family homes in King County run between approximately $4,500 and $5,500 per month."
      },
      {
        "type": "p",
        "text": "**What are the income and asset limits for COPES in 2026?**"
      },
      {
        "type": "p",
        "text": "In 2026, the income limit for COPES is $2,982 per month in gross income and the asset limit is $2,000 in countable assets. Many assets are exempt, including the primary home (if a spouse or dependent lives there), one vehicle, personal belongings, and prepaid funeral plans. If the applicant is married and the spouse is still living in the community, the spouse is allowed to keep up to $162,660 in protected assets under the Community Spouse Resource Allowance."
      },
      {
        "type": "p",
        "text": "**How long does it take to get approved for COPES?**"
      },
      {
        "type": "p",
        "text": "Standard COPES applications are processed within 45 days. Applications requiring a disability determination can take up to 90 days. The clock starts on the date DSHS receives the complete application, so filing early and filing accurately are the two most important factors. Most Washington families apply before their parent's savings are fully depleted, to allow time for processing and to maintain private-pay coverage during the 45-day gap."
      },
      {
        "type": "p",
        "text": "**What is the Medicaid lookback period in Washington?**"
      },
      {
        "type": "p",
        "text": "Washington reviews 60 months (five years) of financial records when an applicant applies for COPES or Nursing Home Medicaid. The lookback is designed to identify gifts or asset transfers made for less than fair market value. Normal spending, medical bills, home repairs, funeral prepayment, and payments made under a properly drafted personal care agreement do not trigger lookback penalties. Families with significant transfers within the last five years should consult an elder law attorney before filing."
      },
      {
        "type": "p",
        "text": "**Will Medicaid take my parent's house?**"
      },
      {
        "type": "p",
        "text": "Not while your parent is alive and receiving care through COPES in an adult family home. The primary home is exempt from the asset calculation if a spouse, a disabled child, or a child under 21 is living there. After your parent passes away, Washington has an estate recovery program that can seek reimbursement from the probate estate for Medicaid costs paid during the person's lifetime, though many exemptions apply. This is a separate conversation and one that an elder law attorney can walk you through in detail."
      },
      {
        "type": "p",
        "text": "**Can Burien Best Care Home accept a Medicaid resident or a pending COPES application?**"
      },
      {
        "type": "p",
        "text": "Yes. Burien Best Care Home accepts Medicaid for qualifying residents and we accept COPES placements. We will review pending applications on a case-by-case basis. Call us directly at the number on burienbestcarehome.com and we will walk through your situation without pressure and without a fee."
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "h2",
        "text": "JSON-LD Schema Suggestion"
      },
      {
        "type": "p",
        "text": "```json"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@context\": \"https://schema.org\","
      },
      {
        "type": "p",
        "text": "\"@type\": \"FAQPage\","
      },
      {
        "type": "p",
        "text": "\"mainEntity\": ["
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What is COPES in Washington State?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"COPES is Washington's Community Options Program Entry System, a Medicaid waiver program that pays for long-term care services for seniors in their own home, a family member's home, an adult family home, or an assisted living facility.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Does Medicaid pay for adult family homes in Washington?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes. Washington is one of the best states in the country for Medicaid coverage of adult family homes. Through the COPES waiver program, Medicaid pays for room, board, and care at Medicaid-contracted adult family homes for seniors who meet the financial and functional eligibility requirements.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What are the income and asset limits for COPES in 2026?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"In 2026, the income limit for COPES is $2,982 per month in gross income and the asset limit is $2,000 in countable assets. Many assets are exempt, including the primary home, one vehicle, personal belongings, and prepaid funeral plans.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How long does it take to get approved for COPES?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Standard COPES applications are processed within 45 days. Applications requiring a disability determination can take up to 90 days.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What is the Medicaid lookback period in Washington?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Washington reviews 60 months (five years) of financial records when an applicant applies for COPES or Nursing Home Medicaid. Normal spending, medical bills, and properly drafted personal care agreements do not trigger lookback penalties.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Will Medicaid take my parent's house?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Not while your parent is alive and receiving care through COPES. The primary home is exempt from the asset calculation if a spouse, a disabled child, or a child under 21 is living there.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "]"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "```"
      }
    ]
  },
  {
    "slug": "medicare-plateau-letter-rehab-burien",
    "title": "The Plateau Letter: What to Do When Medicare Cuts Off Your Parent's Rehab Before You're Ready",
    "description": "Told that Medicare rehab is ending because your parent has plateaued? A Burien adult family home owner explains what the plateau letter really means and what your options are next.",
    "date": "2026-05-08",
    "author": "Becca Pitts",
    "readingTime": "15 min",
    "tags": [
      "Paying for Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "Your phone rings at 3:12 on a Tuesday afternoon."
      },
      {
        "type": "p",
        "text": "It is the social worker at the skilled nursing facility where your mother has been since the hospital discharged her seventeen days ago. She is polite. She is fast. She says there is a form she needs you to come in and sign today. A pink triplicate. The letters across the top are a little faded because the SNF prints them in bulk and the toner is running low. The letters say: Notice of Medicare Non-Coverage. Underneath, in smaller type, there is a date. Thursday at 11:59 PM."
      },
      {
        "type": "p",
        "text": "You ask what this means."
      },
      {
        "type": "p",
        "text": "She says, in the careful way people say it when they have said it eight hundred times, \"Your mom has plateaued. Medicare will no longer pay for her stay.\""
      },
      {
        "type": "p",
        "text": "You thought you had until July. You thought you had a hundred days. Yesterday, she walked twenty feet with a walker. The day before, she remembered the name of your son's dog. You have been visiting every afternoon after work, sitting in the vinyl chair next to the bed, holding the cup of water while she sips through the bendy straw. You have been doing it right."
      },
      {
        "type": "p",
        "text": "You are standing in the parking lot of the Burien Fred Meyer when this call comes, with a bag of rotisserie chicken in the passenger seat, and suddenly you have forty-eight hours to figure out where your mother is going to live the rest of her life."
      },
      {
        "type": "p",
        "text": "I am writing this article for you."
      },
      {
        "type": "h2",
        "text": "Why Does Medicare Cut Off Rehab So Fast in Washington State?"
      },
      {
        "type": "p",
        "text": "Medicare's 100-day skilled nursing benefit is a ceiling, not a promise. The average SNF Medicare stay in 2026 is twenty-one days. Most families discover the ceiling only on the day it falls on them, because the letter that announces it arrives with forty-eight hours of notice and a word most of us have never read in a medical context before. The word is \"plateau.\""
      },
      {
        "type": "p",
        "text": "Here is what you actually need to understand. The SNF is not required to use up your mother's Medicare days. Medicare pays the SNF when the SNF can document daily skilled care plus measurable progress toward a defined therapy goal. The moment the SNF's therapy team writes \"patient is not progressing,\" the financial incentive flips. Until that note, the SNF earns roughly $600 to $900 per day of Medicare reimbursement. After that note, they earn the Medicare coinsurance ($214 per day in 2026) only if your mother has a supplement, and zero from Medicare itself otherwise. The plateau note is the lever that flips the economics of her bed."
      },
      {
        "type": "p",
        "text": "This does not mean the SNF staff are acting in bad faith. Most of them are doing their job under rules written somewhere else. But it does mean you need to read the pink letter differently than the social worker is presenting it to you. It is not a diagnosis. It is a billing decision dressed in clinical language."
      },
      {
        "type": "h2",
        "text": "What Is a Notice of Medicare Non-Coverage, and What Rights Does It Give Me?"
      },
      {
        "type": "p",
        "text": "A Notice of Medicare Non-Coverage, or NOMNC (form CMS-10123), is the form a skilled nursing facility, home health agency, or rehab hospital must hand you at least two calendar days before Medicare coverage ends. It is not a discharge order. It is a coverage termination notice. And it is also, quietly, the form that tells you how to fight it."
      },
      {
        "type": "p",
        "text": "If you flip the NOMNC over and read the fine print on the back, you will find a phone number. In Washington State, that number belongs to Livanta, the federal contractor that serves as our Beneficiary and Family Centered Care Quality Improvement Organization (BFCC-QIO). Livanta can be reached at 1-877-588-1123. They answer 24 hours a day, seven days a week, including weekends."
      },
      {
        "type": "p",
        "text": "Your mother has the right to request what Medicare calls an \"expedited determination.\" You, as her family member, can request it on her behalf. The appeal is free. You do not need a lawyer. The deadline is usually noon the day before the termination date on the NOMNC, which is why the letter cannot sit on your kitchen counter until Wednesday evening."
      },
      {
        "type": "p",
        "text": "When you call Livanta and request the appeal, two things happen. First, the clock stops. Medicare coverage continues during the review. Second, the SNF is required within about four hours to send you a second form called the Detailed Explanation of Non-Coverage (DENC). The DENC is the document where the SNF has to write down, in specific clinical terms, why they believe coverage should end. Most families never ask for the DENC because most families never appeal. When you do ask, the DENC often reveals that the reasoning is thinner than the social worker's sentence made it sound."
      },
      {
        "type": "h2",
        "text": "What Does \"Plateaued\" Actually Mean, and Is It Legal to Cut Off Rehab for That Reason?"
      },
      {
        "type": "p",
        "text": "\"Plateau\" is a clinical shorthand that is not a legally valid reason, by itself, to end Medicare skilled nursing coverage. In 2013, a federal court approved the settlement of a class-action lawsuit called *Jimmo v. Sebelius*, which ended what was known as the \"improvement standard.\" The old improvement standard said Medicare would only pay for rehab as long as the patient was getting measurably better. The *Jimmo* settlement invalidated that standard nationwide. Medicare now officially covers skilled care that is needed to maintain the patient's current condition or to slow decline, even if the patient is not improving."
      },
      {
        "type": "p",
        "text": "In plain English, the settlement said this: \"plateau\" cannot be the reason Medicare says no. The question is whether skilled care is still needed. Not whether it is still working."
      },
      {
        "type": "p",
        "text": "Thirteen years later, many SNFs still use the old language. Many families still accept it, because they do not know the rule changed, and because the pink letter and the social worker's gentle voice do not mention *Jimmo*. The Center for Medicare Advocacy publishes a free self-help packet for SNF appeals that every family in this situation should download. I will put the link in the FAQ at the end of this article."
      },
      {
        "type": "p",
        "text": "So here is what I want you to hear. If your mother has dementia, Parkinson's, CHF, or any other chronic condition that requires skilled nursing assessment, wound care, medication management, or maintenance therapy to prevent further decline, she may still be eligible for ongoing Medicare SNF coverage. The SNF team has to specifically document that skilled care is no longer reasonable and necessary. \"Not improving\" is not enough."
      },
      {
        "type": "p",
        "text": "Most appeals do not win. That is also true. But most appeals buy you something more valuable than a win: seventy-two hours of breathing room, an official paper trail, and the quiet awareness in the SNF billing office that this family knows where the phone number for Livanta is."
      },
      {
        "type": "h2",
        "text": "What If I Appeal and Mom Still Plateaued? Then What?"
      },
      {
        "type": "p",
        "text": "Then you are in the second hardest conversation of this whole journey, and the one the SNF is not going to have with you."
      },
      {
        "type": "p",
        "text": "If the appeal is denied, or if the DENC describes a patient who genuinely is not a candidate for further skilled rehabilitation, that information is painful. It is also, honestly, the most useful information you will receive in this entire year. The word \"plateau\" in this context means that your mother is not returning to the person she was before the hospital. The rehab trajectory has flattened. The version of her you were hoping would walk out of the SNF, get in the car, and move back into her split-level on 16th Ave SW is not the version of her who will leave the SNF on Friday morning."
      },
      {
        "type": "p",
        "text": "This is grief, not logistics. Name it as grief."
      },
      {
        "type": "p",
        "text": "And then, once you have named it, notice what this information gives you. Yesterday you were uncertain whether your mother needed long-term residential care. The NOMNC, painful as it is, answered that question. Now the question is no longer \"will she need a new home.\" The question is \"which kind of home is the right next chapter.\""
      },
      {
        "type": "p",
        "text": "I wrote a full article last week on [the hospital discharge moment and the four options that open up when a parent cannot return to their prior living situation](/blog/hospital-discharge-parent-burien). Read that piece next if you have not already. The plateau letter is the same fork in the road, just rearranged in time. The hospital revealed the decline. The rehab gave you three weeks of false hope. The NOMNC is the point where you finally get to stop hoping the old version back into existence and start making room for the new one."
      },
      {
        "type": "h2",
        "text": "Skilled Nursing Facility vs. Adult Family Home: The Honest Comparison at the Plateau"
      },
      {
        "type": "p",
        "text": "A skilled nursing facility and an adult family home are different products solving different problems, and the moment Medicare stops paying for SNF is the moment most Washington families should actually be comparing them."
      },
      {
        "type": "p",
        "text": "A skilled nursing facility is a medical building. It is designed for short-term rehab and for high-acuity long-term custodial care. Staff ratios at most SNFs in King County are 1:8 during day shifts and 1:15 or worse overnight. The bed rate, once Medicare stops, is typically $400 to $500 per day private pay in King County (roughly $12,000 to $15,000 per month). Medicaid does cover SNF custodial care once your mother has spent down to Washington's asset limit, but the environment does not change with the payer. Fluorescent lights. Vinyl floors. Shared rooms. Nurses' stations. Medication carts on rubber wheels at 5 AM."
      },
      {
        "type": "p",
        "text": "An adult family home in Burien is a regular house, zoned and licensed to care for a maximum of six residents, with a 1:3 or 1:2 staff ratio around the clock. Private bedrooms are standard. Private or semi-private bathrooms are common. The price range in our area for 2026 sits between $5,500 and $8,500 per month private pay, roughly a third to a half of what a private-pay SNF bed costs in King County. Washington's Medicaid waiver program, [COPES](https://www.dshs.wa.gov/altsa/home-and-community-services/copes-program), pays for adult family home care after qualification, and a growing share of Burien's 21 licensed AFHs, including ours, accept COPES."
      },
      {
        "type": "p",
        "text": "Here is the part most SNF discharge planners will not spell out, because it is not their job to spell it out. If your mother needs daily skilled nursing (IV antibiotics, complex wound care, ventilator support), an SNF or a long-term care hospital is still the right answer. If your mother needs help with dressing, bathing, medications, meals, mobility, memory support, and the simple presence of another human being in the room, an adult family home is almost always the better answer at the plateau point. Smaller environment. Fewer infections. More continuity with the same caregivers. Higher life quality on almost every measure that matters to your mother's afternoons."
      },
      {
        "type": "p",
        "text": "I walk families through this comparison for free, even when our own home is not the right fit for their parent. If we are full, I know who else in Burien and South King County has a bed open this week. If your mother needs a level of care our home does not provide, I will tell you. That kind of honesty is the one thing the pink letter is not designed to give you, and it is the thing I can."
      },
      {
        "type": "h2",
        "text": "The 72-Hour Playbook Between the NOMNC and Thursday Night"
      },
      {
        "type": "p",
        "text": "In the forty-eight to seventy-two hours between the moment the NOMNC is handed to you and the moment Medicare coverage ends, here is the playbook I give families who call our home from the Fred Meyer parking lot."
      },
      {
        "type": "p",
        "text": "Within the first two hours, call Livanta at 1-877-588-1123 and file the expedited appeal. Even if you are ninety percent sure your mother has genuinely plateaued. The appeal buys time and triggers the DENC. Ask the SNF social worker, in writing (email counts), for a copy of the DENC and for a care conference with the therapy team within twenty-four hours. You do not need to be combative. You need to be on paper."
      },
      {
        "type": "p",
        "text": "Within the next twelve hours, call three or four adult family homes in Burien and South King County. Ask each one three questions: Do you have an open room this week. What is your base rate, and what level of care fits my mother at her current state. Would you be willing to meet the SNF discharge planner on the phone tomorrow if I ask."
      },
      {
        "type": "p",
        "text": "Within the next twenty-four hours, tour two or three of those homes. I wrote a full walkthrough of [what to look for and what to ask on an adult family home tour](/blog/touring-adult-family-home-burien), with the real questions that matter versus the ones the marketing brochures want you to ask. Bring your brother or sister if you can. Bring a notebook. Trust the first five minutes after you walk through the front door. The house tells you what it is going to be like to live there."
      },
      {
        "type": "p",
        "text": "Within thirty-six hours, pick a home. Sign the admission paperwork. Ask the SNF discharge planner to coordinate the handoff directly with the AFH operator you chose. Most Burien AFHs can accept a direct hospital-to-home or SNF-to-home transfer within twenty-four to forty-eight hours if the paperwork is in order and the family has been responsive. I have done six of these in the last ninety days."
      },
      {
        "type": "p",
        "text": "Between then and Thursday night, pack a single suitcase of her things. Her real things. The quilt on the foot of her bed at home. The reading lamp with the warm bulb. A photograph of your father in the olive shirt at Three Tree Point. Slippers with rubber soles. A sweater that smells like her house. We will help with the rest."
      },
      {
        "type": "h2",
        "text": "What If I Cannot Afford Private Pay and Medicaid Has Not Kicked In Yet?"
      },
      {
        "type": "p",
        "text": "If your mother does not yet qualify for Medicaid, she has three realistic funding bridges: her long-term care insurance (check the policy today), her assets spending down temporarily while the Medicaid application is submitted, or a short private-pay window funded by a family loan or the sale of [her house](https://yournextstephome.com). Washington's Medicaid application typically takes four to eight weeks. Most adult family homes in Burien that accept Medicaid will hold the bed through the application period as long as the family signs a private-pay agreement for the bridge."
      },
      {
        "type": "p",
        "text": "I wrote an in-depth piece on [the money question in Washington](/blog/paying-for-senior-care-burien) that walks through COPES, spend-down rules, and the five real funding paths for families in our area. If you are inside the plateau letter window right now, read that piece tonight."
      },
      {
        "type": "h2",
        "text": "The Plateau Is the Reveal, Not the Failure"
      },
      {
        "type": "p",
        "text": "Here is the sentence I want you to take with you out of this article."
      },
      {
        "type": "p",
        "text": "The plateau letter is not a failure. It is a reveal. It is Medicare telling you, in the only language Medicare speaks, that the hope you have been carrying for the last twenty-one days (that your mother would walk out of the SNF back into the body she had before the hospital) is not the right hope. The body that is actually in the bed now is the one you are caring for going forward. She is still your mother. She has just changed, in the way a hospitalization sometimes finishes a change that was already underway."
      },
      {
        "type": "p",
        "text": "You did not miss a sign. You were not too slow. The plateau did not happen because you stopped bringing rotisserie chicken on Thursdays. It happened because her body is old and it has asked for a different kind of care than rehabilitation can provide."
      },
      {
        "type": "p",
        "text": "The next chapter is not worse. It is just different. In an adult family home, the afternoons are quieter. The same caregiver brings the same cup of tea in the same blue mug. There are six people in the house instead of seventy-two. There is a garden. There is a porch. There are visits where she is already awake and smelling of the lavender lotion the caregiver rubs into her hands at breakfast. There are Sundays where you sit next to her and she knows you by smell before she knows you by name, and that is enough."
      },
      {
        "type": "p",
        "text": "If you are in the Burien area and the pink letter landed on your table this week, call me. The number is on the home page. It rings to me personally during business hours and to my lead caregiver after hours. I will tell you what I know. I will help you pick the next step, even if that step is not our home. That is what this work is."
      },
      {
        "type": "p",
        "text": "You are not behind. The letter just turned the lights on."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "h3",
        "text": "How do I appeal a Notice of Medicare Non-Coverage in Washington State?"
      },
      {
        "type": "p",
        "text": "Call Livanta, Washington's federal BFCC-QIO contractor, at 1-877-588-1123. The appeal is free, available 24/7, and can be filed by the Medicare beneficiary's family member or representative. The deadline is typically noon the day before the termination date listed on the NOMNC. A decision is issued within 72 hours, and Medicare coverage continues during the review."
      },
      {
        "type": "h3",
        "text": "What is Jimmo v. Sebelius and why does it matter for my parent's rehab?"
      },
      {
        "type": "p",
        "text": "*Jimmo v. Sebelius* was a 2013 federal class-action settlement that invalidated the \"improvement standard\" for Medicare skilled nursing coverage. Under the *Jimmo* settlement, Medicare must cover skilled care that is needed to maintain the patient's condition or slow decline, not only to produce measurable improvement. If your parent's SNF is using the word \"plateau\" as the sole reason for ending coverage, that reasoning has been invalid under federal rules for more than a decade."
      },
      {
        "type": "h3",
        "text": "How much does it cost to move my parent from a Burien SNF to an adult family home?"
      },
      {
        "type": "p",
        "text": "Adult family homes in Burien in 2026 range from $5,500 to $8,500 per month private pay, depending on level of care, private versus semi-private room, and whether memory care is required. This is roughly one third to one half of the private-pay rate for a King County skilled nursing facility once Medicare stops paying. Washington's COPES Medicaid waiver covers adult family home care after qualification."
      },
      {
        "type": "h3",
        "text": "What happens if my parent refuses to leave the SNF?"
      },
      {
        "type": "p",
        "text": "Your parent cannot be forcibly removed as long as a Medicaid application is pending. The SNF must give written notice of discharge and provide reasonable time to arrange an alternative placement. In practice, most families use this window to transition to an adult family home, assisted living, or in-home care, depending on care needs and finances."
      },
      {
        "type": "h3",
        "text": "Does an adult family home in Burien take a parent directly from a skilled nursing facility?"
      },
      {
        "type": "p",
        "text": "Yes. Most licensed adult family homes in Burien and King County accept direct SNF-to-AFH transfers within 24 to 48 hours when the paperwork is in order. Our home has completed six such transfers in the past 90 days. The SNF discharge planner coordinates the medical record transfer and medication reconciliation with the AFH operator directly."
      },
      {
        "type": "h3",
        "text": "Where can I download the Center for Medicare Advocacy's SNF appeals self-help packet?"
      },
      {
        "type": "p",
        "text": "The packet is free and available at medicareadvocacy.org under \"Self-Help Packet for Skilled Nursing Facility Appeals.\" It includes sample appeal letters, a checklist for the DENC review, and plain-English guidance on the *Jimmo* settlement. If you are inside the 48-hour NOMNC window right now, this is the single most useful document you can have open on your laptop tonight."
      },
      {
        "type": "p",
        "text": "*Suggested JSON-LD schema for this FAQ block: FAQPage schema with six Question/Answer pairs mapped to the H3 headings above.*"
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions. Her writing is rooted in one question: \"Would this have helped me when I was going through it with my own parents?\""
      },
      {
        "type": "p",
        "text": "If you received a Notice of Medicare Non-Coverage this week and you are in the Burien, Normandy Park, Seahurst, White Center, or South King County area, call Burien Best Care Home. I will help you read the letter, file the appeal if it makes sense, and figure out the next step, even if that step is not our home."
      }
    ]
  },
  {
    "slug": "hospital-discharge-parent-burien",
    "title": "The 4 PM Friday Phone Call: What to Do When the Hospital Is Discharging Your Parent and You're Not Ready",
    "description": "A safe hospital discharge for a parent who cannot go home alone. A Burien adult family home owner walks families through discharge planning and the adult family home option.",
    "date": "2026-05-01",
    "author": "Becca Pitts",
    "readingTime": "15 min",
    "tags": [
      "Transitions",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is almost always a Friday afternoon."
      },
      {
        "type": "p",
        "text": "A nurse or a case manager calls from the hospital in Tukwila, or from Highline, or from Virginia Mason Federal Way, and uses a tone that is half kind, half rushed. They say a version of the same sentence families all over King County hear every single week:"
      },
      {
        "type": "p",
        "text": "*\"Your mom is being discharged Monday morning. We need to know where she's going.\"*"
      },
      {
        "type": "p",
        "text": "You stand there holding the phone. You look at your calendar. You look at your living room, the one with stairs and a bathtub that has no grab bars, the one you swore a year ago was fine. You try to remember if your mom can walk to the bathroom by herself now. You cannot remember. You were at work when she fell."
      },
      {
        "type": "p",
        "text": "You say, \"Okay,\" because what else do you say."
      },
      {
        "type": "p",
        "text": "Then you hang up and the panic arrives."
      },
      {
        "type": "p",
        "text": "I have watched this moment happen to families hundreds of times in the twenty plus years I have spent in senior care here in Washington. It is one of the most disorienting phone calls a person can get in their adult life. And almost every family I talk to says the same thing afterward: *\"I had no idea it was going to happen this fast. I wasn't ready. I feel like I'm supposed to make the biggest decision of my mom's life in a weekend, and I don't know what I'm doing.\"*"
      },
      {
        "type": "p",
        "text": "If that is where you are right now, reading this article at 11pm on a Friday with your laptop open on the kitchen counter, I want to tell you something before we go any further."
      },
      {
        "type": "p",
        "text": "You are not behind. The hospital just turned the lights on."
      },
      {
        "type": "h2",
        "text": "Why Does the Hospital Discharge Happen So Fast?"
      },
      {
        "type": "p",
        "text": "Hospitals discharge elderly patients quickly because of Medicare reimbursement rules, not because your parent is fully recovered. Once a patient is considered \"medically stable,\" the hospital is no longer reimbursed for their stay, so the discharge planner's job is to move them out safely and legally within a narrow window, often 48 to 72 hours after the decision is made."
      },
      {
        "type": "p",
        "text": "This is the part no one explains to families. Medically stable does not mean *ready to go home and function the way they used to.* It means *not actively in danger if they leave this bed.* There is a wide gap between those two things, and your parent is almost certainly living in that gap right now."
      },
      {
        "type": "p",
        "text": "Per federal rules, you have the right to receive an *Important Message from Medicare* notice during the stay, and again within two days of discharge. If you disagree with the discharge timing, you have the right to appeal to the regional Quality Improvement Organization (in Washington, that is Livanta), and the hospital cannot discharge your parent during that review. Most families never hear about this right because no one makes time to explain it. You are hearing about it now."
      },
      {
        "type": "p",
        "text": "So the first thing to know: the speed is not your fault and it is not personal. It is the system. But you have more say inside that system than the 4pm phone call made it sound like."
      },
      {
        "type": "h2",
        "text": "Is My Parent Actually Okay to Come Home?"
      },
      {
        "type": "p",
        "text": "Most adult children overestimate what their parent can do after a hospitalization because they are remembering the version of their parent from before. The irrefutable truth is that hospital stays accelerate decline, especially in older adults. A week in bed can cost a senior 10 to 15 percent of their muscle mass. Add delirium, new medications, disrupted sleep, and an unfamiliar environment, and most parents come out of the hospital meaningfully weaker and more confused than when they went in."
      },
      {
        "type": "p",
        "text": "Ask yourself, as honestly as you can:"
      },
      {
        "type": "p",
        "text": "Before this hospital stay, could your parent already walk to the bathroom alone at night? Could they manage their own medications without reminders? Could they make themselves a sandwich, call for help, and get in and out of the shower without anyone standing by?"
      },
      {
        "type": "p",
        "text": "If the answer was *\"sort of\"* or *\"with a little help,\"* then the answer after a hospital stay is almost always *\"no, not safely.\"*"
      },
      {
        "type": "p",
        "text": "This is the reveal I talked about earlier. The decline was already happening. The hospital is just the room where the lights finally came on. That is not failure. That is how aging works. It happens slowly, and then the body takes one event, a fall, a UTI, a bout of pneumonia, and uses it to announce itself."
      },
      {
        "type": "p",
        "text": "The question is not *\"why did this happen so suddenly?\"* The real question is *\"now that we can see it, what is the next right step?\"*"
      },
      {
        "type": "h2",
        "text": "What Are My Options After a Hospital Discharge in Washington State?"
      },
      {
        "type": "p",
        "text": "Washington families typically have four options after a hospital discharge, and understanding the differences is the most useful thing you can do in the next 24 hours."
      },
      {
        "type": "p",
        "text": "**Home with family support.** Your parent goes back to their house (or yours), and you or a sibling or a spouse becomes the primary caregiver, often with help from a home health agency for a few weeks. This works when the home is already accessible, the caregiving load is short-term, and there is more than one family member available. It rarely works when the parent lives alone in a two-story house and you live in a different city."
      },
      {
        "type": "p",
        "text": "**Skilled nursing facility (SNF) for rehab.** Medicare covers up to 100 days of skilled nursing if your parent had a qualifying 3-night inpatient hospital stay. This is usually intense physical and occupational therapy in a facility that looks and feels clinical. SNFs are good for recovery from a specific event (hip replacement, stroke) where the goal is to return to baseline. They are less good when the parent is not going to return to baseline and everyone knows it."
      },
      {
        "type": "p",
        "text": "**Assisted living facility.** Larger communities, usually 40 to 200 residents, with apartment-style living and scheduled help. These work for seniors who are mostly independent but need some support and social connection. They are less fitting for parents with significant dementia, advanced physical needs, or who become disoriented in large environments."
      },
      {
        "type": "p",
        "text": "**Adult family home.** A licensed private home, here in Burien and throughout King County, that cares for no more than six residents at a time with 24 hour awake staff. Staff-to-resident ratios are typically 1:3, compared to 1:10 or 1:15 in larger facilities. Adult family homes in Washington can accept direct hospital discharges and are often able to move someone in within 24 to 48 hours when a room is available. Medicaid is accepted in licensed AFHs that contract with the state. Costs in Burien and south King County typically run $4,500 to $8,500 per month depending on room type and care level, which is meaningfully less than assisted living for comparable care."
      },
      {
        "type": "p",
        "text": "I wrote a longer comparison of adult family homes and assisted living if you want to go deeper. But the short version: if your parent needs real hands-on help, is confused by big spaces, or is managing dementia on top of physical needs, a small home is usually the better match. If they are mostly independent and social, assisted living can be a better fit."
      },
      {
        "type": "h2",
        "text": "What Does a Hospital Discharge Planner Actually Do for Me?"
      },
      {
        "type": "p",
        "text": "A hospital discharge planner's job is to make sure your parent leaves the hospital safely and legally, not to find the best long-term care solution for your family. This is the most important thing Burien families never get told directly."
      },
      {
        "type": "p",
        "text": "Discharge planners are often overworked social workers or nurses managing 20 or more patients at a time. They are doing their best inside a system that does not give them time to hand-hold families through a permanent care decision. When they hand you a printed list of three or four facilities, that list is not a vetted recommendation. It is usually based on availability at that moment and whatever facilities have a relationship with the hospital's referral system."
      },
      {
        "type": "p",
        "text": "Use the discharge planner for what they are good at: coordinating the medical handoff, setting up home health if applicable, ordering durable medical equipment (a walker, a hospital bed, a commode), and explaining the follow-up appointments. Ask them directly: *\"What would you do if this were your mom?\"* A surprising number of them will tell you honestly, off the record."
      },
      {
        "type": "p",
        "text": "But the care placement decision itself is yours. You do not have to take the first name on the list."
      },
      {
        "type": "h2",
        "text": "How Do I Choose a Care Home in 48 Hours Without Making a Mistake?"
      },
      {
        "type": "p",
        "text": "You are not being asked to make the perfect forever decision in 48 hours. You are being asked to make a good next step. That reframe alone lowers the pressure by about 80 percent, and it is accurate."
      },
      {
        "type": "p",
        "text": "If you have a weekend to find care, here is the actual order of operations I recommend to families I talk to here in Burien:"
      },
      {
        "type": "p",
        "text": "Start by calling, not visiting. You can call eight adult family homes in an hour. You cannot tour eight in a day. On the phone, ask three questions: *\"Do you have a room available in the next 48 to 72 hours? What is your current care level and charge? Can you accept someone coming directly from a hospital stay?\"* This single round of calls will narrow your list from twenty homes to two or three."
      },
      {
        "type": "p",
        "text": "Tour the two or three that have space. In person if possible, over FaceTime if the home offers it and you cannot physically be there. Pay attention to what you smell when you walk in, what the other residents look like (awake and engaged, or parked in front of a TV), and how the staff talk to the people who live there. I wrote a more detailed guide on [what to actually look for on an adult family home tour](/blog/touring-adult-family-home-burien) that covers this in depth."
      },
      {
        "type": "p",
        "text": "Ask the operator to speak directly with the hospital. A good adult family home will call the hospital, get the discharge paperwork, review the medication list, and tell you honestly whether they can meet your parent's care level. Any home that refuses to do that step is telling you something important about how they operate."
      },
      {
        "type": "p",
        "text": "Trust the instinct you will have in the first five minutes of a good home. Families know. You will walk in and either feel your shoulders drop or you will feel them stay tight. Do not override that."
      },
      {
        "type": "h2",
        "text": "What If My Parent Refuses to Go Anywhere but Home?"
      },
      {
        "type": "p",
        "text": "If your parent refuses to go anywhere but home and home is not safe, you are in one of the hardest situations in eldercare, and you are not alone. The honest truth is that you cannot force a competent adult to accept care they refuse, but you can reframe what \"home\" means and buy time with a temporary stay."
      },
      {
        "type": "p",
        "text": "A lot of families in Burien end up using what I call the \"respite doorway.\" Rather than framing the adult family home as a permanent move, you frame it as *\"Mom, the hospital says you need three weeks of extra help before you go home. Let's try this place and see how it goes.\"* Many [respite stays](https://burienbestcarehome.com/services/respite-care) turn into permanent ones not because the family pressures the parent, but because the parent arrives exhausted, gets rested and fed and supervised for two weeks, and decides on their own that this feels safer than being alone. I have watched it happen many times."
      },
      {
        "type": "p",
        "text": "If your parent is cognitively declining and genuinely cannot make a safe decision, that is a different conversation, and it usually involves a geriatric care manager or an elder law attorney. [Your Best Season](https://yourbestseason.com) has resources on that transition if you want to read further on the softer, slower version of this conversation."
      },
      {
        "type": "h2",
        "text": "What About Mom's House?"
      },
      {
        "type": "p",
        "text": "Most families avoid thinking about the house for the first month, and that is completely fine. You do not have to sell anything, move anything, or make any real estate decision this weekend. The house will still be there in six weeks."
      },
      {
        "type": "p",
        "text": "When you are ready, the order of operations usually goes: get your parent settled and stable first, then deal with the mail, then deal with the medications and paperwork, then eventually the house. Families I talk to in Burien often sell the family home six to twelve months after placement, not six days after. There is no prize for doing it faster. When the time comes, we work with [Your Next Step Home](https://yournextstephome.com) to help families navigate that transition with the same care, because selling your parent's house is its own kind of grief."
      },
      {
        "type": "h2",
        "text": "Can an Adult Family Home in Burien Accept My Parent This Week?"
      },
      {
        "type": "p",
        "text": "Yes, many Burien adult family homes, including Burien Best Care Home, can accept a resident directly from a hospital discharge within 24 to 72 hours when a private room is available. The process involves a short care assessment (often done by phone or video with the hospital care team), a signed admission agreement, and coordination of medications and durable medical equipment delivery."
      },
      {
        "type": "p",
        "text": "If you are reading this in real time and you need to talk to someone today, you can [contact us here](https://burienbestcarehome.com/contact) or call the home directly. Even if we do not have availability for your parent this week, we can tell you in a ten minute conversation which Burien homes are likely to and which questions to ask them."
      },
      {
        "type": "h2",
        "text": "FAQ: Hospital Discharge and Senior Care in Burien, WA"
      },
      {
        "type": "p",
        "text": "**How long do I have after the hospital says my parent is being discharged?**"
      },
      {
        "type": "p",
        "text": "Typically 24 to 72 hours, depending on when the discharge order is written. You have the right to appeal the discharge timing through Livanta, Washington's Medicare Quality Improvement Organization, and your parent cannot be discharged during the review. Ask the hospital for the *Important Message from Medicare* notice if you were not given one."
      },
      {
        "type": "p",
        "text": "**Can an adult family home accept my parent straight from the hospital?**"
      },
      {
        "type": "p",
        "text": "Yes. Licensed adult family homes in Washington state, including those in Burien and King County, can accept direct hospital discharges. The home will conduct a care assessment, review the discharge paperwork and medication list, and coordinate with the hospital's discharge planner."
      },
      {
        "type": "p",
        "text": "**Is an adult family home cheaper than assisted living in Washington state?**"
      },
      {
        "type": "p",
        "text": "Usually yes. Adult family homes in Burien and King County typically run $4,500 to $8,500 per month, while assisted living in Washington averages around $6,975 per month for a standard unit and often much more with care add-ons. Adult family homes offer 1:3 staffing ratios compared to 1:10 or higher in assisted living, which means comparable care typically costs less in a small home."
      },
      {
        "type": "p",
        "text": "**Does Medicaid pay for an adult family home in Washington?**"
      },
      {
        "type": "p",
        "text": "Yes, for licensed adult family homes that contract with DSHS. The program is commonly called COPES (Community Options Program Entry System) or the Medicaid Personal Care program. Eligibility depends on income, assets, and care needs. Not every home accepts Medicaid, so ask directly before you tour."
      },
      {
        "type": "p",
        "text": "**What if we choose a home and it is not the right fit?**"
      },
      {
        "type": "p",
        "text": "Adult family home placement is not a permanent contract in the legal sense. Washington state protects residents' rights to transfer to a different care setting. A thoughtful adult family home operator will tell you early if the fit is not right rather than letting the situation drag on. The 30 day mark is usually when families know whether the home is the right long-term answer."
      },
      {
        "type": "p",
        "text": "**What happens if my parent's care needs increase?**"
      },
      {
        "type": "p",
        "text": "A good adult family home will discuss aging in place openly during the initial tour. Many homes, including ours, can care for residents through increasing needs including late-stage dementia and hospice, provided the state licensure level supports it. Ask to see the home's specialty license endorsements."
      },
      {
        "type": "h2",
        "text": "You Are Allowed to Not Be Ready"
      },
      {
        "type": "p",
        "text": "Here is what I tell every family I talk to on a Friday afternoon."
      },
      {
        "type": "p",
        "text": "This is not a test. Your parent's decline did not happen because you missed a sign. It happened because time moved, the way it moves for all of us, and a body that used to compensate can no longer quite manage it. The hospital did not create this. It just made it visible on a calendar."
      },
      {
        "type": "p",
        "text": "You get to make a good enough next step this weekend, and you get to make a better step next month, and an even better one the month after that. Adult family home placement is not a door that locks. It is a next chapter, and chapters can change."
      },
      {
        "type": "p",
        "text": "If I could go back to the version of me who was trying to figure this out for my own parents, the thing I would say is: *you are being asked to love them in a new way now. The old way was exhausting you and it was not enough. That is not a failure. That is the part where you let someone who loves this work take the night shift.*"
      },
      {
        "type": "p",
        "text": "That is what Burien Best Care Home exists to do. It is the kind of place I wish had existed when I was the one getting the 4pm phone call."
      },
      {
        "type": "p",
        "text": "If you are there right now, you can [schedule a tour](https://burienbestcarehome.com/contact) or call us directly. Even if we are not the right home for your parent this week, I will personally help you figure out who is."
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "*Becca Pitts is the owner of [Burien Best Care Home](https://burienbestcarehome.com), bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions.*"
      },
      {
        "type": "h2",
        "text": "Related Reading"
      },
      {
        "type": "ul",
        "items": [
          "[How Do I Know When It's Time? Signs It's Time for Residential Care](/blog/signs-its-time-residential-care-burien)",
          "[What to Actually Look For When You Tour an Adult Family Home in Burien](/blog/touring-adult-family-home-burien)",
          "[The First Weeks After You Move Your Parent Into Care](/blog/first-weeks-after-placement-burien)",
          "[The Money Question: How Burien Families Actually Pay for Senior Care](/blog/paying-for-senior-care-burien)",
          "[How Often Should I Visit My Parent in an Adult Family Home?](/blog/visiting-parent-adult-family-home-burien)"
        ]
      },
      {
        "type": "h2",
        "text": "JSON-LD FAQPage Schema (For Implementation)"
      },
      {
        "type": "p",
        "text": "```json"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@context\": \"https://schema.org\","
      },
      {
        "type": "p",
        "text": "\"@type\": \"FAQPage\","
      },
      {
        "type": "p",
        "text": "\"mainEntity\": ["
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How long do I have after the hospital says my parent is being discharged?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Typically 24 to 72 hours, depending on when the discharge order is written. You have the right to appeal the discharge timing through Livanta, Washington's Medicare Quality Improvement Organization, and your parent cannot be discharged during the review.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Can an adult family home accept my parent straight from the hospital?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes. Licensed adult family homes in Washington state, including those in Burien and King County, can accept direct hospital discharges. The home will conduct a care assessment, review the discharge paperwork and medication list, and coordinate with the hospital's discharge planner.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Is an adult family home cheaper than assisted living in Washington state?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Usually yes. Adult family homes in Burien and King County typically run $4,500 to $8,500 per month, while assisted living in Washington averages around $6,975 per month with additional care charges. Adult family homes offer 1:3 staffing ratios compared to 1:10 or higher in assisted living, which means comparable care typically costs less in a small home.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Does Medicaid pay for an adult family home in Washington?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes, for licensed adult family homes that contract with DSHS. The program is commonly called COPES (Community Options Program Entry System) or the Medicaid Personal Care program. Not every home accepts Medicaid, so ask directly before you tour.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What happens if my parent's care needs increase in an adult family home?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"A good adult family home will discuss aging in place openly during the initial tour. Many Washington adult family homes can care for residents through increasing needs including late-stage dementia and hospice, provided the state licensure level supports it. Ask to see the home's specialty license endorsements.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "]"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "```"
      }
    ]
  },
  {
    "slug": "visiting-parent-adult-family-home-burien",
    "title": "How Often Should I Visit My Parent in an Adult Family Home? A Burien Family's Honest Guide to Visits, Goodbyes, and the Afternoon in Between",
    "description": "A Burien adult family home owner walks you through what a visit actually looks like, how long to stay, what to do when you are there, and how to leave without breaking either of your hearts. Honest, specific, and written for the family three weeks into placement.",
    "date": "2026-04-24",
    "author": "Becca Pitts",
    "readingTime": "16 min",
    "tags": [
      "After Placement",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is 3:47 on a Sunday afternoon. She is in her car in the driveway of a small house in Burien with a camellia bush out front. In the passenger seat she has a canvas tote with things she brought. A ziplock of her mother's favorite shortbread. A folder of photographs she printed at Walgreens yesterday, the kind with the white borders. A cardigan she found at the back of the upstairs closet that she thinks her mother will want now that the evenings are still cool. She has been sitting in the car for eleven minutes."
      },
      {
        "type": "p",
        "text": "She is not afraid of the visit. She is afraid of the last ten minutes of the visit."
      },
      {
        "type": "p",
        "text": "Three weeks ago her mother moved into this house. The first two visits were fine. The third visit, her mother cried when she stood up to leave and said please do not go, and the daughter drove home on the 509 with her hands shaking on the wheel and pulled into her own driveway and sat there for twenty minutes before she could face her husband. Now she is in this driveway instead, one more week in, and she is trying to decide whether to go in for an hour or for twenty minutes, whether to bring the cardigan up now or leave it in the car, whether to say goodbye or whether to just leave quietly while her mother is distracted, which feels like a betrayal, and whether that is better or worse than the crying."
      },
      {
        "type": "p",
        "text": "This is the part nobody talks about. The visits themselves are not the hard part. The architecture around the visits is."
      },
      {
        "type": "p",
        "text": "I want to answer this honestly, because I am the woman who opens the door when she finally gets out of the car, and I have walked more than a hundred daughters through this exact driveway moment. The picture in her head of what a visit should look like is mostly wrong, and it is making the goodbye worse than it needs to be."
      },
      {
        "type": "p",
        "text": "This is what I want her to know."
      },
      {
        "type": "h2",
        "text": "How Often Should I Visit My Parent in an Adult Family Home?"
      },
      {
        "type": "p",
        "text": "Once or twice a week for shorter visits, usually between twenty minutes and an hour, is what most Burien families settle into by the end of the third month. That is the honest industry answer and it is backed up by the research. A recent AgingCare.com forum thread on this exact question ran hundreds of responses deep and the consensus was remarkably consistent. Families who visited every single day for the first two months almost all said, in hindsight, that they wished they had not. Not because their parent did not want to see them, but because daily visits interfered with the slow work of their parent making the new place feel like home."
      },
      {
        "type": "p",
        "text": "The question beneath the question is almost never really \"how often.\" The real question is, \"how do I visit often enough that I am still a good daughter but not so often that I am still my mother's primary attachment in the house where she now lives.\" Those two things are in tension for the first two to three months and the tension is normal. You are going to feel it. The guilt does not mean you are getting it wrong."
      },
      {
        "type": "p",
        "text": "For most King County families of a parent in an adult family home, the rhythm that works settles into something like this. One anchor visit per week, usually on a weekend, for forty to sixty minutes, where you bring something from home and sit through a meal or a coffee. One mid-week drop-in, fifteen to twenty-five minutes, on the way to or from something else, so it does not feel like a whole event. Phone calls on the days you do not visit, sometimes on speakerphone while your mother is sitting at the kitchen table and the caregiver is nearby so she does not have to manage the phone."
      },
      {
        "type": "p",
        "text": "What matters is the consistency, not the frequency. A parent who knows her daughter comes on Sundays can hold onto Sundays. A parent who gets a visit every random Tuesday some weeks and then not at all for two weeks cannot."
      },
      {
        "type": "h2",
        "text": "Why \"Visit\" Is the Wrong Word for What Actually Helps"
      },
      {
        "type": "p",
        "text": "The word \"visit\" is a large-facility word. It implies a sign-in sheet, a lobby, a conference room, a beginning and an end, a performance. In a six-bed adult family home, what actually helps your parent is not a visit at all. It is a presence. You are not coming to entertain her. You are coming to be part of the afternoon she was already having."
      },
      {
        "type": "p",
        "text": "This is the single most important reframe for families in the first month after placement, and it is the structural advantage of a small home that nobody puts on the brochure. In a large assisted living, your mother goes to the activity room or the private dining area or the front lobby to \"have a visit\" with you, which means she leaves her normal afternoon, does something framed as an event, and then has to return to her normal afternoon after you leave. That structure creates two emotional cliffs. The arrival cliff, where she has to rouse herself to perform being a mother. And the departure cliff, where she has to watch you walk out of a room that was created for the explicit purpose of you leaving."
      },
      {
        "type": "p",
        "text": "In a small adult family home, the afternoon does not stop when you arrive. You walk into the kitchen. There is coffee on. Someone else is at the table. A caregiver is folding towels at the counter. Your mother is in her chair in the living room with the lamp on and the paper in her lap. You sit down next to her in the lamp light and you are in the afternoon with her. When you leave, the afternoon continues. The coffee is still warm. The caregiver is still folding. Your mother does not have to be escorted back to her life. She is already in it."
      },
      {
        "type": "p",
        "text": "That is not a small thing. That is the whole thing."
      },
      {
        "type": "h2",
        "text": "How Long Should a Visit Actually Be?"
      },
      {
        "type": "p",
        "text": "Shorter than you think. Twenty to forty minutes is usually the sweet spot, especially in the first two to three months and especially for a parent with any cognitive change. Longer visits feel more loving in theory and are harder on your parent in practice, because sustained focused attention is genuinely tiring at eighty six, and the adrenaline of having you there runs out before the visit ends. A visit that ends while your mother is still enjoying herself is a visit she remembers well. A visit that goes an extra forty minutes past the natural end is a visit that ends with her exhausted and therefore sadder when you leave."
      },
      {
        "type": "p",
        "text": "There is one exception to the short-visit rule. If you are arriving for a specific shared moment, a Sunday lunch, a holiday breakfast, an afternoon in the garden when the roses are out, then staying through the moment is the right move, even if it runs to two hours. The difference is that you are sharing an activity with her, not holding court with her. In a small home, lunch is the easiest shared activity in the world, because lunch was going to happen anyway. You are simply eating it too."
      },
      {
        "type": "p",
        "text": "A good practical template for the family working out their rhythm here in Burien: a forty-minute Sunday afternoon anchor visit with coffee or a snack, plus a twenty-minute weekday drop-in. That is roughly sixty to eighty minutes of in-person time per week, plus whatever phone and video contact feels right. That is genuinely enough. That is what a mother of a grown daughter who lives a full life eight miles away would have gotten in a normal week for most of her life anyway."
      },
      {
        "type": "h2",
        "text": "What Should I Actually Do During the Visit?"
      },
      {
        "type": "p",
        "text": "The answer most families need to hear is, \"less than you think, and most of it domestic rather than special.\" You do not need to come with an agenda. You do not need to bring a craft project, a therapy dog, or a list of conversation topics. The most effective visits are the ones that look like the ordinary afternoons you used to have with your parent in her own kitchen, ten or fifteen years ago, before any of this started."
      },
      {
        "type": "p",
        "text": "Here is what actually works, in order of reliability."
      },
      {
        "type": "p",
        "text": "Bring one familiar thing. A dish she used to make. A photograph from a specific year that she will recognize. A sweater from her own closet. A handful of garden clippings. Nothing that requires her to comment on it, just something that smells or feels or looks like her own life."
      },
      {
        "type": "p",
        "text": "Fold into a household task. Ask the caregiver if you can help with lunch, or fold laundry on the dining table while the two of you chat, or water the geraniums. This is the single most underrated kind of visit. In a six-bed home, chores are happening all around you, and participating in them shifts the visit from performance to presence."
      },
      {
        "type": "p",
        "text": "Sit in the same room and do not talk. Read the paper together. Watch the birds. Listen to music. The research on visits with people who have dementia is unambiguous on this point: silent companionship is as valuable as conversation, and often more so, because your parent does not have to work to participate. She just has to feel you next to her."
      },
      {
        "type": "p",
        "text": "Ask one beautiful question and then stop. What was the best part of your day today. What does the garden smell like from your window. Do you remember the color of the car you and Dad drove in the seventies. You do not need six questions. One question and a long pause is worth more than a stream of questions that she cannot track."
      },
      {
        "type": "p",
        "text": "Bring a song. Music reaches people with dementia long after conversation has thinned. Put on whatever she used to sing when she was doing dishes. Sit with her while it plays. You do not need to say a thing."
      },
      {
        "type": "p",
        "text": "If your parent has dementia, adjust what \"engagement\" means. You are not trying to stimulate cognition. You are trying to deliver presence. A warm hand on her forearm, a cup of tea you both sip, the scent of a lemon you peel at the table, a photograph in her lap, the sound of a grandchild laughing on a speakerphone. These are the visits people with advanced dementia actually remember emotionally, even when they cannot remember you left."
      },
      {
        "type": "h2",
        "text": "Why Does My Mom Cry When I Leave (And Should I Stop Visiting)?"
      },
      {
        "type": "p",
        "text": "Because she recognizes you. That is the short answer, and it is important."
      },
      {
        "type": "p",
        "text": "When your mother cries at the goodbye, what most families hear is evidence that the home is wrong and the placement is failing. That is almost never what is happening. What is happening is that your mother's attachment system is working. She knows who you are. She feels the loss of you leaving. She is expressing a feeling in real time, which is a sign of a functioning emotional self, not a sign of a broken one. In the dementia care literature this is called a \"contact reaction\" and it is so common in the first two to four months after placement that the staff at good homes build their workflow around it."
      },
      {
        "type": "p",
        "text": "It does not mean you should stop visiting. It means you should rebuild the architecture of how you leave."
      },
      {
        "type": "p",
        "text": "Here is the goodbye framework that works for almost every family in the first three months. First, leave your coat and your bag in the car. The rustle of a coat and the zipping of a bag is the leaving-cue your mother is watching for, whether she can name it or not. Second, do not announce that you are leaving. Announce what is happening next for her, not what is happening next for you. \"I am going to run down and tell the caregiver I am heading out. You stay right here in your chair. She is going to bring you your tea in about ten minutes.\" Third, do not say goodbye at the door. Say it in her chair. Give her a kiss on the forehead, hold her hand for a beat, and stand up without commentary. Fourth, do not pause at the threshold to look back. The pause is for you, not for her, and it costs her more than it gives you."
      },
      {
        "type": "p",
        "text": "Fifth, and this is the one most families miss: tell the caregiver you are leaving, out loud, where your mother can hear it. \"I am heading out. Thanks for the coffee.\" Your mother hearing you hand her off to someone she trusts, in the room she is already in, is the softest landing for a departure. She is not being left alone. She is being handed off."
      },
      {
        "type": "p",
        "text": "The crying often stops on its own around month three, as the home becomes her home and her expectation of you shifts from \"she is about to leave me here\" to \"she is about to go back to her own house and I am going to have dinner soon.\" Until then, the goodbye architecture matters more than any single visit."
      },
      {
        "type": "h2",
        "text": "What About Visits When I Live Far Away?"
      },
      {
        "type": "p",
        "text": "Video calls are real visits. That is not a consolation prize, it is a clinical reality in 2026. A twenty-minute video call where your mother sees your face and hears you laugh is genuinely valuable, and in a small home where the caregiver will happily help her hold a phone or answer an iPad, the barriers have collapsed. Families whose adult children live in Spokane, Portland, or across the country routinely maintain strong relationships this way, especially when the calls are on a consistent schedule. Two scheduled video calls a week tend to work better than one unpredictable one, because your parent can look forward to them."
      },
      {
        "type": "p",
        "text": "For Washington families managing long-distance eldercare, we have written a separate piece on the first weeks after a parent moves in ([see our guide here](/blog/first-weeks-after-placement-burien)). The companion resource for broader senior transition questions is [yourbestseason.com](https://yourbestseason.com), and if the move involves a home sale back in Seattle, Tacoma, or elsewhere in King County, [yournextstephome.com](https://yournextstephome.com) is the team we refer families to."
      },
      {
        "type": "h2",
        "text": "What's Different About Visiting Someone in a Small Adult Family Home in Burien?"
      },
      {
        "type": "p",
        "text": "You are not visiting a building. You are visiting a house, which is a different kind of thing. There is no reception desk, no sign-in kiosk, no visitor badge, no time-limit on the clock. You ring the doorbell and the caregiver who has known your mother since the first day opens the door and says your name without checking a list. You leave your shoes in the entry if your mother's house always had a shoe rule, and you walk into the kitchen."
      },
      {
        "type": "p",
        "text": "Under Washington State DSHS rules, adult family homes in King County are licensed for up to six residents, which means the people caring for your parent know the people who come to visit her. By the third or fourth visit, the caregiver will know your name, your children's names, and that your mother likes her tea with a little milk. That is not a marketing line. That is the structural consequence of a 1:3 staffing ratio in a six-bed house."
      },
      {
        "type": "p",
        "text": "You can visit almost any reasonable hour. Most Burien adult family homes, ours included, do not have rigid visiting windows; we ask families to avoid very early morning and very late evening because those are rest times for the house. Sunday afternoons, Saturday mornings, weekday late afternoons between 3 and 5, and after-dinner hours in the summer are the easiest windows for most families. You do not need an appointment. You can sit on the porch with her. You can stay for lunch. You can walk her around the block toward Seahurst Park or past the camellia bushes on her street. None of that requires special permission."
      },
      {
        "type": "h2",
        "text": "What Does a Good Sunday Afternoon Visit Look Like at Burien Best Care Home?"
      },
      {
        "type": "p",
        "text": "Here is one I watched last Sunday. A daughter came up the walk at 2:40 with a container of her mother's lemon bars that she had made that morning. She knocked, stepped out of her shoes, said hi to our caregiver, and walked into the living room where her mother was in her chair by the window with the paper on her lap and the radio on low. She did not say, \"hi Mom, I am here for a visit.\" She sat down in the chair next to her, put her hand on her mother's wrist, and said, \"you would not believe the traffic on 518.\" Her mother laughed. They sat there for a few minutes without talking. Then the daughter got up, walked into the kitchen, cut two lemon bars onto a plate, and brought them back. They ate them with tea. Our caregiver folded a basket of towels at the dining table. At 3:25, the daughter said, \"I am going to tell her I am heading out in a minute. You stay right here, your tea is still warm and I think it might be your afternoon nap soon.\" She leaned down, kissed her mother's forehead, stood up, and walked to the kitchen where she thanked the caregiver loud enough for her mother to hear. She left by 3:30. Her mother watched the birds at the feeder and was asleep in her chair fifteen minutes later."
      },
      {
        "type": "p",
        "text": "That was a good visit. It was thirty-seven minutes. Her mother remembered the lemon bars. The daughter did not cry in her car. The house kept running."
      },
      {
        "type": "p",
        "text": "That is the visit we are trying to help every family here arrive at by month three. Not the perfect visit. The honest one."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How often should I visit my parent in an adult family home in the first month?**"
      },
      {
        "type": "p",
        "text": "Most Burien families find that two to three short visits per week in the first month works better than daily visits. Daily visits, while loving, often interfere with the slow work of your parent adjusting to the new home. By month two, most families settle into a weekly anchor visit plus one mid-week drop-in."
      },
      {
        "type": "p",
        "text": "**What should I bring when I visit my parent in an adult family home?**"
      },
      {
        "type": "p",
        "text": "One familiar item from home tends to help more than a bag full of things. A photograph, a favorite sweater, a dish she used to make, a flower from the garden. Avoid anything that requires her to perform gratitude or remember details. The goal is sensory familiarity, not a gift."
      },
      {
        "type": "p",
        "text": "**How long should a visit last?**"
      },
      {
        "type": "p",
        "text": "Twenty to forty minutes is the sweet spot for most families, especially in the first three months and especially if your parent has any cognitive change. Visits that end while your parent is still engaged leave stronger emotional traces than visits that stretch past the natural end."
      },
      {
        "type": "p",
        "text": "**My mom cries when I leave. Am I doing something wrong?**"
      },
      {
        "type": "p",
        "text": "No. Her crying is a sign that her attachment to you is intact and she recognizes you. It is almost never a sign that the home is wrong. Work on the structure of the goodbye rather than cutting visits short. Leave your coat and bag in the car, say goodbye in her chair rather than at the door, and hand her off to the caregiver out loud. The crying usually softens by month three."
      },
      {
        "type": "p",
        "text": "**Can I visit an adult family home in Burien any time, or are there visiting hours?**"
      },
      {
        "type": "p",
        "text": "Washington State DSHS licensing does not mandate visiting hours for adult family homes, and most Burien homes, including ours, have flexible visiting throughout the day. We ask families to avoid very early mornings and very late evenings when the house is settling, but Sunday afternoons, weekday late afternoons, and after-dinner hours in the summer are all easy windows. You do not need an appointment."
      },
      {
        "type": "p",
        "text": "**Are video calls a legitimate substitute for in-person visits for long-distance families?**"
      },
      {
        "type": "p",
        "text": "Yes. Consistent video calls are genuinely valuable, especially on a predictable schedule. A twenty-minute video call that happens every Wednesday at 4pm is often more emotionally meaningful than an unpredictable in-person visit. In a small home the caregiver will help your parent manage the device, which removes the most common long-distance barrier."
      },
      {
        "type": "p",
        "text": "*Suggested JSON-LD schema: FAQPage with the six Q&A pairs above, plus Article schema with author Becca Pitts, datePublished 2026-04-18, and about Burien Best Care Home.*"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "*Burien Best Care Home is a licensed adult family home serving Burien, Normandy Park, White Center, Seahurst, Three Tree Point, and surrounding King County communities. If you would like to visit the home or talk about a parent's care, you can reach us through [burienbestcarehome.com](https://burienbestcarehome.com).*"
      }
    ]
  },
  {
    "slug": "day-in-the-life-adult-family-home-burien",
    "title": "A Day in the Life at a Burien Adult Family Home: What Your Parent Will Actually Do All Day (And Why the Schedule Isn't the Point)",
    "description": "A Burien adult family home owner walks you through what your parent's day will actually look like, honestly, hour by hour. The real answer to \"what will she do all day?\" and why the best days in a small home are not about activities at all.",
    "date": "2026-04-17",
    "author": "Becca Pitts",
    "readingTime": "15 min",
    "tags": [
      "Adult Family Homes",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is 2:47 on a Tuesday afternoon. She is at her desk in a co-working space in downtown Seattle with three browser tabs open, a half-finished deck on her screen, and a cold cup of coffee going filmy at the edge. She is supposed to be finishing a slide about Q2 projections. What she is actually doing is trying to picture her mother."
      },
      {
        "type": "p",
        "text": "Her mother moved into a small adult family home in Burien eleven days ago. The tour went well. The owner was kind. The room has a window that looks out over a yard with a camellia bush in it. She has not said the word \"nursing home\" out loud even once because this is not that, but some part of her keeps trying to make it that because she does not have another mental model for what her mother is doing right now, at 2:47 on a Tuesday, in a house she has been inside of three times."
      },
      {
        "type": "p",
        "text": "She calls at 6. Her mother says the day was fine. Her mother cannot remember what she had for lunch. The daughter goes home, feeds her kids, puts them to bed, and at 11:15pm she types the same question into her laptop that every family types into a laptop in the first few weeks:"
      },
      {
        "type": "p",
        "text": "*What do they actually do all day?*"
      },
      {
        "type": "p",
        "text": "I want to answer that question for her honestly, because I am the woman on the other side of that camellia bush. I have walked a hundred daughters through their first week. I know exactly what she is afraid of, and I know the picture in her head is mostly wrong, but not for the reason most websites will tell her."
      },
      {
        "type": "p",
        "text": "This is what I want her to know."
      },
      {
        "type": "h2",
        "text": "What Does a Day Actually Look Like at a Small Adult Family Home in Burien?"
      },
      {
        "type": "p",
        "text": "The honest answer is that a good day at a small adult family home looks a lot more like an ordinary day in a private home than anything you have seen on a facility brochure. There is no PA system. There is no activity director with a clipboard. There are no color coded wings or scheduled bingo blocks. There is a kitchen that smells like breakfast for most of the morning. There is a living room with a couch people actually sit on. There is a backyard. There are six people who live there, and on any given day, three or four of them are awake, moving around, reading the paper, folding towels, looking out the window, napping on and off."
      },
      {
        "type": "p",
        "text": "A typical weekday here in Burien unfolds in something closer to household rhythm than institutional schedule. People wake up when they wake up, mostly between 6:30 and 8:30. A caregiver is already in the kitchen. Coffee is on. Someone is usually sitting at the table in a robe, and someone else is still in bed with the door cracked. Breakfast happens in a kitchen, not a cafeteria, at a table that seats everyone, eggs and toast and sliced fruit and whatever the house is in the mood for. Medications go with breakfast."
      },
      {
        "type": "p",
        "text": "Mid-morning is the most active part of the day. Showers and dressing happen in a rotation that works around each person's preference. Residents who like to move do: there is a walk around the block if the weather is kind, there is the garden when it is not raining sideways, there is often someone at the kitchen table doing a crossword or a jigsaw or clipping coupons out of the Saturday ad because that is what they have done every Saturday since 1972."
      },
      {
        "type": "p",
        "text": "Lunch is small, warm, and unhurried. Afternoons get quieter. Many residents nap, some for twenty minutes on the couch, some for two hours in their own beds. There is music on low, a television on if someone wants it, a book on someone's lap, a cat on someone's knees, the hum of a dishwasher, the thud of a neighbor's mail truck. The caregiver is nearby, not hovering, doing laundry, folding, starting dinner."
      },
      {
        "type": "p",
        "text": "Dinner is at a reasonable hour, 5:15 or 5:30. People eat together if they want to. Some take a plate to their room. After dinner there is usually a show on, or a puzzle out, or a family member visiting, or a quiet hour with the lamps on. Bedtime is personal. Some residents are down by 8. Some are reading in bed at 10:30. The caregiver is there for every transition."
      },
      {
        "type": "p",
        "text": "That is the schedule. It is not the point."
      },
      {
        "type": "h2",
        "text": "Why \"Activities\" Is the Wrong Question"
      },
      {
        "type": "p",
        "text": "Most families come in asking about activities. I understand why. The brochure language of senior living has trained the whole country to equate \"activities\" with \"quality of care,\" which is why large facilities print calendars full of Bingo Tuesdays and Armchair Yoga Thursdays and hire an activities director whose job it is to fill the hours. That model exists because in a building with sixty or a hundred residents, the day has to be filled, or most of the day becomes what the published research calls \"doing nothing.\""
      },
      {
        "type": "p",
        "text": "The real question every family is asking when they ask about activities is not logistical. It is existential. They are asking: *will my parent still feel like a person?* Will she still have a reason to be in her day? Will her body still know what time it is? Will there be a moment she looks forward to? Will anyone there know that she used to play bridge, and that she hates beets, and that she wants her tea with a little milk?"
      },
      {
        "type": "p",
        "text": "Those questions are not answered by a published activity calendar. They are answered by the structure of the home itself. In a small adult family home, which by Washington State DSHS licensing is capped at six residents in a private house, the ratio of caregivers to residents is typically 1:3 or 1:2 at any given time. That is not a minor difference from a large facility running 1:10 or 1:12. That is a different physics. In a 1:3 home, the caregiver knows the names of your mother's grandchildren within the first week. They know which side of the bed she sleeps on and which show makes her laugh. They know she wants her pills with applesauce, not yogurt. They know she is quiet in the morning because she was a night owl her whole life."
      },
      {
        "type": "p",
        "text": "In a 1:10 facility, no one is going to know that without a chart, and the chart is not the same as knowing."
      },
      {
        "type": "p",
        "text": "So when you tour a small home and ask \"what activities do you have,\" pay attention to the answer you get. If the caregiver reads you a schedule, that is a red flag. If the caregiver says \"we bake a lot, she liked to bake, didn't she?\", that is the answer you came for."
      },
      {
        "type": "h2",
        "text": "What Do Residents Actually DO All Day?"
      },
      {
        "type": "p",
        "text": "The real rhythm of a small home is not a list of activities. It is the texture of a household someone gets to live inside instead of observe. At Burien Best Care Home, on any given day, a resident might sit at the kitchen table in the late morning and snap the ends off green beans while we start the soup for lunch. Another resident might walk three laps around the backyard with a caregiver, looking for the robin that has been nesting in the birch tree. Someone else is napping on the living room couch under a throw blanket with a crossword folded open on her lap. Someone else is watching a game show with the volume just a touch too high. Someone is folding towels, because she always folded towels, and the caregiver knew to ask."
      },
      {
        "type": "p",
        "text": "This is the part most facility brochures cannot photograph. It is the part that matters most."
      },
      {
        "type": "p",
        "text": "There is real data behind why this matters. A merged-methods study of everyday life in residential long-term care found that residents in large facilities spend as much as 47.5% of their day doing nothing at all, and roughly 62.5% of residents report being bored, with 18.5% describing boredom as a constant condition. That is what most families are quietly afraid of when they ask \"what will she do all day.\" They are afraid of the stare. They are afraid of the TV at 3pm with nobody in the room actually watching it."
      },
      {
        "type": "p",
        "text": "A small home does not solve this with a bigger activity calendar. It solves it by the nature of being a home. In a house, the dishwasher needs loading. The laundry needs folding. The table needs setting. The weather needs commenting on. The mailman comes. The kid next door plays basketball in the driveway on Saturday. These are not \"activities.\" They are life, and they continue around your parent in a way that a large building with a polished lobby cannot structurally provide."
      },
      {
        "type": "p",
        "text": "The difference is small and enormous at the same time. It is the difference between being programmed and being present."
      },
      {
        "type": "h2",
        "text": "What If My Parent Has Dementia and Can't Really \"Participate\"?"
      },
      {
        "type": "p",
        "text": "If your parent has dementia and can no longer hold a conversation, follow a puzzle, or sit through a full meal, the question \"what will she do all day\" changes shape but does not disappear. It becomes: *what will it feel like to be her?*"
      },
      {
        "type": "p",
        "text": "The honest answer is that people with moderate to advanced dementia do not need activities the way the rest of us define them. What they need is sensory presence. The smell of coffee in the morning. The sound of a washing machine running, which is a sound they have heard for eighty years and still know. Sunlight on the back of a hand. A piece of music from 1954 on low in the other room. A caregiver's voice saying her name calmly, three or four times a day. A soft blanket on her lap. A cat on her knees, if she was a cat person; a dog by her feet, if she was a dog person."
      },
      {
        "type": "p",
        "text": "This is the structural advantage of the small home for dementia care in particular. In a 1:3 setting, the caregiver does not have to route her through a printed program. They can fold her into the rhythm of the house. She can sit at the kitchen table while lunch is being made, hand you the salt when you ask for it, watch the rain come down the window, listen to the radio, doze off, wake up, take a sip of tea, doze off again. None of that is on an activity calendar. All of it is meaningful engagement for a person with advanced dementia."
      },
      {
        "type": "p",
        "text": "Research on boredom in dementia care repeatedly points to person-centered, small-scale, household style environments as the most reliable intervention. What they are describing is the model Washington State's adult family home licensure was built around."
      },
      {
        "type": "h2",
        "text": "How Do Small Homes Differ From Large Facilities on a Daily Basis?"
      },
      {
        "type": "p",
        "text": "The single biggest difference is that a small home does not separate the life of the house from the life of the resident. In a large facility, the residents are the product of the building. Kitchens are behind closed doors. Laundry happens in a back room with a locked badge reader. Activities happen in a dedicated room on a dedicated schedule. The life of the facility is structurally separated from the residents by function."
      },
      {
        "type": "p",
        "text": "In a six-bed home, the kitchen is the center of the house. The laundry folds on the dining table. The caregiver who gives your mother her morning pill is the same caregiver who makes her lunch, helps her shower after, sits with her during her afternoon program, and tucks her in. There is no shift change at 7am, 3pm, and 11pm where three different people with three different approaches cycle through. Consistency builds trust, especially for residents with memory loss. When you walk in at 4pm to visit, the person pouring tea for your mother is the same person who poured it yesterday, and the day before, and the week before."
      },
      {
        "type": "p",
        "text": "That continuity is also why the transition dip, the rough first two to four weeks after moving in, is shorter in a small home than in a larger one. (If you are in the middle of that right now, we wrote about it in detail in [the first weeks after placement](/blog/first-weeks-after-placement-burien), which I would send you if you were my sister.) The caregiver learning curve compresses from months to days, because there are four caregivers to get to know, not forty."
      },
      {
        "type": "h2",
        "text": "What Should I See on a Weekday Afternoon Visit?"
      },
      {
        "type": "p",
        "text": "On a weekday afternoon visit, what you should see is a house that is clearly being lived in. You should see residents in common areas, not closed off in their rooms unless they have chosen to be. You should see a caregiver who is doing something ordinary, not performing for your visit. You should hear quiet voices, a television at a reasonable volume, maybe a washing machine, maybe nothing at all. You should smell something that belongs in a kitchen. You should see your parent engaged with the space, even if that means napping with her glasses on and a book in her lap. Napping is not the opposite of engagement. Napping in a room full of household sounds, after lunch, with people nearby, is a perfectly human afternoon, and it is what most of us are going to do when we are eighty-six."
      },
      {
        "type": "p",
        "text": "What you should not see is every resident sitting alone in their own room with the door closed at 2pm. You should not see a blaring television in an empty common area. You should not see caregivers on their phones behind a desk. You should not see your parent not knowing who the person standing next to them is, unless dementia is advanced, and even then you should see the caregiver speaking gently, by name, and meeting your parent where she is."
      },
      {
        "type": "p",
        "text": "We covered the broader version of this in the tour piece ([what to actually look for when you tour an adult family home in Burien](/blog/touring-adult-family-home-burien)). The afternoon visit is that same read, just slightly later in the story."
      },
      {
        "type": "h2",
        "text": "What Does a Day Look Like at Burien Best Care Home Specifically?"
      },
      {
        "type": "p",
        "text": "At Burien Best Care Home, a day looks like a real day in a real house. We are a small family style home serving up to six residents, with private care suites and semi-private bathrooms, about ten minutes from Seahurst Park and a short drive from Normandy Park, Boulevard Park, Three Tree Point, and the rest of Burien. We are 1:3 or better through the waking day."
      },
      {
        "type": "p",
        "text": "Mornings are slow and warm. We make breakfast from scratch, we take our time, we sit. Mid-morning is when we move, whether that is a loop around the block, time in the back garden when it is not pouring, a visit from a family member, or just time at the kitchen table with a crossword and company. Lunches are home cooked. Afternoons are quiet by design. We believe a good afternoon has a nap in it, or a book, or a game on the TV with someone sitting near you, or the mail arriving and getting opened together at the table. Dinners are early and unhurried. Evenings are soft, with the lamps on, with music or a show, with a caregiver in earshot the whole time."
      },
      {
        "type": "p",
        "text": "We also accept Medicaid, we serve short-term and respite care families, and we partner with the same King County discharge planners, geriatric care managers, and social workers who are sending families our way every week. If the real estate piece of the family's transition is looming, we work closely with [Your Next Step Home](https://yournextstephome.com) on the home sale side, and for families still doing the upstream education work of figuring out what this next chapter even looks like, [Your Best Season](https://yourbestseason.com) is where we send them for the long view."
      },
      {
        "type": "h2",
        "text": "FAQ"
      },
      {
        "type": "p",
        "text": "**Q: What time do residents wake up at a Burien adult family home?**"
      },
      {
        "type": "p",
        "text": "There is no set wake-up time. Washington State licensing emphasizes resident choice, and residents wake when they wake, typically between 6:30 and 8:30am. Caregivers adjust morning care, medication, and breakfast timing to each resident's preference."
      },
      {
        "type": "p",
        "text": "**Q: How many hours a day does a resident actually have staff attention?**"
      },
      {
        "type": "p",
        "text": "In a 1:3 ratio home, a resident has access to a caregiver nearly continuously through the waking day. Direct one-on-one attention varies by need, but the structural difference from a large facility is that no resident waits in line for help."
      },
      {
        "type": "p",
        "text": "**Q: What do residents do if they don't want to \"participate\"?**"
      },
      {
        "type": "p",
        "text": "Nothing, and that is okay. A small home does not require participation to be part of the household. A resident who prefers to read, nap, or sit quietly in the living room is still part of the rhythm, and a good caregiver builds that choice into the day rather than trying to override it."
      },
      {
        "type": "p",
        "text": "**Q: What happens in the evenings?**"
      },
      {
        "type": "p",
        "text": "Dinner is typically between 5 and 6pm, followed by a quiet evening of television, music, reading, family visits, or early bedtime. There is always a caregiver on site overnight."
      },
      {
        "type": "p",
        "text": "**Q: Are there outings?**"
      },
      {
        "type": "p",
        "text": "Small adult family homes are not structured around group outings the way some larger facilities are. What we do is support individual outings with family, medical appointments, and occasional small group trips when weather, safety, and resident interest align."
      },
      {
        "type": "p",
        "text": "**Q: Can family visit any time?**"
      },
      {
        "type": "p",
        "text": "Yes. Burien Best Care Home welcomes family visits throughout the day. We ask families to coordinate with us around personal care times, and we are flexible."
      },
      {
        "type": "h2",
        "text": "The Gentle Next Step"
      },
      {
        "type": "p",
        "text": "If you are the daughter at the desk with cold coffee, trying to picture your mother at 2:47 on a Tuesday, I would rather you come see a real afternoon than read another brochure. Come at 3pm on a Wednesday. Not 10am when everything is tidy. 3pm, when the light is slanted and lunch is done and the afternoon is quiet and the house is just being itself. That is the day your parent would actually be inside of."
      },
      {
        "type": "p",
        "text": "Schedule a visit at [burienbestcarehome.com](https://burienbestcarehome.com). No clipboard. No pressure. Just a house, at the hour of the day that actually tells you the truth."
      },
      {
        "type": "p",
        "text": "*Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions.*"
      },
      {
        "type": "h3",
        "text": "JSON-LD FAQPage Schema Suggestion"
      },
      {
        "type": "p",
        "text": "```json"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@context\": \"https://schema.org\","
      },
      {
        "type": "p",
        "text": "\"@type\": \"FAQPage\","
      },
      {
        "type": "p",
        "text": "\"mainEntity\": ["
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What time do residents wake up at a Burien adult family home?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"There is no set wake-up time. Washington State licensing emphasizes resident choice, and residents wake when they wake, typically between 6:30 and 8:30am.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How many hours a day does a resident actually have staff attention?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"In a 1:3 ratio home, a resident has access to a caregiver nearly continuously through the waking day.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What do residents do if they don't want to participate in activities?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"A small home does not require participation to be part of the household. Residents who prefer to read, nap, or sit quietly are still part of the rhythm of the home.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What happens in the evenings at an adult family home?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Dinner is typically between 5 and 6pm, followed by a quiet evening of television, music, reading, or family visits. There is always a caregiver on site overnight.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Can family visit any time at a Burien adult family home?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes. Burien Best Care Home welcomes family visits throughout the day, with light coordination around personal care times.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "]"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "```"
      }
    ]
  },
  {
    "slug": "signs-its-time-residential-care-burien",
    "title": "How Do I Know When It's Time? Why So Many Burien Families Wait Too Long to Move a Parent to Residential Care",
    "description": "A Burien adult family home owner's honest answer to the question every adult child eventually whispers at 1am: How do I know when it's time? The signs that actually matter, the pattern most families miss, and why waiting for the \"obvious\" moment costs more than acting earlier.",
    "date": "2026-04-10",
    "author": "Becca Pitts",
    "readingTime": "19 min",
    "tags": [
      "Choosing Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is 1:23 in the morning. She is sitting at the kitchen counter in a t-shirt and sweatpants with her laptop open and a half-eaten bowl of cereal in front of her. Her mother is asleep upstairs in the guest room she has been staying in for three months now, ever since the hospital discharge after the second fall. She has typed the same six words into the search bar twice already and deleted them both times. The third time she leaves them and clicks return."
      },
      {
        "type": "p",
        "text": "*How do I know when it is time?*"
      },
      {
        "type": "p",
        "text": "The results come back. Eleven Signs. Fourteen Signs. Five Indicators. A picture of a smiling silver haired woman in a sun room. A list with bullet points. Bathing. Toileting. Medication. Falls. Weight loss. Wandering. She has seen most of them. She is not sure if she has seen enough."
      },
      {
        "type": "p",
        "text": "She closes her laptop, then opens it again, then closes it. She is waiting for one more sign. One that is so obvious she will not be able to talk herself out of it. One that will give her permission to call."
      },
      {
        "type": "p",
        "text": "I want to talk to her honestly, because I have sat across from a hundred versions of this woman in my kitchen here in Burien, and I was once her daughter myself. The question she is asking is the wrong one. Not because the question is foolish. Because the question is built on a premise that most \"is it time\" articles never name, and the premise is what is keeping her stuck."
      },
      {
        "type": "p",
        "text": "This is what I want her to know."
      },
      {
        "type": "h2",
        "text": "How Do I Know When It's Time to Move My Parent to Residential Care?"
      },
      {
        "type": "p",
        "text": "The honest answer to \"how do I know when it's time\" is that almost nobody recognizes the right time when they are in it. They recognize it about six months later, looking back, after a fall or a hospitalization or a Tuesday afternoon they will never forget. The right time is almost always earlier than the moment most families finally act on it. According to the most recent national caregiving research, 54 percent of family caregivers say they wish they had started planning for senior care sooner. Only about one in four felt prepared when caregiving began. Roughly a quarter of families needed to find care within thirty days of starting their search, and another quarter needed it immediately. That is not a planning timeline. That is a crisis timeline."
      },
      {
        "type": "p",
        "text": "So if you are the daughter at the kitchen counter at 1am wondering whether you are jumping the gun, the data is not on the side of waiting. It is on the side of looking earlier than you think you should, with clearer eyes than you think you can."
      },
      {
        "type": "p",
        "text": "The reason most \"signs\" lists fail families is that they are written as if a single sign should trigger the decision. One bad fall. One missed medication. One time she could not remember the way home. Most adult children who are honest with themselves have already seen several of these signs over the past six to twelve months and have explained each one away. They are not waiting for a sign. They are waiting for permission. And the permission they are waiting for is the kind that only arrives in the form of a hospital bed, which is exactly the form that costs the most and gives the family the least time to choose well."
      },
      {
        "type": "p",
        "text": "You do not need permission. You need a clearer way to read the pattern you are already inside."
      },
      {
        "type": "h2",
        "text": "Why Do So Many Burien Families Wait Too Long?"
      },
      {
        "type": "p",
        "text": "Most Burien families wait too long because the decision feels morally enormous and the signs feel medically ordinary. A fall is a fall. A confused phone call is a confused phone call. None of them on their own feel like a six figure, multi year, change-the-shape-of-your-family decision. So families pattern-match the signs against ordinary aging instead of against the underlying trajectory, and they keep adapting to small declines until one day they look up and realize they have been adapting for two years."
      },
      {
        "type": "p",
        "text": "There are a few reasons this is so common."
      },
      {
        "type": "p",
        "text": "The first is structural denial. Acknowledging that a parent needs residential care means acknowledging that they are no longer who they were. That is a grief most adult children do not have time to feel in the middle of a workday, so the grief gets postponed and the practical decision gets postponed with it. This is not weakness. It is how human beings are wired."
      },
      {
        "type": "p",
        "text": "The second is the sandwich generation reality. Roughly 54 percent of Americans in their 40s have an aging parent and a child under 18. Caregiving gets layered into a life that was already at capacity. There is no obvious moment to stop, take a week off, and assess. The adult child solves the problem of the day every day until the day cannot be solved."
      },
      {
        "type": "p",
        "text": "The third is the false comfort of the compromise. \"I will just hire a few hours of help.\" \"We will get a medical alert button.\" \"I will move in with her on weekends.\" These are real, useful, often loving moves, and they are also the moves that usually delay the decision rather than replace it. They allow the family to keep adapting to a downward trajectory rather than acknowledging it. There is nothing wrong with adapting until you cannot adapt anymore. There is something wrong with adapting past the point of safety because adapting feels less final than choosing."
      },
      {
        "type": "p",
        "text": "The fourth is the parent's resistance. If your mother is still saying \"I'm fine,\" or your father is still saying \"I will leave this house in a box,\" it is hard to act on what you are seeing because you do not have buy-in. (We wrote a whole piece on the conversation that goes nowhere; if you have not read it, [the parent who won't even talk about care](/blog/parent-wont-talk-about-care-burien) might help.) The truth is that the parent's resistance is often the loudest sign that they need more support than they are willing to admit. Anosognosia, the medical term for the inability to perceive one's own deficits, affects roughly 81 percent of people with Alzheimer's disease. Many parents are not lying when they say they are fine. They cannot fully see what you are seeing."
      },
      {
        "type": "p",
        "text": "So the question is not \"have I waited long enough to be sure.\" The question is \"am I about to wait so long that I lose the ability to choose.\""
      },
      {
        "type": "h2",
        "text": "What Are the Real Signs It's Time?"
      },
      {
        "type": "p",
        "text": "The real signs that it is time are not single events. They are patterns that have been going on long enough that you find yourself counting them. If you can list more than three of the following from the past six months, you are not jumping the gun. You are catching up to a reality that has already arrived."
      },
      {
        "type": "p",
        "text": "You have stopped sleeping through the night because you are listening for sounds in your own house, or you are checking your phone every hour to make sure she has not called."
      },
      {
        "type": "p",
        "text": "You have started declining things you used to say yes to. The work trip. The girls' weekend. Your kid's away game. Your own annual physical. You are quietly shrinking your life so it can fit around hers."
      },
      {
        "type": "p",
        "text": "You have noticed that your mother's clothes do not match anymore, or that she is wearing the same shirt three days in a row, or that her hair smells like it has not been washed. You used to gently mention it. You stopped because you got tired of the fight."
      },
      {
        "type": "p",
        "text": "The pill organizer is not getting filled the way it used to. Or it is getting filled but you are not sure she is actually taking from the right day. Or you find pills on the floor."
      },
      {
        "type": "p",
        "text": "The mail is piling up. Bills are not getting opened. There is a small but growing list of things you are quietly handling for her without telling her, because telling her would start a fight and you do not have the energy."
      },
      {
        "type": "p",
        "text": "There has been a fall. Or two. Or \"she sat down\" three times in the last month, which is what she calls it when she falls."
      },
      {
        "type": "p",
        "text": "She has been to the ER in the last year. Maybe twice. Maybe more."
      },
      {
        "type": "p",
        "text": "She is not eating the way she used to. The fridge has the same food in it from your last visit. There is a layer of dust on the stove. She says she eats but the evidence does not match."
      },
      {
        "type": "p",
        "text": "She has called you at an unusual hour, confused, and could not say why."
      },
      {
        "type": "p",
        "text": "She has gotten lost driving somewhere she has driven for thirty years. Or she has stopped driving and has not told you, and you only realized when you noticed the car had not moved."
      },
      {
        "type": "p",
        "text": "You are doing your own crying in the car. After visits. Before visits. On the way home from work thinking about the visit you are about to do."
      },
      {
        "type": "p",
        "text": "Your siblings, if you have them, are starting to make remarks like \"we should probably talk about Mom soon\" but nobody is making the calendar invitation. (If you are doing this alone, [the letter to the sole caregiver](/blog/sole-caregiver-siblings-burien) is for you.)"
      },
      {
        "type": "p",
        "text": "You have a knot in your stomach right now reading this list because you recognized too many of them."
      },
      {
        "type": "p",
        "text": "That knot is the data. It is not anxiety. It is the part of you that has been watching for a year that is finally being given permission to speak."
      },
      {
        "type": "h2",
        "text": "What Counts as a \"Crisis,\" and What Counts as a Warning?"
      },
      {
        "type": "p",
        "text": "A crisis is what most families wait for. A warning is what most families miss. Knowing the difference is what separates a good outcome from a scrambled one."
      },
      {
        "type": "p",
        "text": "A crisis is a 911 call, an ambulance ride, an ER admission, a hospital stay that ends in a discharge planner saying \"she cannot go back home.\" A crisis is a fall with a hip fracture, a stroke, a wandering incident that ends with a stranger driving her back. A crisis is the caregiver collapsing, the spouse dying, the diagnosis arriving. A crisis takes the choice out of your hands and gives you forty eight hours to make a decision that should have taken six weeks."
      },
      {
        "type": "p",
        "text": "A warning is everything that comes before the crisis. The smaller fall she \"sat down\" from. The medication she forgot. The neighbor who called you because she was wearing her bathrobe in the front yard at 4am. The doctor's note that said \"consider higher level of care soon.\" The Saturday you visited and noticed she had not opened her mail in three weeks. The Christmas where she could not follow the conversation around the table."
      },
      {
        "type": "p",
        "text": "The reason this distinction matters is practical, not poetic. Families who act during the warning phase have time to tour, time to interview, time to plan finances, time to involve the parent in the decision in whatever way the parent can still participate. Families who act during the crisis phase get whatever bed is open, often at the highest available cost, often without the parent's input, often during the worst week of their lives. The choice is not between acting and not acting. It is between acting on your own timeline or acting on the hospital's."
      },
      {
        "type": "p",
        "text": "If you have seen warnings, you are still in the window. That window is the most valuable thing you have right now, and it is closing whether you act or not."
      },
      {
        "type": "h2",
        "text": "How Do I Know If My Parent's Care Needs Have Outgrown the Home?"
      },
      {
        "type": "p",
        "text": "Your parent's care needs have outgrown the home when keeping them safe at home requires more hours, more eyes, more lifting, more medical knowledge, and more emotional bandwidth than any one human being can sustainably provide. The line is not crossed in a single moment. It is crossed gradually, and then suddenly."
      },
      {
        "type": "p",
        "text": "A useful way to test this is the activities-of-daily-living count. Bathing, dressing, toileting, transferring (getting in and out of bed and chairs), continence, and eating. These are the six core activities. A person who needs help with two or three of these on a regular basis is in the range where home care or family care can usually still work, with support. A person who needs help with four or more, especially if the help includes overnight or unpredictable timing, has typically outgrown what one family member can safely provide alone, no matter how devoted that family member is."
      },
      {
        "type": "p",
        "text": "If your parent is also experiencing cognitive changes that affect their judgment (leaving the stove on, opening the door to strangers, taking medications incorrectly, getting lost in their own neighborhood), the math gets harder again. Cognitive decline is what turns a manageable physical care load into a 24-hour supervision problem. The sundowning question, especially, is one I have written about in [the 5 o'clock shadow piece](/blog/sundowning-breaking-point-dementia-burien) because that single phenomenon, more than almost any other, is what breaks home dementia care. If your parent is up and confused at 5pm, then again at 11pm, then again at 3am, the staffing math at home cannot win."
      },
      {
        "type": "p",
        "text": "The question is not whether love is enough. Love is enough for almost everything except being awake for 24 hours a day. Bodies do not run that way."
      },
      {
        "type": "h2",
        "text": "What If My Parent Says They're Fine?"
      },
      {
        "type": "p",
        "text": "If your parent says they are fine, your parent is doing exactly what most parents do, which is protect their identity and yours at the same time. \"I'm fine\" is rarely a clinical assessment. It is a request to be left in the version of themselves that did not need help. Honor the request as much as you can. Then trust your eyes about the parts you cannot."
      },
      {
        "type": "p",
        "text": "The mistake most families make here is treating \"I'm fine\" as a veto. It is not a veto. It is a feeling. You can hold both truths at the same time. Your mother deserves to be respected as an adult. Your mother also may not be safe. Both are true. The decision still belongs to the family, and in many cases, to you. If you wait for your parent to say \"you are right, it is time,\" you may wait forever, and the cost of waiting will be paid in falls and ER bills."
      },
      {
        "type": "p",
        "text": "There is a tender version of this conversation that does not require winning. It looks like quiet visits, no clipboard, no pamphlet, no agenda. It looks like noticing out loud, gently, without insisting. (\"Mom, I noticed the laundry is piling up. Want me to help with it next time, or do you want me to bring someone else?\") It looks like making a tour without committing, just to see. It looks like saying \"I'm worried, and I love you, and I'm not asking you to decide anything today.\" Over time, that conversation almost always gets somewhere. But it gets somewhere by being repeated, not by being won."
      },
      {
        "type": "h2",
        "text": "How Is an Adult Family Home Different From the Place You're Picturing?"
      },
      {
        "type": "p",
        "text": "When most families picture residential care, they picture a long carpeted hallway, a name tag, a wheelchair parked in front of a TV, and a smell. That picture comes from the large institutional facilities that dominated senior care in the 1980s and 1990s. It is not what an adult family home is."
      },
      {
        "type": "p",
        "text": "A licensed adult family home in Washington state is a regular residential house, in a regular neighborhood, with up to six residents, staffed by two or three caregivers. Here in Burien, there are 21 licensed adult family homes spread across the neighborhoods you already know. Gregory Heights. Boulevard Park. Three Tree Point. Seahurst. Some are quiet ranchers with rose gardens. Some are split levels near 1st Avenue South with a deck and a maple tree. They look like houses because they are houses."
      },
      {
        "type": "p",
        "text": "The structural difference matters more than people realize. A six-bed home runs at a 1:3 caregiver-to-resident ratio, compared with a 1:10 or worse ratio in most large assisted living buildings. The same caregivers come back day after day. They learn that your father takes his coffee black with one shake of cinnamon, that your mother does not like to be touched on her left arm because of an old injury, that she is more herself before 2pm than after. That kind of knowledge cannot be transferred in a chart. It can only be built in a small home where the same people show up."
      },
      {
        "type": "p",
        "text": "The price is also different. The 2026 statewide median for assisted living in Washington is roughly $5,900 to $6,200 per month. Adult family homes typically run 30 to 50 percent less, and the Medicaid daily rate in Washington is currently around $87 a day, or roughly $2,650 a month for residents who qualify. We wrote about how families actually pay for this in [the money question piece](/blog/paying-for-senior-care-burien). The short version is that adult family homes are often the option that no one told you existed, and that the math sometimes works in ways that the brochure for the big building down the road does not."
      },
      {
        "type": "p",
        "text": "If you have not toured one yet, [our piece on what to actually look for on a tour](/blog/touring-adult-family-home-burien) will spare you a lot of the second guessing. The right home does not feel like a facility. It feels like a kitchen."
      },
      {
        "type": "h2",
        "text": "What Does the \"Right Time\" Actually Look Like in Burien?"
      },
      {
        "type": "p",
        "text": "The right time, in practice, looks like the moment you are reading this article instead of waiting another six months to read it. The right time looks like calling for one tour, not five. It looks like driving to a house in Burien on a Saturday morning, sitting at a kitchen table, and asking a real human being some honest questions, with no commitment."
      },
      {
        "type": "p",
        "text": "If you are local, here is what your own region offers you in terms of structural support. Community Living Connections (855-567-0252) is the King County aging and disability resource line, free and confidential, and they can help you understand what is available to your specific family situation. The Washington State DSHS adult family home locator lets you search licensed homes in Burien, White Center, Normandy Park, West Seattle, and the rest of South King County. The Alzheimer's Association of Washington has a 24-hour helpline (800-272-3900) that does not charge anything to anyone for any reason. The Family Caregiver Learning Portal offers 24 hours of free training for family caregivers in English and Spanish, which is useful regardless of where you land on the residential care question. None of these resources require you to commit to anything. All of them know more than the search bar at 1am."
      },
      {
        "type": "p",
        "text": "The local advantage of Burien specifically, and of South King County more broadly, is that small adult family homes are densely available here. You do not have to drive an hour to tour three houses. You can do it in a Saturday. You can do it before you have to."
      },
      {
        "type": "h2",
        "text": "The Reframe: You Are Not Choosing Between Caring and Not Caring"
      },
      {
        "type": "p",
        "text": "Here is the reframe I want you to take to bed tonight if you take nothing else."
      },
      {
        "type": "p",
        "text": "Choosing residential care is not the opposite of caring. It is one of the forms caring takes. The forms of caring change as the needs change. In the early years, caring looks like driving to medical appointments, organizing pills, helping with the lawn, calling on Sundays. In the middle years, caring looks like more frequent visits, more hours, more decisions. In the late years, for most families, caring eventually looks like making sure your parent is somewhere with two or three caregivers who know her, where she is fed, dressed, kept clean, kept safe, and treated with dignity, while you go back to being her daughter or her son instead of her shift worker."
      },
      {
        "type": "p",
        "text": "The question is not whether you love her enough to care for her at home. The question is whether the care she needs can be delivered safely by one human being who also has a job, a marriage, children, a body. For almost every family I have ever worked with in 20 years, the honest answer is no, eventually. The families who reach that answer earlier rather than later end up with better outcomes, more present visits, less burnout, and far fewer regrets."
      },
      {
        "type": "p",
        "text": "If you have read this far, you are probably the daughter at the counter, or the son who finally got the call from his sister, or the spouse who has been carrying it alone for years. You are not jumping the gun. You are doing what many families wish they had done six months sooner."
      },
      {
        "type": "p",
        "text": "A gentle next step: just see one home. Not five. One. Drive to it on a Saturday. Sit at the kitchen table. Ask the questions you actually want to ask. There is no commitment, no clipboard, no pressure. We do this all the time at our home in Burien. Most families leave with more clarity than they arrived with, even if they decide it is not yet time. Sometimes especially then."
      },
      {
        "type": "p",
        "text": "If you want to think more broadly about the season of life you are in (yours, not just your parent's), [yourbestseason.com](https://yourbestseason.com) is a senior transitions education platform we built for exactly this kind of thinking. And if you are also wrestling with what to do about the family home itself, what comes out of it, what gets sold, what gets passed down, [yournextstephome.com](https://yournextstephome.com) walks Washington families through that part with the same care."
      },
      {
        "type": "p",
        "text": "You do not have to make any decision tonight. Just close the laptop, drink a glass of water, and know that the question you have been asking is a real one and the answer is closer than you have been letting yourself believe."
      },
      {
        "type": "p",
        "text": "You are allowed to act before the crisis. That is the whole point."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How do I know if my parent needs residential care?**"
      },
      {
        "type": "p",
        "text": "You probably know already. Most adult children sense the answer six to twelve months before they act on it. The clearest signal is a pattern, not a single event: multiple falls, missed medications, weight loss, declining hygiene, social withdrawal, increasing confusion, your own caregiver burnout. If you can list more than three of those from the past six months, you are not being premature. National data shows 54 percent of caregivers wish they had started planning sooner."
      },
      {
        "type": "p",
        "text": "**What is the difference between an adult family home and assisted living in Washington state?**"
      },
      {
        "type": "p",
        "text": "An adult family home is a licensed residential house with up to six residents, typically with a 1:3 caregiver-to-resident ratio. Assisted living facilities are larger commercial buildings with 50 to 200 residents and ratios closer to 1:10. Adult family homes typically cost 30 to 50 percent less than assisted living and accept Medicaid for qualifying residents. There are 21 licensed adult family homes in Burien."
      },
      {
        "type": "p",
        "text": "**How much does an adult family home cost in Burien, WA?**"
      },
      {
        "type": "p",
        "text": "Private pay rates at adult family homes in Burien typically range from approximately $4,000 to $7,500 per month depending on care needs. The Washington Medicaid daily rate is currently around $87 per day (approximately $2,650 per month) for residents who qualify through the COPES waiver program."
      },
      {
        "type": "p",
        "text": "**What if my parent refuses to consider residential care?**"
      },
      {
        "type": "p",
        "text": "Most parents initially refuse. Roughly 85 to 90 percent of older adults express a preference to stay in their own home, and 81 percent of people with Alzheimer's experience anosognosia (the inability to perceive their own deficits). The conversation works better as a series of small, repeated, low-stakes mentions over weeks and months than as one big sit-down. Touring without committing often softens resistance because the picture in the parent's head usually does not match what an adult family home actually looks like."
      },
      {
        "type": "p",
        "text": "**Should I wait until there's a crisis to decide?**"
      },
      {
        "type": "p",
        "text": "No. Families who decide during the \"warning\" phase (smaller falls, missed medications, increasing confusion) have time to tour, plan finances, and involve the parent in the decision. Families who decide during a crisis (a hospitalization, a major fall, a wandering incident) usually get 24 to 72 hours to make a decision, with whatever bed is available, often at the highest cost. Acting on warnings is the cheaper, kinder, and more loving timeline."
      },
      {
        "type": "p",
        "text": "**What resources are available in King County for families starting this process?**"
      },
      {
        "type": "p",
        "text": "Community Living Connections (855-567-0252) is the free King County aging and disability resource line. The Washington State DSHS Adult Family Home Locator lets you search licensed homes in Burien and surrounding areas. The Alzheimer's Association of Washington has a 24-hour helpline (800-272-3900). The Washington Family Caregiver Learning Portal offers free training. None of these require any commitment or payment."
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "If you would like to visit our home in Burien, no commitment, no clipboard, just a real conversation, you can reach us at [burienbestcarehome.com](https://burienbestcarehome.com)."
      }
    ]
  },
  {
    "slug": "touring-adult-family-home-burien",
    "title": "What to Actually Look For When You Tour an Adult Family Home in Burien (What the Checklists Don't Tell You)",
    "description": "A Burien adult family home owner's honest guide to what really matters on a tour. The quiet signals most checklists miss, the questions that get honest answers, and the red flags you can spot in the first ninety seconds.",
    "date": "2026-04-03",
    "author": "Becca Pitts",
    "readingTime": "14 min",
    "tags": [
      "Choosing Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is 9:14 on a Saturday morning. She is parked outside the third house on her list, still in the driver's seat, holding a printed checklist she found on a senior living website at 1am. Thirty-two bullet points. She has already used it at two homes. Both times, the caregiver walked her through, answered every question politely, showed her the fire extinguisher and the medication cart, handed her a folder, and sent her back to her car with a business card and a vague good feeling. She cannot remember which home had the sunroom and which one had the bird feeder. She cannot remember which caregiver said \"we treat them like family\" and which one said \"we treat them like our own.\" They both said that."
      },
      {
        "type": "p",
        "text": "She writes on the top of the checklist in blue pen: *How am I supposed to tell?*"
      },
      {
        "type": "p",
        "text": "I want to answer her question honestly, because I have been on her side of this. I have toured homes for my own family. I have also, for more than twenty years, been on the other side of that kitchen table watching families try to make a six-figure, multi-year, life-shaping decision based on a forty-five minute walkthrough and a folder of laminated pages. The checklists are not wrong. They are just not enough. They tell you what to count. They do not tell you what to feel for."
      },
      {
        "type": "p",
        "text": "This is what I wish someone had told me before my first tour."
      },
      {
        "type": "h2",
        "text": "What Should I Actually Look For When Touring an Adult Family Home?"
      },
      {
        "type": "p",
        "text": "The single most important thing you are looking for on a tour is not a feature or a credential. It is whether the house is actually being lived in, by actual people, in an actual normal way, on the actual day you are standing in it. Everything else is downstream of that."
      },
      {
        "type": "p",
        "text": "A licensed Washington adult family home is, by definition, a residential home with up to six residents. That is not a marketing phrase. It is a structural reality. If you walk in and the home feels like a waiting room, a hotel lobby, or a doctor's office, the structure is being fought against. If you walk in and it feels like you interrupted a late breakfast, the structure is working the way it was designed."
      },
      {
        "type": "p",
        "text": "So before you count doorways and ask about staffing ratios, stand in the entryway for ninety seconds and notice: Is anyone actually home besides the person giving you the tour? Can you hear a television, a conversation, a dish being rinsed, a dog? Is there a half-finished crossword on the coffee table? Is there a resident in the living room, awake, being a person? Or has the house been staged, cleared, and quieted for your arrival?"
      },
      {
        "type": "p",
        "text": "You do not want a staged house. You want a lived-in one."
      },
      {
        "type": "h2",
        "text": "What Are the Red Flags to Watch for in the First Ninety Seconds?"
      },
      {
        "type": "p",
        "text": "The red flags on an adult family home tour are usually visible before you get past the entryway, and they cluster into four categories: smell, sound, sight, and the behavior of the person greeting you."
      },
      {
        "type": "p",
        "text": "*Smell.* A home with six older adults in it will not smell like a spa. It should smell faintly like whatever was cooked that morning, a little like laundry, maybe a little like a cat or a dog if there is one. What you are checking for is a persistent urine smell, especially near the bedrooms or the laundry area, because that is the single most reliable indicator that incontinence care is not happening on schedule. Heavy air freshener, plug-ins in every outlet, or a wall of Febreze when you walk in is not a win. That is covering."
      },
      {
        "type": "p",
        "text": "*Sound.* You want to hear the house doing something. Not silence. Not the television blasting as the only source of life. A radio in the kitchen, voices in a back room, someone humming while they fold towels. If the home is completely silent at 10am on a weekday and every resident is parked in front of the same TV, ask what the morning looked like before you got there."
      },
      {
        "type": "p",
        "text": "*Sight.* Look at the residents, briefly and respectfully, without making it a study. Are they dressed for the day or still in nightgowns at 11am? Is their hair brushed? Are their hands and faces clean? Are they wearing their glasses and hearing aids? Are they sitting in positions that look comfortable, or are they slumped sideways in chairs that are not supporting them? Dignity is visible. So is its absence."
      },
      {
        "type": "p",
        "text": "*The greeter.* Notice whether the person giving you the tour knows the residents' names, touches them gently in passing, makes eye contact with them, or walks past them as if they are furniture. Notice whether residents look up when the caregiver enters the room. A resident who brightens when their caregiver walks in is worth more than any brochure."
      },
      {
        "type": "p",
        "text": "If any of those four categories throws an obvious flag, do not talk yourself out of it because the kitchen was beautiful. The kitchen is not who is going to hold your mother's hand at 3am."
      },
      {
        "type": "h2",
        "text": "What Questions Actually Get Honest Answers?"
      },
      {
        "type": "p",
        "text": "The questions that get honest answers on a tour are specific, scenario-based, and impossible to recite from a script. Generic questions get generic answers. Specific questions get the truth."
      },
      {
        "type": "p",
        "text": "Here are the ones I would ask, and what each one is actually testing for."
      },
      {
        "type": "p",
        "text": "*\"Walk me through what a Tuesday morning looks like here, from wake-up to lunch.\"* You are testing whether the home has a rhythm or whether every day is improvised. A real home will tell you small, specific things: so-and-so always wakes up at 6, we have coffee in the kitchen, Tuesday is shower day for two residents, lunch is usually around noon, someone always watches the midday news. Vague answers are a flag."
      },
      {
        "type": "p",
        "text": "*\"How long have your caregivers been with you, and can I meet whoever is working today?\"* You are testing for turnover. Adult family homes live or die on the continuity of their caregivers. If the person giving you the tour cannot introduce you to anyone who has been there more than a few months, that matters. A stable team that knows each resident's story is the single most important quality marker in this industry."
      },
      {
        "type": "p",
        "text": "*\"What happens when a resident has a hard night?\"* You are testing for honesty. A home that says \"oh, we don't really have hard nights\" is either lying or so new they have not had one yet. A real operator will tell you about sundowning, about the resident who calls out for her mother, about the specific ways they respond, about what they do when a resident refuses medication. You want the honest answer, not the clean one."
      },
      {
        "type": "p",
        "text": "*\"Can I see the room my parent would actually be in, not the model?\"* You are testing for transparency. If they can only show you an empty showcase room, ask why. If a room is open, you are entitled to see it. If every room is occupied, ask to see the common areas where your parent would spend most of their time, and look at the shared bathroom your parent would use. The shared bathroom is the most honest room in the house."
      },
      {
        "type": "p",
        "text": "*\"Who is your backup when your primary caregiver is sick, and how often does that happen?\"* You are testing for infrastructure. A small home is a small home. It has two or three caregivers, not forty. If the answer is clean and specific (we have a relief caregiver named [X] who has been with us three years, she covers every Thursday and any call-out), that is good. If the answer is a blank stare, that is a problem."
      },
      {
        "type": "p",
        "text": "*\"How do you communicate with families? What does an average week look like from my side?\"* You are testing for partnership. The best homes have an actual communication rhythm. Weekly updates. Photos. A direct phone number to the person actually caring for your parent. If the answer is \"we will call you if there is an issue,\" that is not communication. That is silence with a fire alarm."
      },
      {
        "type": "h2",
        "text": "What Should I Look For in the Bathroom and the Bedrooms?"
      },
      {
        "type": "p",
        "text": "The bathroom and bedrooms tell you more about the quality of daily care than any other rooms in the house, which is exactly why they are the rooms most likely to be closed on a tour."
      },
      {
        "type": "p",
        "text": "In the bathroom, look for grab bars that are actually bolted into studs, not suction cups. Look for a shower chair or bench. Look for a non-slip mat that is clean. Look at the counter: is there a caddy of personal items for each resident, or a shared bin of generic toiletries? Individualized care leaves a visible trail. Open the cabinet under the sink briefly and notice whether it is organized or chaos."
      },
      {
        "type": "p",
        "text": "In the bedroom, look for personal items. Photos. A quilt from home. A lamp that is clearly not the facility's lamp. Books. A familiar chair. A home that encourages residents to bring their lives with them is a home that sees them as people. A bedroom that looks like a hotel room, stripped and generic, tells you the home sees residents as inventory."
      },
      {
        "type": "p",
        "text": "Check the bed height. Check whether there is a call button, a baby monitor, or some way for the resident to get attention at night. Check whether the light switches are reachable from the bed. Check the floor for tripping hazards, and the rugs for slipping hazards."
      },
      {
        "type": "p",
        "text": "None of this is on a checklist because none of it is about compliance. It is about whether someone who cares has walked through this room recently with an older person's body in mind."
      },
      {
        "type": "h2",
        "text": "How Do I Compare Three Homes Without Getting Them Confused?"
      },
      {
        "type": "p",
        "text": "To compare homes without confusing them, take photos (with permission) of one specific thing in each house, write a single sentence about how the house felt in the first ninety seconds before you met anyone, and rate each home on three things only: how the residents looked, how the caregiver treated the residents, and whether you could picture your parent in the living room at 3pm on a Wednesday."
      },
      {
        "type": "p",
        "text": "The mistake most families make is trying to grade thirty-two things at three homes. That produces a spreadsheet that looks thorough and tells you nothing. The three things above are the things that matter most and the things that are hardest to fake. A home that scores well on those three will almost always score well on the details. A home that scores beautifully on the details but poorly on those three is a beautifully lit room with nobody home."
      },
      {
        "type": "p",
        "text": "After the tour, sit in your car and ask yourself one question before you drive away: *If my mother had a bad night tonight, would I trust this specific person to be the one sitting next to her?* Not \"the home.\" The person. Because in a six-bed adult family home, the person is the home."
      },
      {
        "type": "h2",
        "text": "What Is Different About Touring a Small Home Versus a Large Facility?"
      },
      {
        "type": "p",
        "text": "Touring a small home is different from touring a large facility because in a small home, what you see is what you get. There is no separate memory care wing, no marketing team behind a desk, no model unit hiding a different reality upstairs. The person giving you the tour is usually the person who will be caring for your parent, or works alongside that person every day. The house you walk into is the house your parent will wake up in."
      },
      {
        "type": "p",
        "text": "That is both the gift and the exposure of the adult family home model. You cannot hide in a small home. The kitchen is the kitchen. The caregiver is the caregiver. If you like what you see, you can trust it. If you do not, trust that too."
      },
      {
        "type": "p",
        "text": "This is one of the reasons the small-home model matters so much for families navigating dementia and late-stage care. Research and families we work with across Burien, White Center, Normandy Park, and West Seattle consistently report that the quality of the primary caregiver is the single biggest predictor of resident wellbeing. A 1:3 caregiver ratio in a six-bed home means your parent is not one of forty names on a shift sheet. They are one of three. That is a structural advantage you can feel the moment you walk in, if it is real."
      },
      {
        "type": "p",
        "text": "For a deeper look at why the small-home structure produces different outcomes for families in transition, our [earlier piece on the first weeks after placement](/blog/first-weeks-after-placement-burien) walks through the actual rhythm of a six-bed home during the adjustment period."
      },
      {
        "type": "h2",
        "text": "What If I Feel Something Is Off but I Cannot Name It?"
      },
      {
        "type": "p",
        "text": "If you feel something is off on a tour and cannot name it, trust the feeling. Adult children who are deep into caregiving have developed an instinct for their parent's safety that is sharper than any checklist. That instinct is real data. The conscious mind has not caught up to it yet, but your body knows."
      },
      {
        "type": "p",
        "text": "Families tell me this happens in both directions. Sometimes a home looks beautiful on paper and the feeling in the stomach says no. Sometimes a home looks ordinary on paper and walking through it feels like exhaling for the first time in six months. Both are information. Do not override either one to please a brochure or a referral agent."
      },
      {
        "type": "p",
        "text": "If you feel the no, leave. You do not owe anyone a second visit. You do not owe anyone an explanation. You are not being dramatic. You are reading the room the way you have been trained by a year or two of watching over your parent."
      },
      {
        "type": "p",
        "text": "If you feel the yes, do not rush past it. Sit with it. Come back a second time, unannounced if they allow it, at a different time of day, and see whether the yes holds. A real yes usually holds on the second visit. A manufactured yes does not."
      },
      {
        "type": "h2",
        "text": "How Burien Best Care Home Approaches the Tour"
      },
      {
        "type": "p",
        "text": "We approach tours here the same way we approach the rest of the work: without a script. When you come to visit, you are going to walk into a house where the residents are living their actual day. You might meet someone in the middle of a puzzle, or hear the kettle on, or see somebody's granddaughter visiting. We do not clear the house for tours. We think that would tell you the wrong thing about us."
      },
      {
        "type": "p",
        "text": "I will sit with you at the kitchen table for as long as you want. I will answer the hard questions honestly, even the ones about what we are still learning. I will show you the room your parent would actually be in, not a model. I will introduce you to whoever is working that day. And if the answer for your family is that this is not the right fit, I will help you think about what might be, including other good Burien operators I respect. No pressure. No sales pitch. Just a real conversation."
      },
      {
        "type": "p",
        "text": "If you are in the earlier part of the decision and your parent is still at home, [Your Best Season](https://yourbestseason.com) has more on navigating the broader senior transition. If the move is going to involve selling or transitioning the family home, [Your Next Step Home](https://yournextstephome.com) is built specifically for Washington families walking through that piece."
      },
      {
        "type": "h2",
        "text": "One Last Thing Before You Tour"
      },
      {
        "type": "p",
        "text": "You are not looking for a perfect home. There is no such thing. You are looking for a home that is honest about who it is, run by people who see your parent as a person, in a structure where the caregiver actually has time to care. That is a real thing, and it is findable, and you will know it when you walk into it."
      },
      {
        "type": "p",
        "text": "The woman I started this piece with, sitting in her car outside the third house on her Saturday list, is not going to find the answer on her checklist. She is going to find it when she lets the checklist drop into her lap, walks into a house that smells a little like coffee and toast, and finds her shoulders coming down for the first time in a week."
      },
      {
        "type": "p",
        "text": "That is the home. Trust the shoulders."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How long should an adult family home tour take?**"
      },
      {
        "type": "p",
        "text": "A real tour should take at least 45 minutes to an hour, including unhurried time in the kitchen and common areas. A rushed 15-minute walkthrough is a sign the operator is more interested in filling a bed than in fit."
      },
      {
        "type": "p",
        "text": "**Should I bring my parent on the first tour?**"
      },
      {
        "type": "p",
        "text": "Usually no. The first tour is for you to screen. If you find a home that feels right, bring your parent on a second visit, during a time of day your parent is most themselves, and keep the visit short."
      },
      {
        "type": "p",
        "text": "**How many adult family homes should I tour in Burien?**"
      },
      {
        "type": "p",
        "text": "Three to five is typical. Fewer than three and you do not have a frame of reference. More than seven and they start to blur. Tour in clusters of two or three on the same day so you can compare while the feeling is fresh."
      },
      {
        "type": "p",
        "text": "**What licensing should I verify in Washington state?**"
      },
      {
        "type": "p",
        "text": "Every adult family home in Washington must be licensed by DSHS. You can look up the license, inspection history, and any complaints through the DSHS facility locator. Ask the operator directly for their most recent inspection results. A good operator will hand them over without flinching."
      },
      {
        "type": "p",
        "text": "**Can I do a surprise visit after the official tour?**"
      },
      {
        "type": "p",
        "text": "Most good operators allow unannounced visits, within reason. Ask directly. \"Can I stop by next week without calling first?\" If the answer is yes with a smile, that tells you something. If the answer is a long pause, that also tells you something."
      },
      {
        "type": "p",
        "text": "*Schema suggestion: Apply FAQPage JSON-LD schema to this section to improve AEO/GEO visibility for question-based queries.*"
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "*If you are a family in Burien, White Center, Normandy Park, West Seattle, or elsewhere in King County thinking about a tour, you are welcome to come visit Burien Best Care Home. No pressure. No sales pitch. Just a real conversation.*"
      }
    ]
  },
  {
    "slug": "first-weeks-after-placement-burien",
    "title": "The First Weeks After You Move Your Parent Into Care: What Nobody Warns Burien Families About (And Why the Hard Part Isn't What You Think)",
    "description": "The first weeks after moving a parent into care are the hardest. A Burien adult family home owner on what to expect, the guilt and second-guessing, and how families settle in.",
    "date": "2026-03-27",
    "author": "Becca Pitts",
    "readingTime": "17 min",
    "tags": [
      "After Placement",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It is 6:42 on a Tuesday morning in Burien. You have been awake since 4:15. Your mother moved into her new room on Sunday afternoon. Since then, she has called you twice asking when you are coming to get her, cried once when you visited, told a caregiver she does not live here, and asked you on the phone yesterday if you remember how to get to the house on 12th Avenue because she needs her robe from the closet."
      },
      {
        "type": "p",
        "text": "You do not have her robe. Her robe is there, folded, on the chair in her new room. You watched her look at it on Sunday and she said it was not hers."
      },
      {
        "type": "p",
        "text": "And now you are sitting at your own kitchen table with a cold cup of coffee, a legal pad with the word *mistake?* written on it in your own handwriting, and that voice in your head saying *this is not working, she is getting worse, I should bring her home.*"
      },
      {
        "type": "p",
        "text": "I want to tell you something before you call your brother, before you call the home, before you do anything."
      },
      {
        "type": "p",
        "text": "What you are seeing this week is not evidence that you made the wrong choice. What you are seeing this week is exactly what the first weeks look like. Almost nobody tells families this ahead of time, and the silence is what turns a hard transition into a crisis."
      },
      {
        "type": "p",
        "text": "This article is for every adult child in Burien, White Center, Normandy Park, and across King County who just moved a parent into residential care and is sitting with the private, unspoken fear that something is going wrong. Let me walk you through what is actually happening, why it feels worse before it gets better, and what the next ninety days can look like when you know what to expect."
      },
      {
        "type": "h2",
        "text": "What Should I Expect the First Week After Moving My Parent Into an Adult Family Home?"
      },
      {
        "type": "p",
        "text": "Expect it to be harder than you were prepared for, for three reasons that most advice articles quietly skip over. First, your parent's confusion or behavior may visibly intensify for a short window. Second, your own guilt may sharpen rather than soften. Third, the grief that was buried under logistics for months will finally surface now that you have handed off the daily tasks. None of these are signs that the placement is failing. All three are the transition working."
      },
      {
        "type": "p",
        "text": "The published research and the lived experience in our home both point to the same rough timeline. In most cases, the adjustment period for a parent moving into an adult family home or memory care setting is three to six months, with the hardest stretch usually falling in the first two to four weeks. During that early window, families commonly notice a temporary uptick in disorientation, a flattened appetite, disrupted sleep, and the ache of what specialists call relocation stress. It can look like a cliff. It is almost always a dip."
      },
      {
        "type": "p",
        "text": "I have been doing this work for more than twenty years, and I have walked beside many families through these weeks. What I can tell you plainly is that the parent who looks, on day four, like she has declined overnight is very rarely declining. She is landing."
      },
      {
        "type": "h2",
        "text": "Why Does My Parent Seem Worse Right After Moving In?"
      },
      {
        "type": "p",
        "text": "Your parent often seems worse right after moving in because change itself is cognitively expensive, and the nervous system of an older adult, particularly one living with dementia, spends every bit of available energy trying to orient. New walls, new smells, new sounds at night, new faces, new routines. All of it runs on the same cognitive battery that used to pay for conversation, humor, recognition, and appetite."
      },
      {
        "type": "p",
        "text": "Caregivers in the senior care community have a short phrase for this: the transition dip. Memory care specialists describe the same pattern in research and in practice. During the first weeks, you may see more repetition, more asking for people from the past, more packing and unpacking of drawers, more requests to go home even when home is where the person spent fifty years. This is not the dementia accelerating. This is the brain rerouting."
      },
      {
        "type": "p",
        "text": "There is also something else happening that almost nobody names. When your parent was at home and you or a spouse or a revolving door of help were covering the gaps, a great deal of daily function was scaffolded. The coffee appeared. The pills were prompted. The TV volume was adjusted. The bathroom door was left open at night. In residential care, all of that scaffolding is still there, but it is held by people who do not yet know your parent's preferences. For the first ten to fourteen days, that mismatch shows up as behavior. Once our caregivers learn that your mother only likes her coffee with one sugar and a splash of half-and-half, that she does not want the ceiling light on during dinner, that she calls her late husband Buddy and not Robert, the behavior softens. This is not a mystery. This is human."
      },
      {
        "type": "p",
        "text": "If your parent is in an adult family home with a small caregiver to resident ratio, the learning curve is compressed. In a six-bed home like ours here in Burien, the same two or three caregivers see your parent every day, all day. They pick up preferences in days, not months. That is why the dip is usually shorter in a small home than in a large facility where the staff rotates constantly."
      },
      {
        "type": "h2",
        "text": "Why Is My Guilt Getting Worse Instead of Better After Placement?"
      },
      {
        "type": "p",
        "text": "Your guilt is getting worse instead of better because the placement did not cause the guilt. The placement revealed it. For months or years, you were running on adrenaline, to-do lists, and the sheer cognitive load of keeping your parent safe. That kept the grief underground. The day you handed off the caregiving, the ground collapsed."
      },
      {
        "type": "p",
        "text": "This is one of the most important things I wish someone had told me before I sat with families through it. More than half of caregivers in published research report feeling at least somewhat guilty after placement, and more than one in ten report feeling extremely guilty. It is not a character flaw. It is the grief that your logistics had been suppressing."
      },
      {
        "type": "p",
        "text": "What it sounds like, in real kitchens in real Burien neighborhoods, is this:"
      },
      {
        "type": "p",
        "text": "*I thought I would feel relieved.*"
      },
      {
        "type": "p",
        "text": "*I have more time now and I am using all of it to cry.*"
      },
      {
        "type": "p",
        "text": "*I keep driving past her old house.*"
      },
      {
        "type": "p",
        "text": "*I should have done this sooner. I should have done this later. I should not have done this at all.*"
      },
      {
        "type": "p",
        "text": "*She asked me to take her home and I lied and said soon.*"
      },
      {
        "type": "p",
        "text": "If any of that is living in your body right now, I want you to hear me. You are not broken. You are grieving. You are grieving the version of your parent who did not need help. You are grieving the years you spent being the one who knew where her glasses were. You are grieving the fantasy that you could do this forever without breaking. And you are grieving it out loud now because you finally have the bandwidth to feel it."
      },
      {
        "type": "p",
        "text": "For more on this specific grief, my team and I write about the emotional geography of senior transitions at [yourbestseason.com](https://yourbestseason.com). If this piece lands with you, you will find company there."
      },
      {
        "type": "h2",
        "text": "How Often Should I Visit My Parent the First Week?"
      },
      {
        "type": "p",
        "text": "Visit often enough to reassure yourself, but not so often that your parent cannot begin to anchor in their new home. For most families, that looks like short daily visits for the first three to five days, then a shift to every other day or every third day through the end of the first month. There is no single right answer, and the right cadence depends on your parent's cognitive status, the facility's guidance, and your own capacity."
      },
      {
        "type": "p",
        "text": "A few things I tell every family who asks me this question, which they almost always do on day two."
      },
      {
        "type": "p",
        "text": "Short visits tend to help more than long ones the first week. Thirty to forty-five minutes is often a sweet spot. Long visits can overwhelm a parent who is still orienting, and they can also turn into repeated goodbyes, each of which feels like a fresh abandonment to a brain working without a shorthand for time."
      },
      {
        "type": "p",
        "text": "Come at a time that is not a transition window. Right before a meal, right before bed, and right at the dementia sundowning hour (late afternoon) are the hardest times to come and go. Mid-morning or early afternoon is usually kinder to everyone, your parent included."
      },
      {
        "type": "p",
        "text": "Let the caregivers see you. Ask questions. Tell us stories about your mother we do not know yet. When you walk in and a caregiver says, \"Oh, I heard your mom used to play the organ at church in West Seattle in the sixties,\" your mother will have a better day because of it. This is what a good adult family home is built on."
      },
      {
        "type": "p",
        "text": "And if your parent cries when you arrive, cries when you leave, or says she wants to come home while holding your hand, do not take this as evidence that the placement is failing. Take it as evidence that she still knows you, still loves you, and still wants more of you. That is a very different thing from being in the wrong place."
      },
      {
        "type": "h2",
        "text": "Should I Bring My Parent Home for Visits During the First Month?"
      },
      {
        "type": "p",
        "text": "In most cases, no, not during the first month. This is counterintuitive for most families, and it is one of the hardest pieces of advice to sit with, but it is what the research and our own lived experience in Burien both show."
      },
      {
        "type": "p",
        "text": "When a parent with dementia or significant cognitive change is taken back to the old home in the first weeks, the brain often reads it as, *oh, we are back, the move is over.* Re-entering the care home after that visit feels like a brand new move, and the dip restarts. For parents without dementia, brief visits home can be fine, but even then, many find it emotionally harder than expected. You know your parent. Trust that knowledge. Ask the care team what they are seeing and factor it in."
      },
      {
        "type": "p",
        "text": "If your parent is doing well enough that a short outing feels appropriate, something like a walk around Seahurst Park, a coffee at a local cafe, or a car ride along the water can be a beautiful middle path. You get connection without the neurological whiplash of going back to the former home."
      },
      {
        "type": "h2",
        "text": "What Does a Good First Month in an Adult Family Home Actually Look Like?"
      },
      {
        "type": "p",
        "text": "A good first month looks like a slow, uneven curve upward, not a straight line. Expect some very hard days and some surprisingly peaceful ones. The timeline most families in our home experience, with variation, tends to look something like this."
      },
      {
        "type": "p",
        "text": "The first three to five days are often the hardest emotionally for everyone. Parents may ask repeatedly to go home. Families may sleep badly and call the home multiple times a day. Caregivers are learning the resident's rhythms."
      },
      {
        "type": "p",
        "text": "Days five through fourteen tend to bring the transition dip, with more confusion, disrupted sleep, and decreased appetite. Small routines begin to form. The caregiver who helps your mother with morning coffee starts to become familiar."
      },
      {
        "type": "p",
        "text": "Weeks three and four usually bring the first exhale. Sleep often starts to regulate. Appetite improves. Your parent may begin to use the caregiver's name. You may notice a specific chair that has become \"her\" chair at breakfast."
      },
      {
        "type": "p",
        "text": "By the end of the second month, most residents have found something that looks like a rhythm. Not every day is easy. But there is rhythm. And the family, too, starts to sleep again."
      },
      {
        "type": "p",
        "text": "This is the math that most articles skip. It is not easy. It is not linear. And it is not a failure. It is a landing."
      },
      {
        "type": "h2",
        "text": "How Do I Know If My Parent Is Actually in the Right Place?"
      },
      {
        "type": "p",
        "text": "You know your parent is in the right place by watching for small, stubborn signs that are independent of any single bad day. Look for these over the first month, not over the first afternoon."
      },
      {
        "type": "p",
        "text": "Caregivers know specific things about your parent that only someone paying attention would notice. *Your mom likes her blanket folded in thirds, not in half.*"
      },
      {
        "type": "p",
        "text": "Your parent is clean, dressed in clothes that fit the weather, hair brushed, nails attended to, even on days nobody warned her family was coming."
      },
      {
        "type": "p",
        "text": "Your parent is eating, even if the appetite is still smaller than you would like, and there is evidence someone knows what she will and will not eat."
      },
      {
        "type": "p",
        "text": "You can ask a question and get a real answer the same day, from someone who knows your parent by name, not from a front desk."
      },
      {
        "type": "p",
        "text": "When you walk in unannounced on a Tuesday at 2pm, the home smells clean, sounds alive, and your parent is somewhere in the middle of the daily life of the house, not parked alone in front of a television."
      },
      {
        "type": "p",
        "text": "If those things are true, the hard first weeks are almost always a transition, not a red flag. If those things are not true, that is a different conversation worth having with the facility, the state DSHS complaint line, or a local elder care advocate. In Burien and King County, you can also reach Community Living Connections at 855-567-0252 for help navigating concerns."
      },
      {
        "type": "h2",
        "text": "What About the Family Home, and Everything In It?"
      },
      {
        "type": "p",
        "text": "The family home often becomes the next grief when the first grief finally eases. This is the part nobody warns you about either. Around week four or five, once your parent has settled in and you have started sleeping through the night again, you will drive past the old house and realize it has been sitting empty, and you will feel something strange and heavy and unfamiliar."
      },
      {
        "type": "p",
        "text": "That house is full of a lifetime. Photo albums in the cedar chest. Your dad's tools in the garage. Your mom's handwritten recipe for her Thanksgiving cranberry sauce taped inside a cabinet. It will feel wrong to touch any of it. It will also feel wrong to leave it untouched."
      },
      {
        "type": "p",
        "text": "Move slowly. There is no prize for clearing the house in a weekend. If the decision is to sell, my team at [yournextstephome.com](https://yournextstephome.com) works specifically with Burien and King County families going through exactly this season, and our work is paced to the emotional reality, not to a transaction timeline. No pressure. No rush. Just a real conversation when you are ready."
      },
      {
        "type": "h2",
        "text": "How Burien Best Care Home Approaches the First Weeks"
      },
      {
        "type": "p",
        "text": "Our job in the first month is not to pretend everything is fine. Our job is to be steady, to learn your parent, and to carry the weight of the transition so your family can grieve and breathe."
      },
      {
        "type": "p",
        "text": "That is why our home in Burien stays small on purpose. Six residents, semi-private or private care suites, and caregivers who stay long enough to actually know the people in their care. When a new resident moves in, the same caregivers are there the next morning, and the morning after that. The person who learns that your mother likes her coffee with one sugar is still there a month later to make it that way."
      },
      {
        "type": "p",
        "text": "We also stay in close, specific communication with families during the first four weeks. Not just \"she had a good day\" updates. The real texture. What she ate. What she asked about. What made her laugh. What made her cry. That texture is what lets families trust the dip for what it is."
      },
      {
        "type": "p",
        "text": "If you are in the middle of these first weeks right now and you are reading this at 2am, I want you to do one small thing. Put down the legal pad. Take three slow breaths. Tomorrow morning, call the home your parent is living in, and ask one question: *What are you learning about my mom this week?* If the person who answers the phone can tell you something specific, something small, something only someone paying attention would know, you can rest a little tonight."
      },
      {
        "type": "p",
        "text": "And if you are not yet in residential care, and you are reading this because you are considering it and are scared of exactly this part of the journey, I want you to know this: we have walked families through this every month for years. You are not the first. You will not be the last. And the hard part, the part nobody warns you about, is survivable because it is finite."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions: The First Weeks in an Adult Family Home"
      },
      {
        "type": "h3",
        "text": "How long does it take a parent to adjust to an adult family home?"
      },
      {
        "type": "p",
        "text": "Most families experience a three to six month adjustment period, with the hardest stretch usually falling in the first two to four weeks. A small home with consistent caregivers, like a six-bed adult family home, often compresses that timeline because staff learn the resident's preferences in days rather than months."
      },
      {
        "type": "h3",
        "text": "Is it normal for a parent to ask to go home after moving into care?"
      },
      {
        "type": "p",
        "text": "Yes. Asking to go home is one of the most common experiences in the first weeks of residential care, particularly for parents living with dementia. It does not usually mean the placement is wrong. It often means your parent is using the word \"home\" to name a feeling of safety that is still being rebuilt in the new space."
      },
      {
        "type": "h3",
        "text": "Why do I feel more guilty after placement, not less?"
      },
      {
        "type": "p",
        "text": "Because placement did not cause the guilt, it revealed the grief. Once the daily caregiving load is handed off, the grief you were too busy to feel often surfaces all at once. This is well documented in caregiver research and is a normal, painful part of the transition, not evidence you made the wrong choice."
      },
      {
        "type": "h3",
        "text": "How often should I visit during the first week?"
      },
      {
        "type": "p",
        "text": "Most families find short daily visits, around thirty to forty-five minutes, helpful for the first three to five days, then a shift to every other day through the end of the first month. Ask your parent's care team what they are observing, and adjust with their input."
      },
      {
        "type": "h3",
        "text": "Should I take my parent back to the old house for a visit?"
      },
      {
        "type": "p",
        "text": "Usually not in the first month, especially if your parent is living with dementia. Re-entering the former home can reset the transition and make the dip start over. Short outings to local places like a park, a cafe, or a drive along Puget Sound are often a gentler middle path."
      },
      {
        "type": "h3",
        "text": "What are signs an adult family home is the right fit?"
      },
      {
        "type": "p",
        "text": "Caregivers know specific details about your parent, hygiene and dress are consistent, meals are eaten, communication with family is clear and same-day, and unannounced visits reveal a clean, active, warm home. If those conditions hold over the first month, the hard early days are almost always a transition, not a warning."
      },
      {
        "type": "h2",
        "text": "A Gentle Next Step"
      },
      {
        "type": "p",
        "text": "If you are in the middle of these first weeks right now and you want to talk to someone who has walked this road with many families, we are here. You can reach Burien Best Care Home directly through [burienbestcarehome.com](https://burienbestcarehome.com) or by phone for a real conversation. No clipboard. No pressure. Just someone who understands what this stretch actually feels like."
      },
      {
        "type": "p",
        "text": "If you are earlier in the journey and you are gathering information quietly at night because you think you might be close to this decision, we invite you to start with a tour. Seeing a small home, meeting the caregivers, and walking through the rooms changes how families imagine this next season. For broader education on senior transitions across Washington state, our sister site [yourbestseason.com](https://yourbestseason.com) exists for exactly that."
      },
      {
        "type": "p",
        "text": "You are not alone in this. You are not failing. You are doing one of the hardest things a family can do, and you are doing it with love."
      },
      {
        "type": "h2",
        "text": "Author"
      },
      {
        "type": "p",
        "text": "*Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions.*"
      },
      {
        "type": "h2",
        "text": "SEO and Technical Notes (for internal reference)"
      },
      {
        "type": "p",
        "text": "**JSON-LD FAQPage schema suggestion** (to be added to page head):"
      },
      {
        "type": "p",
        "text": "```json"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@context\": \"https://schema.org\","
      },
      {
        "type": "p",
        "text": "\"@type\": \"FAQPage\","
      },
      {
        "type": "p",
        "text": "\"mainEntity\": ["
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How long does it take a parent to adjust to an adult family home?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Most families experience a three to six month adjustment period, with the hardest stretch usually falling in the first two to four weeks. A small home with consistent caregivers, like a six-bed adult family home, often compresses that timeline because staff learn the resident's preferences in days rather than months.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Is it normal for a parent to ask to go home after moving into care?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes. Asking to go home is one of the most common experiences in the first weeks of residential care, particularly for parents living with dementia. It does not usually mean the placement is wrong. It often means your parent is using the word home to name a feeling of safety that is still being rebuilt in the new space.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Why do I feel more guilty after placement, not less?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Because placement did not cause the guilt, it revealed the grief. Once the daily caregiving load is handed off, the grief you were too busy to feel often surfaces all at once. This is well documented in caregiver research and is a normal, painful part of the transition.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How often should I visit during the first week?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Most families find short daily visits, around thirty to forty-five minutes, helpful for the first three to five days, then a shift to every other day through the end of the first month.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Should I take my parent back to the old house for a visit?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Usually not in the first month, especially if your parent is living with dementia. Re-entering the former home can reset the transition. Short outings to local places are often a gentler middle path.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What are signs an adult family home is the right fit?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Caregivers know specific details about your parent, hygiene and dress are consistent, meals are eaten, communication with family is clear and same-day, and unannounced visits reveal a clean, active, warm home.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "]"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "```"
      },
      {
        "type": "p",
        "text": "**Internal link targets:**"
      },
      {
        "type": "ul",
        "items": [
          "/contact (tour scheduling)",
          "/services/memory-dementia-care",
          "/services/respite-care",
          "/blog/sundowning-breaking-point-dementia-burien (published 2026-04-10)",
          "/blog/sole-caregiver-siblings-burien (published 2026-04-11)",
          "/blog/parent-wont-talk-about-care-burien (published 2026-04-12)",
          "/blog/paying-for-senior-care-burien (published 2026-04-13)"
        ]
      },
      {
        "type": "p",
        "text": "**External cross-links used:**"
      },
      {
        "type": "ul",
        "items": [
          "yourbestseason.com (senior transitions education, twice)",
          "yournextstephome.com (family home real estate)",
          "Community Living Connections 855-567-0252"
        ]
      },
      {
        "type": "p",
        "text": "**Local SEO geographic signals:**"
      },
      {
        "type": "ul",
        "items": [
          "Burien (multiple)",
          "White Center",
          "Normandy Park",
          "King County",
          "Seahurst Park",
          "West Seattle",
          "Puget Sound",
          "Washington state / WA"
        ]
      }
    ]
  },
  {
    "slug": "paying-for-senior-care-burien",
    "title": "The Money Question Nobody Wants to Ask: How Burien Families Actually Pay for Senior Care (And Why Adult Family Homes Change the Math)",
    "description": "How Burien families actually pay for senior care, what Medicare really covers, and why adult family homes change the math. An honest look at the money question nobody wants to ask.",
    "date": "2026-03-20",
    "author": "Becca Pitts",
    "readingTime": "13 min",
    "tags": [
      "Paying for Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "You've been up since 5:30. Not because the alarm went off, but because the math won't stop running in your head."
      },
      {
        "type": "p",
        "text": "Dad's savings. Mom's pension. The house. What Medicare actually covers versus what you thought it covered. The difference between those two numbers that makes your stomach drop."
      },
      {
        "type": "p",
        "text": "You Googled \"how much does senior care cost in Washington\" at some point between your second cup of coffee and the moment you closed the laptop because the numbers made you feel like you couldn't breathe."
      },
      {
        "type": "p",
        "text": "Here's what I want you to know before we go any further: the financial conversation about senior care is one of the hardest conversations a family can have, and it's not because the math is complicated. It's because underneath every spreadsheet question is a grief question. When you ask \"Can we afford this?\", what you're really asking is, \"Is my parent's life being reduced to a line item?\" And when the numbers feel impossible, the guilt gets louder: \"If I were a better daughter, I'd just do this myself.\""
      },
      {
        "type": "p",
        "text": "You are not failing your parent by looking at the numbers. You are being responsible. You are being brave. And you deserve to understand the full picture, including the options that most \"cost of care\" articles leave out entirely."
      },
      {
        "type": "h2",
        "text": "How Much Does Senior Care Actually Cost in Washington State?"
      },
      {
        "type": "p",
        "text": "In Washington state, senior care costs are among the highest in the country, and the numbers shock most families when they see them for the first time."
      },
      {
        "type": "p",
        "text": "Here's the reality for 2026. A private room in a nursing home in Washington runs roughly $9,700 to $10,500 per month. The median cost for assisted living across the state is approximately $5,500 to $6,200 per month, and that's before you add memory care surcharges, which can push it to $6,700 or higher. In-home care, which many families assume will be the affordable option, averages around $42 per hour in Washington. If your parent needs even 30 hours per week of home health aide support, that's over $5,400 per month. Full-time, round-the-clock in-home care can exceed $15,000 per month."
      },
      {
        "type": "p",
        "text": "Let those numbers sit for a moment. Most families in King County are not prepared for them. And there's a reason: we don't talk about this as a society until it's urgent. Nobody hands you a brochure at your parent's 70th birthday that says, \"Here's what the next ten years might cost.\" By the time you're looking at these numbers, you're usually in the middle of a crisis, making one of the biggest financial decisions of your family's life with the least amount of clarity."
      },
      {
        "type": "p",
        "text": "But here's what most cost-of-care articles won't tell you: there is a category of care that changes the math significantly, and most families in Burien have never heard of it."
      },
      {
        "type": "h2",
        "text": "What Is an Adult Family Home, and Why Does It Cost Less?"
      },
      {
        "type": "p",
        "text": "An adult family home is a licensed residential care home that serves a maximum of six residents. In Washington state, adult family homes are licensed and inspected by the Department of Social and Health Services (DSHS), and they operate in actual residential homes in real neighborhoods."
      },
      {
        "type": "p",
        "text": "The cost difference between an adult family home and a large assisted living facility is significant, and it's not because the care is lesser. It's because the overhead is different. A large assisted living facility is paying for a commercial building, a marketing department, a corporate management structure, and dozens of staff across multiple wings. An adult family home is a home. The owner often lives on-site or is deeply embedded in daily operations. The caregiver-to-resident ratio in a 6-bed adult family home is typically 1:3 or better, compared to 1:10 or even 1:15 in large facilities."
      },
      {
        "type": "p",
        "text": "In Washington state, adult family homes typically cost between $2,600 and $5,500 per month for private pay, depending on the level of care needed and the specific home. That's roughly 30 to 50 percent less than the median assisted living facility, with a dramatically better care ratio."
      },
      {
        "type": "p",
        "text": "Read that again. Fewer residents. More individual attention. A real home with a kitchen that smells like dinner. And a lower price tag."
      },
      {
        "type": "p",
        "text": "The reason most families don't know about adult family homes is that they don't have national advertising budgets. You won't see a commercial for a 6-bed home in Burien during the evening news. But Washington state has more licensed adult family homes than any other state in the country, and there are 21 licensed adult family homes right here in Burien alone."
      },
      {
        "type": "h2",
        "text": "Does Medicaid Pay for Adult Family Homes in Washington?"
      },
      {
        "type": "p",
        "text": "Yes. This is one of the most important things families in King County need to understand, and one of the most commonly missed."
      },
      {
        "type": "p",
        "text": "Washington state's COPES (Community Options Program Entry System) waiver is a Medicaid program that specifically covers care in adult family homes, assisted living facilities, and in-home settings. Unlike regular Medicaid, which most people associate with nursing homes, COPES allows your parent to receive Medicaid-funded care in a setting that actually feels like home."
      },
      {
        "type": "p",
        "text": "Here's how eligibility works in 2026. For a single individual, the income limit for COPES is approximately $2,982 per month, and the asset limit is $2,000 (not counting the primary residence in most cases). For married couples, the rules protect the spouse who is still living at home: the community spouse can keep up to $162,660 in assets and their own income is not counted toward the Medicaid applicant's eligibility."
      },
      {
        "type": "p",
        "text": "The Medicaid daily rate for adult family homes in Washington is approximately $87 per day, which works out to roughly $2,640 per month. Many adult family homes in Burien and throughout King County accept Medicaid through COPES, meaning that once your parent qualifies, the cost of their residential care is covered."
      },
      {
        "type": "p",
        "text": "This is the number that changes everything for middle-class families who feel trapped between \"too much income for Medicaid\" and \"not nearly enough savings for private pay.\""
      },
      {
        "type": "h2",
        "text": "What If My Parent Has Too Much Money for Medicaid but Not Enough for Private Pay?"
      },
      {
        "type": "p",
        "text": "This is the question that keeps more families up at night than almost any other, and it's the question that \"cost of care\" articles handle worst."
      },
      {
        "type": "p",
        "text": "There's a gap that millions of American families fall into. Your parent has some savings, maybe a pension, maybe Social Security that brings in $2,200 a month. They own a home. They are, by any reasonable definition, middle class. And they have too many assets to qualify for Medicaid and too few assets to privately pay for care for more than a year or two."
      },
      {
        "type": "p",
        "text": "The first thing I want you to know is that this is normal. This is not a failure of planning. This is the structural reality of eldercare financing in America, and it affects the vast majority of families. You are not alone in this."
      },
      {
        "type": "p",
        "text": "The second thing I want you to know is that there is a path through this."
      },
      {
        "type": "p",
        "text": "**The Medicaid spend-down.** Washington state allows what's called a \"spend down\" process, where your parent's excess assets are used for legitimate expenses (medical bills, home modifications, prepaid funeral expenses, outstanding debts, and even care costs themselves) until they reach the Medicaid asset limit. This is legal. It is expected. It is, in fact, the mechanism that Medicaid was designed around."
      },
      {
        "type": "p",
        "text": "What's critical is that you don't try to do this alone. Medicaid has a five-year look-back period in Washington, meaning they review five years of financial transactions for any improper transfers. Giving money to family members or moving assets around without proper guidance can disqualify your parent from Medicaid eligibility entirely."
      },
      {
        "type": "p",
        "text": "An elder law attorney in King County can walk your family through the spend-down process properly. Many offer free initial consultations, and the cost of that guidance is an eligible spend-down expense itself. The Washington State Bar Association has a lawyer referral service, and organizations like the King County Bar Association offer legal clinics for seniors."
      },
      {
        "type": "p",
        "text": "**Private pay to Medicaid transition.** Many adult family homes in Burien, including ours, work with families who start as private pay and transition to Medicaid once assets have been appropriately spent down. This means your parent doesn't have to move when their financial situation changes. They stay in the same home, with the same caregivers, in the same room. The only thing that changes is who writes the check."
      },
      {
        "type": "p",
        "text": "That continuity matters more than any financial detail. Your parent has already had their world disrupted enough. They shouldn't have to move again because a bank balance changed."
      },
      {
        "type": "h2",
        "text": "What About the Family Home? Does My Parent Have to Sell the House?"
      },
      {
        "type": "p",
        "text": "This is the question underneath the question, and it carries enormous emotional weight. Your parent's home is not just an asset on a spreadsheet. It's where they raised you. It's where the measuring marks on the kitchen doorframe still show how tall you were at seven."
      },
      {
        "type": "p",
        "text": "Here's the good news: in Washington state, the primary residence is generally exempt from Medicaid asset calculations as long as the applicant intends to return home or a spouse, dependent child, or certain other family members still live there. The home equity limit for Medicaid eligibility in Washington is approximately $730,000 in 2026."
      },
      {
        "type": "p",
        "text": "However, there are important nuances. After your parent passes, Washington's Medicaid Estate Recovery Program may seek to recover the cost of Medicaid services from the estate, which can include the home. This is another area where an elder law attorney's guidance is essential."
      },
      {
        "type": "p",
        "text": "If the family does decide to sell the home, whether to fund care, to reduce the burden of maintaining an empty property, or simply because it's the right time, that's a transition I understand deeply. At [Your Next Step Home](https://yournextstephome.com), we work specifically with Washington families navigating real estate transitions during the senior care journey. It's a different kind of real estate transaction, and it deserves someone who understands what the house means, not just what it's worth."
      },
      {
        "type": "h2",
        "text": "What Are All the Ways to Pay for an Adult Family Home in Burien?"
      },
      {
        "type": "p",
        "text": "Let me lay out every funding source available to families in the Burien area, because most families are only aware of one or two of these."
      },
      {
        "type": "p",
        "text": "**Medicaid through the COPES waiver.** As discussed above, this is the primary funding source for many families. It covers care in adult family homes at the state-approved daily rate. To apply, contact your local Home and Community Services office or call Community Living Connections at 855-567-0252. You can also use the DSHS Adult Family Home Locator online to find Medicaid-accepting homes in Burien."
      },
      {
        "type": "p",
        "text": "**Private pay.** Families pay directly from savings, retirement accounts, pension income, Social Security, or family contributions. Adult family homes are the most affordable private-pay option in residential care, typically 30 to 50 percent less than large assisted living facilities."
      },
      {
        "type": "p",
        "text": "**Long-term care insurance.** If your parent purchased a long-term care insurance policy, it may cover adult family home care. Review the policy carefully or ask the insurance company directly. Many policies have a waiting period (often 90 days) and specific benefit triggers related to activities of daily living."
      },
      {
        "type": "p",
        "text": "**Veterans benefits.** The VA Aid and Attendance benefit can provide $2,000 to $3,000 or more per month, tax-free, to wartime veterans and their surviving spouses who need help with activities of daily living. This benefit can be used to pay for adult family home care. Many veterans and their families don't know this benefit exists."
      },
      {
        "type": "p",
        "text": "**WA Cares Fund.** Washington state's long-term care insurance program provides a lifetime benefit for eligible participants. If your parent contributed to this program, check eligibility for benefits."
      },
      {
        "type": "p",
        "text": "**Combination approaches.** Many families use a combination: Social Security and pension cover a portion, a VA benefit covers another portion, and the remaining gap is covered by family contributions or a partial Medicaid benefit. An adult family home's lower cost makes these combination approaches viable in ways that simply aren't possible with a $6,200-per-month assisted living facility."
      },
      {
        "type": "h2",
        "text": "Why Do So Many Families Feel Ashamed About the Money Conversation?"
      },
      {
        "type": "p",
        "text": "Because our culture has quietly taught us that a good child should sacrifice everything for their parent, and that putting a price on care is somehow putting a price on love."
      },
      {
        "type": "p",
        "text": "I want to challenge that."
      },
      {
        "type": "p",
        "text": "After more than 20 years in senior care, I've watched hundreds of families navigate this exact moment. And I've learned something that I wish someone had told me when I was going through it with my own parents: the families who face the financial reality with clear eyes are the families who end up providing the best care."
      },
      {
        "type": "p",
        "text": "Here's why. When you avoid the money conversation, decisions get made in crisis. A hospital discharge planner tells you that Mom can't go home and needs placement by Friday. You Google \"assisted living near me,\" call the first place with availability, sign a contract at $6,800 a month, and three months later you're drowning. Mom is in a 60-bed facility where staff turnover is constant, and you're trying to figure out how to cover the cost while your own retirement savings shrink."
      },
      {
        "type": "p",
        "text": "When you face the money conversation early, even a little early, you discover options. You learn that a 6-bed adult family home in Burien costs less than half of what that large facility charges. You learn that Medicaid covers it. You learn that there are 21 licensed homes within a few miles of where you grew up. You have time to visit, to ask questions, to find the right fit."
      },
      {
        "type": "p",
        "text": "The money conversation is not the enemy. The avoidance is."
      },
      {
        "type": "h2",
        "text": "How Do I Start? What's the First Step for Burien Families?"
      },
      {
        "type": "p",
        "text": "Start before you think you need to. That's the single most important piece of advice I can offer."
      },
      {
        "type": "p",
        "text": "If your parent is still relatively stable and you have some time, here are the concrete steps that matter most."
      },
      {
        "type": "p",
        "text": "**Step 1: Understand the financial picture.** Sit down (or call a sibling) and get honest about your parent's income, savings, debts, and insurance policies. This isn't invasive. This is protective. Your parent's financial advisor, if they have one, can help. If they don't, many Area Agencies on Aging offer free financial counseling for seniors."
      },
      {
        "type": "p",
        "text": "**Step 2: Call Community Living Connections.** This is Washington state's free resource for connecting families to long-term care options. The number is 855-567-0252, and real humans answer the phone. Tell them your parent's situation and ask what programs they might qualify for. They can help you understand COPES eligibility and start the application process if appropriate."
      },
      {
        "type": "p",
        "text": "**Step 3: Consult an elder law attorney.** Even a single consultation can save your family tens of thousands of dollars. Ask specifically about Medicaid planning, the five-year look-back, asset protection strategies for the community spouse, and estate recovery implications."
      },
      {
        "type": "p",
        "text": "**Step 4: Tour adult family homes in your area.** Don't just visit one. Visit several. See the difference between a 6-bed home and a 60-bed facility for yourself. Ask about staffing ratios, ask about Medicaid acceptance, ask about what happens when your parent's care needs increase. At [Burien Best Care Home](https://burienbestcarehome.com), we welcome families to visit with no pressure and no clipboard. Just a cup of coffee and honest answers."
      },
      {
        "type": "p",
        "text": "**Step 5: Talk to your family.** Not just about the money, but about what matters. What does good care look like for your parent? What does your parent value most? What would bring your family peace? For help navigating the broader senior transition, including the emotional, logistical, and educational aspects, [Your Best Season](https://yourbestseason.com) offers resources designed specifically for families at this stage."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How much does an adult family home cost in Burien, WA?**"
      },
      {
        "type": "p",
        "text": "Adult family homes in Burien typically range from $2,600 to $5,500 per month for private pay, depending on the level of care needed. Medicaid-funded care through the COPES waiver covers approximately $2,640 per month. This is 30 to 50 percent less than the median assisted living facility in King County."
      },
      {
        "type": "p",
        "text": "**Does Medicaid cover adult family homes in Washington state?**"
      },
      {
        "type": "p",
        "text": "Yes. Washington's COPES (Community Options Program Entry System) waiver specifically covers care in licensed adult family homes. To qualify, individuals must meet income and asset limits and demonstrate a need for assistance with activities of daily living."
      },
      {
        "type": "p",
        "text": "**What happens when my parent runs out of money in an adult family home?**"
      },
      {
        "type": "p",
        "text": "Many adult family homes in Washington, including Burien Best Care Home, accept a transition from private pay to Medicaid. This means your parent can stay in the same home with the same caregivers even after their savings are spent down. This continuity of care is one of the most important advantages of choosing an adult family home."
      },
      {
        "type": "p",
        "text": "**Is an adult family home cheaper than assisted living?**"
      },
      {
        "type": "p",
        "text": "Yes. Adult family homes in Washington typically cost 30 to 50 percent less than assisted living facilities while providing a better caregiver-to-resident ratio (1:3 versus 1:10 or more). The lower cost is due to reduced overhead, not reduced care quality."
      },
      {
        "type": "p",
        "text": "**How do I find adult family homes in Burien that accept Medicaid?**"
      },
      {
        "type": "p",
        "text": "Contact Community Living Connections at 855-567-0252, or use the DSHS Adult Family Home Locator online. You can also contact individual homes directly. Burien has 21 licensed adult family homes."
      },
      {
        "type": "p",
        "text": "*Suggested JSON-LD FAQPage Schema: Implement FAQPage structured data using the five Q&A pairs above for enhanced search visibility and AI answer engine optimization.*"
      },
      {
        "type": "p",
        "text": "**About the Author**"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "*If your family is navigating the financial side of senior care and you don't know where to start, you're welcome to visit Burien Best Care Home. No pressure. No sales pitch. Just a real conversation about what's possible. [Contact us](https://burienbestcarehome.com/contact) or call to schedule a time.*"
      }
    ]
  },
  {
    "slug": "parent-wont-talk-about-care-burien",
    "title": "When Your Parent Won't Even Have the Conversation About Care: What Burien Families Need to Know",
    "description": "Your parent shut down the conversation about care before it even started. Why that happens, and how Burien families move forward when a parent refuses to discuss senior care.",
    "date": "2026-03-13",
    "author": "Becca Pitts",
    "readingTime": "12 min",
    "tags": [
      "Family Conversations",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "You practiced the words in your car before you walked in."
      },
      {
        "type": "p",
        "text": "Maybe you rehearsed it in the shower. Maybe you wrote bullet points on your phone. Maybe you told yourself, \"Today. I'm going to bring it up today.\" You had data. You had a brochure you'd picked up from a senior care open house in Burien. You'd even talked to your spouse about what you'd say and how you'd say it gently."
      },
      {
        "type": "p",
        "text": "And then your mom looked at you across the kitchen table and said, \"I'm fine,\" in that voice. The one that doesn't mean she's fine. The one that means: this conversation is over before it started."
      },
      {
        "type": "p",
        "text": "Or maybe your dad got angry. Really angry. The kind of angry that made you feel like you were twelve again, being told to mind your own business. Maybe he said, \"You want to put me in a home?\" and the guilt hit so hard you couldn't breathe."
      },
      {
        "type": "p",
        "text": "If that's your story, you're not alone. Not even close. In caregiver support communities across the country, one version of this same sentence shows up every single day: \"I tried to bring it up, and they completely shut me down.\""
      },
      {
        "type": "p",
        "text": "Here's what I want you to hear before we go any further: the conversation failing is not evidence that you did it wrong. It's evidence that your parent is grieving something they haven't named yet. And that changes everything about how you approach what comes next."
      },
      {
        "type": "h2",
        "text": "Why Does My Parent Refuse to Talk About Care?"
      },
      {
        "type": "p",
        "text": "Your parent's refusal to discuss care options is almost never about stubbornness, and it is almost never about you. Research consistently shows that 85 to 90 percent of seniors initially resist the idea of moving to any form of residential care. That means resistance is not the exception. It is the overwhelming norm."
      },
      {
        "type": "p",
        "text": "But here's what most \"tips for talking to aging parents\" articles get wrong: they treat that resistance as an obstacle to overcome. As if there's some perfect combination of words, some ideal Saturday afternoon, some magic sentence that will unlock your parent's willingness to discuss this calmly."
      },
      {
        "type": "p",
        "text": "There isn't. And chasing that magic sentence is exhausting you."
      },
      {
        "type": "p",
        "text": "The deeper truth is that your parent's refusal is a grief response. When you bring up care, your parent doesn't hear \"I found a nice place with a garden.\" Your parent hears: you are no longer capable. You are no longer the person you were. Your life as you knew it is ending."
      },
      {
        "type": "p",
        "text": "That's not a logistics conversation. That's an identity conversation. And identity conversations don't respond to bullet points."
      },
      {
        "type": "p",
        "text": "Your parent may be experiencing some combination of these very real fears:"
      },
      {
        "type": "p",
        "text": "**Fear of losing independence.** For someone who raised children, held a career, maintained a home for decades, the idea that someone else will now manage their daily life feels like an erasure of everything they built. In King County, where many seniors have lived in the same house for 30 or 40 years, the home isn't just a building. It's proof that they made a life."
      },
      {
        "type": "p",
        "text": "**Fear of the unknown.** Most seniors' only reference point for \"care facilities\" comes from decades-old images of sterile nursing homes. They don't know that a six-bed adult family home in Burien looks nothing like that. They picture a hospital ward. They don't picture a living room with a couch, a garden out back, and a caregiver who knows how they take their coffee."
      },
      {
        "type": "p",
        "text": "**Fear of being a burden.** This one is quieter and harder to spot. Many parents would rather struggle alone than feel like they're causing their children stress. The irony, of course, is that the struggling is what's causing the most stress for everyone."
      },
      {
        "type": "p",
        "text": "**Fear of dying.** This is the one nobody says out loud. Moving to care feels, to many seniors, like the last stop. Like giving up. Like agreeing that the end is closer than the beginning. That fear doesn't respond to rational arguments. It responds to love, patience, and time."
      },
      {
        "type": "h2",
        "text": "How Do I Bring Up Senior Care Without My Parent Getting Angry?"
      },
      {
        "type": "p",
        "text": "The honest answer is: you might not be able to. And that's okay."
      },
      {
        "type": "p",
        "text": "Anger is not a sign that the conversation went wrong. Anger is a sign that you touched something real. Your parent's anger is the sound of fear that doesn't have anywhere else to go. If your parent gets defensive or shuts down or changes the subject or suddenly needs to go check on something in the other room, that is their nervous system protecting them from a truth they aren't ready to face yet."
      },
      {
        "type": "p",
        "text": "But \"they aren't ready yet\" doesn't mean \"they'll never be ready.\" It means you're planting a seed, not harvesting a crop."
      },
      {
        "type": "p",
        "text": "Here's what actually works, not as a single conversation but as a posture you carry over weeks and months:"
      },
      {
        "type": "p",
        "text": "**Stop trying to convince.** This is the hardest shift and the most important one. Every time you walk in with data and arguments and a plan, your parent's defenses go up before you finish your first sentence. They can feel the agenda. Instead, start asking questions with genuine curiosity. \"How are you feeling about the stairs these days?\" \"What would you want if something happened and I couldn't get here fast enough?\" These aren't traps. They're invitations."
      },
      {
        "type": "p",
        "text": "**Use incidents, not arguments.** The most productive conversations I've seen in 20 years of senior care don't start with \"We need to talk.\" They start with \"That fall scared me, Mom.\" They start with a specific, recent, real moment that both of you experienced. Not a hypothetical. Not a statistic. A moment. Incidents create natural openings that feel less like an ambush and more like a shared concern."
      },
      {
        "type": "p",
        "text": "**Talk about yourself, not about them.** \"I'm worried about you\" lands very differently than \"You need help.\" One centers your love. The other implies their failure. Try: \"I can't sleep at night because I'm scared something will happen when I'm not here.\" That's vulnerable. That's honest. And it's much harder to argue with than a brochure."
      },
      {
        "type": "p",
        "text": "**Let them visit without pressure.** For Washington families exploring adult family homes in Burien, one of the most effective things I've seen is a no-pressure visit. Not a \"tour\" with clipboards and questions. Just a cup of coffee in a home where six people live and are cared for. When your parent sees that a small care home looks like a home, not an institution, something shifts. They may not say it that day. But the image replaces the fear."
      },
      {
        "type": "p",
        "text": "**Accept that \"not yet\" is a complete sentence.** If your parent says no, honor it. You've planted the seed. Pushing harder doesn't speed up acceptance. It slows it down. Your parent needs to feel that their autonomy is being respected even as their needs are changing. The paradox of eldercare conversations is that the more you respect their \"no,\" the sooner they may come back with a \"maybe.\""
      },
      {
        "type": "h2",
        "text": "What If My Parent's Safety Is at Risk Right Now?"
      },
      {
        "type": "p",
        "text": "Sometimes you don't have the luxury of patience. If your parent has had a serious fall, is leaving the stove on, is wandering, or is unable to manage medications safely, the timeline changes."
      },
      {
        "type": "p",
        "text": "In Washington State, there are resources designed for exactly this moment. Community Living Connections (855-567-0252) provides free help for King County families navigating urgent care transitions. The DSHS Adult Family Home Locator helps you find licensed homes in Burien and across the state. If your parent is being discharged from a hospital, ask to speak with the discharge planner or social worker, because they can help facilitate conversations that feel impossible between parent and child."
      },
      {
        "type": "p",
        "text": "For families in crisis, here's something worth knowing: your parent's doctor can be one of your most powerful allies. Many seniors who refuse to listen to their adult children will listen to their physician. A doctor saying \"I'm concerned about your safety at home\" carries a different weight than a daughter or son saying the same words. It's not fair, but it's real, and you can use it."
      },
      {
        "type": "p",
        "text": "If there's a cognitive component, such as early dementia or Alzheimer's, understand that your parent's ability to assess their own risk may be compromised. Anosognosia, the clinical term for lacking awareness of one's own impairment, affects up to 81 percent of people with Alzheimer's disease. Your parent isn't being stubborn. Their brain is literally unable to recognize what's happening. This is a medical reality, not a character flaw, and it changes the entire framework of the conversation."
      },
      {
        "type": "h2",
        "text": "What Makes an Adult Family Home Different From What My Parent Imagines?"
      },
      {
        "type": "p",
        "text": "Most of the fear your parent carries about \"going to a home\" is based on an image that doesn't match reality, especially in Burien."
      },
      {
        "type": "p",
        "text": "An adult family home in Washington State is a licensed residential home that serves two to six residents. That's it. Six people, maximum. This is not a facility with long hallways and overhead fluorescent lighting. This is a house in a neighborhood, often on a quiet residential street, where a small number of seniors live with dedicated caregivers who know them by name."
      },
      {
        "type": "p",
        "text": "Here's how the math looks different in a small home:"
      },
      {
        "type": "p",
        "text": "The caregiver-to-resident ratio in a six-bed adult family home is typically 1 to 3. In a large assisted living facility, that ratio stretches to 1 to 10 or higher. That's the difference between someone who notices your dad hasn't touched his lunch and someone who doesn't have time to check."
      },
      {
        "type": "p",
        "text": "Adult family homes accepting Medicaid in Washington average around $87 per day, roughly $2,600 per month through the COPES waiver program. Assisted living facilities average $6,300 per month statewide. For families worried about cost, which is nearly all families, the adult family home model in King County offers a level of personalized care that larger facilities simply can't match at that price point."
      },
      {
        "type": "p",
        "text": "At Burien Best Care Home, we have private care suites, not shared rooms. Semi-private bathrooms shared with only one other person. A home-like atmosphere where residents eat meals at a table, not in a cafeteria. This is what your parent needs to see, because what they're imagining isn't what exists."
      },
      {
        "type": "p",
        "text": "If your parent's only reference point for residential care is a nursing home from 1987, the single most effective thing you can do is update that image. Show them a photo. Better yet, bring them by. Let them sit in the living room for fifteen minutes. Let them see for themselves that this is a home, not a hospital."
      },
      {
        "type": "h2",
        "text": "How Long Does It Take for a Parent to Accept They Need Help?"
      },
      {
        "type": "p",
        "text": "There is no standard timeline, but there is a pattern."
      },
      {
        "type": "p",
        "text": "Most families I've worked with in Burien describe a process that takes somewhere between three months and a year from the first conversation to a decision. That's not three months of constant arguing. It's three months of small moments. An offhand comment after a doctor's visit. A neighbor who moved and seems happy. A fall that shakes everyone. A quiet afternoon where your parent says, almost to themselves, \"I don't know how much longer I can do the yard.\""
      },
      {
        "type": "p",
        "text": "Those moments are the conversation. Not the big sit-down you planned. Not the family meeting where everyone flies in. The conversation is happening in pieces, when your parent feels safe enough to let a little truth through."
      },
      {
        "type": "p",
        "text": "Your job, in the meantime, is to stay present. Keep showing up. Keep being the person who isn't pushing but also isn't pretending everything is fine. That's a hard place to stand. It requires you to hold two truths at once: your parent deserves autonomy, and your parent may not be safe. Both are true. Neither cancels the other out."
      },
      {
        "type": "p",
        "text": "For families going through this in King County, the [Your Best Season](https://yourbestseason.com) platform offers education about senior transitions that can help you feel less alone in the in-between. And if there comes a point where you're also thinking about what happens with the family home, [Your Next Step Home](https://yournextstephome.com) helps Washington families navigate that piece without adding more overwhelm."
      },
      {
        "type": "h2",
        "text": "What Should I Actually Say? Real Scripts That Don't Feel Scripted"
      },
      {
        "type": "p",
        "text": "Here are some phrases that have opened real doors for real families. They're not magic. But they're honest, which is better than magic."
      },
      {
        "type": "p",
        "text": "**When you're starting the conversation for the first time:**"
      },
      {
        "type": "p",
        "text": "\"Mom, I'm not trying to make any decisions today. I just want to understand how you're feeling about things.\""
      },
      {
        "type": "p",
        "text": "**When they get defensive:**"
      },
      {
        "type": "p",
        "text": "\"I hear you. You're not ready, and that's okay. I just want you to know I'm thinking about this because I love you, not because I think you can't handle things.\""
      },
      {
        "type": "p",
        "text": "**When a specific incident creates an opening:**"
      },
      {
        "type": "p",
        "text": "\"That fall really scared me. Can we just talk about what we'd do if something like that happened when I wasn't nearby?\""
      },
      {
        "type": "p",
        "text": "**When they bring up not wanting to be a burden:**"
      },
      {
        "type": "p",
        "text": "\"You're not a burden. But I'll be honest with you. I'm not sleeping because I'm worried. And I think there might be a way for both of us to have more peace of mind.\""
      },
      {
        "type": "p",
        "text": "**When they say \"I want to die in my home\":**"
      },
      {
        "type": "p",
        "text": "\"I understand that. And I want to respect what you want. Can we talk about what would need to be true for that to be safe?\""
      },
      {
        "type": "p",
        "text": "Notice what these all have in common: they center the relationship, not the decision. They invite rather than inform. They make space rather than fill it. This is how trust gets built, one honest sentence at a time."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How do I talk to my elderly parent about moving to a care home?**"
      },
      {
        "type": "p",
        "text": "Start with listening, not persuading. Use specific recent incidents as natural conversation starters rather than planned \"talks.\" Focus on your own feelings (\"I'm worried\") rather than their limitations (\"You need help\"). Accept that this is a series of conversations over months, not a single discussion."
      },
      {
        "type": "p",
        "text": "**What if my aging parent refuses to discuss care options at all?**"
      },
      {
        "type": "p",
        "text": "Refusal is normal. Between 85 and 90 percent of seniors initially resist. Honor their \"no\" while continuing to show up with love and concern. Enlist their doctor as an ally. Create low-pressure opportunities to see modern care options, such as adult family homes in Burien, that challenge their outdated assumptions."
      },
      {
        "type": "p",
        "text": "**Does Medicaid cover adult family homes in Washington State?**"
      },
      {
        "type": "p",
        "text": "Yes. Washington Medicaid covers adult family home care through the COPES waiver program. Adult family homes accepting Medicaid in Washington average around $87 per day. Contact Community Living Connections at 855-567-0252 for help navigating eligibility in King County."
      },
      {
        "type": "p",
        "text": "**What is the difference between an adult family home and assisted living in Burien?**"
      },
      {
        "type": "p",
        "text": "An adult family home serves two to six residents in a residential house setting with a typical caregiver ratio of 1 to 3. Assisted living facilities serve dozens to hundreds of residents with ratios of 1 to 10 or more. Adult family homes cost significantly less while providing more personalized care. Burien has 21 licensed adult family homes."
      },
      {
        "type": "p",
        "text": "**How do I know when it's time to move my parent to residential care?**"
      },
      {
        "type": "p",
        "text": "Key signals include falls or safety incidents, medication mismanagement, isolation and depression, inability to manage daily activities like bathing and meals, caregiver burnout, and wandering or confusion. If you're asking this question, that itself may be a signal. Trust what you're seeing."
      },
      {
        "type": "p",
        "text": "*Suggested JSON-LD FAQPage schema: Include the five FAQ pairs above as a FAQPage structured data block on the published page for AEO/GEO visibility.*"
      },
      {
        "type": "p",
        "text": "**About the Author**"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "*If you're in the middle of this conversation with your parent and you're not sure what comes next, you're welcome to visit Burien Best Care Home. No clipboard. No pressure. Just a cup of coffee and an honest conversation about what's possible. Call us or [schedule a visit](https://burienbestcarehome.com/contact).*"
      }
    ]
  },
  {
    "slug": "sole-caregiver-siblings-burien",
    "title": "When You're the Only One: A Letter to the Sole Family Caregiver in Burien (And What to Do When Your Siblings Won't Help)",
    "description": "You are the one doing everything while your siblings stay distant. A Burien adult family home owner on sole-caregiver burnout, family resentment, and getting real help before you break.",
    "date": "2026-03-06",
    "author": "Becca Pitts",
    "readingTime": "14 min",
    "tags": [
      "Caregiver Support",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "It's 11:47 on a Friday night in Burien. You've been up since 5:30. You spent the morning at your own job pretending to be a person with one life instead of three. You drove across the bridge to Mom's house on your lunch break because the home health aide called in sick again. You watched your mother look at you like she wasn't sure who you were, and then you came back an hour later and she was hungry because she'd forgotten she had eaten."
      },
      {
        "type": "p",
        "text": "And your brother in Spokane just texted the group chat: \"How's Mom doing? Been thinking about her.\""
      },
      {
        "type": "p",
        "text": "You put the phone face down on the counter. Not because you're angry. You're too tired to be angry. You put it face down because you don't trust yourself to answer without saying something you can't take back."
      },
      {
        "type": "p",
        "text": "If you are reading this, I want you to hear me clearly: you are not crazy, you are not being dramatic, and you are not failing. You are doing the work of three people, and the math of your life is no longer survivable. I wrote this for you."
      },
      {
        "type": "h2",
        "text": "Why Does Eldercare Always Fall to One Person?"
      },
      {
        "type": "p",
        "text": "**More than half of all eldercare situations in the United States ultimately fall to a single family member, even when there are multiple adult children in the family.** This is not a coincidence, and it is not because you are \"the responsible one\" or \"the one who lives closest.\" It is a predictable pattern, and once you understand why it happens, you can stop blaming yourself for a dynamic that is nearly universal."
      },
      {
        "type": "p",
        "text": "Researchers who study family caregiving consistently find the same breakdown: one primary caregiver, usually a daughter, usually in her late forties or early fifties, doing between sixty and ninety percent of the hands-on work. Siblings contribute sporadically, or financially, or not at all. The primary caregiver carries the medical appointments, the medication management, the meal logistics, the safety checks, the laundry, the bathing, the middle-of-the-night phone calls, the Medicare paperwork, and, quietly, the entire emotional weight of watching a parent decline."
      },
      {
        "type": "p",
        "text": "Nationally, seventy-eight percent of family caregivers report experiencing burnout. Eighty-seven percent report stress and anxiety. Eighty-four percent report feeling overwhelmed. If those numbers sound high, they are. And if you are the only sibling actually in the room with Mom, your numbers are almost certainly higher."
      },
      {
        "type": "p",
        "text": "Here in Washington state, we have more than 1.3 million unpaid family caregivers. King County holds a significant share of them. You are not an outlier. You are the majority. You are also, statistically, exhausted."
      },
      {
        "type": "h2",
        "text": "What Do I Do When My Siblings Won't Help With Mom or Dad?"
      },
      {
        "type": "p",
        "text": "**The honest answer is that most advice about \"getting your siblings to step up\" assumes a cooperative family system that no longer exists by the time you are Googling this question.** I need to say something that every well-meaning article about family meetings and assigned roles skips over."
      },
      {
        "type": "p",
        "text": "By the time one adult child is doing everything, the family dynamic has already frozen. The siblings who are not helping are not waiting politely for a clearer invitation. They have made a decision, often without knowing they made it, that someone else is going to handle this. That decision is almost always unconscious, often protected by geographic distance, and held in place by a kind of quiet grief they are not ready to look at."
      },
      {
        "type": "p",
        "text": "This is the first-principles truth almost no one will tell you: **you cannot negotiate with a sibling who is in denial, because what you are asking them to do is precisely what they are structurally protecting themselves from.** You are asking them to witness your parent's decline. You are asking them to face their own mortality. You are asking them to sit in a room that smells like a nursing home and watch the person who raised them not recognize them. Their absence is not laziness. It is a very expensive form of self-protection. Understanding this will not fix it. But it may free you from the belief that you could have scripted the perfect text message and made them come."
      },
      {
        "type": "p",
        "text": "That does not mean you stop asking. It means you stop waiting."
      },
      {
        "type": "p",
        "text": "Here is what actually works, based on twenty plus years of watching Burien and King County families navigate this exact situation:"
      },
      {
        "type": "p",
        "text": "**Ask for specific help, in writing, with a dollar amount or a calendar date attached.** \"Would you cover Mom's prescription copays this month? The total is $186. Venmo is fine.\" \"Can you take Dad to his cardiology appointment on April 24th at 2pm? The address is on the fridge.\" Vague asks produce vague answers. Specific asks produce either a yes, a no, or a silence that tells you what you needed to know."
      },
      {
        "type": "p",
        "text": "**Stop protecting your siblings from the truth.** Many sole caregivers, especially daughters, soften the reports. \"Mom had a rough week\" when what you mean is \"Mom fell twice, soiled herself four times, called me by my dead aunt's name, and I have not slept more than three hours in a row since Tuesday.\" Your siblings cannot respond to a reality you are hiding from them. You do not owe them the sanitized version."
      },
      {
        "type": "p",
        "text": "**Write the resentment down somewhere private, and then stop feeding it.** Research consistently finds that unspoken resentment toward uninvolved siblings is one of the strongest predictors of severe caregiver burnout, specifically because it has no outlet. Journal it. Tell a therapist. Tell a friend who is not in your family. What you cannot afford is to let it live inside you with no door."
      },
      {
        "type": "p",
        "text": "**Understand that waiting for fairness is a strategy that costs you your health.** Fairness may come later, in the form of a sibling showing up at the end, or a sibling apologizing years from now, or a sibling carrying their own quiet grief. It may also never come. You cannot plan your mother's care around the hope of fairness."
      },
      {
        "type": "h2",
        "text": "How Do I Know When It's Time to Move Mom to Residential Care?"
      },
      {
        "type": "p",
        "text": "**The answer most families are looking for is not a checklist. It is permission.** I will give it to you, with specifics."
      },
      {
        "type": "p",
        "text": "It is time when you have not slept through the night in more than two weeks. It is time when you are starting to resent the person you love most, and that resentment is scaring you. It is time when your own doctor has mentioned your blood pressure, your weight, your migraines, or the dark circles under your eyes. It is time when your children have started saying \"Mom, you're never home anymore.\" It is time when Mom has fallen twice, or wandered once, or left the stove on, or taken the wrong dose of a medication that matters. It is time when you have started crying in your car in parking lots. It is time when you realized, sometime last month, that you could not remember the last thing you did that was just for yourself."
      },
      {
        "type": "p",
        "text": "It is also time when the home is no longer safe, regardless of how you feel about it. Medication errors. Unexplained bruises. Weight loss. A sudden decline in hygiene (which, by the way, is not stubbornness and not personal, but a predictable stage of cognitive change that families often misread as their loved one \"giving up\"). A bathroom that is no longer navigable. A front door that is no longer reliably locked."
      },
      {
        "type": "p",
        "text": "None of these are moral failings on your part. They are data. Read them the way a physician would read a chart. They are telling you that the structure of home caregiving is no longer matching the care your parent needs."
      },
      {
        "type": "p",
        "text": "In Burien, we have twenty one licensed adult family homes. Washington state has more adult family homes per capita than almost any other state in the country, because our state recognized decades ago that small, home-like, six-bed environments produce better outcomes for many older adults than larger institutional settings. You have more good options than you think."
      },
      {
        "type": "h2",
        "text": "What Is an Adult Family Home, and Why Does the Math Work Better?"
      },
      {
        "type": "p",
        "text": "**An adult family home is a licensed residential care home in a private residence that serves up to six adults who need help with daily living.** In Washington, these homes are regulated by DSHS, staffed around the clock, and required to meet specific safety and care standards. They are the state's answer to the question, \"How do we give older adults the feel of home with the staffing of a care facility?\""
      },
      {
        "type": "p",
        "text": "Here is the part that matters when you are the sole family caregiver: the staffing math is completely different. In a six-bed adult family home, the caregiver-to-resident ratio is typically one to three, compared with one to ten or worse at many larger facilities. That means someone is actually in the room when Dad stands up too fast. Someone actually notices when Mom skips breakfast two days in a row. Someone is tracking the medications without depending on a daughter in Kent to call at 7am and remind them."
      },
      {
        "type": "p",
        "text": "Six-bed homes also run about thirty to fifty percent less expensively than comparable large assisted living facilities. In Washington, the average adult family home rate for Medicaid eligible residents works out to roughly $87 per day, or about $31,755 per year. Median assisted living in our state runs $5,900 to $6,200 per month. A private room in a nursing home is north of $137,000 per year. If you have been paralyzed by the assumption that residential care is unaffordable, it is worth checking the actual Washington numbers before ruling it out."
      },
      {
        "type": "p",
        "text": "Medicaid does cover adult family homes in Washington for eligible residents. The state has built a real safety net here, and many Burien families do not realize their parent qualifies until they ask. If you want to know whether Mom or Dad might qualify, start with Community Living Connections at 1 to 855 to 567 to 0252, or explore the DSHS Adult Family Home Locator for licensed homes in King County."
      },
      {
        "type": "h2",
        "text": "How Burien Best Care Home Thinks About the Sole Caregiver"
      },
      {
        "type": "p",
        "text": "I built Burien Best Care Home because I watched my own family try to care for someone we loved and I knew, in my bones, that there was a better way. I also knew what it felt like to be the one who carried it alone. When we take in a new resident, I am not only assessing the person moving in. I am watching the daughter or son who is bringing them, and I am listening for the exhaustion in her voice. Often, she is the one who needs the most tenderness in that first conversation."
      },
      {
        "type": "p",
        "text": "We run a small home by design. Six residents. A staff that actually knows each person's history, preferences, routines, and small comforts. Private care suites, so no one loses their dignity in the move. Semi-private bathrooms shared with only one other resident. Medicaid accepted. A commitment to calling you before you have to call us, because sole caregivers deserve to stop living on high alert."
      },
      {
        "type": "p",
        "text": "If you are the one carrying this, you are welcome to come sit in our kitchen, drink a cup of tea, and ask questions without any expectation. No pressure. No sales pitch. Sometimes families come just to feel what a small home feels like, and that alone gives them permission to start the real conversation with their siblings. If that is what you need right now, that is enough."
      },
      {
        "type": "h2",
        "text": "You Do Not Have to Choose Between Your Health and Your Parent's Care"
      },
      {
        "type": "p",
        "text": "**This is the sentence I wish someone had said out loud to me years ago. It is also the one most sole caregivers have the hardest time believing.** You have been told, implicitly or explicitly, that a \"good daughter\" would do more, sleep less, manage better, find the energy, figure out a way. That story is a lie built on top of a family system that is now impossible."
      },
      {
        "type": "p",
        "text": "Moving your parent into residential care is not giving up. It is not abandonment. It is a decision to change the shape of your love so that you can keep giving it for years instead of collapsing within months. It is also, very often, the decision that saves the relationship. The families I see most often describe the same thing after their parent moves into our home: \"We are closer now. I get to be his daughter again instead of his nurse.\""
      },
      {
        "type": "p",
        "text": "If reading this has brought up feelings you did not expect, sit with them. Call a friend. Journal. Talk to a therapist who understands caregiver grief. And when you are ready, consider taking one small next step. Tour a home. Ask one question. Look up whether Mom might qualify for Medicaid. Schedule a week of respite care just to let yourself sleep."
      },
      {
        "type": "p",
        "text": "There are resources all across King County that exist precisely for this moment. Community Living Connections. The WA Cares Fund. The Family Caregiver Support Program through DSHS. The Alzheimer's Association Washington chapter if dementia is part of your story. We keep a running list of Burien senior resources on our blog, and I update it often because I know what it is like to not have the energy to search."
      },
      {
        "type": "p",
        "text": "And if you want a longer conversation about how senior transitions work, including the ones that involve selling the family home or figuring out what comes next for your parent's belongings, my sister site [yourbestseason.com](https://yourbestseason.com) walks through the whole arc with honesty. When the time comes to think about the house itself, [yournextstephome.com](https://yournextstephome.com) helps Washington families move through real estate decisions without pressure."
      },
      {
        "type": "p",
        "text": "Whatever you do next, please do one thing for me tonight. Put your phone face up again. Drink a glass of water. Go sit somewhere that is just yours for five full minutes. You are not failing. You are the one who showed up. You have always been the one who showed up. Now it is someone else's turn, and that someone else can be us."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions"
      },
      {
        "type": "p",
        "text": "**How do I know if I am actually burned out or just tired?**"
      },
      {
        "type": "p",
        "text": "Exhaustion lifts with a weekend of rest. Burnout does not. If a full night of sleep, a good meal, and a day off still leave you depleted and dreading the next caregiving task, you are past tired. Add in the emotional signs (resentment, numbness, crying in the car, dread of seeing your parent) and you are looking at caregiver burnout, which is a recognized clinical condition, not a personal weakness."
      },
      {
        "type": "p",
        "text": "**My siblings say we should \"wait and see\" before moving Mom. What do I do?**"
      },
      {
        "type": "p",
        "text": "\"Wait and see\" is usually what a sibling says when they have not personally witnessed the decline. The kindest thing you can do is invite them to spend forty eight hours alone with Mom, without you in the house. If they refuse, that is your answer. If they come, they will understand in two days what you have been trying to tell them for two years."
      },
      {
        "type": "p",
        "text": "**Can I visit my parent whenever I want at an adult family home in Burien?**"
      },
      {
        "type": "p",
        "text": "Yes. Licensed Washington adult family homes, including Burien Best Care Home, welcome family visits. Small homes are actually easier to visit than large facilities because there is no sign-in desk, no wings to navigate, and no confusion about who your loved one is. Most families visit more often, not less, once their parent is settled."
      },
      {
        "type": "p",
        "text": "**What if Mom is angry at me for suggesting this?**"
      },
      {
        "type": "p",
        "text": "She may be, at first. Her anger is almost never really about you. It is about losing the version of herself who did not need help, and you are the safest person for her to be angry with because her love for you is not in question. The anger usually softens within the first four to six weeks of a good placement, replaced by something steadier. Many families report their relationship with a parent actually improves after the move."
      },
      {
        "type": "p",
        "text": "**Is respite care in Burien available if I am not ready for a full move yet?**"
      },
      {
        "type": "p",
        "text": "Yes. Respite care in Burien WA is a short term stay in an adult family home that gives sole caregivers a chance to rest, travel, or handle a medical procedure of their own. Burien Best Care Home offers respite care, and it is often the first step families take before considering a permanent transition. One week of real sleep can change how the whole decision looks."
      },
      {
        "type": "h2",
        "text": "About the Author"
      },
      {
        "type": "p",
        "text": "Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs [Your Best Season](https://yourbestseason.com), a senior transitions education platform, and [Your Next Step Home](https://yournextstephome.com), helping Washington families navigate real estate transitions."
      },
      {
        "type": "p",
        "text": "*If you are the sole family caregiver and you want to sit in our kitchen, drink a cup of tea, and ask questions without any expectation, we would be honored to meet you. Burien Best Care Home is located in Burien, WA and serves families across King County.*"
      },
      {
        "type": "p",
        "text": "*Schedule a tour: burienbestcarehome.com/contact*"
      },
      {
        "type": "p",
        "text": "*Call: (206) area code, see contact page*"
      },
      {
        "type": "p",
        "text": "*Medicaid accepted. Private care suites. Six residents. One family.*"
      },
      {
        "type": "h3",
        "text": "Schema Suggestion (JSON-LD FAQPage)"
      },
      {
        "type": "p",
        "text": "```json"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@context\": \"https://schema.org\","
      },
      {
        "type": "p",
        "text": "\"@type\": \"FAQPage\","
      },
      {
        "type": "p",
        "text": "\"mainEntity\": ["
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How do I know if I am actually burned out or just tired?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Exhaustion lifts with rest. Burnout does not. If a full night of sleep, a good meal, and a day off still leave you depleted and dreading the next caregiving task, you are past tired and into caregiver burnout, which is a recognized clinical condition.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What do I do when my siblings will not help with an aging parent?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Ask for specific help in writing with a dollar amount or calendar date attached. Stop protecting them from the full truth. Recognize that you cannot negotiate with a sibling in denial, and that waiting for fairness is a strategy that costs you your health.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"When is it time to move my parent to an adult family home in Burien?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"When you have not slept through the night in weeks, when the home is no longer safe, when you are starting to resent the person you love, when your doctor has flagged your health, or when your parent has had a fall, wandered, or had a medication error. These are data points, not moral failings.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Does Medicaid cover adult family homes in Washington?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes. Washington state Medicaid covers adult family home care for eligible residents. Contact Community Living Connections at 1-855-567-0252 to learn whether your parent qualifies.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Is respite care available in Burien WA?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Yes. Respite care in Burien is a short-term stay in an adult family home that allows family caregivers to rest, travel, or handle their own health needs. Burien Best Care Home offers respite care, and it is often the first step families take before a permanent transition.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "]"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "```"
      }
    ]
  },
  {
    "slug": "sundowning-breaking-point-dementia-burien",
    "title": "The 5 O'Clock Shadow: Why Sundowning Is the Hidden Reason Dementia Families Reach Their Breaking Point",
    "description": "If 5pm has become the hardest hour of your day caring for a parent with dementia, you are not failing. You are running into the limit of what home care was designed to handle. A Burien memory care owner explains what sundowning actually is, why it breaks even the strongest families, and what genuinely helps.",
    "date": "2026-02-27",
    "author": "Becca Pitts",
    "readingTime": "15 min",
    "tags": [
      "Memory Care",
      "Burien"
    ],
    "heroImage": "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?auto=format&fit=crop&w=1600&h=900&q=80",
    "body": [
      {
        "type": "p",
        "text": "Somewhere in King County tonight, an adult daughter is standing in her kitchen at 5:47pm. The light through the window has gone that thin, gold, almost sad color it gets in April. Her mother is in the next room and has just asked for the fourth time where her own mother is. The answer is that her mother has been gone for thirty-two years. Her daughter has already given the honest answer twice and the gentle lie twice, and none of it has stuck, and now her mother is starting to cry and stand up and try the front door."
      },
      {
        "type": "p",
        "text": "The daughter is trying to finish making dinner. She has not peed since noon. Her own kids need help with homework. Her husband is still at work. She can feel something inside her chest that feels like a rubber band pulled to its last millimeter before it snaps."
      },
      {
        "type": "p",
        "text": "This hour has a name, and if you are reading this you probably already know what it is."
      },
      {
        "type": "h2",
        "text": "What Is Sundowning and Why Does It Happen in the Evening?"
      },
      {
        "type": "p",
        "text": "Sundowning is a pattern of increased confusion, agitation, anxiety, restlessness, or behavioral changes that occurs in people with dementia or Alzheimer's in the late afternoon and evening, typically beginning between 4pm and 7pm. It is not a separate disease. It is the same dementia showing a different face as the day winds down."
      },
      {
        "type": "p",
        "text": "Researchers still do not fully agree on why sundowning happens. The leading theories point to a damaged circadian rhythm (the brain's internal day-night clock stops working correctly as the disease progresses), accumulated sensory fatigue from a full day of stimulation, low light triggering disorientation, and the simple depletion of whatever cognitive reserves the person started the morning with. Some people with dementia sundown mildly. Others become a different human being the moment the sun moves past a certain angle."
      },
      {
        "type": "p",
        "text": "Roughly 20 percent of people with Alzheimer's experience sundowning severely enough that it disrupts daily life and sleep, according to research summarized by the Alzheimer's Association. For the families of those people, this is not a statistic. It is the defining feature of their caregiving year."
      },
      {
        "type": "h2",
        "text": "Why Does Sundowning Break Even the Strongest Family Caregivers?"
      },
      {
        "type": "p",
        "text": "Sundowning breaks family caregivers because it happens at the exact hour when the caregiver has nothing left to give, and it peaks at the exact hour when the rest of life is also demanding everything."
      },
      {
        "type": "p",
        "text": "Most \"sundowning advice\" articles online treat the problem as a behavior management puzzle. They give you tips. Dim the lights. Play soft music. Reduce caffeine. Maintain a routine. This advice is not wrong. It is just not enough, and nobody tells you why."
      },
      {
        "type": "p",
        "text": "Let me say the part nobody says: sundowning is not just a symptom of dementia. It is the moment where the mathematics of home caregiving quietly fails."
      },
      {
        "type": "p",
        "text": "Here is what I mean. When your parent was cognitively well, the hours of 4pm to 8pm were crowded but doable. You came home from work, you cooked dinner, you supervised homework, you paid some bills, you maybe exercised. You ran on fumes but the fumes were enough. Now add a person who needs constant redirection, who cannot be left alone with a stove, who might try to leave the house, who is asking the same question every ninety seconds, who sometimes does not recognize you, who is frightened, and who you love so much it physically hurts to watch them disappear."
      },
      {
        "type": "p",
        "text": "You cannot cook dinner through that. You cannot help with homework through that. You cannot keep your own nervous system calm through that. And because the demand spikes during the worst hours of the day, you start skipping things. Your own meals. Your own shower. Your own doctor's appointments. Your own sleep (because sundowning often leaks into nighttime wandering and insomnia)."
      },
      {
        "type": "p",
        "text": "Within six to twelve months of serious sundowning, the primary caregiver is in a place of chronic depletion that the medical literature now recognizes as carrying the same cardiovascular risk as the illness the patient is dying from. Family caregivers of people with dementia have a 63 percent higher mortality rate than non-caregivers of the same age. That is not from the dementia. That is from what the dementia does to the person trying to hold the line at 5pm."
      },
      {
        "type": "h2",
        "text": "What Do Most Families Try First When Sundowning Starts?"
      },
      {
        "type": "p",
        "text": "Most Washington families facing sundowning cycle through four stages of response before they ask for real help. I see this pattern every week."
      },
      {
        "type": "p",
        "text": "First, they research. They buy the Nancy Mace book (\"The 36-Hour Day\"), which is genuinely excellent and which they keep bedside and underline. They watch Teepa Snow videos at midnight. They learn about validation therapy and redirection and the \"golden hour\" approach. They feel hopeful for about a week."
      },
      {
        "type": "p",
        "text": "Second, they adjust the environment. They buy better lighting. They put up a \"do not enter\" sign on the front door. They try melatonin. They install door alarms. Some of this helps. None of it holds."
      },
      {
        "type": "p",
        "text": "Third, they start rotating family members. A sister flies in for a week. A son drives down from Bellingham on weekends. A husband takes over Saturday afternoons so the wife can cry in the car at Target. This helps more than anything else, but the math still does not work, because most families do not have enough family to run a 24-hour rotation."
      },
      {
        "type": "p",
        "text": "Fourth, and this is the stage where people find me, they hit what the caregiver literature calls the \"crisis point.\" Something gives. A fall. A hospitalization. A panic attack in the parking lot of Trader Joe's. A moment where the caregiver looks at their parent and feels a flash of something they never imagined they could feel, and then they feel the shame of having felt it, and then they sit in their car and call their brother and say \"I can't do this anymore.\""
      },
      {
        "type": "p",
        "text": "If you are in any of these four stages and you are reading this, I want you to know something important. You are not failing. You are running into the limit of what home care was designed to handle. There is a difference."
      },
      {
        "type": "h2",
        "text": "What Actually Helps Sundowning, According to People Who Handle It Every Day?"
      },
      {
        "type": "p",
        "text": "The most effective sundowning interventions combine environmental structure, routine stability, skilled redirection, and (this is the part most articles miss) fresh human energy at the hour when the patient needs the most and the family has the least."
      },
      {
        "type": "p",
        "text": "Here is what we know works, based on both the research and what I have watched play out with real residents over two decades."
      },
      {
        "type": "p",
        "text": "**Start the wind-down early.** By 3pm, begin reducing environmental stimulation. Turn off the TV news. Lower overhead lighting and switch to warm, indirect lamps. Reduce the number of people in the room. The person's brain is running out of processing capacity, and every extra input is making it worse."
      },
      {
        "type": "p",
        "text": "**Feed the body calmly.** A warm, simple dinner served at the same time every day stabilizes blood sugar and provides a predictable anchor. Avoid caffeine after noon. Avoid sugary desserts at dinner."
      },
      {
        "type": "p",
        "text": "**Use light strategically.** Bright light exposure in the morning (natural sunlight if possible, a 10,000 lux therapy lamp if not) helps reset the circadian rhythm. Dim, warm light in the evening signals the brain that sleep is coming."
      },
      {
        "type": "p",
        "text": "**Redirect, do not correct.** If your mother is asking for her own mother, do not explain that Grandma has been gone for decades. That information lands as brand new grief every time. Instead, ask her about her mother. \"Tell me about her. What was she like?\" The question honors the emotional reality without forcing the factual one."
      },
      {
        "type": "p",
        "text": "**Match energy to the task.** And here is the hardest truth. The person handling a sundowning dementia patient at 5pm needs to be someone who is not also exhausted, not also cooking, not also grieving, and not also in love with the patient in the specific way that family love makes every lost memory feel like a small death."
      },
      {
        "type": "p",
        "text": "That last line is why professional memory care exists. Not because families love less. Because the family hour and the sundowning hour are the same hour, and one hour cannot hold both."
      },
      {
        "type": "h2",
        "text": "When Does Sundowning Mean It's Time to Consider Residential Memory Care?"
      },
      {
        "type": "p",
        "text": "Sundowning usually signals that it is time to consider residential memory care when one of four things becomes true: the caregiver's own health is declining, the patient is becoming unsafe during evening or nighttime hours, the caregiver is having thoughts or feelings that frighten them, or the family has already tried environmental and routine interventions and the episodes are still escalating."
      },
      {
        "type": "p",
        "text": "I want to handle this honestly, because most care facility websites tiptoe around it and it just makes families feel more lost."
      },
      {
        "type": "p",
        "text": "If you are reading this and you recognize yourself in the 5pm kitchen, here is what I want you to hear. Choosing residential care for a parent with sundowning dementia is not abandonment. It is an acknowledgment of how dementia actually works. Sundowning is physiologically a 24-hour problem that spikes during a 3-hour window. Home caregiving is structurally a solo-shift model. You cannot staff a 24-hour problem with one exhausted person and expect the person or the caregiver to thrive. That is not a personal failure. That is math."
      },
      {
        "type": "p",
        "text": "We wrote about this gentler framing in our piece Am I Abandoning My Parent by Choosing Care? A Burien Memory Care Owner's Honest Answer, and our friends at [Your Best Season](https://yourbestseason.com) have a beautiful framework for the emotional grief side of senior transitions that I recommend to every family who walks through our door."
      },
      {
        "type": "h2",
        "text": "How Does a Small Adult Family Home Handle Sundowning Differently Than a Large Facility?"
      },
      {
        "type": "p",
        "text": "A small adult family home (AFH) handles sundowning differently than a large assisted living facility because the staff ratio, the physical environment, and the ability to individualize care at the exact sundowning hour are fundamentally different."
      },
      {
        "type": "p",
        "text": "Washington State licenses adult family homes as residential settings with a maximum of six residents. This is not a limitation. It is the advantage. Here is what it means at 5pm in real life."
      },
      {
        "type": "p",
        "text": "**Staff ratios.** A six-bed AFH typically operates at a 1:3 caregiver-to-resident ratio during peak hours. A large assisted living facility frequently operates at 1:10, 1:12, or worse in the memory care unit during the same shift. If sundowning hits three residents at once in a 1:10 setting, two of them are getting no attention. In a 1:3 setting, every resident gets hands-on redirection."
      },
      {
        "type": "p",
        "text": "**Staff continuity.** In a small home, the same caregivers come back day after day. They know that Mrs. L believes her husband is coming to pick her up at 5:30, and they know the exact story that soothes her. Large facilities, especially in the tight Seattle-area labor market, often run on rotating staff and agency fill-ins. A stranger cannot redirect a sundowning dementia patient the way a familiar face can."
      },
      {
        "type": "p",
        "text": "**Home-like environment.** An actual house (not an institutional hallway) with a kitchen where residents can smell dinner cooking and a living room where they can sit together provides the same sensory signals a family home provides, without the overstimulation of a commercial facility. For many people with dementia, the architectural scale of a large assisted living building is itself confusing. A regular-sized living room is not."
      },
      {
        "type": "p",
        "text": "**Fresh staff at 5pm.** This is the part nobody advertises. In a family home, the person doing sundowning care at 5pm came on shift at 2pm. They are not also the person who changed the bed at 6am. They have energy. They have patience. They were not up at 2am with the same patient the night before. That freshness is the single most underrated variable in sundowning management, and it is structurally impossible to reproduce in a solo family caregiver situation."
      },
      {
        "type": "p",
        "text": "At Burien Best Care Home, our model is designed specifically for this. Private care suites for each resident so they have a calm, owned space to retreat to when overstimulation hits. Semi-private bathrooms shared with only one other resident, not six. A 1:3 ratio during sundowning hours. Staff who have been trained specifically in memory care redirection techniques. A garden that residents can use in the late afternoon for light therapy and walking (movement during the sundowning window genuinely helps). And most important, a family-centered approach that keeps you, the adult child, involved as a loved one rather than as the 5pm crisis manager."
      },
      {
        "type": "h2",
        "text": "Are There Burien-Specific Resources for Families Dealing with Sundowning?"
      },
      {
        "type": "p",
        "text": "Yes. Burien families dealing with dementia and sundowning have access to several King County and Washington State resources specifically designed for memory care navigation. You do not have to figure this out alone."
      },
      {
        "type": "p",
        "text": "**Community Living Connections of King County** (call 206-962-8467 or 844-348-5464) is the federally designated Aging and Disability Resource Center for our area. They provide free, unbiased guidance on memory care options, including respite care, in-home support, and placement counseling. This is often the first call I recommend to overwhelmed families."
      },
      {
        "type": "p",
        "text": "**Alzheimer's Association Washington State Chapter** runs a 24/7 helpline (800-272-3900) staffed by master's-level clinicians. If you are in the middle of a 9pm sundowning episode and you do not know what to do, this is the number to call tonight. They will talk you through it."
      },
      {
        "type": "p",
        "text": "**WA Cares Fund** is Washington's long-term care insurance program. It may provide benefits toward adult family home care, respite care, and other services for eligible residents. Coverage and eligibility are evolving, so confirm current details at wacaresfund.wa.gov."
      },
      {
        "type": "p",
        "text": "**Washington DSHS Adult Family Home Locator** lists every licensed AFH in King County, including each facility's memory care specialty, inspection history, and available openings. This is a public tool and it is more accurate than any private directory."
      },
      {
        "type": "p",
        "text": "Burien itself has 21 licensed adult family homes as of this writing. Not all of them specialize in memory care. If you are touring, ask specifically about the home's experience with sundowning, their staff ratio during the 4pm to 8pm window, and how they handle nighttime wandering. Those three questions will separate a home that is right for your parent from one that is not."
      },
      {
        "type": "h2",
        "text": "A Gentle Next Step"
      },
      {
        "type": "p",
        "text": "If you are in the 5pm kitchen right now, I want to say one more thing to you, and then I will let you go."
      },
      {
        "type": "p",
        "text": "You did not fail. The rubber band in your chest is not a character flaw. It is your body telling you the truth about what you have been carrying. Sundowning is one of the cruelest features of dementia, and it hits at the one hour of the day when you have the least to give, because that is also the hour when your life is loudest. That is the math. You did not do it wrong."
      },
      {
        "type": "p",
        "text": "When you are ready, whether that is tonight or next month or next year, we would be honored to show you what a different 5pm could look like for your parent. A 5pm where fresh hands take over. A 5pm where you can sit with your mother and be her daughter, not her crisis manager. A 5pm where you can finally pee."
      },
      {
        "type": "p",
        "text": "You can schedule a tour of Burien Best Care Home by visiting [burienbestcarehome.com](https://burienbestcarehome.com), or give us a call. If you would rather read a little more first, our families also find [Your Next Step Home](https://yournextstephome.com) helpful when it is time to navigate selling the family home to fund care, and [Your Best Season](https://yourbestseason.com) for the broader emotional side of senior transitions."
      },
      {
        "type": "p",
        "text": "Whatever you do next, please do one thing for me tonight. Put down this article. Drink a glass of water. Sit down for ninety seconds. You are doing one of the hardest things a human can do, and you are not alone in it."
      },
      {
        "type": "h2",
        "text": "Frequently Asked Questions About Sundowning and Memory Care"
      },
      {
        "type": "p",
        "text": "**Is sundowning a normal part of dementia or a sign something is wrong?**"
      },
      {
        "type": "p",
        "text": "Sundowning is a well-documented pattern in dementia and is considered part of the disease progression, not a separate problem. However, a sudden dramatic increase in sundowning behavior can sometimes indicate an infection (especially a UTI), medication side effects, or pain. If the change is sudden, contact your parent's primary care provider."
      },
      {
        "type": "p",
        "text": "**What time does sundowning usually start?**"
      },
      {
        "type": "p",
        "text": "Sundowning typically begins between 4pm and 7pm, often triggered as natural daylight fades. Some people experience it earlier in winter (when the light changes sooner) and later in summer. In Burien and the greater Seattle area, the long dark months from November through February tend to shift sundowning earlier in the day."
      },
      {
        "type": "p",
        "text": "**Does memory care stop sundowning?**"
      },
      {
        "type": "p",
        "text": "Memory care does not cure sundowning, but structured memory care environments with trained staff, consistent routines, and appropriate light management can significantly reduce the severity and duration of sundowning episodes. More importantly, professional memory care removes the 5pm burden from the family caregiver."
      },
      {
        "type": "p",
        "text": "**How much does memory care in an adult family home cost in Burien, WA?**"
      },
      {
        "type": "p",
        "text": "Adult family home memory care in Burien and King County typically ranges from $6,000 to $9,000 per month for private pay, depending on the level of care needed and the facility. Medicaid contracts often cover a lower rate, averaging around $87 per day statewide. Burien Best Care Home accepts Medicaid and can walk you through your options."
      },
      {
        "type": "p",
        "text": "**Can my parent still see family if they move to an adult family home?**"
      },
      {
        "type": "p",
        "text": "Yes. At Burien Best Care Home we encourage flexible family visiting, and many of our families report that their relationships with their parents improved after placement, because they could finally show up as loved ones instead of overwhelmed caregivers."
      },
      {
        "type": "p",
        "text": "**What if my parent refuses to move?**"
      },
      {
        "type": "p",
        "text": "Refusal is extremely common and rarely means never. Most families find that a combination of a tour (which feels different than an abstract conversation), honest short-term framing (like \"let's try respite for two weeks\"), and involvement of a geriatric care manager or social worker helps the conversation move forward. We can connect you with local Burien resources that specialize in these conversations."
      },
      {
        "type": "p",
        "text": "*Becca Pitts is the owner of Burien Best Care Home, bringing over 20 years of dedicated senior care experience to Burien, WA. She also runs Your Best Season (yourbestseason.com), a senior transitions education platform, and Your Next Step Home (yournextstephome.com), helping Washington families navigate real estate transitions.*"
      },
      {
        "type": "p",
        "text": "**Schema Suggestion (FAQPage JSON-LD):**"
      },
      {
        "type": "p",
        "text": "```json"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@context\": \"https://schema.org\","
      },
      {
        "type": "p",
        "text": "\"@type\": \"FAQPage\","
      },
      {
        "type": "p",
        "text": "\"mainEntity\": ["
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Is sundowning a normal part of dementia or a sign something is wrong?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Sundowning is a well-documented pattern in dementia and is considered part of the disease progression, not a separate problem. However, a sudden dramatic increase in sundowning behavior can sometimes indicate an infection (especially a UTI), medication side effects, or pain.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"What time does sundowning usually start?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Sundowning typically begins between 4pm and 7pm, often triggered as natural daylight fades. In Burien and the greater Seattle area, the long dark months from November through February tend to shift sundowning earlier in the day.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"Does memory care stop sundowning?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Memory care does not cure sundowning, but structured memory care environments with trained staff, consistent routines, and appropriate light management can significantly reduce the severity and duration of sundowning episodes.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "},"
      },
      {
        "type": "p",
        "text": "{"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Question\","
      },
      {
        "type": "p",
        "text": "\"name\": \"How much does memory care in an adult family home cost in Burien, WA?\","
      },
      {
        "type": "p",
        "text": "\"acceptedAnswer\": {"
      },
      {
        "type": "p",
        "text": "\"@type\": \"Answer\","
      },
      {
        "type": "p",
        "text": "\"text\": \"Adult family home memory care in Burien and King County typically ranges from $6,000 to $9,000 per month for private pay. Medicaid contracts often cover a lower rate, averaging around $87 per day statewide. Burien Best Care Home accepts Medicaid.\""
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "]"
      },
      {
        "type": "p",
        "text": "}"
      },
      {
        "type": "p",
        "text": "```"
      }
    ]
  }
]

export function getAllPosts(): Post[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
