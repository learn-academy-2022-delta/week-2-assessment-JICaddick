# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer:
  A parameter follows the function's name and is held in (). It is essentially a place holder and can be names arbitrarily. An argument is what we pass into the function- the data that we want the function to work on. 

  Researched answer:
  A parameter is like an alias for the data that will be passed into the function whereas the arguments are the actual values. 


2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer:
  When using .map() and also .filter() for that matter, the value of the array is required. The other 2 parameters are optional and are the index and the array itself- the array the function is being called on. 

  Researched answer: map is a keyword which iterates over an array and creates a new one. The only required argument is the value of the current element. The index of the element being processed and the array object on which map is called are optional. 


3. What is the difference between map and filter?

  Your answer: .map() will iterate over an array and check all of the values for certain conditions whereas .filter() will filter through the array and just return the data that matches its criteria. 

  Researched answer: .map creates a new array by transforming each individual element of the array it's called on whereas .filter creates a new array by removing the values that do not meet the return criteria (arguments). 



4. What is the difference between a function and a method?

  Your answer: A function is a block of code that takes an input and gives an output depending on the parameters and arguments we pass into it. A method is a kind of function that's built in and can be used to alter the output of the function. Methods perform actions but are assigned to objects, are accessed using a . and are followed by () which sometimes require arguments. 

  Researched answer: Methods and functions are both sets of instructions that perform tasks. Methods are associated with object whereas functions aren't. Functions can be used on multiple times no different data whereas a method is static and only used on the object to which it's assigned.



5. What is object destructuring?

  Your answer: Object destructuring is when we use a variable and put in all the keys as arguments. We can then write out the values that pair with those keys using their indexes- the position here is important otherwise KV pairs will not match as they were intended. 

  Researched answer: Object destructuring allows us to retrieve data from ,objects, maps, and arrays. We can use object destrucuring to extract multiple values from an array at the same time. 



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when a function or variable is moved to the top of the code its to be executed on. It's done to change the scope of the variable/ function.

  Researched answer: Hoisting in JavaScript is used when we want to run a variable before it is declared. It's advantageous because we can call a function before it's declared. 



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: Class inheritance means a child can inherit the functionality of its parent and also be added to. It allows us to reuse and edit code multiple times. 

2. React: React is an open sourcefront-end Javascript library and can be used to build user interfaces. 

3. React state: React state is an object that's built into the React language; it allows us to manage changing data in an application. 

4. React lifecycle methods: React components all have 3 stages of life: Mounting, Updating, and Unmounting. It's like the series of events that happen to a React component from it's birth, developments, and then death. 

5. DOM: DOM stands for document object model. It's a cross platform and independent interface. It treats an HTML document as a tree structure. Each node is an object representing a part of the document. It affects the way a document is accessed and manipulated by defining it's logical structure. 
