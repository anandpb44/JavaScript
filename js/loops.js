

// for(let i=0;i<=10;i++){
//     console.log(i)

// }

// let i=0
// while(i<=10){
//     console.log(i)
//     i++
// }

// let i=0
// do{
//    console.log(i)
//    i++

// }
// while(i<=10)

function odd(){
    n1=parseInt(document.getElementById("s").value)
    n2=parseInt(document.getElementById("s1").value)

    for(i=n1;i<=n2;i++){
        if(i%2!=0){
            console.log(i)
        }
    }
}

function even(){
    n1=parseInt(document.getElementById("s").value)
    n2=parseInt(document.getElementById("s1").value)

    for(i=n1;i<=n2;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}



let a="welcome"

for(i in a){
    console.log(a)
}