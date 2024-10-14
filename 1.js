// Strings are immutable. orginal string can't be changed by method.


//trim method(start and end extra spaces)
// let msg="  Hi   ";
// console.log(msg.trim());
//method chaining
// let msg="    hi      ";
// let newMsg=msg.trim().toUpperCase();
// str.slice(start,(end+1))
// let msg="Rima";
// console.log(msg.slice(0,3))
// //output=Rim
//negetive value
// let name_u="RimaDas";
// console.log(name_u.slice(-1));//length-1=7 so, name_u.slice(9)
//replace method
// let msg="Rima Das";
// let newMsg=msg.replace("Rima","Sanjita");
//repeat
// let str="mango"
// console.log(str.repeat(str))
 //objects
//  let obj=[
//     {
//         name:"Rimu",
//         roll:78
//     },
//     {

//         name:"Sanju",
//         roll:67
//     },
//     {

//         name:"Sahu",
//         roll:91
//     }
//  ]
//  console.log(obj[0].name)
// let str=['hi','Rimu','hagu']
// function conCat(str){
//     let sum=""
//     for (let i of str){
//         sum=sum+i
//     }
//     return sum;
// }
// console.log(conCat(str))
//higer order function if we pass the function in the arguments
// function multipleFunc(func , count){
//     for(let i=0;i<=count;i++)
//     {
//         func();
//     }
// }
// let greet=function()
// {
//     console.log("Hello");
// }
// multipleFunc(greet,10)

//higher order with return
// function evenOrOdd(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request=="even"){
//         return function(n){
//             console.log((n%2==0));
//         }
//     }
// }
// let request="odd"
// let func=evenOrOdd(request)
// func(6)


//method if we use function as a object's property
// const cal={
//     num:77,
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//         return a+b;
//     },
//     mul:function(a,b){
//         return a+b;
//     },
// }
// console.log(cal.add(45,89))
// let arr=[10,5,2,4,7];
// num=5
// function largeNum(arr,num){
//     let arr1=[];
//     for(let i of arr){
//         if(i>=num){
//             console.log(i)
//             arr1.push(i)
//         }
//     }
//     return arr1
// }
// let result=largeNum(arr,num)
// // console.log(result)
// const info={
//     name:"rimu",
//     roll:"78",
//     inh:function(a,b){
//         console.log(a+b);
//     },
// }
// console.log(info.inh(4,5))
// const cal={
//     var1:45,
//     var2:56,
//     add(){
//         return this.var1+this.var2
//     }
// }
// console.log("Hi Sanju hagu");
// try{
//     console.log(a)
// }
// catch(e){
//     console.log(e) 
// }
// console.log("Padu")
// let greet=()=>{
//     console.log("HI")
// };
// greet()
//arrow function with this
// let cal={
//     name:"Test",
//     Surname:"la la la",
//     getTest:function(){
//         console.log(this)
//         console.log(`${this.name} ${this.Surname}`);
//     },
//     getTst:()=>{
//         console.log(this)
//     }

// }
//arrow function uses parent scope and function object scope
// let greet={
//     name:"rima",
//     getInfo:function(){
//         setTimeout(()=>{
//             console.log(this)//object scope
//         },2000)

//     },
//     info:function(){
//         setTimeout(function(){
//             console.log(this)//window scope
//         },2000)
        
//     }

// }
// let num=[1,2,3,4,5]
// let double=num.map((el)=>{
//     return el*2
// })
// let num=[1,2,3,4,5]
// let cond=num.filter((el)=>{
//     return el>2
// // })
// let every_arr=[10,20,30,40,50]
// let max=every_arr.every((el)=>el % 10==0)
//reduce
// let arr=[10,20,30,60,50]
// let max=arr.reduce((res,el)=>{
//     console.log(el)
//     if(el>res){
        
//         return el
        
//     }
    
//     else{
    
//         return res
//     }
    
// })
//Qs1.Squareandsumthearrayelementsusingthearrowfunctionandthenfindtheaverageofthearray.
// let arr=[9,7,8,5,4]
// let square=arr.map((el)=>{
//     return el**2;
// })
// let add=arr.reduce((acc,el)=>{
//     return acc+el
// })
// let avg=add/arr.length
  
// const doubleFunction=(arr,...args)=>{
//     let newArr=args.map((el)=>{
//         return el**2
//     })
//     let mArr=[...arr,...newArr]
//     return mArr;
// }
// let b=doubleFunction([8,9,7],6,4,5,3,2)
// console.log(b)
//spread opt breaks the iterable obj to single elements
//rest opt confines multiple value in a single array so that array method can be used on it

// const a=
// {
//     name:"rima",
//     title:"das"
// }
// const b=
// {
//     roll:78
// }

// let mergeObject=(a,b)=>{
//     const newObj={...a,...b}
//     return newObj

// }
// console.log(mergeObject(a,b))

//call back hell
// let h1=document.querySelector("h1");
// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
        
//     h1.style.color=color;
//     if(nextColor){

//         nextColor()
//     }
//     },delay)

// }
// changeColor("red",1000,()=>{
//     changeColor("blue",1000)
// })

//----------------------------------------------------------------------promise chaining--------------------------------------------------------------
// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>
//             {
//             h1.style.color=color;
//             resolve("color changed");
//         }
//         ,delay);
//     });
// }

// changeColor("violet",1000)
// .then(()=>{
//     console.log("DOne1")
//     return changeColor("blue",1000)
// })
// .then(()=>{
//     console.log("DOne2")
//     return changeColor("green",1000)
// })
// .then(()=>{
//     console.log("DOne3")
//     return changeColor("orange",1000)
// })
// .then(()=>{
//     console.log("DOne4")
//     return changeColor("red",1000)
// })
// .then((result)=>{
//     console.log("DOne5",result)
// })

// .catch(()=>{
//     console.log("not done")
// })
// ----------------------------------------------------async await with reject handling-------------------------------------------------------

// let h1=document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{ 
//         let num=Math.floor(Math.random()*10)+1
//         if(num<3){
//             reject("not done!! some error found")
//         }
//         h1.style.color=color;
//         resolve("Done no error")
//         },delay)

//     })
// }
// async function demo(){
//     try{
//         await changeColor("red",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//         await changeColor("orange",1000);
//         await changeColor("violet",1000);
//         await changeColor("brown",1000);
//     }
//     catch(err){
//         console.log(err)
//     }
//     console.log("Extra work")
// }
// demo()
// ===================API==================
let url="https://api.potterdb.com/v1/characters";

// async function fetchData(){
//     let data1= await fetch(url);
//     console.log(data1)
//     let x= await data1.json();
//     y=x.data
//     console.log(y[2]["attributes"])
// }
// fetchData()


// async function fetching(){
//     try{
//         const config={
//             headers:{
//                 Accept:"application/json"
//             }
//         }
//     let data=await axios.get(url,config);
//     console.log(data)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
