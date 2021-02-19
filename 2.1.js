function sumTwoSmallestNumbers(numbers) {
    let result = numbers.sort((a, b) => a - b)
        .slice(0, 2);

    var sum = 0;
    for (i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
const numbers = [19, 54, 4442, 255, 7];

console.log(sumTwoSmallestNumbers(numbers))