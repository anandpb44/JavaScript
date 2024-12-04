function rev(){
    st=document.getElementById("str").value

    n=''
    for(let i=st.length-1;i>=0;i--){
        n+=st[i]
    }
    console.log(n)
}