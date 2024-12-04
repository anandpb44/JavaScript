function mul_table(){
    s=parseInt(document.getElementById("n1").value)
    for(i=1;i<=10;i++){
        console.log(i,"x",s,'=',(i*s))
    }
}