# 💼 Interview Prep App

An AI-powered browser extension designed to help users prepare for technical interviews by generating relevant questions based on job role, interview round, and specific technical focus.

## ✨ Features

*   **AI-Powered Question Generation:** Utilizes the Gemini API to generate a diverse set of interview questions tailored to your selections.
*   **Customizable Roles & Rounds:** Select from a variety of job roles (Frontend, Backend, ML Engineer, Data Scientist, etc.) and interview rounds (Coding, Technical, Managerial, HR).
*   **Sub-option / Focus Selection:** Further refine question generation by choosing specific languages or technical domains (e.g., JavaScript, Python, System Design, LLMs).
*   **Enhanced User Interface:** A wider, modern, and visually appealing popup UI with a vibrant color scheme and clear, bold typography for better readability.

## 🚀 Setup and Installation (Chrome Extension)

To get this extension running in your Chrome browser:

1.  **Download/Clone:** Download or clone this repository to your local machine.
2.  **Open Chrome Extensions:**
    *   Open Chrome.
    *   Navigate to `chrome://extensions/` or click the three-dot menu (⋮) -> More tools -> Extensions.
3.  **Enable Developer Mode:** Toggle on "Developer mode" in the top right corner.
4.  **Load Unpacked:** Click the "Load unpacked" button.
5.  **Select Folder:** Browse to the directory where you downloaded/cloned the `Interview preparation APP` repository and select it.
6.  **Pin Extension (Optional):** Click the puzzle icon next to your profile picture in Chrome, and then click the pin icon next to "Interview Prep App" to make it easily accessible in your toolbar.

## 💡 Usage

1.  **Open the Extension:** Click on the "Interview Prep App" icon in your browser toolbar.
2.  **Select Job Role:** Choose the relevant job role from the dropdown menu.
3.  **Select Interview Round:** Based on the chosen role, select the interview round.
4.  **Select Focus (Optional):** If available, choose a specific language or technical area to focus the questions.
5.  **Generate Questions:** Click the "✨ Generate Questions" button.
6.  **Review Questions:** The generated questions will appear in the output area.

## 🔑 API Key Configuration

This application uses the Gemini API for question generation. You need to replace the placeholder API key with your actual Gemini API key.

1.  Open the `popup.js` file.
2.  Locate the line:
    ```javascript
    const API_KEY = "YOUR_GEMINI_API_KEY_HERE"; // 🔑 Replace with your Gemini API key
    ```
3.  Replace `"YOUR_GEMINI_API_KEY_HERE"` with your actual Gemini API key.

## 📂 Project Structure

├── manifest.json # Extension manifest file
├── popup.html # The main HTML file for the extension popup
├── popup.js # JavaScript logic for the extension
└── style.css # Styling for the extension UI