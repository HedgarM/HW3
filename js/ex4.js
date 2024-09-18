let num1 = parseInt(prompt("Please enter a number"));
let num2 = parseInt(prompt("Please enter another number"));

let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;



if(!isNaN(num1) && !isNaN(num2))
{
  console.log(`${num1} + ${num2} = ${addition}`)
  console.log(`${num1} - ${num2} = ${subtraction}`)
  console.log(`${num1} * ${num2} = ${multiplication}`)
  console.log(`${num1} / ${num2} = ${division}`)
  console.log(`${num1} % ${num2} = ${modulo}`)
}
else
{
  console.log("Please enter a valid entry.")
}