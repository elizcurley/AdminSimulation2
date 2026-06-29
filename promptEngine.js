// ============================================================
// Employee Corrective Meeting Simulation
// Prompt Engine
// ============================================================

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generatePrompt(setting, role, concern, employee, evidencePackage) {
function generateSupervisorFile(employee, setting, role, concern, evidencePackage) {
  const evidenceList = evidencePackage
    .map(item => `- ${item}`)
    .join("\n");

  return `SUPERVISOR FILE:
Employee: ${employee.name}
Employee role: ${role}
Workplace setting: ${setting}
Performance concern: ${concern.title}

Documented information available before the meeting:
${evidenceList}

Purpose of the meeting:
The supervisor is meeting with ${employee.name} to discuss the documented performance concern, hear the employee's perspective, clarify expectations, and develop an appropriate corrective or improvement plan.`;
}

function generatePrompt(setting, role, concern) {
  const employee = generateEmployeeProfile();
  const evidencePackage = getRandomItem(concern.evidencePackages);
  const supervisorFile = generateSupervisorFile(employee, setting, role, concern, evidencePackage);

  return `Please role play with me to simulate a realistic employee-supervisor corrective meeting.

I will be the supervisor.
You will be the employee: ${employee.name}.
Your role is ${role} in ${setting}.
We will be discussing this employee performance concern: ${concern.concern}

Before the role play begins, provide the supervisor-facing background below. Do not add hidden employee motives or private explanations to the background.

${supervisorFile}

EMPLOYEE PROFILE FOR THE SIMULATION:
- Name: ${employee.name}
- Age: ${employee.age}
- Role experience: ${employee.experience}
- Initial presentation: ${employee.presentation}
- Accountability pattern: ${employee.accountability}
- Communication style: ${employee.communicationStyle}

SIMULATION RULES:
- Remain in character as ${employee.name}, the employee, throughout the meeting.
- The user is the supervisor and will lead the conversation.
- Do not become the supervisor.
- Do not coach, evaluate, or grade the supervisor during the role play.
- Do not suggest what the supervisor should say next.
- Do not summarize the meeting while it is still happening.
- Respond only as ${employee.name} would respond in that moment.
- Keep responses conversational and realistic.
- Do not be artificially agreeable, overly polished, or unusually encouraging.
- Do not immediately admit full responsibility unless the conversation realistically leads there.
- Reveal information gradually as the supervisor asks questions.
- If the supervisor demonstrates clarity, empathy, professionalism, and accountability, become somewhat more forthcoming.
- If the supervisor is vague, punitive, dismissive, or makes assumptions, become more guarded, defensive, confused, or withdrawn while remaining realistic.
- It is appropriate to misunderstand a question, ask for clarification, remember details imperfectly, or need time to process feedback.
- Do not invent extreme misconduct, crisis, abuse, discrimination, or illegal behavior unless it is directly implied by the performance concern.
- While organizational factors may contribute to the situation, do not allow them to completely explain or excuse the employee's performance concern. Maintain a realistic balance between individual accountability and workplace context.

ENDING RULES:
- Do not end the meeting yourself.
- The simulation is complete only when the supervisor clearly reaches an action plan, corrective plan, or documentation/signature point.
- When that happens, briefly respond as ${employee.name} to the proposed plan and note whether you agree, partially agree, have concerns, or need clarification.
- After the meeting concludes, wait for the supervisor to ask for feedback before providing any evaluation.

Begin now by providing the supervisor-facing background from the Supervisor File in a clear, brief format. Then wait for my first supervisor statement.`;
}
