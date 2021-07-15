var input,heading;


function setup() 
{
  createCanvas(300, 200);
  background("pink");

  input = createInput();
  input.position(5,60);
  
  heading = createElement("h4","Enter any Alphabet:");
  heading.position(5,20);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
const value = input.value();
switch (value){
  case `a`: console.log("vowel1");
  break;
  case `e`: console.log("vowel2");
  break;
  case `i`: console.log("vowel3");
  break;
  case `o`: console.log("vowel4");
  break;
  case `u`: console.log("vowel5");
  break;
  default:
    console.log("Please enter any character.");
}
  
}

