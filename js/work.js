function calc(){
    let n=parseInt(document.getElementById("s").value)
    let n1=parseInt(document.getElementById("s1").value)

    if(n1>5){
        bouns=n*5/100
        res=document.getElementById("resu").innerHTML=bouns
    }
    else{
        res=document.getElementById("resu").innerHTML="No Bouns"
    }
}

function divi(){
    let n=parseInt(document.getElementById("i").value)
    const m=n%10

    if(m%3==0){
        result=document.getElementById("rs").innerHTML="Divisible"
        console.log("last digit",m)
        console.log(m%3)
    }
    else{
        result=document.getElementById("rs").innerHTML='Not'
    }
}

function bill(){
   let u=parseInt(document.getElementById("unit").value)
    

    if(u<=100){
        out=document.getElementById("res").innerHTML="No Charge"
    }

    else if(u<=200){
        p=(u-100)*5
        out=document.getElementById("res").innerHTML=p
    }
    else{
        p=(100*5)+((u-200)*10)
        out=document.getElementById("res").innerHTML=p
    }
}

function mou(){

   let city=document.getElementById("ci").value

//    const monuments={delhi:'redfort',agra:'Tajmahal',jaipur:'jal Mahal'}
//    const monument=monuments[city]
//    document.getElementById("cit").innerText='monuments:${monument}'

    if(city=="delhi"){
        r=document.getElementById("cit").innerHTML="Red fort"
    }
    else if(city=="agra"){
        r=document.getElementById("cit").innerHTML="Tajmahal"
    }
    else if(city=="jaipur"){
        r=document.getElementById("cit").innerHTML="jal Mahal"
    }
   
}