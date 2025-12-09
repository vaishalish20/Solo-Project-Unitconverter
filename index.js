let inputUnit = document.getElementById("input-unit")
const convertBtn = document.getElementById("convert-btn")

let lengthUnits = document.getElementById("length-units")
let volumeUnits = document.getElementById("volume-units")
let massUnits = document.getElementById("mass-units")

convertBtn.addEventListener("click", function(){
    const userValue = document.getElementById("input-unit").value;
    console.log(`input value is ${userValue}`);
    lengthUnits.textContent = `${userValue} meters = ${userValue} feet | ${userValue} feet = 6.096 meters`;
    volumeUnits.textContent = `${userValue} meters = 65.616 feet | ${userValue} feet = 6.096 meters`;
    massUnits.textContent = `${userValue} meters = 65.616 feet | ${userValue} feet = 6.096 meters`;
    // console.log(lengthUnits.textContent);
    // console.log(volumeUnits.textContent);
    // console.log(massUnits.textContent);
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
// 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
// 20 kilograms = 44.092 pounds | 20 pounds = 9.072 kilos
 
}
)

