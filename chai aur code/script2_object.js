var obj = {
    name: "John",}
var copyObj = {...obj};
console.log(copyObj); // { name: "John" }

// Truthy and Falsy values
// JS ma j pani lekhyau vane maily two types bata euta type ma belong garcha lile TRUTHY or FALSY.

// Falsy vaneko chai 0,false,"", undefined, null, NaN, document.all haru ho and rest of all are  Truthy = -2, 1, 2, 3, " ", "0", [], {}, function(){}, -1, Infinity, -Infinity haru ho.

if(7){
    console.log("7 is truthy"); // it will be executed
}
else{
    console.log("0 is falsy"); // it will not be executed
}



// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// Let's study the for each and for in 

// for each loop oonly run in the aray then we use the for each loop.
var a = [1,2,3,4,5];
a.forEach(function (val) {
    console.log(val + 2 +" is new number ");
});


a.forEach((val) => {
    console.log(val + 2 +" is new number ");
});


// forEach kahile pani by default array ma changes gardaina bt yesle array ko temporary copy ma matra changes garear dinchan jasko help le k hune vayo vane array hamesa same rahane vayo