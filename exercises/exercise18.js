const numbers = [1, 2, 3, 4, 5, 6];

for (let number of numbers) {
    console.log(number);
}

// Foreach
numbers.forEach((number, index) => console.log(number, index));
