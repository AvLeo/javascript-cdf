const {
    crearGato,
    invocarMetodo,
    eliminarPropiedad,
    tieneEmail,
    verificarPassword,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
} = require('../07.Objetos/ejercicios07.js')

describe('crearGato(nombre, edad)', function() {
    it('should create a new cat with the nombre and edad properties set', function() {
      expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
      expect(crearGato('Snowball', 1).edad).toBe(1);
      expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
      expect(crearGato('Snowball II', 5).edad).toBe(5);
    });
    it('should add a method called meow to the new cat object', function() {
      expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
    });
});
  
describe('invocarMetodo(object, method)', function() {
    it('should invoke the method on the object', function() {
      const object = {
        x: 0,
        incrementX: function() {
          this.x++;
        },
      }
      invocarMetodo(object, 'incrementX');
      expect(object.x).toBe(1);
    });
});
  
describe('eliminarPropiedad(object, property)', function() {
    it('should delete the property from the object', function() {
      const updatedObject = {
        x: 1,
        y: 2,
      };
      const object = {
        x: 1,
        y: 2,
        z: null,
      };
      expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
    });
});
  
describe('tieneEmail(user)', function() {
    it('should return true if the user object has a value for its email property', function() {
      expect(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })).toEqual(true);
      expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
      expect(tieneEmail({ usernombre: 'Antonio' })).toEqual(false);
    });
});
  
describe('verificarPassword(user, password)', function() {
    it('should return true if passwords match', function() {
      const user = {
        password: 'Me encanta JS!',
      };
      const password = 'Me encanta JS!';
      expect(verificarPassword(user, password)).toBe(true);
    });
    it('should return false if passwords do not match', function() {
      const user = {
        password: 'Me encanta JS!',
      };
      const password = 'Hacker time!';
      expect(verificarPassword(user, password)).toBe(false);
    });
}); 
  
describe('pasarUsuarioAPremium(users)', function() {
    it('should return the users array with each user\'s esPremium property set to true', function() {
      const users = [
        { esPremium: false },
        { esPremium: false },
        { esPremium: false },
        { esPremium: false },
        { esPremium: false },
      ];
      const updatedUsers = [
        { esPremium: true },
        { esPremium: true },
        { esPremium: true },
        { esPremium: true },
        { esPremium: true },
      ];
      expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
    });
});
  
describe('sumarLikesDeUsuario(user)', function() {
    it('should return the sum of likes for all user posts', function() {
      const user = {
        usernombre: 'Jhon Doe',
        password: 'JavaScript es genial!',
        posts: [
          {
            id: '1',
            title: 'Aventuras en JS!',
            likes: 10
          },
          {
            id: '2',
            title: 'Soy Henry!',
            likes: 100
          },
          {
            id: '3',
            title: 'Qué es un JavaScript?',
            likes: 35
          },
          {
            id: '4',
            title: 'JS Objects for Dummies',
            likes: 42
          },
          {
            id: '5',
            title: 'Educación online',
            likes: 99
          },
        ],
      };
      expect(sumarLikesDeUsuario(user)).toBe(286);
    });
});

describe('datosObj', function(){
  it('Deberia retornar bienvenida con datos del obj', function (){
      expect(datosObj({nombre: 'Leonardo', apellido: 'Avila'})).toBe('Bienvenido Leonardo Avila')
      expect(datosObj({nombre: 'Pablo', apellido: 'Perez'})).toEqual('Bienvenido Pablo Perez')
      expect(datosObj({nombre: 'David', apellido: 'Cortez'})).toEqual('Bienvenido David Cortez')
  });
});
describe('cambiandoPropiedades', function(){
  it('Deberia retornar los cambios en el obj', function (){
      expect(cambiandoPropiedades({nombre: 'Leonardo', apellido: 'Avila'})).toEqual({nombre: 'Leonardo', apellido: 'Avila', nacionalidad: 'Argentina'})
      expect(cambiandoPropiedades({nombre: 'Pablo', apellido: 'Perez'})).toEqual({nombre: 'Pablo', apellido: 'Perez', nacionalidad: 'Argentina'})
      expect(cambiandoPropiedades({nombre: 'David', apellido: 'Cortez'})).toEqual({nombre: 'David', apellido: 'Cortez', nacionalidad: 'Argentina'})
  });
});
