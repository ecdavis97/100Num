//this function is "global" to the entire document//
function getNumbers() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse our numbers//
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {

    let numbers = generateNumbers(startValue,endValue);
    
    displayValues(numbers);
    
  } else {
    Swal.fire({
      backdrop: false,
      title: "Oops!",
      text: "You can only enter numbers",
    });
  }
}

//generate a list of numbers
//our business logic, or what we are trying to accomplish
function generateNumbers(start,stop){
  let numbers = [];

  for (let i = start; i <= stop; i++) {
    numbers.push(i);    
  }

  return numbers;
}



//display the list of numbers
//view functions
//this should BOLD and RED the even numbers
//BLUE AND ITALICS the odds 
function displayValues(numArray){
  //my template
  //<div class="col">1</div>
    //we need to get our results area
    let results = document.getElementById("results")
    results.innerHTML = "";


  for (let index = 0; index < numArray.length; index++) {
    

    ///create a div tag
    let div = document.createElement("div");
    //gets the value of the array at the current index
   let currentNumber = numArray[index];

    div.innerHTML = numArray[index];
    ///add a class
    div.classList.add("col");

    if(currentNumber % 2 == 0){
      div.classList.add("odd");
    }else{
      div.classList.add("even");
    }

    // if current number is odd
    // div.classList.add("odd");

    // "else" if number is even
    // div.classList.add("even")


    ///append to the page
    results.appendChild(div);
  }

}

//an array is a limited list of elements. it also has an INDEX.
//the first list item in an array is ALWAYS 0