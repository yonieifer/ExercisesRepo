export function isEven(n) {return n % 2 === 0}

export function max(a, b) {return Math.max(a, b)}

export function average(numbers) {
    if (numbers.length === 0) return 0
    return numbers.reduce((total, curr) => total + curr, 0) / numbers.length
}

export function toTitleCase(str) {
    if (!str) return ""
    const titleCaseArr = str.split(" ").map(w => w[0].toUpperCase() + w.slice(1))
    const titleCaseStr = titleCaseArr.join(" ")
    return titleCaseStr
}

export function filterEven(numbers) {return numbers.filter(num => num % 2 === 0)}

console.log(toTitleCase("hello world"));
