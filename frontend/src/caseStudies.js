// Detailed case study data for each project
// All content presented in structured, scannable, graphic-friendly blocks

export const genaiCase = {
  id: "genai-education",
  title: "Impact of Generative AI on Education & Cognition",
  subtitle: "A secondary-research study triangulating policy, behavior, and pedagogy.",
  overview:
    "A literature-led behavioral study examining how generative AI is reshaping student learning outcomes, cognitive development, and teaching practice across global education systems.",
  meta: {
    project: "Generative AI in Education",
    role: "UX Researcher",
    tools: "Literature Review · PESTEL · Comparative Analysis · Triangulation",
    dataSource: "Journals · TED · Business Reports · Stats Canada · UNESCO",
  },
  question:
    "What is the impact of Generative AI on Education and Cognitive Abilities?",
  context: [
    {
      title: "Ongoing debate in academia",
      desc: "The conversation about AI in classrooms is fragmented by inconsistent studies and competing positions.",
    },
    {
      title: "Uncertainty about cognitive effects",
      desc: "Concerns persist that AI use may erode critical thinking and long-term cognitive development.",
    },
    {
      title: "Fragmented stakeholder views",
      desc: "No unified resource captures the perspectives of students, teachers, policy makers, and platforms.",
    },
  ],
  objectives: [
    { num: "01", title: "Evaluate AI's impact on learning", desc: "Assess how generative AI affects student performance and learning experience." },
    { num: "02", title: "Analyze cognitive effects", desc: "Examine AI's influence on critical thinking and cognitive development." },
    { num: "03", title: "Examine pedagogical approaches", desc: "Investigate how educators can integrate AI to enhance instruction." },
    { num: "04", title: "Identify challenges & opportunities", desc: "Highlight benefits and obstacles of integrating tools like ChatGPT in education." },
    { num: "05", title: "Recommend integration strategies", desc: "Propose solutions to address barriers posed by AI in education." },
  ],
  methodology: {
    approach: "Secondary research · Literature review",
    dataTypes: ["Literature Review", "Qualitative Data", "Quantitative Data"],
    sources: ["Journal Articles", "News Articles", "TED Talks & Interviews", "Business Reports", "Stats Canada", "UNESCO"],
    outputs: ["Triangulation of data", "Comparative analysis", "Actionable insights", "Recommendations"],
  },
  stakeholders: {
    primary: ["Students", "Teachers", "Policy Makers", "Educational Institutes"],
    influence: ["Market Research Firms", "Global Governments", "Federal Government"],
    impact: ["Parents", "Employers", "Administrators"],
    notes: [
      { who: "Students", what: "Personalized support, but risks of dependency, cognitive impact, and ethics." },
      { who: "Teachers", what: "Frees admin work, but reshapes the role and skill mix required." },
      { who: "Policy Makers", what: "UNESCO frames ethical guardrails; regional policy shapes adoption." },
      { who: "Technology Firms", what: "Carnegie Learning, Udacity and others define the toolset institutions buy." },
    ],
  },
  pestel: [
    { dim: "Political", points: ["Regulation balances innovation with privacy and data security.", "Guidelines needed for plagiarism, transparency, human oversight.", "UNESCO: most education systems are unprepared for ethical AI integration."] },
    { dim: "Economic", points: ["A few large firms own most advanced GenAI tech.", "Implementation cost can widen existing access gaps.", "Equitable access is essential to avoid educational inequality."] },
    { dim: "Social", points: ["Personalized learning improves engagement.", "Concerns about teacher role displacement.", "Risk of social isolation and weaker soft skills in younger learners."] },
    { dim: "Technical", points: ["Accuracy and bias remain core concerns.", "Digital literacy is a prerequisite for safe use.", "Supports adaptive lifelong learning and feedback loops."] },
    { dim: "Environmental", points: ["High energy use and carbon footprint.", "Need for eco-aware AI infrastructure."] },
    { dim: "Legal", points: ["IP, copyright, and privacy must be navigated carefully.", "Data protection compliance and secure handling are mandatory."] },
  ],
  comparative: {
    title: "China vs Romania — AI in education",
    rows: [
      { label: "AI development stage", a: "Advanced integration, high investment.", b: "Emerging adoption, foundational projects." },
      { label: "Investment", a: "Significant rise in AI deal value (2012–2019) in education.", b: "Lower investment due to cost barriers." },
      { label: "Policy", a: "184 schools selected to embed AI into curriculum.", b: "National AI policy established for 2024–2027." },
      { label: "Future goals", a: "Position as global AI hub by 2030.", b: "Early-stage projects with EU-funded initiatives." },
    ],
  },
  tools: {
    label: "Top GenAI tools used by students",
    data: [
      { name: "ChatGPT", value: 49 },
      { name: "DeepL", value: 15 },
      { name: "Others", value: 12 },
      { name: "DALL·E", value: 4 },
      { name: "MidJourney", value: 3 },
      { name: "Bing AI", value: 2 },
    ],
  },
  faculty: {
    label: "GenAI usage by student faculty",
    data: [
      { name: "Engineering", value: 75 },
      { name: "Arts", value: 73 },
      { name: "Maths & Natural Sciences", value: 72 },
      { name: "Humanities", value: 61 },
      { name: "Health Sciences", value: 53 },
      { name: "Social Sciences", value: 51 },
      { name: "Agriculture & Forestry", value: 48 },
    ],
  },
  drivers: [
    "Research", "Clarification", "Ideation", "Personalized responses",
    "Available 24×7", "Anonymous · Autonomous", "In-depth learning",
    "Visualization", "Translation", "Solutioning",
  ],
  impacts: {
    merits: [
      { area: "Cognitive", points: ["Increased speed", "Potential for in-depth learning", "Efficient use of brainpower"] },
      { area: "Academic", points: ["Better content & email etiquette", "Personalized feedback"] },
      { area: "Social/Emotional", points: ["Reduced friction in communication"] },
    ],
    risks: [
      { area: "Cognitive", points: ["Impaired critical thinking", "Risk of cognitive atrophy", "Misleading perception of ability"] },
      { area: "Academic", points: ["Lower CGPA in over-reliant students"] },
      { area: "Social/Emotional", points: ["Impedes soft skill development", "Risk to emotional intelligence", "Perpetuates existing biases"] },
    ],
  },
  recommendations: [
    { num: "01", title: "Establish clear guidelines", desc: "Define when and how AI is introduced across age groups, ensuring equitable use." },
    { num: "02", title: "Critical thinking first", desc: "Equip students to evaluate AI outputs before using them in coursework." },
    { num: "03", title: "AI-enhanced curriculum", desc: "Embed AI thoughtfully across subjects to build interdisciplinary readiness." },
    { num: "04", title: "Equitable AI access", desc: "Close infrastructure gaps so AI is not an advantage of the well-resourced." },
    { num: "05", title: "Educator AI training", desc: "Address the 78% of teachers who feel unequipped to use generative AI well." },
  ],
  closingStat: { value: "78%", desc: "of teachers report they feel unequipped to integrate GenAI into their classroom." },
};

