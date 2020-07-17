function feetToMile(feet){
   
    if(feet >= 0){
    var miles = feet /5280;
    
    return miles;
   }
   
   else{
       return 'distance can not be negetive'
   }
}

function woodCalculator(chair,table,bed){
   
    if(chair >= 0 && table >= 0 && bed >= 0){
    
    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed *5;
    var woodForTotal = woodForChair + woodForTable + woodForBed;
    
    return woodForTotal;
   }
   else{
       return 'negetive value is not countable';
   }
}

function brickCalculator(floor){
    
    if(floor >= 1 && floor <= 10){
        var numOfBricks = floor * 15 * 1000;
        return numOfBricks;
    }
    
    else if(floor >= 11 && floor <= 20){
        var numOfBricks = floor * 12 * 1000;
        return numOfBricks;
    }
    
    else if(floor > 20){
        var numOfBricks = floor * 10 * 1000;
        return numOfBricks;
    }
    
    else{
        return 'please give the input above zero';
    }
}


function tinyFriend(names){
    
    var smallestName;
    var smallestLenght = names[0].length;
    
    for(var i = 1; i < names.length; i++){
        if(smallestLenght > names[i].length){
            smallestLenght = names[i].length;
            smallestName = names[i];
        }
    }
    return smallestName;
}
