function showSection(sec){
  currentSection = sec;
  
  localStorage.setItem(
    "currentSection",
    currentSection
  );
  
  renderTasks();

  sectionNotesArea.value =
    sectionNotes[sec];

  saveTasks();
}
