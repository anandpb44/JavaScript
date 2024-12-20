let data=[{ id:'1',name:'anand',place:'palakkad'},{ id:'2',name:'deepu',place:'thr'},{ id:'3',name:'hakkeem',place:'thr'}]


document.getElementById("search").addEventListener("input",function(){
    const qry=this.value.toLowerCase()
    const result= data.filter((user)=>user.name.toLowerCase().includes(qry) || user.place.toLowerCase().includes(qry))
    console.log(result)
    display(result)
})

function display(d=data){
    let table=document.querySelector("tbody")
    table.innerHTML=``
    d.forEach((i)=>{
        let tr=document.createElement("tr")
        let id_td=document.createElement("td")
        id_td.innerHTML=i.id
        tr.appendChild(id_td)
        let name_td=document.createElement("td")
        name_td.innerHTML=i.name
        tr.appendChild(name_td)
        let place_td=document.createElement("td")
        place_td.innerHTML=i.place
        tr.appendChild(place_td)

        table.appendChild(tr)
    })
}
document.getElementById("add_form").addEventListener('submit',function(event){
    event.preventDefault()
    const id=parseInt(document.getElementById("no").value)
    const name=document.getElementById("name").value
    const place=document.getElementById("place").value
    data.push({id:id,name:name,place:place})

    document.getElementById("no").value=''
    document.getElementById("name").value=''
    document.getElementById("place").value=''

    display()
})

display()