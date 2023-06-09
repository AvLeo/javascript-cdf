const { 
    bienvenida,
    calc,
    temp
} = require('../06.Funciones/ejercicios06.js')

describe('Bienvenida', function(){
    it('La función creada debe retornar el saludo de bienvenida', function(){
        expect(bienvenida("Leonardo", 'Avila')).toBe("Bienvenido Leonardo Avila")
        expect(bienvenida("Agustina", 'Correa')).toBe("Bienvenido Agustina Correa")
        expect(bienvenida("Lucas", 'Zarandon')).toBe("Bienvenido Lucas Zarandon")
    })
})
describe('Calc', function(){
    it('La funcion creada deberia actuar como calculadora', function(){
        expect(calc(1, "+", 2)).toEqual(3)
        expect(calc(2, "-", 1)).toEqual(1)
        expect(calc(2, "*", 2)).toEqual(4)
        expect(calc(2, "/", 2)).toEqual(1)
    })
})
describe('Calc', function(){
    it('La funcion creada deberia actuar como calculadora', function(){
        expect(temp(1, "+", 2)).toEqual(3)
        expect(temp(2, "-", 1)).toEqual(1)
        expect(temp(2, "*", 2)).toEqual(4)
        expect(temp(2, "/", 2)).toEqual(1)
    })
})