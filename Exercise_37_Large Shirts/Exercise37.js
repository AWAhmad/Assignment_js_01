//****ABDUL WAHEED****//            //****04/10/2022****//

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love JavaScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.

//Q37
console.log("***Q37***");
//large Sizes
function largeShirt(size = 44, message = "I Love JavaScript") {
  console.log(
    "Shirt size is " +
      size +
      ". Text '" +
      message +
      "' will makes the short looks good" //random text
  );
}
//Medium sizes
function mediumShirt(size = 40, message = "I Love JavaScript") {
  console.log(
    "Shirt size is " +
      size +
      ". Text '" +
      message +
      "' will makes the short looks good" //random text
  );
}

//function calling with BOTH default parameters
console.log("___BOTH default parameters");
largeShirt();
mediumShirt();

//function calling with ONE default parameter, and other is custom
console.log("___ONE default parameters");
largeShirt(42); //message is default
mediumShirt(" :(Programmer): "); //size is default

//function calling with both Custom parameters
console.log("___BOTH custom parameters");
largeShirt(43, "I Love Programming");
mediumShirt(40, 'console.log("Hello World")');
