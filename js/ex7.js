let hours = parseInt(prompt("Enter hours"))
let minutes = parseInt(prompt("Enter minutes"))
let seconds = parseInt(prompt("Enter seconds"))

if(hours <= 23 && minutes <= 59 && seconds <= 59)
{
  if(hours === 23 && minutes === 59 && seconds == 59)
  {
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    hours = 0;
    minutes = 0;
    seconds = 0;
    console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
  }
  else if(minutes === 59)
  {
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    hours++;
    minutes = 0;
    console.log(`One second later: ${hours}h${minutes}m${seconds}s`);

  }
  else if(seconds === 59)
  {
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    minutes++;
    seconds = 0;
    console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
  }
  else
  {
    console.log(`Time input: ${hours}h${minutes}m${seconds}s`);
    seconds++;
    console.log(`One second later: ${hours}h${minutes}m${seconds}s`);
  }
}
else
{
  console.log("Please enter valid input")
}