let kelvin = prompt("Enter kelvin : ").trim();

if (kelvin === '') {
    console.log("Input shouldn't be empty!");
} else if (isNaN(kelvin) || !Number.isInteger(Number(kelvin))) {
    console.log("Input should be an integer!");
} else if (kelvin < 0) {
    console.log("kelvin shouldn't be negative!");
} else {
    kelvin = Number(kelvin);
    let celsius = kelvin - 273.15;
    let fahrenheit = celsius * (9/5) + 32 ;
    let newton = celsius * (33/100);
    
    console.log(`Celsius    : ${celsius.toFixed(2)}`);
    console.log(`Fahrenheit : ${fahrenheit.toFixed(2)}`);
    console.log(`Newton     : ${newton.toFixed(2)}`);
}

/*

                             Boneng's long lost solution


            ||              Celsius = Kelvin - 273.15                 ||
                       
            ||              Fahrenheit = Celsius × (9/5) + 32         ||

            ||              Newton = Celsius × (33/100)               ||


*/
