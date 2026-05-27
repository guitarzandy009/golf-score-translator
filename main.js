const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  let num = par - 2;
  if (strokes === "1") {
    return names[0];
  } else if () {
    return names[1];
  } else if () {
    return names[2];
  } else if () {
    return names[3];
  } else if () {
    return names[4];
  } else if () {
    return names[5]
  } else {
    return names[6];
  }
}

console.log("Golf Score Translator");
console.log(golfScore(1, 1))
console.log(golfScore(3, 1))
console.log(golfScore(4, 1))
console.log(golfScore(5, 1))
console.log(golfScore(3, 4))
console.log(golfScore(4, 5))
console.log(golfScore(5, 6))
console.log(golfScore(3, 5))
console.log(golfScore(4, 6))
console.log(golfScore(5, 7))
console.log(golfScore(3, 7))
console.log(golfScore(4, 8))
console.log(golfScore(4, 9))
console.log(golfScore(5, 9))