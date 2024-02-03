const questions = ["Wann wurde ich geboren?",
  "Wie heißt mein Vater?",
  "Was ist mein fünfter Name?",
  "Welcher ist mein Lieblingssuperheld?",
  "Wie groß bin ich?"
];
const choicesArray = [
  ["05.11.1997", "11.11.1998", "02.11.1997", "07.11.1998"],
  ["Luiz", "Ricardo", "Miriano", "Mario"],
  ["Ribeiro", "Santiago", "Silva", "Bastos"],
  ["Batman", "Black Panther", "Wolverine", "Spider-Man"],
  ["1.73m", "1.74m", "1.75m", "1.76m"]
];
const correctAnswers = ["02.11.1997", "Mario", "Ribeiro", "Wolverine", "1.74m"];

const backgroundImg = [
  "../img/illustration_01.png",
  "../img/aboutMe_02.jp",
  "../img/aboutMe_03.jp",
  "../img/illustration_04.png",
  "../img/aboutMe_05.jp"
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];

    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
    }

    
    const novaImagem = backgroundImg[currentQuestionIndex];
    document.getElementById('img').src= novaImagem;
  } else {
    document.getElementById('result').innerHTML =
      `You scored ${score} out of ${questions.length}!`;
    document.getElementById('question').innerHTML = "";
    document.getElementById('choices').innerHTML = "";
  }
}


function checkAnswer(button) {
  if (button.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}
displayQuestion();