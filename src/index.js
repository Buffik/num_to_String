function toReadable(num) {
    let result = ""
    let hundred = Math.floor(num / 100);
    let decimal = String(num).length < 3 ?  Math.floor(num / 10) * 10 : Math.floor(num / 100) * 10;
    let unit = num % 10;
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    if (num <= 20 || (num < 100 && num % 10 === 0)) {
        result = numbers[num];
    } else if (String(num).length === 2 && num % 10 !== 0) {
        result = `${numbers[decimal]} ${numbers[unit]}`;
    } else if (String(num).length === 3) {
        result = `${numbers[hundred]} hundred ${numbers[decimal]} ${unit === 0 ? "" : numbers[unit]}`
    }



    return result
}
