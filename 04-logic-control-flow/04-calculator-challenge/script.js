
function calculator(num1, num2, sign) {
    
    if (!Number.isInteger(num1) || !Number.isInteger(num2))
        return console.log("num1 and num2 must be integers");

    if (sign == '+')
        console.log(num1 + num2);
    else if (sign == '-')
        console.log(num1 - num2);
    else if (sign == '*')
        console.log(num1 * num2);
    else if  (sign == '/')
        console.log(num1 / num2);
    else
        console.log("Not a valid simbol");
}

calculator(5, 4, "-");

// function calculator(num1, num2, operator) {
//   let result;

//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = 'Invalid Operator';
//   }

//   console.log(result);
//   return result;
// }

// calculator(5, 2, '&');