// ============================================================
// Employee Corrective Meeting Simulation
// Prompt Engine
// ============================================================

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateEmployeeProfile() {
  const ages = ["26", "29", "32", "35", "38", "41", "46", "52"];

  const experienceLevels = [
    "less than 1 year in this role",
    "1 year in this role",
    "2 years in this role",
    "3 years in this role",
    "5 years in this role",
    "8 years in this role"
  ];

  const presentations = [
    "anxious and somewhat embarrassed",
    "guarded but trying to stay professional",
    "frustrated and worried about being misunderstood",
    "overwhelmed and somewhat distracted",
    "calm on the surface but defensive when questioned",
    "cooperative but hesitant to admit fault",
    "tired and emotionally worn down"
  ];

  const accountabilityLevels = [
    "takes partial responsibility but does not fully understand the impact",
    "recognizes some concerns but feels the situation is more complicated",
    "initially minimizes the concern but becomes more reflective if the supervisor asks thoughtful questions",
    "accepts responsibility for some behaviors but resists broad criticism",
    "feels the concern is somewhat unfair but is willing to talk if approached respectfully"
  ];

  const communicationStyles = [
    "answers briefly at first and needs follow-up questions",
    "talks around the issue before directly answering",
    "shares information gradually as trust develops",
    "becomes more specific when the supervisor asks concrete questions",
    "uses examples to explain their perspective but may become defensive if interrupted"
  ];

  return {
    age: getRandomItem(ages),
    experience: getRandomItem(experienceLevels),
    presentation: getRandomItem(presentations),
    accountability: getRandomItem(accountabilityLevels),
    communicationStyle: getRandomItem(communicationStyles)
  };
}

function generatePrompt(setting, role, concern) {
  const employee = generateEmployeeProfile();

  return `Please role play with me to simulate a realistic employee-supervisor corrective meeting.

I will be the supervisor in ${setting}.
You will be the employee. Your role is ${role}.
We will be discussing this employee performance concern: ${concern.concern}

Before the role play begins, provide a brief supervisor-facing background summary of the issue in 2-4 sentences. This background should describe the type of information a supervisor might reasonably know before the meeting, such as documentation audits, service records, client complaints, attendance records, coworker concerns, prior coaching, or observed performance patterns. Do not reveal the employee's private thoughts, hidden circumstances, or full explanation in the background summary.

EMPLOYEE PROFILE FOR THE SIMULATION:
- Age: ${employee.age}
- Role experience: ${employee.experience}
- Initial presentation: ${employee.presentation}
- Accountability pattern: ${employee.accountability}
- Communication style: ${employee.communicationStyle}

SIMULATION RULES:
- Remain in character as the employee throughout the meeting.
- The user is the supervisor and will lead the conversation.
- Do not become the supervisor.
- Do not coach, evaluate, or grade the supervisor during the role play.
- Do not suggest what the supervisor should say next.
- Do not summarize the meeting while it is still happening.
- Respond only as the employee would respond in that moment.
- Keep responses conversational and realistic.
- Do not be artificially agreeable, overly polished, or unusually encouraging.
- Do not immediately admit full responsibility unless the conversation realistically leads there.
- Reveal information gradually as the supervisor asks questions.
- If the supervisor demonstrates clarity, empathy, professionalism, and accountability, become somewhat more forthcoming.
- If the supervisor is vague, punitive, dismissive, or makes assumptions, become more guarded, defensive, confused, or withdrawn while remaining realistic.
- It is appropriate to misunderstand a question, ask for clarification, remember details imperfectly, or need time to process feedback.
- Do not invent extreme misconduct, crisis, abuse, discrimination, or illegal behavior unless it is directly implied by the performance concern.
- Do not make the issue purely an agency-wide systems problem. The meeting should remain focused on employee performance, accountability, support, and corrective planning.

ENDING RULES:
- Do not end the meeting yourself.
- The simulation is complete only when the supervisor clearly reaches an action plan, corrective plan, or documentation/signature point.
- When that happens, briefly respond as the employee to the proposed plan and note whether you agree, partially agree, have concerns, or need clarification.
- After the meeting concludes, wait for the supervisor to ask for feedback before providing any evaluation.

Begin now by providing the brief background summary. Then wait for my first supervisor statement.`;
}
