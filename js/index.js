// const a=1
// const b="10"
// const c=true
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)

// let a

// console.log(a)
// console.log( typeof a)

// let a=20
// let b=10

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
// console.log(a**b)

// let a=10
// a++
// a--
// --a
// ++a
// console.log(a);

// let a=10
// a+=10
// a-=4
// a*=10
// a/=3
// a%=3
// a**=2
// console.log(a)

// console.log(5==5)
// console.log(5=="5")
// console.log(5!="5")
// console.log(5==="5")
// console.log(5!=="5")

// console.log(5>4)
// console.log(5<4)
// console.log(5>=4)
// console.log(5<=4)

// console.log(10==10 && 2==2)
// console.log(10==10 && 3==2)
// console.log(10==10 || 2==2)
// console.log(10==10 || 3==2)


// -----------function------------

// function demo(){
//     console.log("its  a   demo")
// }


// demo()

function add(){
   let a=parseInt(document.getElementById("n1").value)
   let b=parseInt(document.getElementById("n2").value)
    result=document.getElementById("res").innerHTML=a+b
    console.log(a+b)
}

function sub(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
     result=document.getElementById("res").innerHTML=a-b
     console.log(a-b)
 }

 function div(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
     result=document.getElementById("res").innerHTML=a/b
     console.log(a/b)
 }

 function mul(){
    let a=parseInt(document.getElementById("n1").value)
    let b=parseInt(document.getElementById("n2").value)
     result=document.getElementById("res").innerHTML=a*b
     console.log(a*b)
 }
