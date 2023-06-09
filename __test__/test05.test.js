const {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales
} = require('../05.Arrays/ejercicios05')

describe('primerElemento', function(){
    it('Deberia retornar primer elemento del array', function (){
        expect(primerElemento(['uno','dos','tres'])).toBe('uno')
        expect(primerElemento(['hola','mundo','!'])).toBe('hola')
        expect(primerElemento([39, 29, 99])).toBe(39)
    });
});
describe('ultimoElemento', function(){
    it('Deberia retornar ultimo elemento del array', function (){
        expect(ultimoElemento(['uno','dos','tres'])).toBe('tres')
        expect(ultimoElemento(['hola','mundo','!'])).toBe('!')
        expect(ultimoElemento([39, 29, 99])).toBe(99)
    });
});
describe('nuevoArray', function(){
    it('Deberia retornar longitud del array', function (){
        expect(nuevoArray(['uno','dos','tres'])).toBe(3)
    });
});
describe('changeArray', function(){
    it('Deberia retornar los cambios en el array', function (){
        expect(changeArray(['hola', 'mundo', '!'])).toEqual(['Aprendiendo', 'mundo', 'array'])
    });
});
describe('primerasCondicionales', function(){
    it('Deberia retornar los cambios en el array', function (){
        expect(primerasCondicionales([39, 29, 99])).toBe('Este array es igual a 3')
        expect(primerasCondicionales(["h", "o", "l", "a"])).toBe('Este array es mayor a 3')
        expect(primerasCondicionales(["hola", "mundo"])).toBe('Este array es menor a 3')
        expect(primerasCondicionales([])).toBe('Este array no contiene elementos')
    });
});
describe('sumandoEnUno', function(){
    it('Deberia retornar los cambios en el array', function (){
        expect(sumandoEnUno([39, 29, 99])).toEqual([40, 30, 100])
        expect(sumandoEnUno([43, 323, 999])).toEqual([44, 324, 1000])
        expect(sumandoEnUno([66, 102, 332])).toEqual([67, 103, 333])
    });
});