let inputUnit = document.getElementById("input-unit")
const convertBtn = document.getElementById("convert-btn")

let lengthUnits = document.getElementById("length-units")
let volumeUnits = document.getElementById("volume-units")
let massUnits = document.getElementById("mass-units")
const inputValue = Number(inputUnit.value);
convertBtn.addEventListener("click", function(){
    console.log(typeof inputValue + inputValue);
    console.log(lengthUnits.textContent);
    console.log(volumeUnits.textContent);
    console.log(massUnits.textContent);
    
}
)

