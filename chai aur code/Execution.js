//jab pani hami function run garlau then function le afno imaginary container banaucha jasma 3 ota kura haru rahancha 
// 1.Variable.
// 2. Function inside that parent function.
// 3. Lexical environment of that function.

// Yo jo container cha tehi imaginary container vanekai Context vanincha.
// Context is the environment in which the function is executed.

// Function chalne bittikai euta imaginary dabba banne vayo jasma euta variable then arkho function and last ma lexical environment banne garcha.
// Lexical environment vaneko chai function ko andar ko scope ho.

function abcd(){
    var a = 12;
    function def(){
        var b = 13;
    }
}

abcd();
// abcd dabba banyo ani yo dabba ma a,def,b bhanne variable haru rahancha ani lexical environment pani hune vayo matlab k kura access garne k access nagarne vanne kura huncha.

// var ko scope nearest function samma huncha ani let ko scope chai block samma huncha.

// Execution environment vaneko chai a,def,lexical environment haru huncha.

// Execution context
// It is a container where the functions code is executed and it's created whenever function is called,it contains 3 things:
// 1. Variable object
// 2. Function object
// 3. Environment 

// Lexical environment euta chart huncha jasma k lekhya huncha vane particular function k k kura access garna sakcha vanera vanya huncha.Matlab ki it holds it's scope and scope chain.

var a = [1,2,3,4,5];

var b = a;

b.pop(); // it removes 5 from b and a as well.


// let's use the spread operator

var b = [...a]; // it creates a shallow copy of a and stores it in b.
// it doesn't affect a.  vanya matlab k ho vane ... ko thau ma a ko value haru rakhcha ani b ma rakhcha.
// spread operator le shallow copy matra garcha ani deep copy chai na garchan.

// k hami objects lae pani yesari copy garna sakchau ?



