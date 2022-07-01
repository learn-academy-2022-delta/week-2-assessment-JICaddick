// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

 // Pseudocode:
 // Declare a function called divisibleByThree
 // Give it parameters 
 // Create a conditional statement to evaluate the data 
 // Add logic to the conditional statements using modulo % 3 === 0 (else statement will use bang operator (!==)).

describe("divisibleByThree", () => {
   it("a function that takes a number as an argument and decides if the number is evenly divisble by three or not.", () => {
     expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
     expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
     expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
   })
 })

 // ReferenceError: divisibleByThree is not defined

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

const divisibleByThree = (numVariable) => {
    if(numVariable % 3 === 0){
        return `${numVariable} is divisible by three`
    } else if(numVariable % 3 !== 0){
        return `${numVariable} is not divisible by three`
    }
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

 // Pseudocode:
 // Declare a function called capitalizeMe
 // Give it parameters (placeholders) - Here I'll use 'nounVariable'
 // Create a return statement using .map on the array
 // Give it parameters that include methods (charAt to select the first character and toUpperCase to capitalize the first letter)
 // .slice will then return the remaining parts of the word. It'll do this using the index of the characters so (1) will return the word from it's second character onwards. 


describe("capitalizeMe", () => {
    it("a function that takes in an array of words and returns an array with all the words capitalized", () => {
      expect(capitalizeMe(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalizeMe(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})  
  
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// ReferenceError: capitalizeMe is not defined

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

const capitalizeMe = (array) => {
   return array.map(noun => {
    return noun.charAt(0).toUpperCase() + noun.slice(1)
  })
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.462 s, estimated 1 s



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
// b) Create the function that makes the test pass.

// Pseudocode:
 // Declare a function called firstVowelIndexer
 // Give it parameters (string)
 // Create an array inside the function (let vowels) and include the 5 vowels.
 // Write a for loop that will iterate over the array 
 // create an if statement using .includes that will return the index of the first vowel in each word

describe("firstVowelIndexer", () => {
     it("a function that takes in a string and logs the index of the first vowel", () => {
       expect(firstVowelIndexer(vowelTester1)).toEqual(1)
       expect(firstVowelIndexer(vowelTester2)).toEqual(0)
       expect(firstVowelIndexer(vowelTester3)).toEqual(2)
     })
   })

 const vowelTester1 = "learn"
 // Expected output: 1
 const vowelTester2 = "academy"
// // Expected output: 0
 const vowelTester3 = "challenges"
// // Expected output: 2


const firstVowelIndexer = (string) => {
  let vowels = ["a", "e", "i", "o", "u"]
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      return i
    }
  }
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time: 0.577 s, estimated 1 s

// FIRST ATTEMPT AT CHALLENGE #3
// const firstVowelIndexer = (array) => {
//   return array.filter(word => {
//     return word.split ____________________
//   })
// }
// Could've used indexOf?

// SECOND ATTEMPT AT CHALLENGE #3
// const firstVowelIndexer = (string) => {
//   let newArray = [] 
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "a", "e", "i", "o", "u") {
//       return newArray.push
//   }
// }   