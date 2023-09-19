// Get references to HTML elements
const noteInput = document.getElementById("note");
const durationInput = document.getElementById("duration");
const tempoInput = document.getElementById("tempo");
const addNoteButton = document.getElementById("addNote");
const compositionDisplay = document.getElementById("compositionDisplay");
const playButton = document.getElementById("play");
const musicPlayer = document.getElementById("musicPlayer");

// Create an audio context
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create an oscillator node and gain node for audio synthesis
const oscillator = audioContext.createOscillator();
const gainNode = audioContext.createGain();

// Connect the oscillator to the gain node and the gain node to the audio context's destination
oscillator.connect(gainNode);
gainNode.connect(audioContext.destination);

// Array to store music composition
const composition = [];

// Add event listener to the "Add Note" button
addNoteButton.addEventListener("click", function () {
    const note = noteInput.value;
    const duration = parseFloat(durationInput.value);
    const tempo = parseFloat(tempoInput.value);

    if (note && !isNaN(duration) && !isNaN(tempo)) {
        // Add the note to the composition array
        composition.push({ note, duration, tempo });

        // Display the composition
        displayComposition();
    } else {
        alert("Invalid input. Please check your entries.");
    }
});

// Function to display the music composition
function displayComposition() {
    compositionDisplay.innerHTML = "<h2>Composition:</h2>";
    composition.forEach((item, index) => {
        compositionDisplay.innerHTML += `<p>${index + 1}. Note: ${item.note}, Duration: ${item.duration}, Tempo: ${item.tempo}</p>`;
    });
}

// Function to play the composition
function playComposition() {
    const tempo = parseFloat(tempoInput.value) || 1.0;
    let currentTime = audioContext.currentTime;

    composition.forEach((item) => {
        const { note, duration, tempo: noteTempo } = item;

        // Calculate the note duration based on tempo
        const noteDuration = (60 / tempo) * duration * (1 / noteTempo);

        // Set the oscillator frequency based on the note
        oscillator.frequency.setValueAtTime(getNoteFrequency(note), currentTime);

        // Start the note
        oscillator.start(currentTime);

        // Stop the note after the duration
        oscillator.stop(currentTime + noteDuration);

        // Update the current time for the next note
        currentTime += noteDuration;
    });
}

// Function to get the frequency of a note
function getNoteFrequency(note) {
    // Define note frequencies (you can expand this list)
    const noteFrequencies = {
        C: 261.63,
        D: 293.66,
        E: 329.63,
        F: 349.23,
        G: 392.00,
        A: 440.00,
        B: 493.88,
    };

    return noteFrequencies[note] || 0;
}

// Add an event listener to the "Play Composition" button
playButton.addEventListener("click", playComposition);
