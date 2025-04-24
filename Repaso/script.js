








console.log("hello");
console.error("erros");

let age = 18

if(age >= 18){
    alert("enough age to get the drive license")
}else if(age > 80){
    alert("too many years to drive")
}else{
    alert("not enough age to get the drive license")
}


switch(age){
    case 18:
        alert("18 age years old")
    default:
        alert("no 18 age years old")
}




function suma (a,b){
    return a+b;
}


let maxStudentA = 15;
let currentNumberA = 10;

function checkCurrentStudentNumber(currentNumber,maxStudentNumber){

    if(checkCurrentStudentNumber > maxStudentNumber){
        alert("Class Complete!")
        return false
    }else{
        alert("Class with space left")
        return true
    }
}

checkCurrentStudentNumber(10,15);

    

let currentNumberB = 0;
let buttonIncreaseB = document.getElementById("studentNumber");

buttonIncrease.addEventListener("click", function() {
    if(checkCurrentStudentNumber(currentNumber,7))
    currentNumberB++;
    maxStudentNumber.innerText = currentNumberB;

})




for(var i=0; i<5; i++){
    alert("Iteracion "+ 1)
}


let fps = ["Daw","Dam", "Smr", "Asir"];

let orferListEl = document.getElementById("order_list");
for(var i=0; i<fps.length; i++){
    let li = document.createElement("li")
    li.innerText = fps[i];
    orderListEl.appendChild(li);
}


fps.forEach(item => {
    let li = document.createElement("li");
    li.innerText = fps[i];
    orderListEl.appendChild(li);
})


objects,array.forEach(item => {
    
});


//String
let fps = ["Daw","Dam", "Smr", "Asir"];
//integer
let int = ["Daw","Dam", "Smr", "Asir"];
//objects
let objects = [
    {
        "name":"Daw",
        "level":"Superior",
        "modulos":[{
            "name": "LGMSI",
            "curso": "Primero"
        }]
    }, //daw
    {
        "name":"Dam",
        "level":"Superior",
    }, //dam
    {
        "name":"Smr",
        "level": "Superior"
    }, //smr
    {
        "name":"Asir",
        "level": "Medio"
    } //asir
]

