// 1. Переменные

// let name = 'Rustam' // string
// let lastName = 'Arifulin' // string
// const age = 32 // number
// const isProgrammer = true // boolean

// 2. Мутирование

// console.log('Your name: ' + name + ', and your age ' + age)
// const lastName = prompt('Enter your last name')
// alert (name + ' ' + lastName)

// 3. Операторы

// let currentYear = 2021
// const birthYear = 1988
//const age = currentYear - birthYear
// console.log(age)
// const a = 10
// const b = 5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(currentYear++) // =2021 // console.log(++currentYear) // = 2022
// console.log(currentYear) // = 2022
// let c = 32
// c = c + a
// c +=a  // тоже самое

// 4. Типы данных

// const isProgrammer = true
// const name = 'Rustam'
// const age = 32
// let x 
// null
// console.log(typeof isProgrammer)  // boolean
// console.log(typeof name)  // string
// console.log(typeof age)  // number
// console.log(typeof x)  // undefined
// console.log(null)  // null

// 5. Приоритет операторов

// const fullAge = 32
// const currentYear = 2021
// const birthYear = 1988
// < > <= >=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log (isFullAge)

// 6. Условные операторы

// const courseStatus = 'pending' // ready / fail / panding
//  if (courseStatus === 'ready') {
//   console.log('Course is ready')
//  }

//  if (courseStatus === 'pending') {
//    console.log('Course is panding')
//   }
// if (courseStatus === 'ready') {
//     console.log('Course is ready')
// } else if (courseStatus === 'pending') {
//     console.log('Course is panding')
// } else {
//     console.log('Something wrong')
// }

// const num1 = 42
// const num2 = '42'
// console.log(num1 == num2) // true так как двойное равно НЕ сравнивает типы данных
// console.log(num1 === num2) // false так как тройное равно сравнивает типы данных и тут они разные

// const isReady = true
// if (isReady === true) {
//     console.log('All is ready')  // можно сократить
// }

// if (isReady) {
//     console.log('All is ready')
// } else {
//     console.log('All is not ready')
// }

// isReady ? console.log('All is ready') : console.log('All is not ready') // совсем короткая версия (Тернарное выражение)

// 7. Булевая логика

// a1 = true  && true      // t && t вернёт true
// a2 = true  && false     // t && f вернёт false
// a3 = false && true      // f && t вернёт false
// a4 = false && (3 == 4)  // f && f вернёт false

// o1 = true  || true       // t || t вернёт true
// o2 = false || true       // f || t вернёт true
// o3 = true  || false      // t || f вернёт true
// o4 = false || (3 == 4)   // f || f вернёт false

// n1 = !true              // !t вернёт false
// n2 = !false             // !f вернёт true

// 8. Функции

// function calculateAge(year) {
//     return 2021 - year
// }

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
// if (age > 0) {
//     console.log('People whos name is ' + name + ' has age ' + age)
// } else {
//     console.log('It is wrong age')
// }
// }

// logInfoAbout('Rustam', 1988)

// 9. Массивы
// const cars = ['Mercedes', 'Mazda', 'Ford']
// console.log(cars [1])
// console.log(cars.length)
// cars[0]= 'Porsche'
// cars[3] = 'Mercedes'
// cars[cars.length] = 'Volvo'
// console.log(cars)

// 10. Циклы

// const cars = ['Mercedes', 'Mazda', 'Ford']
// for (let car of cars) {
//     console.log(car)
// }

// 11. Объекты

// const person = {
//     firstName: 'Rustam',
//     lastName: 'Arifulin',
//     year: 1988,
//     langueges: ['Ru', 'En'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }

// console.log(person.firstName)
// console.log(person['lastName'])
// person.greet()

// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)