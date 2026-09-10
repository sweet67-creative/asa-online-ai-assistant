export interface EmailInputs {
  recipient: string;
  senderName: string;
  subject: string;
  tone: 'professional' | 'concise' | 'friendly' | 'urgent' | 'persuasive';
  bulletPoints: string;
  callToAction: string;
}

export interface MeetingInputs {
  title: string;
  date: string;
  attendees: string;
  meetingType: 'weekly-sync' | 'project-kickoff' | 'executive-briefing' | 'client-review' | 'retrospective';
  rawNotes: string;
}

export interface TaskPlannerInputs {
  projectTitle: string;
  timeframe: 'today' | 'this-week' | '2-week-sprint' | 'monthly';
  priorityLevel: 'critical' | 'high' | 'medium';
  teamMembers: string;
  goalSummary: string;
  knownBlockers: string;
}

export interface ResearchInputs {
  topic: string;
  industry: string;
  reportDepth: 'executive-summary' | 'comprehensive-analysis' | 'competitor-landscape' | 'swot-matrix';
  keyQuestions: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export function generateMockEmail(inputs: EmailInputs): string {
  const recipient = inputs.recipient.trim() || 'Team';
  const sender = inputs.senderName.trim() || 'Andile Dube';
  const subject = inputs.subject.trim() || 'Project Update & Next Milestones';
  const cta = inputs.callToAction.trim() || 'Please confirm receipt and let me know your feedback by end of day tomorrow.';
  
  const bullets = inputs.bulletPoints.trim()
    ? inputs.bulletPoints
        .split('\n')
        .map(b => b.trim())
        .filter(Boolean)
    : [
        'Finalized Q3 operational milestones with 14% efficiency gains',
        'Streamlined client delivery pipeline across digital touchpoints',
        'Scheduled stakeholder sync for Thursday at 10:00 AM CAT'
      ];

  const toneSalutations: Record<string, { greeting: string; opening: string; closing: string }> = {
    professional: {
      greeting: `Dear ${recipient},`,
      opening: `I hope this message finds you well. I am writing to provide a structured update regarding ${subject.toLowerCase()}.`,
      closing: 'Best regards,'
    },
    concise: {
      greeting: `Hi ${recipient},`,
      opening: `Quick update on ${subject}:`,
      closing: 'Regards,'
    },
    friendly: {
      greeting: `Hi ${recipient}!`,
      opening: `Hope you're having a productive week! I wanted to touch base and share some exciting progress on ${subject}.`,
      closing: 'Warm wishes,'
    },
    urgent: {
      greeting: `Attention: ${recipient},`,
      opening: `Please prioritize this notice regarding ${subject}. Immediate coordination is required on the items below:`,
      closing: 'Urgent action appreciated,'
    },
    persuasive: {
      greeting: `Dear ${recipient},`,
      opening: `I am delighted to present our proposed strategy for ${subject}, which promises to significantly streamline our workflow.`,
      closing: 'Looking forward to our partnership,'
    }
  };

  const selectedTone = toneSalutations[inputs.tone] || toneSalutations.professional;

  return `Subject: [ASA Online] ${subject}

${selectedTone.greeting}

${selectedTone.opening}

Key Highlights & Deliverables:
${bullets.map(b => `• ${b.replace(/^[•\-\*]\s*/, '')}`).join('\n')}

Immediate Action Required:
${cta}

If you have any questions or require supplementary documentation, please feel free to reach out directly.

${selectedTone.closing}
${sender}
ASA Online Workplace Suite
Andile Dube · ASA 18 Soweto`;
}

export function generateMockMeetingSummary(inputs: MeetingInputs): string {
  const title = inputs.title.trim() || 'Q3 Cross-Functional Alignment Meeting';
  const attendees = inputs.attendees.trim() || 'Andile Dube, Sipho M., Zanele K., Lead Engineer';
  const date = inputs.date || 'September 10, 2026';
  const raw = inputs.rawNotes.trim();

  return `===========================================================
ASA MEETING SYNTHESIS REPORT
Session: ${title}
Date: ${date}
Attendees: ${attendees}
Facilitated by: ASA Online Productivity Engine (Andile Dube · ASA 18 Soweto)
===========================================================

1. EXECUTIVE SUMMARY
-----------------------------------------------------------
The session focused on accelerating organizational execution speed and resolving inter-departmental blockers. The team reviewed current work streams, validated core performance indicators, and established unified deliverables for the upcoming execution cycle.

2. KEY DECISIONS ADOPTED
-----------------------------------------------------------
[DECISION 01] Standardized daily task planning around automated AI triage to reduce context-switching by 35%.
[DECISION 02] Approved revised launch schedule with QA validation locked 48 hours prior to deployment.
[DECISION 03] Consolidated client response protocols to maintain a guaranteed under-2-hour turnaround time.

3. ACTION ITEMS & ACCOUNTABILITY MATRIX
-----------------------------------------------------------
• [HIGH PRIORITY] Finalize production deployment checklist
  Owner: Andile Dube | Due: Thursday, 17:00 | Status: In Progress

• [MEDIUM PRIORITY] Sync with client success team on feedback digest
  Owner: Sipho M. | Due: Friday, 12:00 | Status: Not Started

• [HIGH PRIORITY] Conduct architecture stress test for high-throughput batching
  Owner: Technical Lead | Due: Monday, 09:00 | Status: Pending Review

4. PARKING LOT / UNRESOLVED MATTERS
-----------------------------------------------------------
• Long-term database partition strategy to be discussed in specialized deep-dive session next Tuesday.
• Budget re-allocation for AI infrastructure tooling awaiting executive signoff.

5. NEXT SCHEDULED SYNC
-----------------------------------------------------------
Next meeting scheduled for Wednesday at 10:00 CAT. Pre-reading materials will be distributed 24 hours in advance.

Generated automatically by ASA Online. All outputs are fully editable.`;
}

export function generateMockTaskPlan(inputs: TaskPlannerInputs): string {
  const title = inputs.projectTitle.trim() || 'Workplace Automation & Workflow Optimization';
  const timeframe = inputs.timeframe.replace('-', ' ').toUpperCase();
  const priority = inputs.priorityLevel.toUpperCase();
  const team = inputs.teamMembers.trim() || 'Andile Dube (Lead), Core Sprint Team';

  return `===========================================================
ASA AGILE WORKPLACE TASK PLAN
Initiative: ${title}
Timeframe: ${timeframe} | Priority: ${priority}
Team: ${team}
Engineered via ASA 18 Soweto Productivity Framework
===========================================================

PHASE 1: CRITICAL PATH (Immediate Execution - Hours 1-8)
[ ] TASK-101: Triage all incoming stakeholder requests & establish single source of truth
    - Estimate: 2.5h | Assignee: Lead | Impact: High
[ ] TASK-102: Configure automated summary pipelines for daily meeting synthesis
    - Estimate: 3.0h | Assignee: Operations | Impact: High
[ ] TASK-103: Review and resolve blockers identified in previous retrospective
    - Estimate: 2.0h | Assignee: Team | Impact: Critical

PHASE 2: EXECUTION & CONVERGENCE (Mid-Cycle - Hours 9-24)
[ ] TASK-201: Draft standardized communication templates for external client updates
    - Estimate: 4.0h | Dependencies: TASK-101
[ ] TASK-202: Conduct peer review of workflow automation scripts
    - Estimate: 3.5h | Assignee: Andile Dube
[ ] TASK-203: Stress-test task allocation balance to ensure 0% burn-out margin
    - Estimate: 2.0h | Priority: High

PHASE 3: VERIFICATION & RETROSPECTIVE (Closing Phase)
[ ] TASK-301: Validate milestone deliverables against original project criteria
    - Estimate: 2.0h | Deliverable: Signed signoff document
[ ] TASK-302: Host 15-minute async retro and document lessons learned
    - Estimate: 1.0h | Output: ASA Knowledge Base Update

RISK MITIGATION & CONTINGENCY:
• Risk: Unscheduled ad-hoc client escalations
  Mitigation: 15% buffer capacity built into schedule between 14:00 - 16:00 daily.
• Bottleneck Watch: Awaiting 3rd party API tokens for external sync.

Target Outcome: 100% focused execution with 0 unaddressed critical path tasks.`;
}

export function generateMockResearch(inputs: ResearchInputs): string {
  const topic = inputs.topic.trim() || 'Generative AI Impact on African Tech Ecosystems & Enterprise Productivity';
  const industry = inputs.industry.trim() || 'Enterprise Software & Technology Services';

  return `===========================================================
ASA RESEARCH INTELLIGENCE DOSSIER
Topic: ${topic}
Domain / Sector: ${industry}
Format: ${inputs.reportDepth.toUpperCase().replace('-', ' ')}
Prepared by: ASA Research Assistant (Andile Dube ASA 18 Soweto)
===========================================================

1. EXECUTIVE BRIEF & CORE THESIS
The modern enterprise landscape is undergoing a structural shift toward agentic and assisted workplace workflows. Integrating targeted AI copilots in day-to-day operations demonstrates an empirical 28% to 42% decrease in routine administration latency, while improving output accuracy and institutional knowledge capture.

2. STRATEGIC MARKET DRIVERS
• Autonomous Drafting & Synthesis: Teams utilizing automated summarization and structured communication save an average of 8.5 hours per employee each workweek.
• Cross-Border Scaling: South African and pan-African technology hubs (including Johannesburg, Soweto, Nairobi, and Lagos) are rapidly leapfrogging legacy SaaS stacks through lean, AI-native productivity architectures.
• Data Sovereignty & Responsible Governance: Strict alignment with POPIA, GDPR, and enterprise privacy guarantees is now the primary purchase gatekeeper for tier-1 enterprises.

3. COMPETITIVE & COMPARATIVE ANALYSIS
Metric                  Legacy Workflow        ASA AI Assisted Workflow
-------------------------------------------------------------------------
Average Email Prep      14 - 18 minutes        1.2 minutes (Editable draft)
Meeting Notes Digest    45 minutes post-call   Instant (< 90 seconds)
Sprint Task Scaffolding 3.5 hours              12 minutes
Cognitive Fatigue Rate  High (Context-switching) Low (Pre-structured flows)

4. IDENTIFIED RISK FACTORS & MITIGATION STRATEGY
• Hallucination in Numerical Metrics: Mitigate with human-in-the-loop review (enforced editable output architecture).
• Change Management Friction: Provide modular, 1-click preset templates to minimize employee onboarding time.

5. STRATEGIC RECOMMENDATIONS FOR IMMEDIATE ADOPTION
1. Standardize company-wide prompt templates for routine executive updates.
2. Mandate responsible AI disclaimer policies on all synthesized artifacts.
3. Conduct bi-weekly workflow audits to reinvest saved hours into high-leverage strategic initiatives.`;
}

export function generateMockChatResponse(userMessage: string, persona: string): string {
  const lower = userMessage.toLowerCase();

  if (lower.includes('email') || lower.includes('mail') || lower.includes('write')) {
    return `I can help you craft or refine that email right away. 

Here is a recommended angle:
1. State the primary objective in the opening 15 words.
2. Frame 2 to 3 concise bullet points with owners and deadlines.
3. Conclude with an unambiguous single call-to-action.

Would you like me to draft this directly using our Smart Email Generator module, or should we refine the talking points here first?

— ASA Online Assistant (Andile Dube · ASA 18 Soweto)`;
  }

  if (lower.includes('meeting') || lower.includes('notes') || lower.includes('summarize')) {
    return `I've analyzed that meeting context. When summarizing executive meetings, I always structure into three essential tiers:

1. High-Level Strategic Decisions (What was definitively agreed on)
2. Action Items Matrix (Who is responsible, by when, and urgency)
3. Unresolved Risks & Parking Lot items

Feel free to paste your raw transcripts or notes into the Meeting Notes Summarizer tab on the left for a complete synthesis report!`;
  }

  if (lower.includes('task') || lower.includes('plan') || lower.includes('sprint') || lower.includes('week')) {
    return `To optimize your workload for maximum focus, I recommend the 1-3-5 prioritization rule:
• 1 Major Strategic Task (must complete today, high cognitive demand)
• 3 Medium Tasks (core project deliverables and client communications)
• 5 Minor Administrative Tasks (routine follow-ups, calendar prep, inbox zero)

You can jump into the AI Task Planner tab on the left to generate an end-to-end sprint or weekly schedule with estimated hours and contingency buffers!`;
  }

  return `Thank you for your inquiry. As the ASA Online Workplace Assistant, I'm configured to streamline your daily operations with precision and speed.

Regarding your request: "${userMessage}"

Key Actionable Insights:
• Efficiency: Automating this process frees up valuable cognitive bandwidth for higher-order decision making.
• Best Practice: Maintain clarity, specify clear milestones, and keep all stakeholders synchronized through concise status digests.
• Next Step: You can edit or expand any generated output in our side-by-side workspace before exporting to your team.

How else can I assist you with your workplace productivity today?

— ASA Online (Engineered by Andile Dube · ASA 18 Soweto)`;
}
