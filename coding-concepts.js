// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
console.log(cohort.split(""))

// a) Your answer: The .split method will separate "Delta 2022" into an array of individual letters.
// b) Verify and explain: .split behaved as anticipated. Putting a space in between the quotation marks in the argument would have returned the Delta and 2022 separately in an array-> [ 'Delta', '2022' ]



// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}

console.log(greeter("LEARN Student"))


// a) Your answer: The above code will log 'undefined"
// b) Verify and explain: The above code is missing a return statement- to work properly it would need to read as follows:
// const greeter = (name) => {
//   return `Hello, ${name}!`
// }

// console.log(greeter("LEARN Student"))


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: The above code will log [8, 10, 12, 14, 16]
// b) Verify and explain: As expected the multBy2 function used .map to iterate over the array individually multiplying each number by 2.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: The above code will log the odd numbers in the array [11,13, 15]
// b) Verify and explain: As expected .filter filtered out all the numbers that didn't divide evenly. The code % 2 !== 0 essentially means any number that can't be divided in 2 without using a decimal.

// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: The above code will log, 'JavaScript'
// b) Verify and explain: As expected the dot notation in the console.log argument is used to access the languages key, the [0] then leaves us with the value from that location in the value's array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: The above code will log "George" "Bravo" "Cohort" next to their keys.
// b) Verify and explain: The new keyword allows us to use new data in the LEARN class. The only changable value in this class is the student. Bravo and 2022 are hard-coded - I tried to change it to Delta and it wouldn't let me.