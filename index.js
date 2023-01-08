/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const input = document.querySelector(".middle")
const convert = document.querySelector(".bottom")
render(input.value)
convert.addEventListener("click",function(){
    if(input.value > 100000000000000000000000000001){
        input.value = 100000000000000000000000000001
    }
    if(input.value >=0){
    render(input.value)
    }
})

function render(parameter){
   document.querySelector(".format1").innerHTML = `<p> ${parameter} meters = ${(parameter*3.281).toFixed(3)} feet | ${parameter} feet = ${(parameter*0.3048).toFixed(3)} meters</p>`
   document.querySelector(".format2").innerHTML = `<p> ${parameter} liters = ${(parameter*0.264).toFixed(3)} gallons | ${parameter} gallons = ${(parameter*3.78541).toFixed(3)} liters</p>`
   document.querySelector(".format3").innerHTML = `<p> ${parameter} kilos = ${(parameter*2.204).toFixed(3)} pounds | ${parameter} pounds = ${(parameter*0.453592).toFixed(3)} kilos</p>`
}
