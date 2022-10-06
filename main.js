"use strict";
const scribble = require("scribbletune");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let pairA = scribble.clip({
  notes: ["f4", "c5"],
  pattern: "x-x-",
});
let pairB = scribble.clip({
  notes: ["f4", "b5"],
  pattern: "x-x-",
});
let pairC = scribble.clip({
  notes: ["f4", "a4"],
  pattern: "x-x-",
});

let pairD = scribble.clip({
  notes: ["e4", "c5"],
  pattern: "x-x-",
});
let pairE = scribble.clip({
  notes: ["d4", "c5"],
  pattern: "x-x-",
});

let pairF = scribble.clip({
  notes: ["e4", "b4"],
  pattern: "x-x-",
});
let pairG = scribble.clip({
  notes: ["e4", "a4"],
  pattern: "x-x-",
});

let pairH = scribble.clip({
  notes: ["d4", "b4"],
  pattern: "x-x-",
});
let pairI = scribble.clip({
  notes: ["d4", "a4"],
  pattern: "x-x-",
});

let pairJ = scribble.clip({
  notes: ["f4", "g4"],
  pattern: "x-x-",
  tempo: 160,
});
let pairK = scribble.clip({
  notes: ["c4", "c5"],
  pattern: "x-x-",
  tempo: 160,
});

let pairL = scribble.clip({
  notes: ["e4", "g4"],
  pattern: "x-x-",
  tempo: 160,
});
let pairM = scribble.clip({
  notes: ["d4", "g4"],
  pattern: "x-x-",
  tempo: 160,
});

let pairN = scribble.clip({
  notes: ["c4", "b4"],
  pattern: "x-x-",
  tempo: 160,
});
let pairO = scribble.clip({
  notes: ["c4", "a4"],
  pattern: "x-x-",
  tempo: 160,
});

let pairP = scribble.clip({
  notes: ["c4", "g4"],
  pattern: "x-x-",
  tempo: 160,
});

readline.question("Enter Code:", (userInput) => {
  console.log(`Your Input: ${userInput}`);
  //calling the function below
  generateCords(userInput);
  readline.close();
});

//function to generate cords
const generateCords = (userInput) => {
  const userCode = {
    alphabets: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
    ],

    values: [
      "33",
      "32",
      "31",
      "23",
      "13",
      "22",
      "21",
      "12",
      "11",
      "30",
      "03",
      "20",
      "10",
      "02",
      "01",
      "00",
    ],
  };

  //conversion to array for comparsion
  const inputArray = userInput.split("");
  const isValid = true;

  for (let i = 0; i < inputArray.length; i++) {
    //in case of wrong input
    if (
      userCode.alphabets.indexOf(inputArray[i]) == -1 ||
      inputArray.length <= 11 ||
      inputArray.length >= 13
    ) {
      isValid = false;
    }
  }

  //if all inputs are valid
  if (isValid) {
    let merge = [];
    for (let i = 0; i < inputArray.length; i++) {
      switch (inputArray[i]) {
        case "A":
          {
            merge = merge.concat(pairA);
            // scribble.midi(pairA);

            console.log(`correct input A-value${userCode.values[0]}`);
          }
          break;
        case "B":
          {
            //scribble.midi(pairB);
            merge = merge.concat(pairB);
            console.log(`correct input B-value${userCode.values[1]}`);
          }
          break;
        case "C":
          {
            merge = merge.concat(pairC);

            //scribble.midi(pairC);
            console.log(`correct input C-value${userCode.values[2]}`);
          }
          break;
        case "D":
          {
            merge = merge.concat(pairD);

            //scribble.midi(pairD);
            console.log(`correct input D-value${userCode.values[3]}`);
          }
          break;
        case "E":
          {
            merge = merge.concat(pairE);
            //scribble.midi(pairE);
            console.log(`correct input E-value${userCode.values[4]}`);
          }
          break;
        case "F":
          {
            merge = merge.concat(pairF);
            //scribble.midi(pairF);
            console.log(`correct input F-value${userCode.values[5]}`);
          }
          break;
        case "G":
          {
            merge = merge.concat(pairG);

            //scribble.midi(pairG);
            console.log(`correct input G-value${userCode.values[6]}`);
          }
          break;
        case "H":
          {
            merge = merge.concat(pairH);

            //scribble.midi(pairH);
            console.log(`correct input H-value${userCode.values[7]}`);
          }
          break;
        case "I":
          {
            merge = merge.concat(pairI);

            //scribble.midi(pairI);
            console.log(`correct input I-value${userCode.values[8]}`);
          }
          break;
        case "J":
          {
            merge = merge.concat(pairJ);

            //scribble.midi(pairJ);
            console.log(`correct input J-value${userCode.values[9]}`);
          }
          break;
        case "K":
          {
            merge = merge.concat(pairK);

            // scribble.midi(pairK);
            console.log(`correct input K-value${userCode.values[10]}`);
          }
          break;
        case "L":
          {
            merge = merge.concat(pairL);

            // scribble.midi(pairL);
            console.log(`correct input L-value${userCode.values[11]}`);
          }
          break;
        case "M":
          {
            merge = merge.concat(pairM);

            //scribble.midi(pairM);
            console.log(`correct input M-value${userCode.values[12]}`);
          }
          break;
        case "N":
          {
            merge = merge.concat(pairN);

            //scribble.midi(pairN);
            console.log(`correct input N-value${userCode.values[13]}`);
          }
          break;
        case "O":
          {
            merge = merge.concat(pairO);

            //scribble.midi(pairO);
            console.log(`correct input O-value${userCode.values[14]}`);
          }
          break;
        case "P":
          {
            merge = merge.concat(pairP);

            //scribble.midi(pairP);
            console.log(`correct input P-value${userCode.values[15]}`);
          }
          break;
        default: {
          ("Enter a Valid Input");
        }
      }
    }
    //console.log("merge=>", merge);

    scribble.midi(merge);
  } else {
    console.log("Wrong User Input");
  }
};
