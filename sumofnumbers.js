const testNumbers = [1, 2, 3, 5];

function sumFor(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sumFor(testNumbers));

const sumWhile = (numbers) => {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testNumbers));

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

console.log(sumRecursion(testNumbers));

// eslint-disable-next-line no-undef
const sumTheSimpleWay = (numbers) => _.reduce(numbers, function (memo, num) { return memo + num; }, 0);

console.log(sumTheSimpleWay(testNumbers));