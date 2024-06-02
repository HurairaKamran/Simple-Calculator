import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { name: "firstnumber", type: "number", message: "Enter your first number:" },
  {
    name: "secondnumber",
    type: "number",
    message: "Enter your second number:",
  },
  {
    name: "operators",
    type: "list",
    message: "select the operator:",
    choices: ["Addition", "Subtraction", "Multiplacation", "Division"],
  },
]);

if (answer.operators ==="Addition"){
    console.log(answer.firstnumber+answer.secondnumber);
}else if(answer.operators ==="Subtraction"){
    console.log(answer.firstnumber-answer.secondnumber);
}else if(answer.operators ==="Multiplication"){
    console.log(answer.firstnumber*answer.secondnumber);
}else if(answer.operators ==="Division"){
    console.log(answer.firstnumber/answer.secondnumber);
}else{
    console.log("Enter correct operator")
}