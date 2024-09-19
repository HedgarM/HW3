let maxPasswordAttempts =3;
let numPasswordAttempts = 0;
const correctPassword = "secret";


while(numPasswordAttempts < maxPasswordAttempts)
{
  let password = prompt("Enter your password:")

  if(password === correctPassword)
  {
    console.log(`You entered the correct password after ${numPasswordAttempts} attempt(s)`)
    break
  }
  else
  {
    numPasswordAttempts ++;
  }
}

if(numPasswordAttempts === maxPasswordAttempts)
{
console.log(`Your account is locked!  You failed to enter the correct password ${numPasswordAttempts} times`)
}