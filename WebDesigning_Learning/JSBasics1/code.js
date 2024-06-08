function manip(arr) {
    arr.push(5);
    arr = [9,8,7];
    return arr;
}

let li = [1,2,3,4];
manip(li);
console.log(li);

li = manip(li);
console.log(li);


// console.log("ye lo mai aa gaya");

// function createRectangle(len, bre) {

//     let rectangle = {
//         length: len,
//         breadth: bre,

//         draw: function() {
//             console.log("Drawing the rectangle dude of length "+len+" and breadth = "+bre);
//         }
//     };
//     return rectangle;
// }


// let a = {value: 10};

// function inc(a){
//     a.value++;
// }

// inc(a);

// console.log(a.value);