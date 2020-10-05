//object-oriented programming 
const circle ={
    ridues: 1,
    location: {
        x:1,
        y:1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }

}
circle.draw(); //method

//camle Notation : oneTwoThree
//Factory Function
function createCircle(radius) {
    return {
        // radius:radius, 
        radius, // instant of use aboue code we can use this 
        draw () {
            console.log('draw1')
        }
    };
};
 const circle1 = createCircle(1);
 
 console.log(circle1);

//Pascal Notation : OneTWoThree
//Constructor Fuction----------------
function Circle(radius){
    this.radius=radius;
    this.draw = function(){
        console.log('drow')
    }
}
const newCircle = new Circle(3);

console.log(newCircle);


// Dynamic Natrue of object
const mapCircle = {
    radius: 2,
};
mapCircle.color = "Red",
mapCircle.draw = function(){}
delete mapCircle.color,
console.log(mapCircle)

// Primitives are copied by their Value
let a = 10;
function increase(a){
    a++;
};
increase(a);
console.log(a);

// Object are copied by their reference
let obj = {value:10};
function increase(obj){
    obj.value++;
};
increase(obj);
console.log(obj);

//Enumerating Properties of an Object

const myLocation = {
    radius:2,
    drow () {
        console.log("abc")
    }
};

for(let key in myLocation){
    console.log(key, myLocation[key])
}

for(let entry of Object.entries(myLocation))
    console.log(entry)

if('drow' in myLocation)
    console.log('yes')

// Cloning an Object--------
//One type of cloning Object 
const another = {};
for( let key in myLocation)
    another[key] = myLocation[key]
  console.log(another)

// scend type of cloning Object
const another1 = Object.assign ({'color':'red'}, myLocation)
 console.log(another1);

 //Third type of cloning object
 const another2 = {... myLocation}
 console.log(another2);


// Template Literals----
const name = "Ranjeet"

const message = 'Hello '+ name + '\n \'your first message';
//object = {}
//Boolean true , false
//String '', ""
//Template ``

const another3 = `Hello ${name},
'this is your Second message`;

// Date
const now = new Date();
const date1 = new Date('28, Sep,2010');
const date2 = new Date(2010,5,15, 10);
now.setFullYear(2020);

//Exercise 1 ----------- Address Object 
//Street
//city
//zipCode
//ShowAddress(address) 

let address = {
    street: 10,
    city: 'Pune',
    zipcode: 411022
}

function showAddress(address) {
    for (const key in address) {
        console.log(key,':', address[key])
    }
}
showAddress(address);

//Exercise 2----------Factory and Constructor function

//Factory function
function showYourAddress(Street, city, zipCode) {
    return{
        Street,
        city,
        zipCode
    }
};
const address1 = showYourAddress(1,'pune',20);
console.log(address1)

//Constructo function
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};
let newAddress = new Address('10','kolhapur','416104');
let newAddress1 = new Address('10','kolhapur','416104');
let newAddress2 = newAddress;
console.log(newAddress);
console.log(areEqual(newAddress, newAddress1));
console.log(sameEqual(newAddress, newAddress1));
console.log(sameEqual(newAddress, newAddress2));

//Exercise 3 --------- Object Equality

function areEqual(newAddress, newAddress1){
    return newAddress.street === newAddress1.street &&
        newAddress.city === newAddress1.city &&
        newAddress.zipCode === newAddress1.zipCode;
    
}
function sameEqual(newAddress, newAddress1){
    return newAddress === newAddress1;
}
// Exercise 4 --------- Blog post Equality
let post = {
    title : 'My Hero',
    body: 'Life',
    authour: 'Ram',
    views: 41,
    comments: [
        {authour: 'a', body: 'b'},
        {authour: 'a', body: 'b' },
    ] ,
    isLive: 'yes'
};
console.log(post);

//Exercise 5 --------- Constructor Function
let post1 = new Post('a','b','c');
console.log(post1)
function Post(title,body,authour){
    this.title = title,
    this.body =body,
    this.authour = authour,
    this.views =0,
    this.comments=[]
};

//Exercise 6 --------- Price Range Object
let priceRange =[
    {lable: '$', toltip:'Inexpensive', minPerPerson:0, maxPerPerson: 10},
    {lable: '$$', toltip:'Moderate', minPerPerson:11, maxPerPerson: 20},
    {lable: '$$$', toltip:'Expensive', minPerPerson:21, maxPerPerson: 50},
];

let restaruants =[
    {averagePerPerson: 5}
]
