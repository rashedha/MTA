let N = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
let L = ["8th", "6th", "Union Square", "3rd", "1st"]; 
let Six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

CountStops(Six,"Astor Place",N,"8th"); 

function CountStops (startLine, firstStop, endLine, lastStop) {
let indexOfSIntersection = startLine.indexOf("US");
let indexOfStartPoint = startLine.indexOf(firstStop);
let stopCount =0;
if(startLine.includes(firstStop) && endLine.includes(lastStop)){
console.log('You must travel through the following stops on the',startLine,' line:');
if (indexOfSIntersection>indexOfStartPoint){ // if index of Union Sqaure is greater than start point Basically helps to decides to left in array or right
for(let i= indexOfStartPoint;i<indexOfSIntersection;i++){
stopCount++;
console.log(startLine[i]);
}
}
else{
for(let i= indexOfStartPoint;i>indexOfSIntersection;i--){
stopCount++;
console.log(startLine[i]);
}
}
console.log("changes at US");

var indexOfEIntersection = endLine.indexOf("US");
var indexOfEndPoint = endLine.indexOf(lastStop);
console.log('Your journey continues through the following stops: ');
if(indexOfEIntersection>indexOfEndPoint){
for(let j= indexOfEIntersection-1;j>=indexOfEndPoint;j--){
stopCount++;
console.log(endLine[j]);
}
}
else{
for(let j= indexOfEIntersection+1;j<=indexOfEndPoint;j++){
stopCount++;
console.log(endLine[j]);
}
}
console.log(stopCount,' stops in total');
  
}
else{
console.log('Please enter valid stop points and Lines');
console.log(CountStops((Six,"Astor Place",N,"8th")))
}
  
}
