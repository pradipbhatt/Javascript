# Diffrence between Var Const Let

There're two versions of the js they are es5 and es6 where es6 is the new version.

In old js we're just only version of the varaible var but now we have let and const

So var is in the es5 only and es6 have all three.

### Old have Var only new have let and const + var ;

Var is function scoped vaneko var afno parent ko scope ma jata pani use garna sakine vayo in anywhere of the function.

it means for loop end vaye var ko scope end vayo nasochnu.


```javascript
function abcd()
for(vari=0;  i<12; i++ ){
  console.log(i)
}

//let is {} block
function abcd()
for(let i=0;  i<12; i++ ){
  console.log(i)
}

abcd();
```

### Var adds itself to the window object

Js laungauage ma kehi kura chainan jo hami use garchau tini cheez haru hami JS bata mildainan but browser bata lagchau rw tini sabai cheez jo js ko part hainan but we can find those in particular objects.

JS ma dherai feat hunxan but jo feature hami use garxau tyo hunna but tae pani hami use garchau from Window which is one box of feature given by the browsers to use .

## alert();

##### prompt();

##### Var adds itself  to the window object

```
var a = 12;

```

yesto vaye window garera herda window ma var ko value show huncha so let ani const ma value show gardaina window le.


## Window Object , Browser context api , stack

Stack vaneko kehi kura kasari run garx vanne like a box FIFO.

##### Heap Memory 

jati pani varaiable or data hami banauchau tini lae intermidiate thau ma store garnu parcha tesko lage heap memory hunca


1+2+3+4+5+6=21

1+2=3

3+3=6

6+4=10

10+5=15

15+6=21


so Intermidiate data is stored in the heap and the final ans is printed in the screen.


##### Execution Context
