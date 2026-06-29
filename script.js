// ============================================================
// Employee Corrective Meeting Simulation
// User Interface Logic
// ============================================================

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const casePreview = document.getElementById("casePreview");
const promptSection = document.getElementById("promptSection");

const settingOutput = document.getElementById("settingOutput");
const roleOutput = document.getElementById("roleOutput");
const issueOutput = document.getElementById("issueOutput");

const promptOutput = document.getElementById("promptOutput");
const copyStatus = document.getElementById("copyStatus");

generateBtn.addEventListener("click", () => {

    // Select a random workplace
    const workplace = getRandomItem(workplaceCases);

    // Select a random role from that workplace
    const role = getRandomItem(workplace.roles);

    // Select a random employee performance concern
    const concern = getRandomItem(performanceConcerns);

    // Display the selected case information
    settingOutput.textContent = workplace.setting;
    roleOutput.textContent = role;
    issueOutput.textContent = concern.title;

    // Generate the prompt
    promptOutput.value = generatePrompt(
        workplace.setting,
        role,
        concern
    );

    // Reveal hidden sections
    casePreview.classList.remove("hidden");
    promptSection.classList.remove("hidden");

    // Reset copy message
    copyStatus.textContent = "";
});

copyBtn.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(promptOutput.value);

        copyStatus.textContent =
            "Prompt copied! Paste it into Copilot or Gemini to begin your simulation.";

    } catch (error) {

        promptOutput.select();

        document.execCommand("copy");

        copyStatus.textContent =
            "Prompt copied! Paste it into Copilot or Gemini to begin your simulation.";
    }

});
