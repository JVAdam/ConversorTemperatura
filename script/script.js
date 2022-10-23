document.getElementById('convert').onclick = tempConvert;
document.getElementById('limpar').onclick= funcLimpar;

function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    var kelvin = document.getElementById("kelvin").value;
    var rankine = document.getElementById("rankine").value;

    if(isNaN(fahrenheit) || isNaN(celsius) || isNaN(kelvin) || isNaN(rankine)){
        alert("Digite um valor válido!");
        return;
    }
    else if(fahrenheit !== ''){
        celsius = (parseFloat(fahrenheit - 32)) / 1.8;
        kelvin = (parseFloat(fahrenheit) - 32) * 5/9 + 273.15;
        rankine = (parseFloat(fahrenheit) + 459.67);
    }
    else if(celsius !== ''){
        fahrenheit = (parseFloat(celsius) * 9/5) + 32;
        kelvin = (parseFloat(celsius) + 273.15);
        rankine = (parseFloat(celsius) * 9/5 + 491.67);

    }
    else if(kelvin !== ''){
        celsius = (parseFloat(kelvin) - 273.15);
        fahrenheit = (parseFloat(kelvin) - 273.15) * 9/5 + 32;
        rankine = (parseFloat(kelvin) - 273.15) * 1.8 + 491.67;

    }
    else if(rankine !== ''){
        celsius = (parseFloat(rankine) - 491.67) * 5/9;
        fahrenheit = (parseFloat(rankine) - 459.67);
        kelvin = (parseFloat(rankine) * 5/9);

    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
    document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(1);
    document.getElementById("rankine").value = parseFloat(rankine).toFixed(1);
}

function funcLimpar(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").value = "";
    document.getElementById("rankine").value = "";

}