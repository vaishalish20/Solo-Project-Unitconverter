// let inputUnit = document.getElementById("input-unit")
const convertBtn = document.getElementById("convert-btn")

let lengthUnits = document.getElementById("length-units")
let volumeUnits = document.getElementById("volume-units")
let massUnits = document.getElementById("mass-units")

convertBtn.addEventListener("click", function () {
    const inputUnit = document.getElementById("input-unit").value;
    console.log(`input value is ${inputUnit} and is of ${typeof inputUnit}`);

    if (isNaN(inputUnit)) {
        console.log("true, not a number");
    } else {
        console.log("number string");
        const userValue = Number(inputUnit)
        console.log(`input value is ${userValue}`);
        console.log(typeof userValue);

    }





    // lengthUnits.textContent = `${userValue}*${Number(3.281)} meters = ${userValue} feet | ${userValue} feet = 6.096 meters`;
    // volumeUnits.textContent = `${userValue} meters = 65.616 feet | ${userValue} feet = 6.096 meters`;
    // massUnits.textContent = `${userValue} meters = 65.616 feet | ${userValue} feet = 6.096 meters`;

    // 20 meters = 65.616 feet | 
    // 20 feet = 6.096 meters

    // 20 liters = 5.284 gallons | 
    // 20 gallons = 75.708 liters

    // 20 kilograms = 44.092 pounds | 
    // 20 pounds = 9.072 kilos

}
)



/*


steps to solve:

1. target the input value  --done
    first check the input value is a valid number, 
2. convert the text into number --done
3. multiple it with the given rules 

1 meter = 3.281feet
1 liter = 0.264gallon
1 kilogram = 2.204 pound

1 meter = 3.28084 feet
1 liter = 0.264172 gallons
1 kilogram = 2.20462 pounds
4. display the new value back to p


*/