export const mplCase = {
  id: "mpl-gaming",
  title: "Redesigning MPL to Retain 90M+ Gamers",
  subtitle: "A behavior-led redesign of India's largest skill gaming platform.",
  overview:
    "A leading skill-gaming platform with 90M+ registered users hit a retention plateau. We rebuilt the experience from user behavior up — reducing first-week churn and unlocking millions in monthly revenue.",
  meta: {
    project: "MPL — Mobile Premier League",
    role: "UX Researcher",
    tools: "Interviews · Focus Groups · Concept Validation · Usability Testing",
    dataSource: "Primary research with 48 + 20 gamers across spend tiers",
  },
  highlights: [
    { label: "Registered users", value: "90M+" },
    { label: "First-session drop-off (before)", value: "60%" },
    { label: "Revenue impact (after)", value: "₹ Millions / month" },
    { label: "Study participants", value: "68 gamers" },
  ],
  challenge:
    "Strong top-of-funnel traction, but users churned after 2–3 sessions. The interface felt overwhelming, the language felt foreign, and trust was thin where money was involved.",
  goal:
    "Reimagine the app so first-time users feel guided, in control, and confident enough to play, deposit, and return.",
  audience: {
    demographics: [
      { label: "Age", value: "18–35 years" },
      { label: "Gender skew", value: "Predominantly male" },
      { label: "Geography", value: "Tier II & III cities" },
      { label: "Life stage", value: "Early jobbers seeking supplementary income" },
    ],
    bySpend: [
      { name: "Low rollers", value: "₹150", color: "soft" },
      { name: "Mid rollers", value: "₹500", color: "mid" },
      { name: "High rollers", value: "₹1000+", color: "strong" },
    ],
    personas: [
      { name: "Side Hustler", desc: "Uses spare time to earn extra. Low to mid rollers.", spend: "Low–Mid" },
      { name: "Newbie Gamer", desc: "New to real-money gaming. Cautious and exploratory.", spend: "Low" },
      { name: "Mature Gamer", desc: "Disposable income. Top revenue contributors.", spend: "High" },
      { name: "E-Sport Athlete", desc: "Competitive players chasing the leaderboard.", spend: "High" },
    ],
  },
  insights: [
    { num: "01", title: "Overwhelming first session", desc: "60% of new gamers abandoned the app within 24–48 hours due to complexity and a steep learning curve." },
    { num: "02", title: "Money is the hook", desc: "40% of users came in for monetary incentives — not the games themselves." },
    { num: "03", title: "Language created friction", desc: "App copy caused misunderstandings, eroding trust and confidence at key moments." },
    { num: "04", title: "Trust gates spend", desc: "Users hesitated to deposit until the interface earned credibility through clarity and consistency." },
  ],
  process: [
    { num: "1", title: "In-depth interviews", desc: "Mapped behavior, motivations, and barriers across spend tiers." },
    { num: "2", title: "Focus groups", desc: "Grouped users by persona to understand context and decision drivers." },
    { num: "3", title: "Concept validation", desc: "Tested features and flows against pain points with prospective users." },
    { num: "4", title: "Prototypes", desc: "Designed final flows informed by insight, validated through testing." },
    { num: "5", title: "Usability testing", desc: "20 interviews, 60–75 min, 4 exploration tasks with active MPL users." },
  ],
  testingFindings: [
    { area: "Game choice", desc: "Participants stayed within their comfort zones — familiar games drove confidence." },
    { area: "Visual cues", desc: "Most users relied on icons and imagery over text to interpret content." },
    { area: "Home screen", desc: "16 found games easily; 12 noted reduced clutter vs prior versions." },
    { area: "Special events", desc: "17 valued the prominent placement; 3 preferred it lower if they did not enter tournaments." },
    { area: "Games for you", desc: "All appreciated the quick re-entry to favorite games." },
    { area: "Top categories", desc: "15 found the new navigation easier; Card Skills, Sports, and Shooting were understood." },
    { area: "Fantasy screen", desc: "15 liked seeing names & photos; 9 wanted clearer selection counts." },
    { area: "Chat & livestreams", desc: "12 liked merging into one tab; 8 already using, 4 planning to use." },
    { area: "Wallet", desc: "19 understood winnings; bonus cash dissatisfaction was unanimous due to withdrawal limits." },
  ],
  impact: [
    { label: "First-week churn", value: "↓ Significant", desc: "Users retained beyond the critical 2–3 session window." },
    { label: "Monthly revenue", value: "↑ ₹ Millions", desc: "Direct uplift from increased session continuity and deposit confidence." },
    { label: "Perceived trust", value: "↑ Markedly", desc: "Clarity in language and visual hierarchy rebuilt credibility." },
    { label: "Onboarding clarity", value: "↑ Strong", desc: "Reduced feeling of overwhelm reported across all spend tiers." },
  ],
  outcomes: {
    text: [
      "MPL is now positioned to convert top-of-funnel traction into long-term engagement. The redesign worked because it started from observed behavior — not assumed preferences.",
      "Beyond the metrics, the project demonstrated that trust in a real-money gaming product is built through interface honesty: clear language, visible affordances, and predictable outcomes at every step.",
    ],
  },
};
