const PROJECTS_DATA = [
  {
    "project_name": "BIS Club Hackathon: Optimized Safety Helmet Design",
    "project_type": "Hackathon",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/BIS-2.webp",
    "source_link": "https://www.linkedin.com/in/anurag-dashore",
    "description": "<p>Conceptual two-wheeler helmet design developed for a BIS Club hackathon, focusing on structural integrity, rider safety, material durability, and ergonomic considerations.</p><p>Explored an IoT-assisted concept intended to improve rider safety and reduce unnecessary stopping time at traffic signals. Developed collaboratively as a two-member team with reference to IS 4151 helmet safety requirements.</p>",
    "tags_list": [
      "Mechanical Design",
      "Product Development",
      "BIS / IS 4151",
      "IoT",
      "Safety Engineering"
    ]
  },
  {
    "project_name": "MechAI - Assembly Line Efficiency",
    "project_type": "Hackathon",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/MechAI.webp",
    "source_link": "https://anurag-dashore.github.io/MechAI/",
    "description": "<p><strong>MechAI</strong> is an offline industrial-engineering analysis platform that turns workstation time studies into a structured manufacturing report and combines classical industrial engineering with applied AI/ML.</p><p><strong>Core capabilities:</strong></p><ul><li>Flow Process Charts, line balancing, and plant-layout generation</li><li>ABC inventory classification, Kanban, production scheduling, DPR, and related manufacturing analysis</li><li>scikit-learn models for bottleneck, output, and stockout-risk prediction</li><li>Local SmolLM2-360M-Instruct assistant for explaining results without cloud inference</li><li>Interactive visualizations and one-click report generation</li></ul><p>Validated on a 17-workstation cooler assembly line, with the analysis identifying an opportunity for <strong>30.54% cycle-time reduction</strong> and <strong>24.33% efficiency improvement</strong> through line rebalancing.</p>",
    "tags_list": [
      "Python",
      "Flask",
      "Pandas",
      "scikit-learn",
      "Plotly",
      "SmolLM2-360M",
      "Industrial Engineering"
    ]
  },
  {
    "project_name": "PrismPulse",
    "project_type": "Hackathon",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/PrismPulse.webp",
    "source_link": "https://devpost.com/software/prismpulse",
    "description": "<p><strong>PrismPulse</strong> is a 7-dimension codebase intelligence agent built for the GitLab Transcend Hackathon. It analyzes a repository and produces a 0–100 Health Score with prioritized recommendations for improving code quality.</p><p>It evaluates inactive code, security issues, dependencies, duplication, structure, and test gaps using GitLab Duo Agent Platform and GitLab Orbit tools such as repository search, repository tree, security findings, and vulnerability data.</p><p>The project uses a synthetic test repository with intentionally planted issues to demonstrate all seven analysis dimensions and was designed to make codebase cleanup systematic rather than purely manual.</p>",
    "tags_list": [
      "GitLab Duo Agent Platform",
      "GitLab Duo Chat",
      "GitLab Orbit",
      "Python",
      "MCP",
      "Codebase Analysis"
    ]
  },
  {
    "project_name": "IgniteEngine",
    "project_type": "Hackathon",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/IgniteEngine.webp",
    "source_link": "https://devpost.com/software/IgniteEngine",
    "description": "<p><strong>IgniteEngine</strong> is a Slack-native creative production pipeline for animation/VFX concepts. <strong>Woodpecker</strong> orchestrates up to 16 specialist persona-agents called Sparks, with each stage developing a different part of the concept.</p><p>An entropy level from 1–16 controls pipeline depth, from core writing and dialogue through character, visual style, pacing, branding, audience, casting, budgeting, and trend research. Each Spark receives previous output as context, allowing the concept to evolve sequentially.</p><p><strong>Key engineering features:</strong></p><ul><li>16 specialized Sparks with focused roles</li><li>Interactive Slack commands, branching story controls, and per-step rerolling</li><li><strong>Pinecone</strong>, a separate hard-coded safety check that runs after every Spark</li><li>Prompt-level safety controls plus a code-level safety backstop</li><li>MCP groundwork for live trend research through the Alder Spark</li></ul><p>Built for the Slack Agent Builder Challenge using GPT-OSS-20B, Groq, MCP, Slack API, Slack Block Kit, and Slack Bolt.</p>",
    "tags_list": [
      "Python",
      "GPT-OSS-20B",
      "Groq",
      "MCP",
      "Slack API",
      "Slack Bolt",
      "AI Agents"
    ]
  },
  {
    "project_name": "Orchestrate Claims Agent",
    "project_type": "Hackathon",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/orchestrate.webp",
    "source_link": "https://github.com/ANURAG-DASHORE/Orchestrate-Claims_Agent-HackerRank",
    "description": "<p><strong>Orchestrate Claims Agent</strong> is a multimodal insurance-claims review agent built for the HackerRank Orchestrate Hackathon. It combines written claim information with photographic evidence and uses a vision-language model to produce structured, auditable claim decisions.</p><p>The pipeline uses Groq Vision API with <strong>Meta Llama 4 Scout</strong>, deterministic JSON output, and retry handling for rate limits. It processes 44 test claims and produces structured fields covering evidence validity, risk flags, issue type, claim status, severity, and supporting images.</p>",
    "tags_list": [
      "Python",
      "Groq API",
      "Llama 4 Scout",
      "Multimodal AI",
      "AI Agents",
      "HackerRank"
    ]
  },
  {
    "project_name": "GitLab EE Frontend — Flaky Jest Test Fix",
    "project_type": "Open Source Contribution - OSC",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/GitLab-2.webp",
    "source_link": "https://gitlab.com/gitlab-org/gitlab/-/merge_requests/248992",
    "description": "<p><strong>First merged open-source contribution to GitLab.</strong> Fixed a flaky Jest test in GitLab's EE frontend by identifying a race condition in Apollo GraphQL mock resolution.</p><p>Refactored the affected spec to use GitLab's <code>createControlledMockApollo</code> pattern, keeping queries pending until explicitly resolved and making the loading-state assertion deterministic. The change was reviewed and approved by GitLab maintainers and merged as <strong>MR !248992</strong>.</p>",
    "tags_list": [
      "GitLab",
      "Vue.js",
      "Jest",
      "Apollo GraphQL",
      "Open Source"
    ]
  },
  {
    "project_name": "Improvement of Assembly Line Efficiency and Material Handling",
    "project_type": "Final Year Project",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/FINAAL_YEAR_PROJECT.webp",
    "source_link": "https://github.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/tree/main/IMAGES/FINAL_YEAR_PROJECT",
    "description": "Under guidance of my project mentor Dr. Devendra Singh Verma [Head of Department, DAVID - DAVV]. Conducted study for topic Improvement of Assembly Line Efficiency & Material Handling and created my final year project<br>Objective: To analyze and optimize the assembly line operations of an industrial air cooler manufacturing unit by identifying bottlenecks, reducing non-value-added activities, and streamlining the plant layout.<br><strong>Key Technical Contributions:</strong><ul><li>Method Study & Work Measurement: Conducted a comprehensive AS-IS analysis using time-study techniques to establish a Standard Time of 33.26 minutes for the assembly process.</li><li>Bottleneck Identification: Utilized Process Flow Diagrams (PFD) to visualize the workflow, revealing that 24% of the total cycle time was consumed by material transport and handling.</li><li>Plant Layout Redesign: Developed and proposed a transition from a traditional cluttered layout to a U-shaped/Continuous Flow layout. This redesign eliminated material backtracking and significantly reduced the distance traveled by workers and components.</li><li>Lean System Implementation: Designed and introduced a Kanban System to regulate material flow and prevent overproduction. Implemented Daily Production Reports (DPR) and standardized Production Schedules to improve inter-departmental communication and accountability.</li><li>Process Engineering: Analyzed the assembly sequence of critical components (Motor, Fan, Cooling Pads, and Pump) to ensure a balanced workload across the assembly line.</li><li>Tools & Frameworks Applied: Lean Manufacturing (Kanban card), Just-in-Time (JIT), and Waste (Muda) Reduction.</li><li>Industrial Engineering: Time & Motion Study, Process Mapping, and Plant Layout & Material Handling (PLMH).</li><li>Documentation: Process Flow Diagrams, Standard Operating Procedures (SOPs).</li></ul>",
    "tags_list": [
      "Production Planning",
      "Plant Layout & Material Handling",
      "Lean Manufacturing",
      "Kanban",
      "Work Study & Measurement",
      "Process Mapping"
    ]
  },
  {
    "project_name": "IMAGE EDITOR PRO (OpenCV Image Processing Basics)",
    "project_type": "Personal Projects",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/python_open-CV.webp",
    "source_link": "https://github.com/ANURAG-DASHORE/Image_Editor_Pro",
    "description": "<p>A Python/OpenCV image-processing utility demonstrating fundamental computer-vision operations. It loads an input image and displays the original alongside grayscale, blurred, and edge-detected versions for direct visual comparison.</p>",
    "tags_list": [
      "Python",
      "OpenCV",
      "Image Processing",
      "Computer Vision"
    ]
  },
  {
    "project_name": "GEMINI_CLI_CHAT_BOT",
    "project_type": "Personal Projects",
    "img_link": "https://raw.githubusercontent.com/ANURAG-DASHORE/ANURAG-DASHORE.github.io/main/IMAGES/WEBP-IMAGES/gemini-python.webp",
    "source_link": "https://github.com/ANURAG-DASHORE/GEMINI_AI_CHAT_BOT",
    "description": "<p>A terminal-based AI chatbot built in Python using the Gemini API. It supports real-time conversational interaction directly from a terminal, Python IDE, Command Prompt, or PowerShell session.</p>",
    "tags_list": [
      "Python",
      "Gemini API",
      "LLM Integration",
      "Terminal"
    ]
  }
];
