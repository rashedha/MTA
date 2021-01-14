# MTA Puzzle Homework

## Objectives:

- Apply your knowledge of JavaScript to solve a real world problem.
- Get really good at functions, array manipulation, and objects.


## Instructions

1. Fork and clone this repository.
1. Write your solution in `solution.js` Make sure to commit your code frequently.
1. When finished, add, commit and push to your fork.
1. Submit a pull request. If you finished early and want to add more changes, repeat step #3 (Your changes will be reflected in the pull request).


### Activity

- Create a program that models a simple subway system.

- The program takes the line and stop that a user is getting on at and the line
  and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

```javascript
planTrip("N", "Times Square", "six", "33rd"); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
```

- There are 3 subway lines:
  - The **N** line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  - The **L** line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  - The **Six** line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
- All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the Six line, so you'll have to differentiate this when you name your stops in the arrays.)
- Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

### Hints:

- Work out how you would do it on paper first! Consider doing the following before coding:
  - Diagram the lines by sketching out the subway lines and their stops and intersection.
  - Write pseudocode.
- Solve an easier version of the problem first by focusing on **a single line** before trying to tackle multiple lines.
  - Hint: A multiple line trip could be considered two single line trips
- Don't worry about prompting the user for input. Hard code some values to get it working. You can use `prompt()` later, if you want, to make it more interactive.
- The keys to the homework are:
  - finding the index positions of each stop. (hint: `.indexOf()` and `.includes()`).
  - finding the **intersection** of the lines at Union Square.
  - Subway lines are keys in a dictionary (object literal), while the values are
  a list (array) of all the stops on each line.
