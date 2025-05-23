//4.1 Dado el siguiente array, devuelve un array con sus nombres
//utilizando .map().

const users = [
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const names = users.map((user) => user.name)
console.log(names)

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const usuarios = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]
const usuarios2 = usuarios.map((usuario) => {
  if (usuario.name[0] === 'A') {
    return 'Anacleto'
  } else {
    return usuario.name
  }
})
console.log(usuarios2)

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string ' (Visitado)' cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]

const listaCiudades = cities.map((ciudad) => {
  if (ciudad.isVisited === true) {
    return ciudad.name + '(Visitado)'
  } else {
    return ciudad.name
  }
})
console.log(listaCiudades)
