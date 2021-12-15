// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromYanToPound, fromEuroToDollar } = require('./app.js');


// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test('si multiplico 1.2 * 127.9 es igual a 153.48', () => { 
    let total = fromDollarToYen(1.2);
    expect(total).toBe(153.48);
})

test('si multiplico 1.2 * 1.2 es igual a 1.44', () => {
    let total = fromEuroToDollar(1.2);
    expect(total).toBe(1.44);
})

test('si multiplico 127.9 * 0.8 es igual a 102', () => {
    let total = fromYanToPound(127.9);
    expect(total).toBe(102);
})
