// Problem 1: ana to vori

function anaToVori(ana){
    
var vori =ana/16;
return vori;

}
var result = anaToVori(30);
console.log(result, 'vori');

//Problem 2 : pandacost

function pandaCost(shingaraquantity,chamuchaquantity,alurchopquantity) {
    var shingara_price = 5;
    var chamucha_price = 6;
    var alurchop_price = 7;
 var shingara = shingara_price * shingaraquantity;
 var chamucha = chamucha_price * chamuchaquantity;
 var alurchop = alurchop_price * alurchopquantity;
 var sum = shingara + chamucha + alurchop;
 return sum;
 
 }
 var total = pandaCost(5,2,3);
 console.log(total ,'taka');

 //problem 3 : picnincBudget

 function picnincBudget(n){
    var budget;
     
     if(n<=100){
              budget = n*5000;
         return budget;
             }
             if (n>100 && n<=200){
                 budget = (n-100)*4000 + 100*5000 ;
return budget;
             }
             if (n>200){
                 budget = (n-200)*3000 + 100*4000 + 100*5000;
return budget;
             }
   
 }
 var memberbudget = picnincBudget(250);
 console.log(memberbudget,'taka');

  //problem-4 : oddFriend

function oddFriend(){
    const names = ["Afra", "Hasan", "Mamun"];
     var oddname;
    for (let i=0;i<names.length; i++){
        let size = names[i].length;
        console.log(names[i],size);
        
    }
    for(let j=0;j<names.length;j++){
        if(names[j].length%2 == 1){  //check for first odd name 
            oddname = names[j];
            break;
        }
    }
    return oddname;
}

var friend = oddFriend();
console.log('odd friend name is ', friend);