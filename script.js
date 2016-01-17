var colorCount = 12;

var main = function(){
    addColorClass();
    //numFrequencyTest();
}

var addColorClass = function() {
    var number = Date.now() % colorCount + 1;
    
    document.getElementsByClassName("box")[0].classList.add("color" + number);
}

var setNextColorClass = function() {
    var currentColorClass = document.getElementsByClassName("box")[0].classList[1];
    var curNum = parseInt(currentColorClass.substr(5));
    var nextNum = curNum + 1 > colorCount ? 1 : curNum + 1;
    
 
    document.getElementsByClassName("box")[0].classList.remove(currentColorClass);
    document.getElementsByClassName("box")[0].classList.add("color" + nextNum);
}

var numFrequencyTest = function() {
    var trials = 1000000,
    results = [];
    var number;
    
    for(var i = 0; i < trials; i++) {
        number = Date.now() % colorCount + 1;
        results[number] ? results[number]++ : results[number] = 1;
    }
    
    for(i = 1; i <= colorCount; i++) {
        console.log(i + ": " + results[i]);
    }
}