var msg =  "Hello World"  
console.log(msg); 
//..................................................................
var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
//....................................................................
//var can be used outside the fn
//........................................................................
var greeter = "hey hi";
var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }
    console.log(greeter);
//......................................................................
//Let cannot be used outside the fn
//.....................................................................
let greeting = "say Hi";
let times1 = 4;

   if (times1 > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
/** uncomment the next line to see the error */
//  console.log(hello) // hello is not defined
//......................................................................
//let can be updated but not re-declared.
//....................................................................
//Example
let greeting1 = "say Hi";
greeting1 = "say Hello instead";
console.log(greeting1);

// let greetings1 = "say Hi";
// let greetings1 = "say Hello instead"; // error: Identifier 'greeting' has already been declared
// console.log(greetings1);
//........................................................................

//Const cannot be reassigned

const AGE=[10,12,13];
console.log(AGE);
AGE.push(14,15);
console.log(AGE);
//..........................................................................

//Arrow fn's

var fn= () => { console.log("Hello!");}
//fn();

//...........................................................................

//Default Parameters

function isEqualTo(number=30/2,compare=number){
    console.log(number);
    console.log(compare);
    return number==compare;
}
console.log(isEqualTo());
//.....................................................................

//Rest Operators

function sumUp(...toAdd){
    console.log(toAdd);
}
    sumUp(1,2,3,4,5);
//.....................................................................

//Spread Operators

let numbers=[1,2,3,4,5];

console.log(...numbers);
console.log(Math.min(...numbers));

//.....................................................................

//For-Of-Loops

let numberss=[11,12,13,14,15];
for( let numm of numberss){
    console.log(numm);
}

//.....................................................................

//Template Literals

let name='Srriraj';
let prop=`
    Hello, All! I'm  ${name}, This is an example of TemplateLiteral
`;
console.log(prop)

//........................................................................

//Destructuring Arrays

let Numbers=[1,2,3];
let[a,b]=Numbers;
console.log(a);
console.log(b);
console.log(Numbers);
//--------------------------

let Number=[1,2,3];
let[c,...d]=Number;
console.log(a);
console.log(d);

//----------SWAPING------------

let a1=2;
let b1=3;
[b1,a1]=[a1,b1];
console.log(b1);
console.log(a1);

//..............................................................................

//Destructuring Objects

let obj={
    namee:'Srriraj',
    age:20,
    greet:function(){
        console.log('Hello Im Srriraj!');
    }
};

let{namee,age,greet:Hello}=obj;
console.log(namee,age);
Hello();
//..........................................................................









