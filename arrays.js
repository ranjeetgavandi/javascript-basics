//Adding elements----
const numbers= [ 3, 4 ];
//End
 numbers.push(5, 6);
 //Beginning
 numbers.unshift(1, 2);
 //Middle
 numbers.splice(2,0,'a','b');

 console.log(numbers);

//Removing Elements-----
//End
const last = numbers.pop();
console.log(numbers);
console.log(last);
//Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);
//end
numbers.splice(2,1);
console.log(numbers);

//Finding elements(Primitives)

const numbers1 =[1,2,3,1,4];

console.log(numbers1.indexOf(1));
console.log(numbers1.lastIndexOf(1));
console.log(numbers1.indexOf(1) !== -1);
//instand of aboue code we can use now below code 
console.log(numbers1.includes(3));

//Finding elements(Reference type)
const courses =[
    {id:1, name: 'a'},
    {id:2, name: 'b'},
];
let course = courses.find(function(course){
    return course.name === 'a';
});
console.log(course);

//Arrow Function
course = courses.find(course => course.name === 'b');
console.log(course);

// Emptying an Array --------------

let strings = ['1','2','3','4'];
let another = strings;
//solution 1
//strings = [];

//solution 2
strings.length= 0;

console.log(strings);
console.log(another);
//solution 3
//strings.splice(0, strings.length);

//solution 4
// while (strings.length > 0)
// strings.pop();


// Combining and slicing arrays-----------
const one = [{id: 'a'}];
const second = [4,5,6];

const combined = one.concat(second);
one[0].id='b';
const slice = combined.slice();

console.log(combined);
console.log(slice);

//Spread  Operator-----
const one1 = [1,2,3];
const second2 = [4,5,6];

let combined1 = [...one1, ...second2];
let copy = [...combined1];
console.log(combined1);
console.log(copy);

//Iterating an Array-------------
for(let one of one1){
    console.log(one)
};

second2.forEach((second, index) => 
     console.log(index,second)
 ); 

//Joining Arrays--------------
const number =[1,2,3];
const join = number.join(',');
console.log(join);

const messages = "This is my message";
const combine = messages.split(" ");
console.log(combine);

const joinArray = combine.join("-");
console.log(joinArray);

//Sorting Arrays----------
let abc = [2,-1,3,1];
abc.sort();
console.log(abc);
abc.reverse();
console.log(abc);

const courseOnline =[
    {id:1, name:"Node.js"},
    {id:2, name:"javascript"}
];
courseOnline.sort((a , b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courseOnline);

//Testing the Element of any array
//every (every element need to positive)

const allPositive = abc.every(function(value){
    return value =>0;
});

//some (atlist one element need to positive)
const atlistOnePositive = abc.some(function(value){
    return value >=0;
});

const fliterNum = abc.filter(n => n >=0 )
console.log(atlistOnePositive);
console.log(fliterNum);

// Mapping an Arry

//const items = fliterNum.map(n => '<li>'+ n + '</li>');
//const html = '<ul>'+ items.join('') + '</ul>';
const items = abc
  .filter(n => n >=0 )
  .map(n => ({value: n}))
  .filter( obj => obj.value > 1)
  .map(obj => obj.value)

console.log(items)

//Reducing an Arrary----

// a = 1, c = -1 => a = 0;
//a = 0, c= 2 => a = 2;
//a = 2, c= 3 => a= 5;  
const sum = abc.reduce((accmulator, currentValue) => accmulator + currentValue);

console.log(sum);

//==============================================

//Exercise 1 Array form Range
const outputArray = arrayFormRange(1, 5);
console.log(outputArray);
function arrayFormRange(min, max){
    let output =[];
    for(let i = min; i <= max; i++)
    output.push(i);
    return output;
}
//Exercise 2 Includes

console.log(includes(abc, -2));

function includes(array, searchElement){
    for(let element of array)
        if(element === searchElement)
        return true;
    return false;
}

//Exercise 3 Expcept
let xyz =[1,2,3,4,5,6]
let outPuted = except(xyz, [1,4]);
console.log(outPuted);

function except(array, excluded){
    const output = [];
    for(let element of array)
        if(!excluded.includes(element))
        output.push(element);
      return output;   
}
//Exercise 4 Moving an Element-----
const output = move(xyz, 0,4)
function move (array, index, offset){
    const position = index + offset;
    if(position >= array.length || position < 0){
        console.error('Invaild offset');
        return;
    }
    const output =[...xyz];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
};
console.log(output)

//Exercise 5 Count Occurrences
const count = countOccurrences(xyz, 1);

console.log(count);
function countOccurrences(array, searchElement){
    // let count = 0;
    // for(let element of array)
    // if(element === searchElement)
    //     count++;
    // return count;

    //this is also the otherway---------

    return array.reduce((accmulator, current) => {
        const Occurrence = (current === searchElement)
        return accmulator + Occurrence;
    });
};

//Exercise 6 Get Max

const max = getmax([1,2,3,4, 10]);

function getmax(array){
    if(array.length === 0) return undefined;

    // let max = array[0];
    
    // for(let i = 1; i < array.length; i++)
    //     if(array[i] > max)
    //     max = array[i];

    // return max;

    //we can use reduce useing of aboue code
    return array.reduce((a,b) => (a > b) ? a: b)
};
console.log(max);

// Exercise 7 Movie
const movies =[
    {title:'a', year:2018, rating: 4.5},
    {title:'b', year:2018, rating: 4.8},
    {title:'c', year:2018, rating: 3},
    {title:'d', year:2017, rating: 4}
];

const titles = movies 
    .filter(m => m.year=== 2018 && m.rating >= 4)
    .sort((a,b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(titles);