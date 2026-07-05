let words = [];
let seedInput;
let submitButton;
let output;

function preload() {
  const lines = loadStrings("text.txt");
  words = [];
  for (const line of lines) {
    for (const w of line.split(/\s+/)) {
      if (w.length > 0) words.push(w);
    }
  }
}

function setup() {
  noCanvas();
  seedInput = select("#seed");
  submitButton = select("#submit");
  output = select("#output");

  submitButton.mousePressed(() => {
    const seed = seedInput.value();
    const poem = diastic(seed);
    output.html(poem.join(" "));
  });
}

function diastic(seed) {
  const letters = seed.toUpperCase().replace(/[^A-Z]/g, "");
  const result = [];
  let pointer = 0;

  for (let i = 0; i < letters.length; i++) {
    const letter = letters.charAt(i);
    let found = false;

    for (let steps = 0; steps < words.length; steps++) {
      const word = words[pointer % words.length];
      pointer++;

      if (word.length > i && word.charAt(i).toUpperCase() === letter) {
        result.push(word);
        found = true;
        break;
      }
    }

    if (!found) {
      result.push(`[${letter}]`);
    }
  }

  return result;
}
