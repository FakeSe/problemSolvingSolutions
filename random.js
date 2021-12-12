// Create a function that return a random integer in a specefic range
// Example : 
// random(1, 5)  =>  2
// random(1, 5)  =>  3
// random(0, 0)  =>  0
// random(9, 9)  =>  9


function random(min, max) {
    return (!Number.isInteger(min) || !Number.isInteger(max)) ? false
            :  Math.floor(Math.random() * (max - min) + min)
}

const x = random(1,5)

console.assert(Number.isInteger(x), "result is not an integer")
console.assert(( x >= 1 && x <= 5), "result is not in range")
console.assert(random(0,0) === 0, "random is not working when the difference is 0")
console.assert(random(9,9) === 9, "random is not working when the difference is 0")

const y = random(15, 83)
console.assert(random(y,y) === y, "random is not working when the difference is 0")

console.assert(random(1.5, 5.9) === false, "random is accepting floats")

const languages = ["c", "c++", "c#", "js", "ts", "php", "python", "java"]

console.log(`The chosen language for this problem is: ${languages[random(0, 7)]}`)
