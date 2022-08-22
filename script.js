// TEST 1
// Question 1: Calculate the average score of the team
// Storing the variables
const dumebiAverage = (96 + 108 + 89)/3;
console.log("The Average Score for Team Dumebi is" + " " + dumebiAverage)

const ciromaAverage = (88 + 91 + 110)/3;
console.log("The Average Score for Team Ciroma is" + " " + ciromaAverage)

// Question 2: Comparing the team average score to determine the winner
if (dumebiAverage> ciromaAverage){
console.log("Dumebi is the winner");
} 
else if (ciromaAverage>dumebiAverage){
    console.log("Ciroma is the winner")
}
else {
    console.log ("There is a draw")
}

// Question 3: Minimum score in Bonus 1
const dumebiBonus1 = (97 + 112 + 101)/3
console.log("The Average Score for Team Dumebi in Bonus 1 is" + " " + dumebiBonus1)

const ciromaBonus1 = (109 + 95 + 123)/3
console.log("The Average Score for Team Ciroma in Bonus 1 is" + " " + ciromaBonus1)

const minScore = 100;

if (
  dumebiBonus1 > ciromaBonus1 &&
  dumebiBonus1 >= minScore
) {
  console.log("Dumebi is the winner");
} else if (
  ciromaBonus1 > dumebiBonus1 &&
  ciromaBonus1 >= minScore
) {
  console.log("Ciroma is the winner");
} else if( ciromaBonus1 > dumebiBonus1 &&
    ciromaBonus1 <= minScore){
    console.log("Ciroma is not the winner");
}else if( dumebiBonus1 > ciromaBonus1 &&
    dumebiBonus1 <= minScore){
    console.log("Dumebi is not the winner");
}else {
  console.log("There is a draw in bonus 1");
}

// Question 4: Minimum Score in Bonus 2
const dumebiBonus2 = (97 + 112 + 101)/3
console.log("The Average Score for Team Dumebi in Bonus 2 is" + " " + dumebiBonus2)

const ciromaBonus2 = (109 + 95 + 106)/3
console.log("The Average Score for Team Ciroma in Bonus 2 is" + " " + ciromaBonus2)

const minimumScore = 100;

if (
    ciromaBonus2 == dumebiBonus2 &&
    (ciromaBonus2 || dumebiBonus2) >= minimumScore
  ) {
  console.log("There is a draw in bonus 2")
} else {
  console.log("No team won the trophy");
}


// Tasks
const score = prompt("Enter your score")
if(score<25){
    console.log("Print: F");
}else if(score>=26 && score<=45){
    console.log("Print: E");
}else if(score>=46 && score<=50){
    console.log("Print: D");
}else if(score>=51 && score<=60){
    console.log("Print: C");
}else if(score>=61 && score<=80){
    console.log("Print: B");
}else if(score>=81 && score<=100){
        console.log("Print: A");
}else{
    console.log("");
}
