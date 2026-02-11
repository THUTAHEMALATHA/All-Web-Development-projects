#Rock Paper Scissors Game 🎮

A browser-based Rock Paper Scissors game built using **HTML, CSS, and JavaScript**.
The game allows the user to play against the computer with real-time score tracking.The application uses DOM manipulation and conditional logic to determine the winner.
---
**##🔗 Live Demo**

https://thutahemalatha.github.io/All-Web-Development-projects/Rock-Paper-Scissor/
---

**🛠 Tech Stack**

-**HTML**– Structure

-**CSS** – Styling and layout

-**JavaScript** – Game logic and interactivity
---
**📌 Features**

-Interactive UI

-Random computer choice generation

-Score tracking system

-Instant result display (Win / Lose / Draw)

-Responsive design

**📂 Project Structure**
Rock-Paper-Scissor/
│
├── index.html
├── rps.css
├── rps.js
└── images/
---
**🧠 Game Logic**

User selects Rock, Paper, or Scissors

Computer randomly generates a choice

Choices are compared using game rules:

Rock beats Scissors

Scissors beats Paper

Paper beats Rock

Score updates automatically
---
**Example logic (JavaScript):**

if (userChoice === computerChoice) {
    result = "Draw";
} else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
) {
    result = "You Win";
} else {
    result = "You Lose";
}
---
**🚀 How to Run Locally**

Clone the repository:

git clone https://github.com/THUTAHEMALATHA/All-Web-Development-projects.git


Open index.html in your browser

**📈 What This Project Demonstrates**

DOM manipulation

Event handling

Conditional logic

Basic game development concepts