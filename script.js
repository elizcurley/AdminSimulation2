// script.js
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const casePreview = document.getElementById("casePreview");
const promptSection = document.getElementById("promptSection");

const employeeNameOutput = document.getElementById("employeeNameOutput");
const settingOutput = document.getElementById("settingOutput");
const roleOutput = document.getElementById("roleOutput");
const issueOutput = document.getElementById("issueOutput");

const promptOutput = document.getElementById("promptOutput");
const copyStatus = document.getElementById("copyStatus");

generateBtn.addEventListener("click", () => {
  const workplace = getRandomItem(workplaceCases);
  const role = getRandomItem(workplace.roles);
  const concern = getRandomItem(performanceConcerns);

  const employee = generateEmployeeProfile();
  const evidencePackage = getRandomItem(concern.evidencePackages);

  employeeNameOutput.textContent = employee.name;
  settingOutput.textContent = workplace.setting;
  roleOutput.textContent = role;
  issueOutput.textContent = concern.title;

  promptOutput.value = generatePrompt(
    workplace.setting,
    role,
    concern,
    employee,
    evidencePackage
  );

  casePreview.classList.remove("hidden");
  promptSection.classList.remove("hidden");

  copyStatus.textContent = "";
  copyBtn.textContent = "Copy Prompt";
});

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(promptOutput.value);
  } catch (error) {
    promptOutput.select();
    document.execCommand("copy");
  }

  copyStatus.textContent =
    "Prompt copied! Paste it into Copilot or Gemini to begin your simulation.";

  copyBtn.textContent = "Copied!";
});
