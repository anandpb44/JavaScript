// let data=[{name:'Akhil',age:21},{name:'Deepu',age:22},{name:'Athul',age:22},{name:'Hakkeem',age:20},]
// console.log(data)

// let t=document.querySelector("tbody")
// for(i of data){

//     let tr=document.createElement("tr")
//     let td=document.createElement("td")
//     let td1=document.createElement("td")
//     td.innerHTML=i.name
//     tr.appendChild(td)
//     td1.innerHTML=i.age
//     tr.appendChild(td1)
//     t.appendChild(tr)
// }


let data=[{name:'Akhil',age:21},{name:'Deepu',age:22},{name:'Athul',age:22},{name:'Hakkeem',age:20},]
console.log(data)

let t=document.querySelector("tbody")
for(i of data){

    let tr=document.createElement("tr")
    tr.innerHTML=`
    <td>${i.name}</>
    <td>${i.age}</>
    `
    t.appendChild(tr)
}