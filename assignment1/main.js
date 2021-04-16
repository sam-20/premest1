console.log("this is a message from javascript")
console.log("this is another message");
console.log("hello world")

let myname = "samuel"
/**
 * 'let' is the javascript keyword used to declare a variable
 * 'myname' is the variable we created
 * 'samuel' is the value we assigned to the variable we created
 */


let myname1 = 'alfred';

// let my-age ="samuel" /**this is wrong  */
// let my age = "samuel" /**this is wrong */

let my_name = "samuel" /**this is right */
let myname2 = "samuel"  /**this is right */

let myage = 12; /**the datatype of the value inside the variable called myage is a number */
let myage2 = "12";  /**the datatype of the value inside the variable called myage2 is a string */
let userverified = true    /**the datatype of the value inside the variable called userverified is a boolean */
let usersignedin = false; /**the datatype of the value inside the variable called usersignedin is a boolean */


var username = "alfred";
/**var is another javascript keyword used to declare a variable 
 * username is the variable we created
 * alfred is the value we assigned to the variable that we created
*/

var items = 20
var answer = true
var answer2 = false
var statement = "this is a message"
var yourage = "14"


const userpassword = 34567;
/**const is the javascript keyword used to declared a variable
 * userpassword is the name of the variable we created
 * 34567 is the value assigned to the variable we created
 */
const password = "12345678t"
const title = "hello"
const user_age = 57;
const delete_item = false;


let somevariable2;
var somevariable;
/**declaring variables without assigning a value to it */


var number = 14
var firstname = "rex"
console.log(14);
console.log("rex");
number = 27
console.log(number);
console.log(firstname);

console.log(myname);
console.log(myage);
console.log(answer2)
console.log(user_age);

let student_names = ["kojo", "adwoa", "mary", "alfred"];
/** ["samuel", "adwoa","mary", "alfred"] is group of values called an array*/
var ages = [12, 13, 8, 9];

var myarray = [12, "samuel", true, false, 1.5, "orange"];
console.log(myarray[2]);
console.log(myarray[4]);

console.log(student_names);
console.log(myarray);

var studentarray = ["samuel", "prince", "ernest", "maxwell"];

var newarray = [
    { name: "samuel", username: 'sambot123', password: '1234567t' },
    { name: "prince", username: "princemarfo456", password: "lfkjsafa" },
    { maths: 20, english: 56, science: 47 },
    "pawpaw",
    17,
    { age: 12, lastname: "spencer" }
]

console.log(newarray[0]);
console.log(newarray[1].username);
console.log(newarray[2].science);

console.log(newarray[3]);
console.log(newarray[5].lastname);
console.log(newarray[4]);


let object1 = { french: "54%", twi: "66%" };    /**object1 is a variable storing an object */
let object2 = [{ french: "60%", twi: "26%" }];  /**object2 is a variable storing an object in an array */

console.log(object1.french);
console.log(object2[0].french);


/**
 *
 * javascript functions
 * javascript array methods
 *
 */



let number1 = 0.34556
var number2 = 23

let username_exist = false;
let password_exist = true;

var students = ["samuel", "success", "maxwell"]
var numbers = [12, 14, 16, 20]

var mixedarray = ["samuel", 23, true]

var studentobject = { name: "samuel", age: 56, location: "kumasi" }

var student_Details = [
    { name: "samuel", age: 56 },
    { name: "success", age: 12 },
    "samuel",
    45,
    true
]

console.log(number1);

var num1 = 15;
var num2 = 6;
var num3 = num1 + num2;
console.log(num3);

var num5 = "samuel"
var num6 = 14
var num7 = 2
var answer = num5 + num6 + num7
console.log(answer);

function displaymessage() {
    console.log("hello this message is from the function")
}

function addnumbers() {
    var sum = 5 + 7
    console.log(sum);
}

addnumbers();

const subtractnumbers = () => {
    var num1 = 0
    var num2 = 12
    var ans = num1 - num2
    console.log(ans);
}

subtractnumbers()



function addnumbers(a, b) {
    var sum = a + b
    console.log(sum);
}

addnumbers(2, 3)


const myname5 = (username) => {
    console.log(username);
}

myname5("samuel");

var statement1 = "my age is"
var statement2 = 47

console.log(statement1 + " " + statement2)
console.log(`${statement1} ${statement2}`);

function bottle() {
    var sum = 1 + 2
    return sum;
}
var cup = bottle();
console.log(cup);

var mylaptop = "acer123"
if (mylaptop == "acer") {
    console.log("u are right");
} else {
    console.log("u are wrong");
}


var username = "samuel123"
var mypassword = "2009"
if (username == "samuel123") {
    console.log("logged in succesfully");
} else {
    console.log("username wrong");
}



var numm = 78;
if (numm == '78') {
    console.log('true');
    console.log('lakjfsdlka')
    var smoe = 5
}
else {
    console.log('false');
    var sum = 12 + 3
    console.log('afsd')
}

numm == '78' ? dosomething() : console.log('false')

function dosomething() {
    console.log('true');
    console.log('lakjfsdlka')
    var smoe = 5
}

if (numm === '78') {
    console.log('true');
}
else {
    console.log('false');
}


var firstname1 = "samuel"
var lastname1 = "botwe"
if ((firstname1 == "samuel") && (lastname1 == "botwes")) {
    console.log('user exists')
}
else if (firstname == "john") {
    console.log('user doesnt exist');
}
else {
    console.log('hey!')
}

if ((firstname1 == "samuel") || (lastname1 == "botwes")) {
    console.log('user exists')
}
else {
    console.log('user doesnt exist');
}


for (var loop = 0; loop < 5; loop++) {
    //codes 
    console.log(loop);
}


var counter = 0;
// counter = counter + 1

function addcounter() {

    for (var loop = 0; loop < 6; loop++) {
        counter = counter + 1
        console.log(`counter is : ${counter}`)
    }
}

addcounter()


const scope = () => {

    var item1 = "mango"
    let item2 = "mango"
    const item3 = "mango"

    item1 = "orange"
    item2 = "orange"
    // item3 = "orange"

    console.log(item1);
    console.log(item2);
    console.log(item3);
}

scope();
















