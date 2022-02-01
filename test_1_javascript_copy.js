
console.log('copy names')

let names = ['Harry', 'William']
let copyNames = names
copyNames[1] = 'Bill'
console.log(names)
console.log(copyNames)










































names = ['Harry', 'William']
let copyNames2 = [...names]
copyNames2[1] = 'Bill'
console.log(names)
console.log(copyNames2)
































let users = [{name: 'Harry', age: 25}, {name: 'William', age: 32}]

let copyUsers2 = [...users]

copyUsers2[1]['name'] = 'Bill'

console.log('copy attempt 2')
console.log(copyUsers2)
console.log(copyUsers1)
console.log(users)
console.log('')
console.log('')










