let word1 = ["S", "E", "C", "U", "R", "I", "T", "Y"];
let word2 = ["C", "S", "S"];
let word3 = ["F", "R", "O", "N", "T", "E", "N", "D"];
let word4 = ["D", "A", "T", "A", "B", "A", "S", "E"];
let word5 = ["H", "T", "M", "L"];
let word6 = ["B", "A", "C", "K", "E", "N", "D"];
let word7 = ["J", "A", "V", "A", "S", "C", "R", "I", "P", "T"];
let word8 = ["A", "P", "I"];

const green = "#AAD59E"
const red = "#F0743E";
for (let i = 1; i <= word1.length; i++) {
    const kolom = document.querySelector(`#W1L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word1[i - 1]) {
            kolom.style.backgroundColor = green;
        } else {
            kolom.style.backgroundColor = red;
        }
    });
}

for (let i = 2; i <= word2.length; i++) {
    const kolom = document.querySelector(`#W2L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word2[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

const kolom3 = document.querySelector(`#W3L1`);
    kolom3.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word3[0]) {
            kolom3.style.backgroundColor = green;
        } else{
            kolom3.style.backgroundColor = red;
        }
    });

for (let i = 3; i <= word3.length; i++) {
    const kolom = document.querySelector(`#W3L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word3[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

for (let i = 2; i <= word4.length; i++) {
    const kolom = document.querySelector(`#W4L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word4[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

const kolom5 = document.querySelector(`#W5L1`);
    kolom5.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word5[0]) {
            kolom5.style.backgroundColor = green;
        } else{
            kolom5.style.backgroundColor = red;
        }
    });

for (let i = 3; i <= word5.length; i++) {
    const kolom = document.querySelector(`#W5L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word5[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

const kolom6 = document.querySelector(`#W6L1`);
    kolom6.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word6[0]) {
            kolom6.style.backgroundColor = green;
        } else{
            kolom6.style.backgroundColor = red;
        }
    });

for (let i = 3; i <= word6.length; i++) {
    const kolom = document.querySelector(`#W6L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word6[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

for (let i = 1; i <= 4; i++) {
    const kolom = document.querySelector(`#W7L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word7[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

for (let i = 6; i <= word7.length; i++) {
    const kolom = document.querySelector(`#W7L${i}`);
    kolom.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word7[i-1]) {
            kolom.style.backgroundColor = green;
        } else{
            kolom.style.backgroundColor = red;
        }
    });
}

const kolom81 = document.querySelector(`#W8L1`);
    kolom81.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word8[0]) {
            kolom81.style.backgroundColor = green;
        } else{
            kolom81.style.backgroundColor = red;
        }
    });

const kolom82 = document.querySelector(`#W8L3`);
    kolom82.addEventListener("input", (event) => {
        let nilaiInput = event.target.value;
        if (nilaiInput == word8[2]) {
            kolom82.style.backgroundColor = green;
        } else{
            kolom82.style.backgroundColor = red;
        }
    });