var animal = "lion";

//cat, dog, fish - this is a pet animal
//rhino, tiger - this is  zoo animal
// bear , fox - this is wild animal
switch (animal) {
  case "cat":
  case "dog":
  case "fish":
    console.log("this is a pet animal");
    break;

  case "rhino":
  case "tiger":
    console.log("this is a zoo animal");
    break;

  case "bear":
  case "fox":
    console.log("this is wild animal");
    break;

  default:
    console.log("not relevant");
}
