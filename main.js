// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [
  valid1,
  valid2,
  valid3,
  valid4,
  valid5,
  invalid1,
  invalid2,
  invalid3,
  invalid4,
  invalid5,
  mystery1,
  mystery2,
  mystery3,
  mystery4,
  mystery5,
];

// Add your functions below:

// luhn check: true if the card number is valid
const validateCred = (array) => {
  let sum = 0;
  let stepsFromRight = 0;

  for (let i = array.length - 1; i >= 0; i--) {
    let digit = array[i];

    // every second digit from the right gets doubled
    if (stepsFromRight % 2 === 1) {
      digit *= 2;
      // same as adding the two digits together
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    stepsFromRight++;
  }
  return sum % 10 === 0;
};

// pulls out every card that fails the check
const findInvalidCards = (nestedArray) => {
  const invalidCards = [];

  for (let i = 0; i < nestedArray.length; i++) {
    const card = nestedArray[i];

    if (!validateCred(card)) {
      invalidCards.push(card);
    }
  }
  return invalidCards;
};

// first digit tells you the company, each one only listed once
const idInvalidCardCompanies = (invalidBatch) => {
  const companies = [];

  for (let i = 0; i < invalidBatch.length; i++) {
    let company;

    switch (invalidBatch[i][0]) {
      case 3:
        company = "Amex (American Express)";
        break;
      case 4:
        company = "Visa";
        break;
      case 5:
        company = "Mastercard";
        break;
      case 6:
        company = "Discover";
        break;
      default:
        console.log("Company not found");
    }
    if (company && !companies.includes(company)) {
      companies.push(company);
    }
  }
  return companies;
};

// extension: turns a string like '4242 4242 4242 4242' into an array of digits, skipping spaces and dashes
const stringToArray = (str) => {
  const digits = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= "0" && char <= "9") {
      digits.push(Number(char));
    }
  }
  return digits;
};

// task 3 tests
console.log("valid1:", validateCred(valid1)); // true
console.log("valid3:", validateCred(valid3)); // true (15 digits)
console.log("invalid1:", validateCred(invalid1)); // false
console.log("invalid3:", validateCred(invalid3)); // false

// task 4 tests
const invalidCards = findInvalidCards(batch);
console.log("Invalid count:", invalidCards.length); // 8
console.log(invalidCards);

// task 5 tests
console.log(idInvalidCardCompanies(invalidCards));

// extension tests with public test card numbers
console.log("Visa:", validateCred(stringToArray("4242 4242 4242 4242"))); // true
console.log("Mastercard:", validateCred(stringToArray("5555-5555-5555-4444"))); // true
console.log("Amex:", validateCred(stringToArray("378282246310005"))); // true
console.log("Discover:", validateCred(stringToArray("6011111111111117"))); // true
console.log("Typo:", validateCred(stringToArray("4242424242424241"))); // false
