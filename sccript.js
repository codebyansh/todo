document.addEventListener("DOMContentLoaded", function () {
    // Load existing notes from localStorage
    loadNotes();
});

function saveNote() {
    const noteText = document.getElementById("note").value.trim();

    if (noteText !== "") {
        // Create a unique identifier for each note
        const noteId = Date.now().toString();

        // Save the note to localStorage
        localStorage.setItem(noteId, noteText);

        // Clear the input field
        document.getElementById("note").value = "";

        // Reload the notes
        loadNotes();
    }
}

function loadNotes() {
    const noteList = document.getElementById("noteList");
    noteList.innerHTML = "";

    // Iterate through localStorage and display each note
    for (let i = 0; i < localStorage.length; i++) {
        const noteId = localStorage.key(i);
        const noteText = localStorage.getItem(noteId);

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${noteText}</span>
            <button onclick="editNote('${noteId}')">Edit</button>
            <button onclick="deleteNote('${noteId}')">Delete</button>
        `;

        noteList.appendChild(li);
    }
}

function editNote(noteId) {
    const noteText = localStorage.getItem(noteId);

    // Set the note text to the input field
    document.getElementById("note").value = noteText;

    // Remove the note from localStorage
    localStorage.removeItem(noteId);

    // Reload the notes
    loadNotes();
}

function deleteNote(noteId) {
    // Remove the note from localStorage
    localStorage.removeItem(noteId);

    // Reload the notes
    loadNotes();
}
