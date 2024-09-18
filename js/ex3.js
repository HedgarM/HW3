const inputLength = 3;

userInput = prompt("Please enter a day of the week in 3 letter abbreviation.");

let lowerUserInput = userInput.toLowerCase();

if(lowerUserInput.length === inputLength)  
{
  switch(lowerUserInput)
  {
    case "sun":
    console.log(`You entered: ${lowerUserInput}\nThe following day is mon.`);
  
    break;

    case "mon":
      console.log(`You entered: ${lowerUserInput}\nThe following day is tue.`);

      break;

    case "tue":
      console.log(`You entered: ${lowerUserInput}\nThe following day is wed.`)

      break;
  
      case "wed":
      console.log(`You entered: ${lowerUserInput}\nThe following day is thu.`)

      break;

      case "thu":
      console.log(`You entered: ${lowerUserInput}\nThe following day is fri.`)

      break;

      case "fri":
      console.log(`You entered: ${lowerUserInput}\nThe following day is sat.`)

      break;

      case "sat":
      console.log(`You entered: ${lowerUserInput}\nThe following day is sun.`)

      break;
  }
}
else
{

  console.log("Please enter a valid entry.")

}
