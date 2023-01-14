function distanceFromHqInBlocks(pickUpLocation) {
    if(pickUpLocation > 42) {
        return pickUpLocation - 42
    }
    if(pickUpLocation < 42){
        return 42 - pickUpLocation
    }
}


function distanceFromHqInFeet(pickUpLocation){
    return 264 * distanceFromHqInBlocks(pickUpLocation)
 }
    
function distanceTravelledInFeet(start, destination){
     if(destination > start){
        return (destination - start) * 264
     }  
     if(destination < start){
        return (start - destination) * 264
     } 
}
function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination)
    if (feet < 400) {
        return 0
    }
    if (feet > 400 && feet <= 2000){
        return (feet - 400) * .02
    }
    if (feet > 2000 && feet < 2500){
        return 25
    }
    if (feet >= 2500){
        return 'cannot travel that far'
    }
        
       
}