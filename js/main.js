const riddle = {
  question: "Висит груша нельзя скушать",
  correctAnswer: "лампочка",
  hints: ["это не съедобное", "это не фрукт"],
  tries: 3,
};

window.onload = () => {
  document.getElementById("riddle__question").innerText = riddle.question;
  document.getElementById("attempt").innerText = riddle.tries;

  check = () => {
    const input = document.getElementById("riddle__answer");
    const guessedAnswer = input.value.toLowerCase();
    riddle.tries = riddle.tries - 1;
    document.getElementById("attempt").innerText = riddle.tries;


    if (riddle.tries != 0) {
      if (guessedAnswer.toLowerCase() == riddle.correctAnswer) {
      document.getElementById('victory').classList.toggle('active')
      }else if(riddle.tries == 2){
         document.getElementById('hint-first').classList.toggle('active')
         document.getElementById('hint-first_text').innerText = riddle.hints[0]
         setTimeout(() => {
            document.getElementById('hint-first').classList.toggle('active')
          }, 2000)
      }else if(riddle.tries == 1){
         document.getElementById('hint-second').classList.toggle('active')
         document.getElementById('hint-second_text').innerText = riddle.hints[1]
         setTimeout(() => {
            document.getElementById('hint-second').classList.toggle('active')
          }, 2000)
      }
    } else {
      document.getElementById('loss').classList.toggle('active')
      document.querySelector("button").setAttribute("disabled", "disabled");
    }
  };
};
