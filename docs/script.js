// ===============================
// Tasky - Main Startup File
// script.js
// ===============================

// Wait until the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Tasky Starting...");

    // -----------------------
    // Load saved notes
    // -----------------------
    const notes = document.getElementById("notes");

    if (notes) {
        notes.value = localStorage.getItem("notes") || "";

        notes.addEventListener("input", () => {
            localStorage.setItem("notes", notes.value);
        });
    }

    // -----------------------
    // Apply saved theme
    // -----------------------
    if (typeof loadTheme === "function") {
        loadTheme();
    }

    // -----------------------
    // Process repeating tasks
    // -----------------------
    if (typeof processRepeatingTasks === "function") {
        processRepeatingTasks();
    }

    // -----------------------
    // Build calendar
    // -----------------------
    if (typeof buildCalendar === "function") {
        buildCalendar();
    }

    // -----------------------
    // Render tasks
    // -----------------------
    if (typeof renderTasks === "function") {
        renderTasks();
    }

    // -----------------------
    // Completed tasks
    // -----------------------
    if (typeof renderCompletedTasks === "function") {
        renderCompletedTasks();
    }

    // -----------------------
    // Productivity stats
    // -----------------------
    if (typeof updateStats === "function") {
        updateStats();
    }

    // -----------------------
    // Daily Progress
    // -----------------------
    if (typeof updateDailyProgress === "function") {
        updateDailyProgress();
    }

    // -----------------------
    // Today's Focus
    // -----------------------
    if (typeof updateFocus === "function") {
        updateFocus();
    }

    // -----------------------
    // Daily Motivation
    // -----------------------
    if (typeof dailyMotivation === "function") {
        dailyMotivation();
    }

    // -----------------------
    // Notifications
    // -----------------------
    if (typeof enableNotifications === "function") {
        enableNotifications();
    }

    // -----------------------
    // Auto reminder check
    // -----------------------
    if (typeof checkReminders === "function") {
        setInterval(checkReminders, 60000);
    }

    // -----------------------
    // Welcome message
    // -----------------------
    if (!localStorage.getItem("welcomed")) {

        alert("👋 Welcome to Tasky! Stay productive and reach your goals.");

        localStorage.setItem("welcomed", "true");

    }

    console.log("✅ Tasky Loaded Successfully");

});
