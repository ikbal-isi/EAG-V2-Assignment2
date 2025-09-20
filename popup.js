const API_KEY = "AIzaSyAjWBqYtWBaT04j8BqesXX6dfXUdgHT0FI";  // 🔑 Replace with your Gemini API key
const MODEL = "gemini-2.5-flash";

const roleSelect = document.getElementById("role");
const roundSelect = document.getElementById("round");
const subOptionSelect = document.getElementById("subOption");
const subOptionLabel = document.getElementById("subOptionLabel");
const outputDiv = document.getElementById("output");
// Removed references to download button and container

// Role → Round mapping
const roleRounds = {
  "Frontend Developer": ["Coding", "Technical", "Managerial", "HR"],
  "Backend Developer": ["Coding", "Technical", "Managerial", "HR"],
  "ML Engineer": ["Coding", "Technical", "Managerial", "HR"],
  "AI Engineer": ["Coding", "Technical", "Managerial", "HR"],
  "Data Scientist": ["Coding", "Technical", "Managerial", "HR"],
  "Data Engineer": ["Coding", "Technical", "Managerial", "HR"],
  "MLOps/DevOps": ["Coding", "Technical", "Managerial", "HR"]
};

// Round → Sub-options per role
const subOptions = {
  "Frontend Developer": {
    "Coding": ["JavaScript", "TypeScript", "React", "CSS"],
    "Technical": ["System Design", "Browser Rendering", "Optimization"]
  },
  "Backend Developer": {
    "Coding": ["Java", "Python", "C++", "Go"],
    "Technical": ["Databases", "API Design", "System Design"]
  },
  "ML Engineer": {
    "Coding": ["Python"],
    "Technical": ["ML Algorithms", "Model Deployment", "Optimization"]
  },
  "AI Engineer": {
    "Coding": ["Python"],
    "Technical": ["LLMs", "Prompt Engineering", "Neural Networks"]
  },
  "Data Scientist": {
    "Coding": ["Python", "R", "SQL"],
    "Technical": ["Machine Learning", "Deep Learning", "Statistics", "Probability"]
  },
  "Data Engineer": {
    "Coding": ["Python", "Java", "Scala"],
    "Technical": ["ETL", "Data Warehousing", "Big Data Tools"]
  },
  "MLOps/DevOps": {
    "Coding": ["Python", "Bash"],
    "Technical": ["CI/CD", "Docker", "Kubernetes", "Cloud Services"]
  }
};

// Populate rounds when role selected
roleSelect.addEventListener("change", () => {
  const role = roleSelect.value;
  roundSelect.innerHTML = '<option value="">--Choose Round--</option>';
  subOptionSelect.style.display = "none";
  subOptionLabel.style.display = "none";

  if (role && roleRounds[role]) {
    roleRounds[role].forEach(r => {
      const opt = document.createElement("option");
      opt.value = r;
      opt.textContent = r;
      roundSelect.appendChild(opt);
    });
  }
});


// Populate sub-options when round selected
roundSelect.addEventListener("change", () => {
  const role = roleSelect.value;
  const round = roundSelect.value;
  subOptionSelect.innerHTML = '<option value="">--Choose--</option>';

  if (subOptions[role] && subOptions[role][round]) {
    subOptions[role][round].forEach(item => {
      const opt = document.createElement("option");
      opt.value = item;
      opt.textContent = item;
      subOptionSelect.appendChild(opt);
    });
    subOptionSelect.style.display = "block";
    subOptionLabel.style.display = "block";
  } else {
    subOptionSelect.style.display = "none";
    subOptionLabel.style.display = "none";
  }
});
// Generate interview questions
document.getElementById("generate").addEventListener("click", async () => {
  const role = roleSelect.value;
  const round = roundSelect.value;
  const subOpt = subOptionSelect.value;

  if (!role || !round) {
    outputDiv.innerHTML = "<p style='color:red'>⚠️ Please select role and round.</p>";
    return;
  }

  let query = `Generate 30 most relevant interview questions for the role of ${role} in the ${round} round.`;
  if (subOpt) query += ` Focus on ${subOpt}.`;

  outputDiv.innerHTML = "<p>⏳ Generating questions...</p>";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: query }] }] })
      }
    );

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No questions generated.";

    const questions = text.split("\n").filter(q => q.trim() !== "");
    outputDiv.innerHTML = "";
    questions.forEach(q => {
      const div = document.createElement("div");
      div.className = "question";
      div.textContent = q;
      outputDiv.appendChild(div);
    });
  } catch (error) {
    outputDiv.innerHTML = `<p style="color:red">⚠️ Error: ${error.message}</p>`;
  }
});