let input = document.getElementById("course");
let btn = document.getElementById("next-btn"); 
let errorMessage = document.getElementById("error-message");

btn.addEventListener("click", function() {
    if (input.value === "") {
      errorMessage.innerHTML = "Please enter a course code";
      errorMessage.style.display = "block";
      setTimeout(function() {
        errorMessage.style.display = "none";
      }, 3000); // 3s
    } else {
      document.location = "instructorname.html"; 
    }
  });
  
