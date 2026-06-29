// ============================================================
// Employee Corrective Meeting Simulation
// Case Repository
// ============================================================

const workplaceCases = [
  {
    setting: "a community mental health center",
    roles: ["Case Manager", "Clinical Therapist", "Care Coordinator"]
  },
  {
    setting: "a child welfare agency",
    roles: ["Family Support Worker", "Child Welfare Specialist", "Case Manager"]
  },
  {
    setting: "an outpatient behavioral health clinic",
    roles: ["Behavioral Health Specialist", "Clinical Therapist", "Intake Coordinator"]
  },
  {
    setting: "a hospital social work department",
    roles: ["Medical Social Worker", "Discharge Planner", "Care Coordinator"]
  },
  {
    setting: "a school-based social work program",
    roles: ["School Social Worker", "Student Support Specialist", "Family Liaison"]
  },
  {
    setting: "a residential treatment facility",
    roles: ["Residential Counselor", "Clinical Therapist", "Program Specialist"]
  },
  {
    setting: "an aging and adult services agency",
    roles: ["Resource Navigator", "Adult Services Case Manager", "Care Coordinator"]
  },
  {
    setting: "a domestic violence program",
    roles: ["Client Advocate", "Shelter Advocate", "Case Manager"]
  },
  {
    setting: "a homeless services organization",
    roles: ["Housing Specialist", "Outreach Worker", "Case Manager"]
  },
  {
    setting: "a substance use treatment program",
    roles: ["Recovery Support Specialist", "Clinical Therapist", "Case Manager"]
  },
  {
    setting: "a multidisciplinary healthcare clinic",
    roles: ["Field Training Supervisor", "Care Coordinator", "Behavioral Health Specialist"]
  },
  {
    setting: "a Veterans service organization",
    roles: ["Veteran Services Case Manager", "Benefits Navigator", "Peer Support Specialist"]
  }
];

const performanceConcerns = [
  {
    title: "Late Documentation",
    concern:
      "documentation is consistently completed after required agency deadlines."
  },
  {
    title: "Documentation Quality",
    concern:
      "documentation is completed on time but repeatedly lacks sufficient detail, clear descriptions of interventions provided, and adequate justification for service decisions."
  },
  {
    title: "Attendance",
    concern:
      "frequent unscheduled absences and tardiness have affected team operations."
  },
  {
    title: "Client Communication",
    concern:
      "client phone calls and emails are not being returned within agency expectations."
  },
  {
    title: "Professional Boundaries",
    concern:
      "professional boundaries with clients have become inconsistent and require corrective discussion."
  },
  {
    title: "Workplace Communication",
    concern:
      "communication with coworkers has become increasingly unprofessional and has resulted in repeated concerns from team members."
  },
  {
    title: "Failure to Follow Procedures",
    concern:
      "required agency procedures are not consistently being followed despite previous coaching."
  }
];
