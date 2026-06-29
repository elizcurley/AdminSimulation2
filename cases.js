// cases.js
const workplaceCases = [
  { setting: "a community mental health center", roles: ["Case Manager", "Clinical Therapist", "Care Coordinator"] },
  { setting: "a child welfare agency", roles: ["Family Support Worker", "Child Welfare Specialist", "Case Manager"] },
  { setting: "an outpatient behavioral health clinic", roles: ["Behavioral Health Specialist", "Clinical Therapist", "Intake Coordinator"] },
  { setting: "a hospital social work department", roles: ["Medical Social Worker", "Discharge Planner", "Care Coordinator"] },
  { setting: "a school-based social work program", roles: ["School Social Worker", "Student Support Specialist", "Family Liaison"] },
  { setting: "a residential treatment facility", roles: ["Residential Counselor", "Clinical Therapist", "Program Specialist"] },
  { setting: "an aging and adult services agency", roles: ["Resource Navigator", "Adult Services Case Manager", "Care Coordinator"] },
  { setting: "a domestic violence program", roles: ["Client Advocate", "Shelter Advocate", "Case Manager"] },
  { setting: "a homeless services organization", roles: ["Housing Specialist", "Outreach Worker", "Case Manager"] },
  { setting: "a substance use treatment program", roles: ["Recovery Support Specialist", "Clinical Therapist", "Case Manager"] },
  { setting: "a multidisciplinary healthcare clinic", roles: ["Field Training Supervisor", "Care Coordinator", "Behavioral Health Specialist"] },
  { setting: "a Veterans service organization", roles: ["Veteran Services Case Manager", "Benefits Navigator", "Peer Support Specialist"] }
];

const performanceConcerns = [
  {
    title: "Late Documentation",
    concern: "documentation is consistently completed after required agency deadlines.",
    evidencePackages: [
      [
        "A documentation review found 9 notes submitted more than 72 hours late within the past month.",
        "Two late notes delayed billing review and one delayed supervisor sign-off.",
        "The employee received informal coaching about documentation timelines during the last supervision meeting."
      ],
      [
        "The employee has 11 overdue notes across 6 client records.",
        "Several notes were entered only after reminder emails from the supervisor.",
        "The agency standard requires documentation within 48 business hours."
      ],
      [
        "The monthly compliance report showed the employee had the highest number of late notes on the team.",
        "Late documentation has created gaps in the service record during case reviews.",
        "Previous reminders have not resulted in consistent improvement."
      ]
    ]
  },
  {
    title: "Documentation Quality",
    concern: "documentation is completed on time but repeatedly lacks sufficient detail, clear descriptions of interventions provided, and adequate justification for service decisions.",
    evidencePackages: [
      [
        "A routine audit reviewed 12 recent notes and flagged 5 for quality concerns.",
        "Common concerns included vague progress statements, limited description of interventions, and unclear follow-up plans.",
        "The notes were submitted on time, but reviewers could not clearly determine what services were provided."
      ],
      [
        "A supervisor review identified repeated use of nearly identical language across several client notes.",
        "Three notes did not clearly connect the client’s needs, the intervention provided, and the next service step.",
        "The employee has not previously received formal discipline for documentation quality."
      ],
      [
        "A quality assurance review found that several notes lacked enough detail to support ongoing service recommendations.",
        "Two records did not clearly document the client’s response to services.",
        "The concern is about quality and professional standards, not whether the employee is submitting notes on time."
      ]
    ]
  },
  {
    title: "Attendance",
    concern: "frequent unscheduled absences and tardiness have affected team operations.",
    evidencePackages: [
      [
        "Attendance records show 6 late arrivals and 3 unscheduled absences in the past 6 weeks.",
        "Two missed morning meetings required coworkers to redistribute client follow-ups.",
        "The attendance expectation was reviewed with the employee during the last quarterly check-in."
      ],
      [
        "The employee has arrived more than 15 minutes late on 5 occasions this month.",
        "Coverage had to be arranged twice with limited notice.",
        "The pattern is beginning to affect team scheduling and client responsiveness."
      ],
      [
        "Records show a pattern of Monday and Friday absences over the past two months.",
        "The employee has used available leave time, but the lack of notice has created operational strain.",
        "The supervisor has previously reminded the employee about call-out procedures."
      ]
    ]
  },
  {
    title: "Client Communication",
    concern: "client phone calls and emails are not being returned within agency expectations.",
    evidencePackages: [
      [
        "Call-log review shows 8 client calls were not returned within the required 48-hour window.",
        "Two clients contacted the front desk again because they had not received a response.",
        "The employee’s pending follow-up list is higher than the team average."
      ],
      [
        "Email tracking shows 6 client emails remained unanswered for more than 4 business days.",
        "One client missed an intake appointment after not receiving clarification about required paperwork.",
        "The expected turnaround time is 72 business hours."
      ],
      [
        "Three client complaints mentioned difficulty reaching the employee.",
        "The supervisor found several inquiries marked as “in progress” without documented outreach attempts.",
        "The employee received prior coaching about timely client contact."
      ]
    ]
  },
  {
    title: "Professional Boundaries",
    concern: "professional boundaries with clients have become inconsistent and require corrective discussion.",
    evidencePackages: [
      [
        "A supervisor review identified several client contacts occurring outside standard communication channels.",
        "One client reported feeling confused about whether certain conversations were personal or professional.",
        "The agency has previously reviewed boundaries and communication expectations with the team."
      ],
      [
        "Coworkers raised concerns that the employee has been spending extended unscheduled time with one client.",
        "Documentation does not clearly explain the service purpose of those contacts.",
        "There is no allegation of abuse or exploitation, but the pattern requires corrective discussion."
      ],
      [
        "A client referenced receiving advice from the employee that went beyond the employee’s role.",
        "The employee appears to be trying to be supportive, but boundaries have become inconsistent.",
        "The supervisor needs to clarify expectations before the pattern creates additional risk."
      ]
    ]
  },
  {
    title: "Workplace Communication",
    concern: "communication with coworkers has become increasingly unprofessional and has resulted in repeated concerns from team members.",
    evidencePackages: [
      [
        "Three coworkers reported that recent emails from the employee felt abrupt or dismissive.",
        "A team lead documented two incidents where the employee interrupted colleagues during staffing.",
        "The concern is about communication patterns, not a single isolated disagreement."
      ],
      [
        "Several staff members have begun avoiding direct communication with the employee because conversations have become tense.",
        "The supervisor observed one meeting where the employee responded sharply to routine feedback.",
        "No formal harassment complaint has been filed, but the pattern is affecting teamwork."
      ],
      [
        "Coworker feedback indicates the employee often responds defensively when asked for updates.",
        "Two recent handoffs were delayed because team members were unsure how to approach the employee.",
        "The supervisor previously encouraged the employee to use more professional tone in written communication."
      ]
    ]
  },
  {
    title: "Failure to Follow Procedures",
    concern: "required agency procedures are not consistently being followed despite previous coaching.",
    evidencePackages: [
      [
        "A supervisor review found 4 recent cases where required referral steps were skipped.",
        "The employee had previously been coached on the updated procedure.",
        "The skipped steps created extra follow-up work for the administrative team."
      ],
      [
        "The employee continues to use an older version of the agency form despite reminders.",
        "Two submissions had to be returned for correction.",
        "The current procedure was reviewed during a team meeting and again in individual supervision."
      ],
      [
        "Several records show that required supervisor consultation was not completed before service changes were made.",
        "The employee has been reminded that this step is required for risk management.",
        "The concern is repeated noncompliance with procedure, not a one-time error."
      ]
    ]
  }
];
