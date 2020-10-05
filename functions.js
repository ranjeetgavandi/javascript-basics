//Function Declaration
//Hoisting
test();
function test(){
    console.log('test');
}

// Anonymous Function Expression
// console.log(x);
// let x =1;

let run = function(){
    console.log('run');
};
run();

// Arguments
function sum(){
    let total =0;
    for(let value of arguments)
    total += value;
    return total;
};
console.log(sum(1,4,6,7));
  

//The Rest Operator

function sumPrice(discount, ...prices){
    const total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(sumPrice(0.1, 10, 60));

// Default Pramaeters----
function intrest(principal, rate=15, years=5){
    return principal * rate / 100 * years;
}
console.log(intrest(500000))

// getters and setters 
// getters => access properties
//setters => change them
const person = {
    firstName : "Ranjeet",
    lastName : "Gavandi",
    get fullName (){
        return `${person.firstName}, ${person.lastName}`
    },
    set fullName(value){
        if(typeof value !== 'string')
        throw new Error('Value is not a string');

        const parts = value.split(' ');
        if(parts.length !== 2)
        throw new Error('Enter a First name and last name')

        this.firstName = parts[0],
        this.lastName = parts[1]
    },
};
try{
    person.fullName = 'Rocky Patil'
}
catch(e){
    alert(e);
}

console.log(person);

//This keword
function playVideo(a,b){
    console.log(this);
};

playVideo.call({name: 'Ranjeet'}, 1,2);
playVideo.apply({name: 'Ranjeet'},[1,2,3]); //We have pass them as in  Array  
playVideo.bind({name: 'Ranjeet'})(); //it retrun new function and set to this object permantly  

//Exriceise 1 Sum Argument

console.log(sum([1,2,3,4]));
  function sum(...items){
      if(items.length === 1 && Array.isArray(items[0]))
      items= [...items[0]]
    return total = items.reduce((a,b) => a +b);
};

//Exriceise 2 Area of Circle

const circle = {
    radius: 1,
    get area(){
        return Math.PI * this.radius *this.radius;
    }
};
console.log(circle.area);

// Exriceise 3 Error Handling
try{
    const numbers = [1, 2, 3, 4];
    const count = countOccurrences (numbers, 1);
    console.log(count);
}
catch (e) {
    console.log(e.message);
}
 function countOccurrences(array, searchElement) {
    if(!Array.isArray(Array))
    throw new Error('This is invaild array');

    return array.reduce((accumlator, current) =>{
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumlator + occurrence;
    }, 0);

 }