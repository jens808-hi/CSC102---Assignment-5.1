//runs the check for Palindrome
function pal_check(){
     let str = prompt("Enter a Palindrome");
     let cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g,''); 
     return cleanStr = cleanStr.split('').reverse().join('');
}
let inputString = "kayak";
let result;

if(pal_check(inputString)){
    alert(inputString + " is a Palindrome ");
}else{
    alert(inputString + " is not a Palindrome");

    //Output
    document.getElementById("result").textContent = result;
        
        
//variables for loop
let sumOfnumbers = 0;
let numberOfLoops = 10;
//var counter = 1
//do this while the condition isn't met 
do {
    if(sumOfnumbers =NaN)
     {
    sumOfnumbers += 1; 

    alert(sumOfnumbers)}
}
    //counter <=number of Loops
    while (sumOfnumbers <=numberOfLoops -1);
}