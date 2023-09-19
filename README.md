Music Player
This is a simple web-based music player that allows you to input musical notes, their durations, and tempo and hear the resulting melody. You can experiment with different note sequences and tempos to create your own tunes.

How to Use
Clone or download this repository to your local machine.

Open the index.html file in your web browser.

You will see a text area where you can input your musical notes, durations, and tempo. The format for input is as follows:

java
Copy code
Enter notes, durations, and tempo (e.g., "1:0.5 1:0.25 2:0.25 1:0.5 5:0.5 Tempo:2.0"):
Notes are represented by numbers from 1 to 7, with optional modifiers (e.g., ".1" for lower octave, "1*" for higher octave).
Durations are specified in seconds (e.g., "0.5" for half a second).
Tempo can be adjusted by including "Tempo:" followed by a positive number (e.g., "Tempo:2.0" for double tempo).
After entering your musical sequence, click the "Play" button.

The music player will play each note in sequence according to the specified duration and tempo.

Supported Notes
The following notes are supported along with their frequencies:

"1": 261.63 Hz (C)
".1": 130.81 Hz (Lower C)
"1*": 523.25 Hz (Higher C)
"2": 293.66 Hz (D)
".2": 146.83 Hz (Lower D)
"2*": 587.33 Hz (Higher D)
"3": 329.63 Hz (E)
".3": 164.81 Hz (Lower E)
"3*": 659.26 Hz (Higher E)
"4": 349.23 Hz (F)
".4": 174.61 Hz (Lower F)
"4*": 698.46 Hz (Higher F)
"5": 392.00 Hz (G)
".5": 196.00 Hz (Lower G)
"5*": 783.99 Hz (Higher G)
"6": 440.00 Hz (A)
".6": 220.00 Hz (Lower A)
"6*": 880.00 Hz (Higher A)
"7": 493.88 Hz (B)
".7": 246.94 Hz (Lower B)
"7*": 987.77 Hz (Higher B)
You can add more note frequencies to the noteFreqs object in the JavaScript code if needed.

Technical Details
This music player is implemented in JavaScript and uses the Web Audio API to generate and play the musical notes. It calculates the waveform for each note, creates an audio buffer, and schedules the playback of each note with the specified duration and tempo.

Credits
This project was created as a simple demonstration of web-based music generation and playback. It can be extended and customized for more advanced musical compositions.
