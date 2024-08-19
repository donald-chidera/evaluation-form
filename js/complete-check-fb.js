let btn = document.getElementById("next-btn"); 
let errorMessage = document.getElementById("error-message");
  document.getElementById('next-btn').addEventListener('click', function(event) {
    var allAnswered = true;
    var questions = document.querySelectorAll('.question-row');
    
    questions.forEach(function(question) {
      var radioButtons = question.querySelectorAll('input[type="radio"]');
      var answered = false;
      
      radioButtons.forEach(function(radioButton) {
        if (radioButton.checked) {
          answered = true;
        }
      });
      
      if (!answered) {
        allAnswered = false;
      }
    });
    
    if (!allAnswered) {
     /*  alert('Please answer all questions before proceeding.');
      event.preventDefault(); */
      errorMessage.innerHTML = "Please answer all questions";
      errorMessage.style.display = "block";
      setTimeout(function() {
        errorMessage.style.display = "none";
      }, 3000); // 3s
    } else {
      document.location = "courseQuestions.html"; 
    }
  });

