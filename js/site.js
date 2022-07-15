//this function is "global" to the entire document//
function getNumbers() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse our numbers//
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);
  let outNumber = 0;

  if (Number.isInterger(startValue) && Number.isInteger(endValue)) {

    for (let i = startValue; i <= endValue; i++) {
        
        outNumber = (outNumber + i);
        
    }

    document.getElementById("results").innerHTML = outNumber;
    
  } else {
    alert('Please enter numbers')
  }

}



  

function getValue2() {
  let msg = "";

  msg = document.getElementById("message").value;

  Swal.fire({
    backdrop: false,
    title: "App Name",
    text: msg,
  });
}
