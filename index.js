let inputUnit = document.getElementById("input-unit")
const convertBtn = document.getElementById("convert-btn")

let lengthUnits = document.getElementById("length-units")
let volumeUnits = document.getElementById("volume-units")
let massUnits = document.getElementById("mass-units")

convertBtn.addEventListener("click", function () {
    let inputUnit = document.getElementById("input-unit").value;
    console.log(`input value is ${inputUnit}`);
    console.log(typeof inputUnit);
    let userValue = Number(inputUnit)
    console.log(`input value is ${userValue}`);
    console.log(typeof userValue);

    // lengthUnits.textContent = `${userValue}*${Number(3.281)} meters = ${userValue} feet | ${userValue} feet = 6.096 meters`;


    function convertMtrToFt(num1, num2) {
        return num1 * num2;
    }
    function convertFtToMtr(num1, num2) {
        return num1 / num2;
    }
    // ========================================
    function convertLtrToGal(num1, num2) {
        return num1 * num2;
    }
    function convertGalToLtr(num1, num2) {
        return num1 / num2;
    }
    //=========================================
    function convertKgsToPnd(num1, num2) {
        return num1 * num2;
    }
    function convertPndToKgs(num1, num2) {
        return num1 / num2;
    }

    let mtf = convertMtrToFt(userValue, 3.28084)
    console.log(mtf);
    console.log(Math.floor(mtf * 1000) / 1000);
    // console.log(mtf.toFixed(3));
    

    let ftm = convertFtToMtr(userValue, 3.28084)
    console.log(ftm);
    console.log(Math.floor(ftm * 1000) / 1000);
// =================================================================
    let ltg = convertLtrToGal(userValue, 0.264172)
    console.log(ltg);
    console.log(Math.floor(ltg * 1000) / 1000);
    
    let gtl = convertGalToLtr(userValue, 0.264172)
    console.log(gtl);
    console.log(Math.floor(gtl * 1000) / 1000);

// ===================================================================
    let ktp = convertKgsToPnd(userValue, 2.20462)
    console.log(ktp);
    console.log(Math.floor(ktp * 1000) / 1000);
    
    let ptk = convertPndToKgs(userValue, 2.20462)
    console.log(ptk);
    console.log(Math.floor(ptk * 1000) / 1000);
    

    // volumeUnits.textContent = `${userValue} meters = 65.616 feet | ${userValue} feet = 6.096 meters`;
    // massUnits.textContent = `${userValue} meters = 65.616 feet | ${userValue} feet = 6.096 meters`;
    // console.log(lengthUnits.textContent);
    // console.log(volumeUnits.textContent);
    // console.log(massUnits.textContent);
    // 20 meters = 65.616 feet | 20 feet = 6.096 meters
    // 20 liters = 5.284 gallons | 20 gallons = 75.708 liters
    // 20 kilograms = 44.092 pounds | 20 pounds = 9.072 kilos

}
)

/*steps to solve
1. target the input value  --done
2. convert the text into number --done
3. multiple it with the given rules 

1 meter = 3.281feet
1 liter =0.264gallon
1 kilogram = 2.204 pound

1 meter = 3.28084 feet
1 liter = 0.264172 gallons
1 kilogram = 2.20462 pounds
4. display the new value back to p


*/
