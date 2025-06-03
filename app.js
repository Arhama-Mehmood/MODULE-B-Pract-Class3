// Destructuring of Array

let [num1, , num3, , num5] = [1, 2, 3, 4, 5];
console.log(num3, num1, num5);

let [num6, num7, num8,[a,b,c]] = [1, 2, 3,[97,"Arhama",0]];
console.log(b);

let [n,m,o='Orange']=['Hi','Hellooowwwww!!'];
console.log(o);

let {name,age,address:{home,street},hobbies}={
    name:'Arhama',
    age:20,
    address:{
        home:130,
        street:44,
        city:'Karachi'
    },
    hobbies:['Coding','Reading','Writing']
}
console.log(name,age,home,street,hobbies);

function collectData({naam,umer}){
    console.log(naam,umer);
}
let obj={naam:"arhama hai",umer:"19 saal ki!"};
collectData(obj);