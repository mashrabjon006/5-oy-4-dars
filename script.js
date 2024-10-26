const obj = {
    name: "Alice",
    age: 28,
    country: "Uzbekistan",
    [Symbol("id")]: 123456789
  }
  
  const a = Object.keys(obj)
  console.log( a)
  
  const b = Object.c(obj)
  console.log(b)
  
  const d = obj[b[0]]
  console.log( d)
  
2. 
function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}

console.log(factorial(5))
3.
function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(5)); // 5

class Car {
  constructor(model, year, color) {
    this.model = model
    this.year = year
    this.color = color
  }
}

const myCar = new Car("Toyota", 2022, "Red")
console.log(myCar)
// 2.
class raste {
  constructor(length, width) {
    this.length = length
    this.width = width
  }
  
  b() {
    return this.length * this.width
  }
}

const myrasta = new raste(10, 5)
console.log(myrasta.b())
// 1. charAt


const str = "Hello, World!"
const char = str.charAt(4)
console.log(char)

const lastChar = str.charAt(str.length - 1)
console.log(lastChar)

for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i))
}
// 2. charCodeAt

const a = str.charCodeAt(1)
console.log(a)

const b = []
for (let i = 0; i < str.length; i++) {
  b.push(str.charCodeAt(i))
}
console.log(b)

function abs(str, index) {
  return [str.charCodeAt(index), str.charCodeAt(index + 1), str.charCodeAt(index + 2)]
}

console.log(abs(str, 2))

// 3. at
const str = "Hello, World!"
console.log(str.at(7))
console.log(str.at(-1))
console.log(str.at(-5))

// 4. slice
const text = "mkfdvnkjdf jfkvnldfk lkdfjnvkf"
console.log(text.slice(4, 10))
console.log(text.slice(0, 3))
console.log(text.slice(-5))

// 5. substring
const example = "klfokckjenkj kjdcnkn"
console.log(example.substring(6, 10))
console.log(example.substring(0, 4))
console.log(example.substring(5))

// 6. substr
const po = "Madincjsnoilsadklr"
console.log(po.substr(8, 3))
console.log(po.substr(4, 5))
console.log(po.substr(-4))

// 7. trim, trimStart, trimEnd
const ind = "   Hello, World!   "
console.log(ind.trim())
console.log(ind.trimStart())
console.log(ind.trimEnd())

// 8. padEnd, padStart
const word = "Hi"
console.log(word.padEnd(10, "!"))
console.log(word.padStart(15, "*"))
console.log("12345".padStart(8, "0"))

// 9. repeat

// 10. replace

// 11. replaceAll

// 12. split
const a = "apple,banana,orange"
console.log(a.split(","))
console.log(a.split(""))
console.log("klfdm df,m vd m,d v".split(" "))

// 13. indexOf
const w = "Hello JavaScript"
console.log(w.indexOf("J"))
console.log(w.indexOf("Python"))
console.log(w.indexOf("a"))

// 14. lastIndexOf
const q = "Fejfnewioq[weqkiorpiertuiea"
console.log(q.lastIndexOf("t"))
console.log(q.lastIndexOf(" "))
console.log("Code2023".lastIndexOf("2"))

// 15. includes