module.exports = function toReadable (number) {
  if (number < 20) {
    return getReadableFirstOrder(number);
  }
  if (number < 100) {
    let remainder = number - Math.floor(number/10) * 10;
    let restOfReadable = (remainder) ? ` ${getReadableFirstOrder(remainder)}` : "";
    return getReadableSecondOrder( Math.floor(number/10) ) + restOfReadable;
  }
  let remainder = number - Math.floor(number/100) * 100;
  let restOfReadable = remainder ? ` ${toReadable(remainder)}` : "";
  return getReadableFirstOrder( Math.floor(number/100) ) + " hundred" + restOfReadable;
}

function getReadableFirstOrder(number) {
  switch(number) {
    case 0: return "zero";
    case 1: return "one";
    case 2: return "two";
    case 3: return "three";
    case 4: return "four";
    case 5: return "five";
    case 6: return "six";
    case 7: return "seven";
    case 8: return "eight";
    case 9: return "nine";
    case 10: return "ten";
    case 11: return "eleven";
    case 12: return "twelve";
    case 13: return "thirteen";
    case 14: return "fourteen";
    case 15: return "fifteen";
    case 16: return "sixteen";
    case 17: return "seventeen";
    case 18: return "eighteen";
    case 19: return "nineteen";
  }
}

function getReadableSecondOrder(number) {
  switch(number) {
    case 2: return "twenty";
    case 3: return "thirty";
    case 4: return "forty";
    case 5: return "fifty";
    case 6: return "sixty";
    case 7: return "seventy";
    case 8: return "eighty";
    case 9: return "ninety";
  }
}