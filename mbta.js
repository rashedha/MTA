let lines = {
    Red: ["South Station", "Park Street", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
    Green: ["Government Center", "Park Street", "Boylston", "Arlington", "Copley", "Hynes", "Kenmore"],
    Orange: ["North Station", "Haymarket", "Park Street", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"],
}

// Your solution here
function stopsBetweenStations(startLine, startStation, endLine, endStation) {
    let indexOfSIntersection = startLine.indexOf("Ps");
    let indexOfStartPoint = startLine.indexOf(startStation);
    let stopCount =0;

    if(startLine.includes(startStation) && endLine.includes(endStation)){
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
        console.log("changes at Ps");
        
        var indexOfEIntersection = endLine.indexOf("Ps");
        var indexOfEndPoint = endLine.indexOf(endStation);
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
       
        console.log(CountStops(Red,"South Station",Red,"Alewife"))
        
        }
          
        }
        





















// Result
