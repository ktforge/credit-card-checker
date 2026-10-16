# Credit Card Checker

A Codecademy challenge project from the Full-Stack Engineer path. The setup: a credit card company needs to find out which card numbers in a batch are invalid and which companies issued them. I wrote the JavaScript to do that using the Luhn algorithm, the same checksum real card numbers use.

## What it does

`validateCred()` runs the Luhn check on a card number and returns true or false. It reads the digits from right to left without changing the original array.

`findInvalidCards()` goes through a batch of cards and returns only the ones that fail.

`idInvalidCardCompanies()` looks at the first digit of each bad card and returns the companies that issued them (3 is Amex, 4 is Visa, 5 is Mastercard, 6 is Discover), with no duplicates.

For the extension, I added `stringToArray()` so you can pass in a card number the way people actually type it, like `'4242 4242 4242 4242'` or with dashes, instead of an array of digits. I tested it with public test card numbers from each company, plus one with a typo to make sure it fails.

## How the Luhn check works

Starting from the last digit and moving left, double every second digit. If doubling gives you something over 9, subtract 9. Add everything up. If the total ends in 0, the number is valid.

## Running it

You'll need [Node.js](https://nodejs.org/). Then:

```bash
node main.js
```

Output:

```
valid1: true
valid3: true
invalid1: false
invalid3: false
Invalid count: 8
[ 'Visa', 'Mastercard', 'Amex (American Express)', 'Discover' ]
Visa: true
Mastercard: true
Amex: true
Discover: true
Typo: false
```

Built by DeVante Bush
