// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollarValue) => {
    //tiene que entrar dolares y darme valor en yenes
    return dollarValue * 127.9;

}

const fromEuroToDollar = (euroValue)=>{
    return euroValue * 1.2;
}

const fromYanToPound = (yanValue) =>{
    var valor = yanValue * 0.8;
    return parseInt(valor);
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound };