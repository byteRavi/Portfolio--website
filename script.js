function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollToExperience() {
  const experienceSection = document.getElementById('Experience');
  experienceSection.scrollIntoView({ behavior: 'smooth' });
}
// Define Skill Set
const skillSet = [
  "Python",
  "ReactJS",
  "Nodejs",
  "Android Development",
  "MongoDB",
  "PostgreSQL",
  "Data Analysis",
  "Html",
  "Pandas",
];

// Get DOM Elements
const messagesContainer = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-btn");

// Toggle Chatbox Visibility
function toggleChatbox() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" ? "flex" : "none";
}

// Append Messages to Chatbox
function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messagesContainer.appendChild(message);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Handle User Input
function handleUserInput() {
  const input = userInput.value.trim();
  if (input) {
    appendMessage("You", input);

    // Check for Matching Skills
    const matchingSkills = skillSet.filter((skill) =>
      input.toLowerCase().includes(skill.toLowerCase())
    );

    if (matchingSkills.length > 0) {
      appendMessage(
        "Ravi(bot)",
        `✅ Yes, I have experience with: <strong>${matchingSkills.join(", ")}</strong>.`
      );
    } else {
      appendMessage("Ravi(bot)", "❌ Sorry, I do not have that skill at the moment.");
    }

    
    userInput.value = ""; // Clear Input
  }
}

// Event Listeners
sendButton.addEventListener("click", handleUserInput);
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleUserInput();
});
