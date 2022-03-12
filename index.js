// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

let destructivelyAppendCat = (val) => cats.push(val);
// or cats[cats.length] = val;

let destructivelyPrependCat = (val) => cats.unshift(val);
// or cats.splice(0,0,x);

let destructivelyRemoveLastCat = () => cats.pop();

let destructivelyRemoveFirstCat = () => cats.shift();

function appendCat(val) {
    let newArray = cats.concat(val);
    return newArray;
        // or
    // let arr = [...cats, name];
    // return arr; 
}

function prependCat(val) {
    let arr = [val];
    return arr.concat(cats); 
    // or
    // let arr = [name, ...cats];
    // return arr; 
}

let removeLastCat = () => cats.slice(0,-1);

let removeFirstCat = () => cats.slice(1);