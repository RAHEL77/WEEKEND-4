function centuryFromYear(year) {
    var x = Math.floor(year / 100) + 1;
    return x;
}

console.log(centuryFromYear(1972))