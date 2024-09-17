let userInput = prompt("Please enter how many credits you've earned.");
let userName = prompt("Please enter your name.");

if(userInput < 0 || Number(userInput) % 1 !==0)
{

  console.log("Please enter a valid whole number.")

}
else if(userInput >= 0 && userInput <= 30)
{

console.log(`Hello ${userName} \n Your grade standing is Freshman.`)

}
else if(userInput >= 31 && userInput <= 60)
{

  console.log(`Hello ${userName} \n Your grade standing is Sophomore.`)
    
}
else if(userInput >= 61 && userInput <= 90)
{
  
  console.log(`Hello ${userName} \n Your grade standing is Junior.`)
      
}
else
{
    
    console.log(`Hello ${userName} \n Your grade standing is Senior.`)
        
}