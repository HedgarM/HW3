var userInput = prompt("Please enter a number between 1-100")

if (userInput >= 1 && userInput <= 100)
  {

    console.log(`Thank you! You entered ${userInput}, a valid number.`)

  }
  else
  {

    console.log(`Sorry, ${userInput} is not a valid entry.`)

  }