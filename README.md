# Credit Card Checker

A JavaScript program that checks whether credit card numbers are valid using the Luhn algorithm, finds the invalid ones in a batch, and identifies which card companies issued them.

Built as a Codecademy challenge project.

## What it does

`validateCred(array)`: returns `true` if a card number passes the Luhn check, `false` if it doesn't. The original array is never changed.

`findInvalidCards(nestedArray)`: checks a batch of cards and returns only the invalid ones.

`idInvalidCardCompanies(invalidBatch)`: returns a list of companies (Amex, Visa, Mastercard, Discover) that issued invalid cards, with no duplicates. Prints "Company not found" for unknown first digits.

`stringToArray(str)`: turns a card number string like `'4242 4242 4242 4242'` into an array of digits, skipping spaces and dashes.

## How the Luhn algorithm works

1. Start from the last digit (the check digit) and move left.
2. Double every other digit, starting with the one just left of the check digit. If the result is over 9, subtract 9.
3. Add up all the digits.
4. If the total divided by 10 has a remainder of 0, the number is valid.

## Run it

Requires [Node.js](https://nodejs.org).

```
node main.js
```

## Sample output

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

## Tech

JavaScript (ES6), Node.js
